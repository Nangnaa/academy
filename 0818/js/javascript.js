// let a = $('h1').text();
// let b = a + 'jungle'
// $('h1').text(b);

let a = 3;
let b = 10;
console.log(a % b); //3 10에서 3나누고 나머지 버리기

let c = 5
let d = 6
let e = 5

if(c == d){
  console.log('c와 d가 같다');
}else{
  console.log('c와 d가 다르다');
}

if(c === e){
  console.log('내용과 데이터 타입도 같다');
}else{
  console.log('같지않다.');
}

if(c != d){
  console.log('같다.');
}else{
  console.log('같지않다');
}

var arr1 = [];
var arr2 = [1, "가", 10];

arr1.push(20);
arr2.push("나");

console.log(arr1); //20
console.log(arr2); // [1, '가', 10, '나']
console.log(arr2[1]); //  가

function fnName(){
  console.log('hello');
}

fnName()

function fnName2(comment){ //함수가 실행될때 던진 데이터를 comment(argument)로 가져옴 
  console.log('hello'+ comment);
}

fnName2('jungle') //comment에 jungle(parameter)을 넣음 

function fn(a,b){
  console.log(a + b);
}
fn(1,2)


