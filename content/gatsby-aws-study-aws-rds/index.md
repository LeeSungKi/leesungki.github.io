---
emoji: 🤞
title: AWS RDS 란?
date: '2022-02-17 13:54:00'
author: 쩡기
tags: AWS RDS aws rds 데이터베이스 rds생성 rds란?
categories: AWS
imageUrl: 'rds.png'
---

## 📌 Amazon RDS란?

**RDS는 AWS 클라우드에서 관계형 데이터베이스를 더 쉽게 설치, 운영 및 확장할 수 있는 웹 서비스이다.**

> ✅ 이 서비스는 산업 표준 관계형 데이터베이스를 위한 경제적이고 크기 조절이 가능한 용량을 제공하고 공통 데이터베이스 관리 작업을 관리한다.

### 📌Amazon RDS의 개요

**AWS 클라우드에서 관계형 데이터베이스를 실행해야 하는 이유는 AWS가 관계형 데이터베이스의 까다롭고 번거로운 관리 작업을 대부분 대신하기 때문**


### 📌 DB 인스턴스
DB 인스턴스는 AWS 클라우드에 있는 격리된 데이터베이스 환경입니다. Amazon RDS의 기본 빌딩 블록은 DB 인스턴스입니다.

DB 인스턴스에 사용자가 만든 데이터베이스가 하나 이상 포함될 수 있습니다. 독립 실행형 데이터베이스 인스턴스와 함께 사용하는 것과 동일한 도구 및 애플리케이션을 사용하여 DB 인스턴스에 액세스할 수 있습니다. AWS Command Line Interface, Amazon RDS API 또는 AWS Management Console을 사용해 DB 인스턴스를 생성하고 수정할 수 있습니다.

<h3>DB 엔진</h3>

DB 엔진은 DB 인스턴스에서 실행되는 특정 관계형 데이터베이스 소프트웨어입니다. Amazon RDS에서는 현재 다음과 같은 엔진을 지원

- MySQL
- MariaDB
- PostgreSQL
- Oracle
- Microsoft SQL Server

### 📌 RDS 2가지 데이터 백업 기능

- Automated Backups (자동 백업)

    RDS 생성 시 디폴트 설정 기능, 백업 정보는 S3 버킷(특정 조건에 도달시 무료x)에 저장된다. RDS 스토리지만큼만 S3 스토리지를 갖게 된다.

    ① Retention Period(1-35일) 안의 어떤 시간으로 돌아가게 할 수 있음 //Retention Period은 Point In Time(PIT)기능이라고 할 수 있음,

    ② AB는 그날 생성된 스냅샷과 Transaction logs(TL)을 참고함
    
    ③ 디폴트로 AB기능이 설정되어 있으며 백업 정보는 S3에 저장
    
    ④ AB동안 약간의 I/O suspension이 존재할 수 있음 -> Latency



- DB Snapshots (데이터베이스 스냅샷)

    ① 주로 사용자에 의해 실행됨

    ② 원본 RDS Instance를 삭제해도 스냅샷은 존재함 (vs AB) //가장 큰 장점, 스냅샷만으로도 RDS인스턴스 복원가능, AB는 인스턴스 삭제시 스냅샷 모두 삭제

즉, RDS 데이터베이스 백업시 새로운 RDS 인스턴스와 그에 해당하는 RDS Endpoint가 생기는 것이다.
original.ap-northeast-2.rds.amazonaws.com(원본 엔드포인트)
restored.ap-northeast-2.rds.amazonaws.com(백업 엔드포인트)
원본 엔드포인트과 백업 엔드포인트는 두개는 완전 다른 객체가 된다.

<br>
<br>

출처: https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Concepts.DBInstance

```toc

```
