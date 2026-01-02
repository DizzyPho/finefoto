function getImage(url) {
    const img = document.createElement("img")
    img.src = url
    img.classList.add("gallery-img")
    return img
}

function getImagesPerCategory(category, length) {
    let images = []
    categoryUrl = `/images/gallery/${category}/`;
    for(let i = 0; i < length; i ++) {
        url = categoryUrl + `${category}${i+1}.jpg`
        images[i] = getImage(url)
    }
    return images;
}

function getAllImages() {
    let images;
    
    images = getImagesPerCategory("architectuur", 12);
    images = images.concat(getImagesPerCategory("food", 8));
    images = images.concat(getImagesPerCategory("huwelijk", 14));
    images = images.concat(getImagesPerCategory("portret", 16));
    images = images.concat(getImagesPerCategory("zwangerschap", 4));
    return images;
}

function fillGallery() {
    const images = getAllImages();
    const gallery = document.getElementById("gallery");

    for (const img of images) {    
        gallery.appendChild(img);
    }
}

fillGallery();