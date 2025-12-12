let galleryImages = document.getElementsByClassName("gallery-img")

for(image of galleryImages) {
    image.addEventListener("click",openOverlay);
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

    overlay.appendChild(x);
    document.body.appendChild(overlay)
}
