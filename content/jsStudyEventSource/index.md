---
emoji: 🎄
title: SSE(단반향통신) Event Source 처리
date: '2022-03-04 10:36:00'
author: 쩡기
tags: SSE 단반향통신 JS EventSource
categories: JS
imageUrl: 'JS.jpg'
---

## 🎋 SSE(Server-Sent Events)란 무엇인가?

- Server-Sent Events(이하 SSE)는 HTTP 스트리밍을 통해 서버에서 클라이언트로 Push Notification을 할 수 있는 기술이다. HTML5 스펙에 명시된 표준 기술로 JavaScript 에서는 EventSource API를 이용하여 제어가 가능하다. Internet Explorer을 제외한 대부분의 브라우저에서 지원한다.
- 전통적인 웹 애플리케이션이라면 클라이언트의 요청에 대해 서버가 응답하는 방식이지만 SSE를 이용하면 별도의 복잡한 기술이 필요없이 HTTP 프로토콜을 기반으로 서버에서 클라이언트로 Real-Time Push Notification을 전송할 수 있다. 한 번 연결이 맺어지면 클라이언트에 의해 종료될 때까지 서버와의 연결이 유지되며 서버가 원하는 시점에 클라이언트에게 메시지를 전송할 수 있다. 이러한 특징 덕분에 최소한 오버헤드로 모니터링 시스템의 그래프 갱신, 채팅 및 메신저 등 광범위하게 적용할 수 있다.

## Event Source 란 무엇인가?

- EventSource 인터페이스는 server-sent events에 대한 웹 콘텐츠 인터페이스입니다. EventSource 인스턴스는 text/event-stream 포맷으로 이벤트를 보내는 HTTP 서버에 지속적인 연결을 합니다. 연결은EventSource.close() (en-US) 호출로 종료되지 전까지 지속됩니다.
- 연결이 시작되었을 때, 서버로부터 들어오는 메세지들은 이벤트의 형태로 코드에 전달됩니다. 들어온 메시지에 이벤트 필드가 있다면, 트리거된 이벤트는 이벤트 필드의 값과 같게 됩니다. 만약 이벤트 필드가 비어있다면, 그 땐 제네릭 message 이벤트가 발생됩니다.
- 웹소켓과 다르게, server-sent 이벤트는 단방향입니다. 데이터 메시지가 서버에서 클라이언트로 (유저의 웹 브라우저 같은) 한 방향으로 전달되는 것입니다. 이 특징은 클라이언트에서 서버로 메시지 형태로 데이터를 보낼 필요가 없을 때, server-sent 이벤트를 훌륭한 선택으로 만든다. 예를 들어,  EventSource 는 소셜 미디어 상태 업데이트, 뉴스피드나 IndexedDB나 web storage같은 클라이언트-사이드 저장 매커니즘으로 데이터를 전달하는 데 유용한 접근법입니다.

### 📌 개요

나의 경우 vue.js 프로젝트 진행중 단반향 데이터 통신을 사용할 일이 생겼고 백앤드 개발자와 협업하여 진행하였다.

서버에서의 처리는 내가 하지 않았지만 화면단에서의 처리는 event source를 사용하여 진행하였으므로 간단하게 포스팅을 하려한다.

### 🎢 사용방법 
실제 내가 사용했던 방법을 기재한다.

```js
<script src=/eventsource-polyfill.js /> //eventsource polyfill 을위해 추가
import {EventSourcePolyfill} from 'event-source-polyfill'; //eventsource polyfill 을위해 추가

const au = localStorage.getItem('accessToken'); //accessToken 정보
let url = 'http///////'  //요청 url 정보
const es = new EventSourcePolyfill(url,{   //요청시 헤더에 jwt토큰을 담아 보내기위함
        headers:{Authorization:`Bearer ${au}` }
});
es.onmessage = result => {         //emiter로 서버에서 보내주는 message 받을수있다.
    if(this.closeStreaming){       //스트림연결을 당아야할때의 조건을 걸고
    es.close();                    //스트림연결을 닫을수 있다.
    } else {
        const data = JSON.parse(result.data); 
        this.SET_POD_LIST_MUTAION(data);    //서버에서 받은 데이터를 뮤테이션(데이터를 동적으로 변화하기위함)
    }
    };
    es.onerror = err => {           //에러정의
    console.log(err);
    };
});
```

위에서 보다시피 eventsource는 헤더에 정보를 수정할수가 없었다 그리하여 polyfill 라이브러리를 사용
npm 에서 인스톨하여사용하였고 해당 라이브러리고 eventsource요청시에 헤더에 jwt토큰을 담아 요청할수가있었다.

*추가 
로컬에서 요청시에 잘되던게 개발서버에서 안되어서 찾아보니 nginx설정에서 응답 헤더설정을 바꿔줘야 한다.

<br>
<br>


```toc

```
