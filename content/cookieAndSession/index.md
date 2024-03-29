---
emoji: 🌺
title: 쿠키 / 세션이란? (part.1 )
date: '2023-11-17 13:23:00'
author: 아구
tags: Cookie & Session 이란?
categories: JAVA
imageUrl: 'java.png'
---

## 🎈 Cookie란 무엇인가요? 
- 쿠키는 웹 서버가 생성하여 웹 브라우저로 전송하는 작은 정보 파일입니다. 웹 브라우저는 수신한 쿠키를 미리 정해진 기간 동안 또는 웹 사이트에서의 사용자 세션 기간 동안 저장합니다. 웹 브라우저는 향후 사용자가 웹 서버에 요청할 때 관련 쿠키를 첨부합니다.

- 쿠키는 웹 사이트에 사용자에 대한 정보를 제공하여 웹 사이트가 사용자 경험을 맞춤화하는 데 도움이 됩니다. 예를 들어, 전자상거래 웹 사이트에서는 쿠키를 사용하여 사용자가 장바구니에 어떤 상품을 담았는지 파악합니다. 또한 인증 쿠키(아래 참조)와 같이 보안을 위해 필요한 쿠키도 있습니다.

- 인터넷에서 사용되는 쿠키를 "HTTP 쿠키"라고도 합니다.대부분의 웹과 마찬가지로 쿠키는 HTTP 프로토콜을 사용하여 전송됩니다.

- 쿠키는 유저들의 효율적이고 안전한 웹 사용을 보장하기 위하여 웹사이트에 널리 사용되고 있습니다. 쿠키는 웹사이트 접속시 접속자의 개인장치에 다운로드 되고 브라우저에 저장되는 작은 텍스트 파일입니다. 웹사이트는 쿠키를 통해 접속자의 장치를 인식하고, 접속자의 설정과 과거 이용내역에 대한 일부 데이터를 저장합니다.

- 일반적으로 쿠키에는 만료일이 있습니다. 예를 들어, 브라우저를 닫는 경우 자동으로 삭제되는 쿠키도 있으며(세션 쿠키), 일부는 수동으로 삭제되기 전까지 남아있는 등 더 오랜기간 동안 컴퓨터에 저장되는 쿠키도 있습니다(지속적 쿠키). 

## 🪐 쿠키는 어디에 저장되나요?
- 웹 브라우저는 사용자 기기의 지정된 파일에 쿠키를 저장합니다.예를 들어, Google Chrome 웹 브라우저는 모든 쿠키를 "Cookies"라는 파일에 저장합니다.Chrome 사용자는 개발자 도구를 열고 "애플리케이션" 탭을 클릭한 다음 왼쪽 메뉴에서 "쿠키"를 클릭하여 브라우저에 저장된 쿠키를 확인할 수 있습니다.

## 🚀 쿠키는 왜 써야 할까요?
쿠키는 다음과 같이 사용 할 수 있습니다.

1. 필수적인 쿠키
   - 필수적인 쿠키는 페이지 탐색, 웹사이트의 보안영역 접속, 그리고 검색을 포함한 웹사이트의 기본적인 기능의 활성화를 목적으로 사용되고 있습니다. 
  
2. 기능 쿠키
   - 기능 쿠키는 웹사이트가 접속자의 지역 및 언어 등 웹사이트의 행태 및 외관에 영향을 줄 수 있는 접속자 설정을 저장하도록 허용하며, 접속자 설정에 따라 웹사이트가 작동하도록 도움을 줍니다.
  
3. 성능 쿠키
   - 성능 쿠키는 정보의 익명 수집 및 보고를 통해 웹사이트 운영자가 방문자와 웹사이트 사이의 상호작용을 이해하는데에 도움을 주며, 유저와의 상호관계에 대한 통계자료를 제공함으로써 웹사이트 운영자가 더욱 최적화된 웹사이트를 개발하는데에 기여합니다.
  
4. 마케팅 쿠키
   - 마케팅 쿠키는 유저의 웹사이트 방문 내역을 추적하며, 쿠키 제공자가 접속자의 경향 및 웹사이트 이용 패턴을 파악하도록 함으로써 유저에게 관련성 높은 광고나 제품이 제공되는데에 기여합니다.


## 🦖 쿠키는 어떤 용도로 사용될까요?
1. 사용자 세션
    - 쿠키는 웹 사이트 활동을 특정 사용자와 연결하는 데 도움이 됩니다.세션 쿠키에는 사용자 세션과 해당 사용자의 관련 데이터 및 콘텐츠를 일치시키는 고유 문자열(문자와 숫자의 조합)이 포함되어 있습니다.

    - Alice가 쇼핑 웹 사이트에 계정이 있다고 가정해 보겠습니다. Alice가 웹 사이트 홈페이지에서 자신의 계정에 로그인합니다. Alice가 로그인하면 웹 사이트 서버에서 세션 쿠키가 생성되고 이 쿠키가 Alice의 브라우저로 전송됩니다. 이 쿠키에서 웹 사이트에 Alice의 계정 콘텐츠를 로드하도록 지시되므로 이제 홈페이지에 "환영합니다, Alice"라는 메시지가 표시됩니다.
  
    그런 다음 Alice는 청바지 한 켤레가 표시된 제품 페이지를 클릭합니다. Alice의 웹 브라우저에서 청바지 제품 페이지에 대한 HTTP 요청이 웹 사이트로 전송되면 요청에 Alice의 세션 쿠키가 포함됩니다. 웹 사이트에 이 쿠키가 있으므로 사용자가 Alice로 인식되고 새 페이지가 로드될 때 다시 로그인할 필요가 없습니다.

 2. 개인화
    - 쿠키가 웹 사이트에서 사용자 행동 또는 사용자 기본 설정이 "기억"되는 데 도움이 되므로 웹 사이트에서 사용자 경험이 맞춤화될 수 있습니다.

    Alice가 쇼핑 웹 사이트에서 로그아웃하면 사용자 이름이 쿠키에 저장되어 웹 브라우저로 전송될 수 있습니다. 다음에 해당 웹 사이트를 로드할 때 웹 브라우저에서는 이 쿠키가 웹 서버로 전송되고, 웹 서버에는 Alice에게 지난번에 사용한 사용자 이름으로 로그인하라는 메시지가 표시됩니다.

 3. 추적
    - 일부 쿠키에는 사용자가 방문한 웹 사이트가 기록됩니다.이 정보는 다음에 브라우저가 해당 서버에서 콘텐츠를 로드할 때 쿠키를 생성한 서버로 전송됩니다.타사 추적 쿠키를 사용하면 브라우저가 해당 추적 서비스를 사용하는 웹 사이트를 로드할 때마다 이 프로세스가 수행됩니다.

    Alice가 이전에 브라우저에 추적 쿠키를 전송한 웹 사이트를 방문한 적이 있는 경우, 이 쿠키에는 Alice가 현재 청바지 제품 페이지를 보고 있다는 사실이 기록될 수 있습니다. 다음에 Alice가 이 추적 서비스를 사용하는 웹 사이트를 로드할 때 청바지 광고가 표시될 수 있습니다.

    그러나 쿠키를 추적하는 데 광고만이 사용되는 것은 아닙니다.또한 많은 분석 서비스에서 추적 쿠키를 사용하여 익명으로 사용자 활동을 기록합니다.

## 쿠키의 다른 유형은?
- 알아야 할 가장 중요한 쿠키 유형 몇 가지는 다음과 같습니다.

**세션 쿠키**
  - 세션 쿠키는 웹 사이트에서 사용자의 세션을 추적하는 데 도움이 됩니다. 세션 쿠키는 사용자의 세션이 종료된 후, 즉 사용자가 웹 사이트에서 계정에서 로그아웃하거나 웹 사이트를 종료하면 삭제됩니다. 세션 쿠키는 만료일이 없으므로 세션이 끝나면 삭제되어야 함을 브라우저에 알립니다.

**영구 쿠키**
  - 세션 쿠키와 달리 영구 쿠키는 하루, 일주일, 몇 달, 심지어 몇 년까지 미리 정해진 기간 동안 사용자의 브라우저에 남아 있습니다. 영구 쿠키에는 항상 만료일이 포함됩니다.

**인증 쿠키**
  - 인증 쿠키는 사용자 세션을 관리하는 데 도움이 되며, 사용자가 브라우저를 통해 계정에 로그인할 때 생성됩니다. 사용자 계정 정보를 쿠키 식별자 문자열과 연결하여 중요한 정보가 올바른 사용자 세션에 전달되도록 합니다.

**추적 쿠키**
  - 추적 쿠키는 추적 서비스에서 생성됩니다. 추적 쿠키는 사용자 활동을 기록하고, 브라우저는 다음에 해당 추적 서비스를 사용하는 웹 사이트를 로드할 때 이 기록을 관련 추적 서비스로 전송합니다.

**좀비 쿠키**
  - 인기 소설의 "좀비"처럼 좀비 쿠키는 삭제된 후 다시 생성됩니다. 좀비 쿠키는 브라우저의 일반적인 쿠키 저장 위치 외부에 자신의 백업 버전을 생성합니다. 이러한 백업을 사용하여 삭제된 후 브라우저에 다시 나타납니다. 좀비 쿠키는 부도덕한 광고 네트워크나 심지어 사이버 공격자들이 사용하기도 합니다.


```toc

```
