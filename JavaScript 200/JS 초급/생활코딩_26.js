// 26강 : 참조
// 참조
/*
let a = {'id':1};
let b = a;
b.id = 2;
console.log(a);
*/
// 변수에 담겨있는 데이터가 원시형이면 그 안에는 실제 데이터가 들어있고, 객체면 변수 안에는 데이터에 대한 참조 방법이 들어있다

// 함수와 참조
/*
let a = 1;
function func(b){
  b = 2;
}
func(a);
console.log(a);

let a2 = {'id':1};
function func(b){
  b = {'id':2};
}
func(a2);
console.log(a2.id);
*/

let a = {'id':1};
function func(b){
  b.id = 2;
}
func(a);
console.log(a);