document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
        <footer class="custom-footer mt-auto text-center text-lg-start">
            <div class="container relative-z-index">
                <div class="row text-white g-5">
                    <!-- Kolom 1: Logo & Tagline -->
                    <div class="col-lg-5 col-md-12 mb-4 mb-lg-0">
                        <a href="/index.html" class="d-flex align-items-center justify-content-center justify-content-lg-start mb-3 text-white text-decoration-none">
                            <img src="/assets/images/logo/logo.png" alt="JO.KIDS" height="45" class="me-2" onerror="this.style.display='none'">
                            <span class="fs-3 fw-bold">JO. KIDS</span>
                        </a>
                        <p class="footer-text mt-3">
                            Lembaga Bimbingan Belajar dengan pendekatan Joyfull Learning untuk memaksimalkan potensi anak dengan cara yang asyik dan menyenangkan.
                        </p>
                    </div>

                    <!-- Kolom 2: Menu Link -->
                    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h6>Menu Tautan</h6>
                        <ul class="list-unstyled mb-0">
                            <li class="mb-3"><a href="/index.html" class="footer-link">Beranda</a></li>
                            <li class="mb-3"><a href="/pages/about/index.html" class="footer-link">Tentang Kami</a></li>
                            <li class="mb-3"><a href="/pages/programs/index.html" class="footer-link">Program Belajar</a></li>
                            <li class="mb-3"><a href="/pages/gallery/index.html" class="footer-link">Galeri & Testimoni</a></li>
                        </ul>
                    </div>

                    <!-- Kolom 3: Hubungi Kami -->
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h6>Hubungi Kami</h6>
                        <ul class="list-unstyled mb-0">
                            <li class="mb-3">
                                <a href="https://wa.me/085608103201" target="_blank" class="footer-link d-flex align-items-center">
                                    <span class="footer-contact-icon"><i class="fab fa-whatsapp"></i></span>
                                    0856-0810-3201 (Bu Faiza)
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="https://wa.me/085608867133" target="_blank" class="footer-link d-flex align-items-center">
                                    <span class="footer-contact-icon"><i class="fab fa-whatsapp"></i></span>
                                    0856-0886-7133 (Admin)
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="https://instagram.com/jokids.private" target="_blank" class="footer-link d-flex align-items-center">
                                    <span class="footer-contact-icon"><i class="fab fa-instagram"></i></span>
                                    @jokids.private
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Bagian Bawah: Copyright Bergaris -->
                <div class="row footer-bottom align-items-center">
                    <div class="col-md-6 text-center text-md-start mb-2 mb-md-0">
                        <p class="mb-0">© 2026 JO.KIDS Just For Kids Indonesia. All rights reserved.</p>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <p class="mb-0">Bojonegoro • Jawa Timur</p>
                    </div>
                </div>
            </div>
        </footer>
    `;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});