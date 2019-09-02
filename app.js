const overlay = document.querySelectorAll(".overlay");

overlay.forEach(item => {
  item.addEventListener("click", () => {
    item.style.opacity = "1";
    console.log("barry");
  });
});
