var a = 1;
if(a > 5) {
    // 참일경우 실행하는 code ...
    console.log('참이야');
} else {
    // 거짓일경우 실행하는 code ...
    console.log('거짓이야');
}

var b = 1;
if(b > 5 && b <= 10) {
    // 5보다크고 10보다작은 두가지조건 모두 만족할경우 
    console.log('5보다 크다');
} else if(b > 10) {
    console.log('10보다 크다');
} else {
    // 거짓일경우 실행하는 code ...
    console.log('위 조건 해당 없음');
}

var c = 'text';
if(c == 'text' || c == 'text1') {
    // 하나라도 참이면 true
    console.log('일치한다');
} else {
    console.log('not ok');
} 

//이중 for문에 대해서 공부
for(var i=0; i<5; i++){
  console.log(i);
}
for(var j=5; j>0; j--){
  console.log(j);
}
