# PermCheck

앞에 계속 통과하니 이것도 쉽게 통과했다.

```Javascript
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // N개의 정수를 가진 비어있지 않은 배열 A가 주어진다.
    // permutation은 1~N 각 요소를 단 한번만 포함하는 시퀀스이다.
    // 배열 A가 permutation인지 체크하여라.
    // permutation 이라면 1을 아니라면 0을 리턴해라.
    const N = A.length;
    const checkArr = new Array(N+1);
    for(let i = 0; i < N; i++) {
        const num = A[i];
        if(checkArr[num] > 0) return 0;
        checkArr[num] = i;
    }

    for(let i = 1; i < checkArr.length; i++) {
        if(Number.isInteger(checkArr[i]) === false) return 0;
    }

    return 1;
}
```

(https://app.codility.com/demo/results/trainingDKKQJ7-ANU/)[https://app.codility.com/demo/results/trainingDKKQJ7-ANU/]
