function solution(numbers) {
  let sortedNum = numbers.map((num) => num.toString());

  sortedNum.sort((a, b) => (b + a).localeCompare(a + b));

  if (sortedNum[0] === "0") {
    return "0";
  }

  var answer = sortedNum.join("");
  return answer;
}
