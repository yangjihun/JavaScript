let vscope = 'global';
function fscope(){
  let vscope = 'local';
  vscope = 'a';
  console.log(vscope);
}

fscope();
console.log(vscope);

// i 정규표현식 패턴의 대소문자를 구분 x
let xi = /a/i;
console.log("Abcde".match(xi));
// g 검색된 모든 결과를 리턴
let xg = /a/g;
console.log("abcdea".match(xg))
let xig = /a/ig;
console.log("abcdAa".match(xig));