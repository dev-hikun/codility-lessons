# CyclicRotation

N개의 배열로 이루어진 A를 K번 오른쪽으로 시프팅 한 후 시프팅 된 애들은
다시 앞으로 들어오는 회전배열 문제였다.

최초에는 배열을 뒤에 더 붙여서 만든 다음 원하는 부분을 잘라내면 되겠다 생각해서 다음과 같이 작성했다.

```Javascript
function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(Array.isArray(A) === false) throw new Error('invalid data');
    if(Number.isNaN(Number(K))) throw new Error('invalid data');
    const length = A.length;
    // 배열의 갯수가 0개거나 K가 0이거나 배열의 갯수의 배수이면 그대로 리턴
    if(length === 0 || K === 0 || length % K === 0) return A;

    const shiftCount = K % length;
    // [1,2,3] 일 경우 [1,2,3,1,2]
    // [3,8,9,7,6] 일 경우 [3,8,9,7,6,3,8,9,7] 형태로 만듬
    const arr = A.concat(A.slice(0, length - 1));
    const arrLength = arr.length;
    const lastIndex = arrLength - shiftCount + 1;
    return arr.slice(lastIndex - length, lastIndex);
}
```

하지만 위의 코드는 총 걸린 시간이 24분인데도 불구하고 스코어가 62%나왔다 ㅠ\_ㅠ
배열의 요소가 2개일때 한번은 통과 한번은 불통..
그리고 배열의 요소가 1개일 때 K는 0~5가 주어진다고 했을 때에도 3개 중 2개만 통과..
그리고 스몰 랜덤 올 로테이션즈?에서 15개의 배열이 주어졌을때도 15개 중 3개가 틀렸다..

```Javascript
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const length = A.length;
    // 배열이 그대로 인 조건들
    if(K === 0 || K % length === 0 || length === K || [0,1].includes(length)) return A;
    // K > N일 경우 똑같은거 반복임
    const condition = length - K % length;
    // K = 3, A.length = 5
    return A.slice(condition).concat(A.slice(0,condition));
}
```

그래서 9분에 걸려 위의 코드로 다시 시도하여 100% 나왔다.
그냥 자르고 자른만큼 다시 앞에다 박으면 되는 단순한 문제였다..
이걸 이렇게 오래걸리다니..
