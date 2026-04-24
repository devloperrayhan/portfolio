const imgContanerImg1st = document.querySelector(".img_contaner img");
const imgContanerImg2nd = document.querySelector(".img_contaner img + img");
const imgContanerImg3rd = document.querySelector(".img_contaner img + img + img");
const imgContanerImg4th = document.querySelector(".img_contaner img + img + img + img");
const imgBgColorActive = document.querySelector(".bg_color");
const centerBtn = document.querySelector(".center-btn");
const bgColor2nd = document.querySelector(".bg_color_2");
const nextBtnElement = document.querySelector(".next_btn");
const prevBtnElement = document.querySelector(".pev_btn");
const xzoomImg = document.querySelector(".xzoom");
const images = [imgContanerImg1st, imgContanerImg2nd, imgContanerImg3rd, imgContanerImg4th];

images.forEach(img => {
  img.addEventListener("mouseenter", () => {
    imgContanerImg1st.classList.add("active_img1st");
    imgContanerImg2nd.classList.add("active_img2nd");
    imgContanerImg3rd.classList.add("active_img3rd");
    imgContanerImg4th.classList.add("active_img4rd");
    imgBgColorActive.classList.add("bg_color_active");
  });
});
images.forEach(img => {
  img.addEventListener("mouseleave", () => {
    imgContanerImg1st.classList.remove("active_img1st");
    imgContanerImg2nd.classList.remove("active_img2nd");
    imgContanerImg3rd.classList.remove("active_img3rd");
    imgContanerImg4th.classList.remove("active_img4rd");
    imgBgColorActive.classList.remove("bg_color_active");
  });
});
const imgName = [
  "image/IMG-20260109-WA0014.jpg",
  "image/IMG-20260109-WA0015.jpg",
  "image/IMG-20260109-WA0016.jpg",
  "image/IMG-20260111-WA0005.jpg",
  "image/IMG-20260206-WA0015.jpg",
  "image/IMG-20260206-WA0016.jpg",
  "image/IMG-20260213-WA0001.jpg",
  "image/IMG-20260215-WA0008.jpg",
  "image/IMG-20260214-WA0008.jpg",
  "image/IMG-20260214-WA0010.jpg",
  "image/IMG-20260215-WA0001.jpg",
  "image/IMG-20260224-WA0014.jpg",
  "image/IMG-20260301-WA0023.jpg",
  "image/IMG-20260303-WA0038.jpg",
  "image/IMG-20260303-WA0039.jpg",
  "image/IMG-20260303-WA0040.jpg",
  "image/IMG-20260303-WA0041.jpg",
  "image/IMG-20260303-WA0042.jpg",
  "image/IMG-20260303-WA0043.jpg",
  "image/IMG-20260303-WA0044.jpg",
  "image/IMG-20260322-WA0000.jpg",
  "image/IMG-20260322-WA0001.jpg",
  "image/IMG-20260322-WA0002.jpg",
  "image/IMG-20260322-WA0003.jpg",
  "image/IMG-20260322-WA0004.jpg",
  "image/IMG-20260322-WA0005.jpg",
  "image/IMG-20260322-WA0007.jpg",
  "image/IMG-20260322-WA0008.jpg",
  "image/IMG-20260322-WA0009.jpg",
  "image/IMG-20260322-WA0010.jpg",
  "image/IMG-20260322-WA0011.jpg",
  "image/IMG-20260322-WA0012.jpg",
  "image/IMG-20260322-WA0013.jpg",
  "image/IMG-20260322-WA0014.jpg",
];
function changeImage() {
  const allImages = document.querySelectorAll(".photo");
  allImages.forEach(img => {
    img.style.opacity = 0;
    setTimeout(() => {
      allImages.forEach(img => {
        const randomIndex = Math.floor(Math.random() * imgName.length);
        img.src = imgName[randomIndex];
      });
    }, 500);
    setTimeout(() => {
      img.style.opacity = 1;
    }, 1 * 1000);
  });
};
centerBtn.addEventListener("mouseenter", () => {
  bgColor2nd.classList.add("bg_color_active_2");
});
centerBtn.addEventListener("mouseleave", () => {
  bgColor2nd.classList.remove("bg_color_active_2");
});

let currentIndex = 0;
function updateImage() {
  xzoomImg.src = imgName[currentIndex];
  xzoomImg.setAttribute("xoriginal", imgName[currentIndex]);
}

nextBtnElement.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= imgName.length) {
    currentIndex = 0;
  }
  updateImage();
});
prevBtnElement.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgName.length - 1;
  }
  updateImage();
});