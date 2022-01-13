import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Blog = () => {
  return (
    <Link to="/blog/slug">
      <div className="blog">
        <Image src="https://mytravel.bookingcore.org/uploads/demo/news/news-2.jpg" alt="Blog Title" className="img-fluid" />

        <div className="py-4 mt-2">
          <p to="/" className="cursor font-sz-title color-black font-wg-500">Morning in the Northern sea</p>
          <p className="font-sz-medium color-grey-1 mt-2 mb-4">From the iconic to the unexpected, the city of San Francisco never ceases to surprise. Kick-start your effortlessly delivered Northern California holiday in the cosmopolitan hills of The City . Join your Travel Director and fellow travellers for a Welcome Reception at your...</p>

          <p className="cursor font-sz-normal font-wg-500 color-danger-1 text-uppercase">Read More</p>
        </div>
      </div>
    </Link>
  );
}

export default Blog;
