const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqjm91hDHzndj9n2L7GDe2w1prOq_G8Vz1A&s",
    text: "Image 1"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqjm91hDHzndj9n2L7GDe2w1prOq_G8Vz1A&s",
    text: "Image 2"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqjm91hDHzndj9n2L7GDe2w1prOq_G8Vz1A&s",
    text: "Image 3"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqjm91hDHzndj9n2L7GDe2w1prOq_G8Vz1A&s",
    text: "Image 4"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqjm91hDHzndj9n2L7GDe2w1prOq_G8Vz1A&s",
    text: "Image 5"
  }
];

const slider = document.getElementById("slider");
const caption = document.getElementById("text");
const dots = document.querySelectorAll(".dot");

let current = 0;

function update() {
    slider.src = images[current].src;
    caption.textContent = images[current].text;

    dots.forEach((d, i) => d.classList.toggle("active", i === current));
}

function next() {
    current = (current + 1) % images.length;
    update();
}

function prev() {
    current = (current - 1 + images.length) % images.length;
    update();
}

update();
