---
emoji: ๐ก
title: Spring Boot + Secrets Manager + ๋ค์ค RDS ์ฐ๋ (SSH ํฐ๋๋ง)
date: '2022-03-03 17:00:00'
author: ์ฉก๊ธฐ
tags: spring boot AWS Secrets Manager ์ฐ๋ SPRING BOOT RDS ์ฐ๋ ๋ค์ค db์ฐ๋ multidb rds ์ฌ๋ฌ๊ฐ rds ๋ค์ค์ฐ๊ฒฐ
categories: SpringBoot
imageUrl: 'springboot.png'
---

## โ ๊ฐ์
AWS ์ SecretsManager์ RDS ์ ๋ณด๋ฅผ ๋ฐ์ ๋๊ฐ์ AWS RDS์ ์ ๊ทผํ์ฌ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์๋ณด์
<br>

### ๐ RDS ์์ฑ
๋จผ์  AWS ์ RDS ๋ฅผ 2๊ฐ ์์ฑํด์ผ ํ๋ค.
๋๋ ๋ฏธ๋ฆฌ ์์ฑํด ๋จ๋ค.
> ๐ฆ mySQL RDS ์์ฑ๋ฐฉ๋ฒ์ [๋งํฌ](https://leesungki.github.io/gatsby-aws-study-aws-rds-conection-mySQL/)๋ฅผ ์ฐธ๊ณ ํด์ฃผ์ธ์!

> ๐ฆ postegreSQL RDS ์์ฑ๋ฐฉ๋ฒ์ [๋งํฌ](https://leesungki.github.io/gatsby-aws-study-aws-rds-conection-postgreSQL/)๋ฅผ ์ฐธ๊ณ ํด์ฃผ์ธ์!

> โจ ๋น๊ณต๊ฐ RDS ์ ๊ทผ ๋ฐฉ๋ฒ์ [๋งํฌ](https://leesungki.github.io/gatsby-aws-study-rds-private/)๋ฅผ ์ฐธ๊ณ ํด์ฃผ์ธ์!

### ๐ SecretsManager ์ฌ์ฉ

์์ฑํ ๋ณด์์ํธ์ AWS RDS์ ์ ๋ณด๋ค์ด ์๋ค. 

๋๊ฐ๋ฅผ ์์ฑํด์ผ ํ๋ค.

๋๋ ๋ฏธ๋ฆฌ ์์ฑํด ๋จ๋ค.
> ๐ฆ SecretsManager ์์ฑ๋ฐฉ๋ฒ์ [๋งํฌ](https://leesungki.github.io/gatsby-aws-study-secretsManager-tutorial/#rds-๋ฐ์ดํฐ-๋ฒ ์ด์ค์-๋ํ-์๊ฒฉ์ฆ๋ช-๋ฐฉ์)๋ฅผ ์ฐธ๊ณ ํด์ฃผ์ธ์!

### ๐ AWS RDS ์ฐ๋

1. ์์กด์ฑ ์ถ๊ฐ
```
dependencies {    
    implementation group: 'org.postgresql', name: 'postgresql', version: '42.3.1'
    implementation group: 'mysql', name: 'mysql-connector-java', version: '8.0.27'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation group: 'com.jcraft', name: 'jsch', version: '0.1.55'
    implementation 'org.springframework.cloud:spring-cloud-starter-aws-secrets-manager-config:2.2.6.RELEASE'
}
```
jsch ๋ privateํ RDS์ ์ ๊ทผํ๊ธฐ์ํด ํฐ๋๋ง์์ ํ์ํ ์์กด์ฑ์ด๋ฏ๋ก ์ถ๊ฐํด ์ฃผ์๋ค ๋ฐ์์ ์์ธํ๊ฒ ๋ค๋ฃฐ์์  ์ผ๋จ์ ์ถ๊ฐํด์ค๋ค.

์ํฌ๋ฆฟ ๋งค๋์ ๊ฐ ์์ฑ ๋์๋ค๋ฉด ์ด์  ํด๋น ๊ฐ์ ๊ฐ์ ธ์ค๋ ๋ก์ง์ด ํ์ํ๋ค.
๋๋ SecretManagerBuild class๋ฅผ ์ด์ฉํ์ฌ ์งํํ์๋ค.
> ๐ฆ SecretsManager ๊ฐ ๋ฐ์์ค๊ธฐ [๋งํฌ](https://leesungki.github.io/gatsby-springboot-study-secretsManager/#secretmanagerbuild-class-%EC%82%AC%EC%9A%A9)๋ฅผ ์ฐธ๊ณ ํด์ฃผ์ธ์!

2. ํ๋ก์ ํธ ๋ชฉ๋ก
```
common
    ใดconfig
        ใดDBmySQLconfig
        ใดDBpostgreSQLconfig
controller
    ใดDataCheckController        
entity
    ใดclassify
        ใดTbFile
        ใดTbFileRepository
    ใดecm
        ใดUdTblClassTemp
        ใดUdTblClassTempRepository            
infra
    ใดaws
        ใดAwsSecret
        ใดSecretManagerBuild
        ใดSSHConnection
resources
    ใดapplication.yml
```

- DBmySQLconfig: mysql ์ฐ๋์ ์ํ config
- DBpostgreSQLconfig: postgresql ์ฐ๋์ ์ํ config
- AwsSecret: secretsmanager mapping
- SecretManagerBuild: build secretsmanager value 
- SSHConnection: rds ์ธ๋ถ ์ ๊ทผ์ ํฐ๋๋ง ์ฒ๋ฆฌ
- ใดDataCheckController: ๋ฐ์ดํฐ ํ์ธ ์ปจํธ๋กค๋ฌ
- TbFile: mysql entity
- TbFileRepository: mysql repo
- UdTblClassTemp: postgre entity
- UdTblClassTempRepository: postgresql repo
- application.yml: ํ๊ฒฝ๋ณ์ ๋ฑ๋ฑ

๋๋ต ์ด๋ฐ์์ผ๋ก ๊ตฌ์ฑ์ ํ์๋ค.

์์ ๋งํฌ๋ฅผ ์ฐธ๊ณ ํ๋ฉด secretManger๊ฐ์ ๋ฐ๋ ๋ถ๋ถ์ ์ดํดํ ์ ์๋ค.
์ํฐํฐ๋ ๋ ํ์งํ ๋ฆฌ ๊ฐ์ ๋ถ๋ถ๋ ๋ฐ๋ก ์ค๋ชํ์ง ์๊ฒ ๋ค.
์๋ฒ ์๊ฐ ์ค์ํ ๋ถ๋ถ์ sshํฐ๋๋ง๊ณผ ๋ค์คdb ์ฐ๋์ ํฌ์ปค์คํ๋ฉฐ ์์ฑํ๊ฒ ๋ค.

3. ์์ค ๊ตฌ์ฑ

application.yml
```yml
secret:
  name:
    #secretsmanager ์์ ๋ฐ์์ฌ ๊ฐ์ arn
    key: arn:aws:secretsmanager:ap-northeast-2:040516392204:secret:/secret/classificator_dev-j623rv
    crawler: arn:aws:secretsmanager:ap-northeast-2:040516392204:secret:/secret/hkmc-mip-rds-crawlerdb-dev-z0wy9H
    ecm: arn:aws:secretsmanager:ap-northeast-2:040516392204:secret:/secret/hkmc-mip-rds-ecm-dev-rR2mgX
cloud:
  aws:
    #๊ฐ์ฉ์ง์ญ
    region:
      static: ap-northeast-2
    stack:
      auto: false
```

์์ arn์ผ๋ก ์ํฌ๋ฆฟ ๋งค๋์ ์ ์ ์ฅ๋์ด ์๋ db์ ๋ณด์ ๋ด๊ฐ ํ์ํ ๊ฐ๋ค์ SecretManagerBuild๋ฅผ ํตํด ๋ฐ์ ๊ฒ์ด๋ค.

AwsSecret
```java
@Getter
@Setter
public class AwsSecret {
    private String aws_ac_key;//์์ธ์คํค
    private String aws_se_key;//์ํฌ๋ฆฟํค
    private String naver_se_key;//๋ค์ด๋ฒ์ํฌ๋ฆฟํค ํ์x
    private String active_check;//ํ๊ฒฝ์ฒดํฌ์ฉ ํ์x
    private String bastion_ip;//ec2์ ํผ๋ธ๋ฆญ ip
    private String bastion_user_name;//ec2 ๋ก๊ทธ์ธ์ ํ์ ์ ์ ๋ช
    private String bastion_user_password;//ec2 ๋ก๊ทธ์ธ์ ํ์ ๋น๋ฐ๋ฒํธ
    
    //db์ ๋ณด
    private String username;
    private String password;
    private String host;
    private String engine;
    private String port;
    private String dbInstanceIdentifier;
    private String dbname;
}
```
์ํฌ๋ฆฟ ๋งค๋์ ์ ์ ์ฅํด๋์ ๊ฐ๋ค์ get,setํด์ฃผ๊ธฐ ์ํจ
๋ณด๋ฉด bastion_ip,bastion_user_name,bastion_user_password ์ด๊ฐ๋ค์ privateํ rds ์ ์ ๊ทผํ๊ธฐ ์ํด ec2๋ฅผ ํตํด sshํฐ๋๋ง์ ํด์ผํ๋๋ฐ ํด๋น ec2์ ํฐ๋๋งํ๊ธฐ ์ํ ์ ๋ณด๋ค์ ๋ฃ์ด๋จ๋ค.

![springbootrds1.png](springbootrds1.png) 

db์ ๋ณด๋ ๊ธฐ๋ณธ์ ์ผ๋ก ์ํฌ๋ฆฟ๋งค๋์ ๋ฅผ ์์ฑํ ๋ ์ฐ๊ฒฐํ๋ฉด ์ ์ฅ๋๋ ์ ๋ณด + dbname์ ์ถ๊ฐํด ์ฃผ์๋ค.

![springbootrds2.png](springbootrds2.png)

SecretManagerBuild

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
์ด์  ํฌ์คํ์ ์ฐธ๊ณ ํ๋ฉด ์ดํด๊ฐ ์ฌ์ธ๊ฒ์ด๋ค.

์ด๋ ๊ฒ ๋ด๊ฐ ํ์ํ ๋น๋ฐ๋ณด์ ๊ฐ๋ค์ ๋ฐ์์ฌ์ ์๊ฒ ๋์๋ค

๋๋ mySQL,postgreSQL ๋๊ฐ์ DB๋ฅผ ์ฌ์ฉํ  ์์ ์ด๋ค.

๋๊ฐ์ DB datasource๋ฅผ ๊ฐ๊ฐ configration์ผ๋ก ์์ฑํ  ์์ ์ด๋ค.

๋จผ์  postgreSQL์ ์ ๊ทผํ ์ ์๊ฒ config๋ฅผ ๋ง๋ค์

DBecmConfig
```java
@Slf4j
@Configuration
@PropertySource({ "classpath:application.yml" })
@EnableJpaRepositories(
    basePackages = "com.example.ecrtest.entity.ecm",
    entityManagerFactoryRef = "ecmEntityManager",
    transactionManagerRef = "ecmTransactionManager"
)
public class DBecmConfig {
    @Value("${cloud.aws.region.static}")
    private String region;
    @Value("${secret.name.ecm}")
    private String secretNameEcm;
    @Value("${secret.name.key}")
    private String secretName;
    /**
     * ๋ฉํฐ ๋ฐ์ดํฐ ์์ค ์ฌ์ฉํ๊ธฐ ์ํ ์ํฐํฐ ๋งค๋์  bean
     */
	@Bean
	public LocalContainerEntityManagerFactoryBean ecmEntityManager() {
       LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		em.setDataSource(ecmDataSource());
		em.setPackagesToScan(new String[] {"com.example.ecrtest.entity.ecm"});
		HibernateJpaVendorAdapter va = new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(va);

        return em;
	}
    /**
     * data source ์์ฑ bean
     */
    @Primary
    @Bean
    public DataSource ecmDataSource() {
        try {
            log.info("------------------------------------->Ecm Data Source");
            AwsSecret dbCredentials = SecretManagerBuild.getSecret(secretNameEcm,region);
            AwsSecret secretKeys = SecretManagerBuild.getSecret(secretName,region);
            DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
            dataSourceBuilder.driverClassName("org.postgresql.Driver");
            dataSourceBuilder.url("jdbc:postgresql://"+ dbCredentials.getHost() +":"+ dbCredentials.getPort() +"/"+"postgres");
            dataSourceBuilder.username(dbCredentials.getUsername());
            dataSourceBuilder.password(dbCredentials.getPassword());
            return dataSourceBuilder.build();
            } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }
    /**
     * db ํธ๋ ์ ์ ๊ด๋ฆฌ bean
     */
    @Primary
    @Bean
    public PlatformTransactionManager ecmTransactionManager() {

        JpaTransactionManager transactionManager
          = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(
          ecmEntityManager().getObject());
        return transactionManager;
    }
}
```
<br>

๊ทธ๋ฐ๋ฐ ๋ฌธ์ ๊ฐ์๋ค mySQL์ privateํ RDS์ด๋ฏ๋ก ์ ๊ทผ์ EC2์ SSH ํฐ๋๋ง์ ํตํด ์ ๊ทผํด์ผํ๋ค.

๋จผ์  sshํฐ๋๋ง์ ์ํด sshconnection์ ์์ฑํด์ฃผ์

SSHConnection
```java
@Slf4j
public class SSHConnection {
    private final static int port = 22;
    private Session session;

    public SSHConnection(int lport, int rport, String host, String remoteHost, String user, String password) {
        try {
            log.info("--------------------------------------------------->SSHConnection");
            JSch jSch = new JSch();
            session = jSch.getSession(user, remoteHost, port);
            session.setPassword(password);
            Properties config = new Properties();
            config.put("StrictHostKeyChecking", "no");
            session.setConfig(config);
            session.connect();
            session.setPortForwardingL(lport, host, rport);
            log.info("--------------------------------------------------->connect");
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
```
์ด๋ ๊ฒ ์์ฑํด์คฌ๋ค. ์ด์  mySQL์ ํฐ๋๋ง์ ํตํด ์ ๊ทผํ datasource๋ฅผ ๋ง๋ค์ด์ฃผ๋ config๋ฅผ ์์ฑํ์

DBcrawlerConfig
```java
@Slf4j
@Configuration
@PropertySource({ "classpath:application.yml" })
@EnableJpaRepositories(
    basePackages = "com.example.ecrtest.entity.classify",
    entityManagerFactoryRef = "crawlerEntityManager",
    transactionManagerRef = "crawlerTransactionManager"
)
public class DBcrawlerConfig {
    @Value("${cloud.aws.region.static}")
    private String region;
    @Value("${secret.name.crawler}")
    private String secretNameCrawler;
    @Value("${secret.name.key}")
    private String secretName;
    @Autowired
	private Environment env;
    /**
     * sshConnection
     */
    private SSHConnection sshConnector;
    @Primary
	@Bean
	public LocalContainerEntityManagerFactoryBean crawlerEntityManager() {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		em.setDataSource(crawlerDataSource());
		em.setPackagesToScan(new String[] {"com.example.ecrtest.entity.classify"});
		HibernateJpaVendorAdapter va = new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(va);

        return em;
	}
    /**
     * data source ์์ฑ bean
     */
	@Primary
    @Bean
    public DataSource crawlerDataSource() {

        try {
            log.info("------------------------------------->crawler Data Source");
            AwsSecret dbCredentials = SecretManagerBuild.getSecret(secretNameCrawler,region);
            AwsSecret secretKeys = SecretManagerBuild.getSecret(secretName,region);
            log.info("------------------------------------->dbCredentials"+dbCredentials.getDbname());
                DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
                dataSourceBuilder.driverClassName("com.mysql.cj.jdbc.Driver");
                if (env.getActiveProfiles()[0].equals("local")){
                    int lport = 11336;
                    int rport = Integer.parseInt(dbCredentials.getPort());
                    sshConnector = new SSHConnection(lport,rport,
                            dbCredentials.getHost(),
                            secretKeys.getBastion_ip(),
                            secretKeys.getBastion_user_name(),
                            secretKeys.getBastion_user_password()
                    );
                    dataSourceBuilder.url("jdbc:mysql://localhost:"+lport+"/"+dbCredentials.getDbname());
                }else {
                    dataSourceBuilder.url("jdbc:mysql://"+ dbCredentials.getHost() +":"+ dbCredentials.getPort() +"/"+dbCredentials.getDbname());
                }
                dataSourceBuilder.username(dbCredentials.getUsername());
                dataSourceBuilder.password(dbCredentials.getPassword());
                return dataSourceBuilder.build();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }
    /**
     * db ํธ๋ ์ ์ ๊ด๋ฆฌ bean
     */
	@Primary
    @Bean
    public PlatformTransactionManager crawlerTransactionManager() {

        JpaTransactionManager transactionManager
          = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(
          crawlerEntityManager().getObject());
        return transactionManager;
    }
}
```
DBecmConfig์ ๋ค๋ฅธ๋ถ๋ถ์ sshconnection์ ์ฌ์ฉํ ์ ๊ทผ์ด๋ผ๋ ๊ฒ์ด๋ค ๋๋ localํ๊ฒฝ์ผ๋๋ง sshํฐ๋๋ง์ ํ๋๋ก ๋ถ๊ธฐ์ฒ๋ฆฌ๋ฅผ ํ์๋๋ฐ

์ด์ ๋ ๊ฐ๋จํ๋ค ์ค์ง์ ์ผ๋ก ์ปจํ์ด๋๊ฐ ์ฌ๋ผ๊ฐ๋ฉด ์ธ์คํด์ค์ ์ฌ๋ผ๊ฐ๊ธฐ๋๋ฌธ์ ๊ทธ๋๋ ssh ํฐ๋๋ง์ ํตํ ์ ๊ทผ์ด ํ์๊ฐ ์์ด์ง๊ธฐ ๋๋ฌธ์ ๋ก์ปฌ์์ ๊ฐ๋ฐํ ๋๋ง ssh ํฐ๋๋ง์ด ํ์ํด ๋ถ๊ธฐํด ์ค๊ฒ์ด๋ค.

์ด์  entity์ repository๋ฅผ ์์ฑํด์ฃผ์

TbFile
```java
@Entity
@Getter
@Table(name = "tb_file")
@NoArgsConstructor
public class TbFile {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false, columnDefinition = "bigint COMMENT 'ํ์ผ id'")
	private long id;
	@Column(name = "wk_id", nullable = false, columnDefinition = "bigint COMMENT '์์ id'")
	private long wk_id;
	@Column(name = "type", nullable = false, columnDefinition = "VARCHAR(32) COMMENT 'ํ์ผ type'")
	private String type;
	@Column(name = "path", nullable = false, columnDefinition = "VARCHAR(1024) COMMENT 'ํ์ผ๊ฒฝ๋ก'")
	private String path;
	@Column(name = "cre_dtm", nullable = false, columnDefinition = "datetime COMMENT '์์ฑ์ผ'")
	private LocalDateTime cre_dtm = LocalDateTime.now();
	@Builder
	public TbFile(long wk_id, String type, String path) {
		this.wk_id = wk_id;
		this.type = type;
		this.path = path;
	}
	
}
```

TbFileRepository
```java
@Repository
public interface TbFileRepository extends JpaRepository<TbFile, Integer>{	
}
```

UdTblClassTemp
```java
@Getter
@NoArgsConstructor
@Entity
@Table(name = "ud_tbl_class_temp")
public class UdTblClassTemp {
	private String category;
	@Id
	private String class_cd;
	private String class_parent_cd;
	private String class_name;
	private String class_name_en;
	private String is_menu;
	private String keyword;
	private String keyword_en;
	private String class_path;
	@Builder
	public UdTblClassTemp(String category, String class_cd, String class_parent_cd, String class_name,
			String class_name_en, String is_menu, String keyword, String keyword_en, String class_path) {
		super();
		this.category = category;
		this.class_cd = class_cd;
		this.class_parent_cd = class_parent_cd;
		this.class_name = class_name;
		this.class_name_en = class_name_en;
		this.is_menu = is_menu;
		this.keyword = keyword;
		this.keyword_en = keyword_en;
		this.class_path = class_path;
	}
	
}
```
UdTblClassTempRepository
```java
@Repository
public interface UdTblClassTempRepository extends JpaRepository<UdTblClassTemp, String>{
}
```
์ด๋ถ๋ถ์ ์์ธํ ์ค๋ช์ํด๋ ์๊ฒ์ด๋ผ ์๊ฐํ๊ณ  ๋์ด๊ฐ๋ค.

์ด์  ๋ฐ์ดํฐ๋ฅผ ์๊ฐ์ ธ ์ค๋์ง ํ์ธํ๊ธฐ ์ํด ๊ฐ๋จํ controller๋ฅผ ๋ง๋ค์ด์ค๋ค

DataCheckController
```java
@RestController
@RequestMapping("/api/v1")
public class DataCheckController {
    @Autowired
    private TbFileRepository tbFileRepository;
    @Autowired
    private UdTblClassTempRepository udTblClassTempRepository;
    @GetMapping("/helthCheck")
    public String helthCheck(){
        return "OK";
    }
    @GetMapping("/getAll")
    public ResponseEntity getAll(){
        List<TbFile> List = new ArrayList<>();
        List = tbFileRepository.findAll();
        return new ResponseEntity<>(List, HttpStatus.OK);
    }
    @GetMapping("/getAll2")
    public ResponseEntity getAll2(){
        List<UdTblClassTemp> List = new ArrayList<>();
        List = udTblClassTempRepository.findAll();
        return new ResponseEntity<>(List, HttpStatus.OK);
    }
}
```
mySQL DB data check
![springbootrds3.PNG](springbootrds3.PNG)

postgreSQL DB data check
![springbootrds4.PNG](springbootrds4.PNG)

์ด๋ ๊ฒ ๋ค์ค RDS ์ ๊ทผ๊ณผ SSHํฐ๋๋ง์ ํตํ ์ ๊ทผ ๋๊ฐ์ง๋ฅผ ์์ ๋ณด์๋ค.

## ๐ญ๋ง๋ฌด๋ฆฌ
๋ณ๊ฑฐ ์๋๊ฑฐ ๊ฐ์ง๋ง AWS ๋ฅผ ์ฌ์ฉํ๋ค ๋ณด๋ฉด ์ฐธ ๋ง์ ๋๊ด์ ์ฒํ๊ฒ ๋๋ค ์๋ฌด๋๋ ๋ด๊ฐ ์ธํ๋ผ์  ์ง์๋ ์ ์ด์ ๊ทธ๋ฐ๊ฒ ์๋๊ฐ์ถ๋ค..

์๋ฒ์ ํ๋ก์ ํธ์์ ์ด์ด์ข๊ฒ? AWS ์ฐ๋์ชฝ์์์ ๋ค๋งก๊ฒ ๋์ด์ ์ฐธ ๋ง์๊ฑธ ํด๋ณธ๊ฑฐ๊ฐ๋ค.

์ด๊ธ์ด ๋๊ตฐ๊ฐ์ ์ฝ์ง์ ์ค์ฌ์ฃผ๊ธธ...

<br>
<br>

```toc

```
