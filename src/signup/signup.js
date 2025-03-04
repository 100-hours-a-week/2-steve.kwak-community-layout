document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("backBtn").addEventListener("click", function () {
        window.location.href = "../login/login.html";
    });

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

    document.getElementById("signupForm").addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const nickname = document.getElementById("nickname").value;
        const profileImage = document.getElementById("profilePreview").src;

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        const response = await fetch("/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, nickname, profile_image: profileImage })
        });

        const data = await response.json();

        if (response.status === 201) {
            alert("회원가입 성공!");
            window.location.href = "../login/login.html";
        } else {
            alert(data.message || "회원가입 실패");
        }
    });
});