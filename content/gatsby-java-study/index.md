---
emoji: 🎄
title: Java 외부 api 호출 방법
date: '2022-03-04 17:00:00'
author: 쩡기
tags: java 외부api 호출
categories: JAVA
imageUrl: 'java.png'
---

## 🎋 기초(외부 API 호출)

정말 간단한 컨트롤러에서 사용하는 기본 예제이다.

```java
package controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Test_api {

	@RequestMapping(value = "/test-api", produces="application/json;charset=UTF-8", method = RequestMethod.GET)
	@ResponseBody
	public String testServiceApi() throws Exception {


		String body_contents1 = "body_text";
		String result_txt = "";

		try {
			JSONObject reqParams = new JSONObject();
			reqParams.put("body_contents1", body_contents1); // body에 들어갈 내용을 담는다.

			URL url = new URL("https://www.test.com/test/open/order/possible-check"); // 호출할 외부 API 를 입력한다.

			HttpURLConnection conn = (HttpURLConnection) url.openConnection(); // header에 데이터 통신 방법을 지정한다.
			conn.setRequestMethod("POST");
			conn.setRequestProperty("Content-Type", "application/json; utf-8");

			// Post인 경우 데이터를 OutputStream으로 넘겨 주겠다는 설정
			conn.setDoOutput(true);

			// Request body message에 전송
			OutputStreamWriter os = new OutputStreamWriter(conn.getOutputStream());
			os.write(reqParams.toString());
			os.flush();

			// 응답
			BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
			JSONObject jsonObj = (JSONObject) JSONValue.parse(in.readLine());

			in.close();
			conn.disconnect();

			result_txt = "response :: " + jsonObj.get("result");
			System.out.println(result_txt);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return result_txt;
	}
}
```
## 🎍 마무리
컨트롤러에서 지정한 외부 api를 호출하는 예제이다. 

하지만 실제로는 외부 api를 호출한 다음 다른 작업들을 많이 해주는 편이다 그러므로 서비스단에서 작성해주는 경우가 많은 거 같다.
<br>
<br>


```toc

```
