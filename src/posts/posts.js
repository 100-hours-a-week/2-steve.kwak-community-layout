document.addEventListener("DOMContentLoaded", async () => {
    await fetchPosts();
});

// 게시글 목록 가져오기
async function fetchPosts() {
    try {
        const response = await fetch("/posts");
        if (!response.ok) throw new Error("게시글을 불러올 수 없습니다.");

        const posts = await response.json();
        renderPosts(posts);
    } catch (error) {
        console.error(error);
        alert("게시글을 불러오는 중 오류가 발생했습니다.");
    }
}

// 게시글 렌더링
function renderPosts(posts) {
    const postList = document.getElementById("post-list");
    postList.innerHTML = "";

    posts.forEach(post => {
        const postItem = document.createElement("div");
        postItem.classList.add("post-item");
        postItem.innerHTML = `
            <h3 class="post-title">${post.title}</h3>
            <p class="post-author">${post.author}</p>
            <p class="post-date">${new Date(post.created_at).toLocaleString()}</p>
            <p class="post-likes">👍 ${post.likes} 좋아요</p>
            <p class="post-comments">💬 ${post.comments.length} 댓글</p>
        `;

        postItem.addEventListener("click", () => {
            window.location.href = `../postDetail/postDetail.html?id=${post.id}`;
        });

        postList.appendChild(postItem);
    });
}

// 게시글 작성 페이지 이동
document.getElementById("create-post").addEventListener("click", () => {
    window.location.href = "../makepost/makepost.html";
});
