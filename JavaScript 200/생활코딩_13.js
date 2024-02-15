// 13강 : 함수지향 - 유효범위
function a(){
  i = 0;
}
for(let i=0;i<5;i++){
  a();
  console.log(i);
}

var k = 50;
function b(){
  var k = 10;
  c();
}

function c(){
  console.log(k);
}
b();