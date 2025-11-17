import { useLanguage } from './LanguageSwitcher';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, DollarSign } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          {t.about.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.about.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <Card className="flex-1 min-w-[200px] border-[#b10c12]/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-[#b10c12] fill-[#b10c12]" />
                    <span className="font-semibold text-gray-900">{t.about.rating}</span>
                  </div>
                  <p className="text-2xl font-bold text-[#b10c12]">4.6</p>
                  <p className="text-sm text-gray-600">2,279 {t.about.reviews}</p>
                </CardContent>
              </Card>
              
              <Card className="flex-1 min-w-[200px]">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-gray-900">Price</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-700">{t.about.priceRange}</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-[#b10c12]" />
                <h3 className="text-xl font-semibold text-gray-900">{t.about.openingHours}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t.about.hours.monday.split(':')[0]}:</span>
                  <span className="font-medium text-gray-900">{t.about.hours.monday.split(': ')[1]}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t.about.hours.tuesday.split(':')[0]}:</span>
                  <span className="font-medium text-gray-900">{t.about.hours.tuesday.split(': ')[1]}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t.about.hours.wednesday.split(':')[0]}:</span>
                  <span className="font-medium text-gray-900">{t.about.hours.wednesday.split(': ')[1]}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t.about.hours.thursday.split(':')[0]}:</span>
                  <span className="font-medium text-gray-900">{t.about.hours.thursday.split(': ')[1]}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t.about.hours.friday.split(':')[0]}:</span>
                  <span className="font-medium text-gray-900">{t.about.hours.friday.split(': ')[1]}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t.about.hours.saturday.split(':')[0]}:</span>
                  <span className="font-medium text-gray-900">{t.about.hours.saturday.split(': ')[1]}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t.about.hours.sunday.split(':')[0]}:</span>
                  <span className="font-medium text-gray-900">{t.about.hours.sunday.split(': ')[1]}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};