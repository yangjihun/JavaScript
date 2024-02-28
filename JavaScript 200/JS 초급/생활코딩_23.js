// 23강 : 표준 내장객체의 확장
/*
let arr = new Array('seoul','new york','ladarkh','pusan','Tsukuba');
function getRandomValueFromArray(arr){
  let index = Math.floor(arr.length*Math.random());
  return arr[index];
}
console.log(getRandomValueFromArray(arr));
*/
Array.prototype.random = function(){
  let index = Math.floor(this.length*Math.random());
  return this[index];
}
let arr = new Array('seoul','new york','ladarkh','pusan','Tsukuba');
console.log(arr.random());