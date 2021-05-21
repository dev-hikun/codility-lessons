# OddOccurrencesInArray

N개의 정수를 가진 비어있지 않은 배열 A는 홀수를 인자로 가지는데, 각 요소는 같은 밸류를 가진 다른 요소와 페어하다.
페어하지 않은 요소를 구해라.

For example, given array A such that:

A[0] = 9 A[1] = 3 A[2] = 9
A[3] = 3 A[4] = 9 A[5] = 7
A[6] = 9
the function should return 7.

```Javascript
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    if([1].includes(N)) return A.pop();

    const keyValuePair = new Map();
    for(i=0; i<N; i++) {
        if(keyValuePair.has(A[i]) === false)
            keyValuePair.set(A[i], 0);
        const count = keyValuePair.get(A[i]);
        keyValuePair.set(A[i], count + 1);
    }
    for(const [key, value] of keyValuePair) {
        if(value % 2 !== 0) return key;
    }
}
```

또 첫번째 시도에 77% ㅡㅡ..
시간복잡도가 너무 컸다.. O(n\*\*2)가 나왔다 ㅋㅋㅋㅋ 한숨..
퍼포먼스는 50%; 아마 map이 성능이 좋지 않아서도 있고
has를 사용하며 한번 돌고
get을 쓸때도 돌고
근데 그 돌리는놈은 for문이고.. 증가 할 수 밖에 없다.

77%인 이유는 시간초과 ㅋㅋ
어떻게 줄여야할까 곰곰히 생각해봤다.

그래서 나온 생각은 하나는 앞에서, 하나는 뒤에서 돌아오면서 체크한다.
그리고 찾으면 pass를 하고 해당 index는 다시 돌지 않게끔 자른다.

```Javascript
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    if(N === 1) return A.pop();

    const passIndex = [];
    for(let i = 0; i < N; i++) {
        if(passIndex.includes(i)) continue;
        let isFind = false;
        for(let j = N; j > i; j--) {
            if(passIndex.includes(j)) continue;
            if(A[i] === A[j]){
                passIndex.push(...[i, j]);
                isFind = true;
                break;
            }
        }
        if(isFind) continue;
        return A[i];
    }
}
```

ㅋㅋ 또 50% 실패 퍼포먼스 제로 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ더 최악이 나왔다 사실 break하고 끊으니까 더 빨리돌줄 알았는데 그것도 아닌가보다. 아 includes에서 또 반복을 도니까 그런가보다 ㅠ\_ㅠ

어떻게 해결해야할지 10분 이상 더 고민했다.

나는 바보였다. 왜 카운트를 더했지? 삭제하면 되는데..
결국 set을 이용해 루프를 줄여 다음과 같이 해결했다.
시간복잡도는 O(N) or O(N\*log(N)) 이었다.

```Javascript
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let element = new Set();
    for(let i in A) {
        element.has(A[i]) === false? element.add(A[i]) : element.delete(A[i]);
    }

    return [...element][0]
}
```
