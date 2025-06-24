import Head from "next/head";

export default function CorporateEventCatering() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Corporate Event Catering: 5 Ways to Impress Clients and Employees",
    "image": "https://trimurticaterers.com/Images/gallery/img3.jpg", // Replace with actual image URL
    "author": {
      "@type": "Organization",
      "name": "Trimurti Caterers",
      "url": "https://trimurticaterers.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Trimurti Caterers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trimurticaterers.com/logo.png"
      }
    },
    "datePublished": "2025-06-15",
    "dateModified": "2025-06-15",
    "description": "Plan successful corporate events with the right food, service, and presentation. Here's how we do it at Trimurti Caterers.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://trimurticaterers.com/blog/corporate-event-catering"
    }
  };

   const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://trimurticaterers.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://trimurticaterers.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Corporate Event Catering",
        "item": "https://trimurticaterers.com/blog/corporate-event-catering"
      }
    ]
};



  return (
    <>
      <Head>
        <title>Corporate Event Catering Tips | Trimurti Caterers</title>
        <meta name="description" content="Explore 5 catering strategies to impress clients and employees at your next corporate event. Tailored service by Trimurti Caterers." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      
     <main className="container py-5">
        <h1 className="mb-4 fw-bold">Corporate Event Catering: 5 Ways to Impress Clients and Employees</h1>
        <p className="text-muted">Published on June 15, 2025</p>

        <p>
            A successful corporate event requires more than just good planning — it demands excellent food and flawless service. At Trimurti Caterers, we specialize in delivering seamless <strong>corporate catering services in Pune</strong> that enhance professionalism, impress clients, and keep employees satisfied.
        </p>

        <div className="my-4">
            <img
            src="https://trimurticaterers.com/Images/gallery/img2.jpg"
            alt="Corporate catering table setup"
            className="img-fluid rounded shadow"
            width={200}
          height={100}
            />
        </div>

      

        <p>
            Presentation matters. All our dishes are carefully plated, and our staff is professionally trained in hospitality etiquette to reflect your brand&rsquo;s image. We believe food should be both visually appealing and delicious.
        </p>

        <div className="my-4">
            <img
            src="https://trimurticaterers.com/Images/gallery/img8.jpg"
            alt="Office catering buffet line"
            className="img-fluid rounded shadow"

            width={200}
          height={100}
            />
        </div>

        <p>
            Our <strong>corporate catering menu</strong> typically includes a balanced mix of Indian and international cuisines. Popular items include:
        </p>

        <ul>
            <li>Welcome drinks – mint coolers, fresh juices, or herbal mocktails</li>
            <li>Starters – Paneer tikka, hara bhara kabab, cocktail samosas</li>
            <li>Main course – North Indian combo meals, biryani with raita, pasta in white/red sauce</li>
            <li>Live counters – chaat station, sandwich bar, dosa or pasta station</li>
            <li>Desserts – Gulab jamun, brownies, mousse cups, ice cream</li>
        </ul>

        <p>
            We also cater to special dietary needs, including Jain food, vegan meals, and gluten-free options, ensuring no one is left out.
        </p>

        <div className="my-4">
            <img
            src="https://trimurticaterers.com/Images/gallery/img9.jpg"
            alt="Client meeting lunch setup"
            className="img-fluid rounded shadow"
            width={200}
          height={100}
            />
        </div>

        <p>
            Recognized among the <strong>top event caterers in Hadapsar</strong> and serving businesses across Magarpatta, Kharadi, and central Pune, Trimurti Caterers ensures timely service, exceptional hygiene standards, and delicious food presentation for all your business events.
        </p>

        <div className="mt-5 alert alert-success">
            <strong>Ready to elevate your next office event?</strong> Contact Trimurti Caterers for customized corporate catering services across Pune.
        </div>
    </main>


    </>
  );
}
