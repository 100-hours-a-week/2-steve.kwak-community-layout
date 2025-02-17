document.addEventListener("DOMContentLoaded", () => {
    const postList = document.getElementById("post-list");
    const createPostBtn = document.getElementById("create-post");

    // 예제 데이터
    const posts = [
        { title: "제목 1", likes: 100, comments: 10, views: 500, author: "작성자1", date: "2024-02-17" },
        { title: "제목 2", likes: 50, comments: 5, views: 300, author: "작성자2", date: "2024-02-16" },
    ];

    function renderPosts() {
        postList.innerHTML = "";
        posts.forEach((post, index) => {
            const postCard = document.createElement("div");
            postCard.classList.add("post-card");
            postCard.innerHTML = `
                <h2>${post.title}</h2>
                <p>❤️ 좋아요: ${post.likes} | 💬 댓글: ${post.comments} | 👀 조회수: ${post.views}</p>
                <p>작성자: ${post.author} | ${post.date}</p>
            `;
            postCard.addEventListener("click", () => {
                alert(`게시글 ${index + 1} 클릭됨! (상세 페이지 이동 예정)`);
            });
            postList.appendChild(postCard);
        });
    }

    createPostBtn.addEventListener("click", () => {
        alert("게시글 작성 페이지로 이동!");
    });

    renderPosts();
});
