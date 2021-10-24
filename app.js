window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const submitBtn = document.querySelector(".submit");
  const initialPos = submitBtn.offsetTop;

  function sticKyBottom() {
    if (window.scrollY - submitBtn.offsetHeight >= initialPos) {
      form.classList.add("sticky");
    } else {
      form.classList.remove("sticky");
      stickyTop();
    }
  }
  function stickyTop() {
    if (window.scrollY * 1.8 < initialPos) {
      form.classList.add("sticky");
    }
    return;
  }
  window.addEventListener("scroll", function () {
    sticKyBottom();
  });

  sticKyBottom();
});
