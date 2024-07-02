let numberToGuess;
let attempts = 0;

function startGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "1에서 100 사이의 숫자를 입력하세요.";
}

function checkGuess() {
    let userGuessStr = document.getElementById("userGuess").value.trim(); // 공백 제거
    let userGuess = parseInt(userGuessStr); // 입력값 정수로 변환

    // 유효성 검사: 숫자 여부 및 범위 확인
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        alert("1에서 100 사이의 숫자를 입력하세요.");
        return;
    }

    attempts++; // 시도 횟수 증가

    // 사용자 입력값과 정답 비교
    if (userGuess < numberToGuess) {
        document.getElementById("message").textContent = "너무 작습니다. 다시 시도하세요.";
    } else if (userGuess > numberToGuess) {
        document.getElementById("message").textContent = "너무 큽니다. 다시 시도하세요.";
    } else {
        document.getElementById("message").textContent = `축하합니다! ${attempts}번째 시도에 맞추셨습니다!`;
        showFireworks(); // 폭죽 애니메이션 표시
        setTimeout(startGame, 3000); // 3초 후에 게임 재시작
    }

    document.getElementById("userGuess").value = ""; // 입력창 초기화
}

// 엔터 키 이벤트 처리
document.getElementById("userGuess").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // 기본 동작 방지
        checkGuess(); // 숫자 확인 함수 호출
    }
});
   
// 폭죽 애니메이션 함수
function showFireworks() {
    const fireworksContainer = document.getElementById("fireworks-container");

    // 폭죽 요소 생성 및 추가
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement("div");
        firework.className = "firework";
        firework.style.left = `${Math.random() * 100}%`; // 랜덤 위치
        firework.style.top = `${Math.random() * 100}%`; // 랜덤 위치
        fireworksContainer.appendChild(firework);
    }

    // 일정 시간 후 폭죽 삭제
    setTimeout(() => {
        fireworksContainer.innerHTML = "";
    }, 2000); // 2초 후에 폭죽 삭제
}

startGame(); // 페이지 로드 시 게임 시작
