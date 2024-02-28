// 객체
function jihun(){
  return 'jihun in function';
}

let grades = {'egoing':10, 'k8805':6, 'sorialgi': 80};
console.log(grades);
grades[jihun()] = jihun();
console.log(grades);
console.log(grades['k88'+'05']);

for(key in grades){  // Object에는 key
  console.log("key: "+ key + ", value: "+grades[key]);
}

let li = [1,2,3,4]
for(i in li){  // list에는 index
  console.log(i);
}

// 객체지향 프로그래밍
let g = {
  'list' : {'egoing' : 10, 'k8805': 8, 'sorialgi': 80},
  'show' : function(){
    for(let name in this.list){
      console.log(name,this.list[name]);
    }  // this는 g를 가르킨다
  }
};
console.log(g['list']['egoing']);
g.show();
