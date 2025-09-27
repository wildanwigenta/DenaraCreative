import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Sarah Wijaya",
    position: "Creative Director",
    description: "Berpengalaman 8+ tahun dalam branding dan desain kreatif",
    image: "/team/sarah.jpg"
  },
  {
    name: "Budi Santoso",
    position: "Web Developer",
    description: "Spesialis pengembangan website dan e-commerce",
    image: "/team/budi.jpg"
  },
  {
    name: "Maya Putri",
    position: "Digital Marketing Specialist",
    description: "Ahli strategi media sosial dan digital advertising",
    image: "/team/maya.jpg"
  },
  {
    name: "Andi Rahman",
    position: "Photographer & Videographer",
    description: "Profesional fotografi dan videografi produk",
    image: "/team/andi.jpg"
  }
];

const values = [
  {
    icon: (
      <svg className="w-12 h-12 text-[#9B1B60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Kualitas Terjamin",
    description: "Komitmen memberikan hasil terbaik dengan standar profesional tinggi"
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#9B1B60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Inovasi Berkelanjutan",
    description: "Selalu mengikuti tren terbaru dan teknologi digital terdepan"
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#9B1B60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Partnership Jangka Panjang",
    description: "Membangun hubungan yang berkelanjutan dengan setiap klien"
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#9B1B60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    title: "Harga Transparan",
    description: "Tidak ada biaya tersembunyi, semua transparan dan terjangkau"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#9B1B60] to-[#7a1549] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold font-poppins mb-6">
              Tentang Denara Creative
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Partner terpercaya untuk digitalisasi UMKM dengan solusi kreatif dan inovatif
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-6">
                Siapa Kami?
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-[#9B1B60]">Denara Creative Digital</strong> adalah agensi kreatif yang berfokus pada 
                  digitalisasi UMKM (Usaha Mikro, Kecil, dan Menengah) di Indonesia. Kami memahami bahwa 
                  setiap UMKM memiliki potensi besar untuk berkembang di era digital ini.
                </p>
                <p>
                  Dengan pengalaman lebih dari 5 tahun di industri kreatif dan digital marketing, 
                  kami telah membantu ratusan UMKM untuk "naik kelas" melalui transformasi digital 
                  yang tepat sasaran dan terjangkau.
                </p>
                <p>
                  Tim kami terdiri dari profesional muda yang berpengalaman di bidang desain grafis, 
                  web development, digital marketing, fotografi, dan videografi. Kami percaya bahwa 
                  setiap bisnis, sekecil apapun, berhak mendapatkan layanan kreatif berkualitas tinggi.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#9B1B60] to-[#7a1549] rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold font-poppins mb-2">100+</div>
                    <div className="text-sm text-gray-200">UMKM Terlayani</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold font-poppins mb-2">50+</div>
                    <div className="text-sm text-gray-200">Project Selesai</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold font-poppins mb-2">98%</div>
                    <div className="text-sm text-gray-200">Kepuasan Klien</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold font-poppins mb-2">5+</div>
                    <div className="text-sm text-gray-200">Tahun Pengalaman</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#9B1B60] rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-poppins">Visi</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Menjadi agensi kreatif digital terdepan yang memberdayakan UMKM Indonesia 
                untuk berkembang dan bersaing di era digital melalui solusi kreatif yang 
                inovatif, terjangkau, dan berkelanjutan.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#9B1B60] rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-poppins">Misi</h3>
              </div>
              <ul className="space-y-3 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#9B1B60] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Memberikan layanan kreatif berkualitas tinggi dengan harga terjangkau
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#9B1B60] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Membantu UMKM membangun identitas brand yang kuat dan memorable
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#9B1B60] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Mengoptimalkan kehadiran digital untuk meningkatkan penjualan
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#9B1B60] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Memberikan edukasi dan pendampingan berkelanjutan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap layanan yang kami berikan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Tim Kreatif Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bertemu dengan tim profesional yang siap membantu mengembangkan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#9B1B60] to-[#7a1549] rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">
                  {member.name}
                </h3>
                <p className="text-[#9B1B60] font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#9B1B60] to-[#7a1549] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-poppins mb-6">
            Siap Berkolaborasi dengan Kami?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Mari diskusikan bagaimana kami dapat membantu mengembangkan bisnis Anda 
            dengan solusi kreatif yang tepat sasaran.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Denara%20Creative,%20saya%20ingin%20konsultasi%20tentang%20layanan%20digitalisasi%20UMKM"
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
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#9B1B60] transition-all duration-300"
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