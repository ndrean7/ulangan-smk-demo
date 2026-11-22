# Ulangan Online SMK — Demo

**Coba langsung:** https://ndrean7.github.io/ulangan-smk-demo/

Contoh website ulangan pilihan ganda untuk SMK. Contoh isinya: **Ulangan Harian Dasar HTML & CSS, RPL kelas X, 20 soal**. Bisa dibuka di HP, tidak perlu server, tidak perlu akun, dan tetap jalan offline setelah halamannya terbuka.

## Fitur

- Siswa mengisi Nama, Kelas, dan No. Absen sebelum mulai
- Timer 30 menit, jawaban dikumpulkan otomatis saat waktu habis
- Urutan soal dan pilihan jawaban diacak untuk tiap siswa (mengurangi contek-contekan)
- Navigasi nomor soal: dijawab (hijau), ragu-ragu (kuning), belum dijawab
- Ada konfirmasi sebelum mengumpulkan (menampilkan jumlah soal kosong dan ragu-ragu)
- Nilai keluar otomatis (0–100), jumlah benar/salah/kosong, predikat, dan kode verifikasi hasil
- Hasil bisa dicetak / disimpan PDF dan diunduh sebagai .txt
- Jawaban tidak hilang kalau halaman ter-refresh
- Kunci jawaban **tidak ditulis** di halaman ujian. Penilaian memakai hash SHA-256 per soal

## Isi repo

| File | Isi |
|---|---|
| `soal.json` | Soal, pilihan, kunci, pembahasan (sumber untuk diedit guru) |
| `template.html` | Tampilan dan logika website |
| `build.mjs` | Script untuk membuat `index.html` dan `KUNCI-JAWABAN.md` dari `soal.json` |
| `index.html` | Hasil build, ini yang dibuka siswa (di branch `gh-pages`) |
| `KUNCI-JAWABAN.md` | Kunci jawaban + pembahasan singkat semua soal |

## Cara guru mengganti soal

1. Edit `soal.json`: ubah `judul`, `sekolah`, `kelas`, `durasi_menit`, lalu isi daftar `soal` (setiap soal punya `id` unik, `tanya`, `opsi` A–E, `kunci`, `bahas`).
2. Ganti juga nilai `salt` (teks bebas) untuk setiap ulangan baru.
3. Jalankan (perlu Node.js 18+):
   ```
   node build.mjs
   ```
4. Upload `index.html` yang baru ke hosting (misalnya GitHub Pages). Selesai.

## Catatan keamanan (jujur)

- Halaman ujian hanya menyimpan hash, jadi kunci tidak terbaca langsung. Tapi siswa yang paham kode masih bisa menebak lewat hash, karena pilihannya cuma 5. Untuk ulangan harian ini cukup, tapi **bukan** untuk ujian penting.
- Repo demo ini publik dan `soal.json` + `KUNCI-JAWABAN.md` berisi kunci. Untuk pemakaian sungguhan, simpan `soal.json` dan kunci di **repo private**, lalu publikasikan `index.html` saja.
- Nilai tersimpan di perangkat siswa (tidak dikirim ke server). Siswa menunjukkan / mengirim hasil cetak beserta kode verifikasinya ke guru. Rekap nilai otomatis ke guru (Google Sheets / server) bisa ditambahkan di versi berikutnya.

## Tertarik pakai untuk sekolah Anda?

Bisa dibuatkan untuk mapel, jurusan, dan jumlah soal apa pun, dengan logo dan nama sekolah sendiri.

- X: [@0xndrean7](https://x.com/0xndrean7)
- GitHub: [@ndrean7](https://github.com/ndrean7)
