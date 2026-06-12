# Panduan: Membuat Website Live di Vercel

Panduan ini untuk pertama kali menyambungkan portfolio ke GitHub + Vercel,
sampai website-nya bisa diakses publik di `kaytarechiam.vercel.app`.

Cukup dilakukan SEKALI. Setelah ini, setiap `git push` otomatis nge-deploy
(lihat [PANDUAN-DEMO-CICD.md](./PANDUAN-DEMO-CICD.md)).

---

## Langkah 1 — Buat repository di GitHub

1. Buka https://github.com/new (login sebagai `kaytarechiam`).
2. Repository name: **`portfolio`**.
3. Set **Public**. Jangan centang "Add a README" / .gitignore / license
   (project ini sudah punya).
4. Klik **Create repository**.

## Langkah 2 — Push kode ke GitHub

Buka terminal di folder project (`D:\PORTO LAST`), lalu jalankan:

```bash
git add -A
git commit -m "Portfolio KAYTA.EXE"
git branch -M main
git remote add origin https://github.com/kaytarechiam/portfolio.git
git push -u origin main
```

Catatan:
- Branch produksi yang dipakai Vercel adalah **`main`** (perintah `git branch -M main`
  mengubah nama branch jadi `main`).
- Kalau diminta login, gunakan akun GitHub `kaytarechiam` (token/Personal Access
  Token bila perlu).

## Langkah 3 — Hubungkan ke Vercel

1. Buka https://vercel.com dan **Sign Up / Log In with GitHub**.
2. Klik **Add New...** lalu **Project**.
3. Di daftar repo, pilih **`portfolio`** lalu **Import**.
   (Kalau reponya belum muncul, klik "Adjust GitHub App Permissions" dan beri akses.)
4. Vercel otomatis mendeteksi **Next.js**. Biarkan default:
   - Framework Preset: **Next.js**
   - Build Command: `next build` (default)
   - Output Directory: default
   - Install Command: `npm install` (default)
   - Environment Variables: **tidak perlu ada**.
5. Klik **Deploy**. Tunggu 1-2 menit sampai selesai.

## Langkah 4 — Atur URL jadi kaytarechiam.vercel.app

1. Setelah deploy sukses, masuk **Project Settings** lalu **Domains** (atau saat
   pertama, ubah **Project Name**).
2. Pastikan nama project = **`kaytarechiam`** supaya domain gratisnya jadi
   `kaytarechiam.vercel.app`. Kalau nama itu sudah dipakai orang lain, pilih nama
   lain (mis. `kayta-portfolio`) dan update link di:
   - `app/layout.js` (variabel `SITE_URL`)
   - `app/robots.js` dan `app/sitemap.js`
   - `README.md`
   lalu commit + push lagi.

## Selesai

Website sudah live. Setiap kali kamu `git push` ke branch `main`, Vercel
otomatis build ulang dan update website. Lihat panduan demo CI/CD berikutnya.

---

### Troubleshooting singkat

| Masalah | Solusi |
|---|---|
| Build gagal di Vercel | Pastikan `npm run build` sukses di lokal dulu. |
| Repo tidak muncul di Vercel | Beri izin Vercel ke repo lewat "Adjust GitHub App Permissions". |
| Gambar tidak muncul | Taruh file foto di `public/images/` sesuai nama di `public/images/README.md`. |
| Domain belum kaytarechiam | Ubah nama project di Vercel Settings, lalu update `SITE_URL`. |
