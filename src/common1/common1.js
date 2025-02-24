document.addEventListener("DOMContentLoaded", function () {
    // 헤더 동적 로드
    fetch("../common1/header1.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            setupDropdown();
            setupBackButton(); // 뒤로가기 버튼 이벤트 처리
        });

    function setupDropdown() {
        const profileDropdown = document.querySelector(".profile-dropdown");
        const dropdownMenu = document.querySelector(".dropdown-menu");
        const dropdownItems = document.querySelectorAll(".dropdown-item");

        // 프로필 클릭 시 드롭다운 표시
        profileDropdown.addEventListener("click", () => {
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        });

        // 드롭다운 메뉴 클릭 이벤트 추가
        dropdownItems.forEach((item) => {
            item.addEventListener("click", (event) => {
                if (event.target.id === "edit-profile") {
                    window.location.href = "../editprofile/editprofile.html";
                } else if (event.target.id === "edit-password") {
                    window.location.href = "../editpassword/editpassword.html";
                } else if (event.target.classList.contains("logout")) {
                    window.location.href = "../login/login.html";
                }
            });
        });
    }

    function setupBackButton() {
        const backBtn = document.querySelector("#back-btn");
        backBtn.addEventListener("click", () => {
            window.location.href = "../posts/posts.html"; // 뒤로가기 버튼 클릭 시 경로 이동
        });
    }
});
