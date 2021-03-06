---
emoji: ๐
title: spring boot + AWS RDS ์ฐ๋(mySQL)
date: '2022-02-17 15:54:00'
author: ์ฉก๊ธฐ
tags: AWS RDS aws rds ๋ฐ์ดํฐ๋ฒ ์ด์ค rds์์ฑ rds๋? aws rds mySQL rds์ฐ๋
categories: AWS
imageUrl: 'rds.png'
---

## ๐ AWS RDS(mySQL) ์ฐ๋

**๊ฐ๋จํ RDS ์ฐ๋ ์ค์ต**

> โ DB ์์ง์ mySQL๋ก ์ค์ต

### ๐ฐ ์ธํ๋ฆฌ์ ์ด ์ฐ๋ ์ค์ต

1. AWS RDS ์ฝ์ ์ ๊ทผ 

![pgsql1.PNG](pgsql1.PNG)

2. ๋ฐ์ดํฐ๋ฒ ์ด์ค ํด๋ฆญ.

![pgsql2.PNG](pgsql2.PNG)

์์ฑ ๋์ด์๋ DB ์ธ์คํด์ค๋ฅผ ํ์ธํ ์ ์๋ค.

3. mySQL๋ก ์์ฑ๋ ์๋ณ์ ํด๋ฆญํ์ฌ ๋ค์ด๊ฐ๋ค.

![mysql1.png](mysql1.png)

์ฐ๋ฆฌ๊ฐ ํ์ํ ์ ๋ณด๋ฅผ ํ์ธํ๋ค. 
- DB ์๋ณ์
- ์๋ํฌ์ธํธ
- ํฌํธ
- ์์ง

4. ์ธํ๋ฆฌ์ ์ด ์์ databaseํ์์ datasource๋ฅผ mySQL๋ก ์ ํํด์ค๋ค.

![pgsql4.PNG](pgsql4.PNG)

5. Name์ ์ง์ ํ๊ณ  Host์ ์์์ ํ์ธํ ์๋ํฌ์ธํธ๋ฅผ ๋ฃ๊ณ  rds์์ฑ์ ์ง์ ํ User,Password ๊ฐ์๋ฃ๊ณ  Test Connectionํด๋ฆญ

![mysql2.PNG](mysql2.PNG)

![mysql3.PNG](mysql3.PNG)

์์๊ฐ์ด test๊ฐ ๋์์ผ๋ฉด ์ธํ๋ฆฌ์ ์ด ์์ ํ์ธ๊ฐ๋ฅํ๋ค.

![mysql5.PNG](mysql5.PNG)


### ๐ฎ ์๋น์ค ์ฐ๋ ์ค์ต

1. build.gradle ์์กด์ฑ ์ถ๊ฐ

```
implementation group: 'mysql', name: 'mysql-connector-java', version: '8.0.27'
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
```

2. ๋ฐ์ดํฐ ์์ค ์ ์ application.yml
```yml
spring:
    datasource:
        driver-class-name: com.mysql.jdbc.Driver
        url: jdbc:mysql://์์ ์ ์๋ํฌ์ธํธ:ํฌํธ/InnoDB
        username: ์ ๊ทผ์ด๋ฆ
        password: ์ ๊ทผ๋น๋ฐ๋ฒํธ
```

3. ์ํฐํฐ,๋ฆฌํฌ์งํ ๋ฆฌ ์์ฑ

```java
@Entity
@Getter
@Table(name = "tb_file")
@NoArgsConstructor
public class TbFile {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private int wk_id;
	private String type;
	private String path;
	private LocalDateTime cre_dtm = LocalDateTime.now();
	
	@Builder
	public TbFile(int wk_id, String type, String path) {
		this.wk_id = wk_id;
		this.type = type;
		this.path = path;
	}
}
```
```java
@Repository
public interface TbFileRepository extends JpaRepository<TbFile, Integer>{
}
```

4. ํ์คํธ ์ปจํธ๋กค๋ฌ ์์ฑ

```java
@RestController
@RequestMapping("/api/v1")
public class DBTestController {
    @Autowired
    private TbFileRepository tbFileRepository;

    @GetMapping("/getAll")
    public ResponseEntity getAll(){
        List<TbFile> List = new ArrayList<>();
        List = tbFileRepository.findAll();
        return new ResponseEntity<>(List, HttpStatus.OK);
    }
}
```

5. ํฌ์คํธ๋งจ ํ์คํธ

![mysql6.PNG](mysql6.PNG)



### ๐ฒ ๋ง๋ฌด๋ฆฌ
์์ ์ค์ต๊ณผ ๊ฐ์ด mySQL ์์ง์ผ๋ก ์์ฑ๋ RDS์ ์ฐ๋ํ๊ณ  ๊ธฐ๋ณธ์ ์ธ ๋ฐ์ดํฐ๊น์ง ์กฐํ๋ฅผ ํด๋ณด์๋ค.
๋ค๋ฅธ ์์ง๋ ๋ค๋ฅธ์ ์ด ๊ฑฐ์ ์์ผ๋ฉฐ ์ด๋ก์จ ๊ฐ๋ฐ์ RDS์ ์ฐ๋ํ์ฌ ์์์ด ๊ฐ๋ฅํ๊ฑธ ํ์ธ ํ ์์๋ค.

<br>
<br>

```toc

```
