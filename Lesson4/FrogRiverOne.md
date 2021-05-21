# FrogRiverOne

- 개구리가 강을 건너고 싶어함. 개구리는 포지션 0 (one bank of the river)
- opposite bank를 가고싶어함 (position X+1)
- 나무에서 강의 표면으로 나뭇잎이 떨어진다
-
- N개의 정수로 이루어진 배열 A는 낙엽을 표현한다.
- A[K]는 포지션 (한개의 잎이 떨어지는 시간 K초)
-
- 구하고자 하는 바는 최대한 빠르게 개구리가 점프해서 반대편으로 건너가게끔
- 1부터 X까지 나뭇잎이 나타날 때에만 개구리는 무조건 건널 수 있다.
- 즉, 1부터 X까지 나뭇잎이 다 가려지는 빠른 때를 구해야함.
-
- 나뭇잎의 위치는 변하지 않음.
-
- 즉, 주어진 정수 N들의 배열 A와 X가 주어지고, 빨리 넘어갈 수 있는 때를 return한다.
- 만약 못건널 때에는 -1를 리턴.
-
- 1 <= N, X <= 100000
- 배열의 요소는 1부터 X까지

```javascript
function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  /**
     
     *  */
  const N = A.length;
  const result = new Array(X).fill(false);
  for (i = 0; i < N; i++) {
    const index = A[i] - 1;
    if (!result[index]) result[index] = true;
    if (result.every((x) => x === true)) {
      return i;
    }
  }
  return -1;
}
```

스코어 72%, 퍼포먼스 40퍼센트. 또 100퍼센트 안나옴 딥빡..
포문안에서 every를 도니까 이럴 줄 알았다.. O(N\*\*2)가 나왔음.
every를 빼야하는데.. 어떻게 빼야 잘 뺐다고 소문날까 ㅋㅋㅋㅋ..

결국 생각한 방법은 set에 값을 넣고 키의 갯수 세기.
가능할까?

도전.

```Javascript
function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const s = new Set();
    for(let i = 0, N = A.length; i < N; i++) {
        const value = A[i];
        s.add(value);

        if(s.size === X) {
            return i;
        }
    }
    return -1;
}
```

성공.

**한번에 성공하고싶다**
