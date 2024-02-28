const add = (a,b) => a + b;  // 함수 선언

function calculator(func,a,b){  // 함수 선언
  return func(a,b);
}

console.log(add(3,5));
console.log(calculator(add,3,5));
// calculator(add(),3,5); add()는 함수를 호출하는 거임
// document.querySelector('#header).addEventListener('click',add()); -> 클릭을 안해도 add()가 실행됨

// 화살표 함수
let a = (r) => r+3;
console.log(a(9));
let b = (e) => {
  console.log(e);
}
b(a(3));