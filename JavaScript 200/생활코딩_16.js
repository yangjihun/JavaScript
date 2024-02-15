// 16강 arguments (유사배열) -> 매개변수를 배열처럼 저장(?)
function sum(){
  console.log(arguments);
  let i, _sum = 0;
  for(i=0;i<arguments.length;i++){
    console.log(i,arguments[i]);
    _sum+=arguments[i];
  }
  return _sum;
}
console.log(sum(1,2,3,4));