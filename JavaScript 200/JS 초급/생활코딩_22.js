// 22강
function Person(name){
  this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
  return 'My name is '+this.name; 
}

function Programmer(name){
  this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
  return "hello world";
}

var p1 = new Programmer('egoing');
console.log(p1.introduce());
console.log(p1.coding());

// prototype (원형)
function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
Sub.prototype = new Super();
 
var o = new Sub();
console.log(o.ultraProp);