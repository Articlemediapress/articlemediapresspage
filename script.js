document.addEventListener("DOMContentLoaded", () => {
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptButton = document.getElementById("accept-cookies");

    if (!localStorage.getItem("cookiesAccepted")) {
        cookiePopup.style.display = "flex";
    }

    acceptButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookiePopup.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("login-modal");
    const postCommentBtn = document.getElementById("post-comment");
    const closeModalBtn = document.getElementById("close-modal");

    postCommentBtn.addEventListener("click", () => {
        modal.style.display = "flex"; // Show the modal when trying to post
        document.body.classList.add("modal-open");
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none"; // Hide modal when clicking "OK"
        document.body.classList.remove("modal-open");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const errorBar = document.getElementById("error-bar");
    const authButtons = document.querySelectorAll(".auth-btn");

    authButtons.forEach(button => {
        button.addEventListener("click", () => {
            errorBar.style.top = "-50px"; // Reset position
            errorBar.style.opacity = "0"; // Ensure it's hidden before animation starts

            setTimeout(() => {
                errorBar.style.top = "0"; // Slide down
                errorBar.style.opacity = "1"; // Make it fully visible

                // Hide error after 3 more seconds
                setTimeout(() => {
                    errorBar.style.top = "-50px"; // Slide back up
                    errorBar.style.opacity = "0"; // Hide it again
                }, 3000);
            }, 3000);
        });
    });
});





