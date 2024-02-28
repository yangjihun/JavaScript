function plus(a,b){
  return a+b;
}

let i = 2;
let j = 4;
console.log(plus(i,j));

// 함수를 정의하는 다른 방법
numbering = function(){
  let i = 0;
  while(i<10){
    console.log(i);
    i++;
  }
}

numbering();

// 2
(function(){
  let i = 0;
  while(i<10){
    console.log(i);
    i++;
  }
})();  // 익명함수, 이름이 없고 바로 실행됨 (1회성)

