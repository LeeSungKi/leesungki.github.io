---
emoji: 🪼
title: Thymeleaf-Basic(part.3 SpringEL의 변수와 지역변수 + 객체들)
date: '2023-12-05 17:48:00'
author: 아구
tags: Thymeleaf basic template engine server 타임리프 변수 표현식
categories: Thymeleaf
imageUrl: 'thymeleaf.png'
---

## 🎈 Spring에서 제공하는 SpringEL문법

- 이전 파트에서는 타임리프에 대한 기본 표현식과 변수 표현식들을 알아 보았다. `ex : ${...}`

- 이번 시간에는 변수 표현식에 스프링El이라는 스프링이 제공하는 표현식을 사용해 보도록 하자.
```java
@GetMapping("/variable")
  public String variable(Model model) {
      User userA = new User("userA", 10);
      User userB = new User("userB", 20);
      List<User> list = new ArrayList<>();
      list.add(userA);
      list.add(userB);
      Map<String, User> map = new HashMap<>();
      map.put("userA", userA);
      map.put("userB", userB);
      model.addAttribute("user", userA);
      model.addAttribute("users", list);
      model.addAttribute("userMap", map);
      return "basic/variable";
  }
  @Data //inner class
  static class User {
      private String username;
      private int age;

      public User(String username, int age) {
          this.username = username;
          this.age = age;
        }
    }
```

```html
<!DOCTYPE html>
  <html xmlns:th="http://www.thymeleaf.org">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
  </head>
<body>
<h1>SpringEL 표현식</h1> <ul>Object
      <li>${user.username} =
      <li>${user['username']} = <span th:text="${user['username']}"></span></li>
      <li>${user.getUsername()} = <span th:text="${user.getUsername()}"></span></
  li>
  </ul>
  <ul>List
      <li>${users[0].username}    = <span th:text="${users[0].username}"></span></li>
      <li>${users[0]['username']} = <span th:text="${users[0]['username']}"></span></li>
      <li>${users[0].getUsername()} = <span th:text="${users[0].getUsername()}"></span></li>
  </ul>
  <ul>Map
      <li>${userMap['userA'].username} =  <span th:text="${userMap['userA'].username}"></span></li>
      <li>${userMap['userA']['username']} = <span th:text="${userMap['userA']['username']}"></span></li>
```


## 🐠 SpringEl의 다양한 표현식 사용

### Object
- `user.username = model.addAttribute("user", userA);`가 된다. 즉, 컨트롤러에서 모델객체에 addAttribute에 키값으로 userA라는 객체의 정보가 담아주었다. 이것을 자바에서는 user.getUsername();이런식으로 꺼내쓸수 있는것과 같은 방법이다.
- 또한, 위의 내용을 이렇게도 표현 할 수 있다.`user['username']`
- 위의 사용방법이 조금 어색하다면 이렇게도 직접 호출 할 수 있는데`user.getUsername()`, 이 방법은 추천하지 않는다.

### List
- `users[0].username:` List(즉, 컬렉션객체)는 인덱스값(0)을 직접 줌으로써 해당 객체의 프로퍼티를 불러 올 수 있다.
- 위의 내용을 풀어보면 `list.get(0).getUsername()`이 되는것이다.
- List 역시 다양한 방법으로 호출이 가능하다 `users[0]['username'] = 위와 동일한 내용이다`
- `users[0].getUsername() = List의 첫 번째 회원을 찾고, 메서드를 직접 호출한다.`

### Map
- 맵객체도 여러가지의 방법으로 호출,사용이 가능하다.
- `userMap['userA'].username`은 Map객체에서 userA라는 키에 접근하여 username이라는 value에 접근이 가능하다.
- 위의 내용을 풀어써보면 `map.get("userA"),getUsername()`과 같다.
- `userMap['userA']['username']`역시 위와 마찬가지의 내용이다.
- `userMap['userA'].getUsername()`은 Map에서 userA를 찾고 직접적으로 메서드를 호출할수도 있다.

## 🍕 지역 변수 선언!
- 타임리프에서는 `th:with`를 사용하면 지역 변수를 선언하여 핸들링이 가능한데, 이 지역변수는 태그가 열리는 부분부터 닫히는 부분까지의 태그 범위 안에서만 사용 할 수 있다. (자바의 지역변수와 같은 느낌.)

```html
<!-- 내용추가! -->
<h1>지역 변수 - (th:with)</h1>
<div th:with="first=${users[0]}">
    <p>처음 사람의 이름은 <span th:text="${first.username}"></span></p> 
</div>
```
- 위와같이 th:with을 사용하면 지역 변수명을 선언함과 동시에 대입연산자로 초기화값을 잡아주는 것을 볼 수있다.
- 컨트롤러에서 보내온 객체를 변수에 담아, first.username을 하게 되면 `users`라는 List객체의 0번인덱스를 `getUsername()`이 된다.


## 🍔 기본 객체 사용
- 스프링 부트 3.0이상부터는 기본으로 제공되는 객체를 간편하게 사용 할 수 있다. 기본 객체 =>`request | response | session | servletContext | locale ` & 편의 객체=>`param` 가 있다. 예시를 살펴보도록 하자.

```java
@GetMapping("/basic-objects")
  public String basicObjects(Model model, HttpServletRequest request,
  HttpServletResponse response, HttpSession session) {
      session.setAttribute("sessionData", "Hello Session");
      model.addAttribute("request", request);
      model.addAttribute("response", response);
      model.addAttribute("servletContext", request.getServletContext());
      return "basic/basic-objects";
}
  @Component("helloBean")
  static class HelloBean {
      public String hello(String data) {
          return "Hello " + data;
        } 
    }
```

```html
<!DOCTYPE html>
  <html xmlns:th="http://www.thymeleaf.org">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <h1>기본 객체 (Expression Basic Objects)</h1>
        <ul>
            <li>request = <span th:text="${request}"></span></li>
            <li>response = <span th:text="${response}"></span></li>
            <li>session = <span th:text="${session}"></span></li>
            <li>servletContext = <span th:text="${servletContext}"></span></li>
            <li>locale = <span th:text="${#locale}"></span></li>
        </ul>
        <h1>편의 객체</h1>
        <ul>
            <li>Request Parameter = <span th:text="${param.paramData}"></span></li>
            <li>session = <span th:text="${session.sessionData}"></span></li>
            <li>spring bean = <span th:text="${@helloBean.hello('Spring!')}"></span></li>
        </ul>
    </body>
</html>
```

## 🎄 유틸리티 객체와 날짜
- 타임리프에는 문자,숫자,날짜,그리고 URI등을 편리하게 핸들링 할 수 있는 아주 다양한 유틸객체가 있다.

### 타임리프 유틸리티 객체들
- `#message` : 메세지, 국제화관리
- `#uris` : URI 이스케이프 지원
- `#dates` : java.util.Date의 서식을 지원한다.
- `#calendars` : java.util.Calendar의 서식을 지원한다.
- `#temporals` : 자바8의 날짜 서식을 지원한다.
- `#numbers` : 숫자 서식
- `#strings` : 문자 관련 편의 기능 지원
- `#objects` : 객체 관련 기능 제공
- `#bools` : boolean 관련 기능을 제공
- `#arrays` : 배열 관련 기능 제공
- `#lists,#sets,#maps` : 컬렉션 관련 기능 제공
- `#ids` : 아이디 처리 관련 기능 제공 , 이후 게시글에 설명하도록 하겠다.
#### 타임리프 유틸리티 객체 상세정보 및 객체 예시
- 객체의 정보는 타임리프 공식홈페이지에서 확인이 가능하다 [링크](https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html#expression-utility-objects)
- 각 객체에 대한 예시도 있으니 확인해 보도록 하자! [링크] (https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html#appendix-b-expression-utility-objects)
`ps : 이런 유틸리티 객체들은 대략 이런 것이 있다 알아만 놓고 있어도 된다. 필요할때마다 document를 찾아가며 사용하면 된다.`

**to be continue...**