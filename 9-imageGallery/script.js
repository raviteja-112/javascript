let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");
let imageGallery = document.getElementById("imageGallery");

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}

async function loadRandomImages() {
  for (let i = 0; i < 15; i++) { 
    const img = document.createElement("img");
    const imageUrl = `https://picsum.photos/400/500?random=${Math.random()}`; 
    img.src = imageUrl;
    img.alt = `Random Image ${i + 1}`;
    img.addEventListener("click", (event) => {
      openModal(event.target.src);
    });
    imageGallery.appendChild(img);
  }
}

document.addEventListener("DOMContentLoaded", loadRandomImages);
