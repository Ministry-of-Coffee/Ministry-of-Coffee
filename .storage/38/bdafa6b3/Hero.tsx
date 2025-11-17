import { useLanguage } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Coffee } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToLocation = () => {
    document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/ministry_coffee_main.jpg)',
          filter: 'brightness(0.4)',
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Coffee className="h-16 w-16 text-amber-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>
        <Button
          size="lg"
          onClick={scrollToLocation}
          className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6"
        >
          {t.hero.cta}
        </Button>
      </div>
    </section>
  );
};