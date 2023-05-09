// Đây là file JS của trang chi tiết sản phẩm

const allHoverImages = document.querySelectorAll(".hover-container div img");
const imgContainer = document.querySelector(".img-container");
const list = document.getElementById("list");
const reviewsList = document.querySelector(".reviews-list");
const btnDescription = document.querySelector(".btn-show-description");
const btnReviews = document.querySelector(".btn-show-reviews");
//mảng chứa thông tin sản phẩm
const desProduct = [
  "Đồ Ăn Chó SmartHeart Gold Dành Cho Chó Con Và Chó Mang Thai (1Kg) cung cấp Prebiotics trong sữa của chó mẹ giúp tăng cường hệ miễn dịch và sức khỏe toàn diện.",
  "Cân bằng mức độ can-xi & photpho giúp xương & răng chắc khỏe.",
  "DHA từ dầu cá giúp tăng cường phát triển chức năng não bộ & hệ thần kinh.",
  "Bột củ cải đường cung cấp chất xơ lên men tự nhiên tăng cường sức khỏe đường ruột.",
  "Bột củ cải đường cung cấp chất xơ lên men tự nhiên tăng cường sức khỏe đường ruột.",
  "Hỗ trợ các hoạt động thường ngày & phát triển nhanh chóng.",
  "Cân bằng Omega 3 & 6 từ hạt lanh giúp làn da khỏe mạnh.",
  "Cây sương giá (yucca) giúp giảm mùi hôi của phân.",
  "Chất chống oxy hóa tự nhiên, dinh dưỡng cân bằng & hoàn chỉnh.",
];
//mảng chứa thông tin đánh giá sản phẩm
const reviewsProduct = [
  "Sản phẩm này tuyệt vời quá",
  "Chó nhà mình rất thích ăn sản phẩm này",
  "Mình đã mua sản phẩm này cho chó nhà mình và chó nhà mình rất thích ăn sản phẩm này",
];

//truyền dữ liệu từ mảng desProduct chứa thông tin sản phẩm vào thẻ li
for (let i = 0; i < desProduct.length; i++) {
  const li = document.createElement("li");
  li.textContent = desProduct[i];
  list.appendChild(li);
}
// truyền dữ liệu từ mảng reviewsProduct chứa thông tin đánh giá sản phẩm vào thẻ li
for (let i = 0; i < reviewsProduct.length; i++) {
  const li = document.createElement("li");
  li.textContent = reviewsProduct[i];
  reviewsList.appendChild(li);
}

//hiển thị thông tin sản phẩm
function showDescription() {
  document.getElementById("description").style.display = "block";
  btnDescription.classList.add("active_btn");
  document.getElementById("reviews").style.display = "none";
  btnReviews.classList.remove("active_btn");
}

//hiển thị thông tin đánh giá sản phẩm
function showReviews() {
  btnReviews.classList.add("active_btn");
  document.getElementById("description").style.display = "none";
  btnDescription.classList.remove("active_btn");
  document.getElementById("reviews").style.display = "block";
}
//hiển thị thông tin sản phẩm khi load trang
window.addEventListener("DOMContentLoaded", () => {
  allHoverImages[0].parentElement.classList.add("active");
});
//hiển thị ảnh khi hover vào ảnh nhỏ
allHoverImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    imgContainer.querySelector("img").src = image.src;
    resetActiveImg();
    image.parentElement.classList.add("active");
  });
});
//reset lại ảnh khi hover ra khỏi ảnh nhỏ
function resetActiveImg() {
  allHoverImages.forEach((img) => {
    img.parentElement.classList.remove("active");
  });
}
