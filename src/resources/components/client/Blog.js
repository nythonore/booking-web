import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="blog cursor">
      <Image src="https://mytravel.bookingcore.org/uploads/demo/news/news-2.jpg" alt="Blog Title" className="img-fluid" />

      <div className="py-4 mt-2">
        <Link to="/" className="font-sz-medium color-black font-wg-500">Pure Luxe in Punta Mita</Link>
        <p className="font-sz-medium color-grey-1 mt-2">From the iconic to the unexpected, the city of San Francisco never ceases to...</p>
      </div>
    </div>
  );
}

export default Blog;
