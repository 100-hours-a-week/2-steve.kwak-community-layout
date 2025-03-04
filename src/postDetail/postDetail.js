document.addEventListener("DOMContentLoaded", async () => {
    const postId = new URLSearchParams(window.location.search).get("id");
    if (!postId) {
        alert("잘못된 접근입니다.");
        window.location.href = "../posts/posts.html";
        return;
    }

    try {
        const response = await fetch(`/posts/${postId}`);
        if (!response.ok) throw new Error("게시글을 불러오지 못했습니다.");

        const post = await response.json();
        document.querySelector(".post-title").textContent = post.title;
        document.querySelector(".post-author").textContent = post.author;
        document.querySelector(".post-date").textContent = new Date(post.created_at).toLocaleString();
        document.querySelector(".post-content").textContent = post.content;
        document.querySelector(".like-btn").innerHTML = `👍 ${post.likes}`;
        document.querySelector(".view-count").textContent = `조회수 ${post.views}`;
        document.querySelector(".comment-count").textContent = `댓글 ${post.comments.length}`;

        renderComments(post.comments);
    } catch (error) {
        console.error(error);
        alert("게시글을 불러오는 중 오류가 발생했습니다.");
    }
});

// 게시글 수정 버튼 클릭 시 postedit.html로 이동 (post_id 포함)
document.querySelector(".edit-btn").addEventListener("click", () => {
    const postId = new URLSearchParams(window.location.search).get("id");
    window.location.href = `../postedit/postedit.html?id=${postId}`;
});

// 좋아요 버튼 클릭 이벤트
document.querySelector(".like-btn").addEventListener("click", async () => {
    const postId = new URLSearchParams(window.location.search).get("id");

    try {
        const response = await fetch(`/posts/${postId}/like`, { method: "PATCH" });
        if (!response.ok) throw new Error("좋아요 요청 실패");// 추후 구현 해야함
        const updatedPost = await response.json();
        document.querySelector(".like-btn").innerHTML = `👍 ${updatedPost.likes}`;
    } catch (error) {
        console.error(error);
        alert("좋아요를 반영하지 못했습니다.");
    }
});

// 게시글 삭제
document.querySelector(".delete-btn").addEventListener("click", async () => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    const postId = new URLSearchParams(window.location.search).get("id");

    try {
        const response = await fetch(`/posts/${postId}`, { method: "DELETE" });
        if (!response.ok) throw new Error("삭제 실패");

        alert("게시글이 삭제되었습니다.");
        window.location.href = "../posts/posts.html";
    } catch (error) {
        console.error(error);
        alert("게시글 삭제에 실패했습니다.");
    }
});

// 댓글 렌더링
function renderComments(comments) {
    const commentList = document.querySelector(".comment-list");
    commentList.innerHTML = "";

    comments.forEach(comment => {
        const commentItem = document.createElement("li");
        commentItem.classList.add("comment");
        commentItem.innerHTML = `
            <p class="comment-author">${comment.author}</p>
            <p class="comment-content">${comment.content}</p>
            <div class="comment-actions">
                <button class="edit-comment" data-id="${comment.id}">수정</button>
                <button class="delete-comment" data-id="${comment.id}">삭제</button>
            </div>
        `;

        commentItem.querySelector(".delete-comment").addEventListener("click", () => deleteComment(comment.id));
        commentList.appendChild(commentItem);
    });
}

// 댓글 등록
document.querySelector(".comment-submit").addEventListener("click", async () => {
    const postId = new URLSearchParams(window.location.search).get("id");
    const commentInput = document.querySelector(".comment-input");
    const content = commentInput.value.trim();

    if (!content) {
        alert("댓글을 입력하세요.");
        return;
    }

    try {
        const response = await fetch(`/posts/${postId}/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content }),
        });

        if (!response.ok) throw new Error("댓글 작성 실패");

        const newComment = await response.json();
        commentInput.value = "";
        renderComments(newComment.comments);
    } catch (error) {
        console.error(error);
        alert("댓글 작성에 실패했습니다.");
    }
});

// 댓글 삭제
async function deleteComment(commentId) {
    if (!confirm("댓글을 삭제하시겠습니까?")) return;

    try {
        const response = await fetch(`/comments/${commentId}`, { method: "DELETE" });
        if (!response.ok) throw new Error("댓글 삭제 실패");

        alert("댓글이 삭제되었습니다.");
        location.reload();
    } catch (error) {
        console.error(error);
        alert("댓글 삭제에 실패했습니다.");
    }
}
