// apply
let o1 = {val1:1,val2:2,val3:3};
let o2 = {v1:10,v2:50,v3:100,v4:25};
function sum(){
  let _sum = 0;
  for(let name in this){
    _sum+=this[name];
  }
  return _sum;
}
console.log(sum.apply(o1));  // 6
console.log(sum.apply(o2));  // 185