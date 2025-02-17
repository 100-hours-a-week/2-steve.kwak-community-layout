document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-btn");
    const signupButton = document.getElementById("signup-btn");

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[\W_]/.test(password);
    }

    function validateInputs() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let isValid = true;

        if (!validateEmail(email)) {
            emailError.textContent = "올바른 이메일 주소를 입력하세요.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        if (!validatePassword(password)) {
            passwordError.textContent = "비밀번호는 8자 이상, 대소문자/숫자/특수문자를 포함해야 합니다.";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        loginButton.disabled = !isValid;
        loginButton.style.backgroundColor = isValid ? "#7F6AEE" : "#ACA0EB";
    }

    emailInput.addEventListener("input", validateInputs);
    passwordInput.addEventListener("input", validateInputs);

    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();
        if (!loginButton.disabled) {
            alert("로그인 성공!");
            window.location.href = "board.html"; // 게시글 목록 페이지로 이동 (추후 추가)
        }
    });

    signupButton.addEventListener("click", function () {
        window.location.href = "signup.html"; // 회원가입 페이지로 이동 (추후 추가)
    });
});
