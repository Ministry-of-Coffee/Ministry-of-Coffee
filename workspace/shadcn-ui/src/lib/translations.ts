export type Language = 'pl' | 'en' | 'tr' | 'uk';

export interface Translations {
  nav: {
    about: string;
    features: string;
    gallery: string;
    location: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    rating: string;
    reviews: string;
    priceRange: string;
    openingHours: string;
    hours: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
  };
  features: {
    title: string;
    highlights: {
      title: string;
      items: string[];
    };
    offerings: {
      title: string;
      items: string[];
    };
    amenities: {
      title: string;
      items: string[];
    };
    atmosphere: {
      title: string;
      items: string[];
    };
    accessibility: {
      title: string;
      wheelchairSeating: string;
      wheelchairToilet: string;
    };
    serviceOptions: {
      title: string;
      outdoorSeating: string;
      takeaway: string;
      dineIn: string;
    };
    popularFor: {
      title: string;
      items: string[];
    };
    dining: {
      title: string;
      items: string[];
    };
    payments: {
      title: string;
      items: string[];
    };
    pets: {
      title: string;
      dogsAllowed: string;
    };
    parking: {
      title: string;
      info: string;
    };
  };
  gallery: {
    title: string;
  };
  location: {
    title: string;
    address: string;
    phone: string;
    getDirections: string;
  };
  footer: {
    followUs: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  pl: {
    nav: {
      about: 'O nas',
      features: 'Usługi',
      gallery: 'Galeria',
      location: 'Lokalizacja',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Ministry of Coffee',
      subtitle: 'Przyziemna kawiarnia z miejscami na chodniku, serwująca specjalistyczną kawę i słodkie przysmaki.',
      cta: 'Odwiedź nas',
    },
    about: {
      title: 'O Ministry of Coffee',
      description: 'Przyziemna kawiarnia z miejscami na chodniku, serwująca specjalistyczną kawę i słodkie przysmaki. Przytulna i cicha atmosfera idealna do pracy. Modne i swobodne środowisko popularne wśród studentów i turystów.',
      rating: 'Ocena',
      reviews: 'opinii',
      priceRange: 'Zakres cenowy: zł 20-40',
      openingHours: 'Godziny otwarcia',
      hours: {
        monday: 'Poniedziałek: 08:00-20:00',
        tuesday: 'Wtorek: 08:00-20:00',
        wednesday: 'Środa: 08:00-20:00',
        thursday: 'Czwartek: 08:00-20:00',
        friday: 'Piątek: 08:00-20:00',
        saturday: 'Sobota: 08:30-20:00',
        sunday: 'Niedziela: 08:30-20:00',
      },
    },
    features: {
      title: 'Nasze Usługi',
      highlights: {
        title: 'Wyróżnienia',
        items: ['Świetna kawa', 'Świetne desery', 'Świetny wybór herbat'],
      },
      offerings: {
        title: 'Oferta',
        items: [
          'Alkohol',
          'Piwo',
          'Kawa',
          'Szybkie przekąski',
          'Małe talerze',
          'Opcje wegańskie',
          'Opcje wegetariańskie',
          'Wino',
        ],
      },
      amenities: {
        title: 'Udogodnienia',
        items: ['Bar na miejscu', 'Toaleta', 'Wi-Fi', 'Darmowe Wi-Fi'],
      },
      atmosphere: {
        title: 'Atmosfera',
        items: ['Swobodna', 'Przytulna', 'Cicha', 'Modna'],
      },
      accessibility: {
        title: 'Dostępność',
        wheelchairSeating: 'Miejsca dostępne dla wózków inwalidzkich',
        wheelchairToilet: 'Toaleta dostępna dla wózków inwalidzkich',
      },
      serviceOptions: {
        title: 'Opcje Serwisu',
        outdoorSeating: 'Miejsca na zewnątrz',
        takeaway: 'Na wynos',
        dineIn: 'Na miejscu',
      },
      popularFor: {
        title: 'Popularne dla',
        items: ['Samotne posiłki', 'Dobre do pracy na laptopie'],
      },
      dining: {
        title: 'Opcje Posiłków',
        items: ['Śniadanie', 'Deser', 'Miejsca siedzące'],
      },
      payments: {
        title: 'Płatności',
        items: ['Karty kredytowe', 'Karty debetowe', 'Płatności mobilne NFC'],
      },
      pets: {
        title: 'Zwierzęta',
        dogsAllowed: 'Psy dozwolone',
      },
      parking: {
        title: 'Parking',
        info: 'Trudno znaleźć miejsce',
      },
    },
    gallery: {
      title: 'Galeria',
    },
    location: {
      title: 'Lokalizacja',
      address: 'Adres',
      phone: 'Telefon',
      getDirections: 'Uzyskaj wskazówki',
    },
    footer: {
      followUs: 'Śledź nas',
      copyright: '© 2025 Ministry of Coffee. Wszelkie prawa zastrzeżone.',
    },
  },
  en: {
    nav: {
      about: 'About',
      features: 'Features',
      gallery: 'Gallery',
      location: 'Location',
      contact: 'Contact',
    },
    hero: {
      title: 'Ministry of Coffee',
      subtitle: 'Down-to-earth coffee shop with sidewalk seating brewing specialty coffee, plus sweet treats.',
      cta: 'Visit Us',
    },
    about: {
      title: 'About Ministry of Coffee',
      description: 'Down-to-earth coffee shop with sidewalk seating brewing specialty coffee, plus sweet treats. Cozy and quiet atmosphere perfect for working. Trendy and casual environment popular among university students and tourists.',
      rating: 'Rating',
      reviews: 'reviews',
      priceRange: 'Price range: zł 20-40',
      openingHours: 'Opening Hours',
      hours: {
        monday: 'Monday: 08:00-20:00',
        tuesday: 'Tuesday: 08:00-20:00',
        wednesday: 'Wednesday: 08:00-20:00',
        thursday: 'Thursday: 08:00-20:00',
        friday: 'Friday: 08:00-20:00',
        saturday: 'Saturday: 08:30-20:00',
        sunday: 'Sunday: 08:30-20:00',
      },
    },
    features: {
      title: 'Our Features',
      highlights: {
        title: 'Highlights',
        items: ['Great coffee', 'Great dessert', 'Great tea selection'],
      },
      offerings: {
        title: 'Offerings',
        items: [
          'Alcohol',
          'Beer',
          'Coffee',
          'Quick bite',
          'Small plates',
          'Vegan options',
          'Vegetarian options',
          'Wine',
        ],
      },
      amenities: {
        title: 'Amenities',
        items: ['Bar on site', 'Toilet', 'Wi-Fi', 'Free Wi-Fi'],
      },
      atmosphere: {
        title: 'Atmosphere',
        items: ['Casual', 'Cosy', 'Quiet', 'Trendy'],
      },
      accessibility: {
        title: 'Accessibility',
        wheelchairSeating: 'Wheelchair-accessible seating',
        wheelchairToilet: 'Wheelchair-accessible toilet',
      },
      serviceOptions: {
        title: 'Service Options',
        outdoorSeating: 'Outdoor seating',
        takeaway: 'Takeaway',
        dineIn: 'Dine-in',
      },
      popularFor: {
        title: 'Popular For',
        items: ['Solo dining', 'Good for working on laptop'],
      },
      dining: {
        title: 'Dining Options',
        items: ['Breakfast', 'Dessert', 'Seating'],
      },
      payments: {
        title: 'Payments',
        items: ['Credit cards', 'Debit cards', 'NFC mobile payments'],
      },
      pets: {
        title: 'Pets',
        dogsAllowed: 'Dogs allowed',
      },
      parking: {
        title: 'Parking',
        info: 'Difficult to find a space',
      },
    },
    gallery: {
      title: 'Gallery',
    },
    location: {
      title: 'Location',
      address: 'Address',
      phone: 'Phone',
      getDirections: 'Get Directions',
    },
    footer: {
      followUs: 'Follow Us',
      copyright: '© 2025 Ministry of Coffee. All rights reserved.',
    },
  },
  tr: {
    nav: {
      about: 'Hakkımızda',
      features: 'Özellikler',
      gallery: 'Galeri',
      location: 'Konum',
      contact: 'İletişim',
    },
    hero: {
      title: 'Ministry of Coffee',
      subtitle: 'Özel kahve ve tatlı ikramlar sunan, kaldırımda oturma alanları olan sade bir kahve dükkanı.',
      cta: 'Bizi Ziyaret Edin',
    },
    about: {
      title: 'Ministry of Coffee Hakkında',
      description: 'Özel kahve ve tatlı ikramlar sunan, kaldırımda oturma alanları olan sade bir kahve dükkanı. Çalışmak için mükemmel rahat ve sessiz atmosfer. Üniversite öğrencileri ve turistler arasında popüler olan trend ve rahat ortam.',
      rating: 'Değerlendirme',
      reviews: 'yorum',
      priceRange: 'Fiyat aralığı: zł 20-40',
      openingHours: 'Açılış Saatleri',
      hours: {
        monday: 'Pazartesi: 08:00-20:00',
        tuesday: 'Salı: 08:00-20:00',
        wednesday: 'Çarşamba: 08:00-20:00',
        thursday: 'Perşembe: 08:00-20:00',
        friday: 'Cuma: 08:00-20:00',
        saturday: 'Cumartesi: 08:30-20:00',
        sunday: 'Pazar: 08:30-20:00',
      },
    },
    features: {
      title: 'Özelliklerimiz',
      highlights: {
        title: 'Öne Çıkanlar',
        items: ['Harika kahve', 'Harika tatlı', 'Harika çay seçimi'],
      },
      offerings: {
        title: 'Teklifler',
        items: [
          'Alkol',
          'Bira',
          'Kahve',
          'Hızlı atıştırmalık',
          'Küçük tabaklar',
          'Vegan seçenekler',
          'Vejetaryen seçenekler',
          'Şarap',
        ],
      },
      amenities: {
        title: 'Olanaklar',
        items: ['Yerinde bar', 'Tuvalet', 'Wi-Fi', 'Ücretsiz Wi-Fi'],
      },
      atmosphere: {
        title: 'Atmosfer',
        items: ['Rahat', 'Samimi', 'Sessiz', 'Trend'],
      },
      accessibility: {
        title: 'Erişilebilirlik',
        wheelchairSeating: 'Tekerlekli sandalye erişimli oturma',
        wheelchairToilet: 'Tekerlekli sandalye erişimli tuvalet',
      },
      serviceOptions: {
        title: 'Servis Seçenekleri',
        outdoorSeating: 'Açık hava oturma',
        takeaway: 'Paket servis',
        dineIn: 'İçeride yemek',
      },
      popularFor: {
        title: 'Popüler Olan',
        items: ['Tek başına yemek', 'Dizüstü bilgisayarda çalışmak için iyi'],
      },
      dining: {
        title: 'Yemek Seçenekleri',
        items: ['Kahvaltı', 'Tatlı', 'Oturma'],
      },
      payments: {
        title: 'Ödemeler',
        items: ['Kredi kartları', 'Banka kartları', 'NFC mobil ödemeler'],
      },
      pets: {
        title: 'Evcil Hayvanlar',
        dogsAllowed: 'Köpeklere izin verilir',
      },
      parking: {
        title: 'Otopark',
        info: 'Yer bulmak zor',
      },
    },
    gallery: {
      title: 'Galeri',
    },
    location: {
      title: 'Konum',
      address: 'Adres',
      phone: 'Telefon',
      getDirections: 'Yol Tarifi Al',
    },
    footer: {
      followUs: 'Bizi Takip Edin',
      copyright: '© 2025 Ministry of Coffee. Tüm hakları saklıdır.',
    },
  },
  uk: {
    nav: {
      about: 'Про нас',
      features: 'Особливості',
      gallery: 'Галерея',
      location: 'Розташування',
      contact: 'Контакти',
    },
    hero: {
      title: 'Ministry of Coffee',
      subtitle: 'Проста кав\'ярня з місцями на тротуарі, де готують спеціальну каву та солодощі.',
      cta: 'Відвідайте нас',
    },
    about: {
      title: 'Про Ministry of Coffee',
      description: 'Проста кав\'ярня з місцями на тротуарі, де готують спеціальну каву та солодощі. Затишна та тиха атмосфера ідеальна для роботи. Трендове та невимушене середовище популярне серед студентів університету та туристів.',
      rating: 'Рейтинг',
      reviews: 'відгуків',
      priceRange: 'Ціновий діапазон: zł 20-40',
      openingHours: 'Години роботи',
      hours: {
        monday: 'Понеділок: 08:00-20:00',
        tuesday: 'Вівторок: 08:00-20:00',
        wednesday: 'Середа: 08:00-20:00',
        thursday: 'Четвер: 08:00-20:00',
        friday: 'П\'ятниця: 08:00-20:00',
        saturday: 'Субота: 08:30-20:00',
        sunday: 'Неділя: 08:30-20:00',
      },
    },
    features: {
      title: 'Наші Особливості',
      highlights: {
        title: 'Особливості',
        items: ['Чудова кава', 'Чудовий десерт', 'Чудовий вибір чаю'],
      },
      offerings: {
        title: 'Пропозиції',
        items: [
          'Алкоголь',
          'Пиво',
          'Кава',
          'Швидка закуска',
          'Малі страви',
          'Веганські варіанти',
          'Вегетаріанські варіанти',
          'Вино',
        ],
      },
      amenities: {
        title: 'Зручності',
        items: ['Бар на місці', 'Туалет', 'Wi-Fi', 'Безкоштовний Wi-Fi'],
      },
      atmosphere: {
        title: 'Атмосфера',
        items: ['Невимушена', 'Затишна', 'Тиха', 'Трендова'],
      },
      accessibility: {
        title: 'Доступність',
        wheelchairSeating: 'Місця для інвалідних візків',
        wheelchairToilet: 'Туалет для інвалідних візків',
      },
      serviceOptions: {
        title: 'Варіанти Обслуговування',
        outdoorSeating: 'Місця на вулиці',
        takeaway: 'На винос',
        dineIn: 'На місці',
      },
      popularFor: {
        title: 'Популярно Для',
        items: ['Самотня їжа', 'Добре для роботи на ноутбуці'],
      },
      dining: {
        title: 'Варіанти Харчування',
        items: ['Сніданок', 'Десерт', 'Місця для сидіння'],
      },
      payments: {
        title: 'Платежі',
        items: ['Кредитні картки', 'Дебетові картки', 'NFC мобільні платежі'],
      },
      pets: {
        title: 'Домашні тварини',
        dogsAllowed: 'Собаки дозволені',
      },
      parking: {
        title: 'Паркування',
        info: 'Важко знайти місце',
      },
    },
    gallery: {
      title: 'Галерея',
    },
    location: {
      title: 'Розташування',
      address: 'Адреса',
      phone: 'Телефон',
      getDirections: 'Отримати маршрут',
    },
    footer: {
      followUs: 'Слідкуйте за нами',
      copyright: '© 2025 Ministry of Coffee. Всі права захищені.',
    },
  },
};