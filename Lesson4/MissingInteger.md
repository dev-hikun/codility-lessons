# MissingInteger

처음으로 한번에 100 100 100을 찍은 문제.

양의 정수만 체크한 후
카운터를 늘려가며 찾기만 하면 되는 간단한 문제였다.

```javascript
function solution(A) {
  // N개의 정수를 가진 배열 A가 제공된다.
  // A에서 발생하지 않은 가장 작은 양의 정수를 반환하라
  // N은 1~10만
  // 배열의 각 요소는 -1000000 ~ 1000000
  const N = A.length;
  const checker = new Array(N + 1);

  for (let i = 0; i < N; i++) {
    const num = A[i];
    if (checker[num]) continue;
    if (num > 0 && num < checker.length) checker[num] = true;
  }

  let checkerCount = 0;
  for (let i = 1; i < checker.length; i++) {
    if (checker[i]) checkerCount++;
    else return i;
  }

  return checkerCount === checker.length - 1 ? checker.length : 1;
}
```
