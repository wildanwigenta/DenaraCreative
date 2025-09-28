import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: "5 Strategi Digital Marketing Terbaik untuk UMKM di 2024",
    excerpt: "Pelajari strategi digital marketing yang paling efektif untuk mengembangkan UMKM Anda di era digital. Dari social media marketing hingga SEO, temukan cara terbaik untuk menjangkau lebih banyak pelanggan.",
    category: "Digital Marketing",
    author: "Sarah Wijaya",
    date: "15 Januari 2024",
    readTime: "5 menit",
    image: "/blog/digital-marketing-umkm.jpg",
    tags: ["Digital Marketing", "UMKM", "Social Media", "SEO"]
  },
  {
    id: 2,
    title: "Panduan Lengkap Membuat Brand Identity yang Kuat untuk Bisnis Kecil",
    excerpt: "Brand identity yang kuat adalah kunci kesuksesan bisnis. Artikel ini membahas langkah-langkah praktis untuk menciptakan identitas brand yang memorable dan efektif untuk UMKM.",
    category: "Branding",
    author: "Maya Putri",
    date: "12 Januari 2024",
    readTime: "7 menit",
    image: "/blog/brand-identity-guide.jpg",
    tags: ["Branding", "Logo Design", "Brand Strategy", "UMKM"]
  },
  {
    id: 3,
    title: "Mengapa Website Penting untuk UMKM dan Bagaimana Memulainya",
    excerpt: "Di era digital ini, memiliki website bukan lagi pilihan tapi kebutuhan. Pelajari mengapa website sangat penting untuk UMKM dan bagaimana cara memulai membuat website yang efektif.",
    category: "Website Development",
    author: "Budi Santoso",
    date: "10 Januari 2024",
    readTime: "6 menit",
    image: "/blog/website-umkm-importance.jpg",
    tags: ["Website", "UMKM", "Online Presence", "E-commerce"]
  },
  {
    id: 4,
    title: "Tips Fotografi Produk yang Menarik dengan Budget Terbatas",
    excerpt: "Foto produk yang menarik dapat meningkatkan penjualan secara signifikan. Temukan tips dan trik fotografi produk profesional yang bisa dilakukan dengan budget minimal.",
    category: "Fotografi",
    author: "Andi Rahman",
    date: "8 Januari 2024",
    readTime: "4 menit",
    image: "/blog/product-photography-tips.jpg",
    tags: ["Fotografi", "Product Photography", "Marketing", "Visual Content"]
  },
  {
    id: 5,
    title: "Cara Meningkatkan Engagement di Media Sosial untuk Bisnis UMKM",
    excerpt: "Engagement yang tinggi di media sosial dapat meningkatkan brand awareness dan penjualan. Pelajari strategi praktis untuk meningkatkan interaksi dengan audience Anda.",
    category: "Social Media",
    author: "Sarah Wijaya",
    date: "5 Januari 2024",
    readTime: "5 menit",
    image: "/blog/social-media-engagement.jpg",
    tags: ["Social Media", "Engagement", "Content Strategy", "Instagram"]
  },
  {
    id: 6,
    title: "Transformasi Digital UMKM: Dari Offline ke Online dalam 30 Hari",
    excerpt: "Panduan step-by-step untuk mentransformasi bisnis offline menjadi online dalam waktu 30 hari. Mulai dari persiapan hingga implementasi strategi digital yang efektif.",
    category: "Digital Transformation",
    author: "Maya Putri",
    date: "3 Januari 2024",
    readTime: "8 menit",
    image: "/blog/digital-transformation-30days.jpg",
    tags: ["Digital Transformation", "UMKM", "Online Business", "Strategy"]
  },
  {
    id: 7,
    title: "ROI Digital Marketing: Cara Mengukur Keberhasilan Kampanye UMKM",
    excerpt: "Mengukur ROI digital marketing sangat penting untuk mengetahui efektivitas strategi Anda. Pelajari metrik-metrik penting dan cara menganalisis performa kampanye digital.",
    category: "Analytics",
    author: "Budi Santoso",
    date: "1 Januari 2024",
    readTime: "6 menit",
    image: "/blog/roi-digital-marketing.jpg",
    tags: ["ROI", "Analytics", "Digital Marketing", "Performance"]
  },
  {
    id: 8,
    title: "Tren Desain Grafis 2024 yang Cocok untuk UMKM",
    excerpt: "Ikuti tren desain grafis terbaru yang dapat membantu UMKM tampil lebih modern dan menarik. Dari minimalism hingga bold typography, temukan style yang tepat untuk brand Anda.",
    category: "Design",
    author: "Andi Rahman",
    date: "28 Desember 2023",
    readTime: "5 menit",
    image: "/blog/design-trends-2024.jpg",
    tags: ["Design Trends", "Graphic Design", "Branding", "Visual Identity"]
  },
  {
    id: 9,
    title: "E-commerce untuk Pemula: Memulai Toko Online yang Menguntungkan",
    excerpt: "Panduan komprehensif untuk memulai toko online dari nol. Mulai dari pemilihan platform, setup produk, hingga strategi marketing yang efektif untuk UMKM.",
    category: "E-commerce",
    author: "Maya Putri",
    date: "25 Desember 2023",
    readTime: "10 menit",
    image: "/blog/ecommerce-beginners-guide.jpg",
    tags: ["E-commerce", "Online Store", "UMKM", "Digital Business"]
  }
];

const categories = [
  { name: "Semua", count: 9 },
  { name: "Digital Marketing", count: 3 },
  { name: "Branding", count: 2 },
  { name: "Website Development", count: 1 },
  { name: "Fotografi", count: 1 },
  { name: "Social Media", count: 1 },
  { name: "E-commerce", count: 1 }
];

const featuredPost = blogPosts[0];
const recentPosts = blogPosts.slice(1, 4);
const allPosts = blogPosts.slice(4);

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#9B1B60] to-[#7a1549] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold font-poppins mb-6">
              Blog Denara Creative
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Tips, panduan, dan insight terbaru seputar digitalisasi UMKM, branding, dan digital marketing
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 font-poppins mb-4">Artikel Unggulan</h2>
          </div>
          
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <div className="w-full h-full bg-gradient-to-br from-[#9B1B60] to-[#7a1549] flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <p className="text-sm">Featured Article</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-[#9B1B60] text-white text-sm rounded-full mr-3">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-gray-500">{featuredPost.readTime} baca</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#9B1B60] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      {featuredPost.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                      <div className="text-sm text-gray-500">{featuredPost.date}</div>
                    </div>
                  </div>
                  
                  <a
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center space-x-2 bg-[#9B1B60] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7a1549] transition-colors duration-200"
                  >
                    <span>Baca Selengkapnya</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-[#9B1B60] hover:text-white transition-colors duration-200 shadow-sm"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-poppins mb-4">Artikel Terbaru</h2>
            <p className="text-xl text-gray-600">Update terbaru seputar tips dan strategi digitalisasi UMKM</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-br from-[#9B1B60] to-[#7a1549] flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <p className="text-xs">Blog Post</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-[#9B1B60] text-sm rounded-full font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} baca</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 font-poppins mb-3 group-hover:text-[#9B1B60] transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt.substring(0, 120)}...
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#9B1B60] rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{post.author}</span>
                    </div>
                    
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center space-x-1 text-[#9B1B60] font-semibold hover:text-[#7a1549] transition-colors duration-200"
                    >
                      <span>Baca</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-poppins mb-4">Semua Artikel</h2>
            <p className="text-xl text-gray-600">Koleksi lengkap artikel dan panduan untuk mengembangkan UMKM Anda</p>
          </div>
          
          <div className="space-y-8">
            {allPosts.map((post) => (
              <article key={post.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <div className="relative h-48 lg:h-32">
                      <div className="w-full h-full bg-gradient-to-br from-[#9B1B60] to-[#7a1549] rounded-xl flex items-center justify-center">
                        <div className="text-center text-white">
                          <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <p className="text-xs">Article</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 bg-[#9B1B60] text-white text-sm rounded-full mr-3">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{post.readTime} baca</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-3 group-hover:text-[#9B1B60] transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#9B1B60] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-semibold text-gray-700">{post.author}</span>
                      </div>
                      
                      <a
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center space-x-2 bg-[#9B1B60] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7a1549] transition-colors duration-200"
                      >
                        <span>Baca Selengkapnya</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center space-x-2 border-2 border-[#9B1B60] text-[#9B1B60] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#9B1B60] hover:text-white transition-all duration-300">
              <span>Muat Lebih Banyak</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-[#9B1B60] to-[#7a1549] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-poppins mb-6">
            Jangan Lewatkan Update Terbaru!
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Berlangganan newsletter kami untuk mendapatkan tips, panduan, dan insight terbaru 
            seputar digitalisasi UMKM langsung di inbox Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#9B1B60] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Berlangganan
            </button>
          </div>
          
          <p className="text-sm text-gray-200 mt-4">
            Kami menghargai privasi Anda. Unsubscribe kapan saja.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}