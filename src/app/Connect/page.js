import Head from 'next/head'
import Image from 'next/image'

const links = [
  { label: "Review Us", icon: "google-review.png", url: "#" },
  { label: "Follow Us", icon: "instagram.png", url: "#" },
  { label: "Our Facebook", icon: "facebook.png", url: "#" },
  { label: "Send Email", icon: "email.png", url: "#" },
  { label: "Send WhatsApp", icon: "whatsapp.png", url: "#" },
  { label: "Call Us", icon: "call.png", url: "#" },
  { label: "Our Location", icon: "location.png", url: "#" },
  { label: "Our Youtube", icon: "youtube.png", url: "#" },
  { label: "Message Us", icon: "contact.png", url: "#" },
]

export default function Connect() {
  return (
    <>
      <Head>
        <title>Hotel Gavkari That</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <div
        className="d-flex align-items-center justify-content-center min-vh-100"
        style={{
          background: "linear-gradient(to bottom right, #000000, #1f3b5c)",
          padding: "1rem",
        }}
      >
        <div className="bg-dark bg-opacity-75 rounded-4 p-4 text-white text-center" style={{ maxWidth: "400px", width: "100%" }}>
          <h2 className="mb-4 fw-bold">Trimurti Caterers</h2>

          <div className="row g-3">
            {links.map((item, index) => (
              <div className="col-4" key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">
                  <Image
                    src={`/images/connect/${item.icon}`}
                    alt={item.label}
                    width={50}
                    height={50}
                    className="img-fluid mb-2"
                  />
                  <div style={{ fontSize: "0.85rem" }}>{item.label}</div>
                </a>
              </div>
            ))}
          </div>

          <hr className="text-secondary mt-4 mb-2" />
          <p className="text-muted small mb-0">Powered By <strong>daQR</strong></p>
        </div>
      </div>
    </>
  )
}
