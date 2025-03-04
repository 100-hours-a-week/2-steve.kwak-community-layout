document.addEventListener("DOMContentLoaded", function () {
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const submitBtn = document.getElementById("submit-btn");

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

    // 게시글 제출
    submitBtn.addEventListener("click", async () => {
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();

        if (!title || !content) {
            alert("제목과 내용을 입력해주세요.");
            return;
        }
        const newpost={
            title:title,
            content:content,
            createdAt:new Date.toString(),
            likecount:0,
            commentcount:0,
            viewcount:0
        }

        try {
            const response = await fetch("/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newpost),
            });

            if (!response.ok) throw new Error("게시글 작성 실패");

            alert("게시글이 등록되었습니다.");
            window.location.href = "../posts/posts.html"; // 게시글 목록으로 이동
        } catch (error) {
            console.error(error);
            alert("게시글 작성 중 오류가 발생했습니다.");
        }
    });//나중에 백엔드에서 나머지 데이터 정해서 넘겨주는 식으로 작성 예정
});
