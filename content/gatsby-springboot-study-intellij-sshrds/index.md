---
emoji: ๐ณ
title: Intellij AWS RDS(ssh ํฐ๋๋ง) ์ฐ๊ฒฐ
date: '2022-03-03 16:30:00'
author: ์ฉก๊ธฐ
tags: spring boot AWS RDS ssh ์ฐ๋ Intellij aws rds privateRDSSSH
categories: Intellij
imageUrl: 'intelliJ.jpg'
---

## ๊ฐ์
์ด์ ์ ๋ณด์ ๊ฐํ๋ฅผ ์ํด ๋น๊ณต๊ฐ RDS๋ฅผ ๋ง๋ค์ด EC2๋ฅผ ํตํ ์ ์๊ตฌ์ฑ์ ํ์๋ค.

> ๐[์ด์  ํฌ์คํ](https://leesungki.github.io/gatsby-aws-study-rds-private/)

๊ทธ๋ผ IntelliJ์์ ssh ํฐ๋๋ง์ ํตํด ํด๋น rds์ ์ด๋ป๊ฒ ์ ๊ทผ ํ ์ ์์๊น?

## โ aws RDS(MY SQL) SSH ํฐ๋๋ง ์ฐ๊ฒฐํ๊ธฐ

<br>

### ๐datasource ์ฌ์ฉ (keyํ์ผ ํ์ฉ)

1. intellj ์ค๋ฅธ์ชฝ ์๋จ์ datasource ํญ ํด๋ฆญ

![intellij1.PNG](intellij1.PNG)

2. ์ข์ธก + ๋ฒํผ ํด๋ฆญํ data source์์  mySQL ์ ํ 

![intelli2.png](intellj2.png)

3. SSH/SSL ํญ ํด๋ฆญํ Use SSH tunnel ์ฒดํฌ ์ฐ์ธก ... ํด๋ฆญ

![intellijRDS1.PNG](intellijRDS1.PNG)

4. ์๋ ๊ทธ๋ฆผ์ฒ๋ผ ํ์ํ ์ ๋ณด๋ฅผ ๋ฃ์ด์คํ TEST CONNECTION ํด๋ฆญ

![intelljRDS3.PNG](intelljRDS3.PNG)

HOST: ec2 ํผ๋ธ๋ฆญ ip 
USER NAME: ec2-user(๋ฆฌ๋์ค๊ธฐ๋ณธ ์ ์ ๋ช)
PRIVATE KEY FILE: key file ๊ฒฝ๋ก
ํฐ๋๋ง์ด ๋ฌด์ฌํ ๋๋ค๋ฉด 

5. data source ์ ๋ณด๋ฅผ ๋ฃ๊ณ  test connection ํด๋ฆญ

- name:์ฌ์ฉ์์ง์ 
- Host:์์ฑํ RDS์ ์๋ํฌ์ธํธ
- Port:์์ฑํ RDS์ Port
- User:์์ฑํ RDS์ User
- Password:์์ฑํ RDS์ Password

![intellij3.PNG](intellij3.PNG)

ํ์คํธ๊ฐ ์ฑ๊ณต์ ์ผ๋ก ์ด๋ฃจ์ด ์ก์ผ๋ฉด OK ๋ฒํผ ํด๋ฆญ

6. ์ฟผ๋ฆฌ ์ฝ์ ํ์ธ
์ ์์ ์ผ๋ก ๋คํ์ผ๋ฉด ์๋์ ๊ฐ์ด ์ฟผ๋ฆฌ๋ฅผ ์์ฑํ ์ ์๋ ์ฝ์์ด ์ด๋ฆฐ๋ค.

![intellij4.PNG](intellij4.PNG)

### ๐datasource ์ฌ์ฉ (ํจ์ค์๋ ํ์ฉ)
AWS ec2 ์๋ฒ์๋ password๋ก ssh์ ๊ทผ์ด ์๋๋๋ก ๋์ด ์๋ค. 

์๋ ํ์ผ์ ์์ ํ์ฌ ์ ๊ทผ์ด ๋๋๋ก ํด๋ณด์.

1. ec2์ธ์คํด์ค์ ์ ๊ทผํ์ฌ ๋น๋ฐ๋ฒํธ ์ค์ 

- ์ฌ์ฉ์ ๊ณ์ ์ ๋น๋ฐ๋ฒํธ๋ฅผ ์ง์ ํด์ค๋ค.
```
sudo passwd ec2-user
```

- ssh_config ๋ณ๊ฒฝํด์ค๋ค.
```
sudo vi /etc/ssh/sshd_config
```
- PasswordAuthentication์ yes๋ก ๋ณ๊ฒฝ
```
PasswordAuthentication yes
```
- ์ธ์คํด์ค ์ฌ๊ธฐ๋
```
sudo service sshd restart
```

2. SSH/SSL ํญ ํด๋ฆญํ Use SSH tunnel ์ฒดํฌ ์ฐ์ธก ... ํด๋ฆญ

![intellijRDS1.PNG](intellijRDS1.PNG)

3. ์๋ ๊ทธ๋ฆผ์ฒ๋ผ ํ์ํ ์ ๋ณด๋ฅผ ๋ฃ์ด์คํ TEST CONNECTION ํด๋ฆญ

![intelljRDS4.PNG](intelljRDS4.PNG)

HOST: ec2 ํผ๋ธ๋ฆญ ip 
USER NAME: ec2-user(๋ฆฌ๋์ค๊ธฐ๋ณธ ์ ์ ๋ช)
Password: ์ ์ ์ํธ
ํฐ๋๋ง์ด ๋ฌด์ฌํ ๋๋ค๋ฉด 

5. data source ์ ๋ณด๋ฅผ ๋ฃ๊ณ  test connection ํด๋ฆญ

- name:์ฌ์ฉ์์ง์ 
- Host:์์ฑํ RDS์ ์๋ํฌ์ธํธ
- Port:์์ฑํ RDS์ Port
- User:์์ฑํ RDS์ User
- Password:์์ฑํ RDS์ Password

![intellij3.PNG](intellij3.PNG)

ํ์คํธ๊ฐ ์ฑ๊ณต์ ์ผ๋ก ์ด๋ฃจ์ด ์ก์ผ๋ฉด OK ๋ฒํผ ํด๋ฆญ

6. ์ฟผ๋ฆฌ ์ฝ์ ํ์ธ
์ ์์ ์ผ๋ก ๋คํ์ผ๋ฉด ์๋์ ๊ฐ์ด ์ฟผ๋ฆฌ๋ฅผ ์์ฑํ ์ ์๋ ์ฝ์์ด ์ด๋ฆฐ๋ค.

![intellij4.PNG](intellij4.PNG)


## ๐ญ๋ง๋ฌด๋ฆฌ
์์ ๊ฐ์ด aws์์ ๋น๊ณต๊ฐ๋ก ์์ฑ๋ rds์ ์ ๊ทผํ๋ ๋ฐฉ๋ฒ์ ์์๋ณด์๋ค ๋ค์์๋ ๊ฐ๋ฐ์ ์์ค์์์ ssh ํฐ๋๋ง์ ํตํด rds์ ๊ทผํ์ฌ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๋๊ฑธ ํฌ์คํ ํ ์์ ์ด๋ค.

<br>
<br>

```toc

```
