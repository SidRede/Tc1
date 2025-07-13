import Link from "next/link";
import Head from "next/head";

const blogs = [
  {
    slug: "indian-wedding-catering",
    title: "Top 10 Indian Wedding Catering Ideas to Impress Your Guests",
    excerpt:
      "Explore Indian wedding catering ideas like live counters, thali-style services, and dessert bars. Make your wedding feast unforgettable!",
    date: "June 25, 2025",
    image: "/images/gallery/img13.jpg",
  },
  {
    slug: "birthday-party-menu",
    title: "How to Plan the Perfect Birthday Party Menu for All Ages",
    excerpt:
      "From snack boxes to mocktail bars, design birthday menus for kids, teens, and adults with Trimurti Caterers.",
    date: "June 20, 2025",
    image: "/images/gallery/img5.jpg",
  },
  {
    slug: "corporate-event-catering",
    title: "Corporate Event Catering: 5 Ways to Impress Clients and Employees",
    excerpt:
      "Plan successful corporate events with the right food, service, and presentation. Here's how we do it at Trimurti Caterers.",
    date: "June 15, 2025",
     image: "/images/gallery/img14.jpg",
  },
];

export default function BlogList() {
  return (
    <>
      <Head>
        <title>Blog | Trimurti Caterers</title>
        <meta
          name="description"
          content="Read blogs from Trimurti Caterers on weddings, birthdays, and corporate catering."
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <main className="container py-5">
        <h1 className="text-center mb-4 fw-bold">Our Blog</h1>
        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.excerpt}</p>
                  <p className="text-muted mt-auto">
                    <small>{blog.date}</small>
                  </p>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="btn btn-dark btn-sm mt-2"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
