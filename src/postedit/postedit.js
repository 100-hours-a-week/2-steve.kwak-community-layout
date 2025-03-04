document.addEventListener("DOMContentLoaded", async function () {
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const imageInput = document.getElementById("image");
    const currentImage = document.getElementById("current-image");
    const editForm = document.querySelector(".edit-form");

    // // 기존 데이터 불러오기 (예제 데이터)
    // titleInput.value = "기존 제목";
    // contentInput.value = "기존 내용입니다.";
    // currentImage.textContent = "example.jpg";
    // 예를 들어 서버에서 데이터 가져오기 (예시)
    const postId = new URLSearchParams(window.location.search).get("id");
    try {
        const response = await fetch(`/posts/${postId}`);
        if (response.ok) {
            const post = await response.json();
            titleInput.value = post.title;
            contentInput.value = post.content;
            //currentImage.src = post.imageUrl;  // 만약 이미지 URL이 있으면 설정
        } else {
            alert("게시글을 불러오는 중 오류가 발생했습니다.");
        }
    } catch (error) {
        console.error(error);
        alert("게시글을 불러오는 중 오류가 발생했습니다.");
    }



    editForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("게시글이 수정되었습니다.");
        const postId = new URLSearchParams(window.location.search).get("id");
        window.location.href = '../postdetail/postdetail.html?id=${postId}';
    });
});
