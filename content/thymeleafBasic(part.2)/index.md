---
emoji: 🪼
title: Thymeleaf-Basic(part.2 타임리프! text? utext??)
date: '2023-12-04 17:48:00'
author: 아구
tags: Thymeleaf basic template engine server 타임리프 표현식
categories: Thymeleaf
imageUrl: 'thymeleaf.png'
---

## 🎈 텍스트

- 타임리프의 가장 기본 기능인 텍스트를 출력하는 기능을 알아보도록 하겠다.

- 타임리프는 기본적으로 HTML 태그 속성에 기능을 정의하여 동작한다. HTML의 콘텐츠에 데이터를 출력할 때는 다음과 같이 `th:text`를 사용하면 된다.
- ex)  `<span th:text="${변수명}`과 같이 사용 할 수 있다.

- HTML 태그의 속성이 아니라 콘텐츠 영역 안에서 직접 데이터를 출력하고 싶다면, 다음과 같이 표현 할 수있다. `[[${변수명}]]`

- 다음은 예제를 통하여 좀 더 자세히 알아보도록 하자.

### 🐠 Controller
``` java
package hello.thymeleaf.basic;
  import org.springframework.stereotype.Controller;
  import org.springframework.ui.Model;
  import org.springframework.web.bind.annotation.GetMapping;
  import org.springframework.web.bind.annotation.RequestMapping;
  @Controller
  @RequestMapping("/basic")
  public class BasicController {
      @GetMapping("/text-basic")
      public String textBasic(Model model) {
          model.addAttribute("data", "Hello Spring!");
          return "basic/text-basic";
      }
}


```

### 🍕 HTML
```html
 <!DOCTYPE html>
  <html xmlns:th="http://www.thymeleaf.org">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
  </head>
<body>
<h1>컨텐츠에 데이터 출력하기</h1>
<ul>
<li>th:text 사용 <span th:text="${data}"></span></li> <li>컨텐츠 안에서 직접 출력하기 = [[${data}]]</li>
  </ul>
  </body>
</html>
```


### 🍔 실행
- 실행 결과를 보면 `${data}`의 값이 모델에 담겨 'Hello Spring!'을 출력하는것을 볼 수 있다.

- 태그 안에서 그리고 태그 밖에서 직접 데이터를 출력할때 역시 정상적으로 출력이 되는 것을 알 수 있는 부분이다.

### Escape

- HTML문서는 `< , >`와 같은 특수 문자를 기반으로 정의가 된다. 따라서 뷰 템플릿으로 HTML 화면을 생성 할 때에는 출력하는 데이터에 이러한 특수 문자가 있는것을 주의하여 사용해야 한다.
  앞에서 만든 예저의 데이터를 다음과 같이 변경해서 실행해 보자.

#### 변경 전
`"Hello Spring!"`

#### 변경 후
`"Hello <b>Spring</b>"`
- `<b>`태그를 사용하여 **Spring!** 이라는 단어가 진하게 나오게 하고 싶다는 가정을 해보자.

- 웹 브라우저에서는 이렇게 출력이 된다. `Hello <b>Spring</b>` 이처럼 태그가 랜더링 되지 않고, 태그 그 자체가 출력이 되어 나온다. 여기서, 소스보기를 누른다면 `Hello &lt;b&gt;Spring!&lt;/b&gt;`라고 출력이되어 나오는 것을 확인 할 수 있다.

- 개발자가 의도한것은 `<b>`태그가 있다면 해당 부분을 강조하는 것이 목적이었다. 그러나 태그가 그대로 출력되어 나오고 소스보기를 하면 괄호의 부분이 문자화되어 나오는것을 볼 수 있다. 그 이유는 다음과 같다.

### 🥟 HTML 엔티티(Entity)
- 웹 브라우저는 괄호의 부분을 HTML태그의 시작으로 인식한다. 따라서 `<`를 태그의 시작이 아닌, 문자로 표현 할 수 있는 방법이 필요한데, 이것을 HTML엔티티라 한다.
- 그리고 이렇게 HTML에서 사용하는 특수 문자를 HTML엔티티로 변경하는 것을 이스케이프(escape)라 한다. 그리고 타임리프가 제공하는 `th:text, 혹은 [[${변수명}]]``은 **기본적으로 이스케이프를 제공**한다.

`참고 : html 엔티티와 관련하여 더 자세한 내용은 구글해볼것.`

## 🍘 타임리프의 Unescape 기능
- 타임리프는 다음과 같이 두 기능을 제공하는데
1. `th:text` -> `th:utext`

2. `[[${...}]]` -> `[(${...})]`
- 위와 같이 사용 할 수 있다.

### 🌭 해당 내용 컨트롤러에 추가
``` java

    @GetMapping("/text-unescaped")
    public String textUnescaped(Model model) {
        model.addAttribute("data", "Hello <b>Spring!</b>");
        return "basic/text-unescaped";
    }
```

## 🍘 추가된 내용을 HTML에서 받을때는~
```html
<!DOCTYPE html>
    <html xmlns:th="http://www.thymeleaf.org">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
<body>
    <h1>text vs utext</h1>
    <ul>
        <li>th:text = <span th:text="${data}"></span></li>
        <li>th:utext = <span th:utext="${data}"></span></li>
    </ul>
    <h1><span th:inline="none">[[...]] vs [(...)]</span></h1>
    <ul>
        <li><span th:inline="none">[[...]] = </span>[[${data}]]</li>
        <li><span th:inline="none">[(...)] = </span>[(${data})]</li>
    </ul>
    </body>
    </html>

```

- `th:inline="none"`: 타임리프는 `[[...]]` 를 해석하기 때문에, 화면에 `[[...]]` 글자를 보여줄 수 없다. 이 태그 안에서는 타임리프가 **해석하지 말라**는 옵션이다.
`출처 ` : [링크](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-2#)
**_part 3 to be continue_** 
