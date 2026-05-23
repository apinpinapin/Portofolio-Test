export default function APINStorePortfolio() {
  const services = [
    {
      title: 'Bot Development',
      desc: 'Pembuatan bot Telegram & WhatsApp untuk kebutuhan bisnis dan otomatisasi.',
      price: 'Mulai 150K'
    },
    {
      title: 'Deploy & Setup',
      desc: 'Jasa deploy script VPS, panel, dan hosting dengan tutorial lengkap.',
      price: 'Mulai 24K'
    },
    {
      title: 'Premium Apps',
      desc: 'Layanan akun premium seperti YouTube Premium dan CapCut Pro.',
      price: 'Mulai 35K'
    },
    {
      title: 'VPN Premium',
      desc: 'VPN premium untuk privasi dan koneksi yang lebih aman.',
      price: 'Mulai 5K'
    },
    {
      title: 'Tutorial & Konsultasi',
      desc: 'Bantuan konsultasi teknologi, setting perangkat, dan optimasi aplikasi.',
      price: 'Mulai 35K'
    },
    {
      title: 'Nomor Virtual',
      desc: 'Penyediaan nomor virtual untuk kebutuhan verifikasi legal.',
      price: 'Mulai 15K'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-cyan-500/20" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm mb-6">
              APINSTORE ID
            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Digital Services
              <span className="block text-green-400">Portfolio</span>
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-8">
              Menyediakan berbagai layanan digital modern seperti deploy script,
              bot development, akun premium, VPN premium, dan konsultasi teknologi.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/coreinpin"
                target="_blank"
                className="px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-400 transition text-black font-bold shadow-lg shadow-green-500/20"
              >
                Instagram
              </a>

              <a
                href="https://telegra.ph/KUMPULAN-REVIEW-BUG-WHATSAPP-05-21"
                target="_blank"
                className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-green-500 transition"
              >
                Review
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-green-500 transition">
              <h3 className="text-4xl font-black text-green-400">24/7</h3>
              <p className="text-zinc-400 mt-2">Online Support</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-cyan-500 transition">
              <h3 className="text-4xl font-black text-cyan-400">100+</h3>
              <p className="text-zinc-400 mt-2">Client Order</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-purple-500 transition">
              <h3 className="text-4xl font-black text-purple-400">Fast</h3>
              <p className="text-zinc-400 mt-2">Process Service</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-pink-500 transition">
              <h3 className="text-4xl font-black text-pink-400">Safe</h3>
              <p className="text-zinc-400 mt-2">Trusted Digital Store</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
          <div>
            <h2 className="text-4xl font-black">Services</h2>
            <p className="text-zinc-400 mt-2">Daftar layanan digital yang tersedia</p>
          </div>

          <div className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400">
            Updated 2026
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-green-500 transition duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition">
                {service.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-green-400 font-bold text-lg">
                  {service.price}
                </span>

                <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-green-500 hover:text-black transition font-semibold">
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">
              Tentang APINSTORE ID
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-4">
              APINSTORE ID merupakan layanan digital yang menyediakan berbagai kebutuhan online modern mulai dari deploy script, setup bot, layanan premium, hingga konsultasi teknologi.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              Dengan desain modern dan pelayanan cepat, APINSTORE ID hadir untuk membantu kebutuhan digital Anda dengan proses mudah dan praktis.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-zinc-800 rounded-[2rem] p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-zinc-400">Instagram</span>
                <span className="font-bold text-green-400">@coreinpin</span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-zinc-400">Support</span>
                <span className="font-bold">24 Jam</span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-zinc-400">Payment</span>
                <span className="font-bold">E-Wallet & Bank</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Status</span>
                <span className="font-bold text-green-400">Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500 text-sm">
        © 2026 APINSTORE ID — All Rights Reserved.
      </footer>
    </div>
  )
}
