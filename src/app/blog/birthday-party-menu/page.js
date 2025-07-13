import Head from "next/head";
import Image from "next/image";

export default function BirthdayPartyMenu() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Plan the Perfect Birthday Party Menu for All Ages",
    "image": "https://trimurticaterers.com/Images/gallery/img2.jpg",
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
    "datePublished": "2025-06-20",
    "dateModified": "2025-06-20",
    "description": "From snack boxes to mocktail bars, design birthday menus for kids, teens, and adults with Trimurti Caterers.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://trimurticaterers.com/blog/birthday-party-menu"
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
        "name": "Birthday Party Menu",
        "item": "https://trimurticaterers.com/blog/birthday-party-menu"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Perfect Birthday Party Menu Ideas for All Ages | Trimurti Caterers</title>
        <meta name="description" content="Discover birthday catering ideas for kids, teens, and adults. Make every birthday unforgettable with Trimurti Caterers!" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>

      <main className="container py-5">
        <h1 className="mb-4 fw-bold">How to Plan the Perfect Birthday Party Menu for All Ages</h1>
        <p className="text-muted">Published on June 20, 2025</p>

         <h2 className="mt-5">📦 Customize with Trimurti Caterers</h2>
        <p>No two birthday parties are the same — that&rsquo;ss why we offer fully customizable catering packages based on your guest list, budget, party theme, and dietary preferences.</p>
        <p> As one of the <strong>  best caterers in Pune </strong>, especially trusted as the top caterers in Hadapsar, Trimurti Caterers brings tailored food solutions to every event. From intimate home gatherings to lavish birthday garden parties, we ensure your food experience is not just flawless — but unforgettable.</p>

       

        <p>Birthdays are one of the most joyous celebrations in life, and the menu plays a key role in creating a memorable party. Whether you are throwing a kids&rsquo;s party, a teenage bash, or a sophisticated adult gathering, the food should be exciting, satisfying, and tailored to your guests&rsquo; preferences. Here&rsquo;s how Trimurti Caterers helps you craft the perfect birthday party menu for all age groups.</p>

        <h2 className="mt-5">🎈 Kids&rsquo;s Party Menu Ideas</h2>
         <Image
          src="/Images/img15.jpg"
          alt="Birthday Party Catering Setup"
          className="img-fluid rounded shadow mb-4"
          width={200}
          height={100}
        />
        <ul>
          <li>Mini pizzas and cheese sandwiches</li>
          <li>French fries, nuggets, and smileys</li>
          <li>Fruit skewers and colorful cupcakes</li>
          <li>Chocolate fountain with marshmallows</li>
          <li>Milkshakes, juices, and ice cream cups</li>
        </ul>
        <p>We also offer fun snack boxes with cartoon-themed packaging to keep kids happy and parents relaxed.</p>

        <h2 className="mt-5">🎉 Teen Birthday Bash</h2>
        <Image
          src="/Images/gallery/img8.jpg"
          alt="Teen Birthday Catering"
          className="img-fluid rounded shadow my-3"
          width={200}
          height={100}
        />
        <ul>
          <li>Live pasta or noodle counters</li>
          <li>Burgers with gourmet toppings</li>
          <li>Mocktail bar with trendy drinks</li>
          <li>DIY taco or nacho stations</li>
          <li>Waffles, brownies, and gelato</li>
        </ul>
        <p>Teens love interactive food counters and presentation. We make the experience both Instagram-worthy and delicious!</p>

        <h2 className="mt-5">🥂 Adult Birthday Celebrations</h2>
        <Image
          src="/Images/gallery/img5.jpg"
          alt="Elegant Adult Birthday Dinner"
          className="img-fluid rounded shadow my-3"
           width={200}
          height={100}
        />
        <ul>
          <li>Elegant starters like tandoori platters and bruschetta</li>
          <li>North Indian & continental main courses</li>
          <li>Live BBQ or chaat stations</li>
          <li>Signature mocktails and herbal drinks</li>
          <li>Dessert bar with cakes, kheer, gulab jamun</li>
        </ul>
        <p>Our premium adult birthday packages include full-service buffets with decor, servers, and even music arrangements if needed.</p>

       

        <div className="mt-5 alert alert-success">
          <strong>Plan your next birthday with us!</strong> Contact +91 9697982020 Trimurti Caterers today and let&rsquo;ss create magic together.
        </div>
      </main>
    </>
  );
}
