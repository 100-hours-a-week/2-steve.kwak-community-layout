document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const passwordConfirmInput = document.getElementById("password-confirm");
    const submitBtn = document.getElementById("submit-btn");
    const profileDropdown = document.querySelector(".profile-dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    function validatePasswords() {
        const password = passwordInput.value;
        const confirmPassword = passwordConfirmInput.value;
        const passwordError = document.getElementById("password-error");
        const confirmPasswordError = document.getElementById("password-confirm-error");

        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        let isValid = true;

        if (password.length < 8 || password.length > 20 || !/[A-Z]/.test(password) ||
            !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[\W_]/.test(password)) {
            passwordError.textContent = "비밀번호는 8~20자이며, 대문자/소문자/숫자/특수문자를 포함해야 합니다.";
            isValid = false;
        }

        if (confirmPassword !== password) {
            confirmPasswordError.textContent = "비밀번호가 일치하지 않습니다.";
            isValid = false;
        }

        submitBtn.disabled = !isValid;
    }

    passwordInput.addEventListener("input", validatePasswords);
    passwordConfirmInput.addEventListener("input", validatePasswords);

    document.getElementById("password-form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("비밀번호가 성공적으로 변경되었습니다.");
    });

    // 🔹 프로필 클릭 시 드롭다운 표시
    profileDropdown.addEventListener("click", () => {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // 🔹 드롭다운 메뉴 클릭 이벤트 추가
    dropdownItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            if (event.target.textContent === "회원정보 수정") {
                window.location.href = "../editprofile/editprofile.html";
            } else if (event.target.textContent === "비밀번호 수정") {
                window.location.href = "../editpassword/editpassword.html";
            }
        });
    });
});
