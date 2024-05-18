document.addEventListener("DOMContentLoaded", function(e){

    hintToggle();
    showBox();
    nextShow();

    directionAnswer();
    BGMPlayer();

})

const BGMPlayer = () => {
    const bgMusic = $('#bgMusic')[0]; // jQuery 객체를 DOM 요소로 변환
    const playPauseButton = $('#playPauseButton');

    // 버튼 클릭 시 배경 음악 재생/일시 정지 기능 추가
    playPauseButton.on('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            playPauseButton.text('⏺️ Stop');
        } else {
            bgMusic.pause();
            playPauseButton.text('▶️ Play');
        }
    });
}

let index = -1; 
// let index = 8; 

//정답 확인 함수 
const resultCheck = () => {
    // console.log(index);
    if(index === 0){
        timerInterval = setInterval(updateTimer, 1000);
    }
    if(index === 4 && $('#answer1').val()!=='아래, 오른쪽, 아래, 왼쪽, 위'){
        $('.viewList > li').eq(index).find('.failBox').show();
        // 3초 뒤에 다시 숨기기
        setTimeout(function() { $('.viewList > li').eq(index).find('.failBox').hide(); }, 1000); // 3000ms = 3초
        return false;
    }else if(index === 7 && $('#answer2').val()!=='마약'){
        $('.viewList > li').eq(index).find('.failBox').show();
        // 3초 뒤에 다시 숨기기
        setTimeout(function() { $('.viewList > li').eq(index).find('.failBox').hide(); }, 1000); // 3000ms = 3초
        return false;
    }else if(index === 9 && $('#answer3').val()!=='3909'){
        $('.viewList > li').eq(index).find('.failBox').show();
        // 3초 뒤에 다시 숨기기
        setTimeout(function() { $('.viewList > li').eq(index).find('.failBox').hide(); }, 1000); // 3000ms = 3초
        return false;
    }else if(index === 12 && $('#answer4').val()!=='4385'){
        $('.viewList > li').eq(index).find('.failBox').show();
        // 3초 뒤에 다시 숨기기
        setTimeout(function() { $('.viewList > li').eq(index).find('.failBox').hide(); }, 1000); // 3000ms = 3초
        return false;
    }else if(index === 15 && $('#answer5').val()!=='HIDE'){
        $('.viewList > li').eq(index).find('.failBox').show();
        // 3초 뒤에 다시 숨기기
        setTimeout(function() { $('.viewList > li').eq(index).find('.failBox').hide(); }, 1000); // 3000ms = 3초
        return false;
    }else if(index === 20 && $('#answer6').val()!=='678'){
        $('.viewList > li').eq(index).find('.failBox').show();
        // 3초 뒤에 다시 숨기기
        setTimeout(function() { $('.viewList > li').eq(index).find('.failBox').hide(); }, 1000); // 3000ms = 3초
        return false;
    }else if(index === 21 && $('#answer7').val()!=='옷'){
        $('.viewList > li').eq(index).find('.failBox').show();
        // 3초 뒤에 다시 숨기기
        setTimeout(function() { $('.viewList > li').eq(index).find('.failBox').hide(); }, 1000); // 3000ms = 3초
        return false;
    }else if(index === 23 && $('#answer8').val()!=='문을열자'){
        $('.viewList > li').eq(index).find('.failBox').show();
        // 3초 뒤에 다시 숨기기
        setTimeout(function() { $('.viewList > li').eq(index).find('.failBox').hide(); }, 1000); // 3000ms = 3초
        return false;
    }else if(index === 26 && $('#answer9').val().toLowerCase()!=='end!'){
        $('.viewList > li').eq(index).find('.failBox').show();
        // 3초 뒤에 다시 숨기기
        setTimeout(function() { $('.viewList > li').eq(index).find('.failBox').hide(); }, 1000); // 3000ms = 3초
        return false;
    }else if(index === 26 ){
        //타이머 멈추기
        clearInterval(timerInterval);
    }
    
    //정답이 맞으면 다음페이지로 이동 
    index = index + 1;
}
//페이지 이동시 실행하는 함수 (next)
const nextShow = () => {
    resultCheck();
    //다음페이지로
    $('.viewList > li').removeClass('active');
    $('.viewList > li').eq(index).addClass('active');
}
const showBox = () => {
    //시작 버튼 클릭시 :: 40분 카운트다운 시작 🕑
    $('.thumbnailArti .startBtn').click(function(){
        nextShow();
    })
    $('.commonArti .btnBox .orangeBtn').click(function(){
        nextShow();
    })
}


const hintToggle = () => {
    $('.commonArti .hintBox .hintBtn').click(function(){
        $(this).siblings('.hintView').slideToggle();
    })
}

//방향자물쇠 정답 입력
const directionAnswer = () => {
    function updateDirectionText(buttonClass, direction) {
        $('.commonArti .directionAnswer .dirctionBtnWrap .' + buttonClass).click(function() {
            var showBox = $(this).parent('.dirctionBtnWrap').siblings('.showBox');
            var currentText = showBox.text();
            
            if (currentText.length > 0) {
                currentText += ', ';
            }
            
            currentText += direction;
            showBox.text(currentText);
            $('.viewList > li').eq(index).find('input').val(currentText);
        });
    }

    updateDirectionText('upBtn', '위');
    updateDirectionText('leftBtn', '왼쪽');
    updateDirectionText('rightBtn', '오른쪽');
    updateDirectionText('downBtn', '아래');

    // 초기화 버튼에 대한 이벤트 설정
    $('.commonArti .directionAnswer .dirctionBtnWrap .resetBtn').click(function() {
        $(this).parent('.dirctionBtnWrap').siblings('.showBox').text('');
        $('#answer1').val('');
    });
}

//[타이머]
var countdownTime = 40 * 60; // 초 단위로 변환 (타이머 시간 설정)
// 타이머 업데이트 함수
function updateTimer() {
    // 분과 초 계산
    var minutes = Math.floor(countdownTime / 60);
    var seconds = countdownTime % 60;

    // 분과 초가 한자리 숫자일 경우 앞에 0 추가
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    // 타이머 표시 업데이트
    $('#timer').text(minutes + ':' + seconds);

    // 타이머 시간이 0이면 타이머 중지
    if (countdownTime <= 0) {
        clearInterval(timerInterval);
        alert('Countdown finished!');
    } else {
        // 타이머 시간 감소
        countdownTime--;
    }

    if (countdownTime === 0) {
        clearInterval(timerInterval);
        index = 28; 
    }
}