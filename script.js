// ========== IMAGE CAROUSEL ==========
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg"
];

let currentIndex = 0;
const imageElement = document.getElementById("carousel-image");

function showImage(index) {
  imageElement.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Auto-scroll every 5 seconds
setInterval(nextImage, 5000);

// ========== COLLAPSIBLE GALLERY SECTIONS ==========
document.addEventListener("DOMContentLoaded", () => {
  const collapsibles = document.querySelectorAll(".collapsible-title");

  collapsibles.forEach(title => {
    title.addEventListener("click", () => {
      const targetId = title.getAttribute("data-target");
      const content = document.getElementById(targetId);

      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "flex";
      } else {
        content.style.display = "none";
      }
    });
  });
});
