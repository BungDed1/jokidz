/* ========================================================
   FILE: main.js
   Fungsi utama untuk interaktivitas website JO.KIDS
   ======================================================== */

// --- FUNGSI HALAMAN TESTIMONI: Menambah Card Real-Time & Redirect WA ---
function submitReview() {
    // 1. Ambil data dari form
    const name = document.getElementById('reviewName').value;
    const program = document.getElementById('reviewProgram').value;
    const text = document.getElementById('reviewText').value;
    // Ambil data bintang dari form (defaultnya 5 jika tidak ditemukan)
    const ratingElement = document.getElementById('reviewRating');
    const ratingValue = ratingElement ? ratingElement.value : 5;

    // 2. Validasi kalau ada yang kosong
    if (!name || !program || !text) {
        alert('Mohon lengkapi semua isian ulasan ya, Ayah/Bunda!');
        return;
    }

    // 3. Ambil inisial nama untuk avatar
    const initial = name.charAt(0).toUpperCase();

    // 4. LOGIKA BINTANG: Generate HTML bintang sesuai jumlah yang dipilih
    let starsHTML = '';
    const starCount = parseInt(ratingValue);

    for (let i = 1; i <= 5; i++) {
        if (i <= starCount) {
            starsHTML += '<i class="fas fa-star"></i>'; // Bintang penuh
        } else {
            starsHTML += '<i class="far fa-star"></i>'; // Bintang kosong
        }
    }

    // 5. Buat Elemen Card Testimoni Baru
    const newCard = document.createElement('div');
    newCard.className = 'col-md-6 mb-4';

    // Menggunakan struktur HTML card ditambah efek border kiri khusus (kuning)
    newCard.innerHTML = `
        <div class="card h-100 border-0 shadow-sm testimo-card rounded-4 bg-white p-2 border-start border-4 border-warning">
            <div class="card-body d-flex flex-column">
                <div class="d-flex align-items-center mb-3">
                    <div class="rounded-circle bg-warning d-flex align-items-center justify-content-center shadow-sm text-dark fw-bold fs-5" style="width: 45px; height: 45px;">
                        ${initial}
                    </div>
                    <div class="ms-3">
                        <h6 class="mb-0 fw-bold text-dark">${name}</h6>
                        <small class="text-warning fw-medium" style="font-size: 0.8rem;">Baru Saja - ${program}</small>
                    </div>
                </div>
                
                <!-- Bintang yang dicetak dinamis dimasukkan ke sini -->
                <div class="text-warning mb-2" style="font-size: 0.85rem;">
                    ${starsHTML}
                </div>
                
                <p class="fst-italic text-secondary flex-grow-1 mb-0" style="font-size: 0.95rem; line-height: 1.6;">
                    "${text}"
                </p>
            </div>
        </div>
    `;

    // 6. Sisipkan Card Baru ke urutan PALING ATAS di dalam Grid
    const grid = document.getElementById('testimonial-grid');
    if (grid) {
        grid.insertBefore(newCard, grid.firstChild);
    }

    // 7. Reset Form supaya kosong kembali
    document.getElementById('reviewForm').reset();

    // 8. Berikan Opsi untuk dikirim ke WhatsApp Admin (Dilengkapi Bintang)
    if (confirm('Ulasan berhasil ditambahkan! Apakah Anda juga ingin mengirimkan salinannya ke WhatsApp Admin JO.KIDS?')) {
        const waNumber = '6285608867133'; // Ganti dengan nomor admin yang sesuai
        const waText = `*TESTIMONI BARU JO.KIDS*%0A%0A*Nama:* ${name}%0A*Program:* ${program}%0A*Rating:* ${starCount} Bintang ⭐️%0A%0A*Ulasan:*%0A"${text}"%0A%0A_Terima kasih telah berbagi cerita bersama JO.KIDS!_`;
        const waURL = `https://wa.me/${waNumber}?text=${waText}`;
        window.open(waURL, '_blank');
    }
}