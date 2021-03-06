---
emoji: π
title: AWS OpenSearch(Elasticsearch) μ¬μ©λ²
date: '2022-03-14 17:30:00'
author: μ©‘κΈ°
tags: AWS OpenSearch aws elasticsearch OpenSearchμ¬μ©νκΈ° OpenSearchμ°λ ν€λ°λ μ¬μ©
categories: AWS
imageUrl: 'elasticsearch.png'
---

## π κ°μ
λ΄κ° μ§νν νλ‘μ νΈ μμ κ²μ μμ§μΌλ‘ μ€νμμΉλ₯Ό μ ννμ¬ μ¬μ©ν΄μΌνλ μν©μ΄ μμλ€.
ν΄λΉ λΆλΆμ μ¬μ€ μΈνλΌμμ μ§ννμμ§λ§ μ§νμ€ κ³΅λΆν λ΄μ©λ€μ κΈ°μ¬ νλ €νλ€.
μ΄λ² κΈμμλ κ°λ¨νκ² λλ©μΈ μμ±κ³Ό ν€λ°λμ μλ± κΈ°λ³Έμ μΈ λ΄μ©λ§ λ€λ£° μμ μ΄λ€.

## π Amazon OpenSearch Service μμνκΈ°
Amazon OpenSearch Serviceλ₯Ό μ¬μ©νμ¬ νμ€νΈ λλ©μΈμ λ§λ€κ³  κ΅¬μ±νλ λ°©λ²μ μ§νν΄ λ³΄μ

OpenSearch Service λλ©μΈμ OpenSearch ν΄λ¬μ€ν°μ λμμ΄μλλ€. 

λλ©μΈμ μ€μ , μΈμ€ν΄μ€ μ ν, μΈμ€ν΄μ€ μ, μ€ν λ¦¬μ§ λ¦¬μμ€λ₯Ό μ§μ ν μ€μ μλλ€.

### π¦ 1λ¨κ³: OpenSearch Service λλ©μΈ μμ±

**μ½μμ μ¬μ©νμ¬ OpenSearch Service λλ©μΈμ λ§λ€λ €λ©΄**

1. https://aws.amazon.comμΌλ‘ μ΄λνμ¬ μ½μμ λ‘κ·ΈμΈ(Sign In to the Console)μ μ νν©λλ€.

2. λΆμ(Analytics)μμ Amazon OpenSearch Serviceλ₯Ό μ νν©λλ€.

3. [λλ©μΈ μμ±(Create domain)]μ μ νν©λλ€.

![es0.PNG](es0.PNG)

4. λλ©μΈμ μ΄λ¦μ μλ ₯ν©λλ€. λλ moviesλΌλ μ΄λ¦μ μ¬μ©

![es1.PNG](es1.PNG)

5. μ¬μ©μ μ§μ  μλν¬μΈνΈ(Custom endpoint) μ€μ μ λ¬΄μν©λλ€.

6. λ°°ν¬ μ νμ κ°λ° λ° νμ€νΈ(Development and testing)λ₯Ό μ νν©λλ€. 

![es2.PNG](es2.PNG)

7. λ²μ (Version)μμ μ΅μ  λ²μ μ μ νν©λλ€.

8. λ°μ΄ν° λΈλ(Data nodes)μμ μΈμ€ν΄μ€ μ νμ t3.small.searchλ‘ λ³κ²½νκ³  μΈ κ°μ λΈλ κΈ°λ³Έκ°μ μ μ§ν©λλ€.

![es3.PNG](es3.PNG)

9. κ°λ¨ν νμΈμ μν΄ νΌλΈλ¦­ μ‘μΈμ€ λλ©μΈμ μ¬μ©ν©λλ€. [λ€νΈμν¬(Network)]μμ [νΌλΈλ¦­ μ‘μΈμ€(Public access)]λ₯Ό μ νν©λλ€.

![es4.PNG](es4.PNG)

10. μΈλΆνλ μ‘μΈμ€ μ μ΄ μ€μ μμ λ§μ€ν° μ¬μ©μ μμ±(Create master user)μ μ νν©λλ€. μ¬μ©μ μ΄λ¦κ³Ό μνΈλ₯Ό μλ ₯ν©λλ€.

![es5.PNG](es5.PNG)

11. μ§κΈμSAML μΈμ¦ λ° Amazon Cognito μΈμ¦ μΉμμ λ¬΄μν©λλ€.

12. [μ‘μΈμ€ μ μ±(Access policy)]μμ [μΈλΆνλ μ‘μΈμ€ μ μ΄λ§ μ¬μ©(Only use fine-grained access control)]μ μ νν©λλ€. μ΄ μμ΅μμμλ μΈλΆνλ μ‘μΈμ€ μ μ΄λ₯Ό ν΅ν΄ λλ©μΈ μ‘μΈμ€ μ μ±μ΄ μλ μΈμ¦μ μ²λ¦¬ν©λλ€.

![es6.PNG](es6.PNG)

13. λλ¨Έμ§ μ€μ μ λ¬΄μνκ³  [μμ±(Create)]μ μ νν©λλ€. μ λλ©μΈμ μΌλ°μ μΌλ‘ μ΄κΈ°ννλ λ° 15~30λΆ μ λ κ±Έλ¦¬μ§λ§ κ΅¬μ±μ λ°λΌ μκ°μ΄ λ μ€λ κ±Έλ¦΄ μ μμ΅λλ€. λλ©μΈμ΄ μ΄κΈ°νλ ν μλν¬μΈνΈλ₯Ό κΈ°λ‘ν΄ λ‘λλ€.

![es7.png](es7.png)

14. Kibana URL μ ν΅ν΄ ν€λ°λ μ μκ°λ₯

![es8.PNG](es8.PNG)




### π» 2λ¨κ³: μΈλ±μ±μ μν΄ λ°μ΄ν° μλ‘λ

**μ΅μ 1: λ¨μΌ λ¬Έμ μλ‘λ**

```
curl -X PUT -u 'μ κ·Όμ μ λͺ:ν¨μ€μλ' 'μ€λν¬μΈνΈ/movies/_doc/1' -d "{\"director\": \"Burton, Tim\", \"genre\": [\"Comedy\",\"Sci-Fi\"], \"year\": 1996, \"actor\": [\"Jack Nicholson\",\"Pierce Brosnan\",\"Sarah Jessica Parker\"], \"title\": \"Mars Attacks!\"}" -H Content-Type:application/json
```

**μ΅μ 2: μ¬λ¬ λ¬Έμ μλ‘λ**

bulk_movies.json μ΄λΌλ λ‘μ»¬ νμΌμ μμ±ν©λλ€. λ€μ λ΄μ©μ νμΌμ λ³΅μ¬νμ¬ λΆμ¬λ£κ³ , νν μ€λ°κΏμ μΆκ°ν©λλ€.

```json
{ "index" : { "_index": "movies", "_id" : "2" } }
{"director": "Frankenheimer, John", "genre": ["Drama", "Mystery", "Thriller", "Crime"], "year": 1962, "actor": ["Lansbury, Angela", "Sinatra, Frank", "Leigh, Janet", "Harvey, Laurence", "Silva, Henry", "Frees, Paul", "Gregory, James", "Bissell, Whit", "McGiver, John", "Parrish, Leslie", "Edwards, James", "Flowers, Bess", "Dhiegh, Khigh", "Payne, Julie", "Kleeb, Helen", "Gray, Joe", "Nalder, Reggie", "Stevens, Bert", "Masters, Michael", "Lowell, Tom"], "title": "The Manchurian Candidate"}
{ "index" : { "_index": "movies", "_id" : "3" } }
{"director": "Baird, Stuart", "genre": ["Action", "Crime", "Thriller"], "year": 1998, "actor": ["Downey Jr., Robert", "Jones, Tommy Lee", "Snipes, Wesley", "Pantoliano, Joe", "Jacob, Ir\u00e8ne", "Nelligan, Kate", "Roebuck, Daniel", "Malahide, Patrick", "Richardson, LaTanya", "Wood, Tom", "Kosik, Thomas", "Stellate, Nick", "Minkoff, Robert", "Brown, Spitfire", "Foster, Reese", "Spielbauer, Bruce", "Mukherji, Kevin", "Cray, Ed", "Fordham, David", "Jett, Charlie"], "title": "U.S. Marshals"}
{ "index" : { "_index": "movies", "_id" : "4" } }
{"director": "Ray, Nicholas", "genre": ["Drama", "Romance"], "year": 1955, "actor": ["Hopper, Dennis", "Wood, Natalie", "Dean, James", "Mineo, Sal", "Backus, Jim", "Platt, Edward", "Ray, Nicholas", "Hopper, William", "Allen, Corey", "Birch, Paul", "Hudson, Rochelle", "Doran, Ann", "Hicks, Chuck", "Leigh, Nelson", "Williams, Robert", "Wessel, Dick", "Bryar, Paul", "Sessions, Almira", "McMahon, David", "Peters Jr., House"], "title": "Rebel Without a Cause"}

```

νμΌμ΄ μ μ₯λλ λ‘μ»¬ λλ ν°λ¦¬μμ λ€μ λͺλ Ήμ μ€ννμ¬ movies λλ©μΈμ νμΌμ μλ‘λν©λλ€.
```
curl -XPOST -u master-user:master-user-password domain-endpoint/_bulk --data-binary @bulk_movies.json -H Content-Type:application/json
```


### π» 3λ¨κ³: OpenSearch Serviceμμ λ¬Έμ κ²μ

Amazon OpenSearch Service λλ©μΈμμ λ¬Έμλ₯Ό κ²μνλ €λ©΄ OpenSearch κ²μ APIλ₯Ό μ¬μ©ν©λλ€. 

**λͺλ Ήμ€μμ λ¬Έμ κ²μ**

λ€μ λͺλ Ήμ μ€ννμ¬ movies λλ©μΈμμ marsλ₯Ό κ²μν©λλ€.

```
curl -XGET -u master-user:master-user-password domain-endpoint/movies/_search?q=mars
```

**Kibanaμμ κ²μ**

Query Workbench ν΄λ¦­
 
![es9.PNG](es9.PNG)

Query editor μ μλμ μΏΌλ¦¬ RUN

```sql
select * from movies;
```

λ°μ΄ν° νμΈ

![es10.PNG](es10.PNG)


### β± 4λ¨κ³: OpenSearch Service λλ©μΈ μ­μ 

**μ½μμμ OpenSearch Service λλ©μΈμ μ­μ νλ €λ©΄**

Amazon OpenSearch Service μ½μμ λ‘κ·ΈμΈν©λλ€.

[λλ©μΈ(Domains)]μμ movies λλ©μΈμ μ νν©λλ€.

[μ­μ (Delete)]λ₯Ό μ ννκ³  μ­μ  μμ¬λ₯Ό νμΈν©λλ€.


## π’ λλμ 

μλ§ μ€νμμΉλ₯Ό μ¬μ©νλ μ¬λμ΄λΌλ©΄ ν€λ°λμ κΈ°λ₯μ μ κ³΅νλκ²μ κ°μ¬ν¨μ λλΌλ©° ν€λ°λλ₯Ό νμ©μ λ§μ΄ ν λ―μΆλ€..

μ½μλ‘λ κ°λ₯ν κΈ°λ₯λ€μ΄ λ§μ§λ§ νμ€ν μΏΌλ¦¬μ μ΅μν μ¬λμ΄λΌλ©΄ ν€λ°λλ₯Ό μ¬μ©νλκ±Έ μΆμ²νλ€.

κ·Έλ¦¬κ³  μλ² νν λ¦¬μΌμλ νΌλΈλ¦­μΌλ‘ λλ©μΈμ μμ±νμ¬μ κ°λ¨νκ² νμ€νΈ νμ§λ§ μ€μ  νλ‘μ νΈμμ vpc μμΈμ€λ₯Ό κΆμ₯νλ€

λ€μμλ μ€νλ§ λΆνΈμμ μ€νμμΉλ₯Ό μ¬μ©νλ λ°©λ²μ ν¬μ€νν  μμ μ΄λ€.

```toc

```
