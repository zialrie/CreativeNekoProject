import Iklan from "../assets/img/iklan.jpeg";
import Web from "../assets/img/web.jpg";
import Brand from "../assets/img/branding.jpg";

// Helper cek tanggal sudah lewat atau belum
function isEventPast(dateStr) {
  try {
    const [day, monthName, year] = dateStr.split(" ");
    const months = {
      Januari: 0, Februari: 1, Maret: 2, April: 3, Mei: 4, Juni: 5,
      Juli: 6, Agustus: 7, September: 8, Oktober: 9, November: 10, Desember: 11,
    };
    const monthIndex = months[monthName];
    const date = new Date(year, monthIndex, day);
    return date < new Date();
  } catch {
    return false;
  }
}

const rawEvents = [
  {
    id: 1,
    title: "Webinar Digital Marketing UMKM",
    date: "15 April 2025",
    time: "19:00 WIB",
    place: "Online via Zoom",
    img: Web,
    category: "Online",
    detail: {
      description: "Pelajari strategi digital marketing terkini untuk UMKM.",
      agenda: [
        "19:00 - 19:15: Pembukaan & Sambutan",
        "19:15 - 20:00: Strategi Digital Marketing",
        "20:00 - 20:30: Q&A & Diskusi",
        "20:30 - 21:00: Penutupan",
      ],
      speaker: "Budi Santoso",
      fee: "Gratis",
      testimonial: {
        quote: "Materinya relevan dan praktis!",
        name: "Fulan",
      },
    },
  },
  {
    id: 2,
    title: "Workshop Branding & Identitas Visual",
    date: "22 April 2025",
    time: "09:00 WIB",
    place: "Offline Jakarta",
    img: Brand,
    category: "Offline",
    detail: {
      description: "Workshop intensif branding untuk UMKM.",
      agenda: [
        "09:00 - 10:00: Pengenalan Branding",
        "10:00 - 12:00: Praktik Desain Visual",
        "13:00 - 15:00: Konsultasi Personal",
      ],
      speaker: "Siti Aminah",
      fee: "Rp 250.000",
      testimonial: {
        quote: "Saya jadi lebih paham membangun identitas brand.",
        name: "Rina",
      },
    },
  },
  {
    id: 3,
    title: "Creative Hackathon",
    date: "25 April 2025",
    time: "09:00 WIB",
    place: "Offline Bandung",
    img: Iklan,
    category: "Offline",
    detail: {
      description: "Hackathon untuk ide kreatif membangun solusi digital UMKM.",
      agenda: ["09:00 - 10:00: Registrasi", "10:00 - 17:00: Hacking Time"],
      speaker: "Tim Juri Startup Bandung",
      fee: "Gratis",
      testimonial: {
        quote: "Seru dan menambah relasi baru!",
        name: "Andi",
      },
    },
  },
  {
    id: 4,
    title: "Webinar E-commerce Strategy",
    date: "5 Mei 2025",
    time: "19:00 WIB",
    place: "Online",
    img: Web,
    category: "Online",
    detail: {
      description: "Strategi penjualan di marketplace & website sendiri.",
      agenda: ["19:00 - 19:30: Trends E-commerce", "19:30 - 20:30: Tips Praktis"],
      speaker: "Rani Prasetyo",
      fee: "Gratis",
      testimonial: {
        quote: "Bermanfaat banget buat bisnis saya!",
        name: "Ali",
      },
    },
  },
  {
    id: 5,
    title: "Workshop Copywriting untuk UMKM",
    date: "8 Mei 2025",
    time: "10:00 WIB",
    place: "Offline Surabaya",
    img: Brand,
    category: "Offline",
    detail: {
      description: "Pelatihan copywriting untuk meningkatkan penjualan.",
      agenda: ["10:00 - 12:00: Teori Copywriting", "13:00 - 15:00: Praktik"],
      speaker: "Nadia",
      fee: "Rp 150.000",
      testimonial: {
        quote: "Copywriting saya jadi lebih menarik.",
        name: "Salsa",
      },
    },
  },
  {
    id: 6,
    title: "Webinar Instagram Marketing",
    date: "12 Mei 2025",
    time: "19:00 WIB",
    place: "Online",
    img: Web,
    category: "Online",
    detail: {
      description: "Strategi promosi produk di Instagram.",
      agenda: ["19:00 - 19:30: Konten Menarik", "19:30 - 20:00: Algoritma IG"],
      speaker: "Bima",
      fee: "Gratis",
      testimonial: {
        quote: "Tipsnya langsung bisa dipraktekkan.",
        name: "Lina",
      },
    },
  },
  {
    id: 7,
    title: "Workshop Fotografi Produk",
    date: "20 Mei 2025",
    time: "09:00 WIB",
    place: "Offline Yogyakarta",
    img: Iklan,
    category: "Offline",
    detail: {
      description: "Belajar foto produk UMKM dengan profesional.",
      agenda: ["09:00 - 11:00: Teori Foto", "11:00 - 13:00: Praktik"],
      speaker: "Andrian",
      fee: "Rp 200.000",
      testimonial: {
        quote: "Foto produk saya sekarang lebih bagus.",
        name: "Nana",
      },
    },
  },
  {
    id: 8,
    title: "Webinar Marketplace Optimization",
    date: "1 Oktober 2025",
    time: "19:00 WIB",
    place: "Online",
    img: Web,
    category: "Online",
    detail: {
      description: "Optimasi toko UMKM di marketplace.",
      agenda: ["19:00 - 19:45: SEO Marketplace", "19:45 - 20:15: Tips Diskon"],
      speaker: "Taufik",
      fee: "Gratis",
      testimonial: {
        quote: "Toko saya lebih ramai pembeli.",
        name: "Udin",
      },
    },
  },
  {
    id: 9,
    title: "Workshop Desain Kemasan",
    date: "20 Oktober 2025",
    time: "09:00 WIB",
    place: "Offline Semarang",
    img: Brand,
    category: "Offline",
    detail: {
      description: "Mendesain kemasan produk yang menarik dan fungsional.",
      agenda: ["09:00 - 10:00: Trend Kemasan", "10:00 - 12:00: Praktik"],
      speaker: "Dewi",
      fee: "Rp 180.000",
      testimonial: {
        quote: "Kemasan produk saya jadi lebih menarik.",
        name: "Asep",
      },
    },
  },
  {
    id: 10,
    title: "Webinar TikTok Ads",
    date: "5 Oktober 2025",
    time: "19:00 WIB",
    place: "Online",
    img: Web,
    category: "Online",
    detail: {
      description: "Cara beriklan di TikTok untuk UMKM.",
      agenda: ["19:00 - 19:30: Setting Ads", "19:30 - 20:00: Optimasi"],
      speaker: "Rico",
      fee: "Gratis",
      testimonial: {
        quote: "Hemat biaya ads tapi hasil bagus.",
        name: "Eka",
      },
    },
  },
];

// Export events dengan isPast otomatis
export const events = rawEvents.map((ev) => ({
  ...ev,
  isPast: isEventPast(ev.date),
}));
