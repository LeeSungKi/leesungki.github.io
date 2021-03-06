---
emoji: ๐ณ
title: SpringBoot + naver crova ocr ์ฌ์ฉ
date: '2022-03-08 14:00:00'
author: ์ฉก๊ธฐ
tags: spring boot ocr ์ฐ๋ naver crava ocr ๊ฐ์ด๋
categories: SpringBoot
imageUrl: 'springboot.png'
---

## ๊ฐ์

์ด์  ํฌ์คํ์์ naver crova ocr ์๋ํด ๋ค๋ค์๋ค. [์ฐธ๊ณ ](https://leesungki.github.io/gatsby-naverOCR-study/)

ํด๋น ๊ธ์ ๋ณด๋ฉด ์ด๋ฏธ ๋๋ naver ocr api๋ฅผ ์์ฑํ๊ณ 

์๋ฒ ๊ธ์์๋ springboot ์์ ํด๋น api๋ฅผ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ ํฌ์คํ ํ๊ฒ ๋ค.

### ๐ multipart/form-data ์ฌ์ฉ

ํธ์ถ ๋ฐฉ์์ ๋๊ฐ์ง๋ก ๋๋๋ค ํ์ง๋ง ๋๋ ๋ก์ปฌ์ ์ ์ฅ๋ ์ด๋ฏธ์ง ํ์ผ์ ์ฌ์ฉ ํ ๊บผ๋ผ์ form-data ๋ฐฉ์์ผ๋ก ํธ์ถํ๋ค.

> ๐ ๋ค๋ฅธ ๋ฐฉ์์ ํด๋น ๋ฌธ์ [์ฐธ๊ณ ](https://api.ncloud-docs.com/docs/ai-application-service-ocr-ocr)

ํ๋ก์ ํธ ๊ตฌ์กฐ

```
controller
    ใดCheckController
infra
    ใดnaver
        ใดocr
            ใดNaverOcrApi
utill
    ใดJsonUtill           
```
- CheckController
- NaverOcrApi
- JsonUtill : ๋ฐ์ดํฐ ๊ฐ๊ณต์์ํจ ํ์ X

Json ๊ด๋ จ ์์กด์ฑ์ ๊ธฐ์ฌ ์ํ๊ฒ ๋ค ๋ณธ์ธ์ด ๊ฐ๊ณตํ ๊ฑฐ๋ฉด ํธํ๊ฑธ ์ฌ์ฉํ๋ฉด ๋๋ค.

NaverOcrApi

```java
/**
 * Naver OCR API Service (๋ค์ด๋ฒ ocr api ํธ์ถ)
 */
public class NaverOcrApi {
    /**
     * ๋ค์ด๋ฒ ocr api ํธ์ถํ๋ค
     * @param {string} type ํธ์ถ ๋ฉ์๋ ํ์
     * @param {string} filePath ํ์ผ ๊ฒฝ๋ก
     * @param {string} naver_secretKey ๋ค์ด๋ฒ ์ํฌ๋ฆฟํค ๊ฐ
     * @param {string} ext ํ์ฅ์
     * @returns {List} ์ถ์ถ text list
     */
    public static List<String> callApi(String type, String filePath, String naver_secretKey, String ext) {
        String apiURL = "์์ ์ด ์์ฑํ APIGW URL";
        String secretKey = naver_secretKey;
        String imageFile = filePath;
        List<String> parseData = null;

        try {
            URL url = new URL(apiURL);
            HttpURLConnection con = (HttpURLConnection)url.openConnection();
            con.setUseCaches(false);
            con.setDoInput(true);
            con.setDoOutput(true);
            con.setReadTimeout(30000);
            con.setRequestMethod(type);
            String boundary = "----" + UUID.randomUUID().toString().replaceAll("-", "");
            con.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary);
            con.setRequestProperty("X-OCR-SECRET", secretKey);

            JSONObject json = new JSONObject();
            json.put("version", "V2");
            json.put("requestId", UUID.randomUUID().toString());
            json.put("timestamp", System.currentTimeMillis());
            JSONObject image = new JSONObject();
            image.put("format", ext);
            image.put("name", "demo");
            JSONArray images = new JSONArray();
            images.add(image);
            json.put("images", images);
            String postParams = json.toString();

            con.connect();
            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            long start = System.currentTimeMillis();
            File file = new File(imageFile);
            writeMultiPart(wr, postParams, file, boundary);
            wr.close();

            int responseCode = con.getResponseCode();
            BufferedReader br;
            if (responseCode == 200) {
                br = new BufferedReader(new InputStreamReader(con.getInputStream()));
            } else {
                br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
            }
            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = br.readLine()) != null) {
                response.append(inputLine);
            }
            br.close();

            parseData = jsonparse(response);

        } catch (Exception e) {
            System.out.println(e);
        }
        return parseData;
    }
    /**
     * writeMultiPart
     * @param {OutputStream} out ๋ฐ์ดํฐ๋ฅผ ์ถ๋ ฅ
     * @param {string} jsonMessage ์์ฒญ params
     * @param {File} file ์์ฒญ ํ์ผ
     * @param {String} boundary ๊ฒฝ๊ณ
     */
    private static void writeMultiPart(OutputStream out, String jsonMessage, File file, String boundary) throws
            IOException {
        StringBuilder sb = new StringBuilder();
        sb.append("--").append(boundary).append("\r\n");
        sb.append("Content-Disposition:form-data; name=\"message\"\r\n\r\n");
        sb.append(jsonMessage);
        sb.append("\r\n");

        out.write(sb.toString().getBytes("UTF-8"));
        out.flush();

        if (file != null && file.isFile()) {
            out.write(("--" + boundary + "\r\n").getBytes("UTF-8"));
            StringBuilder fileString = new StringBuilder();
            fileString
                    .append("Content-Disposition:form-data; name=\"file\"; filename=");
            fileString.append("\"" + file.getName() + "\"\r\n");
            fileString.append("Content-Type: application/octet-stream\r\n\r\n");
            out.write(fileString.toString().getBytes("UTF-8"));
            out.flush();

            try (FileInputStream fis = new FileInputStream(file)) {
                byte[] buffer = new byte[8192];
                int count;
                while ((count = fis.read(buffer)) != -1) {
                    out.write(buffer, 0, count);
                }
                out.write("\r\n".getBytes());
            }

            out.write(("--" + boundary + "--\r\n").getBytes("UTF-8"));
        }
        out.flush();
    }
    /**
     * ๋ฐ์ดํฐ ๊ฐ๊ณต
     * @param {StringBuffer} response ์๋ต๊ฐ
     * @returns {List} result text list
     */
    private static List<String> jsonparse(StringBuffer response) throws ParseException {
        //json ํ์ฑ
        JSONParser jp = new JSONParser();
        JSONObject jobj = (JSONObject) jp.parse(response.toString());
        //images ๋ฐฐ์ด obj ํ
        JSONArray JSONArrayPerson = (JSONArray)jobj.get("images");
        JSONObject JSONObjImage = (JSONObject)JSONArrayPerson.get(0);
        JSONArray s = (JSONArray) JSONObjImage.get("fields");
        //
        List<Map<String, Object>> m = JsonUtill.getListMapFromJsonArray(s);
        List<String> result = new ArrayList<>();
        for (Map<String, Object> as : m) {
            result.add((String) as.get("inferText"));
        }
        return result;
    }
}
```

JsonUtill

```java
public class JsonUtill {
    /**
     * JSONObject => Map<String, String>
     * @param {JSONObject} jsonObject
     * @returns {Map} map
     */
    @SuppressWarnings("unchecked")
    public static Map<String, Object> getMapFromJsonObject(JSONObject jsonObject) {
        Map<String, Object> map = null;
        try {
            map = new ObjectMapper().readValue(jsonObject.toJSONString(), Map.class);

        } catch (JsonParseException e) {
            e.printStackTrace();
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return map;
    }
    /**
     * JSONArray => List<Map<String, String>>
     * @param {jsonArray} jsonArray
     * @returns {List} list
     */
    public static List<Map<String, Object>> getListMapFromJsonArray(JSONArray jsonArray) {

        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();

        if (jsonArray != null) {

            int jsonSize = jsonArray.size();

            for (int i = 0; i < jsonSize; i++) {

                Map<String, Object> map = getMapFromJsonObject((JSONObject)jsonArray.get(i));
                list.add(map);

            }
        }
        return list;
    }
}
```

CheckController

```java
@RestController
public class CheckController {
     @GetMapping("/naverOcr")
    public ResponseEntity ocr() throws  IOException{
        String fileName = "mey.jpg";
        File file = ResourceUtils.getFile("classpath:static/image/test/"+fileName);

        List<String> result = NaverOcrApi.callApi("POST", file.getPath(), "์์ ์ ๋ค์ด๋ฒ ์ํฌ๋ฆฟ ํค", "jpg");
        return new ResponseEntity(result, HttpStatus.OK);
    }
}
```

### ๐ Postman ํธ์ถ

![springbootocr.PNG](springbootocr.PNG)

์ด๋ ๊ฒ ๋ด๊ฐ ์ํ๋ ์ด๋ฏธ์ง์ ํ์คํธ๋ฅผ ์ถ์ถ ํ ์๊ฐ ์๋ค.


## ๐ญ๋ง๋ฌด๋ฆฌ
์๊ฐ๋ณด๋ค ๋ฌธ์๋ ์๋์ด์๊ณ ... ๋ด๊ฐ ๊ตณ์ด ๋ฐ๋ก ๊ธ์ ์ธํ์๊ฐ ์์๊น ์ถ์์ ๋ ์ด์ง๋ง...

๊ทธ๋๋ ๋์ค์ ๋ด๊ฐ ๋ค์ ์ฌ์ฉํ ๋ ์ด๋ป๊ฒ ์ฌ์ฉํ๋์ง ์๊ธฐ์ํด ์ด ๊ธ์ ์ด๋ค..

์ธ๋ถ api ์ฌ์ฉ์ ์ ๋ง ํด๋น api๋ฅผ ์ ๊ณตํ๋ ์ ๊ณต์ธก์ ๋ฌธ์์ ํ๋ฆฌํฐ์ ๋ฐ๋ผ์ ์ฌ์ฉ ๋์ด๋๊ฐ ๋ณํ๋๊ฑฐ ๊ฐ๋ค..

๊ทธ๋ฐ ๋ถ๋ถ์์ ๋ค์ด๋ฒ๋ ์ญ์ ๋๊ธฐ์์ด๊ตฌ๋ ๋ผ๋๊ฑธ ๋ค์ํ๋ฒ ๋๊ผ๋ค..

<br>
<br>

```toc

```
