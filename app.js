window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const submitBtn = document.querySelector(".submit");
  const initialPos = form.offsetTop;

  function sticKyBottom() {
    if (window.scrollY - submitBtn.offsetHeight >= initialPos) {
      form.classList.add("sticky");
    } else {
      form.classList.remove("sticky");
    }
  }
  window.addEventListener("scroll", function () {
    if (window.scrollY - submitBtn.offsetHeight >= initialPos) {
      form.classList.add("sticky");
    } else {
      form.classList.remove("sticky");
    }
  });
  sticKyBottom();
});
