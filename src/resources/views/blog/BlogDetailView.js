import { Image, Badge } from "react-bootstrap";

const BlogDetailView = () => {
  return (
    <div className="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 color-dark">
            <Image src="https://mytravel.bookingcore.org/uploads/demo/news/news-2.jpg" alt="Blog Title" width="100%" className="img-fluid" />

            <p className="font-sz-large font-wg-500 mt-4">Morning in the Northern sea</p>
            <p className="font-sz-medium mt-2">01/13/2022  - <span className="color-primary">Adventure Travel</span></p>

            <div className="mt-4">
              <p className="color-grey-1 font-sz-medium text-justify">From the iconic to the unexpected, the city of San Francisco never ceases to surprise. Kick-start your effortlessly delivered Northern California holiday in the cosmopolitan hills of The City . Join your Travel Director and fellow travellers for a Welcome Reception at your hotel.Welcome Reception From the iconic to the unexpected, the city of San Francisco never ceases to surprise. Kick-start your effortlessly delivered Northern California holiday in the cosmopolitan hills of The City . Join your Travel Director and fellow travellers for a Welcome Reception at your hotel.Welcome Reception</p>
              <p className="mt-3 color-grey-1 font-sz-medium text-justify">From the iconic to the unexpected, the city of San Francisco never ceases to surprise. Kick-start your effortlessly delivered Northern California holiday in the cosmopolitan hills of The City . Join your Travel Director and fellow travellers for a Welcome Reception at your hotel.Welcome Reception From the iconic to the unexpected, the city of San Francisco never ceases to surprise. Kick-start your effortlessly delivered Northern California holiday in the cosmopolitan hills of The City . Join your Travel Director and fellow travellers for a Welcome Reception at your hotel.Welcome Reception</p>
            </div>

            <div className="mt-5">
              <span className="color-dark py-2 font-sz-medium mr-3">
                Share:
              </span>

              <Badge variant="default" className="bg-danger-1 text-white px-4 py-2 font-sz-normal mr-2">
                <i className="bi bi-facebook"></i>
              </Badge>

              <Badge variant="default" className="bg-danger-1 text-white px-4 py-2 font-sz-normal mr-2">
                <i className="bi bi-instagram"></i>
              </Badge>

              <Badge variant="default" className="bg-danger-1 text-white px-4 py-2 font-sz-normal">
                <i className="bi bi-twitter"></i>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailView;
