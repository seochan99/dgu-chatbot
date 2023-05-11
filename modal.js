// Floating action button 클릭 시 모달 창 표시 및 버튼 숨김
document
    .getElementById("floating-button")
    .addEventListener("click", function () {
        document.getElementById("modal").style.display = "block";
        document.getElementById("floating-button").style.display = "none";
        document.getElementById("modal-iframe").src =
            "https://pf.kakao.com/_FmExbT";
    });

// 모달 창 닫기 버튼 클릭 시 모달 창 닫기
document.getElementById("close-button").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal-iframe").src = ""; // 모달 닫을 때 iframe의 src 초기화
    document.getElementById("floating-button").style.display = "block";
});

// 모달 창 외부 클릭 시 모달 창 닫기
document.addEventListener("click", function (event) {
    if (
        !event.target.closest("#modal") &&
        !event.target.closest("#floating-button")
    ) {
        document.getElementById("modal").style.display = "none";
        document.getElementById("modal-iframe").src = ""; // 모달 닫을 때 iframe의 src 초기화
        document.getElementById("floating-button").style.display = "block";
    }
});

// 모달 창 내부 클릭 시 이벤트 전파 중단
document
    .getElementById("modal-iframe")
    .addEventListener("click", function (event) {
        event.stopPropagation();
    });
