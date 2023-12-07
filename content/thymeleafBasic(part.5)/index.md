---
emoji: 🪼
title: Thymeleaf-Basic(part.5 타임리프의 연산)
date: '2023-12-07 17:32:00'
author: 아구
tags: Thymeleaf basic template engine server 타임리프 연산
categories: Thymeleaf
imageUrl: 'thymeleaf.png'
---

## 🎈 연산

- 타임리프에서의 연산은 자바와 크게 다르지 않다. 다만 HTML안에서 사용되기 때문에 **`HTML ENTITY`**를 사용하는 부분에서만 주의하면 된다.

  ### BasicController에 추가

  ```java
  @GetMapping("/operation")
  public String operation(Model model) {
      model.addAttribute("nullData", null);
      model.addAttribute("data", "Spring!");
      return "basic/operation";
  }
  ```

  ### operation.html

  ```html
  <!DOCTYPE html>
  <html xmlns:th="http://www.thymeleaf.org">
    <head>
      <meta charset="UTF-8" />
      <title>Title</title>
    </head>
    <body>
      <ul>
        <li>
          산술 연산
          <ul>
            <li>10 + 2 = <span th:text="10 + 2"></span></li>
            <li>10 % 2 == 0 = <span th:text="10 % 2 == 0"></span></li>
          </ul>
        </li>
        <li>
          비교 연산
          <ul>
            <li>1 > 10 = <span th:text="1 &gt; 10"></span></li>
            <li>1 gt 10 = <span th:text="1 gt 10"></span></li>
            <li>1 >= 10 = <span th:text="1 >= 10"></span></li>
            <li>1 ge 10 = <span th:text="1 ge 10"></span></li>
            <li>1 == 10 = <span th:text="1 == 10"></span></li>
            <li>1 != 10 = <span th:text="1 != 10"></span></li>
          </ul>
        </li>
        <li>
          조건식
          <ul>
            <li>
              (10 % 2 == 0)? '짝수':'홀수' = <span th:text="(10 % 2 == 0)? '짝수':'홀수'"></span>
            </li>
          </ul>
        </li>
        <li>
          Elvis 연산자
          <ul>
            <li>
              ${data}?:'데이터가 없습니다.'=<span th:text="${data}?:'데이터가 없습니다.'"></span>
            </li>
            <li>
              ${nullData}?:'데이터가 없습니다.'=<span
                th:text="${nullData}?: '데이터가 없습니다.'"
              ></span>
            </li>
          </ul>
        </li>
        <li>
          No-Operation
          <ul>
            <li>${data}?:_=<span th:text="${data}?:_">데이터가 없습니다.</span></li>
            <li>${nullData}?: _ = <span th:text="${nullData}?: _">데이터가 없습니다.</span></li>
          </ul>
        </li>
      </ul>
    </body>
  </html>
  ```

  - **비교 연산** : HTML 엔티티를 사용해야 하는 부분을 정말 주의해야한다. 참고로 필자는 초반에 이러한 문제로 상당히 난항을 겪었다...ㅋㅋ 타임리프에 익숙치 않은 사용자라면 유의해야겠다.
    - `>`=gt , `<`=lt , `>=`=ge , `<=`=le , `!`=not , `==`=eq , `!=`=neq,ne
  - **조건식** : 자바의 조건식과 유사하다. **`<span th:text="(10 % 2 == 0)? '짝수':'홀수'">`**처럼 삼항연산이 가능하다.(강력한 기능이다. 사용 할 일이 많아질듯 하다.)
  - **Elvis연산** : 조건식의 편의성을 업그레이드한 느낌이다.
  - **No-Operation** : `_`언더바로 마치 타임리프가 작동하지 않는 것 처럼 동작하게 한다. 이것을 잘 활용하면 HTML태그에 내용을 그대로 활용 할 수 있다. 그래서 마지막의 예를 보면 `데이터가 없습니다.`의 부분이 그대로 출력 되는 것을 볼 수 있다!

## 🐠 속성 값 설정

**타임리프 태그 속성(Attribute)** - 타임리프는 주로 HTML 태그에 `th:*`속성을 지정하는 방식으로 동작하며 `th:*`\*뒤에 메소드를 호출하는 것처럼 보인다. 이것을 속성이라하며 이 속성을 적용하면 기존 HTML의 속성을 대체한다. 기존 속성이 없으면 새로 만든다.

### BasicController에 추가

```java
@GetMapping("/attribute")
public String attribute() {
    return "basic/attribute";
}
```

### attribute.html

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <h1>속성 설정</h1>
    <input type="text" name="mock" th:name="userA" />
    <h1>속성 추가</h1>
    - th:attrappend = <input type="text" class="text" th:attrappend="class=' large'" /><br />
    - th:attrprepend = <input type="text" class="text" th:attrprepend="class='large '" /><br />
    - th:classappend = <input type="text" class="text" th:classappend="large" / ><br />
    <h1>checked 처리</h1>
    - checked o <input type="checkbox" name="active" th:checked="true" /><br />
    - checked x <input type="checkbox" name="active" th:checked="false" /><br />
    - checked=false <input type="checkbox" name="active" checked="false" /><br />
  </body>
</html>
```

### 속성 설정

- `th:*` 속성을 지정하면, 타임리프는 기존 속성을 `th:*`로 지정한 속성으로 대체한다. 기존의 속성이 없다면 새로 만든다.
  - #### `<input type="text" name="mock" th:name="userA" />`
  - #### ==> 타임리프 랜더링 후 `<input type="text" name="userA" />`

### 속성 추가

- `th:attrappend` : 속성 값의 뒤에 값을 추가한다.
- `th:attrprepend` : 속성 값의 앞에 값을 추가한다.
- `th:classappend` : class 속성에 자연스럽게 추가한다.

### checked 처리

- HTML에서는 `<input type="checkbox" name="active" checked="false" />` -> 이 경우에도 checked속성이 있기 때문에 웹 브라우저에서 실행시켜보면 체크가 되어있는걸로 처리가 된다.
- 따라서 HTML에는 `checked`속성은 속성의 값과 상관없이 `checked`라는 속성만 있어도 체크가 되는데, 이런 부분이 `true or flase`의 값만 주로 사용하는 개발자의 입장에서는 상당히 불편하게 느껴진다.
- 그래서 친절한 타임리프의 `th:checked` 개발자에게 상당히 상냥한 부분을 제공하는데, `true`인 경우 체크박스에 체크가 되며, `false`인 경우 반대로 체크해제를 시켜준다.**(즉 true=checked, false=속성자체가 없다.)**

## 반복문

- 자바에서 컬렉션객체(List,Set,Map등)을 사용할때 for each로 반복문을 돌려가며 데이터를 뽑아본 기억이 있을것이다.
- 타임리프에는 이러한 반복문을 제공하는데 그것이 바로 `th:each`이다. 이것을 사용하면 반복하면서 사용 할 수 있는 여러 상태값을 제공해준다.
- 지금부터 하나하나 알아보도록 하겠다.

### BasicController에 추가

```java
@GetMapping("/each")
  public String each(Model model) {
      addUsers(model);
      return "basic/each";
  }
  private void addUsers(Model model) {
      List<User> list = new ArrayList<>();
      list.add(new User("userA", 10));
      list.add(new User("userB", 20));
      list.add(new User("userC", 30));
      model.addAttribute("users", list);
  }

```

### ./basic/each.html

```html
<html xmlns:th="http://www.thymeleaf.org">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <h1>기본 테이블</h1>
    <table border="1">
      <tr>
        <th>username</th>
        <th>age</th>
      </tr>
      <tr th:each="user : ${users}">
        <td th:text="${user.username}">username</td>
        <td th:text="${user.age}">0</td>
      </tr>
    </table>
    <h1>반복 상태 유지</h1>
    <table border="1">
      <tr>
        <th>count</th>
        <th>username</th>
        <th>age</th>
        <th>etc</th>
      </tr>
      <tr th:each="user, userStat : ${users}">
        <td th:text="${userStat.count}">username</td>
        <td th:text="${user.username}">username</td>
        <td th:text="${user.age}">0</td>
        <td>
          index = <span th:text="${userStat.index}"></span> count =
          <span th:text="${userStat.count}"></span> size =
          <span th:text="${userStat.size}"></span> even? =
          <span th:text="${userStat.even}"></span> odd? =
          <span th:text="${userStat.odd}"></span> first? =
          <span th:text="${userStat.first}"></span> last? =
          <span th:text="${userStat.last}"></span> current =
          <span th:text="${userStat.current}"></span>
        </td>
      </tr>
    </table>
  </body>
</html>
```

### 반복 기능 `<tr th:each="user : ${users}"`

  - 반복 시 오른쪽 컬렉션`즉${users}`의 값을 하나씩 꺼내 왼쪽의 변수`즉,user`에 담아 태그를 반복 실행하는 명령어가 된다.
  - th:each는 List뿐만 아니라, 배열, `java.util.Iterable`,`java.util.Enumeration`을 구현한 모든 객체를 반혹하는대에 사용 할 수 있다.
  - Map객체 또한 사용 할 수 있는데 이 경우에는 변수에 담기는 값은 `Map.Entry`이다.



### 반복 상태 유지

  - `<tr th:each="user, userStat : ${users}">`
  - 반복의 두번째 파라미터를 설정해서 반복의 상태를 확인 할 수 있다.
  - 두번째 파라미터는 생략 가능한데, 생략하면 지정한 변수명( user ) + Stat 가 된다. 여기서는 user + Stat = userStat 이므로 생략 가능하다.

### 반복 상태 유지 기능

  - `index` : 0의 인덱스 부터 시작하는 값
  - `count` : 1의 인덱스부터 시작하는 값
  - `size` : 해당 객체의 전체 사이즈
  - `even`,`odd` : 홀수,짝수여부를 `boolean`타입으로 반환
  - `first`,`last` : 처음과 마지막의 여부를 `boolean`타입으로 반환
  - `current` : 현재 객체

  `참고 : 해당 기능의 상세한 설명은 직접 코드를 짜서 눈으로 확인 하거나, 타임리프 공식 도큐파일을 찾아보면 좋을듯 하다.`

**to be continue...(타임리프의 조건부 평가)**
