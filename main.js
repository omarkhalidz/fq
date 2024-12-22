let lines = document.querySelectorAll(".line");
let icons = document.querySelectorAll(".icon");

lines.forEach((line, index) => {
  line.addEventListener("click", () => {
    let paragraph = line.querySelector("p");
    paragraph.classList.toggle("active");
    if (paragraph.classList.contains("active")) {
      icons[index].src = "images/icon-minus.svg";
    } else {
      icons[index].src = "images/icon-plus.svg";
    }
  });
});
