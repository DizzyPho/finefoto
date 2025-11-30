function navBarToggle(event) {
    let nav = document.getElementById("nav");

    nav.classList.toggle("lg:translate-x-0")
    nav.classList.toggle("translate-y-0")

}

let menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", navBarToggle);