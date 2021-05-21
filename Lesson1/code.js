function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  // 2진수로 변환
  const binary = N.toString(2);
  // 제일 먼저 등장하는 1과 마지막 등장하는 1로 잘라준다
  // + 1을 한 이유는 1이 존재하는 인덱스부터 자르면 처음에 0개의 배열이 나와 불필요한 연산이 생김
  const binaryGap = binary.slice(binary.indexOf('1') + 1, binary.lastIndexOf('1'));
  // 중간에 있는 1로 자른 후, 각 제로의 갯수를 세어 가장 큰 놈이 바이너리 갭이 가장 큰 갯수
  return Math.max(...binaryGap.split('1').map((zero) => zero.length));
}