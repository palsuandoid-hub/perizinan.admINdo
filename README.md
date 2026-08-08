# Perizinan.AdmINdo — Website Jasa Perizinan & Perpajakan

Website profesional, modern, minimalis, dan responsif untuk usaha jasa
administrasi perizinan usaha dan perpajakan.

## Teknologi

- **Vite + React + TypeScript** — framework utama
- **Tailwind CSS v4** — styling
- **Lucide Icons** — ikon outline modern
- **Google Fonts** (Poppins & Inter) — tipografi
- 100% open-source, tanpa aset berbayar

## Pengembangan Lokal

```bash
npm install
npm run dev
```

## Build Produksi

```bash
npm run build
```

Hasil build ada di folder `dist/`.

## Deploy ke GitHub Pages

1. Push kode ini ke repository GitHub Anda.
2. Buka **Settings > Pages** pada repository.
3. Di bagian **Build and deployment**, pilih **Source: GitHub Actions**.
4. Workflow `.github/workflows/deploy.yml` akan otomatis membangun dan
   men-deploy website setiap kali Anda push ke branch `main`.

URL website akan berbentuk:
`https://<username>.github.io/<nama-repo>/`

## Kustomisasi

Semua teks kontak, layanan, testimoni, dan FAQ berada di satu file:
`src/data/content.ts`. Ubah file ini untuk memperbarui konten website.

### Mengubah Nomor WhatsApp

Edit `src/data/content.ts`, ubah field `whatsapp` dan `whatsappDisplay`:

```ts
export const contact: ContactInfo = {
  whatsapp: '6281234567890',       // format internasional tanpa +
  whatsappDisplay: '+62 812-3456-7890',
  ...
};
```

### Mengubah Alamat & Google Maps

Edit field `address`, `mapsEmbed`, dan `mapsLink` pada file yang sama.

## Struktur

```
src/
├── components/     # Komponen UI reusable
├── data/           # Data konten (layanan, FAQ, kontak, dll)
├── pages/          # Halaman: Home, Layanan, Tentang, Testimoni, FAQ, Kontak
├── App.tsx         # Routing & layout
├── main.tsx        # Entry point
└── index.css       # Theme & global styles
```
