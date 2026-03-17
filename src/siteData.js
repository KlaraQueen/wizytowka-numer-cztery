export const siteData = {
  companyName: "DrivePro Rent",
  ownerName: "Karolina",

  images: {
    hero: require("./Images/hero.jpg"),
    team: require("./Images/team.jpg"),
    gallery: [
      { src: require("./Images/gallery-1.png"), alt: "Samochód 1" },
      { src: require("./Images/gallery-2.png"), alt: "Samochód 2" },
      { src: require("./Images/gallery-3.png"), alt: "Samochód 3" },
      { src: require("./Images/gallery-4.jpg"), alt: "Samochód 4" },
    ],
    logo: null,
  },

  hero: {
    title: "Profesjonalna wypożyczalnia samochodów.",
    subtitle: "Nowoczesna flota, elastyczne warunki wynajmu i obsługa na najwyższym poziomie. Wybierz auto dopasowane do Twoich potrzeb – od ekonomicznych sedanów po luksusowe SUV-y.",
    buttonText: "Zarezerwuj auto",
  },

  services: {
    label: "Nasza oferta",
    title: "Usługi wypożyczalni",
    items: [
      { icon: "car", title: "Wynajem krótkoterminowy", description: "Wypożycz auto na dzień, weekend lub tydzień. Elastyczne warunki i konkurencyjne ceny." },
      { icon: "calendar", title: "Wynajem długoterminowy", description: "Korzystne stawki miesięczne dla firm i osób prywatnych. Pełne wsparcie przez cały okres." },
      { icon: "delivery", title: "Dowóz auta", description: "Dostarczymy pojazd pod wskazany adres – na lotnisko, do hotelu lub biura." },
      { icon: "insurance", title: "Ubezpieczenie", description: "Kompleksowe ubezpieczenie OC/AC w cenie wynajmu. Bez ukrytych kosztów." },
      { icon: "support", title: "Wsparcie 24/7", description: "Pomoc drogowa i konsultacje przez całą dobę. Jesteśmy zawsze dostępni." },
    ],
  },

  pricing: {
    label: "Cennik",
    title: "Stawki wynajmu",
    subtitle: "Ceny zależą od modelu, okresu wynajmu i pakietu. Skontaktuj się po indywidualną wycenę.",
    items: [
      { name: "Klasa ekonomiczna", price: "od 149 zł/dzień", unit: "np. VW Polo, Skoda Fabia" },
      { name: "Klasa kompakt", price: "od 199 zł/dzień", unit: "np. VW Golf, Ford Focus" },
      { name: "SUV / crossover", price: "od 299 zł/dzień", unit: "np. Nissan Qashqai, Kia Sportage" },
      { name: "Klasa premium", price: "od 399 zł/dzień", unit: "np. BMW 3, Audi A4" },
      { name: "Wynajem miesięczny", price: "od 2999 zł/mies.", unit: "zależnie od modelu" },
      { name: "Dowóz auta", price: "od 99 zł", unit: "w obrębie miasta" },
    ],
  },

  team: {
    label: "Zespół",
    title: "Nasz zespół",
    description: "Doświadczeni specjaliści z branży motoryzacyjnej. Zapewniamy profesjonalną obsługę i wsparcie na każdym etapie wynajmu.",
    employees: [
      { name: "Marek Kowalski", role: "Dyrektor", description: "Kieruje firmą i nadzoruje jakość usług oraz rozwój floty." },
      { name: "Katarzyna Nowak", role: "Manager wynajmu", description: "Koordynuje rezerwacje i dopasowuje auta do potrzeb klientów." },
      { name: "Tomasz Wiśniewski", role: "Specjalista floty", description: "Dba o stan techniczny pojazdów i terminowe przeglądy." },
      { name: "Anna Lewandowska", role: "Obsługa klienta", description: "Pomaga w rezerwacjach i odpowiada na zapytania." },
      { name: "Piotr Dąbrowski", role: "Logistyka", description: "Organizuje dowóz i odbiór aut oraz wsparcie drogowe." },
    ],
  },

  reviews: {
    label: "Opinie",
    title: "Co mówią o nas klienci",
    items: [
      { author: "Anna K.", text: "Profesjonalna obsługa od A do Z. Auto w idealnym stanie, dokumenty bez problemu. Polecam DrivePro Rent każdemu, kto szuka rzetelnej wypożyczalni.", rating: 5 },
      { author: "Tomasz M.", text: "Wynajmowałem SUV na wyjazd rodzinny. Wszystko sprawnie, cena fair, auto czyste i sprawne. Na pewno wrócę przy kolejnej okazji.", rating: 5 },
      { author: "Magdalena W.", text: "Świetna firma! Korzystam z wynajmu długoterminowego od roku. Zawsze punktualnie, zero problemów. Profesjonalizm na najwyższym poziomie.", rating: 5 },
    ],
  },

  about: {
    label: "O nas",
    title: "Dlaczego warto wybrać DrivePro Rent?",
    description: "Działamy na rynku od lat, oferując nowoczesną flotę i transparentne warunki. Stawiamy na jakość obsługi, terminowość i elastyczność – dopasowujemy ofertę do indywidualnych potrzeb klientów.",
    works: [
      "nowoczesna flota regularnie odnawiana",
      "pełne ubezpieczenie OC/AC w cenie",
      "dowóz i odbiór auta pod wskazany adres",
      "wsparcie techniczne 24 godziny na dobę",
      "elastyczne warunki – wynajem od 1 dnia",
    ],
  },

  contact: {
    title: "Skontaktuj się",
    address: "DrivePro Rent Sp. z o.o.\nul. Przykładowa 15\n22-400 Przykład",
    nip: "000-000-00-00",
    regon: "000000000",
    phone: "+48 000 000 000",
    phoneHref: "tel:+48000000000",
    email: "rezerwacje@drivepro.pl",
    emailHref: "mailto:rezerwacje@drivepro.pl",
    area: "Warszawa i okolice – dowóz na życzenie",
    socialLinks: [
      { name: "Facebook", href: "https://facebook.com" },
      { name: "YouTube", href: "https://youtube.com" },
      { name: "Instagram", href: "https://instagram.com" },
      { name: "X", href: "https://x.com" },
    ],
  },

  gallery: {
    title: "Nasza flota",
  },

  nav: {
    items: [
      { id: "o-nas", label: "O nas" },
      { id: "uslugi", label: "Usługi" },
      { id: "cennik", label: "Cennik" },
      { id: "zespol", label: "Nasz zespół" },
      { id: "realizacje", label: "Flota" },
      { id: "opinie", label: "Opinie" },
      { id: "kontakt", label: "Kontakt" },
    ],
  },
};
