// Floating action button 클릭 시 모달 창 표시 및 버튼 숨김
document
    .getElementById("floating-button")
    .addEventListener("click", function () {
        openModal();
    });

// 모달 창 닫기 버튼 클릭 시 모달 창 닫기
document.getElementById("close-button").addEventListener("click", function () {
    closeModal();
});

// 모달 창 외부 클릭 시 모달 창 닫기
document.addEventListener("click", function (event) {
    if (
        !event.target.closest("#modal") &&
        !event.target.closest("#floating-button")
    ) {
        closeModal();
    }
});

// 모달 창 내부 클릭 시 이벤트 전파 중단
document
    .getElementById("modal-iframe")
    .addEventListener("click", function (event) {
        event.stopPropagation();
    });

function openModal() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const modalURL = "https://pf.kakao.com/_FmExbT";

    if (isMobile) {
        window.open(modalURL, "_blank");
    } else {
        // 모달 창의 iframe 로딩이 완료된 후에 로딩 화면을 숨김
        document.getElementById("modal-iframe");

        document.getElementById("modal").style.display = "block";
        document.getElementById("floating-button").style.display = "none";
        document.getElementById("modal-iframe").src = modalURL;
    }
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal-iframe").src = "";
    document.getElementById("floating-button").style.display = "block";
}
