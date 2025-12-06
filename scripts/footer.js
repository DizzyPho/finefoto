const footerTemplate = document.createElement("template")
footerTemplate.innerHTML += `<footer class="textured-dark w-full text-gray-400 p-4 lg:px-16 px-8 py-8 text-sm">
        <div class="flex md:flex-row flex-col md:gap-16 gap-8">
            <ul class="footer-list">
                <h3 class="footer-title">PAGINA'S</h3>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/pages/over.html">Over de fotograaf</a></li>
                <li><a href="/pages/galerij.html">Galerij</a></li>
                <li><a href="#">Placeholder</a></li>
                <li><a href="/pages/contact.html">Contact</a></li>
            </ul>
            <ul class="footer-list">
                <h3 class="footer-title">CREDITS</h3>
                <li>Website door Hannah DK</li>
                <li><a href="https://icons8.com/" target="_blank">Iconen door Icons8</a></li>
                <li><a href="https://tailwindcss.com" target="_blank">CSS met Tailwind</a></li>
            </ul>
        </div>
        <h6 class="block opacity-50 text-xs mt-8">This work is licensed under <a class="underline" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a></h6>
    </footer>`;

document.body.appendChild(footerTemplate.content);