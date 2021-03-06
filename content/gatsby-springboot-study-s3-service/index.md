---
emoji: ๐
title: AWS S3 ํ์ผ ์๋ก๋,๋ค์ด๋ก๋
date: '2022-03-07 13:26:00'
author: ์ฉก๊ธฐ
tags: AWS S3ํ์ผ ์๋ก๋ ๋ค์ด๋ก๋
categories: SpringBoot
imageUrl: 'springboot.png'
---

## ๐ ๊ฐ์

์ด์  ํฌ์คํ์์ S3์ ๋ํด์ ๊ฐ๋จํ๊ฒ ๋ค๋ค์๋ค. 

์๋ฒ์๋ S3์ ํ์ผ์ ์ฌ๋ฆฌ๋ ๊ณผ์ ์ ํฌ์คํํ๋ ค ํ๋ค.

> โ S3์ ๋ํด์๋ ์ด์  ํฌ์คํ ์ฐธ๊ณ  [S3๋?](https://leesungki.github.io/gatsby-aws-study-s3/)

> ๐ฆบ S3 ๋ฒํท ์์ฑ์ ๋ํด์๋ ์ด์  ํฌ์คํ ์ฐธ๊ณ  [S3 ๋ฒํท ์์ฑ](https://leesungki.github.io/gatsby-aws-study-s3/)

## ๐ S3 ํ์ผ ์๋ก๋

1. ๋ฒํท ์์ฑ 

์ผ๋จ ๋๋ ์๋ ๊ทธ๋ฆผ์ฒ๋ผ file-upload-test-lee๋ผ๋ ๋ช์นญ์ผ๋ก ํผ๋ธ๋ฆญํ ๋ฒํท์ ํ๋ ์์ฑํ๋ค.
![springboots3.PNG](springboots3.PNG)

ํด๋น ๋ฒํท์ ํด๋ฆญํ์ฌ ๋ค์ด๊ฐ๋ฉด ์๋ฌด๋ฐ ๊ฐ์ฒด๋ ์๋ ์ํ์ด๋ค.
![springboots31.PNG](springboots31.PNG)
 
๊ทธ๋ฆฌ๊ณ  iam ๊ถํ์ ์ฌ์ฉ์์๊ฒ S3 FullAccess ๊ถํ์ ๋ถ์ฌํด์ผ ํฉ๋๋ค. (์ด๊ฒ์ด ์์ด์ผ S3์ ํ์ผ ์๋ก๋๋ฅผ ํ  ์ ์์ต๋๋ค.) 

์ผ๋จ aws ์์์์ ์์์ ์ด ์ ๋๋ง ํด์ฃผ๋ฉด ๋๋ค. 

์ด์  ์ค์  ์ ํ๋ฆฌ์ผ์ด์์์ aws s3 ์๋น์ค๋ฅผ ๊ตฌํํด ๋ณด์.

2. AmazonS3ClientBuilder ๋ฅผ ์ฌ์ฉํ ์๋ก๋ ๊ตฌํ

์์กด์ฑ ์ถ๊ฐ

```
implementation group: 'org.springframework.cloud', name: 'spring-cloud-starter-aws', version: '2.2.5.RELEASE'
```
ํ๋ก์ ํธ ๊ตฌ์กฐ
```
common
    ใดconfig
        ใดAmazonS3Config
controller
    ใดCheckController
aws
    ใดAwsSecret
    ใดSecretManagerBuild
service
    ใดS3Service   
resources
    ใดapplication.yml
    ใดstatic.image.test
        ใดmey.jpg      
```

- AmazonS3Config 
- CheckController
- AwsSecret
- SecretManagerBuild
- S3Service
- application
- mey.jpg: ๋ก์ปฌ ํ์คํธ์ฉ ์ด๋ฏธ์งํ์ผ์ ๋ฃ์ด์คฌ๋ค.

๋จผ์  ๋๋ s3์ ์ ๊ทผํ๊ธฐ ์ํด ํ์ํ ์ฌ์ฉ์์ ์ ๋ณด๋ฅผ secretmanager๋ฅผ ํตํด ๋ฐ์์ฌ ๊ฒ์ด๊ธฐ ๋๋ฌธ์ ์์ ๊ฐ์ด ๊ตฌ์กฐ๋ฅผ ๋ง๋ค์ด ์ฃผ์๋ค. 

ํด๋น ๋ถ๋ถ์ ๋ํด์๋ ์ด์  ํฌ์คํ์ ์ฐธ๊ณ  ํ์. 

[์ฐธ๊ณ ](https://leesungki.github.io/gatsby-springboot-study-secretsManager/)

application.yml

```yml
secret:
  name:
    #_dev arn
    key: #์ํฌ๋ฆฟ ๋งค๋์  arn
    crawler: #์ํฌ๋ฆฟ ๋งค๋์  arn
    ecm: #์ํฌ๋ฆฟ ๋งค๋์  arn
cloud:
  aws:
    region:
      static: ap-northeast-2
    stack:
      auto: false
    s3:
      bucket: file-upload-test-lee
```

application.yml ์ aws ๊ด๋ จ ์ ๋ณด๋ฅผ ๊ธฐ์ฌํด ์ค๋ค.


AmazonS3Config

```java
@Slf4j
@Configuration
public class AmazonS3Config {
    /**
     * aws ๊ฐ์ฉ ์ง์ญ
     */
    @Value("${cloud.aws.region.static}")
    private String region;
    /**
     * secretmanager key arn
     */
    @Value("${secret.name.key}")
    private String secretName;
    /**
     * s3 ์ ๊ทผ์ ์ํ ์ํ ์ฌ์ฉ์ bean
     */
    @Bean
    public AmazonS3Client amazonS3Client() {
        log.info("------------------------------------->AmazonS3Client");
        AwsSecret secretKeys = SecretManagerBuild.getSecret(secretName,region);
        String accessKey = secretKeys.getAws_ac_key();
        String secretKey = secretKeys.getAws_se_key();

        BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKey, secretKey);
        return (AmazonS3Client) AmazonS3ClientBuilder.standard()
                .withRegion(region)
                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
                .build();
    }
}
```
AmazonS3ClientBuilder ๋ฅผํตํด ์ ๊ทผ ์ ๋ณด๋ฅผ ๋ง๋ค์ด ์ค๋ค.

S3Service

```java
@Slf4j
@RequiredArgsConstructor
@Component
public class S3Service {
    /**
     * s3 ์ ๊ทผ ์ ๋ณด
     */
    private final AmazonS3Client amazonS3Client;
    /**
     * S3 ๋ฒํท ๋ช
     */
    @Value("${cloud.aws.s3.bucket}")
    public String bucket;
    /**
     * ๊ฐ์ฒด url์ ์ฝ์ด์จ๋ค
     * @param {string} bucket ๋ฒํท๋ช
     * @param {string} fileName ํ์ผ๋ช
     * @returns {string} imageUrl ์ด๋ฏธ์ง url
     */
    public String read(String fileName) {
        String imageUrl = amazonS3Client.getUrl(bucket, fileName).toString();
        return imageUrl;
    }
    /**
     * S3 ํ์ผ ์๋ก๋๋ฅผ ์ํ ๊ฒฝ๋ก ์ฌ์ ์
     * @param {File} uploadFile ์๋ก๋ํ  ํ์ผ
     * @param {string} dirName ๊ฒฝ๋ก๋ช
     * @returns {string} uploadImageUrl
     */
    public String uploadMultipart(MultipartFile multipartFile, String dirName) throws IOException {
        File uploadFile = convert(multipartFile)  // ํ์ผ ๋ณํํ  ์ ์์ผ๋ฉด ์๋ฌ
                .orElseThrow(() -> new IllegalArgumentException("error: MultipartFile -> File convert fail"));

        return upload(uploadFile, dirName);
    }
    /**
     * S3 ํ์ผ ์๋ก๋๋ฅผ ์ํ ๊ฒฝ๋ก ์ฌ์ ์
     * @param {File} uploadFile ์๋ก๋ํ  ํ์ผ
     * @param {string} dirName ๊ฒฝ๋ก๋ช
     * @returns {string} uploadImageUrl
     */
    public String upload(File uploadFile, String dirName) {
        String fileName = dirName + "/" + uploadFile.getName();
        String uploadImageUrl = putS3(uploadFile, fileName);
        removeNewFile(uploadFile);
        return uploadImageUrl;
    }
    /**
     * S3 ์๋ก๋
     * @param {File} uploadFile ์๋ก๋ํ  ํ์ผ
     * @param {string} fileName ํ์ผ๋ช
     * @returns {string} awsS3UrlName ์๋ก๋๋ url
     */
    private String putS3(File uploadFile, String fileName) {
        amazonS3Client.putObject(new PutObjectRequest(bucket, fileName, uploadFile).withCannedAcl(CannedAccessControlList.PublicRead));
        String awsS3UrlName = amazonS3Client.getUrl(bucket, fileName).toString();
        return awsS3UrlName;
    }
    /**
     * S3 ๋ค์ด๋ก๋
     * @param {string} fileName ํ์ผ๋ช
     * @returns {S3Object} obj ๊ฐ์ฒด
     */
    public ResponseEntity<byte[]> download(String storedFileName) throws IOException{
        S3Object o = amazonS3Client.getObject(new GetObjectRequest(bucket, storedFileName));
        S3ObjectInputStream objectInputStream = o.getObjectContent();
        byte[] bytes = IOUtils.toByteArray(objectInputStream);
        String fileName = URLEncoder.encode(storedFileName, "UTF-8").replaceAll("\\+", "%20");
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        httpHeaders.setContentLength(bytes.length);
        httpHeaders.setContentDispositionFormData("attachment", fileName);

        return new ResponseEntity<>(bytes, httpHeaders, HttpStatus.OK);
    }

    // ๋ก์ปฌ์ ์ ์ฅ๋ ์ด๋ฏธ์ง ์ง์ฐ๊ธฐ
    private void removeNewFile(File targetFile) {
        if (targetFile.delete()) {
            log.info("File delete success");
            return;
        }
        log.info("File delete fail");
    }
    // ๋ก์ปฌ์ ํ์ผ ์๋ก๋ ํ๊ธฐ
    private Optional<File> convert(MultipartFile file) throws IOException {
        File convertFile = new File(System.getProperty("user.dir") + "/" + file.getOriginalFilename());
        if (convertFile.createNewFile()) { // ๋ฐ๋ก ์์์ ์ง์ ํ ๊ฒฝ๋ก์ File์ด ์์ฑ๋จ (๊ฒฝ๋ก๊ฐ ์๋ชป๋์๋ค๋ฉด ์์ฑ ๋ถ๊ฐ๋ฅ)
            try (FileOutputStream fos = new FileOutputStream(convertFile)) { // FileOutputStream ๋ฐ์ดํฐ๋ฅผ ํ์ผ์ ๋ฐ์ดํธ ์คํธ๋ฆผ์ผ๋ก ์ ์ฅํ๊ธฐ ์ํจ
                fos.write(file.getBytes());
            }
            return Optional.of(convertFile);
        }

        return Optional.empty();
    }
}
```

S3์ ์ ๊ทผ ํ ๋ด๊ฐ ํ์ํ ์์๋ค์ ์ ์ํด์ค๋ค.

CheckController

```java
@RestController
public class CheckController {
    @Autowired
    private S3Service s3Service;
    //multipartfile ์๋ก๋์
    @GetMapping("/fileUpload")
    public String check(@RequestParam("file") MultipartFile file){
        try {
            s3Service.uploadMultipart(file,"uploadTest");
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "OK";
    }
    //์๋ฒ์ ์ ์ฅ๋์ด ์๋ ํ์ผ ์๋ก๋์
    @GetMapping("/localUpload")
    public String fileUpload(){
        try {
            String fileName = "mey.jpg";
            File file = ResourceUtils.getFile("classpath:static/image/test/"+fileName);
            s3Service.upload(file,"uploadTest");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return "OK";
    }
    //S3์ ์ ์ฅ๋ ํ์ผ ๋ค์ด๋ก๋
    @GetMapping("/localDown")
    public ResponseEntity<byte[]> fileDownload() throws  IOException{
        return s3Service.download("uploadTest/mey.jpg");
    }
}
```
๋๋ ๋ ๊ฐ์ง ๋ฐฉ์์ ํ์คํธํ๋ ค ํ๋ค 

์ฒซ ๋ฒ์งธ resources ์์ญ์ ๋ด๊ฐ ๋ฏธ๋ฆฌ ๋ฃ์ด๋ ์ด๋ฏธ์ง ํ์ผ์ ์๋ก๋ํ๋ ๋ฐฉ์ 

๋ ๋ฒ์งธ ํฌ์คํธ ๋งจ์ผ๋ก multipartfile์ ๋ณด๋ด ์๋ก๋ํ๋ ๋ฐฉ์ 

์ฌ์ค ๋ ๋ค ๋ก์ปฌ์ ํ๋ฒ ์ ์ฅํ๋ ๊ณผ์ ์ด ํ์ํ๋ค s3 service๋ฅผ ๋ณด๋ฉด ๋ ์์ธํ ์ ์ ์๋ค.

4. ํฌ์คํธ ๋งจ์ ํตํ ํ์คํธ

๋จผ์  ์ฒซ ๋ฒ์งธ ๋ฐฉ์์ ํ์คํธํด๋ณด์ ์๋์ ๊ฐ์ด ์์ฒญ์ ํ์ ๋

![springboots32.PNG](springboots32.PNG)

๋ด๊ฐ ์์ฑํ ๋ฒํท์ ์ค์ ํ ํด๋๋ช์ด ์๊ธฐ๊ณ  ํด๋ฆญํด๋ณด๋ฉด ๋ก์ปฌ์ ๋ฃ์ด๋จ๋ ํ์ผ์ด ์ ์ฅ๋์ด ์๋ค.

![springboots33.PNG](springboots33.PNG)

![springboots34.PNG](springboots34.PNG)

๋ ๋ฒ์งธ ๋ฐฉ์๋ ํ์คํธ๋ฅผ ํด๋ณด์ 

์๋์ ๊ฐ์ด ํ์ผ์ ๋ฃ์ด์ ์์ฒญํด ๋ณด๋ฉด

![springboots35.PNG](springboots35.PNG)

๊ฐ์ ๋ฒํท์ ํด๋์ ์๋์ ๊ฐ์ด ๋ด๊ฐ ๋ณด๋ธ ํ์ผ์ด ์๋ก๋๋ ๊ฑธ ๋ณผ ์ ์๋ค.

![springboots36.PNG](springboots36.PNG)
 
5. S3 ๊ฐ์ฒด ๋ค์ด๋ก๋ ํ์คํธ 

๋ธ๋ผ์ฐ์  ์ฐฝ์ ํ๋ ์ด๊ณ  ๋ค์ด๋ก๋ ํ์คํธ๋ฅผ ํด๋ณด์ 

์๋์ฒ๋ผ ๋ด๊ฐ ๋ฐฉ๊ธ ์๋ก๋ํ ํ์ผ์ด ์ ๋ค์ด๋ก๋๋๋ ๊ฑธ ํ์ธํ  ์ ์๋ค.

![springboots37.PNG](springboots37.PNG)

## ๐ญ๋ง๋ฌด๋ฆฌ
์ด์ฒ๋ผ ๊ฐ๋จํ๊ฒ springboot๋ฅผ ์ฌ์ฉํ์ฌ s3์ ์ ๊ทผ ํ ํ์ผ ์๋ก๋ ๋ค์ด๋ก๋๋ฅผ ๊ตฌํํด ๋ณด์๋ค. 

๊ต์ฅํ ๊ฐ๋จํ ์์ ์ด๋ฏ๋ก ๊ณต์๋ฌธ์ ๋ฑ์ ์ฐธ๊ณ ํ์ฌ ์ข ๋ ์ฌ๋ฌ ๋ฐฉ์์ผ๋ก ์ฌ์ฉ์ด ๊ฐ๋ฅํ๋ค ์๊ฐ๋๋ค.

```toc

```
