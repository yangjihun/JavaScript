// 19강 : 생성자와 new
// 객체 내의 변수를 property, 함수를 method라고 부른다
let person = {}  // Object(객체) 생성
person.name = 'egoing';
person.introduce = function(){
  return 'My name is ' + this.name;
}
console.log(person.introduce());


// 생성자와 new
function Person(name){
  this.name = name;
  this.introduce = function(){
    return 'My name is '+this.name;
  }
}
let p0 = new Person('egoing');
let p1 = new Person('leezche');
console.log(p0);
console.log(p1.introduce());