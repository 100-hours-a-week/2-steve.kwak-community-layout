document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("logout-btn");
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const submitBtn = document.getElementById("submit-btn");

    // 로그아웃 버튼 클릭 시 로그인 페이지로 이동
    logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        sessionStorage.removeItem("user");
        localStorage.removeItem("user");
        window.location.href = "../login/login.html";
    });

    // 제목과 내용이 입력되면 버튼 활성화
    function checkForm() {
        if (titleInput.value.trim() !== "" && contentInput.value.trim() !== "") {
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = "#7F6AEE";
        } else {
            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = "#ACA0EB";
        }
    }

    titleInput.addEventListener("input", checkForm);
    contentInput.addEventListener("input", checkForm);
});
