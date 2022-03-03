---
emoji: 💡
title: Spring Boot + Secrets Manager + 다중 RDS 연동 (SSH 터널링)
date: '2022-03-03 17:00:00'
author: 쩡기
tags: spring boot AWS Secrets Manager 연동 SPRING BOOT RDS 연동 다중 db연동 multidb rds 여러개 rds 다중연결
categories: SpringBoot
imageUrl: 'springboot.png'
---

## ✅ 개요
AWS 의 SecretsManager의 RDS 정보를 받아 두개의 AWS RDS에 접근하여 데이터를 가져와보자
<br>

### 🔑RDS 생성
먼저 AWS 에 RDS 를 2개 생성해야 한다.
나는 미리 생성해 놨다.
> 🦄 mySQL RDS 생성방법은 [링크](https://leesungki.github.io/gatsby-aws-study-aws-rds-conection-mySQL/)를 참고해주세요!

> 🦄 postegreSQL RDS 생성방법은 [링크](https://leesungki.github.io/gatsby-aws-study-aws-rds-conection-postgreSQL/)를 참고해주세요!

> ✨ 비공개 RDS 접근 방법은 [링크](https://leesungki.github.io/gatsby-aws-study-rds-private/)를 참고해주세요!

### 🔑SecretsManager 사용

생성한 보안암호에 AWS RDS의 정보들이 있다. 

두개를 생성해야 한다.

나는 미리 생성해 놨다.
> 🦄 SecretsManager 생성방법은 [링크](https://leesungki.github.io/gatsby-aws-study-secretsManager-tutorial/#rds-데이터-베이스에-대한-자격증명-방식)를 참고해주세요!

### AWS RDS 연동

1. 의존성 추가
```
dependencies {    
    implementation group: 'org.postgresql', name: 'postgresql', version: '42.3.1'
    implementation group: 'mysql', name: 'mysql-connector-java', version: '8.0.27'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation group: 'com.jcraft', name: 'jsch', version: '0.1.55'
    implementation 'org.springframework.cloud:spring-cloud-starter-aws-secrets-manager-config:2.2.6.RELEASE'
}
```
jsch 는 private한 RDS에 접근하기위해 터널링시에 필요한 의존성이므로 추가해 주었다 밑에서 자세하게 다룰예정 일단은 추가해준다.

시크릿 매니저가 생성 되었다면 이제 해당 값을 가져오는 로직이 필요하다.
나는 SecretManagerBuild class를 이용하여 진행하였다.
> 🦄 SecretsManager 값 받아오기 [링크](https://leesungki.github.io/gatsby-springboot-study-secretsManager/#secretmanagerbuild-class-%EC%82%AC%EC%9A%A9)를 참고해주세요!

2. 프로젝트 목록
```
common
    ㄴconfig
        ㄴDBmySQLconfig
        ㄴDBpostgreSQLconfig
entity
    ㄴclassify
        ㄴTbFile
        ㄴTbFileRepository
    ㄴecm
        ㄴUdTblClassTemp
        ㄴUdTblClassTempRepository            
infra
    ㄴaws
        ㄴAwsSecret
        ㄴSecretManagerBuild
        ㄴSSHConnection
resources
    ㄴapplication.yml
```

- DBmySQLconfig: mysql 연동을 위한 config
- DBpostgreSQLconfig: postgresql 연동을 위한 config
- AwsSecret: secretsmanager mapping
- SecretManagerBuild: build secretsmanager value 
- SSHConnection: rds 외부 접근시 터널링 처리
- TbFile: mysql entity
- TbFileRepository: mysql repo
- UdTblClassTemp: postgre entity
- UdTblClassTempRepository: postgresql repo
- application.yml: 환경변수 등등

대략 이런식으로 구성을 하였다.

위의 링크를 참고하면 secretManger값을 받는 부분은 이해할수 있다.
엔티티나 레파지토리 같은 부분도 따로 설명하지 않겠다.
요번 시간 중요한 부분은 ssh터널링과 다중db 연동을 포커스하며 작성하겠다.

여기서부터 재작성 예정
<!-- 03/////////////////////04 -->

<br>
<br>

```toc

```
