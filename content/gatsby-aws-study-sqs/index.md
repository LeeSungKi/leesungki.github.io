---
emoji: 🚀
title: Amazon Simple Queue(SQS) 란?
date: '2022-03-24 16:00:00'
author: 쩡기
tags: AWS SQS SQS생성 SQS만들기 SQS사용법 SQS개념
categories: AWS
imageUrl: 'SQS.png'
---

## 🎈 Amazon Simple Queue 서비스란 무엇입니까

**`Amazon Simple Queue Service (Amazon SQS) 는 내구력 있고 가용성이 뛰어난 보안 호스팅 대기열을 제공하며 이를 통해 분산 소프트웨어 시스템과 구성 요소를 통합 및 분리할 수 있습니다.`**


## 🍕 Amazon SQS 사용의 이점
- 보안–제어Amazon SQS 대기열로 메시지를 전송하고 이 대기열로부터의 메시지를 수신할 수 있는 사람

- 서버 측 암호화 (SSE)는 에서 관리되는 키를 사용하여 대기열의 메시지 내용을 보호함으로써 민감한 데이터를 전송할 수 있습니다.AWS Key Management Service(AWS KMS).

- 내구성— 메시지 안전을 위해 Amazon SQS 는 메시지를 여러 서버에 저장합니다. 표준 대기열 지원최소 1회의 메시지 전송및 FIFO 대기열 지원정확히 한 번 메시지 처리.

- 가용성— Amazon SQS 사용중복 인프라는 메시지에 대한 고도의 동시 액세스와 메시지 생성 및 소비에 대한 고가용성을 제공합니다.

- 확장성— Amazon SQS 각각 처리할 수 있습니다.요청 버퍼링독립적으로 투명하게 확장하여 프로비저닝 지침 없이도 로드 증가 또는 급증을 처리합니다.

- 안정성— Amazon SQS 는 처리 중에 메시지를 잠그므로 여러 생산자와 소비자가 동시에 메시지를 전송하고 이를 통해 메시지를 수신할 수 있습니다.

- 사용자 지정— 대기열이 똑같을 필요는 없습니다. 예를 들어대기열에 기본 지연 설정. 256KB보다 큰 메시지 내용을 저장할 수 있습니다.Amazon Simple Simple Storage Service (Amazon S3) 사용또는 Amazon SQS가 Amazon S3 객체에 대한 포인터를 들고 있는 Amazon DynamoDB를 사용하거나 큰 메시지를 더 작은 메시지로 분할할 수 있습니다.

출처: https://docs.aws.amazon.com/ko_kr/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html [UsefulToKnow]

## 🍔 대기열 유형

|표준 대기열|FIFO 대기열|
|-|-|
|무제한 처리량 — 표준 대기열은 API 작업별로 초당 거의 무제한의 API 호출을 지원합니다.SendMessage,ReceiveMessage또는DeleteMessage.|높은 처리량 — 사용하는배치FIFO 대기열은 API 메서드별로 초당 최대 3,000개의 메시지를 지원합니다.SendMessageBatch,ReceiveMessage또는DeleteMessageBatch.초당 3000개의 메시지는 300개의 API 호출을 나타내며, 각각 10개의 메시지를 일괄 처리합니다.
최소 1회 전송— 메시지가 적어도 한 번 전달되고, 가끔 2개 이상의 메시지 복사본이 전달될 수 있습니다.|정확히 1회 처리— 메시지가 한 번 전달되고 소비자가 이를 처리 및 삭제할 때까지 유지됩니다. 중복 항목을 대기열에 삽입하지 않습니다.
주문은 보장되지 않음— 가끔 메시지가 전송된 순서와 다르게 전달될 수 있습니다.|선착순 배송— 메시지가 전송되고 수신되는 순서가 엄격하게 유지됩니다. 

## 🎴 사용이점

- 관리 오버헤드 제거
    - 가용성, 확장성, 완젼관리형
- 메시지 전달 안정성
    - 메시지 손실 없이 전달 가능
    - 시스템간 커플링 해소
    - 메시지 복제본 저장
- 데이터 안전성 유지
    - KMS 이용한 안전한 메시지 관리
    - CloudTrail 키사용 내역 기록
- 탄력적, 비용효율적
    - 동적확장 지원
    - 용량계획, 사전 프로비저닝 고민 필요 없음

## 🌭 마무리
위와 같은 특성과 기능을 제공하므로 SQS를 사용하여 간다한 실습을 해보자.

<br>
<br>

```toc

```
