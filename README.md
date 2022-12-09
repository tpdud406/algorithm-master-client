# Algorithm Master

## 프로젝트 소개

<br>
&nbsp; Algorithm Master는 알고리즘 문제를 풀어보며, 내 풀이한 코드가 어느 정도의 효율을 가지는지 타 유저가 작성한 코드와 비교해보며, 순위까지 확인해 볼 수 있는 확인해 볼 수 있는 웹 애플리케이션입니다.

<br>
&nbsp; 알고리즘을 공부하면서 "내가 풀이한 이 솔루션은 어느 정도의 효율을 가질까?" 라는 생각을 종종 가지게 되었습니다. 단순히 시간 복잡도를 계산해 이 풀이는 "O(1)이다", "O(n2)이다" 가 아닌 실질적인 실행 시간을 직접 눈으로 확인하며 다른 솔루션의 시간과 비교해 효율을 가늠해 볼 수 있었으면 좋겠다는 생각에서 이 웹 애플리케이션을 개발하게 되었습니다.

&nbsp; 또한 사전 조사를 위해 여러 알고리즘 플랫폼들을 이용해 본 결과, 해당 플랫폼들이 저에겐 불필요한 수 많은 정보들을 담고 있어 이용하기 불편하다는 생각이 들었습니다. 이에 따라 개발한 웹 앱은 필요한 기능만을 컴팩트하게 담았으며, UI는 최소한의 색상으로 담백하게 표현해 보았습니다.

<br>

---

## 목차

1. &nbsp; [구현 사항](#구현-사항)
2. &nbsp; [챌린지](#챌린지)
3. &nbsp; [개선 사항](#개선-사항)
4. &nbsp; [기타사항(개발기간,환경변수,사용기술)](#기타사항)
5. &nbsp; [개발자 소개](#개발자-소개)

---

## 구현 사항

<br>

<details>
<summary>로그인, 로그아웃</summary>
<div markdown="1">

![로그인,로그아웃](https://user-images.githubusercontent.com/95858555/206607324-8babcc0e-2604-4500-bae6-9696fc1c84b1.gif)

</div>
</details>
<br>

<details>
<summary>문제리스트, 문제생성</summary>
<div markdown="1">

![문제생성](https://user-images.githubusercontent.com/95858555/206607314-23c165d4-767c-4cf1-90b6-ef6829171e89.gif)

</div>
</details>
<br>

<details>
<summary>문제 선택, 이동/ 미작성시 error, 실패시 fail, 성공시 success</summary>
<div markdown="1">

![문제풀이](https://user-images.githubusercontent.com/95858555/206607322-0addeefc-1475-429b-b346-5b0a06ec316d.gif)

</div>
</details>
<br>

<details>
<summary>제출한 문제 리스트(통계)</summary>
<div markdown="1">

![통계](https://user-images.githubusercontent.com/95858555/206607323-503a466a-0e77-4ef0-86b9-485cf75abd18.gif)

</div>
</details>
<br>

---

## 챌린지

<br>

**함수실행**

유저가 선언할 함수의 이름을 모르는 상태에서 어떻게 실행시켜야 할지 고민이 됐습니다. 처음에는 유저에 의해 선언된 함수를 가공하여 함수명을 추출해야 한다고 생각했습니다. 하지만 단순한 함수 선언식, 표현식이 아닌 그 외의 생각하지 못 한 엣지케이스가 많을 것 같았습니다. 그래서 유저가 마음대로 선언한 모든 엣지 케이스에 대한 실행은 비 합리적일 것이라 판단했습니다.
<br> &nbsp;그래서 작성할 함수의 이름을 임의로 solution 함수로 고정시켰고, test코드의 입력 부분에 solution 함수로 실행된다는 것을 명시해주기로 했습니다.

**시간 측정**

처음엔 함수 실행 시간을 측정하려면 터미널을 이용해 실행 환경에 직접 접근해 조작해야 한다라고 생각했으나, &nbsp; 터미널을 직접 조작하지 않고 구할 수 있는 방법들을 많이 알게 되었습니다.
조사 후 처음 알게 된 방법은 Date 객체, console.time(), performance.now() 이 세가지 입니다.
&nbsp;하지만 Date 객체는 컴퓨터마다 기준 시간이 다를 수 있고, performance.now()도 브라우저마다 타임스태프 처리 방법이 다르기 때문에 이 두가지 방법 모두 부정확한 결과가 나올 가능성이 높았고, console.time() 또한 콘솔을 이용하여 확인하는 방법이라 적합하지 않다고 판단했습니다.
&nbsp;그리고 함수 실행이 서버에서 이뤄지는데 세가지 방법 모두 클라이언트 단에서 처리되는 방법들이었기 때문에 또한 제 웹 애플리케이션에 적용하기엔 적합하지 않다고 판단했습니다.
&nbsp;그래서 node환경 기준으로 조사한 결과 나노초단위까지 매우 정확한 시간 측정이 가능한 Node.js process.hrtime() 메서드를 찾게 되었습니다.

&nbsp; 다만, 해당 방법은 nanoseconds로 산출되기 때문에 대부분의 런타임 단위인 milliseconds로 변환해 사용해야 했습니다. 하지만 단순히 숫자 1000000으로 나눴는데 계속 값이 나오지 않았고, 조사 결과 해당 메서드의 return 값 유형이 bigint라 숫자로 나누기가 안 됐습니다. 따라서, 해당bigint를
숫자로 변환 후에 ns를 ms로 변환할 수 있는 공식인 1e+6(1000000)으로 나누는 방식으로 해결했습니다.

**통계**

제출된 문제들에 대한 많은 런타임의 통계치를 구한다는 것이 막막했습니다. 오랜만에 언급해보는 수학적으로 통계라는 단어 자체에 대한 막연함과 실제로 중복이 있을 런타임들 값을 가지고 구한다는 점 때문이었습니다. 그래서 처음에 어렵게 생각해 찾아낸 키워드가 빈도 분포, 상대 빈도 분포와 같은 것들이었고, 이 부분 때문에 계산하는데 어려움을 겪었습니다.
빈도와 분포된 정도를 구하고, 범위를 분할해야 한다고 생각했기 때문에 계산하기가 까다로웠는데, 계속 계산 방식을 찾아보다 이 부분은 추가 개선 사항으로 생각해둔 통계 시각화를 위한 계산 방식이라고 생각되었습니다. 그래서 통계 자체는 단순하게 많은 런타임들 중 중복된 값을 제거, 정렬한 후 내 런타임을 모든 런타임의 합으로 나누어 계산하는 방식으로 진행하게 되었습니다.

---

## 개선 사항

- 함수형 프로그래밍 기법으로 리팩토링<br>
- 통계를 각 문제에 쌓인 런타임 규모에 따른 분할 단위를 적용한 그래프로 시각화 기능 추가

---

## 기타사항

<details>
<summary>개발기간</summary>
<div markdown="1">

| **날짜**             | 구현 사항                                                   |
| :------------------- | :---------------------------------------------------------- |
| 22.11.24 ~ 25(2일)   | 프로젝트 기획 <br> 아이디어 확정, 칸반, DB 스키마, API Docs |
| 22.11.26 ~ 12.2(7일) | 메인 기능 구현                                              |
| 22.12.3 ~ 8(7일)     | 메인 기능 마무리 및 배포(Netlify, AWS Elastic Beanstalk)    |

</div>
</details>
<br>

<details>
<summary>설치 방법</summary>
<div markdown="1">

```js
git clone <Frontend or Backend git url>
npm install
npm start
```

**Frontend 환경 변수(.env)**

```
REACT_APP_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
REACT_APP_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
REACT_APP_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
REACT_APP_SERVER_HOST=<YOUR_SERVER_HOST>
```

**Backend 환경 변수(.env)**

```
PORT=<YOUR_SERVER_PORT>
MONGODB_URL=<YOUR_MONGODB_URL>
CLIENT_HOST=<YOUR_CLIENT_HOST>
```

</div>
</details>
<br>

<details>
<summary>사용기술</summary>
<div markdown="1">

| 비고 | Frontend                                     | Backend            |
| :--- | :------------------------------------------- | :----------------- |
| 스택 | React<br>codemirror<br>styled-components<br> | Express<br>vm2<br> |

</div>
</details>
<br>

---

## 개발자 소개

<br>

### 이메일: tpdud406@gmail.com

### 배포사이트: <https://www.algorithmweb.site>
