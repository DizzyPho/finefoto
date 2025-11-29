function nav_bar_toggle(event) {
    let nav = document.getElementById("nav");
    nav.classList.toggle("hidden");
}

let menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", nav_bar_toggle);