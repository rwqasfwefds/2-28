// 텍스트 영역
let textarea = document.querySelector('.textarea');

// 입력 중인 문자 수
let string_num = document.querySelector('.string_num');

// 텍스트를 입력 할 때마다 keyup 이벤트를 실행
textarea.addEventListener('keyup',onKeyup);

function onKeyup(){
    const inputText = textarea.value;
    string_num.innerHTML = inputText.length;
}