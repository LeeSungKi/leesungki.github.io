---
emoji: ๐
title: SSE(๋จ๋ฐํฅํต์ ) Event Source ์ฒ๋ฆฌ
date: '2022-03-04 10:36:00'
author: ์ฉก๊ธฐ
tags: SSE ๋จ๋ฐํฅํต์  JS EventSource
categories: JS
imageUrl: 'JS.jpg'
---

## ๐ SSE(Server-Sent Events)๋ ๋ฌด์์ธ๊ฐ?

- Server-Sent Events(์ดํ SSE)๋ HTTP ์คํธ๋ฆฌ๋ฐ์ ํตํด ์๋ฒ์์ ํด๋ผ์ด์ธํธ๋ก Push Notification์ ํ  ์ ์๋ ๊ธฐ์ ์ด๋ค. HTML5 ์คํ์ ๋ช์๋ ํ์ค ๊ธฐ์ ๋ก JavaScript ์์๋ EventSource API๋ฅผ ์ด์ฉํ์ฌ ์ ์ด๊ฐ ๊ฐ๋ฅํ๋ค. Internet Explorer์ ์ ์ธํ ๋๋ถ๋ถ์ ๋ธ๋ผ์ฐ์ ์์ ์ง์ํ๋ค.
- ์ ํต์ ์ธ ์น ์ ํ๋ฆฌ์ผ์ด์์ด๋ผ๋ฉด ํด๋ผ์ด์ธํธ์ ์์ฒญ์ ๋ํด ์๋ฒ๊ฐ ์๋ตํ๋ ๋ฐฉ์์ด์ง๋ง SSE๋ฅผ ์ด์ฉํ๋ฉด ๋ณ๋์ ๋ณต์กํ ๊ธฐ์ ์ด ํ์์์ด HTTP ํ๋กํ ์ฝ์ ๊ธฐ๋ฐ์ผ๋ก ์๋ฒ์์ ํด๋ผ์ด์ธํธ๋ก Real-Time Push Notification์ ์ ์กํ  ์ ์๋ค. ํ ๋ฒ ์ฐ๊ฒฐ์ด ๋งบ์ด์ง๋ฉด ํด๋ผ์ด์ธํธ์ ์ํด ์ข๋ฃ๋  ๋๊น์ง ์๋ฒ์์ ์ฐ๊ฒฐ์ด ์ ์ง๋๋ฉฐ ์๋ฒ๊ฐ ์ํ๋ ์์ ์ ํด๋ผ์ด์ธํธ์๊ฒ ๋ฉ์์ง๋ฅผ ์ ์กํ  ์ ์๋ค. ์ด๋ฌํ ํน์ง ๋๋ถ์ ์ต์ํ ์ค๋ฒํค๋๋ก ๋ชจ๋ํฐ๋ง ์์คํ์ ๊ทธ๋ํ ๊ฐฑ์ , ์ฑํ ๋ฐ ๋ฉ์ ์  ๋ฑ ๊ด๋ฒ์ํ๊ฒ ์ ์ฉํ  ์ ์๋ค.

## Event Source ๋ ๋ฌด์์ธ๊ฐ?

- EventSource ์ธํฐํ์ด์ค๋ server-sent events์ ๋ํ ์น ์ฝํ์ธ  ์ธํฐํ์ด์ค์๋๋ค. EventSource ์ธ์คํด์ค๋ text/event-stream ํฌ๋งท์ผ๋ก ์ด๋ฒคํธ๋ฅผ ๋ณด๋ด๋ HTTP ์๋ฒ์ ์ง์์ ์ธ ์ฐ๊ฒฐ์ ํฉ๋๋ค. ์ฐ๊ฒฐ์EventSource.close() (en-US) ํธ์ถ๋ก ์ข๋ฃ๋์ง ์ ๊น์ง ์ง์๋ฉ๋๋ค.
- ์ฐ๊ฒฐ์ด ์์๋์์ ๋, ์๋ฒ๋ก๋ถํฐ ๋ค์ด์ค๋ ๋ฉ์ธ์ง๋ค์ ์ด๋ฒคํธ์ ํํ๋ก ์ฝ๋์ ์ ๋ฌ๋ฉ๋๋ค. ๋ค์ด์จ ๋ฉ์์ง์ ์ด๋ฒคํธ ํ๋๊ฐ ์๋ค๋ฉด, ํธ๋ฆฌ๊ฑฐ๋ ์ด๋ฒคํธ๋ ์ด๋ฒคํธ ํ๋์ ๊ฐ๊ณผ ๊ฐ๊ฒ ๋ฉ๋๋ค. ๋ง์ฝ ์ด๋ฒคํธ ํ๋๊ฐ ๋น์ด์๋ค๋ฉด, ๊ทธ ๋ ์ ๋ค๋ฆญ message ์ด๋ฒคํธ๊ฐ ๋ฐ์๋ฉ๋๋ค.
- ์น์์ผ๊ณผ ๋ค๋ฅด๊ฒ, server-sent ์ด๋ฒคํธ๋ ๋จ๋ฐฉํฅ์๋๋ค. ๋ฐ์ดํฐ ๋ฉ์์ง๊ฐ ์๋ฒ์์ ํด๋ผ์ด์ธํธ๋ก (์ ์ ์ ์น ๋ธ๋ผ์ฐ์  ๊ฐ์) ํ ๋ฐฉํฅ์ผ๋ก ์ ๋ฌ๋๋ ๊ฒ์๋๋ค. ์ด ํน์ง์ ํด๋ผ์ด์ธํธ์์ ์๋ฒ๋ก ๋ฉ์์ง ํํ๋ก ๋ฐ์ดํฐ๋ฅผ ๋ณด๋ผ ํ์๊ฐ ์์ ๋, server-sent ์ด๋ฒคํธ๋ฅผ ํ๋ฅญํ ์ ํ์ผ๋ก ๋ง๋ ๋ค. ์๋ฅผ ๋ค์ด,  EventSource ๋ ์์ ๋ฏธ๋์ด ์ํ ์๋ฐ์ดํธ, ๋ด์คํผ๋๋ IndexedDB๋ web storage๊ฐ์ ํด๋ผ์ด์ธํธ-์ฌ์ด๋ ์ ์ฅ ๋งค์ปค๋์ฆ์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ์ ๋ฌํ๋ ๋ฐ ์ ์ฉํ ์ ๊ทผ๋ฒ์๋๋ค.

### ๐ ๊ฐ์

๋์ ๊ฒฝ์ฐ vue.js ํ๋ก์ ํธ ์งํ์ค ๋จ๋ฐํฅ ๋ฐ์ดํฐ ํต์ ์ ์ฌ์ฉํ  ์ผ์ด ์๊ฒผ๊ณ  ๋ฐฑ์ค๋ ๊ฐ๋ฐ์์ ํ์ํ์ฌ ์งํํ์๋ค.

์๋ฒ์์์ ์ฒ๋ฆฌ๋ ๋ด๊ฐ ํ์ง ์์์ง๋ง ํ๋ฉด๋จ์์์ ์ฒ๋ฆฌ๋ event source๋ฅผ ์ฌ์ฉํ์ฌ ์งํํ์์ผ๋ฏ๋ก ๊ฐ๋จํ๊ฒ ํฌ์คํ์ ํ๋ คํ๋ค.

### ๐ข ์ฌ์ฉ๋ฐฉ๋ฒ 
์ค์  ๋ด๊ฐ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ ๊ธฐ์ฌํ๋ค.

```js
<script src=/eventsource-polyfill.js /> //eventsource polyfill ์์ํด ์ถ๊ฐ
import {EventSourcePolyfill} from 'event-source-polyfill'; //eventsource polyfill ์์ํด ์ถ๊ฐ

const au = localStorage.getItem('accessToken'); //accessToken ์ ๋ณด
let url = 'http///////'  //์์ฒญ url ์ ๋ณด
const es = new EventSourcePolyfill(url,{   //์์ฒญ์ ํค๋์ jwtํ ํฐ์ ๋ด์ ๋ณด๋ด๊ธฐ์ํจ
        headers:{Authorization:`Bearer ${au}` }
});
es.onmessage = result => {         //emiter๋ก ์๋ฒ์์ ๋ณด๋ด์ฃผ๋ message ๋ฐ์์์๋ค.
    if(this.closeStreaming){       //์คํธ๋ฆผ์ฐ๊ฒฐ์ ๋น์์ผํ ๋์ ์กฐ๊ฑด์ ๊ฑธ๊ณ 
    es.close();                    //์คํธ๋ฆผ์ฐ๊ฒฐ์ ๋ซ์์ ์๋ค.
    } else {
        const data = JSON.parse(result.data); 
        this.SET_POD_LIST_MUTAION(data);    //์๋ฒ์์ ๋ฐ์ ๋ฐ์ดํฐ๋ฅผ ๋ฎคํ์ด์(๋ฐ์ดํฐ๋ฅผ ๋์ ์ผ๋ก ๋ณํํ๊ธฐ์ํจ)
    }
    };
    es.onerror = err => {           //์๋ฌ์ ์
    console.log(err);
    };
});
```

์์์ ๋ณด๋ค์ํผ eventsource๋ ํค๋์ ์ ๋ณด๋ฅผ ์์ ํ ์๊ฐ ์์๋ค ๊ทธ๋ฆฌํ์ฌ polyfill ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉ
npm ์์ ์ธ์คํจํ์ฌ์ฌ์ฉํ์๊ณ  ํด๋น ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ณ  eventsource์์ฒญ์์ ํค๋์ jwtํ ํฐ์ ๋ด์ ์์ฒญํ ์๊ฐ์์๋ค.

*์ถ๊ฐ 
๋ก์ปฌ์์ ์์ฒญ์์ ์๋๋๊ฒ ๊ฐ๋ฐ์๋ฒ์์ ์๋์ด์ ์ฐพ์๋ณด๋ nginx์ค์ ์์ ์๋ต ํค๋์ค์ ์ ๋ฐ๊ฟ์ค์ผ ํ๋ค.

<br>
<br>


```toc

```
