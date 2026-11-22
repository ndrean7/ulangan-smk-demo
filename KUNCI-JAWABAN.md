# Kunci Jawaban — Ulangan Harian — Dasar HTML & CSS

Rekayasa Perangkat Lunak (RPL) · Kelas X · 20 soal pilihan ganda

> Huruf kunci mengikuti urutan **asli** di `soal.json`. Di website, urutan soal dan pilihan diacak per siswa, jadi huruf yang tampil ke siswa bisa berbeda — penilaian tetap otomatis dan benar.

| No | Level | Kunci | Jawaban |
|---|---|---|---|
| 1 | mudah | **A** | HyperText Markup Language |
| 2 | mudah | **C** | &lt;h1> |
| 3 | mudah | **B** | &lt;a> |
| 4 | mudah | **D** | src |
| 5 | mudah | **C** | Menampilkan teks pengganti jika gambar gagal dimuat dan dibaca oleh pembaca layar |
| 6 | mudah | **E** | &lt;ol> |
| 7 | sedang | **A** | &lt;title> |
| 8 | mudah | **B** | Cascading Style Sheets |
| 9 | sedang | **C** | &lt;link rel="stylesheet" href="style.css"> |
| 10 | sedang | **D** | #menu |
| 11 | sedang | **C** | color |
| 12 | sedang | **E** | content – padding – border – margin |
| 13 | sedang | **B** | &lt;tr> |
| 14 | sedang | **D** | type="password" |
| 15 | sulit | **D** | Hijau |
| 16 | sulit | **B** | display: none menghilangkan elemen beserta ruangnya, sedangkan visibility: hidden menyembunyikan elemen tetapi ruangnya tetap ada |
| 17 | sulit | **C** | justify-content: center |
| 18 | sulit | **E** | 200px |
| 19 | sedang | **D** | &lt;nav> |
| 20 | sulit | **B** | @media (max-width: 600px) { ... } |

## Pembahasan

**1. Kepanjangan dari HTML adalah ...**

Kunci: **A**. HTML = HyperText Markup Language, bahasa markah untuk menyusun struktur halaman web.

**2. Tag HTML untuk judul (heading) dengan ukuran paling besar adalah ...**

Kunci: **C**. Heading berurutan dari &lt;h1> (paling besar/penting) sampai &lt;h6> (paling kecil).

**3. Tag HTML yang digunakan untuk membuat tautan (link) ke halaman lain adalah ...**

Kunci: **B**. Tautan dibuat dengan tag &lt;a> dan atribut href, contoh &lt;a href="profil.html">Profil&lt;/a>. Tag &lt;link> dipakai di &lt;head> untuk menghubungkan file seperti CSS.

**4. Atribut pada tag &lt;img> yang berisi alamat file gambar adalah ...**

Kunci: **D**. src (source) menunjukkan lokasi file gambar, contoh &lt;img src="logo.png" alt="Logo">.

**5. Fungsi atribut alt pada tag &lt;img> adalah ...**

Kunci: **C**. alt berisi teks alternatif: tampil saat gambar gagal dimuat dan dibacakan oleh screen reader (aksesibilitas).

**6. Tag HTML untuk membuat daftar berurutan (bernomor) adalah ...**

Kunci: **E**. &lt;ol> = ordered list (bernomor). &lt;ul> = unordered list (bullet). &lt;li> adalah item di dalam keduanya.

**7. Elemen HTML yang isinya ditampilkan sebagai judul pada tab browser adalah ...**

Kunci: **A**. &lt;title> diletakkan di dalam &lt;head> dan isinya muncul di tab browser serta hasil pencarian.

**8. Kepanjangan dari CSS adalah ...**

Kunci: **B**. CSS = Cascading Style Sheets, dipakai untuk mengatur tampilan (warna, ukuran, tata letak) halaman HTML.

**9. Penulisan yang benar untuk menghubungkan file CSS eksternal bernama style.css adalah ...**

Kunci: **C**. File CSS eksternal dihubungkan dengan &lt;link rel="stylesheet" href="style.css"> di dalam &lt;head>.

**10. Selector CSS untuk memilih elemen yang memiliki id="menu" adalah ...**

Kunci: **D**. Tanda # untuk id (#menu), tanda titik untuk class (.menu), tanpa tanda untuk nama tag.

**11. Properti CSS untuk mengubah warna teks adalah ...**

Kunci: **C**. Warna teks diatur dengan properti color, contoh p { color: navy; }. font-color dan text-color bukan properti CSS.

**12. Urutan lapisan CSS Box Model dari bagian paling dalam ke paling luar adalah ...**

Kunci: **E**. Dari dalam ke luar: content (isi), padding (jarak isi ke border), border (garis tepi), margin (jarak ke elemen lain).

**13. Dalam tabel HTML, tag yang digunakan untuk membuat satu baris adalah ...**

Kunci: **B**. &lt;tr> = table row (baris). &lt;td> = sel data, &lt;th> = sel judul kolom.

**14. Agar karakter yang diketik pada kolom input disamarkan (misalnya menjadi titik), atribut type yang digunakan adalah ...**

Kunci: **D**. type="password" menyamarkan karakter yang diketik. type="hidden" menyembunyikan seluruh kolom, bukan menyamarkan ketikan.

**15. Perhatikan CSS berikut:**

Kunci: **D**. Specificity: selector id (#utama) lebih kuat daripada class (.info), dan class lebih kuat daripada tag (p). Jadi warnanya hijau.

**16. Perbedaan display: none dan visibility: hidden yang benar adalah ...**

Kunci: **B**. display: none membuat elemen tidak dirender dan tidak memakan ruang. visibility: hidden membuat elemen tak terlihat namun tetap memakan ruang di layout.

**17. Sebuah container memakai display: flex dengan flex-direction: row. Properti untuk membuat item-itemnya berada di tengah secara horizontal adalah ...**

Kunci: **C**. Pada flex-direction: row, sumbu utama horizontal diatur oleh justify-content. align-items mengatur sumbu silang (vertikal).

**18. Sebuah div memiliki CSS: box-sizing: border-box; width: 200px; padding: 20px; border: 5px solid black;**

Kunci: **E**. Dengan border-box, padding dan border dihitung di dalam width, jadi lebar tampil tetap 200px. Jika content-box, hasilnya 200 + 2×20 + 2×5 = 250px.

**19. Elemen semantik HTML5 yang tepat untuk membungkus menu navigasi utama adalah ...**

Kunci: **D**. &lt;nav> adalah elemen semantik HTML5 khusus untuk kumpulan tautan navigasi utama.

**20. Penulisan media query CSS yang benar agar aturan hanya berlaku pada layar dengan lebar maksimal 600px adalah ...**

Kunci: **B**. max-width: 600px berarti berlaku saat lebar layar 600px atau kurang. min-width justru untuk layar 600px ke atas.
