function nav_bar_toggle(event) {
    let nav = document.getElementById("nav");
    //nav.classList.toggle("hidden");

    nav.classList.toggle("lg:translate-x-0")
    nav.classList.toggle("translate-y-0")

}

let menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", nav_bar_toggle);