// assets/js/footer.js
document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
        <footer class="bg-dark text-light py-5">
            <div class="container">
                <div class="row">
                    <!-- Logo & Deskripsi -->
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <div class="d-flex align-items-center mb-3">
                            <img src="/assets/images/logo/logo.png" alt="JO.KIDS" height="45">
                            <div class="ms-3">
                                <span class="text-pink-400 fs-3 fw-bold">JO.</span>
                                <span class="text-purple-400 fs-3 fw-bold">KIDS</span>
                            </div>
                        </div>
                        <p class="text-light-50 small">
                            Bimbingan Belajar Joyfull Learning<br>
                            Happy Kids • Fun Learning • Bojonegoro
                        </p>
                    </div>

                    <!-- Navigasi Cepat -->
                    <div class="col-lg-2 col-6 mb-4 mb-lg-0">
                        <h6 class="fw-semibold mb-3">Menu</h6>
                        <a href="/index.html" class="d-block text-light-50 mb-2 text-decoration-none">Beranda</a>
                        <a href="/pages/about/index.html" class="d-block text-light-50 mb-2 text-decoration-none">Tentang Kami</a>
                        <a href="/pages/programs/index.html" class="d-block text-light-50 mb-2 text-decoration-none">Program</a>
                        <a href="/pages/gallery/index.html" class="d-block text-light-50 mb-2 text-decoration-none">Galeri</a>
                    </div>

                    <!-- Kontak -->
                    <div class="col-lg-3 col-6 mb-4 mb-lg-0">
                        <h6 class="fw-semibold mb-3">Hubungi Kami</h6>
                        <a href="https://wa.me/085608103201" target="_blank" class="d-flex align-items-center text-light-50 mb-2 text-decoration-none">
                            <i class="fab fa-whatsapp me-2"></i> 0856-0810-3201 (Bu Faiza)
                        </a>
                        <a href="https://wa.me/085608867133" target="_blank" class="d-flex align-items-center text-light-50 mb-3 text-decoration-none">
                            <i class="fab fa-whatsapp me-2"></i> 0856-0886-7133 (Admin)
                        </a>
                        <a href="https://instagram.com/jokids.private" target="_blank" class="d-flex align-items-center text-light-50 text-decoration-none">
                            <i class="fab fa-instagram me-2"></i> @jokids.private
                        </a>
                    </div>

                    <!-- Copyright -->
                    <div class="col-lg-3 text-lg-end">
                        <p class="small text-light-50 mb-1">© 2026 JO.KIDS Just For Kids Indonesia</p>
                        <p class="small text-light-50">Bojonegoro • Jawa Timur</p>
                    </div>
                </div>
            </div>
        </footer>
    `;

    document.getElementById('footer-placeholder').innerHTML = footerHTML;
});