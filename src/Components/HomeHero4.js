'use client';
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from '../Styles/HomeHero4.module.css'
import { useSwipeable } from "react-swipeable";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
  onSwipedLeft: () =>
    setActiveIndex((prev) => (prev + 1) % services.length),
  onSwipedRight: () =>
    setActiveIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    ),
  preventDefaultTouchmoveEvent: true,
  trackMouse: true,
});

  const services = [
    {
      title: "Wedding Catering",
      img: "/Images/gallery/img5.jpg",
      desc:
        "Make your special day memorable with our royal wedding menus, live counters, dessert bars, and traditional thalis. From intimate to grand-scale weddings, we craft unforgettable food experiences. Trusted by many for wedding catering in Pune and surrounding areas.",
    },
    {
      title: "Birthday Parties",
      img:  "/Images/img15.jpg",
      desc:
        "From kids to adults, we offer fun, themed birthday catering with mocktails, snack boxes, mini pizzas, cupcakes, and chocolate fountains — fully personalized to your celebration. Recognized as the top birthday party caterers in Pune and Hadapsar.",
    },
    {
      title: "Corporate Events",
      img: "/Images/gallery/img14.jpg",
      desc:
        "Impress your clients and staff with professional catering for seminars, product launches, and office parties. We serve elegant buffets, live counters, and hygienic meal boxes. Choose Trimurti Caterers for the best corporate catering in Pune and PCMC.",
    },
  ];

  return (
    <>
      <Head>
        <title>Our Catering Services | Trimurti Caterers Pune</title>
        <meta
          name="description"
          content="Best caterers in Pune and Hadapsar offering wedding, birthday, and corporate catering services. Trusted catering in PCMC and Pune."
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      
      </Head>

      <main className="container py-5">
        <h2 className="mb-4 fw-bold text-center"  style={{
    fontFamily: '"Great Vibes", cursive',
    fontWeight: 400,
    fontStyle: 'normal',
  }}>Our Catering Services</h2>

        <p className="lead text-center"  style={{
    fontFamily: '"Poppins"',
    fontWeight: 300,
    fontStyle: 'normal',
  }}>
          At <strong>Trimurti Caterers</strong>, we provide <strong>professional catering services</strong> across Pune, Hadapsar, Kharadi, and PCMC areas. Whether you’re planning a wedding, birthday, or corporate gathering, our team delivers unmatched food quality and presentation. We are proud to be known as the <strong>best caterers in Pune</strong> and <strong>top caterers in Hadapsar</strong>.
        </p>

        {/* Desktop View */}
        <div className={`row ${styles.desktopView}`}>
          {services.map((service, index) => (
            <div className="col-md-4 mb-4 fade-in" key={index} style={{ marginTop: '15px' }}>
              <div className={`card h-100 shadow-sm ${styles.serviceCard}`}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body" style={{
                    fontFamily: '"Poppins"',
                    fontWeight: 300,
                    fontStyle: 'normal',
                }}>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
       
        <div {...handlers} className={`${styles.mobileCarousel} text-center`}>
  <div className={`card h-100 shadow-sm ${styles.serviceCard} mx-auto`} style={{ maxWidth: "22rem" }}>
    <img
      src={services[activeIndex].img}
      alt={services[activeIndex].title}
      className="card-img-top"
      style={{ height: "200px", objectFit: "cover" }}
    />
    <div className="card-body" style={{
    fontFamily: '"Poppins"',
    fontWeight: 300,
    fontStyle: 'normal',
  }}>
      <h5 className="card-title">{services[activeIndex].title}</h5>
      <p className="card-text">{services[activeIndex].desc}</p>
    </div>
  </div>

  {/* Dots */}
  <div className="mt-3 d-flex justify-content-center">
    {services.map((_, i) => (
      <span
        key={i}
        onClick={() => setActiveIndex(i)}
        style={{
          width: "10px",
          height: "10px",
          margin: "0 5px",
          borderRadius: "50%",
          backgroundColor: activeIndex === i ? "#000" : "#ccc",
          cursor: "pointer",
          display: "inline-block",
        }}
      />
    ))}
  </div>
</div>


        <div className="text-center mt-5" style={{
    fontFamily: '"Poppins"',
    fontWeight: 300,
    fontStyle: 'normal',
  }}>
          <p>
            Need catering for housewarming, anniversaries, or festive events? <strong>Trimurti Caterers</strong> is your trusted food partner in Pune — delivering taste, quality, and presentation on point. From <strong>wedding catering in Pune</strong> to <strong>buffet catering and event catering</strong> in Hadapsar and PCMC, we cover it all.
          </p>
        </div>
      </main>
    </>
  );
}
