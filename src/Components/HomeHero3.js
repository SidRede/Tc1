"use client";

import React, { useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from '../Styles/HomeHero3.module.css';
import Image from 'next/image';

const HomeHero3 = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const itemsPerPage = 2;

 const reviews = [
    {
      name: 'Siddheshwar Rede',
      city: 'Hadapsar',
      image: '/Images/review1.jpeg',
      review:
        "Our wedding day was made truly special thanks to the incredible team at Trimurti Caterers. Every dish was full of flavor, and their attention to detail stood out. They really are the best and reputed caterers in Hadapsar .",
    },
    {
      name: 'Amit Verma',
      city: 'Pune',
      image: '/Images/profile.png',
      review:
        "From start to finish, Trimurti Caterers impressed us with their dedication and top-notch service. We hosted a birthday party and everything went smoothly. For anyone searching for the top caterers in Pune, this is the team you need.",
    },
    {
      name: 'Sneha Kulkarni',
      city: 'Katraj',
      image: '/Images/profile.png',
      review:
        "We were planning a family function and Trimurti Caterers handled it with such professionalism. Their team brought life to the event with their service and the food was beyond amazing. Highly recommended for catering services in Pune and PCMC.",
    },
    {
      name: 'Rahul Mehta',
      city: 'Pimpri',
      image: '/Images/profile.png',
      review:
        "At our corporate gathering, Trimurti Caterers delivered a seamless and classy experience. Everything from presentation to taste was excellent. If you're looking for reliable corporate catering in Pune, look no further.",
    },
    {
      name: 'Anjali Patil',
      city: 'Hadapsar',
      image: '/Images/profile.png',
      review:
        "Trimurti Caterers turned our wedding reception into a memorable celebration. The buffet was beautifully arranged, and every guest was impressed. They bring the essence of professional wedding catering in Pune with elegance and efficiency.",
    },
    {
      name: 'Suresh Nair',
      city: 'Pune',
      image: '/Images/profile.png',
      review:
        "Our experience with Trimurti Caterers was exceptional. From planning to execution, their team was spot-on. They're not just caterers, they're event experts. For buffet catering and event catering in Pune, they are unmatched.",
    },
  ];

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleReviews = reviews.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (mobileIndex < reviews.length - 1) setMobileIndex(mobileIndex + 1);
    },
    onSwipedRight: () => {
      if (mobileIndex > 0) setMobileIndex(mobileIndex - 1);
    },
    trackMouse: true,
  });

  return (
    <div>
      <div className={styles.imgBcg}>
        <div className={styles.celebrate}>
          <h3>
            Celebrate your special occasion with one of Pune’s finest catering services.
          </h3>
        </div>
      </div>


      <div className={styles.reviewTitle}>
        <h3>Testimonials</h3>
        <Image
            className={styles.lines}
            src="/Images/Group84.png"
            alt="Separator lines"
            width={500}
            height={20}
          />
      </div>




      {/* Desktop View */}
      <div className="container py-4">
        <div className="d-none d-md-flex align-items-center justify-content-center gap-5">
          <button
            onClick={handlePrev}
            className="btn btn-dark"
            disabled={currentIndex === 0}
          >
             Prev
          </button>

          {visibleReviews.map((review, i) => (
            <div
              className="card"
              key={i}
              style={{ maxWidth: '500px', flex: '1 1 45%' }}
            >
              <div className="row g-0">
                <div className="col-5">
                  <div className="position-relative w-100" style={{ height: '250px' }}>
                   <Image
                        src={review.image}
                        alt={`Customer ${review.name}`}
                        fill
                        className="rounded-start object-cover w-full h-full"
                      />

                  </div>
                </div>
                <div className="col-7">
                  <div className="card-body">
                    <h5 className="card-title">{review.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{review.city}</h6>
                    <p className="card-text" style={{ fontSize: '0.95rem' }}>
                      {review.review}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={handleNext}
            className="btn btn-secondary"
            disabled={currentIndex >= totalPages - 1}
          >
            Next 
          </button>
        </div>

        {/* Mobile View */}
        <div className="d-md-none text-center" {...swipeHandlers}>
          <div
            className="card mx-auto my-3 fade-card"
            style={{ maxWidth: '95%', transition: 'opacity 0.5s ease-in-out' }}
          >
            <div className="row g-0">
              <div className="col-12">
                <div className="position-relative w-100" style={{ height: '200px' }}>
                 <Image
                  src={reviews[mobileIndex].image}
                  alt={`Customer ${reviews[mobileIndex].name}`}
                  fill
                  className="rounded-start object-cover w-full h-full"
                />


                </div>
              </div>
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title">{reviews[mobileIndex].name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{reviews[mobileIndex].city}</h6>
                  <p className="card-text" style={{ fontSize: '0.95rem' }}>
                    {reviews[mobileIndex].review}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-center gap-3 mb-2">
            <button
              onClick={() => setMobileIndex(prev => Math.max(prev - 1, 0))}
              className="btn btn-dark"
              disabled={mobileIndex === 0}
            >
              ‹ Prev
            </button>
            <button
              onClick={() => setMobileIndex(prev => Math.min(prev + 1, reviews.length - 1))}
              className="btn btn-secondary"
              disabled={mobileIndex === reviews.length - 1}
            >
              Next ›
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="d-flex justify-content-center mt-2">
            {reviews.map((_, idx) => (
              <div
                key={idx}
                style={{
                  width: '10px',
                  height: '10px',
                  margin: '0 5px',
                  borderRadius: '50%',
                  backgroundColor: idx === mobileIndex ? '#333' : '#ccc',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero3;
