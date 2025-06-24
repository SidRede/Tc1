
"use client";
import Image from "next/image";
import Head from "next/head";

const images = [
  "/Images/gallery/img1.jpg",
  "/Images/gallery/img2.jpg",
  "/Images/gallery/img3.jpg",
  "/Images/gallery/img4.jpg",
  "/Images/gallery/img5.jpg",
  "/Images/gallery/img6.jpg",
  "/Images/gallery/img7.jpg",
  "/Images/gallery/img8.jpg",
  "/Images/gallery/img9.jpg",
  "/Images/gallery/img10.jpg",
  "/Images/gallery/img11.jpg",
  "/Images/gallery/img12.jpg",
];

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery | Trimurti Caterers</title>
        <meta name="description" content="Gallery of our catering services" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
      </Head>

      <main className="container py-5">
        <h1 className="text-center mb-4 fw-bold">Our Gallery</h1>
        <div className="row">
          {images.map((src, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <div className="gallery-card shadow-sm rounded overflow-hidden">
                <div className="image-wrapper">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        .gallery-card {
          position: relative;
          aspect-ratio: 4 / 3;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.4s ease-in-out;
        }

        .gallery-card:hover .image-wrapper {
          transform: scale(1.08);
        }
      `}</style>
    </>
  );
}
