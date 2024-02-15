// 15강 : 클로저
// 클로저는 내부함수가 외부함수의 맥락에 접근할 수 있는 것을 가르킨다

// 내부함수, 외부함수
function outter1(){  // 외부함수
  let title = 'coding everybody1';  //외부함수에서 정의된 지역변수
  function inner1(){  // 내부함수
    console.log(title);
  }
  inner1();
}
outter1();

function outter2(){
  let title = 'coding everybody2';
  return function(){
    console.log(title);
  }
}
inner2 = outter2();
inner2();

// private variable
function factory_movie(title){
  return {
    get_title:function(){
      return title;
    },
    set_title:function(_title){
      if (typeof _title === String){
        title = _title;
      } else{
        console.log('제목은 문자열이어야 합니다.');
      }
    }
  }
}
let ghost = factory_movie('Ghost in the shell');
let matrix = factory_movie('Matrix');
console.log(ghost.get_title());
console.log(matrix.get_title());
ghost.set_title('공각기동대');
console.log(ghost.get_title());

// 클로저의 응용
let arr = []
for(let i=0;i<5;i++){
  arr[i] = function(){
    return i;
  }
}
for(let index in arr){
  console.log(arr[index]())
}