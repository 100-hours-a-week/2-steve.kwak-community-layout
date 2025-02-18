document.addEventListener("DOMContentLoaded", function () {
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const imageInput = document.getElementById("image");
    const currentImage = document.getElementById("current-image");
    const editForm = document.querySelector(".edit-form");

    // 기존 데이터 불러오기 (예제 데이터)
    titleInput.value = "기존 제목";
    contentInput.value = "기존 내용입니다.";
    currentImage.textContent = "example.jpg";

    editForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("게시글이 수정되었습니다.");
        window.location.href = "../postdetail/postdetail.html";
    });
});
