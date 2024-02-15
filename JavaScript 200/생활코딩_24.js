// 24강 : Object
Object.prototype.contain = function(needle){
  for(let name in this){
    if (this[name]===needle){
      return true
    }
  }
  return false
}

let o = {'name':'egoing','city':'seoul'};
console.log(o.contain('egoing'));
let a = ['egoing','leezche','grapittie'];
console.log(a.contain('leezche'));

for(let name in o){
  console.log(name);
}
// name, city, contain
// contain도 포함이 되어있음

for(let name in o){
  if(o.hasOwnProperty(name)){  // hasOwnProperty를 사용하면 배열에 확장된 부분은 제외할 수 있다
    console.log(name);
  }
}