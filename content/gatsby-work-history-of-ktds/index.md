---
emoji: 🎉
title: KT DS 에서의 2번째 프로젝트
date: '2021-12-28 15:50:00'
author: 쩡기
tags: 개발자 KTDS KT 프로젝트 Vue.js 
categories: project
---

1년간의 LIG NEX1에서의 과제가 끝난 후 철수하게 되었고 다음 프로젝트는 KT DS의 Q-Brige라는컨테이너 관리 시스템의 화면 고도화 작업에 투입되었다.<br>


뭔가 나에게는 제대로 된 첫 SI 프로젝트였고 접해보지 않았던 Vue.js를 통한 화면 고도화를 접하는 거라 많이 떨렸다.


이번 포스트에서는 내가 프로젝트의 어떤 부분에 기여했으며 어떤 기술들을 사용해 봤는지를 기술할 예정이며
자세한 기술적인 포스팅은 따로 카테고리에 정리할 예정이다.<br>

## 1. Q-Brige History

Q-Brige 란 KT 자체적으로 개발한 컨테이너 관리 플랫폼이라고 본다 해당 시스템은 2차에 거쳐 개발이 되었다고 알고 있다.

>😅나중에 알게 된 거지만 `Red Hat` 의 [OpenShift](https://www.redhat.com/ko/topics/containers/red-hat-openshift-kubernetes)를 벤치마킹?(뺐긴..)시스템 이더라..

## 2. Vue.js

프로젝트 진행은 Vue.js로 진행하기로 정해졌고 SPA를 처음 접한 나는 따로 공부를 하고 투입을 했었다 그만큼 VUE는 러닝 커브가 크지 않았다고 생각한다.<br>

### 1️⃣ 사용 기술 스택

프로젝트는 [Vue2](https://kr.vuejs.org/v2/guide/index.html) 로 진행이 되었으며 [Vuetify](https://vuetifyjs.com/en/)로 화면구성이 이루어 졌으며 핵심적으로 사용한 라이브러리는 [vuex](https://vuex.vuejs.org/kr/), [vueRouter](https://router.vuejs.org/kr/), [axios](https://axios-http.com/kr/docs/intro) 이정도만 기술 하겠다. 

상태관리는 Git 으로 진행 하였고 개발 툴은 vscode 를 사용하였다.

## 3. 참여 부분

### a. vueRouter 화면 설계 및 구성
💥`vueRouter 화면 설계 및 구성`<br>

### b. vueRouter 화면 설계 및 구성
💥`axios 공통 api 개발 참여`<br>

### c. vueRouter 화면 설계 및 구성
💥`vuex 공통 상태관리 개발 참여`<br>

### d. vueRouter 화면 설계 및 구성
💥`공통 컴포넌트 개발`<br>

>😂뭔가 나혼자 다한거 같지만 해당 부분에대해 따로 포스팅을 해놓을 생각이다...

## 4. 느낀점

사실 화면 고도화라서 서버 쪽 소스를 건드리거나 개선해야 하는 상황은 안 생길 줄 알았지만.. 역시 뭐든 생각대로 흘러가는 것이 없다.. 부족한 데이터나 필요 없는 데이터 등등 추가적으로 개발 및 수정이 필요한 api들이 많았고 그런 부분을 하면서 백 앤드 개발자가 데이터를 얼마나 깔끔하게 줘야 화면 개발이 수월한지 알게 되었다.<br>







```toc

```
