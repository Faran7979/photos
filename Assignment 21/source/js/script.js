let sliderImgElem = document.querySelector("img");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let imgSrcArray = ["image/1.jpg", "image/2.png", "image/3.jpg"];
let imgIndex = 0;

function prevImage() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = imgSrcArray.length - 1;
  }
  sliderImgElem.setAttribute("src", imgSrcArray[imgIndex]);
}
function nextImage() {
  imgIndex++;
  if (imgIndex > imgSrcArray.length - 1) {
    imgIndex = 0;
  }
  sliderImgElem.setAttribute("src", imgSrcArray[imgIndex]);
}
setInterval(nextImage, 3000);

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
