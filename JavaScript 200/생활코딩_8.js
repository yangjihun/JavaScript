// 배열
let member = ['egoing',7,'sorialgi'];
for(let i=0;i<member.length;i++){
  console.log(member[i]);
}
console.log(member);

function k(){
  return 'k';
}

let m = [k(),k(),2];
console.log(m[0]);

// 원소의 추가
let li = ['a','b','c','d','e'];
console.log(li);
li.push('f');
console.log(li);
li = li.concat(member);
console.log(li);
// unshift
li = ['a','b','c','d'];
li.unshift('z');
console.log(li);
// splice 2번째 자리에 0이 오면 삭제 과정 없이 새로운 원소를 추가
li = ['a','b','c','d'];
li.splice(1,0,'k');
console.log(li);
console.log("splice 2번째 자리에 숫자가 오면 그만큼 지우고 새로운 원소를 추가");
li = ['a','b','c','d'];
li.splice(1,1,'x','y');
console.log(li);

// 배열 원소 제거
console.log("배열 원소 제거");
li = ['a','b','c','d'];
li.shift();  // 오른쪽 원소가 삭제
console.log(li.shift());
li.pop();  // 왼쪽 원소가 삭제
console.log(li);


// 정렬
console.log("정렬");
li = ['c','e','a',3,'b','d'];
li.sort();
console.log(li);
console.log(li.reverse());