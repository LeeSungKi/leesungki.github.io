---
emoji: 🎄
title: TypeScript(TS)를 배우며
date: '2025-12-21 10:36:00'
author: 아구
tags: TypeScript(TS), 타입스크립트
categories: JS
imageUrl: 'JS.jpg'
---

## 타입스크린트란 무엇이며 왜 써야 할까?
<details>
    <summary> 내가 느끼던 js와 ts</summary>
 사실 typescript는 vue를 배우면서 간간히 사용해 보긴 했으나, 
 도대체 왜? js만 사용해도 되는것 같은데 왜 ts를 사용해야 될까를 몰랐었다.
 그러나 타입스크립트의 일반적인 기능들을 보다보니 또한, 
 시스템(소프트웨어)을 운영해 나가는 사람의 입장으로 생각해 보니 
 타입스크립트는 유지,보수와 개발자도구에서 한참을 찾던 에러를 컴파일 시점에 미리 걸러주는
 엄청난 강점이 있다는 것을 느끼게 되었다.
</details>

📘 TypeScript 핵심 정리
1. 타입스크립트란? (왜 사용해야 하는가)

- JavaScript에 정적 타입 시스템을 추가한 언어

- 컴파일 시점에 오류를 발견 → 런타임 오류 감소

- 자동완성, 리팩토링, 협업에 매우 유리

- 대규모 프로젝트에 적합

<details> <summary>예시</summary>

```ts
let age: number = 20
```
</details>

---------------------------------------

2. 타입스크립트의 타입 종류

- 기본 타입: string, number, boolean

- 특수 타입: any, unknown, void, never

- 참조 타입: array, tuple, enum, object

<details> <summary>예시</summary>

```ts
let nums: number[] = [1, 2, 3]
let tuple: [string, number] = ["a", 1]
```
</details>

---------------------------------------

3. 타입 추론 (interface)

- 초기값을 기준으로 TypeScript가 타입을 자동 추론

- interface로 객체 구조를 명확하게 정의

<details> <summary>예시</summary>

```ts
interface User {
  name: string
  age: number
}

const user: User = {
  name: "Tom",
  age: 20
}
```
</details>

---------------------------------------

4. 타입 및 할당 단언 (Assertions)

- 개발자가 타입을 강제로 지정

- 컴파일러의 타입 추론을 우회

<details> <summary>예시</summary>

```ts
const el = document.querySelector("div") as HTMLDivElement
el.innerText = "Hello"
```
</details>

---------------------------------------

5. 타입 가드 (Guards)

- 런타임 조건으로 타입을 좁힘 (narrowing)

- typeof, instanceof, in 사용

<details> <summary>예시</summary>

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase())
  }
}
```
</details>

---------------------------------------

6. 인터페이스 (기본, 함수, 인덱싱, 확장)

- 객체 구조 정의에 최적화

- 선언 병합 가능

<details> <summary>예시</summary>

```ts
interface User {
  name: string
}

interface Admin extends User {
  role: string
}

interface Sum {
  (a: number, b: number): number
}
```

</details>

---------------------------------------

7. 타입 별칭 (Type Alias)

- 타입에 이름을 붙여 재사용

- 유니온, 튜플에 적합

<details> <summary>예시</summary>

```ts
type ID = string | number
type Point = { x: number; y: number }
```

</details>

---------------------------------------

8. 함수의 명시적 this

- 함수 내부에서 사용할 this 타입 명시

- 일반 함수에서만 가능

<details> <summary>예시</summary>

```ts
function click(this: HTMLButtonElement) {
  this.disabled = true
}
```

</details>

---------------------------------------

9. 함수 오버로딩

- 하나의 함수에 여러 타입 시그니처 정의

- 실제 구현은 하나만 작성

<details> <summary>예시</summary>

```ts
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: any, b: any) {
  return a + b
}
```

</details>

---------------------------------------

10. 클래스와 접근 제어자

- 자바의 코드와 동일하게 느껴짐.

- 객체지향 패턴 지원

- 접근 범위 제어 가능

<details> <summary>예시</summary>

```ts
class User {
  public name: string       
  protected age: number
  private password: string
}
```

</details>

---------------------------------------

11. 제네릭 함수

- 타입을 매개변수처럼 사용

- 재사용성과 안정성 증가

<details> <summary>예시</summary>

```ts
function wrap<T>(value: T): T {
  return value
}
```
</details>

---------------------------------------

12. 제네릭 클래스

- 클래스 단위에서 타입을 일반화

<details> <summary>예시</summary>

```ts
class Box<T> {
  constructor(public value: T) {}
}
```
</details>

---------------------------------------

13. 제네릭 인터페이스와 제약조건

- 제네릭에 조건을 걸어 타입 제한

<details> <summary>예시</summary>

```ts
interface Response<T> {
  data: T
}

function check<T extends { length: number }>(v: T) {
  return v.length
}
```

</details>

---------------------------------------

14. 패키지의 타입 선언

- JS 라이브러리에 타입 정보 제공

- @types 패키지 사용

<details> <summary>예시</summary>

```bash
npm install -D @types/lodash
```

</details>

---------------------------------------

15. 타입 가져오기와 내보내기

- 타입 전용 import/export 가능

<details> <summary>예시</summary>

```ts
export interface User {}

import type { User } from "./user"

```
</details>

---------------------------------------

16. tsconfig.json 구성 옵션

- TypeScript 컴파일 설정 파일

- 프로젝트 품질에 직접적인 영향

<details> <summary>예시</summary>

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES6",
    "module": "ESNext",
    "moduleResolution": "node"
  }
}
```

</details>

---------------------------------------

## ✨ 타입스크립트를 배우면서 느낀 점

처음에는 귀찮지만 규모가 커질수록 압도적으로 편해짐

“에러를 빨리 알 수 있다”는 게 가장 큰 장점

코드를 읽는 시간이 줄고, 의도가 명확해짐

협업 시 실수와 커뮤니케이션 비용 감소


## 💡 간략히 요약하자면..

❌ any 남용하지 말기 → unknown + 타입가드

✅ 객체는 interface, 조합 타입은 type

✅ 유니온 타입에는 항상 타입 가드 고려

✅ 외부 API 응답은 반드시 타입 정의

✅ strict: true는 무조건 켜고 시작

✅ 타입은 “완벽”보다 “점진적”으로

---------------------------------------

## 중요! 실무에서 사용하는 타입스크립트의 전략
타입스크립트를 배우며 느끼는것과 알게된 사실들을 기록하다가 
막상 실무에서는 어떤식으로 사용해야 도움이 될까? 라는 생각을 하게되었다.
그러면서 찾아보게된 내용인데 감사하게도 해당 티스토리에 정말 도움이 될만한 내용이 기재되어있었다.
[티스토리링크](https://jelong.tistory.com/entry/%EC%8B%A4%EB%AC%B4%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-TypeScript-%EC%A0%84%EB%9E%B5-%EB%B0%8F-%EB%A9%94%EC%84%9C%EB%93%9C)

