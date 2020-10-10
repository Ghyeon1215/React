/*let box = document.getElementById('box');
let size = 200;

let touch = {
    tstart: function(){
        box.innerHTML = '안녕하세요!';
        box.style.backgroundColor = 'gray';
    },
    tend: function(){
        box.innerHTML = '이제 꺼지세요!';
        box.style.background = 'red';
    },
    tmove: function(e){
        //console.log(e.changedTouches[0]);
        let touchobj = e.changedTouches[0];
        //console.log(touchobj.clientX);
        let x = parseInt(touchobj.clientX),
            y = parseInt(touchobj.clientY),
            ex = x - 100;
            ey = y - 200;

            box.innerHTML = '만지는 중입니다';
            this.style.background = 'yellow';
            this.style.width = ++size + 'px';
            this.style.height = ++size + 'px';

            console.log(ex+'px, ' + ey+'px');
            this.style.left = ex+'px';
            this.style.top = ey+'px';
    }

}

box.addEventListener('touchstart', touch.tstart);
box.addEventListener('touchend', touch.tend);
box.addEventListener('touchmove', touch.tmove);*/

// 마우스 오버 시 background를 red로, 아웃 시 background를 기본 상태로
/*
let heading = document.getElementById('heading');

heading.addEventListener('mouseover', function() {
    heading.style.background = 'red','4px';
});
heading.addEventListener('mouseout', function() {
    console.log('1');
    heading.style.background = 'blue','2px'; 
});*/

// 사용자가 1~9사이의 숫자 입력 후 구구단 출력
/*let num = prompt('구구단 몇 단을 볼까요?', '1~9이 숫자 입력');

// 입력 검사
if (num == '' || isNaN(num)) {
    alert('옳바른 값을 입력!');
}
else if (num < 1 || num > 10) {
    alert('1~9까지의 수만 입력 가능합니다!');
}
else {
    for (let i = 0; i < 10; i++) {
        document.write(num + 'x' + i + '=' + num*i + '<br>');
    }
}*/

/*
// num1, num2을 선언, prompt를 이용하여 숫자를 입력
let num1 = Number(prompt('첫 번째 숫자 입력', '숫자 입력!'));
let num2 = Number(prompt('두 번째 숫자 입력', '숫자 입력!'));
let sum = num1 + num2;

if (num1&&num2 == '' || isNaN(num1&&num2)) {
    alert("옳바른 값을 입력!");
}
else if (num1&&num2 < 1) {
    alert("숫자가 너무 작아용..");
}
else {
    document.write('입력1' + '+' + '입력2' + '=' + sum);
}*/

/*
// 변수 초기화
let title = document.getElementById('title');
let list = document.getElementById('list');
let li = list.getElementsByTagName('li');
let addBtn = document.getElementById('add-btn');

// 이벤트 리스너
list.addEventListener('click', activeItem);

function activeItem(event) {
    // 클릭한 노드가 li이면
    if(event.target.nodeName == 'LI') {
        title.innerHTML = event.target.innerText;
    
        // 목록 스타일 초기화
        for(let i = 0; i < event.target.parentNode.children.length; i++) {
            event.target.parentNode.children[i].removeAttribute('class');
        }
        // 클릭한 목록 스타일 지정
        event.target.setAttribute('class', 'active');
    }   // end if
}   // end function

// 목록 추가
addBtn.addEventListener('click', function() {
    let txt = prompt('제목 입력');
    list.innerHTML += '<li>' + txt + '</li>';
});*/

/*
let ul = document.getElementById('list');
let li = ul.getElementsByTagName('li');
let first_txt = li[0].innerHTML;
let last_txt = li[3].innerHTML;

li[0].innerHTML = last_txt;
li[3].innerHTML = first_txt;*/

// *js 사용*
// 변수 선언
let inp = document.forms['cal'];
let input = inp.getElementsByTagName('input');
let cls_btn = document.getElementsByClassName('cls_btn');
let result_btn = document.getElementsByClassName('result_btn')[0];

// 계산기 초기화(clear)
function clr() {
    inp['result'].value = 0;
}
// 계산기 입력 처리 함수
function calc(value) {
    // 입력이 들어가면 0을 지움
    if(inp['result'].value == 0 ) {
        inp['result'].value = '';
    }
    // 입력 값을 결과창에 출력
    inp['result'].value += value;
}

// 계산 결과 처리 함수
function my_result() {
    let result = document.forms['cal']['result'];
    let calc = eval(result.value);
    
    // 결과창에 표시
    inp['result'].value = calc;
}

// 이벤트 핸들러
// ------------
// 숫자 및 사직 연산 버튼
for (let i = 0; i < input.length; i++) {
    // 숫자와 사칙 연산자만 입력 처리
    if (input[i].value != '=' && input[i].vlaue != 'clear') {
        input[i].onclick = function() {
            calc(this.value);
        }
    } // end if
} // end for

//초기화 버튼
cls_btn.onclick = function() {
    clr();
}

// 결과 버튼
result_btn.onclick = function() {
    try {
        my_result();
    }
    catch(err) {
        let result = inp['result'];
        result.value = '입력 오류';
    }
}

/* // *jquery 사용*
// 변수 선언
let $inp = $('form[name=cal]'); // form 객체
let $input = $inp.find('input');
let $cls_btn = $('.cls_btn'); // 초기화 버튼
let $result_btn = $('.result_btn'); // 결과 버튼
let $result = $inp.find('input[name=result]'); // 결과창

// 계산기 초기화(clear)
function clr() {
    $result.val(0);
}

// 계산기 입력 처리 함수
function calc(value) {
    // 입력이 들어가면 0을 지움
    if($result.val() == 0) {
        $result.val('');
    }
    
    // 입력 값을 결과창에 출력
    let val = $result.val() + value;
    $result.val(val);
}

// 계산 결과 처리 함수
function my_result() {
    let calc = eval($result.val());
    
    // 결과창에 표시
    $result.val(calc);
}

let $input = $('#name'); // #name 객체 지정
let r = $input.val(); // 읽기
document.write(r + '<br>'); // hello

$input.val('write'); // 쓰기
r = $input.val();
document.write(r); // write

// 이벤트 핸들러
// ------------
// 숫자 및 사직 연산 버튼
$('input').click(function(){
    let $input_value = $(this).val();
    
    // 숫자와 사칙 연산자만 입력 처리
    if($input_value != '=' && $input_value != 'clear') {
        calc($input_value);
    }
});
    
//초기화 버튼
$('.cls_btn').click(function() {
    clr();
});

// 결과 버튼
$('.result_btn').click(function() {
    try {
        my_result();
    }
    catch(err) {
        $result.val('입력 오류');
    }
}); */