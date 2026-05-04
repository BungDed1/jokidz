// assets/js/navbar.js
document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="/index.html">
                    <img src="/assets/images/logo/logo.png" alt="JO.KIDS" height="42">
                    <div class="ms-2">
                        <span class="text-pink-600">JO.</span>
                        <span class="text-purple-600">KIDS</span>
                    </div>
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item"><a class="nav-link" href="/index.html">Beranda</a></li>
                        <li class="nav-item"><a class="nav-link" href="/pages/about/index.html">Tentang Kami</a></li>
                        <li class="nav-item"><a class="nav-link" href="/pages/programs/index.html">Program</a></li>
                        <li class="nav-item"><a class="nav-link" href="/pages/gallery/index.html">Galeri</a></li>
                        <li class="nav-item"><a class="nav-link" href="/pages/testimonial/index.html">Testimoni</a></li>
                        <li class="nav-item"><a class="nav-link" href="/pages/contact/index.html">Kontak</a></li>
                    </ul>
                    
                    <a href="https://wa.me/085608103201" target="_blank" 
                       class="btn btn-whatsapp text-white rounded-pill d-flex align-items-center gap-2">
                        <i class="fab fa-whatsapp"></i>
                        Daftar Sekarang
                    </a>
                </div>
            </div>
        </nav>
    `;

    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
});