개구리가 길 밖으로 나가고 싶어한다.
X에서 Y나 Y보다 큰 포지션으로 옮기고 싶어한다.
한 턴당 D의 거리를 이동할 때 D를 구해라.

X,Y,D = 1 ~ 1억
X <= Y

이 문제는 한 1분만에 풀었다.

```Javascript
function solution(X, Y, D) {
    // 이동해야 할 거리
    const dist = Y-X;
    // 가야할 횟수
    const q = Math.floor(Y/dist);
    // 남은 거리
    const r = Y%dist;
    // 남은 거리가 있을 경우 1턴 더, 없을 경우 그대로
    return r > 0 ? q + 1 : q;
}
```
