---
emoji: ๐งถ
title: VUE 3 + CLI 4 + VUETIFY,QUASAR ๊ฐ๋ฐ ํ๊ฒฝ ๊ตฌ์ฑ
date: '2022-03-04 10:50:00'
author: ์ฉก๊ธฐ
tags: SSE ๋จ๋ฐํฅํต์  JS EventSource
categories: VUE
imageUrl: 'vuejs.png'
---

## ๐ ๊ฐ์

์ด๋ฒ์ ๊ฐ๋ฐ ํ๊ฒฝ์ VUE 3๋ก ๊ตฌ์ฑํ๋ ๊ฒฝํ์ ํฌ์คํํ  ์์ 

### ํ๊ฒฝ ๊ตฌ์ฑ

1. VUE CLI 
VUE ๊ฐ๋ฐ์ ์ฝ๊ฒ ํด ์ฃผ๋ ๋ฒ๋ค๋ฌ ๋๋ WEB PACK ์ค์  BABEL ์ค์  ๊ฐ์ ๊ฑธ ์์์ ํด์ค๋ค ์ค์น๋ฅผ ํด์ค๋ค.
> vue cli ๊ณต์๋ฌธ์ [์ฐธ๊ณ ](https://cli.vuejs.org/)

๋๋ vue3study_2 ๋ผ๋ ํด๋์ ์ค์นํ๋ค.
vue create vue3_project_set
vue3_project_set๋ก ํ๋ก์ ํธ ์์ฑ

![vuejs1.png](vuejs1.png)

vue3๋ก ์งํํ  ๊ฑฐ๊ธฐ ๋๋ฌธ์ ํด๋น ์ต์ ์ ํ

vuex ์ vue-router ๋ ์ถ๊ฐํด์ค๋ค.
```
vue add vuex
vue add router //history mode ๋ y๋ก ํด์ค๋ค.
```
๋ง์ง๋ง์ผ๋ก ๋๋ vuetify๋ฅผ ์ฌ์ฉํ  ๊ฑฐ๊ธฐ ๋๋ฌธ์ ์ถ๊ฐํด์ค๋ค.
```
vue add vuetify // ์ต์์ V3 ๋กํด์ค๋ค 
```
์ด์  eslint + pretter ์ค์ ์ ์ข ํด์ค์ผ ํ๋ค. 

vscode์ elint์ pretter ์ค์ ์ ๊ตฌ๊ธ์ ์ ๋์์๋ค. 

์ ์ฅ ์์ ์๋์ผ๋ก ํฌ๋งทํด์ฃผ๋ ์ค์ ๋ง setting.json์ ๊ธฐ์ํด์ฃผ๋ฉด ๋๋ค. 

๊ทธ๋ฆฌ๊ณ  cli๋ก ํ๋ก์ ํธ ์์ฑ ์์ ์์ ๋ชจ๋  ๊ฒ๋ค์ ์ต์์ผ๋ก ํ  ์ ์๋ค.  

![vuejs2.png](vuejs2.png)
๋ฐ๋ก ์์ฒ๋ผ ์๋์ผ๋ก ์ ํํด์ฃผ๋ฉด
![vuejs3.png](vuejs3.png)

์คํ์ด์ค๋ฐ๋ฅผ ๋๋ฌ ๋ด๊ฐ ์ํ๋ ํ๋ฌ๊ทธ์ธ์ ์ค์นํ  ์ ์๋ค. 
๊ฐ์ธ์ ์ผ๋ก ๋๋ฌด ํธํ ๊ธฐ๋ฅ์ด์๋ค 
vue ๋ฒ์ ๊ณผ eslint+prettier ์ค์  ๋ฑ ์ฌ๋ฌ ์ค์ ์ ์๋์ผ๋ก ํ  ์ ์๋ค.

๋ค ์ถ๊ฐํ package.json ํ์ผ์ด๋ค.
![vuejs4.png](vuejs4.png)

์ ์ถ๊ฐ๋ ๊ฒ์ ์ ์ ์๋ค. 

์๋ฒ๋ฅผ ์คํํด๋ณด์
npm run serve
![vuejs5.png](vuejs5.png)

์ ์คํ๋ ๊ฑธ ์ ์ ์๋ค. 

์ด์  ์ฐ๋ฆฌ๊ฐ ๊ฐ๋ฐํ๋ฉด์ ์ฝ๋ ๊ท์ฝ์ ์ ํด ์๋์ผ๋ก ๊ฒ์ฌํด์ฃผ๊ณ  ์์ ํด์ฃผ๋ eslint+prettier๋ฅผ ์ค์ ํด๋ณผ ๊ฑฐ๋ค. 

์ฌ์ค ๊ธฐ๋ณธ์ ์ผ๋ก ํด์ฃผ๋ ๊ฒ๋ค์ ์ ์ฌ์ฉํด๋ ๊ด์ฐฎ์ง๋ง ๊ฐ๋จํ ๊ฒ๋ง ์ข ์ถ๊ฐํด๋ณผ ์์ ์ด๋ค. 

package.json์ ๋ณด๋ฉด eslint์ prettier์ ๊ดํ ์ค์ ์ด ์๋ค.

![vuejs6.png](vuejs6.png)

rules์ ๊ท์ฝ์ ์ ํ  ์ ์๋ค. 
๋๋ "ํฐ๋ฐ์ดํ๋ฅผ" => 'ํ ๋ฐ์ดํ๋ก ์๋์ผ๋ก ๊ฒ์ฌ ๋ณ๊ฒฝํด ์ค ์์ ์ด๋ค'

![vuejs7.png](vuejs7.png)

์ด๋ ๊ฒ ์ค์ ํด์ฃผ์๋ค. 

๊ทธ๋ฆฌ๊ณ  vue์ ํ๊ฒฝ๋ณ์ ํ์ผ๊ณผ build ๋ช๋ น์ด๋ฅผ ๋๋ ์ค ๋ณด์ 
๋ณดํต ๊ฐ๋ฐํ  ๋ local, dev, prod ์ด๋ ๊ฒ 3๊ฐ์ง์ ํ๊ฒฝ์ด ๋ง์ 
3๊ฐ์ง๋ก ๋๋ ๋ณผ์๊ฐ์ด๋ค. 

root ๋๋ ํฐ๋ฆฌ์. env.local ,. env.development , env.production ์ด๋ ๊ฒ 3๊ฐ์ ํ์ผ์ ๋ง๋ค์ด์ฃผ์. 

env.local์ ๋ก์ปฌ ํ๊ฒฝ์์ ์ฌ์ฉํ  ํ๊ฒฝ๋ณ์๋ฅผ ์ ์ํด์ฃผ์

![vuejs8.png](vuejs8.png)

๋๋ ์ด๋ ๊ฒ ๋ ๊ฐ๋ฅผ ์ถ๊ฐํ๋ค ๋ก์ปฌ์์ ๋ฐฑ์ค๋ api๋ก ์์ฒญํ  ์ฃผ์์ ๋น๋๋ ํ๊ฒฝ์ ์๊ธฐ ์ํด mode ๋์ถ๊ฐ ํ๋ค. 

๊ทธ๋ฆฌ๊ณ  package.json ํ์ผ์ ๋น๋ ๋ช๋ น์ด๋ ์์ ํด๋ณด์.

![vuejs9.png](vuejs9.png)

๋๋ ์ด์ฒ๋ผ ๋ก์ปฌ์์์ ํ๊ฒฝ ๋น๋๋๋ ๊ฒ๋ค๊ณผ ๊ฐ๋ฐ ์ด์์ ๋๋ ์ ํด๋จ๊ณ  

lint๋ช๋ น์ด๋ ์๋์ผ๋ก ๊ท์ฝ์ ๋ง๊ฒ ์์ ํด์ฃผ๋ ๋ช๋ น์ด์ง๋ง ์ด๋ฏธ์ ๋์ผ๋ก ์ค์ ์ ํด๋จ๊ธฐ์ ์ธ ์ผ์ด ์์๋ฏ์ถ๋ค. 

์ด๋ ๊ฒ ๊ธฐ๋ณธ์ ์ธ ๊ฐ๋ฐํ๊ฒฝ ์ธํ์ ํ์ง๋ง ์ถ๊ฐ์ ์ผ๋ก vue์์ ํ๋ก์ ํธ๊ฐ build ๋  ๋ ๋ฒ๋ค๋ง์ ๊ธฐ๋ณธ์ ์ผ๋ก prefech๋ก ํด์ฃผ๋๋ฐ 

์ด๋ ๊ฒ ํ๋ฉด ํ์ ์ด ์ปค์ง์๋ก ์ด๊ธฐ ๋ก๋ฉ์ด ๋๋ ค์ง๋ค. 

๊ทธ๋ ๊ธฐ์ vue.config.js์ ๊ทธ ๋ถ๋ถ์ false๋ก ํด์ฃผ์.

![vuejs10.png](vuejs10.png)

vue.config.js ์๋ ์นํฉ๊ณผ ์๋ฒ ์ค์  ๋ฑ์ ํ  ์ ์๋ค. 
ํ๋ ๊น์ ์๋ฒ ์ค์ ๋ ์ข ๋ฐ๊ฟ์คฌ๋ค 

๋ง์ง๋ง์ผ๋ก ์๋ฒ๋ฅผ ์คํํด๋ณด์ 
npm run local 

์ฌ๊ธฐ๊น์ง ์ ์์ ์ผ๋ก ๋์๋ค๋ฉด ์๋ฃ. 
์ด์  
vuex, vue-router, axios์ ๊ตฌ์ฑ์ ์ข ๋ฐ๊ฟ์ค ์์  

vue-router๋ถํฐ ๋ณด์ 
๋์ค์ ๋ผ์ฐํฐ๊ฐ ๋ง์์ง๋ฉด ์ ์๊ฐ ๋ถํธํ๊ธฐ ๋๋ฌธ์ ๋ชจ๋๋ก ๋๋ ์ค ์์ ์ด๋ค. 

๊ทธ๋ฆฌ๊ณ  views์ ์ปดํฌ๋ํธ๋ก ํด๋๋ก ๊ด๋ฆฌํ  ์์ ์ด๋ค.
```
router
	ใดmodules
		ใดlogin.router.js
	ใดindex.js
views
	ใดmain
		ใดMain.vue
	ใดlogin
		ใดLogin.vue
```		

router > index.js

![vuejs11.png](vuejs11.png)

router > login.router.js

![vuejs12.png](vuejs12.png)

์ด๋ ๊ฒ ๋ชจ๋์ ๋ก๊ทธ์ธ ๋ผ์ฐํฐ๋ฅผ ๋ฐ๋ก ๋ง๋ค์ด index.js์ ๊ตฌ์กฐ ํ ๋นํด์ ๊ด๋ฆฌํ๋ค. 

์ด๋ฒ์๋ store๋ฅผ ๊ด๋ฆฌํ๊ธฐ ํธํ๊ฒ ๋ฐ๊ฟ๋ณด์.
```
store
	ใดmodules
		ใดlogin
			ใดindex.js
			ใดlogins.actions.js
			ใดlogins.mutations.js
			ใดlogins.getters.js
			ใดlogins.state.js
		ใดmain
			ใด.....
```            
์ผ๋จ ๊ตฌ์กฐ๋ ์ด๋ ๋ค

store > modules > login > index.js

![vuejs13.png](vuejs13.png)

store > modules > login > actions.js

![vuejs14.png](vuejs14.png)

store > modules > login >mutations.js

![vuejs15.png](vuejs15.png)

store > modules > login > state.js

![vuejs16.png](vuejs16.png)

store > modules > login > getters.js

![vuejs17.png](vuejs17.png)

store >index.js

![vuejs18.png](vuejs18.png)

views>login>login.vue

![vuejs19.png](vuejs19.png)

๊ฒฐ๊ณผ

![vuejs20.png](vuejs20.png)

๋ก๊ทธ์ธ ์ปดํฌ๋ํธ์์ ์๋ ฅํ test๋ฅผ ์ก์์ ํตํด ๋ฎคํ์ด์์ ๊ฑฐ์ณ ์คํ์ดํธ์ ๋ฃ์ด์ค๋ค. 

๊ทธ ํ ๋ก๊ทธ์ธ ์ปดํฌ๋ํธ์์๋ ์คํ์ดํธ์ ์ ์ฅ๋ ๊ฐ์ ๊ฐ์ ธ์จ๋ค ์ง๊ธ์ ์ต์ api๋ก ์ฝ๋ฉํ์ง๋ง ์ถํ composion api ๋ก๋ณ๊ฒฝ์์  

์ด๋ ๊ฒ ๊ธฐ๋ณธ์ ์ผ๋ก ์คํ ์ด๋ ๋ชจ๋ํ ์์ผ์ ์ฌ์ฉํ๋ฉด ํธํ๋ค. 

์ด๋ ๊ฒ ๋ผ์ฐํฐ์ ์คํ ์ด๋ฅผ ๋๋ด๊ณ  ์ด์  ์ก์์์ api๋ฅผ ํธ์ถํ๋ ๊ฒ์ ํด๋ณผ ์๊ฐ์ด๋ค axios๋ฅผ ์ฌ์ฉํ  ์์ ์ธ๋ฐ ๋ฐฑ์ค๋๋ฅผ ๋จผ์  ๊ฐ๋จํ๊ฒ json server๋ก ๊ตฌ์ฑํ  ์๊ฐ์ด๋ค. 

ํ๋ก์ ํธ์ ๊ฐ์ ๋ ๋ฒจ์ json-server ํด๋๋ฅผ ๋ง๋ค์๋ค. 

json-server ์ฌ์ฉ๋ฒ์ ์ธํฐ๋ท์ ์ ๋์์๋ค. [์ฐธ๊ณ ](https://redux-advanced.vlpt.us/3/01.html)

๊ณต์: https://github.com/typicode/json-server

json-server ํด๋ ํ์์ db.jsonํ์ผ์ ๋ง๋ค์ด์ ๋ฆฌํด ๋ฐ์ดํฐ๋ฅผ ์ ์ํ๋ค.

![vuejs21.png](vuejs21.png)

json-server๋ฅผ ์คํํ๊ณ  ๊ธฐ๋ณธ ์คํ ์ ํฌํธ๋ 3000๋ฒ์ด๋ค. 

postman์ผ๋ก ์์ฒญ์ ๋ ๋ ค ํ์ธํด๋ดค๋ค. 

์ด๋ ๊ฒ ์ ์  ์ ๋ณด๋ฅผ ๋ฃ์๊ณ  ์ด์  Axios๋ฅผ ์ค์นํด๋ณด์
```
npm i axios
```
package.json์ ์ถ๊ฐ๋๋ค.

๋๋ ๋ชจ๋  api์์ฒญ์ services ํด๋์์ ๊ด๋ฆฌํ  ์์ ์ด๋ค.

services ํ์์ api.common.js ๋ฅผ์์ฑํ๋ค.

services > api.common.js

process.env.VUE_APP_API ๋ ํ๊ฒฝ๋ณ์์ด๋ค

env.local ํ์ผ์ ์์ฒญ์ฃผ์๋ฅผ ๋ง์ถฐ์ฃผ์

![vuejs22.png](vuejs22.png)

ํ์ฌ json-server์ ์์ฒญ ์ฃผ์๋ฅผ๋ฃ์ด์ฃผ๊ณ 

api.common.js ๋ฅผ ์์ฑ

![vuejs23.png](vuejs23.png)

services > login>login.service.js

![vuejs24.png](vuejs24.png)

store>modules>login>login.actions.js

![vuejs25.png](vuejs25.png)

store>modules>login>login.mutations.js

![vuejs26.png](vuejs26.png)

store>modules>login>login.state.js

![vuejs27.png](vuejs27.png)

์ด๋ ๊ฒ ์ก์์์ ํด๋น ์๋น์ค๋ฅผ ํธ์ถํ์ฌ ๋ฐ์ ๊ฐ์ ๋ฎคํ์ด์ ํ์ฌ ์คํ์ดํธ์ ์ ์ฅํ๋ ๋ก์ง์ ์์ฑํ๋ค. 

๋ง์ง๋ง์ผ๋ก Login.vue ์ปดํฌ๋ํธ๋ ๋ณ๊ฒฝํ๋ค.

![vuejs28.png](vuejs28.png)

ํ๋ฉด์๋ณด์

![vuejs29.png](vuejs29.png)

์์ด๋ ๊ฐ์ ์๋ ฅํ์ฌ ์ ์กํ๋ค. id:1

![vuejs30.png](vuejs30.png)

๊ฐ๋ฐ์ ํด์์ networkํญ์์ ํธ์ถ์ด ์ ์์ ์ผ๋ก ๋์๋์ง ํ์ธํด๋ณด์

![vuejs31.png](vuejs31.png)

์ด๋ ๊ฒ json-server๋ฅผ ์ด์ฉํ์ฌ ๊ฐ๋จํ๊ฒ axios๊น์ง ๊ตฌํํด๋ดค๋ค. 

์ด์  ๋ก๊ทธ์ธ์ ํ์ ๋์ main์ผ๋ก ๊ฐ๊ณ  ์ ์  ์ ๋ณด๊ฐ ์์ ๋์๋ loginํ์ด์ง๋ก ๊ฐ๊ฒ๋ ๋ผ์ฐํฐ๋ฅผ ๋ฐ๊ฟ๋ณด์ 

์ผ๋จ path๊ฐ ๋ผ์ฐํฐ์ ๋ช์๋ ๊ฒ ์๋ ๊ฒฝ์ฐ ๋ฌด์กฐ๊ฑด '/'๋ฉ์ธ์ผ๋ก ๊ฐ๊ฒ๋ ์ถ๊ฐํ์
router>index.js

![vuejs32.png](vuejs32.png)

์ด์  ๋ผ์ฐํฐ์ ์ง์ ๋ path๊ฐ ์๋ ๊ฒฝ์ฐ ๋ฌด์กฐ๊ฑด main์ผ๋ก ๋ฆฌ๋ค์ด๋ ํธ ํ๋ค. 

์ด์  ์กฐ๊ธ ๋ณต์กํด์ง๋ค 
๋๋ ๋ก๊ทธ์ธํ  ๋ jwtํ ํฐ์ ๋ฐ๊ธ๋ฐ์ localstorege์ ์ ์ฅํด์ ํ ํฐ์ ์ฌ๋ถ๋ก ์ฌ์ฉ์๊ฐ ์ ์ ๋ก๊ทธ์ธํ ๊ฑธ ํ์ธํ  ๊ฒ์ด๋ค. 

์ผ๋จ ๋ผ์ฐํฐ๊ฐ ์คํ๋๊ธฐ ์ ์ ๋ก๊ทธ์ธ์ด ํ์ํ ํ์ด์ง์ธ์ง ํ์ธ ํ ๋ก๊ทธ์ธ ์ฌ๋ถ๋ฅผ ํ์ธํ๋ค (ํ ํฐ ์ฌ๋ถ) 

๊ทธ ํ ๋ก๊ทธ์ธ ํ์ ํ ํ์ด์ง ์ ๊ทผ ์ ๋ก๊ทธ์ธ ์ฌ๋ถ๊ฐ true๋ฉด ๋ผ์ฐํฐ๊ฐ ์งํ๋๊ณ  false๋ฉด ๋ก๊ทธ์ธ ํ์ด์ง๋ก ๋ฆฌ๋ค์ด๋ ํธ ์ํจ๋ค.

router > index.js
```js
import jwtUtil from '@/shared/utils/token-util';//ํ ํฐ์ด ์ ๋ก์ปฌ์คํ ๋ฆฌ์ง์ setํด์ฃผ๊ฑฐ๋ getํ๋ ๋ก์ง์ ์ํฌํธ

//๋ผ์ฐํฐ๊ฐ ์คํ๋๊ธฐ์ ์ ์คํํ๋ค 
router.beforeEach((to, from, next) => { 
  //๋ก๊ทธ์ธ ์ํ๊ฒฝ์ฐ์๋ง์ค๋ ํ์ด์ง login.router ํด๋น 
  const onlyWhenNotLoggedIn = to.matched.some( 
    (record) => record.meta.onlyWhenNotLoggedIn 
  ); 
  //๋ก๊ทธ์ธ์ฌ๋ถ 
  const loggedIn = isValidAccessToken(); 
  //๋ก๊ทธ์ธ ํ์ํ ํ์ด์ง ์ ๊ทผ ์ 
  if (to.matched.some((record) => !!record.meta.auth)) { 
    //ํ ๊ทผ์กด์ฌ์ฌ๋ถ ํ๋จ 
    if (!loggedIn) { 
      next({ 
        path: '/login', 
        params: { nextUrl: to.fullPath }, 
      }); 
    } else { 
      next(); 
    } 
  } 
  //๋ก๊ทธ์ธ ํ์์๋ํ์ด์ง ์ ๊ทผ 
  else if (to.matched.some((record) => !record.meta.auth)) { 
    //๋ก๊ทธ์ธ ๋์ด ์๋๋ฐ ๋ค์ ๋ก๊ธ๋ ํ์ด์ง๋ก ์ด๋ํ๋ค๋ฉด 
    if (loggedIn && onlyWhenNotLoggedIn) { 
      next({ 
        name: 'main', 
      }); 
    } else { 
      next(); 
    } 
  } 
}); 
//ํ ํฐ์์ฑ ์ฌ๋ถ ํ๋จ 
function isValidAccessToken() { 
  //๋ก์ปฌ์คํ ๋ฆฌ์ง์ ์ ์ฅ๋ ํ ํฐ๊ฐ์ ธ์จ๋ค. 
  const accessToken = localStorage.getItem('accessToken'); 
  if ( 
    !accessToken || 
    accessToken === 'null' || 
    accessToken === 'undefined' || 
    !jwtUtil.isValidJwt(accessToken) //์ ํจ์ฑ๊ฒ์ฌ 
  ) { 
    return false; 
  } 
  return true; 
}
```

shared > utils > token-util.js
```js
const tokenUtil = { 
  //๋ก์ปฌ์คํ ๋ฆฌ์ง์ ํ ํฐ ์ํํด์ค๋ค 
  setItem: async function (key, val) { 
    return Promise.resolve().then(function () { 
      localStorage.setItem(key, val); 
    }); 
  }, 
  //๋ก์ปฌ์คํ ๋ฆฌ์ง์ ํ ํฐ ๊ฐธ์ ธ์จ๋ค 
  getItem: async function (key) { 
    return Promise.resolve().then(function () { 
      return localStorage.getItem(key); 
    }); 
  }, 
  //๋ก์ปฌ์คํ ๋ฆฌ์ง์ ํ ํฐ ์ ๊ฑฐ 
  removeItem: async function (key) { 
    return Promise.resolve().then(function () { 
      localStorage.removeItem(key); 
    }); 
  }, 
  //ํ ํฐ ์ ํจ์ฑ๊ฒ์ฌ 
  isValidJwt(jwt) { 
    if (!jwt || jwt.split('.').length < 3) { 
      return false; 
    } 
    const data = JSON.parse(atob(jwt.split('.')[1])); 
    const exp = new Date(data.exp * 1000); 
    const now = new Date(); 
    return now < exp; 
  }, 
  invalidateJwt() { 
    this.removeItem('vuex'); 
    this.removeItem('accessToken'); 
    this.removeItem('username'); 
  }, 
  invalidateJwtAndReload() { 
    this.removeItem('vuex'); 
    this.removeItem('accessToken'); 
    this.removeItem('username'); 
    location.reload(); 
  }, 
}; 
export default tokenUtil;
```

jwtํ ํฐ ๊ด๋ จํด์๋ ๊ณต์๋ฌธ์๋ฅผ ์ฐธ๊ณ ํ๋ ๊ฒ ํ์ํ๋ค 

๊ธฐ๋ณธ์ ์ผ๋ก ์ ํจ๊ธฐ๊ฐ์ด ์๊ณ  ํด๋น ์ ํจ๊ธฐ๊ฐ์ด ๋ง๋ฃํ๋ฉด ๋ค์ ๋ก๊ทธ์ธ์ ํ๋ ๋ฐฉ์์ผ๋ก ๋ณดํต ๋ง์ด ๊ตฌ์ฑํ๋ค. 

jwtํ ํฐ์ ๋ฐฑ์ค๋์์ ๋ฐ๊ธํด์ฃผ๋ ์์ด์ง๋ง ํ์ฌ ๋ฐฑ์ค๋ ์๋ฒ๋ ๊ตฌ์ฑ์ ํ์ฌ์ ์ฝ์์ผ๋ก ํ๊ฒ ๋ค. 

์ค์ํ ํ๋ฆ์ ๋ก๊ทธ์ธ ์ ํ ํฐ์ ๋ฐ๊ธ => ๋ก์ปฌ ์คํ ๋ฆฌ์ง์ ์ ์ฅ=> ํ์ด์ง ์ด๋ ์๋ง๋ค ํ ํฐ ์ ๋ฌด๋ฅผ ํ์ => ์๋ ๊ฒฝ์ฐ ๋ก๊ทธ์ธ ํ์ด์ง๋ก ๋ฆฌ๋ค์ด๋ ํธ 
ํด๋น ํ๋ฆ์ด๋ค. 

์ด์  ๋ก๊ทธ์ธ ์ปดํฌ๋ํธ๋ฅผ ์กฐ๊ธ ์์ ํด๋ณด์

views > login > Login.vue

```html
<template> 
  <div> 
    Login Page 
    <ul class="lof"> 
      <li> 
        <input 
          class="ids" 
          v-model="loginForm.username" 
          ref="inputUsername" 
          placeholder="์์ด๋ ์๋ ฅ" 
          outlined 
        /> 
      </li> 
    </ul> 
    <div class="log_foot"> 
      <v-btn @click.prevent="handleSubmit"> Login </v-btn> //๋ฒํผํด๋ฆญ์ ๋ก๊ทธ์ธ ํจ์์คํ 
    </div> 
  </div> 
</template> 
<script> 
import { mapActions, mapState } from 'vuex'; 
export default { 
  name: 'Login', 
  data() { 
    return { 
      loginForm: { 
        username: null, 
        password: null, 
      }, 
    }; 
  }, 
  mounted() { 
    this.$refs.inputUsername.focus(); 
  }, 
  methods: { 
    ...mapActions('login', ['LOGIN_TEST']), 
    handleSubmit() {
//๋ก๊ทธ์ธ ์ก์ ์คํ 
      this.LOGIN_TEST(this.loginForm).then(() => { 
        if (localStorage.getItem('accessToken')) {
//accessToken ์์์์ main์ผ๋ก ๋ผ์ฐํํด์ค๋ค 
          this.$router.push({ name: 'main', params: {} }); 
        } else { 
//accessToken ์์์์ login์ผ๋ก ๋ผ์ฐํํด์ค๋ค          
          this.$router.push({ name: 'login', params: {} }); 
        } 
      }); 
    }, 
  }, 
}; 
</script> 
<style></style>
```

store > modules > login > login.actions.js

```js
//๋ก๊ทธ์ธ์์ ์ฌ์ฉํ  service ์ถ๊ฐ 
import loginService from '@/services/login/login.service.js'; 
//๋ก๊ทธ์ธ์ ํ ํฐ ๋ฐ ๋ก์ปฌ์คํ ๋ฆฌ์ง ๋น์์ฃผ๊ธฐ์ํด
import tokenUtil from '@/shared/utils/token-util'; 
export const LOGIN_TEST = ({ commit }, data) => { 
  //JWT and localstorege ๋น์์ค๋ค 
  tokenUtil.invalidateJwt(); 
  //์ก์์์ api ์์ฒญ์์  
  return loginService 
    .login(data.username) 
    .then((res) => { 
      const user = res.data; 
      console.log(user); 
      localStorage.setItem('username', user.username); 
      localStorage.setItem('accessToken', user.accessToken); 
      commit('SET_USER', user); 
    }) 
    .catch((err) => { 
      console.log(err); 
    }); 
};
```

๋ก๊ทธ์ธ ์์ accessToken๊ณผ username์ ๋ก์ปฌ ์คํ ๋ฆฌ์ง์ ์ ์ฅํด์ค๋ค. 

ํด๋น ๋ฐ์ดํฐ ๊ธฐ์ค์ผ๋ก ์ฌ์ฉ์์ ๋ก๊ทธ์ธ ์ฌ๋ถ๋ฅผ ํ๋จํ๋ค. 

์ฒ์ ๋ฉ์ธ ์ง์์ accessToken์ด ์์ผ๋ฏ๋ก login ํ์ด์ง๋ก ๋ฆฌ ๋๋ ํธ ๋๋ค.

![vuejs33.png](vuejs33.png)

๋ก๊ทธ์ธ์ ์ ์์ ์ผ๋ก ํ ๋ ์๋์๊ฐ์ด ๋ฉ์ธ์ผ๋ก ๋ผ์ฐํ๋๋ฉฐ ๋ก์ปฌ์คํ ๋ฆฌ์ง์ ์ ์ฅ๋ ๋ฐ์ดํฐ๋ ํ์ธ์ด ๊ฐ๋ฅํ๋ค.

![vuejs34.png](vuejs34.png)

์ ์ด์  ์ฌ๊ธฐ๊น์ง ๋๋ต jwtํ ํฐ์ ๋ฐฑ์ค๋์์ ๋ฐ๋๋ค๋ ๊ฐ์ ์ผ๋ก ๊ตฌํํด๋ดค๋ค. 

๋ชจ๋  ๋ผ์ฐํ์ด ์ด๋ฃจ์ด์ง๊ธฐ ์ ์ ๋ก์ปฌ ์คํ ๋ฆฌ์ง์ accessToken์ฌ๋ถ๋ฅผ ํ๋จํ๊ณ  ์๋ค๋ฉด ๋ก๊ทธ์ธ ํ์ด์ง๋ก ๋ฆฌ๋ค์ด๋ ํธ ์์ผฐ๊ณ  

์ด์  ๋ชจ๋  api ์์ฒญ์ ํ  ๋๋ accessToken์ ์ ํจ์ฑ์ ํ๋จํด์ค์ผ ํ๋ค.

services > api.common.js
```js
import tokenUtill from '@/shared/utils/token-util'; 

//api ์์ฒญ์ ์คํ ๋ก์ง ์ถ๊ฐ 
Api.interceptors.request.use(async function (config) { 
  //ํ ํฐ๊ฐ์ ธ์ด 
  const acToken = tokenUtill.getItem('accessToken'); 
  if (acToken) { 
    config.headers['Authorization'] = `Bearer ${acToken}`; 
  } 
  return config; 
});
//api ์๋ต์ ์คํ 
Api.interceptors.response.use( 
  function (response) { 
    return response; 
  }, 
  function (error) { 
    const errorResponse = error?.response; 
    const errorStatus = errorResponse?.status; 
    
    if (!!errorStatus === 401 || errorStatus === 403) { 
      tokenUtill.invalidateJwtAndReload(); 
    } 
    return error; 
  } 
);
export default Api;
```

์ด๋ ๊ฒ axios์ ์์ฒญ์ด ์คํ๋๊ธฐ ์  accessToken ์ด ์๋ ๊ฒฝ์ฐ ์์ฒญ ํค๋์ ํ ํฐ์ ๋ด๊ณ  ์์ฒญ์ ์งํํ๋ค. 

์๋ ๊ฒฝ์ฐ ํค๋์ ํ ํฐ์ ๋ชป ๋ด๊ธฐ ๋๋ฌธ์ ์๋ฒ์์ ์๋ฌ๋ฅผ ๋ณด๋ด์ค๋ค. ์ด ๋ถ๋ถ์ ์๋ฒ์ ๊ตฌํ์ด ํ์ํ์ง๋ง ์๋ค๋ ๊ฐ์ ํ์ ์งํํ๋ค. 

์๋ฌ๋ฅผ ๋ฐ์์ ๋์ ๋ก์ง๋ ์ถ๊ฐํ๋ค. 

์๋ฌ์ํ๊ฐ 401 ๋๋ 403 ์ผ ๋ ๋ก์ปฌ ์คํ ๋ฆฌ์ง์ ๋ฐ์ดํฐ๋ฅผ ๋น์์ฃผ๊ณ  ํ์ฌ ํ์ด์ง ๋ฆฌ๋ก๋ ํ๋ค. 

๊ทธ๋ผ ํ ํฐ์ด ์๊ธฐ ๋๋ฌธ์ ๋ฉ์ธ์ผ๋ก ์๋ ๋ฆฌ ๋๋ ํธ ๋๋ค. 

์ฌ์ค์ด ๊ธฐ๋ฅ์ ์๋ฒ๋ ๊ฐ์ด ๊ตฌํ๋์ด์ผ ํ๋ ๋ถ๋ถ์ด์ด์ ์์ง ํ์ธํ๊ธฐ๊ฐ ์ข ํ๋ค๋ค.

**`๋ณดํต apiํธ์ถ์ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ค๋๋ฐ ์งํ์ฌํญ ํํํ๋ ๋ก๋๊ธฐ๋ฅ๋ ์ด์ชฝ์ ์ถ๊ฐํ๋ค.`**

์ด๋ฒ์๋ vuex์ ๋ฐ์ดํฐ๋ฅผ ๋ก์ปฌ ์คํ ๋ฆฌ์ง์ ์ ์ฅํ์ฌ ์ฌ์ฉํ๊ฒ ํด์ฃผ๋ ํ๋ฌ๊ทธ์ธ์ ์ฌ์ฉํด๋ณด์. 

vuex store์ ๋ฐ์ดํฐ๋ ์๋ก๊ณ ์นจ ์ ์ฌ๋ผ์ง๋ค dom์ ๋ฟ๋ ค ์ง๊ธฐ ๋๋ฌธ 

ํ์ง๋ง ์ฐ๋ฆฌ๋ ๊ณ์ํด์ ๋ฐ์ดํฐ๋ฅผ ์ฌ์ฉํ๊ณ  ์ถ์ ๊ฒฝ์ฐ๊ฐ ์๋ค 

์ด ๋๋ฌธ์ ๋์จ ํ๋ฌ๊ทธ์ธ์ด๋ผ๊ณ  ์๊ฐํ์ ๋จผ์  ๋ก๊ทธ์ธ์ ํ๊ณ  ๋ ํ ๋ก๊ทธ์ธ ์ ๋ณด๋ฅผ getters๋ก ๋ฐ์์์ ๋ฟ๋ ค์ค ๋ฉ์ธํ๋ฉด์ด๋ค.


![vuejs35.png](vuejs35.png)

์ด๋ ๊ฒ ๋ก๊ทธ์ธํ ์ ์ ์ ์ ๋ณด๊ฐ ๋ณด์ธ๋ค. 

ํ์ง๋ง ์๋ก ๊ณ ์นจ ์์ ์ด๋ ๊ฒ ์ ์ ์ ์ ๋ณด๊ฐ ์ฌ๋ผ์ง๋ ๊ฑธ ์ ์ ์๋ค.

![vuejs36.png](vuejs36.png)

์ด๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ถ๊ฐ

```
npm install --save vuex-persistedstate
```

vuex-persistedstate 4.x (for Vuex 4 and Vue 3) ๊ณต์ ๋ฌธ์ ์ฐธ๊ณ  

store > index.js

```js
import { createStore } from "vuex"; 
import createPersistedState from "vuex-persistedstate"; 
const store = createStore({ 
  // ... 
  plugins: [createPersistedState()], 
});
```
๋ค์ ๋ก๊ทธ์ธ์ ํด๋ณด์

![vuejs37.png](vuejs37.png)

์ด๋ ๊ฒ ๋ก์ปฌ ์คํ ๋ฆฌ์ง์ ์ถ๊ฐ๋ ๊ฒ์ด ๋ณด์ธ๋ค ์ด์  ์๋ก๊ณ ์นจ์ ํด๋ ์ ์ ์ ์ ๋ณด๋ ๋ก์ปฌ ์คํ ๋ฆฌ์ง์ ์๊ธฐ ๋๋ฌธ์ ์ฌ๋ผ์ง์ง ์๋๋ค. 

์ถ๊ฐ์ ์ผ๋ก ๋ด๊ฐ ์ฌ์ฉํ๋ eslint + prettier ์ค์ ์ด๋ค.

```js
"rules": { 
      "no-console":"off", 
      "no-unused-vars": "off", 
      
      "prettier/prettier": [ 
        "error", 
        { 
        "semi": false, //์ธ๋ฏธ์ฝ๋ก ์ฌ์ฉ์ํจ 
        "tabWidth": 2, //ํญ๊ฐ๊ฒฉ 
        "arrowParens": "avoid", //ํ์ดํํจ์์ฌ์ฉ์ ๋จ์ผ๊ฐ () ์์ 
        "singleQuote": true, //""=>'' ๋ก๋ฐ๊ฟ 
        "htmlWhitespaceSensitivity": "ignore", 
        "trailingComma": "none", //๋ง์ง๋ง , ์์ 
        "endOfLine": "auto" 
        } 
      ] 
    }
```

์ด ์ ๋์ด๋ค ๋์ค์ ๋ ์ถ๊ฐํ  ์๋ ์๋ค. 

์ด์  ๋ก๊ทธ์์์ ๋ง๋ค์ด์ฃผ์ ๋น๊ต์  ๊ฐ๋จํ๋ค
views > main > main.vue
```html
<v-col class="mb-4"> 
        <v-btn 
          @click="logout" 
          class="font-weight-bold" 
          style="background-color: #42b983" 
        > 
          Log-out 
        </v-btn> 
      </v-col>//๋ฒํผ์ถ๊ฐํด์คฌ๋ค
<script>
    //์ฝ์
export default {
methods: { 
    ...mapActions('login', ['LOGOUT']), 
    logout() { 
      console.log('๋ก๊ทธ์์') 
      this.LOGOUT()//ํด๋ฆญ์ ๋ก๊ทธ์์ ์ก์ํธ์ถ 
    } 
  }
}  
</script>
```

store > modules> login > login.actions.js
```js
export const LOGOUT = () => { 
  tokenUtil.invalidateJwtAndReload()//๋ก์ปฌ์คํ ๋ฆฌ์ง ๋น์์ฃผ๊ณ  ํ๋ฉด ๋ฆฌ๋ก๋ํ๋ค. 
}
```

์ด๋ ๊ฒ ๋ก๊ทธ์์๋ ์๋ฃ๋์๋ค. 

์ด์  ๋ทฐ์์ ๋ง์ด ์ฌ์ฉํ๋ mixin์ ์ค์ ํ  ๊ฑฐ๋ค ์ ์ญ์ผ๋ก ๊ณตํต์ ์ผ๋ก ์ฌ์ฉํ๋ ๊ธฐ๋ฅ์ ๋ฃ๊ณ  ๋นผ์ ์ฌ์ฉํ๋ค. 

๊ณต์๋ฌธ์ ์ฐธ๊ณ  https://v3.vuejs.org/guide/mixins.html#option-merging ์ผ๋จ ํ์ผ์ ๋ง๋ค์ด์ค๋ค.

shared > mixins > global-mixin.js
```js
export default { 
  //methods 
  methods: { 
    //๋ฐฐ์ด์ ๊ธธ์ด 
    isListLength(list) { 
      return list.length 
    } 
  } 
}
```
๊ฐ๋จํ๊ฒ ๋ฐฐ์ด์ ๊ธธ์ด๋ฅผ ๊ตฌํด์ฃผ๋ ๋ฉ์๋ ์์ฑ
main.js ์ ๋ฏน์ค์ธ ์ถ๊ฐ
```js
import globalMixin from '@/shared/mixins/global-mixin'
app.mixin(globalMixin)
```
์ผ์ ์ ๋ง๋  List.vue ์ปดํฌ๋ํธ์์ ๊ฒ์๋ค์ ๊ฐฏ์๋ฅผ ๊ฐ์ ธ์๋ณด์
```html
<table class="mx-auto"> 
            <thead> 
              <tr> 
                <th>๋ฒํธ</th> 
                <th>์ ๋ชฉ</th> 
                <th>list length</th> 
              </tr> 
            </thead> 
            <tbody> 
              <tr v-for="item in list" :key="item.id"> 
                <td>{{ item.id }}</td> 
                <td> 
                  <a @click="detail(item)"> 
                    {{ item.title }} 
                  </a> 
                </td> 
                <td>{{ isListLength(list) }}</td>//๋ฏน์ค์ธ์ฌ์ฉ 
              </tr> 
            </tbody> 
          </table>
```

์ด๋ฐ์์ผ๋ก {{}} ์ฝง์์ผ ํ๊ทธ์์ ์ฌ์ฉํ๋ค.

![vuejs38.png](vuejs38.png)
์์ ๊ฐ์ด ์๋ํ๋ค. 

์ด์ ๊ฐ์ด vue cli 4๋ฅผ ์ด์ฉํ vue ํ๋ก์ ํธ ์ค์ ์ ๋๋๋ค. 

๊ทผ๋ฐ ์ง์ง ์ง์ฆ ๋๋ ๊ฑด vuetify3 ์ด ์ ์ ๋ฆด๋ฆฌ์ฆ ๋ฒ์ ๋ ์๋๊ณ  ์ํ๋ฒ์ ์ด๋ผ ์ง์๋๋ ์ปดํฌ๋ํธ๋ ์ ๊ณ  vue3์ ์์ง ์ฌ์ฉ์ ๋ถ๊ฐ๋ฅํ๋ค. 

ํ.... ๊ทธ๋์ ๊ณ ๋ฏผํ๊ณ  ์ฐพ๋ค๊ฐ ์์๋ธ... ๋๋ง์ quasar (ํ์ด์ฌ) 

์์ ๋ด์ฉ์ ๊ทธ๋๋ก ์งํํ๋ vuetify๋ฅผ quasar ๋ก๋์ฒดํด์ ์งํ์ ํด๋ณด๊ฒ ๋ค. 

์ผ๋จ ๊ธฐ์กด ํ๋ก์ ํธ ์์ฑ์ ๊ฐ๋ค

```
vue create vue3_project_quasar
//์์ฑํด์ฃผ๊ณ  ๊ธฐ์กด๊ณผ๊ฐ์ด ์ต์์ ์ฉ
```
![vuejs39.png](vuejs39.png)

```
vue add quasar //quasar๋ก ๊ฐ์ํ๊ธฐ
```
์ฌ๊ธฐ์์ ์ต์์ด ์ค์ ํ์ด์ฌ๋ ์์ฒด์ ์ธ cli๋ฅผ ์ ๊ณตํ๋๋ฐ (์ ์จ๋ด) 

๋๋ ์ด๋ฏธ vue cli๋ฅผ ์ฌ์ฉํ๊ธฐ ๋๋ฌธ์ ํ์ด์ฌ๋ฅผ ์ค์นํ  ๋ ์๋์ผ๋ก ๊ฐ์ ธ์ค๋ ๋ฐฉ์์ผ๋ก ํด์ผ ๋ผ์ฐํฐ๊ฐ ์ ์ ์๋ํ๋ค.

![vuejs40.png](vuejs40.png)

์  ์ฒซ ๋ฒ์งธ ์ต์ ๊ผญ no ํด์ค๋ค. 

๊ทธ๋ ๊ฒ ํ์ด์ฌ๊ฐ ์ค์น๋๋ฉด vue.config.js, quasar-user-optios.js ํ์ผ์ด ์์ฑ๋๋ค ๊ทธ๋ฆฌ๊ณ  styles ํด๋๋ 

vue.config.js ์ด๊ฑฐ์ผ ๋ญ ์ต์ํ๋ค ์นํ, ์๋ฒ ์ค์ , ๋ฐ๋ฒจ, ํ์ด์ฌ ๋ฑ cli์์ ์ฃผ๊ดํ๋ ์ค์  ํ์ผ ์ฌ๊ธฐ์ ํ์ด์ฌ ์ฌ์ฉ ์ฝ๋๊ฐ ์๋์ผ๋ก ๋ฑ๋ก๋์ด์๋ค. 

์ด์  ๋ฌธ์ ๋ quasar-user-optios.js์ด๋ค ํ์ด์ฌ์์ ์ ๊ณตํ๋ ํ๋ฌ๊ทธ์ธ์ ์ ์ํด ๋๋ ๊ณณ ํธ๋ฆฌ ์์ดํน์ ์ฉ์ ํ ๊ฑฐ ์๋๊น? ํ๋ ์๊ฐ... 

๋ง์ง๋ง์ผ๋ก styles ํด๋์๋ scss ๊ด๋ จ ์ ์ ๋ด๊ฐ ์ฒ์ ์ต์์์ ์ฌ์ฉํ๋ค๊ณ  ํด์ ์์ฑ๋๋ฏํ๋ค ๊ทผ๋ฐ ์ด๊ฑด ๋์ค์ ์๊ฐํ์ 

๊ทธ๋ ๊ฒ ์๋ฒ๋ฅผ ์คํํด ๋ณด์ 

๊ทธ๋ฌ๋ฉด vuetify ๊ฐ ์๋ quasar๋ฅผ ์ฌ์ฉํด์ ๊ตฌ์ฑ์ด ๊ฐ๋ฅํด์ง๋ค.


## ๐ช ๋ง๋ฌด๋ฆฌ
ํ๋ฐํธ ์์ญ์ ํ์คํ ํธ๋ ๋์ ๋ฏผ๊ฐํด์ ๊ทธ๋ฐ์ง ์๋ก ๋์ค๊ณ  ์์ด์ง๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ค์ด ๊ต์ฅํ ๋ง๊ณ  

๊ธฐ์กด์ ์ฌ์ฉํ๋ ๊ฒ๋ค๋ ์๋ฐ์ดํธ๊ฐ ๋น ๋ฅด๊ฒ ๋๋ ํธ์ด๋ผ ํญ์ ์ ๋ณด๊ณ  ์ฌ์ฉํด์ผ ํ ๋ฏ์ถ๋ค. 

์ฌ์ค vuetify ๋ quasar ๋ ์ด๋ค ๊ฑธ ์ฌ์ฉํด๋ ํฌ๊ฒ ๊ฐ๋ฐ์์ ๋ฌธ์ ๊ฐ ๋๊ปด์ง์ง๋ ์์ง๋ง 

๋ ๊ฐ์ธ์ ์ผ๋ก vuetify๊ฐ ๋ ์ฌ์ฉํ๊ธฐ ํธํ๊ณ  vue3์ ๋ง๊ฒ ์๋ฐ์ดํธ๊ฐ ๋๋ค๋ฉด vuetify๋ฅผ ๊ณ์ ์ฌ์ฉํ์ง ์ถ๋ค... 

์๋ฒ ํฌ์คํ์ ๊ณผ๊ฑฐ์ ๋ด๊ฐ ํ๋ก์ ํธ ๋ ์ ๋ฆฌ๋ฅผ ๋์ถฉ ํ๋๊ฑธ ์ฎ๊ฒจ๋์ ๊ฑฐ๋ผ(๊ทธ๋ ๋ธ๋ก๊ทธ๋ฅผ ์ ํ์ผ๋..) 

๋๋ฌด ๋์์๊ณ  ์ ์กฐ์ ๋ ๋ชปํ๋ค ๋์ค์ ์๊ฐ์ด ๋๋ค๋ฉด vue ๊ด๋ จ ํฌ์คํ์ ์ข ๋ ํ  ์์ ์ด๋ค.
<br>
<br>


```toc

```
