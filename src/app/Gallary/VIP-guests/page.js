// app/gallery/guests/page.js
import Image from 'next/image';
import Styles from '../Gallary.module.css'; 

export default function EventsPage() {
  const images = [];
  for (let i = 1; i <= 13; i++) {
    images.push(
      <div className="col-md-4 mb-4" key={i}>
        <div className="card h-100">
          <Image
            src={`/images/vip/${i}.jpg`}
            alt={`Event ${i}`}
            width={500}
            height={300}
            className={`card-img-top ${Styles.imageHoverEffect}`}
            style={{ objectFit: 'cover', height: '200px' }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">All VIP Guests Images</h1>
      <div className="row">
        {images}
      </div>
    </div>
  );
}
