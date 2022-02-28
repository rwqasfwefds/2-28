// 배열 연습문제 1

// let n = prompt('숫자를 입력하세요.');
// let x = n.split(' ');
// x.reverse();

// for(let i = 0; i < x.length; i++){
//     document.write(x[i] + ' ')
// }

// 답안
// window.onload = function(){
//     let inputString = prompt('숫자를 입력하세요').split(' ');
//     let result = inputString.reverse();

//     for(let i of result){
//         document.write(i + ' ');
//     }
// }

//배열 연습문제 2

// let n = prompt('숫자를 입력하세요.').split(' ');

// for(let i = 0; i < n.length; i++){
//     document.write(n[i] + '<br>')
// }
// for(let i = 0; i < n.length; i++){
//     document.write(n[i] + '<br>')
// }

// 답안
// window.onload = function(){
//     let inputString = prompt('숫자를 입력하세요').split(' ');

// for (let j = 0; j < 2; j++){
//     for(let i of inputString){
//         document.write(i + '<br>');
//     }
// }
// }

// 배열 연습문제 3

// let a = prompt('숫자를 입력하세요.').split(' ');
// let b = prompt('숫자를 입력하세요.');

// document.write(a[--b]);

// 답안

// window.onload = function(){
//     let inputString = prompt('숫자를 입력하세요').split(' ');
//     let num = Number(prompt('숫자를 입력하세요'));

//     let result = inputString[num - 1];
//     document.write(result + '<br>');
// }