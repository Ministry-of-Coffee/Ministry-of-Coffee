import { LanguageProvider, LanguageSwitcher, useLanguage } from '@/components/LanguageSwitcher';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Features } from '@/components/Features';
import { Gallery } from '@/components/Gallery';
import { Location } from '@/components/Location';
import { Facebook } from 'lucide-react';

const Navigation = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-amber-600">Ministry of Coffee</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              {t.nav.features}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              {t.nav.location}
            </button>
          </div>

          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-amber-400 mb-2">Ministry of Coffee</h3>
            <p className="text-gray-400">Marszałkowska 27/35, 00-639 Warszawa</p>
            <p className="text-gray-400">+48 780 788 154</p>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-3">{t.footer.followUs}</p>
            <a
              href="https://www.facebook.com/MinisterstwoKawy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-amber-400 transition-colors"
            >
              <Facebook className="h-6 w-6" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

const IndexContent = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Location />
        <Footer />
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
}