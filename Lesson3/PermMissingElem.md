N개의 다른 정수를 가진 배열 A가 있고, A는 1~N+1으로 이루어져 있다. 즉 1개의 요소는 무조건 빠진다.
이 빠진 요소를 찾아라.

For example, given array A such that:
A[0] = 2
A[1] = 3
A[2] = 1
A[3] = 5
the function should return 4, as it is the missing element.

```
0 <= N <= 100000
요소는 1~N+1 안에 들어있음
```

요소가 0개 일 경우 1~1이니 1이 되고
나머지는 N개만큼 더한 값 - 배열의 갯수를 전체 더한 값이 빠진 요소가 되는 것이었다.

Sn = (n/2)_(a1+an)을 이용하여 쉽게 해결했다.
본 배열은 1부터 시작하므로 0이 없다. 그러므로 ((n+1)/2)_(1+(n+1)), 즉 (n+1)\*(n+2)/2이 전체의 합이다

다음의 코드로 총 8분이 걸렸다.

```Javascript
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;

    if(N === 0) return 1;

    const sumTotal = ((N+1)*(N+2))/2;
    const sumArr = A.reduce((sum, cur) => sum + cur, 0);
    return sumTotal - sumArr;
}
```
