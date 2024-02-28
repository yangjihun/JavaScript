// 14강 : 함수의 용도
//js는 함수 자체가 값이 될 수 있음


function cal(mode){
  let funcs = {
    'plus':function(left,right){return left+right},
    'minus':function(left,right){return left-right}
  }
  return funcs[mode];
}
console.log(cal('plus')(2,1));
console.log(cal('minus')(2,1));

// 배열
var process = [
  function(input){return input+10;},
  function(input){return input*input;},
  function(input){return input / 2;}
];
let input = 1;
for(let i=0;i<process.length;i++){
  input = process[i](input);
}
console.log(input);

// 콜백
let sortfunc = function(a,b){
  if (a>b){
    return 1;
  } else if (a<b){
    return -1;
  } else{
    return 0;
  }
}
let numbers = [20,10,9,8,7,6,5,4,3,2,1];
console.log(numbers.sort(sortfunc));

// 비동기 처리는 Ajax로