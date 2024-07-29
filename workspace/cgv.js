// 1. 버튼 이벤트
const upBtn = document.getElementById("up");
const appearBtn = document.getElementById("scroll-book");

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 100) { 
    appearBtn.style.display = "flex"; // 버튼을 표시
  } else {
    appearBtn.style.display = "none"; // 버튼을 숨김
  }
});

upBtn.addEventListener("click", () => {
  window.scrollTo(0, 0); 
});


// 2. 슬라이드
const swiper = new Swiper(".swiper", {
  direction: "horizontal", // 슬라이더 방향
  loop: true, // 무한 루프

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 5, // 한 화면에 5개의 슬라이드 표시
  slidesPerGroup: 5, // 한 번에 5개 슬라이드 넘기기
  spaceBetween: 30, // 슬라이드 간의 간격
});

// 3. hover 이벤트
const context1 = document.getElementById("list1");
const context2 = document.getElementById("list2");
const context3 = document.getElementById("list3");
const context4 = document.getElementById("list4");

const img1 = document.getElementById("sp-img1");
const img2 = document.getElementById("sp-img2");
const img3 = document.getElementById("sp-img3");
const img4 = document.getElementById("sp-img4");

const showImage = (image) => {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "none";
  image.style.display = "block";
};

context1.addEventListener("mouseover", () => showImage(img1));
context2.addEventListener("mouseover", () => showImage(img2));
context3.addEventListener("mouseover", () => showImage(img3));
context4.addEventListener("mouseover", () => showImage(img4));

context1.addEventListener("mouseout", () => showImage(img1));
context2.addEventListener("mouseout", () => showImage(img1));
context3.addEventListener("mouseout", () => showImage(img1));
context4.addEventListener("mouseout", () => showImage(img1));

// 4. 배너 
const upBanner = document.getElementById("scroll-banner");

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 100) { 
    upBanner.style.display = "block"; 
  } else {
    upBanner.style.display = "none"; 
  }
});

