const picturesPerCategory = {
    "architectuur" : 12,
    "food": 8,
    "huwelijk" : 14,
    "portret" : 16,
    "zwangerschap" : 4
}

function getImage(url) {
    const img = document.createElement("img")
    img.src = url
    img.classList.add("gallery-img")
    return img
}

function getImagesPerCategory(category) {
    let images = []
    let length = picturesPerCategory[category]
    categoryUrl = `/images/gallery/${category}/`;
    for(let i = 0; i < length; i ++) {
        url = categoryUrl + `${category}${i+1}.jpg`
        images[i] = getImage(url)
    }
    return images;
}

function getAllImages() {
    let images;
    
    images = getImagesPerCategory("architectuur");
    images = images.concat(getImagesPerCategory("food"));
    images = images.concat(getImagesPerCategory("huwelijk"));
    images = images.concat(getImagesPerCategory("portret"));
    images = images.concat(getImagesPerCategory("zwangerschap"));
    return images;
}

function fillGallery(images) {
    
    const gallery = document.getElementById("gallery");

    for (const img of images) {    
        gallery.appendChild(img);
    }
    addEnlargeFunctionaltiy();
}

function applyFilter(event) {
    const value = event.target.value
    const gallery = document.getElementById("gallery")
    gallery.innerHTML = "";
    let images;
    if(value == "none") {
        images = getAllImages()
    } else {
        images = getImagesPerCategory(value)
    }
    fillGallery(images)
}

function addEnlargeFunctionaltiy() {
    let galleryImages = document.getElementsByClassName("gallery-img")
    for(image of galleryImages) {
        image.addEventListener("click",openOverlay);
    }
}

function closeOverlay(event) {
    const overlay = document.getElementById("overlay");
    overlay.remove();
}
function openOverlay(event) {
    const overlay = document.createElement("div");
    overlay.id = "overlay"
    overlay.addEventListener("click",closeOverlay);

    const x = document.createElement("button");
    x.id = "x";
    x.innerHTML=`<img src="/images/ui/x.png" alt="x">`

    const enlargedImg = document.createElement("img")
    enlargedImg.style = "max-height:70vh;"
    enlargedImg.src = event.target.src
    
    overlay.appendChild(x);
    overlay.appendChild(enlargedImg);
    document.body.appendChild(overlay)

}

const images = getAllImages();
fillGallery(images);

const selection = document.getElementById("gallery-filter")
selection.addEventListener("change", applyFilter)