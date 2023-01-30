# [Algorithm Master](https://www.algorithmweb.site)

&nbsp; Algorithm Master는 알고리즘 문제를 풀어보며 문제해결 능력을 키우고, 해당 솔루션이 어느 정도의 효율을 가지는지 측정하고 타 유저의 솔루션과 비교한 순위를 확인할 수 있는 웹 애플리케이션입니다.
<br>

- [서버 Repository](https://github.com/tpdud406/algorithm-master-sever)

## 목차

- &nbsp; [동기](#동기)
- &nbsp; [사용 기술](#사용-기술)
- &nbsp; [구현 사항](#구현-사항)
- &nbsp; [챌린지](#챌린지)
- &nbsp; [기타사항 (개발기간, 환경변수)](#기타사항)
- &nbsp; [개선 사항](#개선-사항)

## 동기

&nbsp; 알고리즘을 공부하면서 "내가 풀이한 이 솔루션은 어느 정도의 효율을 가질까?" 라는 생각을 종종 가지게 되었습니다. 단순히 시간 복잡도를 계산해 이 풀이는 "O(1)이다", "O(n2)이다" 가 아닌 실질적인 실행 시간을 직접 눈으로 확인하며 다른 솔루션의 시간과 비교해 효율을 가늠해 볼 수 있었으면 좋겠다는 생각에서 이 웹 애플리케이션을 개발하게 되었습니다.

&nbsp; 또한 여러 알고리즘 플랫폼들을 이용해 본 결과, 해당 플랫폼들이 저에겐 불필요한 수 많은 정보들을 담고 있어 이용하기 불편하다는 생각이 들었습니다. 이에 따라 개발한 웹 앱은 필요한 기능만을 컴팩트하게 담았으며, UI는 최소한의 색상으로 표현했습니다.

<br>

## 사용 기술

| 비고 | Frontend                                      | Backend                                  | ETC                                                        |
| :--- | :-------------------------------------------- | :--------------------------------------- | :--------------------------------------------------------- |
| 스택 | React<br>Context API<br>styled-components<br> | Node.js<br>Express<br>MongoDB<br>Vm2<br> | Jest<br>Netlify<br>AWS Elastic Beanstalk<br>Codemirror<br> |

<details>
<summary>해당 기술을 선택한 이유</summary>
<div markdown="1">

1. Context API : 상태 변화가 빈번하지 않은 사용자의 로그인 상태를 위한 전역 상태 관리 방법이 필요했기 때문에 Redux나 Recoil 등의 상태관리 라이브러리는 불필요할 것으로 판단하여 React의 Context API를 사용하였습니다.
2. VM2 : 보안상의 이점이 있어 VM2를 사용하였습니다.
3. Jest : Test Runner, Test Matcher, Test Mock가 통합되어 있는 프레임워크라 편리하게 사용 가능

</div>
</details>
<br>

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
<summary>문제 선택, 실행/ 미작성시 error, 실패시 fail, 성공시 success</summary>
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

## 챌린지

<br>

**실행 시간 측정**

처음엔 함수 실행 시간을 측정하려면 터미널을 이용해 실행 환경에 직접 접근해 조작해야 한다라고 생각했으나, &nbsp;터미널을 직접 조작하지 않고 구할 수 있는 방법들을 많이 알게 되었습니다.
조사 후 처음 알게 된 방법은 Date 객체, console.time(), performance.now() 이 세가지 입니다.
&nbsp;하지만 Date 객체는 컴퓨터마다 기준 시간이 다를 수 있고, performance.now()도 브라우저마다 타임스태프 처리 방법이 다르기 때문에 이 두가지 방법 모두 부정확한 결과가 나올 가능성이 높았고, console.time()은 콘솔을 이용하여 확인하는 방법이라 적합하지 않다고 판단했습니다.
&nbsp;또한 입력받은 함수의 실행이 서버에서 이뤄지는데 세가지 방법 모두 클라이언트 단에서 처리되는 방법들이었기 때문에 이또한 제 웹 애플리케이션에 적용하기엔 적합하지 않다고 판단했습니다.
&nbsp;그래서 Node환경을 기준으로 조사한 결과 나노초단위까지 매우 정확한 시간 측정이 가능한 Node.js process.hrtime() 메서드를 찾게 되었습니다.

```js
//1번 Date 객체 이용 => 밀리초(ms)
let start = new Date();
test();
let end = new Date();

end.getTime() - start.getTime();

//2번 console.time() => 밀리초(ms)
console.time("2번 console.time(): ");
test();
console.timeEnd("2번 console.time(): ");

//3번 performance.now() => 밀리초(ms)
let start = performance.now();
test();
let end = performance.now();

end - start;

//4번 hrtime => 나노초(ns)
const { hrtime } = require("node:process");

const start = hrtime.bigint();
test();
const end = hrtime.bigint();

end - start;
```

![런타임 캡처](https://user-images.githubusercontent.com/95858555/215499188-8b7c03d4-7dcc-48f3-abfb-9dc0b9f3e3ee.JPG)<br>
&nbsp; 다만, 해당 방법은 nanoseconds로 산출되기 때문에 대부분의 런타임 단위인 milliseconds로 변환해 사용해야 했습니다. 하지만 숫자 1,000,000으로 나눴는데 계속 값이 나오지 않았고, 조사 결과 해당 메서드의 return 값 유형이 bigint라 숫자로 나누기가 안 됐습니다. 따라서, 해당 bigint를
숫자로 변환 후에 ns를 ms로 변환하기 위해 1,000,000(1e+6)으로 나누어 해결했습니다.

```js
//bigint to number && nanosecond to millisecond
Math.round((Number(end - start) / 1000000) * 10000) / 10000;
```

**함수 실행**

클라이언트에서 입력받은 사용자의 Javascript 코드를 실행하기 위한 방법에 대해 고민했습니다.
실행할 수 있는 환경을 구축하기 위한 후보는 총 4가지로 eval() 함수, Virtual Machine(이하 VM), Docker, child process였습니다.
<br>
일단, eval() 함수는 인자로 받은 값을 실행해 주는 함수지만, 해당 인자가 악의적인 영향을 주는 형태로 입력될 시 보안에 아주 취약하기 때문에 mdn 문서에서 절대 사용하지 말라는 경고가 있어 빠르게 후보에서 제외했습니다.
<br>
Node.js의 모듈인 child process는 독립적인 프로세스를 생성해 연산을 할 수 있지만, 멀티 프로세스 방식이기 때문에 메모리 관리에 취약해 서버 동작시에 죽지 않는 프로세스가 생길 경우 서버가 죽을 수 있다는 단점이 있습니다. 무엇보다 해당 기능을 사용하기 위해선 입력받은 코드를 별도의 파일에 저장해야 하기 때문에 DB가 아닌 파일들이 쌓이는 것은 비효율적이라고 생각해 제외하였습니다.
<br>
그럼 남은 것은 VM과 Docker인데, VM은 VM 시스템의 게스트 OS가 호스트 OS 위에 있어 무겁게 처리됩니다. Docker는 호스트를 공유하기 때문에 VM보다 가볍고 경제적이며, 컨테이너 관련 처리시간도 빠르기 때문에 특징상 Docker가 적합할 것 같다는 쪽으로 마음이 기울었습니다.
하지만 Javascript 코드를 실행하기 위한 작업 대비 Docker의 높은 러닝커브는 비효율적이라고 생각했습니다. 또 Docker에 보안상의 위험이 있고, 마지막으로 단일 OS 체제의 커널에서 여러 응용 프로그램을 실행할 때 적합한 Docker보다 서로 다른 운영 체제 환경에서 실행될 수 있는 어플리케이션이기에 VM이 최종적으로 적합하다고 판단해 해당 모듈로 코드 실행을 위한 컨텐스트를 생성했습니다.

```js
const { VM } = require("vm2");

const vm = new VM({
  timeout: 1000,
  allowAsync: false,
  sandbox: {},
});

vm.run(`
  function add (a, b) {
    return a + b;
  }`);
```

레퍼런스

- [eval()함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [child process](https://sungmun.github.io/TIL/NodeJs/2018-04-19_ChildProcessManual.html)
- [VM과 Docker](https://cloudacademy.com/blog/docker-vs-virtual-machines-differences-you-should-know/)

**통계**

제출된 문제들에 대한 많은 런타임들의 통계치를 구한다는 것이 막막했습니다. 오랜만에 언급해보는 수학적으로 통계라는 단어 자체에 대한 막연함과 실제로 중복이 있을 런타임들 값을 가지고 구한다는 점 때문이었습니다. 그러다 처음에 어렵게 생각해 찾아낸 키워드가 빈도 분포, 상대 빈도 분포와 같은 것들이었고, 이 부분 때문에 계산하는데 어려움을 겪었습니다.
그 이유는 빈도와 분포된 정도를 구하고, 범위를 분할해야 한다고 생각했기 때문에 계산하기가 까다로웠는데, 계속 계산 방식을 찾아보다 이 부분은 추가 개선 사항으로 생각해 둔 통계 시각화를 위한 계산 방식이라고 생각되었습니다. 그래서 통계 산출은 많은 런타임들 중 중복된 값을 제거, 정렬한 후 내 런타임을 모든 런타임의 합으로 나누어 계산하는 방식으로 진행하였습니다.

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

## 개선 사항

- VM2 컨텍스트에 입력된 작업이 동기적으로 실행됨에 따라 무거운 연산시 발생할 Blocking 현상을 예방하기 위해 실행 코드의 비동기화<br>
  예시 코드 (Sync to Async)<br>

  ```js
  const vm = require("node:vm");

  function loop() {
    while (1) console.log(Date.now());
  }

  vm.runInNewContext(
    "Promise.resolve().then(() => loop());",
    { loop, console },
    { timeout: 5, microtaskMode: "afterEvaluate" }
  );
  ```

  레퍼런스

  - [Node.js](https://nodejs.org/api/vm.html)<br>
  - [Github 이슈 페이지](https://github.com/patriksimek/vm2/issues/80)

- 사용자 경험을 위해, 각 문제에 쌓인 런타임 데이터들을 그래프로 시각화하는 작업

---

이세영 tpdud406@gmail.com
