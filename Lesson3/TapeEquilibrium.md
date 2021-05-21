실패했던 답안이다 퍼포먼스 전체 통과 못함ㅋㅋㅋㅋㅋ O(N^2) 나옴..

```Javascript
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    // 비어있지 않은 배열 A (N개의 정수로 구성된)이 제공된다. A는 테이프의 수를 나타낸다
    // 0 < P < N의 정수 P는 테잎을 비어있지 않은 배열 2개로 나눈다.
    // A[0] ~ A[P-1]과 A[P] ~ A[N-1]

    // 두 파트 간의 차이점은 다음의 값이다
    //|(A[0] + A[1] + ... + A[P-1]) - (A[P] + A[P+1] + ... + A[N-1])|

    // 주어진 정수 N의 비어있지 않은 배열 A에서 최소한의 차를 구하는 것이 목적.

    // 부분합 2개 구하고 각 차를 구한후 그 중 최솟값..구하기 문제

    // 조건
    /**
     * 2 <= N <= 100000 배열의 최소크기 2니까 0,1도 된다..
     * -1000 <= 요소 A <= 1000
     */

    const N = A.length;

    let min = Number.MAX_VALUE;
    for(let P = 1; P < N; P++) {
        // 0부터 P까지
        const frontArr = A.slice(0, P);
        const backArr = A.slice(P,N);

        // front의 sum - back의 sum을 절대값으로 한 후 배열에 저장
        const result = Math.abs(frontArr.reduce((sum, n) => sum + n, 0) - backArr.reduce((sum, n) => sum + n, 0));
        min = min >= result? result : min;
    }
    return min;
}
```

시간 복잡도를 어떻게 줄여야할까....
배열을 정렬하면 안되고 다 더해야하긴 하는데...
위의 방법이 완전 정확한 방법이지만, 퍼포먼스에서 떨어지는 점이 좋지 않은 점이었다.

그래서 생각한 방법이 P가 1씩 증가하고 값이 앞에 더해지고 뒤에서는 빠지는 형태..

```Javascript
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;

    let frontArr = A[0];
    let backArr = A.split(1,N).reduce((sum, e) => sum + e, 0);
    let min = Math.abs(frontArr - backArr);
    for(let P = 1; P < N - 1; P++) {
        frontArr += A[P];
        backArr -= A[P];
        const abs = (Math.abs(frontArr - backArr));
        if(abs < min) min = abs;
    }
    return min;
}
```

결국 성공했다.
아 왜 첫번째에 성공하지 못할까,,,,
