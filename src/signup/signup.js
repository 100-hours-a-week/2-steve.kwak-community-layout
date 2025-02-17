document.addEventListener("DOMContentLoaded", function () {
    // 뒤로 가기 버튼 클릭 시 로그인 페이지로 이동
    document.getElementById("backBtn").addEventListener("click", function () {
        window.location.href = "../login/login.html";
    });

    // 프로필 이미지 미리보기 기능
    document.getElementById("profilePic").addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("profilePreview").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // 회원가입 폼 제출 이벤트
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const nickname = document.getElementById("nickname").value;

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        // 회원가입 성공 처리 (여기서는 콘솔 출력)
        console.log("회원가입 성공:", { email, password, nickname });

        // 로그인 페이지로 이동
        window.location.href = "../login/login.html";
    });
});
