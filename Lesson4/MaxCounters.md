# MaxCounters

Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.

첫 번째 시도. 최악.

```Javascript
function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    /**
     * 0으로 초기화 된 N개의 카운터가 제공되고 2개의 가능한 연산자를 가진다.
     * increase(X) : counter X는 1만큼 증가한다.
     * max counter : 모든 카운터는 가장 높은 카운터의 값이 된다.
     *
     * M개의 정수를 가지며 비어있지 않은 배열 A가 주어진다.
     * 이 배열은 consecutive operation을 나타낸다
     *
     * A[K] = X일때(X는 1~N), K는 X만큼 증가
     * A[K] = N+1이면 K는 맥스카운터
     *
     * N과 M은 1부터 10만
     * A의 요소는 1부터 N+1
     */
    let arr = new Array(N).fill(0);
    let max = -1;
    for(let i = 0, leng = A.length; i < leng; i++) {
        if (A[i] < N+1) {
            const num = arr[A[i] - 1];
            arr[A[i] - 1] = num + 1;
            if(num+1 > max){
                max = num+1;
            }
            continue;
        }

        if (A[i] === N+1) {
            arr = arr.fill(max);
        }
    }
    return arr;
}
```

태스크 점수 44%, Correctness 25%, 퍼포먼스 60%..

아마 퍼포먼스는 계속 fill로 포문 안에서 O(n^2)로 돌아서 그렇지 않았을까 생각을하고
나머지 문제들은 뭐가 잘못되었는진 모르겠지만
다시 시간복잡도를 줄여 시작해보았다.

이번의 방법은 맥스카운터를 저장해두었다가,
마지막에 한번에 업데이트 하는 방식 O(2n)

```javascript
function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let arr = new Array(N).fill(0);
  let max = -1;
  let nowMax = -1;
  for (let i = 0; i < A.length; i++) {
    const operation = A[i];
    const index = operation - 1;
    if (operation >= 1 && operation <= N) {
      if (arr[index] < nowMax) {
        arr[index] = nowMax;
      }
      const num = ++arr[index];
      if (num > max) {
        max = num;
      }
    }

    if (A[i] === N + 1) {
      nowMax = max;
    }
  }

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < nowMax) arr[i] = nowMax;
  }
  return arr;
}
```
