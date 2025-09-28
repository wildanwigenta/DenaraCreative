interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  ctaText = "Pilih Paket",
  ctaLink = "https://wa.me/6281377243047?text=Halo%20Denara%20Creative,%20saya%20tertarik%20dengan%20paket"
}: PricingCardProps) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
      isPopular ? 'ring-2 ring-[#9B1B60] scale-105' : 'border border-gray-200'
    }`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#9B1B60] to-[#7a1549] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            🔥 Paling Populer
          </span>
        </div>
      )}

      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          
          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline justify-center">
              <span className="text-4xl font-bold text-[#9B1B60]">{price}</span>
              <span className="text-gray-500 ml-2">/{period}</span>
            </div>
            {price !== 'Custom' && (
              <p className="text-sm text-gray-500 mt-2">Harga sudah termasuk konsultasi</p>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-[#9B1B60] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={`${ctaLink}%20${title}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
              isPopular
                ? 'bg-gradient-to-r from-[#9B1B60] to-[#7a1549] text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-100 text-gray-900 hover:bg-[#9B1B60] hover:text-white'
            }`}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            {ctaText}
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            💬 Konsultasi gratis sebelum memulai project
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;