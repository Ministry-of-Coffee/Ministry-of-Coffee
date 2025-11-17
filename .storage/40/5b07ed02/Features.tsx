import { useLanguage } from './LanguageSwitcher';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coffee, Sparkles, Wifi, Heart, Accessibility, UtensilsCrossed, CreditCard, PawPrint, Car } from 'lucide-react';

export const Features = () => {
  const { t } = useLanguage();

  const featureSections = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: t.features.highlights.title,
      items: t.features.highlights.items,
      color: 'text-amber-600',
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: t.features.offerings.title,
      items: t.features.offerings.items,
      color: 'text-brown-600',
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: t.features.amenities.title,
      items: t.features.amenities.items,
      color: 'text-blue-600',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: t.features.atmosphere.title,
      items: t.features.atmosphere.items,
      color: 'text-pink-600',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          {t.features.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featureSections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className={section.color}>{section.icon}</span>
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <Accessibility className="h-5 w-5 text-green-600" />
                {t.features.accessibility.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>✓ {t.features.accessibility.wheelchairSeating}</p>
              <p>✓ {t.features.accessibility.wheelchairToilet}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <UtensilsCrossed className="h-5 w-5 text-orange-600" />
                {t.features.serviceOptions.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>✓ {t.features.serviceOptions.outdoorSeating}</p>
              <p>✓ {t.features.serviceOptions.takeaway}</p>
              <p>✓ {t.features.serviceOptions.dineIn}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <CreditCard className="h-5 w-5 text-purple-600" />
                {t.features.payments.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {t.features.payments.items.map((item, idx) => (
                <p key={idx}>✓ {item}</p>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <PawPrint className="h-5 w-5 text-amber-600" />
                {t.features.pets.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">✓ {t.features.pets.dogsAllowed}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <Car className="h-5 w-5 text-gray-600" />
                {t.features.parking.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{t.features.parking.info}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};