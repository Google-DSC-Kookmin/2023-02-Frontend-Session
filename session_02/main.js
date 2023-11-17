// 태어난 연도 입력받기
var birthYear = prompt("태어난 연도를 입력해주세요", "1999");

// 나이 계산하기
var date = new Date(); // 날짜 객체 생성
var year = date.getFullYear(); // 현재 연도 가져오기
var age = year - birthYear + 1; // 나이 계산

// p 태그 찾기
var p = document.querySelector("p");
// p 태그에 글 쓰기
p.innerHTML = "나이는 " + age + "세 입니다.";

// 첫 번째 p 태그 찾기
var p1 = document.querySelector("html > body > p");