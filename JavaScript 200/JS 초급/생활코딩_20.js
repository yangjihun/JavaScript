// 20강 : 전역객체
function func(){
  console.log('Hello?');
}
func();
window.func();  // func는 window라는 객체의 메소드이다