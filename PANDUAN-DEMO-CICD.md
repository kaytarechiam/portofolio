# Panduan Demo: Push ke GitHub = Website Otomatis Berubah

> Tujuan demo: "Demonstrasikan bahwa perubahan pada kode yang Anda push ke GitHub
> akan otomatis menyebabkan perubahan pada website portofolio Anda."

Ini menjelaskan alur CI/CD: **edit kode → commit → push ke GitHub → Vercel otomatis
build & deploy → website live ikut berubah.** Tanpa upload manual.

**Prasyarat:** website sudah tersambung ke Vercel
(lihat [PANDUAN-VERCEL.md](./PANDUAN-VERCEL.md)).

---

## Gambaran alur

```
Edit di komputer  ->  git commit  ->  git push (branch main)
        |                                      |
        |                                      v
        |                          GitHub menerima perubahan
        |                                      |
        |                                      v  (otomatis, lewat webhook)
        |                          Vercel build ulang & deploy
        v                                      |
  Lihat di localhost                           v
  (npm run dev)                  kaytarechiam.vercel.app ikut berubah
```

---

## Langkah-langkah saat demo

### 1. Jalankan versi lokal (opsional, untuk lihat perubahan instan)

```bash
npm install      # cukup sekali
npm run dev      # buka http://localhost:3000
```

Setiap file disimpan, browser lokal langsung update (hot reload). Ini berguna untuk
menunjukkan perubahan SEBELUM di-push.

### 2. Lakukan satu perubahan yang KELIHATAN

Pilih salah satu (paling gampang dilihat saat demo):

**A. Ganti tagline hero** - file [`lib/data.js`](./lib/data.js), cari `bioShort`:

```js
bioShort:
  "Building across code, IoT, and design. ..."   // ubah teks ini
```

**B. Ganti judul sebuah section** - mis. [`components/sections/about.jsx`](./components/sections/about.jsx),
ubah teks pada prop `title="Code, hardware, and a strong sense of design."`

**C. Ganti warna aksen** - file [`app/globals.css`](./app/globals.css), cari `--primary`:

```css
--primary: oklch(0.76 0.132 70);   /* amber. Ubah angka ketiga (hue) mis. ke 30 = lebih oranye-merah */
```

Simpan file. Kalau `npm run dev` jalan, lihat perubahannya langsung di localhost.

### 3. Commit dan push ke GitHub

```bash
git add -A
git commit -m "Demo: ubah tagline hero"
git push
```

(Pastikan kamu di branch `main`. Cek dengan `git branch`.)

### 4. Tunjukkan deploy otomatis di Vercel

1. Buka dashboard project di https://vercel.com.
2. Tab **Deployments** akan langsung memunculkan deployment **baru** dengan status
   *Building* - ini terpicu OTOMATIS oleh push tadi (bukan kamu klik deploy).
3. Tunggu ~1-2 menit sampai status **Ready**.
4. Refresh `https://kaytarechiam.vercel.app` - perubahan tadi sudah live.

Itulah inti CI/CD: kamu tidak pernah upload file ke server secara manual; cukup
`git push`, sisanya otomatis.

---

## Poin penjelasan saat presentasi

- **CI/CD** = Continuous Integration / Continuous Deployment.
- GitHub dan Vercel terhubung lewat **webhook**: begitu ada push ke `main`, GitHub
  memberi tahu Vercel.
- Vercel menjalankan **`next build`** di server mereka, lalu menayangkan hasilnya ke
  CDN global. Tidak perlu FTP/upload manual.
- Setiap deployment punya histori - kalau ada yang rusak, bisa **Rollback** ke
  deployment sebelumnya lewat menu "..." di Vercel.
- Branch lain (mis. `dev`) menghasilkan **Preview Deployment** (URL terpisah) tanpa
  mengubah situs produksi - berguna untuk uji coba sebelum masuk `main`.

---

## Kalau mau aman: uji build dulu sebelum push

```bash
npm run build    # harus sukses (tanpa error) sebelum push
```

Kalau `npm run build` sukses di lokal, hampir pasti build di Vercel juga sukses.
