import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';

const pricingPlans = [
  {
    name: "Basic",
    price: "Rp 2.500.000",
    period: "/paket",
    description: "Paket starter untuk UMKM yang baru memulai digitalisasi",
    features: [
      "Logo Design + Brand Guidelines",
      "Website Landing Page (5 halaman)",
      "Setup Social Media (2 platform)",
      "Content Design (10 post)",
      "Konsultasi Digital Strategy",
      "Domain & Hosting 1 tahun",
      "Training penggunaan website",
      "Support 3 bulan"
    ],
    popular: false,
    ctaText: "Mulai Sekarang",
    whatsappMessage: "Halo Denara Creative! Saya tertarik dengan paket Basic untuk digitalisasi UMKM saya. Bisa tolong berikan informasi lebih detail?"
  },
  {
    name: "Standard",
    price: "Rp 4.500.000",
    period: "/paket",
    description: "Paket lengkap untuk UMKM yang ingin berkembang pesat",
    features: [
      "Complete Brand Identity Package",
      "Website Profesional (10 halaman)",
      "E-commerce Integration",
      "Setup Social Media (4 platform)",
      "Content Design (20 post)",
      "SEO Optimization",
      "Google My Business Setup",
      "Fotografi Produk (20 foto)",
      "Digital Marketing Strategy",
      "Domain & Hosting 1 tahun",
      "Training lengkap",
      "Support 6 bulan"
    ],
    popular: true,
    ctaText: "Paket Terpopuler",
    whatsappMessage: "Halo Denara Creative! Saya tertarik dengan paket Standard yang merupakan paket terpopuler. Bisa tolong jelaskan lebih detail tentang layanan yang termasuk?"
  },
  {
    name: "Premium",
    price: "Rp 7.500.000",
    period: "/paket",
    description: "Paket premium untuk UMKM yang ingin dominasi digital",
    features: [
      "Premium Brand Identity + Merchandise",
      "Website Full Custom + Mobile App",
      "Advanced E-commerce Features",
      "Setup Social Media (6 platform)",
      "Content Design (40 post)",
      "Advanced SEO + Google Ads Setup",
      "Professional Fotografi & Videografi",
      "Social Media Management 3 bulan",
      "Digital Marketing Campaign",
      "Analytics & Reporting Dashboard",
      "Priority Support 1 tahun",
      "Monthly Strategy Review"
    ],
    popular: false,
    ctaText: "Upgrade Premium",
    whatsappMessage: "Halo Denara Creative! Saya tertarik dengan paket Premium yang paling lengkap. Bisa tolong berikan penjelasan detail dan timeline pengerjaan?"
  }
];

const addOns = [
  {
    name: "Social Media Management",
    price: "Rp 1.500.000",
    period: "/bulan",
    description: "Pengelolaan konten dan engagement media sosial",
    features: [
      "12 konten post per bulan",
      "4 konten story per minggu",
      "Community management",
      "Monthly analytics report"
    ]
  },
  {
    name: "Google Ads Management",
    price: "Rp 2.000.000",
    period: "/bulan",
    description: "Pengelolaan kampanye iklan Google Ads",
    features: [
      "Campaign setup & optimization",
      "Keyword research & targeting",
      "Ad copy creation",
      "Monthly performance report"
    ]
  },
  {
    name: "Content Creation",
    price: "Rp 1.000.000",
    period: "/bulan",
    description: "Pembuatan konten visual dan copywriting",
    features: [
      "8 design post media sosial",
      "2 artikel blog SEO",
      "Copywriting untuk semua konten",
      "Content calendar planning"
    ]
  },
  {
    name: "Website Maintenance",
    price: "Rp 500.000",
    period: "/bulan",
    description: "Pemeliharaan dan update website rutin",
    features: [
      "Security updates",
      "Content updates",
      "Performance optimization",
      "Monthly backup"
    ]
  }
];

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan untuk setiap paket?",
    answer: "Paket Basic: 2-3 minggu, Paket Standard: 3-4 minggu, Paket Premium: 4-6 minggu. Timeline dapat disesuaikan dengan kebutuhan dan kompleksitas project."
  },
  {
    question: "Apakah ada garansi untuk layanan yang diberikan?",
    answer: "Ya, kami memberikan garansi 100% kepuasan. Jika tidak puas dengan hasil akhir, kami akan melakukan revisi hingga sesuai ekspektasi atau refund 100%."
  },
  {
    question: "Bagaimana sistem pembayaran untuk paket yang dipilih?",
    answer: "Pembayaran dapat dilakukan dengan sistem: 50% DP saat kontrak, 50% pelunasan saat project selesai. Kami menerima transfer bank, e-wallet, dan kartu kredit."
  },
  {
    question: "Apakah bisa custom paket sesuai kebutuhan?",
    answer: "Tentu saja! Kami sangat fleksibel dalam menyesuaikan paket dengan kebutuhan spesifik bisnis Anda. Hubungi kami untuk konsultasi gratis."
  },
  {
    question: "Apakah termasuk training penggunaan website dan media sosial?",
    answer: "Ya, semua paket termasuk training lengkap penggunaan website, media sosial, dan tools digital lainnya. Training dilakukan via video call atau tatap muka."
  },
  {
    question: "Bagaimana dengan support setelah project selesai?",
    answer: "Setiap paket termasuk support gratis sesuai durasi yang tertera. Setelah itu, Anda bisa berlangganan maintenance package atau konsultasi per kebutuhan."
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#9B1B60] to-[#7a1549] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold font-poppins mb-6">
              Paket Digitalisasi UMKM
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda. 
              Semua paket dirancang khusus untuk membantu UMKM naik kelas di era digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Denara%20Creative!%20Saya%20ingin%20konsultasi%20gratis%20untuk%20menentukan%20paket%20yang%20tepat%20untuk%20bisnis%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-[#9B1B60] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Konsultasi Gratis</span>
              </a>
              <a
                href="#pricing-plans"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#9B1B60] transition-all duration-300"
              >
                <span>Lihat Paket</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing-plans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-6">
              Pilih Paket Terbaik untuk Bisnis Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setiap paket dirancang untuk memberikan solusi digitalisasi yang komprehensif 
              dan sesuai dengan tahap perkembangan bisnis UMKM Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
          
          {/* Money Back Guarantee */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-green-50 border border-green-200 rounded-xl px-8 py-6">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 font-poppins">100% Garansi Kepuasan</h3>
                <p className="text-gray-600">Tidak puas dengan hasil? Kami refund 100% atau revisi hingga sesuai ekspektasi Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-6">
              Layanan Tambahan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tingkatkan performa digital bisnis Anda dengan layanan tambahan yang dapat dikombinasikan dengan paket utama.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 font-poppins mb-2">
                    {addon.name}
                  </h3>
                  <div className="text-3xl font-bold text-[#9B1B60] mb-2">
                    {addon.price}
                    <span className="text-lg text-gray-500 font-normal">{addon.period}</span>
                  </div>
                  <p className="text-gray-600">{addon.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Denara%20Creative!%20Saya%20tertarik%20dengan%20layanan%20tambahan%20${addon.name}.%20Bisa%20tolong%20berikan%20informasi%20lebih%20detail?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#9B1B60] text-white py-3 rounded-lg font-semibold hover:bg-[#7a1549] transition-colors duration-200 text-center block"
                >
                  Tambahkan Layanan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-6">
              Perbandingan Paket
            </h2>
            <p className="text-xl text-gray-600">
              Lihat perbandingan detail fitur yang tersedia di setiap paket
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-[#9B1B60] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Fitur</th>
                  <th className="px-6 py-4 text-center font-semibold">Basic</th>
                  <th className="px-6 py-4 text-center font-semibold">Standard</th>
                  <th className="px-6 py-4 text-center font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Logo Design</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Website</td>
                  <td className="px-6 py-4 text-center">5 halaman</td>
                  <td className="px-6 py-4 text-center">10 halaman</td>
                  <td className="px-6 py-4 text-center">Custom + App</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">E-commerce</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">✓</td>
                  <td className="px-6 py-4 text-center">Advanced</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Social Media Setup</td>
                  <td className="px-6 py-4 text-center">2 platform</td>
                  <td className="px-6 py-4 text-center">4 platform</td>
                  <td className="px-6 py-4 text-center">6 platform</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Content Design</td>
                  <td className="px-6 py-4 text-center">10 post</td>
                  <td className="px-6 py-4 text-center">20 post</td>
                  <td className="px-6 py-4 text-center">40 post</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Fotografi Produk</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">20 foto</td>
                  <td className="px-6 py-4 text-center">Professional</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Support Duration</td>
                  <td className="px-6 py-4 text-center">3 bulan</td>
                  <td className="px-6 py-4 text-center">6 bulan</td>
                  <td className="px-6 py-4 text-center">1 tahun</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-6">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600">
              Temukan jawaban untuk pertanyaan umum seputar paket dan layanan kami
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 font-poppins mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Masih ada pertanyaan lain?</p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Denara%20Creative!%20Saya%20memiliki%20beberapa%20pertanyaan%20seputar%20paket%20dan%20layanan%20yang%20tersedia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#9B1B60] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#7a1549] transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Hubungi Kami</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#9B1B60] to-[#7a1549] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-poppins mb-6">
            Siap Naik Kelas dengan Digitalisasi?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Jangan biarkan kompetitor Anda unggul di dunia digital. 
            Mulai transformasi digital bisnis Anda hari ini juga!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Denara%20Creative!%20Saya%20siap%20untuk%20memulai%20digitalisasi%20UMKM%20saya.%20Bisa%20tolong%20bantu%20saya%20memilih%20paket%20yang%20tepat?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-[#9B1B60] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Mulai Sekarang</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#9B1B60] transition-all duration-300"
            >
              <span>Hubungi Kami</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}