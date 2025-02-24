document.addEventListener("DOMContentLoaded", () => {
    const postList = document.getElementById("post-list");
    const createPostBtn = document.getElementById("create-post");
    const profileDropdown = document.querySelector(".profile-dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const editProfile = document.getElementById("edit-profile");
    const editPassword = document.getElementById("edit-password");

    // 예제 데이터
    const posts = [
        { id: 1, title: "제목 1", likes: 100, comments: 10, views: 500, author: "작성자1", date: "2024-02-17" },
        { id: 2, title: "제목 2", likes: 50, comments: 5, views: 300, author: "작성자2", date: "2024-02-16" },
    ];

    function renderPosts() {
        postList.innerHTML = "";
        posts.forEach((post) => {
            const postCard = document.createElement("div");
            postCard.classList.add("post-card");
            postCard.innerHTML = `
                <h2>${post.title}</h2>
                <p>❤️ 좋아요: ${post.likes} | 💬 댓글: ${post.comments} | 👀 조회수: ${post.views}</p>
                <p>작성자: ${post.author} | ${post.date}</p>
            `;
            postCard.addEventListener("click", () => {
                // 게시글 클릭 시 상세 페이지로 이동 (게시글 id를 URL에 포함)
                window.location.href = `../postdetail/postdetail.html?id=${post.id}`;
            });
            postList.appendChild(postCard);
        });
    }

    createPostBtn.addEventListener("click", () => {
        window.location.href = "../makepost/makepost.html";
    });

    // 프로필 드롭다운 클릭 이벤트
    profileDropdown.addEventListener("click", () => {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // 회원정보 수정 페이지 이동
    editProfile.addEventListener("click", () => {
        window.location.href = "../editprofile/editprofile.html";
    });

    // 비밀번호 수정 페이지 이동
    editPassword.addEventListener("click", () => {
        window.location.href = "../editpassword/editpassword.html";
    });

    renderPosts();
});
