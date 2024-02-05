function solution(arr) {
  var answer = [arr[0]];
  let current = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== current) {
      answer.push(arr[i]);
      current = arr[i];
    }
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log(answer);

  return answer;
}
