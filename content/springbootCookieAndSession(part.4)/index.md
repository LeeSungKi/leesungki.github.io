---
emoji: 🪼
title: SpringBoot의 로그인 처리 쿠키와 세션(part.4 세션 쿠키 활용)
date: '2023-12-06 20:12:00'
author: 아구
tags: SpringBoot login session cookie 쿠키와세션 세션쿠키를 활용한 로그인처리
categories: SpringBoot
imageUrl: 'springboot.png'
---

## 🎈 로그인 성공 시 세션 쿠키 생성

- 지난 시간에 이어 로그인에 필요한 세션 쿠키를 생성해 보도록 하자.

```java
@PostMapping("/login")
  public String login(@Valid @ModelAttribute LoginForm form, BindingResult
  bindingResult, HttpServletResponse response) {
    if (bindingResult.hasErrors()) {
      return "login/loginForm";
    }
    Member loginMember = loginService.login(form.getLoginId(),
    form.getPassword());
    log.info("login? {}", loginMember);
    if (loginMember == null) {
      bindingResult.reject("loginFail","아이디 또는 비밀번호가 맞지 않습니다.");
      return "login/loginForm";
    }
    //로그인 성공 처리
    //쿠키에 시간 정보를 주지 않으면 세션 쿠키(브라우저 종료시 모두 종료)
    Cookie idCookie = new Cookie("memberId",String.valueOf(loginMember.getId()));
    response.addCookie(idCookie);
    return "redirect:/";
}
```

- 여기서 우리가 집중하여 볼것은 쿠키 생성 로직이다.

### 쿠키 생성 로직

```java
Cookie idCookie = new Cookie("memberId",String.valueOf(loginMember.getId()));
response.addCookie(idCookie);
```

- # 로그인에 성공시 쿠키를 생성하고 `HttpServletResponse`에 담는다. 쿠키의 이름은 `memberId`이고, 값은 회원의 `id`를 담아둔다. 웹 브라우저는 종료 전까지 회원의값(id)를 서버에 지속적으로 보내줄것이다.

### 실행

- 크롬 브라우저를 통해 HTTP 응답 헤더에 쿠키가 추가된 것을 확인할 수 있다.
  ![check_cookie.png](check_cookie.png)

## 🌵 홈화면 로그인처리

1. HomeController

```java
@Slf4j
@Controller
@RequiredArgsConstructor
public class HomeController {
    private final MemberRepository memberRepository;

    //    @GetMapping("/") *주의 기존거 주석처리 안하면 컴파일에러
    public String home() {
      return "home";
    }
    @GetMapping("/")
    public String homeLogin(@CookieValue(name = "memberId", required = false) Long memberId, Model model) {
      if (memberId == null) {
        return "home";
      }
      //로그인
      Member loginMember = memberRepository.findById(memberId);
      if (loginMember == null) {
        return "home";
      }
      model.addAttribute("member", loginMember);
      return "loginHome";
    }
}
```

- 기존 `home()`메소드의 있는 `GetMapping`어노테이션은 꼭 주석처리를 하자.
- `@CookieValue`를 사용하면 편리하게 쿠키를 조회 할 수 있다.
- 로그인 하지 않은 사용자도 홈에 접근할 수 있기 때문에 `required=false`로 해주어야 한다.

### 로직 분석

- 로그인 쿠키(memberId)가 없는 사용자는 home()으로 보내며, 추가로 로그인 쿠키가 있어도 회원이 없다면, home으로 보낸다.
- 로그인 쿠키(memberId)가 있는 사용자는 로그인 사용자 전용 홈 화면인 `loginHome`으로 보낸다. 추가적으로 홈화면에 회원 관련 정보도 출력해 주어야 하기 때문에 member데이터도 모델에 담아서 전달한다.

2. home.html - 로그인 사용자 전용

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
  <head>
    <meta charset="utf-8" />
    <link th:href="@{/css/bootstrap.min.css}" href="../css/bootstrap.min.css" rel="stylesheet" />
  </head>
  <body>
    <div class="container" style="max-width: 600px">
      <div class="py-5 text-center">
        <h2>홈 화면</h2>
      </div>
      <h4 class="mb-3" th:text="|로그인:${member.name}|">로그인 사용자 이름</h4>
      <hr class="my-4" />
      <div class="row">
        <div class="col">
          <button
            class="w-100 btn btn-secondary btn-lg"
            type="button"
            th:onclick="|location.href='@{/items}'|"
          >
            상품 관리
          </button>
        </div>
        <div class="col">
          <form th:action="@{/logout}" method="post">
            <button class="w-100 btn btn-dark btn-lg" type="submit">로그아웃</button>
          </form>
        </div>
      </div>
      <hr class="my-4" />
    </div>
    <!-- /container -->
  </body>
</html>
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

- # 위의 컨트롤러 코드에서 `@ModelAttribute("member")`를 `@ModelAttribute`로 변경해도 결과는 같다. _본인은 대상을 직접 지정함_

4. 회원 가입 뷰 템플릿(html)

```html
<!--templates/members/addMemberForm.html-->
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
  <head>
    <meta charset="utf-8" />
    <link th:href="@{/css/bootstrap.min.css}" href="../css/bootstrap.min.css" rel="stylesheet" />
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
          <p class="field-error" th:each="err : ${#fields.globalErrors()}" th:text="${err}">
            전체 오류 메시지
          </p>
        </div>

        <div>
          <label for="loginId">로그인 ID</label>
          <input
            type="text"
            id="loginId"
            th:field="*{loginId}"
            class="form-control"
            th:errorclass="field-error"
          />
          <div class="field-error" th:errors="*{loginId}" />
        </div>
        <div>
          <label for="password">비밀번호</label>
          <input
            type="password"
            id="password"
            th:field="*{password}"
            class="form-control"
            th:errorclass="field-error"
          />
          <div class="field-error" th:errors="*{password}" />
        </div>
        <div>
          <label for="name">이름</label>
          <input
            type="text"
            id="name"
            th:field="*{name}"
            class="form-control"
            th:errorclass="field-error"
          />
          <div class="field-error" th:errors="*{name}" />
        </div>

        <hr class="my-4" />
        <div class="row">
          <div class="col">
            <button class="w-100 btn btn-primary btn-lg" type="submit">회원가입</button>
          </div>
          <div class="col">
            <button
              class="w-100 btn btn-secondary btn-lg"
              onclick="location.href='items.html'"
              th:onclick="|location.href='@{/}'|"
              type="button"
            >
              취소
            </button>
          </div>
        </div>
      </form>
    </div>
    <!-- /container -->
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
