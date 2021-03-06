---
emoji: π
title: AWS SQS + SPRING BOOT μ¬μ©λ²
date: '2022-03-24 16:26:00'
author: μ©‘κΈ°
tags: AWS SQS SPRING BOOT μ¬μ©λ²
categories: SpringBoot
imageUrl: 'springboot.png'
---

## π κ°μ

μ΄μ  ν¬μ€νμμ SQSμ λν΄μ κ°λ¨νκ² λ€λ€μλ€. 

μλ²μλ SQSλ₯Ό SPRING BOOT μμ μ¬μ©νλ λ°©λ²μ μ€μ΅ν΄ λ³΄κ² λ€.

> β SQSμ λν΄μλ μ΄μ  ν¬μ€ν μ°Έκ³  [SQSλ?](https://leesungki.github.io/gatsby-aws-study-sqs/)

> π¦Ί SQS λκΈ°μ΄ μμ± ν μμ ,μ‘μ μ λν΄μλ μ΄μ  ν¬μ€ν μ°Έκ³  [SQS μ¬μ©λ²](https://leesungki.github.io/gatsby-aws-study-sqs-tuto/)

## π μ€μ΅

### πΌ λκΈ°μ΄ μμ± 

μΌλ¨ λλ μλ κ·Έλ¦Όμ²λΌ SQS λκΈ°μ΄μ μμ±νλ€.
![sqs.PNG](sqs.PNG)

ν΄λΉ λκΈ°μ΄ ν΄λ¦­νμ¬ λ€μ΄κ°λ©΄ μΈλΆμ λ³΄μ urlμ νμΈ ν μμλ€.
λμ€μ μ¬μ©νκΈ° μν΄ κΈ°μ΅ν΄λμ
![sqs1.PNG](sqs1.PNG)
 
### π νμ μ€μ νκΈ°

μμ‘΄μ± μΆκ°

```
implementation group: 'org.springframework.cloud', name: 'spring-cloud-starter-aws', version: '2.2.1.RELEASE'
implementation group: 'org.springframework.cloud', name: 'spring-cloud-aws-messaging', version: '2.2.3.RELEASE'
implementation group: 'org.springframework.boot', name: 'spring-boot-starter-validation', version: '2.5.6'//λμ€μ λ©μΈμ§ μ ν¨μ± κ²μ¬λ₯Ό μν¨
```
νλ‘μ νΈ κ΅¬μ‘°
```
controller
    L MainController
config
    L AmazonSqsConfig
aws
    L AmazonSQSSender
    L AmazonSQSSenderImpl
dto
    L EcmDto    
```

application.yml

```yml
cloud:
  aws:
    credentials:
      access-key: xxxxxx
      secret-key: xxxxxx
    region:
      static: ap-northeast-2 # AWS SQSμ λ¦¬μ μ λ³΄
    stack:
      auto: false
    sqs:
      queue:
        name: MyQueue.fifo	# AWSμμ μμ±ν Queue μ΄λ¦
        url: https://sqs.ap-northeast-2.amazonaws.com/xxxx/MyQueue.fifo # μμ±ν SQS ν url
```

application.yml μ aws κ΄λ ¨ μ λ³΄λ₯Ό κΈ°μ¬ν΄ μ€λ€.


### π SQS Configuration ν΄λμ€ μμ±

- application.ymlμ μλ access-key, secret-key κ°μ κ°μ§κ³  AWSCredentialsProvider λΉ μμ±
- Message μ‘μ μ μ¬μ©λλ AmazonSQS λΉ μμ± μ ν΄λΉ credentials μ λ³΄μ region μ λ³΄ μ€μ 
- Message μμ μ μ¬μ©λλ Listener κ΄λ ¨ μ€μ 

```java
@Slf4j
@Configuration
public class AmazonSqsConfig {

	 @Value("${cloud.aws.credentials.access-key}")
    private String accessKey;

    @Value("${cloud.aws.credentials.secret-key}")
    private String secretKey;

    @Value("${cloud.aws.region.static}")
    private String region;
    /**
     * sqs μ κ·Όμ μν μν μ¬μ©μ bean
     */
    @Primary
	@Bean
    public AmazonSQSAsync amazonSQSAws() {
        BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKey, secretKey);
        return AmazonSQSAsyncClientBuilder.standard()
                .withRegion(region)
                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
                .build();
    }	
}
```
AmazonSQSAsyncClientBuilder λ₯Όν΅ν΄ μ κ·Ό μ λ³΄λ₯Ό λ§λ€μ΄ μ€λ€.

### π λ©μΈμ§ Dto μμ±
```java
@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class EcmDto {
	@NotEmpty(message = "ecmIdκ°μ΄ λΉκ°μλλ€.")
	private String ecmId;
}
```

μμ μ΄ λ©μΈμ§λ₯Ό λ³΄λΌλ°©μμΌλ‘ μμ±νλ©΄ λλ€.

### π€ λ©μΈμ§ μ λ¬ μλΉμ€ μμ±

```java
public interface AmazonSQSSenderImpl {
    SendMessageResult sendMessage(EcmDto message) throws JsonProcessingException;
}
```

```java
@RequiredArgsConstructor
@Component
public class AmazonSQSSender implements AmazonSQSSenderImpl {
    @Value("${cloud.aws.sqs.queue.url}")
    private String url;

    private final ObjectMapper objectMapper;
    private final AmazonSQS amazonSQS;

    @Override
    public SendMessageResult sendMessage(EcmDto msg) throws JsonProcessingException {
        SendMessageRequest sendMessageRequest = new SendMessageRequest(url,
                objectMapper.writeValueAsString(msg))
                .withMessageGroupId("sqs-test")
                .withMessageDeduplicationId(UUID.randomUUID().toString());
        return amazonSQS.sendMessage(sendMessageRequest);
    }
}
```

SQSμ λ©μΈμ§ λ³΄λ΄λ λ‘μ§μ μ μνλ€.

### π« νμ€νΈμ© Controller μμ±

```java
@Slf4j
@RequiredArgsConstructor
@RestController
public class MainController {

    private final AmazonSQSSenderImpl amazonSQSSender;

    @PostMapping("/send")
    public String send(@RequestBody EcmDto message) throws JsonProcessingException {
        amazonSQSSender.sendMessage(message);
        return "OK";
    }
}
```

### π ν¬μ€νΈ λ§¨μ ν΅ν λ©μΈμ§ μ‘μ  νμ€νΈ

μλμ κ°μ΄ μμ²­νλ€.

![sqs2.PNG](sqs2.PNG)

sqs μ½μμμ λ©μΈμ§ ν΄λ§ν΄λ³΄λ©΄ λ΄κ° λ³΄λΈ λ©μΈμ§κ° μλκ±Έ νμΈ ν μ μλ€.
![sqs3.PNG](sqs3.PNG)
 
### π₯ λ©μΈμ§ μμ  Listener μμ± 

```java

@Slf4j
@Component
@RequiredArgsConstructor
public class AwsSqsListener {

	@SqsListener(value = "${cloud.aws.sqs.queue.name}", deletionPolicy = SqsMessageDeletionPolicy.NEVER)
	public void listen(@Payload String info, @Headers Map<String, String> headers, Acknowledgment ack) {
		log.info("-------------------------------------start SqsListener");
		log.info("-------------------------------------info {}", info);
		log.info("-------------------------------------headers {}", headers);
        //μμ ν μ­μ μ²λ¦¬
		ack.acknowledge();
	}

}
```
λ©μΈμ§ λ¦¬μ€λ μμ±μ ν΄μ€λ€.

### π ν¬μ€νΈ λ§¨μ ν΅ν λ©μΈμ§ μμ  νμ€νΈ

μλμ κ°μ΄ λ€μ μμ²­νλ€.
  
![sqs2.PNG](sqs2.PNG)


μλμ²λΌ λ΄κ° λ°©κΈ λ³΄λΈ λ©μΈμ§λ₯Ό νμΈν  μ μλ€.

![sqs4.PNG](sqs4.PNG)


## π’ λ§λ¬΄λ¦¬

μ΄μ²λΌ springbootμμ sqsμ μ κ·Ό ν λ©μΈμ§λ₯Ό λ³΄λ΄κ³  λ°λκΈ°λ₯μ κ΅¬νν΄ λ³΄μλ€. 

κ°μ vpcλ΄μ μ»¨νμ΄λλΌλ¦¬ λ©μΈμ§λ₯Ό μ£Όκ³ λ°κΈ° κ΅μ₯ν νΈν κΈ°λ₯κ°λ€.

μ€μ λ‘ λ΄κ° μ§νν νλ‘μ νΈμμλ μ»¨νμ΄λκ° κ°λ¨ν λ©μΈμ§ μ μ‘μ μ¬μ©λμλ€.

```toc

```
