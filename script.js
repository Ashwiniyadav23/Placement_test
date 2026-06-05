const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;

function next() {
  index = (index + 1) % images.length;
  slider.src = images[index];
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  slider.src = images[index];
}