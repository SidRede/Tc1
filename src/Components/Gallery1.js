
"use client";
import Image from "next/image";
import Head from "next/head";

const images = [
  "/images/gallery/img1.jpg",
  "/images/gallery/img2.jpg",
  "/images/gallery/img3.jpg",
  "/images/gallery/img4.jpg",
  "/images/gallery/img5.jpg",
  "/images/gallery/img6.jpg",
  "/images/gallery/img7.jpg",
  "/images/gallery/img8.jpg",
  "/images/gallery/img9.jpg",
  "/images/gallery/img10.jpg",
  "/images/gallery/img11.jpg",
  "/images/gallery/img12.jpg",
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
