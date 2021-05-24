# CountDiv

### 1차시도

아래의 코드는 50%의 정답률에 25%의 퍼포먼스율을 보여줬다.
역시나 for문은 잘못된 선택이었다. 쓰면서도 이상하다고 생각했는데...

```Javascript
function solution(A, B, K) {
    // A, B와 K라는 정수가 주어진다.
    // 정수를 리턴하라 (K로 나눠지는 [A~B]범위)
    // A<=i<=B, i%K === 0

    // A와 B는 0부터 20억
    // K는 1부터 20억
    // A <= B
    let firstDividedNumber = 0;
    for(let i = A; i <= B; i++) {
        if(i%K === 0){
            firstDividedNumber = i;
            break;
        }
    }

    let count = 0;
    for(let i = firstDividedNumber; i <= B; i+=K) {
        count++;
    }
    return count;
}
```

### 2차시도

성공하였다. 간단했다. 범위가 A에서부터 B까지로 한정되어 있기 때문에.

```Javascript
function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    const resultA = Math.ceil(A / K);
    const resultB = Math.ceil((B+1) / K); // B의 결과도 포함시키기 위함.
    return resultB - resultA;
}
```

[https://app.codility.com/demo/results/trainingFKMMSC-JMA/](https://app.codility.com/demo/results/trainingFKMMSC-JMA/)
