import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const detailedTestimonials = [
  {
    id: 1,
    name: "Sari Dewi",
    business: "Warung Sari Organik",
    location: "Jakarta Selatan",
    image: "/testimonials/sari.jpg",
    rating: 5,
    text: "Denara Creative benar-benar mengubah bisnis kami! Dari yang awalnya hanya warung kecil, sekarang kami punya brand identity yang kuat dan website yang profesional. Penjualan meningkat 150% dalam 6 bulan!",
    services: ["Branding", "Website", "Social Media"],
    beforeAfter: {
      before: "Penjualan 20 porsi/hari",
      after: "Penjualan 50 porsi/hari"
    }
  },
  {
    id: 2,
    name: "Budi Hartono",
    business: "Konveksi Budi Jaya",
    location: "Bandung",
    image: "/testimonials/budi.jpg",
    rating: 5,
    text: "Tim Denara Creative sangat profesional dan memahami kebutuhan UMKM. Website toko online yang mereka buat sangat user-friendly. Sekarang kami bisa menjual ke seluruh Indonesia dengan mudah.",
    services: ["E-commerce", "Digital Marketing", "Fotografi Produk"],
    beforeAfter: {
      before: "Penjualan lokal saja",
      after: "Penjualan ke 15 kota"
    }
  },
  {
    id: 3,
    name: "Maya Sari",
    business: "Kue Maya Homemade",
    location: "Surabaya",
    image: "/testimonials/maya.jpg",
    rating: 5,
    text: "Fotografi produk dari Denara Creative luar biasa! Foto-foto kue kami jadi terlihat sangat menggugah selera. Media sosial kami juga dikelola dengan sangat baik, engagement meningkat drastis.",
    services: ["Fotografi", "Social Media Management", "Content Creation"],
    beforeAfter: {
      before: "100 followers Instagram",
      after: "5000 followers Instagram"
    }
  },
  {
    id: 4,
    name: "Ahmad Rizki",
    business: "Bengkel Motor Rizki",
    location: "Yogyakarta",
    image: "/testimonials/ahmad.jpg",
    rating: 5,
    text: "Awalnya saya ragu untuk digitalisasi bengkel. Tapi setelah bekerja sama dengan Denara Creative, sekarang bengkel saya punya website booking online dan sistem manajemen yang modern. Pelanggan jadi lebih mudah booking service.",
    services: ["Website", "Sistem Booking", "Branding"],
    beforeAfter: {
      before: "10 pelanggan/hari",
      after: "25 pelanggan/hari"
    }
  },
  {
    id: 5,
    name: "Rina Wati",
    business: "Fashion Rina Collection",
    location: "Medan",
    image: "/testimonials/rina.jpg",
    rating: 5,
    text: "Denara Creative membantu kami dari zero to hero! Mulai dari logo, kemasan, website, sampai strategi digital marketing. Sekarang brand kami sudah dikenal di seluruh Sumatera. Terima kasih tim Denara!",
    services: ["Full Branding", "E-commerce", "Digital Marketing", "Packaging Design"],
    beforeAfter: {
      before: "Omzet 5 juta/bulan",
      after: "Omzet 25 juta/bulan"
    }
  },
  {
    id: 6,
    name: "Dedi Kurniawan",
    business: "Catering Dedi Lezat",
    location: "Semarang",
    image: "/testimonials/dedi.jpg",
    rating: 5,
    text: "Pelayanan Denara Creative sangat memuaskan! Mereka tidak hanya membuat website dan branding, tapi juga memberikan training cara mengelola media sosial. Sekarang kami bisa mandiri dalam digital marketing.",
    services: ["Website", "Branding", "Training Digital Marketing"],
    beforeAfter: {
      before: "5 event/bulan",
      after: "20 event/bulan"
    }
  }
];

const stats = [
  {
    number: "98%",
    label: "Tingkat Kepuasan",
    description: "Klien yang puas dengan layanan kami"
  },
  {
    number: "150%",
    label: "Rata-rata Peningkatan",
    description: "Peningkatan penjualan klien setelah digitalisasi"
  },
  {
    number: "85%",
    label: "Repeat Client",
    description: "Klien yang menggunakan layanan kami berulang"
  },
  {
    number: "30 Hari",
    label: "Waktu Implementasi",
    description: "Rata-rata waktu penyelesaian project"
  }
];

const successStories = [
  {
    title: "Transformasi Warung Tradisional Menjadi Brand Modern",
    client: "Warung Sari Organik",
    challenge: "Warung tradisional dengan penjualan stagnan dan tidak memiliki identitas brand yang jelas",
    solution: "Rebranding lengkap, pembuatan website, dan strategi digital marketing terintegrasi",
    result: "Peningkatan penjualan 150%, ekspansi ke 3 cabang baru, dan brand recognition yang kuat",
    duration: "6 bulan",
    image: "/case-studies/warung-sari.jpg"
  },
  {
    title: "Digitalisasi Bengkel Motor Tradisional",
    client: "Bengkel Motor Rizki",
    challenge: "Sistem booking manual, tidak ada online presence, sulit bersaing dengan bengkel modern",
    solution: "Pembuatan website dengan sistem booking online, branding modern, dan digital marketing",
    result: "Peningkatan pelanggan 150%, sistem operasional lebih efisien, brand image yang profesional",
    duration: "4 bulan",
    image: "/case-studies/bengkel-rizki.jpg"
  },
  {
    title: "Ekspansi UMKM Fashion ke Pasar Nasional",
    client: "Fashion Rina Collection",
    challenge: "Penjualan terbatas di area lokal, tidak ada platform online, brand awareness rendah",
    solution: "E-commerce development, full branding package, digital marketing strategy, packaging design",
    result: "Ekspansi ke seluruh Sumatera, peningkatan omzet 400%, brand recognition nasional",
    duration: "8 bulan",
    image: "/case-studies/rina-fashion.jpg"
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#9B1B60] to-[#7a1549] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold font-poppins mb-6">
              Testimoni Klien
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Dengarkan cerita sukses UMKM yang telah berkembang dan naik kelas bersama Denara Creative Digital
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#9B1B60] font-poppins mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Testimonial Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Apa Kata Klien Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimoni langsung dari UMKM yang telah merasakan dampak positif digitalisasi bersama kami
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Testimoni Lengkap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Baca pengalaman lengkap klien kami dalam mengembangkan bisnis mereka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9B1B60] to-[#7a1549] rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">{testimonial.name}</h3>
                    <p className="text-[#9B1B60] font-semibold">{testimonial.business}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <div className="flex items-center mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Layanan yang Digunakan:</h4>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.services.map((service, index) => (
                        <span key={index} className="px-3 py-1 bg-[#9B1B60] text-white text-sm rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm mb-1">Sebelum:</h5>
                      <p className="text-sm text-gray-600">{testimonial.beforeAfter.before}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm mb-1">Sesudah:</h5>
                      <p className="text-sm text-[#9B1B60] font-semibold">{testimonial.beforeAfter.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Studi Kasus Sukses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pelajari bagaimana kami membantu UMKM mencapai transformasi digital yang sukses
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
                      {story.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[#9B1B60] mb-2">Tantangan:</h4>
                        <p className="text-gray-600">{story.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#9B1B60] mb-2">Solusi:</h4>
                        <p className="text-gray-600">{story.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#9B1B60] mb-2">Hasil:</h4>
                        <p className="text-gray-600">{story.result}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="bg-gradient-to-br from-[#9B1B60] to-[#7a1549] rounded-xl p-6 text-white text-center">
                      <h4 className="text-lg font-bold font-poppins mb-2">{story.client}</h4>
                      <p className="text-sm text-gray-200 mb-4">Durasi Project: {story.duration}</p>
                      <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#9B1B60] to-[#7a1549] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-poppins mb-6">
            Siap Menjadi Testimoni Sukses Berikutnya?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Bergabunglah dengan ratusan UMKM yang telah merasakan transformasi digital bersama kami. 
            Konsultasikan kebutuhan bisnis Anda sekarang juga!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Denara%20Creative,%20saya%20tertarik%20dengan%20testimoni%20klien%20dan%20ingin%20konsultasi%20digitalisasi%20bisnis"
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