// assets/js/navbar.js
document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="/index.html">
                    <img src="/public/jokids.png" alt="JO.KIDS" height="42">
                    <span class="ms-2">JO.KIDS</span>
                </a>
                
                <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <i class="fas fa-bars fs-3"></i>
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
                    
                    <!-- PERBAIKAN: text-white DIHAPUS DARI SINI -->
                    <a href="https://wa.me/085608103201" target="_blank" 
                       class="btn btn-whatsapp rounded-pill d-flex align-items-center gap-2">
                        <i class="fab fa-whatsapp"></i>
                        Daftar Sekarang
                    </a>
                </div>
            </div>
        </nav>
    `;

    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    }

    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});