const template = document.createElement("template")
template.innerHTML += `<header class="fixed flex items-center w-full z-50 shadow-md py-4 px-4 textured justify-between h-14">
        <button id="menuBtn"><img src="/images/ui/menu.png" alt="Menu icon"></button>
        <a>fine.foto</a>
        <a href="https://www.instagram.com/fine.foto_byfien/" target="_blank"><img src="/images/ui/instagram.png" alt="Instagram icon"></a>
    </header>
    <nav class="fixed z-40 lg:w-72 lg:h-full h-56-25 w-full textured opacity-90 shadow-md my-14
    lg:-translate-x-full -translate-y-full lg:translate-y-0 transition-all duration-300" id="nav">
        <ul class="flex flex-col w-full">
            <li><a class="nav-link" href="/index.html">Home</a></li>
            <li><a class="nav-link" href="/pages/over.html">Over de fotograaf</a></li>
            <li><a class="nav-link" href="/pages/galerij.html">Galerij</a></li>
            <li><a class="nav-link" href="#">Placeholder</a></li>
            <li><a class="nav-link" href="/pages/contact.html">Contact</a></li>
        </ul>
    </nav>`;

document.body.appendChild(template.content);