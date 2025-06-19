import './globals.css';
import Navbar from '../Components/Navbar'; // adjust if path differs
import Footer from '../Components/Footer'; // ✅ import Footer
import Script from 'next/script';
// app/layout.js
export const metadata = {
  title: 'Trimurti Caterers | Best Event Catering in Pune & PCMC',
  description: 'Trimurti Caterers offers premium catering services in Pune & PCMC for weddings, birthdays, and more. Call +91 9697982020 to plan your event!',
   icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    'Best caterers in Pune',
    'Best caterers in Hadapsar',
    'Catering services in Pune and PCMC',
    'Catering services in Hadapsar',
    'Wedding catering in Pune',
    'Birthday party caterers',
    'Buffet catering Pune',
    'caterering Pune',
    'Corporate catering Pune',
    'Top caterers in Pune',
    'Professional catering services',
    'Event catering Pune',
    'Wedding Planners in Pune',
  ],
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://www.trimurticaterers.com'),
  openGraph: {
    title: 'Trimurti Caterers | Best Wedding & Event Catering in Pune',
    description: 'Trimurti Caterers offers premium catering services in Pune for weddings, corporate events, birthdays, and more. Call +91 9697982020 to plan your event!',
    url: 'https://www.trimurticaterers.com',
    siteName: 'Trimurti Caterers',
    images: [
      {
        url: 'https://www.trimurticaterers.com/favicon.ico',
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trimurti Caterers | Best Wedding & Event Catering in Pune',
    description: 'Premium catering for weddings, parties, and corporate events in Pune. Trimurti Caterers ensures luxury, flavor, and flawless service.',
    images: ['https://www.trimurticaterers.com/favicon.ico'],
  },
  verification: {
    google: 'jJYaBHl3YqWI79xX-ewl1wRWYLTJ3NhZh6f1O5Z_PrA',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Kaushan+Script&family=Kings&family=Kotta+One&family=Lobster&family=Marko+One&family=Metal+Mania&family=Mooli&family=Petemoss&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prata&display=swap"
          rel="stylesheet"
        />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossOrigin="anonymous"></link>
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossOrigin="anonymous"></script> */}
         <meta name="google-site-verification" content="jJYaBHl3YqWI79xX-ewl1wRWYLTJ3NhZh6f1O5Z_PrA" />



          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Trimurti Caterers",
              "image": "https://www.trimurticaterers.com/favicon.ico",
              "@id": "https://www.trimurticaterers.com",
              "url": "https://www.trimurticaterers.com",
              "telephone": "+919697982020",
              "priceRange": "₹50,000+",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Behind Indraprastha lawns, Near Grapes Research Center, Loni Toll Plaza, Manjari",
                "addressLocality": "Pune",
                "addressRegion": "MH",
                "postalCode": "412307",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "10:00",
                  "closes": "20:00"
                }
              ],
              "description": "Trimurti Caterers - best caterers in Pune, offers top-tier catering services for weddings, birthdays, housewarmings, social and corporate Events in Pune. 20 Years of serving Delicious food, professional staff, and seamless service."
            }),
          }}
        />


           {/* ✅ WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Trimurti Caterers",
              "url": "https://www.trimurticaterers.com/"
            }),
          }}
        />

            {/* ✅ BreadcrumbList JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "About Us",
                  "item": "https://www.trimurticaterers.com/About"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Menu",
                  "item": "https://www.trimurticaterers.com/Menu"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Gallery",
                  "item": "https://www.trimurticaterers.com/Gallery"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Contact Us",
                  "item": "https://www.trimurticaterers.com/Contact"
                }
              ]
            }),
          }}
        />





      </head>
      <body>
        <Navbar />
        {children}
        <Footer /> {/* ✅ Footer at bottom of every page */}

          <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
