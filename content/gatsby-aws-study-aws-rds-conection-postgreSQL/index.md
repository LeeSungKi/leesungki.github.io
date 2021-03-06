---
emoji: ๐
title: spring boot + AWS RDS ์ฐ๋(postgreSQL)
date: '2022-02-17 14:54:00'
author: ์ฉก๊ธฐ
tags: AWS RDS aws rds ๋ฐ์ดํฐ๋ฒ ์ด์ค rds์์ฑ rds๋? aws rds postgre rds์ฐ๋
categories: AWS
imageUrl: 'rds.png'
---

## ๐ AWS RDS(postgreSQL) ์ฐ๋

**๊ฐ๋จํ RDS ์ฐ๋ ์ค์ต**

> โ DB ์์ง์ postgreSQL๋ก ์ค์ต

### ๐ฐ ์ธํ๋ฆฌ์ ์ด ์ฐ๋ ์ค์ต

1. AWS RDS ์ฝ์ ์ ๊ทผ 

![pgsql1.PNG](pgsql1.PNG)

2. ๋ฐ์ดํฐ๋ฒ ์ด์ค ํด๋ฆญ.

![pgsql2.PNG](pgsql2.PNG)

์์ฑ ๋์ด์๋ DB ์ธ์คํด์ค๋ฅผ ํ์ธํ ์ ์๋ค.

3. postgreSQL๋ก ์์ฑ๋ ์๋ณ์ ํด๋ฆญํ์ฌ ๋ค์ด๊ฐ๋ค.

![pgsql3.PNG](pgsql3.PNG)

์ฐ๋ฆฌ๊ฐ ํ์ํ ์ ๋ณด๋ฅผ ํ์ธํ๋ค. 
- DB ์๋ณ์
- ์๋ํฌ์ธํธ
- ํฌํธ
- ์์ง

4. ์ธํ๋ฆฌ์ ์ด ์์ databaseํ์์ datasource๋ฅผ postgreSQL๋ก ์ ํํด์ค๋ค.

![pgsql4.PNG](pgsql4.PNG)

5. Name์ ์ง์ ํ๊ณ  Host์ ์์์ ํ์ธํ ์๋ํฌ์ธํธ๋ฅผ ๋ฃ๊ณ  rds์์ฑ์ ์ง์ ํ User,Password ๊ฐ์๋ฃ๊ณ  Test Connectionํด๋ฆญ

![pgsql5.PNG](pgsql5.PNG)

![pgsql6.PNG](pgsql6.PNG)

์์๊ฐ์ด test๊ฐ ๋์์ผ๋ฉด ์ธํ๋ฆฌ์ ์ด ์์ ํ์ธ๊ฐ๋ฅํ๋ค.

![pgsql6.PNG](pgsql7.PNG)


### ๐ฎ ์๋น์ค ์ฐ๋ ์ค์ต

1. build.gradle ์์กด์ฑ ์ถ๊ฐ

```
implementation group: 'org.postgresql', name: 'postgresql', version: '42.3.1'
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
```

2. ๋ฐ์ดํฐ ์์ค ์ ์ application.yml
```yml
spring:
    datasource:
        driver-class-name: org.postgresql.Driver
        url: jdbc:postgresql://์์ ์ ์๋ํฌ์ธํธ:ํฌํธ/postgres
        username: postgres
        password: ์ ๊ทผ๋น๋ฐ๋ฒํธ
```

3. ์ํฐํฐ,๋ฆฌํฌ์งํ ๋ฆฌ ์์ฑ

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
```
```java
public interface UdTblClassTempRepository extends JpaRepository<UdTblClassTemp, String>{

}
```

4. ํ์คํธ ์ปจํธ๋กค๋ฌ ์์ฑ

```java
@RestController
@RequestMapping("/api/v1")
public class DBTestController {
    @Autowired
    private UdTblClassTempRepository udTblClassTempRepository;

    @GetMapping("/getAll")
    public ResponseEntity getAll(){
        List<UdTblClassTemp> categoryList = new ArrayList<UdTblClassTemp>();
        categoryList = udTblClassTempRepository.findAll();
        return new ResponseEntity<>(categoryList, HttpStatus.OK);
    }
}
```

5. ํฌ์คํธ๋งจ ํ์คํธ

![pgsql8.PNG](pgsql8.PNG)



### ๐ฒ ๋ง๋ฌด๋ฆฌ
์์ ์ค์ต๊ณผ ๊ฐ์ด postgreSQL ์์ง์ผ๋ก ์์ฑ๋ RDS์ ์ฐ๋ํ๊ณ  ๊ธฐ๋ณธ์ ์ธ ๋ฐ์ดํฐ๊น์ง ์กฐํ๋ฅผ ํด๋ณด์๋ค.
๋ค๋ฅธ ์์ง๋ ๋ค๋ฅธ์ ์ด ๊ฑฐ์ ์์ผ๋ฉฐ ์ด๋ก์จ ๊ฐ๋ฐ์ RDS์ ์ฐ๋ํ์ฌ ์์์ด ๊ฐ๋ฅํ๊ฑธ ํ์ธ ํ ์์๋ค.

<br>
<br>

```toc

```
