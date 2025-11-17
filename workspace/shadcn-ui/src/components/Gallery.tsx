import { useLanguage } from './LanguageSwitcher';
import mainImage from '/public/assets/ministry_coffee_main.jpg';
import exteriorImage from '/public/assets/ministry_coffee_exterior_1.jpg';

export const Gallery = () => {
  const { t } = useLanguage();

  const images = [
    { src: mainImage, alt: 'Ministry of Coffee - Main' },
    { src: exteriorImage, alt: 'Ministry of Coffee - Exterior' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          {t.gallery.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};