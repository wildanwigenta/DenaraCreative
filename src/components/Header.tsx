'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#ffe3f1] rounded-lg flex items-center justify-center">
              {/* <span className="text-white font-bold text-lg">D</span> */}
               {/* // eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Denara Creative Logo"
                className="w-6 h-6 object-contain"
              />
            </div>
            <span className="font-poppins font-bold text-xl text-gray-900">
              Denara Creative
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-[#9B1B60] border-b-2 border-[#9B1B60] pb-1'
                    : 'text-gray-600 hover:text-[#9B1B60]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/6281377243047?text=Halo%20Denara%20Creative,%20saya%20ingin%20konsultasi%20tentang%20layanan%20digitalisasi%20UMKM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9B1B60] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#7a1549] transition-colors duration-200"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#9B1B60] focus:outline-none focus:text-[#9B1B60]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-[#9B1B60] bg-gray-50'
                      : 'text-gray-600 hover:text-[#9B1B60] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <a
                  href="https://wa.me/6281377243047?text=Halo%20Denara%20Creative,%20saya%20ingin%20konsultasi%20tentang%20layanan%20digitalisasi%20UMKM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#9B1B60] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#7a1549] transition-colors duration-200"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;