import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href?: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, features, href = '/pricing', className = '' }: ServiceCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${className}`}>
      <div className="p-8">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-[#9B1B60] to-[#7a1549] rounded-lg flex items-center justify-center mb-6 text-white">
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 font-poppins">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          
          {/* Features */}
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-[#9B1B60] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          {/* <Link
            href={href}
            className="inline-flex items-center justify-center w-full bg-[#9B1B60] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#7a1549] transition-colors duration-200 group"
          >
            <span>Lihat Paket Harga</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;