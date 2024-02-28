// 21강 : this
// 함수와 this
function func(){
  if(globalThis===this){
    console.log("window === this");
  }
}
func();

// method와 this
let o = {
  func_m : function (){
    if (o===this){
      console.log("o === this");
    }
  }
}
o.func_m();

// 생성자와 this
let funcThis = null;
function Func(){
  funcThis = this;
}
let o1 = Func();
if(funcThis === globalThis){
  console.log('window');
}
let o2 = new Func();
if(funcThis===o2){
  console.log('o2');
}

// 객체로서 함수
function sum(x,y){return x+y;}
let sum2 = new Function('x','y','return x+y;');
console.log(sum2(1,2));

// apply와 this
let a = {};
let b = {};
function func(){
  switch(this){
    case a:
      console.log('o');
      break;
    case b:
      console.log('p');
      break;
    case window:
      console.log('window');
      break;
  }
}
func.apply(o);