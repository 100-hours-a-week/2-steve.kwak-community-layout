document.addEventListener("DOMContentLoaded", () => {
    const deleteBtn = document.querySelector(".delete-btn");
    const commentDeleteBtns = document.querySelectorAll(".delete-comment");
    const modal = document.querySelector(".modal");
    const modalText = modal.querySelector("p"); // 모달 내 메시지 요소
    const modalCancel = document.querySelector(".modal-cancel");
    const modalConfirm = document.querySelector(".modal-confirm");

    let deleteTarget = null; // 삭제할 요소 저장 변수

    // 게시글 삭제 버튼 클릭 시 모달 표시
    deleteBtn.addEventListener("click", () => {
        deleteTarget = "post"; // 게시글 삭제 모드
        modalText.innerHTML = "게시글을 삭제하시겠습니까?<br><small>삭제한 내용은 복구할 수 없습니다.</small>";
        modal.classList.remove("hidden");
    });

    // 댓글 삭제 버튼 클릭 시 모달 표시
    commentDeleteBtns.forEach(btn => {
        btn.addEventListener("click", (event) => {
            deleteTarget = event.target.closest(".comment"); // 삭제할 댓글 저장
            modalText.innerHTML = "댓글을 삭제하시겠습니까?<br><small>삭제한 내용은 복구할 수 없습니다.</small>";
            modal.classList.remove("hidden");
        });
    });

    // 모달 취소 버튼 클릭 시 숨기기
    modalCancel.addEventListener("click", () => {
        modal.classList.add("hidden");
        deleteTarget = null;
    });

    // 모달 확인 버튼 클릭 시 삭제 처리
    modalConfirm.addEventListener("click", () => {
        if (deleteTarget === "post") {
            alert("게시글이 삭제되었습니다.");
            // 게시글 삭제 로직 추가
        } else if (deleteTarget) {
            deleteTarget.remove();
            alert("댓글이 삭제되었습니다.");
        }

        modal.classList.add("hidden");
        deleteTarget = null;
    });
});
