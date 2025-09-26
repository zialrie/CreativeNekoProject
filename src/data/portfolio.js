import Iklan from "../assets/img/iklan.jpeg";
import Kucing from "../assets/img/kucing.png";
import Web from "../assets/img/web.jpg";
import Brand from "../assets/img/branding.jpg";

export const projects = [
  {
    id: 1,
    title: "Website Toko Online",
    desc: "Desain & Pengembangan Web",
    img: Web,
    category: "Web",
    detail: {
      masalah: "Toko tidak punya sistem penjualan online.",
      solusi: "Membangun website e-commerce lengkap.",
      hasil: "Traffic naik 200% dan penjualan 3x lipat.",
      galeri: [Iklan, Kucing],
      testimoni: {
        quote: "Sangat puas dengan performa websitenya.",
        nama: "Budi Santoso",
        jabatan: "CEO TokoOnline.id",
      },
    },
  },
  {
    id: 2,
    title: "Kampanye Digital Produk Baru",
    desc: "Strategi kampanye digital launching produk.",
    img: Kucing,
    category: "Campaign",
    detail: {
      masalah: "Kurang awareness produk baru.",
      solusi: "Membuat kampanye sosial media interaktif.",
      hasil: "Followers naik 10k dan 5000 unit terjual.",
      galeri: [Kucing, Iklan],
      testimoni: {
        quote: "Campaign-nya sukses besar.",
        nama: "Dina Ayu",
        jabatan: "Marketing Manager, GlowCare",
      },
    },
  },
  {
    id: 3,
    title: "Rebranding Identitas Brand",
    desc: "Desain ulang logo, warna, dan visual.",
    img: Brand,
    category: "Konten",
    detail: {
      masalah: "Identitas brand lama tidak konsisten.",
      solusi: "Audit brand & buat brand guideline baru.",
      hasil: "Brand lebih dikenal & dipercaya.",
      galeri: [Brand, Iklan],
      testimoni: {
        quote: "Brand kami tampil profesional.",
        nama: "Fahmi Rizky",
        jabatan: "Founder SajiRasa",
      },
    },
  },
  {
    id: 4,
    title: "Landing Page Konversi Tinggi",
    desc: "Landing page untuk digital ads.",
    img: Iklan,
    category: "Web",
    detail: {
      masalah: "Halaman promosi tidak konversi.",
      solusi: "Landing page AIDA & optimasi mobile.",
      hasil: "Konversi dari 0.5% ke 3.8%.",
      galeri: [Iklan, Kucing],
      testimoni: {
        quote: "Langsung terasa dampaknya.",
        nama: "Nanda Prasetyo",
        jabatan: "CMO LangsungLaris",
      },
    },
  },
  {
    id: 5,
    title: "Social Media Management",
    desc: "Mengelola konten media sosial UMKM.",
    img: Kucing,
    category: "Campaign",
    detail: {
      masalah: "Konten media sosial tidak konsisten.",
      solusi: "Membuat kalender konten & desain rutin.",
      hasil: "Engagement naik 3x.",
      galeri: [Kucing, Brand],
      testimoni: {
        quote: "Konten kami lebih rapi dan menarik.",
        nama: "Lusi",
        jabatan: "Owner Cafe KopiKita",
      },
    },
  },
  {
    id: 6,
    title: "Desain Kemasan Produk",
    desc: "Kemasan kreatif untuk produk UMKM.",
    img: Brand,
    category: "Konten",
    detail: {
      masalah: "Kemasan kurang menarik.",
      solusi: "Desain kemasan modern & fungsional.",
      hasil: "Penjualan naik & brand awareness tinggi.",
      galeri: [Brand, Iklan],
      testimoni: {
        quote: "Kemasan baru meningkatkan kepercayaan pembeli.",
        nama: "Tono",
        jabatan: "Owner SnackBar",
      },
    },
  },
  {
    id: 7,
    title: "Fotografi Produk",
    desc: "Foto profesional untuk katalog produk.",
    img: Iklan,
    category: "Konten",
    detail: {
      masalah: "Foto produk seadanya.",
      solusi: "Sesi foto profesional studio.",
      hasil: "Katalog lebih menarik.",
      galeri: [Iklan, Kucing],
      testimoni: {
        quote: "Foto produk kami jadi keren.",
        nama: "Winda",
        jabatan: "Owner KueRumahan",
      },
    },
  },
  {
    id: 8,
    title: "Optimasi Marketplace",
    desc: "Optimasi toko UMKM di marketplace.",
    img: Web,
    category: "Web",
    detail: {
      masalah: "Toko sepi pembeli.",
      solusi: "Optimasi judul & kata kunci produk.",
      hasil: "Penjualan naik signifikan.",
      galeri: [Web, Iklan],
      testimoni: {
        quote: "Produk lebih mudah ditemukan pembeli.",
        nama: "Arif",
        jabatan: "Owner FashionLokal",
      },
    },
  },
  {
    id: 9,
    title: "Pembuatan Video Promosi",
    desc: "Video promosi kreatif untuk UMKM.",
    img: Brand,
    category: "Campaign",
    detail: {
      masalah: "Produk sulit viral.",
      solusi: "Video pendek storytelling.",
      hasil: "Reach meningkat 500%.",
      galeri: [Brand, Kucing],
      testimoni: {
        quote: "Videonya bikin brand kami dikenal.",
        nama: "Yanti",
        jabatan: "Owner BatikCantik",
      },
    },
  },
  {
    id: 10,
    title: "Pelatihan Tim Internal",
    desc: "Pelatihan digital marketing internal.",
    img: Kucing,
    category: "Campaign",
    detail: {
      masalah: "Tim internal kurang skill digital.",
      solusi: "Training 2 hari full praktik.",
      hasil: "Tim lebih siap eksekusi.",
      galeri: [Kucing, Iklan],
      testimoni: {
        quote: "Trainingnya jelas dan mudah dipahami.",
        nama: "Reza",
        jabatan: "HR Manager UMKM Mart",
      },
    },
  },
];
