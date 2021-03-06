---
emoji: ๐
title: OpenSearch ๊ฒ์ ์ ํ๋ฆฌ์ผ์ด์ ์์ฑ
date: '2022-03-22 15:20:00'
author: ์ฉก๊ธฐ
tags: AWS OpenSearch aws elasticsearch OpenSearch ์ฌ์ฉํ๊ธฐ ์ฌ์ฉ๋ฒ
categories: AWS
imageUrl: 'opensearch.png'
---

## โ ๊ฐ์
AWS ์ OpenSearch๋ฅผ ์ฌ์ฉํ์ฌ ๊ฐ๋จํ Serverless ๊ฒ์ ์ ํ๋ฆฌ์ผ์ด์์ ์์ฑํด๋ณด์

Amazon API Gateway๋ก ์ฌ์ฉ์๋ฅผ OpenSearch API ๋ฐ AWS Lambda์ ํ์ ์งํฉ์ผ๋ก ์ ํํ์ฌ API Gateway์์ OpenSearch Service๋ก ๋ณด๋ด๋ ์์ฒญ์ ์๋ชํ๋๋ก ๊ตฌํ ํ๊ฒ ๋ค.

> Aws OpenSearch(Elasticsearch) ๊ด๋ จ ํฌ์คํ์ [์ฌ๊ธฐ](https://leesungki.github.io/gatsby-aws-history-of-opensearch-tuto)๋ฅผ ์ฐธ๊ณ ํ์

## ๐ง 1๋จ๊ณ: ์ํ ๋ฐ์ดํฐ ์ธ๋ฑ์ฑ

์ฌ์  ์กฐ๊ฑด์ OpenSearch Service ๋๋ฉ์ธ์๋๋ค.
[์ด์  ํฌ์คํ](https://leesungki.github.io/gatsby-aws-history-of-opensearch-tuto/)์ ์ฐธ๊ณ ํ์ฌ ๋๋ฉ์ธ์ ๋ง๋ค์ด์ ธ ์๋ค๋ ๊ฐ์ ํ์ ์งํ ํฉ๋๋ค.

[sample-movies.zip](https://github.com/LeeSungKi/OpenSearchApp/blob/main/sample-movies.zip)์ ๋ค์ด๋ก๋ํ์ฌ ์์ถ์ ํด์ ํ๊ณ  _bulk API๋ฅผ ์ฌ์ฉํด 5,000๊ฐ ๋ฌธ์๋ฅผ movies ์ธ๋ฑ์ค์ ์ถ๊ฐํฉ๋๋ค.

```
POST https://search-my-domain.us-west-1.es.amazonaws.com/_bulk //๋์ ์คํ์์น ๋๋ฉ์ธ

//sample-movies.zipํ์ผ
{ "index": { "_index": "movies", "_type": "movie", "_id": "tt1979320" } }
{"directors":["Ron Howard"],"release_date":"2013-09-02T00:00:00Z","rating":8.3,"genres":["Action","Biography","Drama","Sport"],"image_url":"http://ia.media-imdb.com/images/M/MV5BMTQyMDE0MTY0OV5BMl5BanBnXkFtZTcwMjI2OTI0OQ@@._V1_SX400_.jpg","plot":"A re-creation of the merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.","title":"Rush","rank":2,"running_time_secs":7380,"actors":["Daniel Brรผhl","Chris Hemsworth","Olivia Wilde"],"year":2013,"id":"tt1979320","type":"add"}
{ "index": { "_index": "movies", "_type": "movie", "_id": "tt1951264" } }
{"directors":["Francis Lawrence"],"release_date":"2013-11-11T00:00:00Z","genres":["Action","Adventure","Sci-Fi","Thriller"],"image_url":"http://ia.media-imdb.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_SX400_.jpg","plot":"Katniss Everdeen and Peeta Mellark become targets of the Capitol after their victory in the 74th Hunger Games sparks a rebellion in the Districts of Panem.","title":"The Hunger Games: Catching Fire","rank":4,"running_time_secs":8760,"actors":["Jennifer Lawrence","Josh Hutcherson","Liam Hemsworth"],"year":2013,"id":"tt1951264","type":"add"}
...       
```

<br>
ํค๋ฐ๋ ์ฝ์ ์์ ๋ฐ์ดํฐ ํ์ธ
<br>
<br>

![estuto1.PNG](estuto1.PNG)



## ๐ฅจ 2๋จ๊ณ: API Gateway์์ API ์์ฑ

API Gateway๋ฅผ ์ฌ์ฉํ๋ฉด ๋ณด๋ค ์ ํ๋ API๋ฅผ ์์ฑํ๊ณ  OpenSearch _search API์์ ์ํธ ์์ฉ์ ๊ฐ์ํํ  ์ ์์ต๋๋ค. API Gateway๋ฅผ ์ฌ์ฉํ๋ฉด Amazon Cognito ์ธ์ฆ ๋ฐ ์์ฒญ ์กฐ์  ๊ฐ์ ๋ณด์ ๊ธฐ๋ฅ์ ํ์ฑํํ  ์๋ ์์ต๋๋ค. API๋ฅผ ์์ฑํ๊ณ  ๋ฐฐํฌํ๋ ค๋ฉด ๋ค์ ๋จ๊ณ๋ฅผ ์ํํฉ๋๋ค.

### API ์์ฑ ๋ฐ ๊ตฌ์ฑ

API Gateway ์ฝ์์ ์ฌ์ฉํ์ฌ API๋ฅผ ์์ฑํ๋ ค๋ฉด

1. API Gateway ๋ด์์ API ์์ฑ(Create API)์ ์ ํํฉ๋๋ค.

<br>

![estuto2.PNG](estuto2.PNG)
<br>

2. REST API(๋น๊ณต๊ฐ ์๋)๋ฅผ ์ฐพ๊ณ  ๊ตฌ์ถ(Build)๋ฅผ ์ ํํฉ๋๋ค.
<br>

![estuto3.PNG](estuto3.PNG)
<br>

3. ๋ค์ ํ๋๋ฅผ ๊ตฌ์ฑํฉ๋๋ค.
<br>

![estuto4.PNG](estuto4.PNG)

    - API ์ด๋ฆ: OpenSearch-api
    - ์ค๋ช: Amazon OpenSearch Service API
    - ์๋ํฌ์ธํธ ์ ํ: ๋ฆฌ์ ๋ณ
<br>

4. API ์์ฑ(Create API)์ ์ ํํฉ๋๋ค.
<br>

5. ์์(Actions) ๋ฐ ๋ฉ์๋ ์์ฑ(Create Method)์ ์ ํํฉ๋๋ค.
<br>

![estuto5.PNG](estuto5.PNG)
<br>

6. ๋๋กญ๋ค์ด์์ GET์ ์ ํํ๊ณ  ํ์ธ ํ์๋ฅผ ํด๋ฆญํ์ฌ ํ์ธํฉ๋๋ค.
<br>

7. ๋ค์ ์ค์ ์ ๊ตฌ์ฑํ ๋ค์ ์ ์ฅ(Save)์ ์ ํํฉ๋๋ค.
<br>

![estuto6.PNG](estuto6.PNG)
|์ค์ |๊ฐ|
|------|---|
|ํตํฉ ์ ํ|Lambda ํจ์|
|Lambda ํ๋ก์ ํตํฉ ์ฌ์ฉ|์|
|Lambda ๋ฆฌ์ |ap-northeast-2|
|Lambda ํจ์|opensearch-lambda|
|๊ธฐ๋ณธ ์ ํ ์๊ฐ ์ฌ์ฉ||์|

<br>	

### ๋ฉ์๋ ์์ฒญ ๊ตฌ์ฑ

๋ฉ์๋ ์์ฒญ(Method Request)์ ์ ํํ๊ณ  ๋ค์ ์ค์ ์ ๊ตฌ์ฑํฉ๋๋ค.
<br>

![estuto7.PNG](estuto7.PNG)

|์ค์ |๊ฐ|
|-|-|
|์น์ธ|NONE|
|์์ฒญ ๊ฒ์ฌ๊ธฐ|์ฟผ๋ฆฌ ๋ฌธ์์ด ํ๋ผ๋ฏธํฐ ๋ฐ ํค๋ ๊ฒ์ฌ|
|ํ์ API ํค|false|

<br>

URL ์ฟผ๋ฆฌ ๋ฌธ์์ด ํ๋ผ๋ฏธํฐ
<br>

|์ค์ |๊ฐ|
|-|-|
|์ด๋ฆ|q|
|ํ์|์|

### API ๋ฐฐํฌ ๋ฐ ๋จ๊ณ ๊ตฌ์ฑ

API Gateway ์ฝ์์์ ๋ฐฐํฌ๋ฅผ ์์ฑํ๊ณ  ์ ๋จ๊ณ ๋๋ ๊ธฐ์กด ๋จ๊ณ์ ์ฐ๊ฒฐํ์ฌ API๋ฅผ ๋ฐฐํฌํ  ์ ์์ต๋๋ค.
<br>

1. ์์(Actions) ๋ฐ API ๋ฐฐํฌ(Deploy API)๋ฅผ ์ ํํฉ๋๋ค.
<br>

![estuto8.PNG](estuto8.PNG)
<br>

2. ๋ฐฐํฌ ๋จ๊ณ(Deployment stage)์์ ์ ๋จ๊ณ(New Stage)๋ฅผ ํด๋ฆญํ๊ณ  ๋จ๊ณ ์ด๋ฆ์ opensearch-api-test๋ก ์ง์ ํฉ๋๋ค.
<br>

3. ๋ฐฐํฌ(Deploy)๋ฅผ ์ ํํฉ๋๋ค.
<br>

![estuto9.PNG](estuto9.PNG)
<br>

4. ๋จ๊ณ ํธ์ง๊ธฐ์์ ๋ค์ ์ค์ ์ ๊ตฌ์ฑํ ๋ค์ ๋ณ๊ฒฝ ๋ด์ฉ ์ ์ฅ(Save Changes)์ ์ ํํฉ๋๋ค.
<br>

![estuto10.PNG](estuto10.PNG)
|์ค์ |	๊ฐ|
|-|-| 
|์กฐ์  ํ์ฑํ|์|
|์์จ|1000|
|๋ฒ์คํธ|500|

<br>
์ด๋ฌํ ์ค์ ์ ์๋ํฌ์ธํธ ๋ฃจํธ์ ๋ํ GET ์์ฒญ (https://some-id.execute-api.ap-northeast-2.amazonaws.com/search-es-api-test) ๋ฉ์๋ ํ๋๋ฟ์ธ API๋ฅผ ๊ตฌ์ฑํฉ๋๋ค.

์ด ์์ฒญ์๋ ํ๋ผ๋ฏธํฐ ํ๋(q), ์ฆ ๊ฒ์ํ  ์ฟผ๋ฆฌ ๋ฌธ์์ด์ด ํ์ํฉ๋๋ค. 

๋ฉ์๋๋ฅผ ํธ์ถํ๋ฉด ์์ฒญ์ด Lambda๋ก ์ ์ก๋์ด opensearch-lambda ํจ์๊ฐ ์คํ๋ฉ๋๋ค.


## ๐ 3๋จ๊ณ: Lambda ํจ์ ์์ฑ ๋ฐ ๋ฐฐํฌ
API Gateway์์ API๋ฅผ ์์ฑํ ํ ์์ฒญ์ ์ ๋ฌํ๋ Lambda ํจ์๋ฅผ ๋ง๋ญ๋๋ค.

### Lambda ํจ์ ์์ฑ

API Gateway๊ฐ ์์ฒญ์ ๋ค์ Python 3.8 Lambda ํจ์๋ก ์ ๋ฌํฉ๋๋ค, ๊ทธ๋ฌ๋ฉด ์ด ํจ์๊ฐ OpenSearch Service๋ฅผ ์ฟผ๋ฆฌํ๊ณ  ๊ฒฐ๊ณผ๋ฅผ ๋ฐํํฉ๋๋ค. ์ด ํจ์์ ์ด๋ฆ์ opensearch-lambda๋ก ์ง์ ํฉ๋๋ค.

```py
import boto3
import json
import requests
from requests_aws4auth import AWS4Auth

region = 'ap-northeast-2' # For example
service = 'opensearchservice'
credentials = boto3.Session().get_credentials()
awsauth = AWS4Auth(credentials.access_key, credentials.secret_key, region, service, session_token=credentials.token)

host = '' # ์์ ์ OpenSearch domain endpoint
index = 'movies'
url = host + '/' + index + '/_search'

# Lambda execution starts here
def lambda_handler(event, context):

    # Put the user query into the query DSL for more accurate search results.
    # Note that certain fields are boosted (^).
    query = {
        "size": 25,
        "query": {
            "multi_match": {
                "query": event['queryStringParameters']['q'],
                "fields": ["title^4", "plot^2", "actors", "directors"]
            }
        }
    }

    # Elasticsearch 6.x requires an explicit Content-Type header
    headers = { "Content-Type": "application/json" }

    # Make the signed HTTP request
    r = requests.get(url, auth=awsauth, headers=headers, data=json.dumps(query))

    # Create the response and add some extra content to support CORS
    response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": '*'
        },
        "isBase64Encoded": False
    }

    # Add the search results to the response
    response['body'] = r.text
    return response
```

์ด ์ํ ํจ์๋ ์ธ๋ถ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ๋ฏ๋ก ์ฝ๋๊ฐ ์๋ํ๋ ค๋ฉด ๋ฐฐํฌ ํจํค์ง๋ฅผ ์์ฑํ๊ณ  Lambda์ ์๋ก๋ํด์ผ ํฉ๋๋ค.

Lambda ํจ์ ๋ฐ ๋ฐฐํฌ ํจํค์ง๋ฅผ ๋ง๋๋ ๋ฐฉ๋ฒ์ ๋ํ ์์ธํ ๋ด์ฉ์ [Lambda Layers ์ฌ์ฉํ๊ธฐ](https://leesungki.github.io/gatsby-aws-study-lambda-import-tutorial)๋ฅผ ์ฐธ๊ณ  ํ์ธ์.


### ํธ๋ค๋ฌ ์์ 
ํธ๋ค๋ฌ๋ ์ด๋ฒคํธ๋ฅผ ์ฒ๋ฆฌํ๋ ํจ์ ์ฝ๋์ ๋ฉ์๋์๋๋ค. Lambda ํจ์๊ฐ ์๋ ๋ฐฐํฌ ํจํค์ง์ ํ์ผ ์ด๋ฆ์ ๋ฐ๋ผ ํธ๋ค๋ฌ ์ด๋ฆ์ ๋ณ๊ฒฝํด์ผ ํฉ๋๋ค. 
์๋ฅผ ๋ค์ด, ํ์ผ ์ด๋ฆ์ด function.py์ธ ๊ฒฝ์ฐ ํธ๋ค๋ฌ ์ด๋ฆ์ function.lambda_handler๋ก ๋ณ๊ฒฝํฉ๋๋ค.

![estuto11.PNG](estuto11.PNG)

### ํธ๋ฆฌ๊ฑฐ ๊ตฌ์ฑ

ํธ๋ฆฌ๊ฑฐ ์ถ๊ฐ(Add trigger)๋ฅผ ์ ํํ๊ณ  ํจ์๋ฅผ ํธ์ถํ๋ HTTP ์๋ํฌ์ธํธ๋ฅผ ์์ฑํฉ๋๋ค. ํธ๋ฆฌ๊ฑฐ ๊ตฌ์ฑ์ ๋ค์๊ณผ ๊ฐ์์ผ ํฉ๋๋ค.
 
 |ํธ๋ฆฌ๊ฑฐ|API|๋ฐฐํฌ ๋จ๊ณ|๋ณด์|
 |------|---|--------|----|
|API Gateway|OpenSearch-api|OpenSearch-api-test|์ด๊ธฐ|

์๋์ฒ๋ผ ์ถ๊ฐ ๋๋ค.

![estuto12.PNG](estuto12.PNG)


## ๐ฅ 4๋จ๊ณ: ๋๋ฉ์ธ ์ก์ธ์ค ์ ์ฑ ์์ 

OpenSearch Service ๋๋ฉ์ธ์์ Lambda ํจ์๊ฐ movies ์ธ๋ฑ์ค์ GET ์์ฒญ์ ์ํํ  ์ ์๋๋ก ํ์ฉํด์ผ ํฉ๋๋ค. ๋ค์ ์ ์ฑ์ opensearch-lambda-role(Lambda๋ฅผ ํตํด ์์ฑ๋จ)์ movies ์ธ๋ฑ์ค์ ๋ํ ์ก์ธ์ค๋ฅผ ์ ๊ณตํฉ๋๋ค.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::123456789012:role/service-role/opensearch-lambda-role-1abcdefg" //์์
      },
      "Action": "es:ESHttpGet",
      "Resource": "arn:aws:es:us-west-1:123456789012:domain/domain-name/movies/_search" //์์
    }
  ]
}
```

> Lambda๊ฐ ์๋์ผ๋ก ์์ฑํ๋ ์ญํ ์ ์ ํํ ์ด๋ฆ์ ์ป์ผ๋ ค๋ฉด AWS Identity and Access Management(IAM) ์ฝ์๋ก ์ด๋์ํ ์ญํ (Roles)์ ํด๋ฆญํ๊ณ  โlambdaโ๋ฅผ ๊ฒ์ํฉ๋๋ค.

## ๐ฅ 5๋จ๊ณ: ์น ์ ํ๋ฆฌ์ผ์ด์ ํ์คํธ

์น ์ ํ๋ฆฌ์ผ์ด์์ ํ์คํธํ๋ ค๋ฉด

1. [sample-site.zip](https://github.com/LeeSungKi/OpenSearchApp/blob/main/sample-site.zip)์ ๋ค์ด๋ก๋ํ๊ณ  ์์ถ์ ํด์ ํ์ฌ ์์ฃผ ์ฌ์ฉํ๋ ํ์คํธ ํธ์ง๊ธฐ์์ scripts/search.js๋ฅผ ์ฝ๋๋ค.

2. apigatewayendpoint ๋ณ์๋ฅผ ์๋ฐ์ดํธํ์ฌ API Gateway ์๋ํฌ์ธํธ๋ฅผ ๊ฐ๋ฆฌํค๋๋ก ํฉ๋๋ค. ์๋ํฌ์ธํธ์ ํ์์ https://some-id.execute-api.ap-northeast-2.amazonaws.com/opensearch-api-test์๋๋ค.

3. index.html์ ์ด๊ณ  thor, house ๋ฑ ๋ช ๊ฐ์ง ๋จ์ด๋ฅผ ๊ฒ์ํด ๋ด๋๋ค.

![estuto14.PNG](estuto14.PNG)


## ๐ญ๋ง๋ฌด๋ฆฌ 

์ด๋ ๊ฒ ์คํ์์น๋ฅผ ํ์ฉํ์ฌ Serverless ์ ํ๋ฆฌ์ผ์ด์์ ๋ง๋ค์ด ๋ณด์๋ค.

๊ฐ๋จํ๊ฑฐ ๊ฐ์ง๋ง aws ์๋น์ค์ ๋ํ ์ด๋์ ๋์ ์ดํด๋๊ฐ ํ์ํ๋ค ์๊ฐํ๋ค.

์ด์  ๊ฒ์๊ธ๋ค์ ์ฝ์ด๋ณด๋ฉด ์ถฉ๋ถํ ๋ฐ๋ผ์ฌ์ ์๋ ๋ถ๋ถ์ด๋ผ ์๊ฐํ๋ค.

aws ๋ฅผ ์ ํ๋ฉด์ ์ ๋ง ํ์ํ๊ณ  ํธ๋ฆฌํ ์๋น์ค๋ผ๋ ์๊ฐ์ ๋ค์ํ๋ฒ ํ๊ฒ๋์๋ค.

<br>
<br>

```toc

```
