'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PortofolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface PortofolioGridProps {
  items?: PortofolioItem[];
  showAll?: boolean;
}

const defaultItems: PortofolioItem[] = [
  {
    id: 1,
    title: "Branding Warung Makan Sederhana",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
    description: "Desain logo dan identitas visual untuk warung makan lokal"
  },
  {
    id: 2,
    title: "Website Toko Online Fashion",
    category: "Website",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
    description: "E-commerce website dengan sistem pembayaran terintegrasi"
  },
  {
    id: 3,
    title: "Social Media Campaign Kafe",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop",
    description: "Strategi konten dan manajemen media sosial untuk kafe lokal"
  },
  {
    id: 4,
    title: "Fotografi Produk Makanan",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
    description: "Sesi foto produk makanan untuk katalog online"
  },
  {
    id: 5,
    title: "Rebranding Salon Kecantikan",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=300&fit=crop",
    description: "Pembaruan identitas visual dan materi promosi"
  },
  {
    id: 6,
    title: "Landing Page Jasa Service",
    category: "Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    description: "Website profesional untuk jasa service elektronik"
  },
  {
    id: 7,
    title: "Video Promosi Produk UMKM",
    category: "Video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
    description: "Video promosi produk untuk media sosial dan website"
  },
  {
    id: 8,
    title: "Kemasan Produk Makanan",
    category: "Design",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=300&fit=crop",
    description: "Desain kemasan yang menarik dan fungsional"
  }
];

const PortofolioGrid = ({ items = defaultItems, showAll = false }: PortofolioGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];
  
  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const displayItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-[#9B1B60] text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayItems.map((item, index) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => setSelectedItem(item)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#9B1B60] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>

                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-[#9B1B60] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                    Lihat Detail
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#9B1B60] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {/* {!showAll && filteredItems.length > 6 && (
        <div className="text-center">
          <button className="bg-[#9B1B60] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#7a1549] transition-colors duration-200">
            Lihat Semua Portfolio
          </button>
        </div>
      )} */}

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedItem(null)}>
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Image */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover rounded-t-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-[#9B1B60] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedItem.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedItem.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{selectedItem.description}</p>
                
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/6281377243047?text=Halo%20Denara%20Creative,%20saya%20tertarik%20dengan%20portfolio%20ini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#9B1B60] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#7a1549] transition-colors duration-200"
                  >
                    Konsultasi Project Serupa
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;