import { useLanguage } from './LanguageSwitcher';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

export const Location = () => {
  const { t } = useLanguage();

  const address = 'Marszałkowska 27/35, 00-639 Warszawa, Poland';
  const phone = '+48 780 788 154';
  const latitude = 52.2187904;
  const longitude = 21.018337;
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          {t.location.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.location.address}</h3>
                    <p className="text-gray-700">{address}</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.location.phone}</h3>
                    <a
                      href={`tel:${phone}`}
                      className="text-amber-600 hover:text-amber-700 font-medium"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-amber-600 hover:bg-amber-700"
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t.location.getDirections}
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5234!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzA3LjYiTiAyMcKwMDEnMDYuMCJF!5e0!3m2!1sen!2spl!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ministry of Coffee Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};