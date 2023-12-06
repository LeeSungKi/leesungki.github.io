---
emoji: 🪼
title: Thymeleaf-Basic(part.4 유틸객체와 사용법)
date: '2023-12-06 16:32:00'
author: 아구
tags: Thymeleaf basic template engine server 타임리프 유틸리티 표현식
categories: Thymeleaf
imageUrl: 'thymeleaf.png'
---

## 🎈 자바 8에서 제공되는 날짜객체들

- 타임리프에서는 자바8버전부터 제공되는 날짜객체인 `LocalDate, LocalDateTime, Instant`를 사용하려면 추가 라이브러리가 필요하지만, 스프링 부트에서 타임리프를 사용한다면, 해당 라이브러리가 자동으로 추가되며 통합된다.

- 저번시간에 소개된 유틸리티 객체들에 사용방법에 대해 알아보도록 하자!

### 타임리프 자바8 날짜 지원 라이브러리
- `thymeleaf-extras-java8time`이 해결해주는데, 이와같이 자바8의 날짜용 유틸리티 객체들의 사용예시를 한번 보도록하자.`#temporals`
```html

  <span th:text="${#temporals.format(localDateTime, 'yyyy-MM-dd HH:mm:ss')}"></span>
```
```java
//컨트롤러에 해당 내용을 추가해보자.
    @GetMapping("/date")
    public String date(Model model) {
      model.addAttribute("localDateTime", LocalDateTime.now());
      return "basic/date";
    }

```
`/resources/templates/basic/date.html`
```html
 <!DOCTYPE html>
  <html xmlns:th="http://www.thymeleaf.org">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
  </head>
<body>
  <h1>LocalDateTime</h1>
  <ul>
      <li>default = <span th:text="${localDateTime}"></span></li>
      <li>yyyy-MM-dd HH:mm:ss = <span th:text="${#temporals.format(localDateTime,
  'yyyy-MM-dd HH:mm:ss')}"></span></li>
  </ul>
  <h1>LocalDateTime - Utils</h1>
  <ul>
      <li>${#temporals.day(localDateTime)} = <span th:text="$
  {#temporals.day(localDateTime)}"></span></li>
<li>${#temporals.month(localDateTime)} = <span th:text="${#temporals.month(localDateTime)}"></span></li>
      <li>${#temporals.monthName(localDateTime)} = <span th:text="$
  {#temporals.monthName(localDateTime)}"></span></li>
      <li>${#temporals.monthNameShort(localDateTime)} = <span th:text="$
  {#temporals.monthNameShort(localDateTime)}"></span></li>
      <li>${#temporals.year(localDateTime)} = <span th:text="$
  {#temporals.year(localDateTime)}"></span></li>
      <li>${#temporals.dayOfWeek(localDateTime)} = <span th:text="$
  {#temporals.dayOfWeek(localDateTime)}"></span></li>
      <li>${#temporals.dayOfWeekName(localDateTime)} = <span th:text="$
  {#temporals.dayOfWeekName(localDateTime)}"></span></li>
      <li>${#temporals.dayOfWeekNameShort(localDateTime)} = <span th:text="$
  {#temporals.dayOfWeekNameShort(localDateTime)}"></span></li>
      <li>${#temporals.hour(localDateTime)} = <span th:text="$
  {#temporals.hour(localDateTime)}"></span></li>
      <li>${#temporals.minute(localDateTime)} = <span th:text="$
  {#temporals.minute(localDateTime)}"></span></li>
      <li>${#temporals.second(localDateTime)} = <span th:text="$
  {#temporals.second(localDateTime)}"></span></li>
      <li>${#temporals.nanosecond(localDateTime)} = <span th:text="$
  {#temporals.nanosecond(localDateTime)}"></span></li>
  </ul>
  </body>
  </html>
```


## 🐠 URL 링크 사용법
- 타임리프에서는 URL을 생성하거나 요청을 보낼때 사용하는 문법이 있다. 아래에는 `@{...}`문법의 예시를 통해 자세한 사용 방법을 알아보도록 하자!
```java
//컨트롤러에 해당내용을 추가!
 @GetMapping("/link")
  public String link(Model model) {
      model.addAttribute("param1", "data1");
      model.addAttribute("param2", "data2");
      return "basic/link";
  }
```
```html
<!--link.html생성후 해당 내용 추가!-->
<!DOCTYPE html>
  <html xmlns:th="http://www.thymeleaf.org">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
  </head>
<body>
<h1>URL 링크</h1>
  <ul>
      <li><a th:href="@{/hello}">basic url</a></li>
      <li><a th:href="@{/hello(param1=${param1}, param2=${param2})}">hello query param</a></li>
      <li><a th:href="@{/hello/{param1}/{param2}(param1=${param1}, param2=${param2})}">
        path variable</a></li>
      <li><a th:href="@{/hello/{param1}(param1=${param1}, param2=${param2})}">
        path variable + query parameter</a></li>
  </ul>
  </body>
  </html>
```
### 단순한 URL?
- `@{/hello}`라고 입력을하면, 요청url이 /hello로 전달이 되고, 해당 매핑이 되어있는 컨트롤러의 메소드를 호출하게된다.

### 쿼리 파라미터?
- `@{/hello(param1=${param1}, param2=${param2})}` 라고 입력을 하게되면 다음과 같은 url이 전달되게 된다.`/hello?param1=data1&param2=data2`와 같이 된다. 
- 괄호()안의 내용이 쿼리파라미터로 처리되어 나가는 것을 볼 수 있다.
- 위의 내용처럼 요청 url을 동적으로 뿌릴 때 상당히 강력한 이점을 볼 수 있는데 여러개의 데이터를 담아 처리도 가능하니 꼭! 유용하게 사용하도록 하자!

### 경로 변수?
- URL의 경로상에 만약 변수가 있다면 ()괄호처리로 변수를 처리 할 수 있다.
- `@{/hello/{param1}/{param2}(param1=${param1}, param2=${param2})}`
- 위의 코드를 살펴보면 hello/옆에 {param1}은 변수로 할당되고 ()괄호안의 내용이 실제 값이 대입되는것을 알 수 있다.

### 경로 변수와 쿼리 파라미터를 동시에?
- 만약 요청 url에 경로변수와 쿼리 파라미터가 동시에 필요하다면, 이 역시 강력한 타임리프의 기능을 활용 할 수 있다.
- `@{/hello/{param1}(param1=${param1}, param2=${param2})}` 는
- 위의 코드의 요청 url은 `/hello/data1?param2=data2` 이렇게 변경되어 컨트롤러까지 날아간다.

- 또한 상대경로, 절대경로,그리고 프로토콜의 기준도 표현할 수 있다.
- `/hello`:절대경로   `hello`:상대경로
`참고:`[링크](https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html#link-urls)


## 🍕 리터럴(Literals)
- 리터럴은 소스 코드상에서 고정된 값을 일컫는 용어인데, 예를들어
```java
String a= "Hello";
int a =10 * 20;
```
- 위의 코드에서 "Hello"는 문자의 리터럴 10과 20은 숫자의 리터럴이다.
- 뜬금없이 이 쉬운내용을 왜 소개하는가에 대한 궁금증이 있을것이다. 그러나 타임리프를 처음 접하는 상황이라면 해당내용에서 많은 실수가 나오니 한번 확인 해보도록 하자.
- 타임리프에는 다음과 같은 리터럴이 있다.
1. 문자 : 'hello'
2. 숫자 : 10
3. 논리(boolean) : true,false
4. null : null

- 이를 언급한 이유는 다음과 같다.
- 타임리프의 문자 리터럴은 **항상 홑따옴표(single quotation)**`'`로 감싸줘야한다. 예를들면
- `<p th:text="'hello'"> </p>`

- 그렇지만.. 문자를 항상 홑따옴표로 감싼다는 것은 코드짬에 있어서 너무나도 귀찮은 일이 아닐 수 없다.
- 공백이 없이 쭉 이어진다면 하나의 의미있는 토큰으로 인지하여 다음과 같이 홑따옴표를 생략할수 있게된다.
- `룰: A-Z, a-z, 0-9, [], ., -, _`
- ex `<span th:text="hello"> = O  <span th:text="hello world!!"> = X`
- 위의 예시를 보면, hello를 했을때는 에러없이 정상 동작을 하게 된다. 그러나, 공백도있고 느낌표도 붙어있는 스팬태그는 시뻘건 글씨를 확인 할 수 있다. 
- 문자 리터럴은 원칙상 홑따옴표로 감싸줘야 한다. 중간에 공백이 있어서 하나의 의미있는 토큰으로도 인식되지 않기 때문이다.
- 만약 hello world!!를 출력하고싶다면 `<span th:text="'hello world!!'">`와 같이 문자열로 인식 시켜주어야 한다.
- 해당 내용은 타임리프를 처음 접한 나에게 있어서 상당히 놓치기 쉬운 내용이였다. 조심하길 바란다!

### 리터럴 처리 예시
```java
//해당 내용을 컨트롤러에 추가!
  @GetMapping("/literal")
  public String literal(Model model) {
      model.addAttribute("data", "Spring!");
      return "basic/literal";
  }

```

```html
<!--literal.html을 생성하고 해당내용을 추가!-->
<!DOCTYPE html>
  <html xmlns:th="http://www.thymeleaf.org">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
  </head>
<body> <h1>리터럴</h1>
<ul>
<!--주의! 다음 주석을 풀면 예외가 발생함-->
  <!--    <li>"hello world!" = <span th:text="hello world!"></span></li>-->
  <li>'hello' + ' world!' = <span th:text="'hello' + ' world!'"></span></li>
  <li>'hello world!' = <span th:text="'hello world!'"></span></li>
  <li>'hello ' + ${data} = <span th:text="'hello ' + ${data}"></span></li> 
  <li>리터럴 대체 |hello ${data}| = <span th:text="|hello ${data}|"></span></li>
  </ul>
  </body>
</html>

```
### 리터럴 대체(Literal subsitutions)?
- 위의 코드에서 마지막 리터럴 대체 문법을 살펴보면 ||로 감싸 마치 템플릿을 사용하는 것 처럼 편리하게 할 수 있다.

**to be continue...(타임리프의 연산)**