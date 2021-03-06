---
emoji: ๐
title: Spring Boot AWS Secrets Manager ์ฐ๋
date: '2022-02-23 16:54:00'
author: ์ฉก๊ธฐ
tags: spring boot AWS Secrets Manager ์ฐ๋ SPRING BOOT aws ์ฐ๋
categories: SpringBoot
imageUrl: 'springboot.png'
---

## โ Spring Boot ์ฐ๊ฒฐํ๊ธฐ
<br>

### ๐bootstrap.yml ์ฌ์ฉ

1. ์์กด์ฑ ์ถ๊ฐ
```
dependencies {     
    implementation 'org.springframework.cloud:spring-cloud-starter-bootstrap:3.0.3'     
    implementation 'org.springframework.cloud:spring-cloud-starter-aws-secrets-manager-config:2.2.6.RELEASE' 
 }
```

2. ํ๋ก์ ํธ ์๋จ์ bootstrap.ymlํ์ผ์ ์ถ๊ฐํด์ฃผ๊ณ , ์๋์ ๊ฐ์ด ์ค์ 

```yml
aws:
    secretsmanager:
        name: classificator_dev #์ํฌ๋ฆฟ ๋งค๋์ ์ ์ค์ ๋ ๋ณด์ ์ํธ ์ด๋ฆ
cloud:
    aws:
        region:
            static: ap-northeast-2
```
๋์ ๊ฒฝ์ฐ ๋ณด์ ์ํธ ์ด๋ฆ์ด /secret/classificator_dev ์ด๋ค ์์ /secret๋ ํด๋น ๋ณด์๊ฐ์ด ๋ค์ด๊ฐ๋ prefix ๋ผ๊ณ  ๋ณด๋ฉด๋๋ค.
๋ฐ๋ผ์ **/secret/**๋ค์ ๊ฐ์ ๋ฃ์ด์ฃผ๋ฉด ๋๋ค.

3. ์ํฌ๋ฆฟ ๊ฐ ํ์ธ
์๋์ฒ๋ผ ๊ฐํธํ๊ฒ ํ์ธ ํ๊ธฐ์ํด ์ปจํธ๋กค๋ฌ๋ฅผ ํ๋ ์์ฑํด ์ฃผ์๋ค.
```java
@RestController
@RequestMapping("/secrets-check")
public class CheckController {
    @Value("${aws_ac_key}")
    private String aws_ac_key;
    @Value("${aws_se_key}")
    private String aws_se_key;
    @Value("${naver_se_key}")
    private String naver_se_key;
    @Value("${active_check}")
    private String active_check;

    @GetMapping
    public String healthCheck(){

        return "\t"+"aws_ac_key: "+aws_ac_key+"\t"+"aws_se_key: "+aws_se_key+"\t"+"naver_se_key: "+naver_se_key+"\t"+"active_check: "+active_check;
    }
}
```
4. ํฌ์คํธ๋งจ ํธ์ถ
์ ์์ ์ผ๋ก ๊ฐ์ ๊ฐ์ ธ์ค๋์ง ํ์ธํ๋ค.

![springbootsm3.png](springbootsm3.png)

์ํฌ๋ฆฟ ๋งค๋์ ์ ์ ์ฅํ ๊ฐ๋ค์ ํ์ธํ ์ ์๋ค.

์์๊ฐ์ ๋ฐฉ์์ ํ์คํ ๊ฐํธํ๊ณ  ํธํ๋ค ํ์ง๋ง aws ์์ secrets manager๋ฅผ ์ฌ์ฉํ๋ค๋ณด๋ฉด rds์ ์ฐ๊ฒฐ ์ ๋ณด๋ผ๋๊ฐ ์ฌ๋ฌ ๊ฐ๋ค์ ๊ฐ์ ธ์์ผํ๋ ๊ฒฝ์ฐ๊ฐ ๋์๊ธด๋ค.
๊ทธ๋ ๊ธฐ๋์ secrets manager๊ฐ๋ค์ ๊ณตํต์ผ๋ก ๋ฐ์์ ์ฒ๋ฆฌํ ์ ์๋ ๋ถ๋ถ์ด ์๋ค๋ฉด ๋ํธํ๋ค.

### ๐SecretManagerBuild class ์ฌ์ฉ

1. ๋๋ ํ ๋ฆฌ ๊ตฌ์ฑ

![springbootsm4.PNG](springbootsm4.PNG)

2. AwsSecret class
์ํฌ๋ฆฟ ๋ฒจ๋ฅ ๋งคํ
```java
@Getter
@Setter
public class AwsSecret {
    private String aws_ac_key;
    private String aws_se_key;
    private String naver_se_key;
    private String active_check;
    private String username;
    private String password;
    private String host;
    private String engine;
    private String port;
    private String dbInstanceIdentifier;
}
```

3. SecretManagerBuild class
์ํฌ๋ฆฟ๋งค๋์  ์ ๊ทผํ ๊ฐ์ ๋ฐ์์จ๋ค. secretName ์๋ ๋ณด์์ํธ arn ๋ฃ์ด์ค๋ค region์ ์ง์ญ(ap-northeast-2)
```java
public class SecretManagerBuild {
    public static AwsSecret getSecret(String secretName, String region){
        final Gson gson = new Gson();
        AWSSecretsManager client  = AWSSecretsManagerClientBuilder.standard()
                .withRegion(region)
                .build();

        String secret, decodedBinarySecret;
        GetSecretValueRequest getSecretValueRequest = new GetSecretValueRequest()
                .withSecretId(secretName);
        GetSecretValueResult getSecretValueResult = null;
        try {
            getSecretValueResult = client.getSecretValue(getSecretValueRequest);
        } catch (Exception e) {
            throw e;
        }
        if (getSecretValueResult.getSecretString() != null) {
            secret = getSecretValueResult.getSecretString();
            return gson.fromJson(secret, AwsSecret.class);
        }
        return null;
    }
}
```

4. secretCheck controller

```java
@RestController
public class CheckController {
    @GetMapping("/secrets-check2")
    public ResponseEntity secretCheck(){
        AwsSecret secretValue = SecretManagerBuild.getSecret(
                "arn:aws:secretsmanager:ap-northeast-2:040516392204:secret:/secret/classificator_dev-j623rv",
                "ap-northeast-2");

        return new ResponseEntity<>(secretValue, HttpStatus.OK);
    }
}
```

5. ํฌ์คํธ๋งจ ํธ์ถ
์๋์๊ฐ์ด ๊ฐ์ด ์ ์ค๋๊ฑธ ํ์ธํ ์ ์๋ค.

![springbootsm5.png](springbootsm5.png)



## ๐ญ๋ง๋ฌด๋ฆฌ
์์ ๊ธฐ๋ฅ์ ํ์ฉํ์ฌ Secrets Manager๋ฅผ ์ฌ์ฉํ์ฌ aws์ ์๋น์ค๋ฅผ ์ฌ์ฉํ์.

<br>
<br>

```toc

```
