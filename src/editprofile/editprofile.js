document.addEventListener("DOMContentLoaded", () => {
    const profileDropdown = document.querySelector(".profile-dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const updateBtn = document.querySelector(".update-btn");
    const deleteBtn = document.querySelector(".delete-btn");
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".close-btn");
    const nicknameInput = document.querySelector("#nickname");
    const helperText = document.querySelector(".helper-text");

    // 프로필 클릭 시 드롭다운 표시
    profileDropdown.addEventListener("click", () => {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // 닉네임 검증
    nicknameInput.addEventListener("input", () => {
        if (nicknameInput.value.length > 10) {
            helperText.textContent = "*닉네임은 최대 10자까지 가능합니다.";
            helperText.style.color = "red";
        } else {
            helperText.textContent = "";
        }
    });

    // 수정하기 버튼 클릭 시
    updateBtn.addEventListener("click", () => {
        if (nicknameInput.value.trim() === "") {
            helperText.textContent = "*닉네임을 입력해주세요.";
            helperText.style.color = "red";
        } else {
            modal.classList.remove("hidden");
        }
    });

    // 모달 닫기 버튼
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // 회원 탈퇴 버튼 클릭 시
    deleteBtn.addEventListener("click", () => {
        const confirmDelete = confirm("정말로 회원 탈퇴를 진행하시겠습니까?");
        if (confirmDelete) {
            alert("회원 탈퇴가 완료되었습니다.");
            window.location.href = "login.html"; // 로그인 페이지로 이동
        }
    });
});
