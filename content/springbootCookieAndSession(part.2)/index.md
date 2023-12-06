---
emoji: 🪼
title: SpringBoot의 로그인 처리 쿠키와 세션(part.2 홈화면 개발)
date: '2023-12-06 20:12:00'
author: 아구
tags: SpringBoot login session cookie 쿠키와세션 로그인처리
categories: SpringBoot
imageUrl: 'springboot.png'
---

## 🎈 Start SpringBoot project 
  - 이클립스(혹은 sts4)를 쓰고있다면 new project -> Spring Starter Project로 생성!
  - intellij를 사용한다면 [start.spring.io](https://start.spring.io/)에서 프로젝트를 생성하자.
  - 의존성 추가는 **lombok**과 **spring Web, thymeleaf, validation**을 추가해주고 임포트 혹은 다운을 받아 프로젝트를 실행!
  - build.gradle에 의존성 추가가 되었는지 확인!
```properties

  mplementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
	implementation 'org.springframework.boot:spring-boot-starter-validation'
	implementation 'org.springframework.boot:spring-boot-starter-web'
	compileOnly 'org.projectlombok:lombok'
	annotationProcessor 'org.projectlombok:lombok'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'

```
=====

## 🌵 홈 화면 개발
1. HomeController
  ```java
    @GetMapping("/")
    public String home() {
        return "home";
    }
  ```
2. home.html
  ```html
  <!DOCTYPE HTML>
  <html xmlns:th="http://www.thymeleaf.org">
  <head>
  <meta charset="utf-8">
  <link th:href="@{/css/bootstrap.min.css}"
            href="css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
  <div class="container" style="max-width: 600px">
      <div class="py-5 text-center">
  <h2>홈 화면</h2> </div>
      <div class="row">
          <div class="col">
              <button class="w-100 btn btn-secondary btn-lg" type="button"
                      th:onclick="|location.href='@{/members/add}'|">회원 가입</button>
          </div>
          <div class="col">
              <button class="w-100 btn btn-dark btn-lg" onclick="location.href='items.html'"
               th:onclick="|location.href='@{/login}'|" type="button">로그인</button>
          </div>
  </div>
      <hr class="my-4">
  </div> <!-- /container -->
  </body>
  </html>
  ```
3. 회원 가입
```java
//Member Entity객체
@Data
  public class Member {
      private Long id;
      @NotEmpty
private String loginId; //로그인 ID @NotEmpty
privateStringname;//사용자 이름 @NotEmpty
private String password;
}

```

```java
//Repository 객체
/**
* 동시성 문제가 고려되어 있지 않음, 실무에서는 ConcurrentHashMap, AtomicLong 사용 고려
*/
  @Slf4j
  @Repository
  public class MemberRepository {
    private static Map<Long, Member> store = new HashMap<>(); //static 사용
    private static long sequence = 0L; //static 사용

    public Member save(Member member) {
      member.setId(++sequence);
      log.info("save: member={}", member);
      store.put(member.getId(), member);
      return member;
    }
    public Member findById(Long id) {
        return store.get(id);
    }
    public Optional<Member> findByLoginId(String loginId) {
      return findAll().stream()
            .filter(m -> m.getLoginId().equals(loginId))
            .findFirst();
    }
    public List<Member> findAll() {
      return new ArrayList<>(store.values());
    }
    public void clearStore() {
      store.clear();
    } 
  }

```

```java
//Contoller
@Controller
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {
  private final MemberRepository memberRepository;
  @GetMapping("/add")
  public String addForm(@ModelAttribute("member") Member member) {
      return "members/addMemberForm";
  }
  @PostMapping("/add")
  public String save(@Valid @ModelAttribute Member member, BindingResult result) {
    if (result.hasErrors()) {
      return "members/addMemberForm";
    }
    memberRepository.save(member);
    return "redirect:/";
  }
}
```
- 위의 컨트롤러 코드에서 `@ModelAttribute("member")`를 `@ModelAttribute`로 변경해도 결과는 같다. *본인은 대상을 직접 지정함*
=====

4. 회원 가입 뷰 템플릿(html)
```html
<!--templates/members/addMemberForm.html-->
<!DOCTYPE HTML>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="utf-8">
    <link th:href="@{/css/bootstrap.min.css}"
          href="../css/bootstrap.min.css" rel="stylesheet">
    <style>
        .container {
            max-width: 560px;
        }
        .field-error {
            border-color: #dc3545;
            color: #dc3545;
        }
    </style>
</head>
<body>
<div class="container">
<div class="py-5 text-center">
  <h2>회원 가입</h2>
</div>
<h4 class="mb-3">회원 정보 입력</h4>
  <form action="" th:action th:object="${member}" method="post">
    <div th:if="${#fields.hasGlobalErrors()}">
      <p class="field-error" th:each="err : ${#fields.globalErrors()}" th:text="${err}">전체 오류 메시지</p>
    </div>

<div>  
  <label for="loginId">로그인 ID</label>
  <input type="text" id="loginId" th:field="*{loginId}" class="form-control" th:errorclass="field-error">
    <div class="field-error" th:errors="*{loginId}" /></div>
    <div>
      <label for="password">비밀번호</label>
        <input type="password" id="password" th:field="*{password}" class="form-control" th:errorclass="field-error">
          <div class="field-error" th:errors="*{password}" /></div>
          <div>
            <label for="name">이름</label>
            <input type="text" id="name" th:field="*{name}" class="form-control" th:errorclass="field-error">
            <div class="field-error" th:errors="*{name}" /></div>

      <hr class="my-4">
      <div class="row">
        <div class="col">
          <button class="w-100 btn btn-primary btn-lg" type="submit">회원가입</button>
        </div>
          <div class="col">
            <button class="w-100 btn btn-secondary btn-lg"
              onclick="location.href='items.html'"
              th:onclick="|location.href='@{/}'|" type="button">취소
            </button>
        </div>
    </div>
</form>
</div> <!-- /container -->
</body>
</html>
```
**실행 결과를 로그로 확인**

## 회원용 테스트 데이터 추가하기!
- test편의를 위해 회원의 데이터를 임의로 추가해보겠다.
```java
//id:test p/w:test! name:테스터  TestDataInit.java
  @Component
  @RequiredArgsConstructor
  public class TestDataInit {
      private final ItemRepository itemRepository;
      private final MemberRepository memberRepository;
/**
* 테스트용 데이터 추가
*/
      @PostConstruct
      public void init() {
          itemRepository.save(new Item("itemA", 10000, 10));
          itemRepository.save(new Item("itemB", 20000, 20));
          Member member = new Member();
          member.setLoginId("test");
          member.setPassword("test!"); member.setName("테스터");
          memberRepository.save(member);
      }
  } 

```

**to be continue...(로그인 기능 개발)**