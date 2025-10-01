import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import PortfolioGrid from '@/components/PortfolioGrid';

import { Zap, DollarSign, Users, Headphones, Palette, Globe, Share2, Camera } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Branding & Desain Kreatif",
    description: "Ciptakan identitas visual yang kuat dan memorable untuk bisnis Anda.",
    features: [
      "Desain Logo & Brand Identity",
      "Brand Guidelines",
      "Kemasan Produk",
      "Materi Promosi (Flyer, Banner)",
      "Stationery Design",
      "Merchandise Design",
      "Desain Kaos",
      "Desain Vector"
    ]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Website & Toko Online",
    description: "Bangun kehadiran digital yang kuat dengan website profesional dan toko online yang user-friendly untuk meningkatkan penjualan.",
    features: [
      "Website Company Profile",
      "Toko Online E-commerce",
      "Landing Page",
      "Optimasi SEO Dasar"
    ]
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Media Management",
    description: "Kelola media sosial bisnis Anda dengan strategi konten yang tepat dan iklan digital yang efektif untuk menjangkau lebih banyak pelanggan.",
    features: [
      "Strategi Konten Media Sosial",
      "Manajemen Instagram & Facebook",
      "Digital Advertising",
      "Analytics & Reporting"
    ]
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Fotografi & Videografi",
    description: "Dokumentasikan produk dan layanan Anda dengan foto dan video berkualitas tinggi yang menarik dan profesional untuk keperluan marketing.",
    features: [
      "Fotografi Produk",
      "Video Promosi",
      "Content Creation",
      "Editing Professional"
    ]
  }
];

const advantages = [
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Solusi Terintegrasi",
    description: "Layanan lengkap dari branding hingga digital marketing dalam satu tempat"
  },
  {
    icon: <DollarSign className="w-12 h-12" />,
    title: "Harga Terjangkau",
    description: "Paket harga yang disesuaikan dengan budget UMKM tanpa mengurangi kualitas"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Tim Berpengalaman",
    description: "Didukung oleh tim kreatif yang memahami kebutuhan dan tantangan UMKM"
  },
  {
    icon: <Headphones className="w-12 h-12" />,
    title: "Support Berkelanjutan",
    description: "Pendampingan dan maintenance untuk memastikan kesuksesan jangka panjang"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
            Layanan Unggulan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi digital terpadu untuk mengembangkan UMKM Anda dengan layanan profesional dan terjangkau
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              className="animate-fade-in"
            />
          ))}
        </div>
      </div>
    </section>

      {/* Advantages Section */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Mengapa Memilih Denara Creative?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan yang membuat kami menjadi partner terpercaya untuk digitalisasi UMKM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:bg-[#9B1B60] transition-all duration-300">
                    <div className="text-[#9B1B60] group-hover:text-white transition-colors duration-300">
                      {advantage.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Portfolio Terbaru
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lihat hasil karya terbaik kami dalam membantu UMKM berkembang
            </p>
          </div>

          <PortfolioGrid showAll={false} />

          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-flex items-center space-x-2 bg-[#9B1B60] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#7a1549] transition-colors duration-200"
            >
              <span>Lihat Semua Portfolio</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Testimoni Klien
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengarkan cerita sukses UMKM yang telah berkembang bersama kami
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#9B1B60] to-[#7a1549] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-poppins mb-6">
            Siap Mengembangkan Bisnis Anda?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Konsultasikan kebutuhan digitalisasi UMKM Anda dengan tim ahli kami. 
            Dapatkan solusi terbaik yang sesuai dengan budget dan target bisnis Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281377243047?text=Halo%20Denara%20Creative,%20saya%20ingin%20konsultasi%20tentang%20layanan%20digitalisasi%20UMKM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-white text-[#9B1B60] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Konsultasi Gratis</span>
            </a>
            
            <a
              href="/pricing"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#9B1B60] transition-all duration-300"
            >
              <span>Lihat Paket Harga</span>
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
