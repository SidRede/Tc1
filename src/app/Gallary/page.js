// app/gallery/page.js
import Image from 'next/image';
import Link from 'next/link';
import Styles from './Gallary.module.css'; // Adjust path if needed


const renderimages = (category, count) => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(
      <div className="col-md-4 mb-4" key={i}>
        <div className="card h-100">
         <Image
            src={`/images/${category}/${i}.jpg`}
            alt={`${category} ${i}`}
            width={500}
            height={300}
            className={`card-img-top ${Styles.imageHoverEffect}`}
            style={{ objectFit: 'cover', height: '200px' }}
          />

        </div>
      </div>
    );
  }
  return images;
};

export default function GalleryPage() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Gallery</h1>

      {/* Events */}
      <section className="mb-5">
        <h2 className="mb-4">Events</h2>
        <div className="row">
          {renderimages('events', 6)}
        </div>
        <div className="text-center">
          <Link href="/Gallary/Events">
            <button className="btn btn-dark">View More Events</button>
          </Link>
        </div>
      </section>

      {/* Food */}
      <section className="mb-5">
        <h2 className="mb-4">Food Items</h2>
        <div className="row">
          {renderimages('food', 6)}
        </div>
        <div className="text-center">
          <Link href="/Gallary/Food">
            <button className="btn btn-dark">View More Food Items</button>
          </Link>
        </div>
      </section>

      {/* VIP Guests */}
      {/* <section>
        <h2 className="mb-4">VIP Guests</h2>
        <div className="row">
          {renderimages('vip', 6)}
        </div>
        <div className="text-center">
          <Link href="/Gallary/VIP-guests">
            <button className="btn btn-dark">View More VIP Guests</button>
          </Link>
        </div>
      </section> */}
    </div>
  );
}
