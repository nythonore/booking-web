import { FormControl, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section border-top bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <p className="font-sz-medium font-wg-500 mb-4">Need My Travel Help?</p>

            <div>
              <p className="font-sz-normal color-grey-1">Got Questions ? Call us 24/7</p>
              <p className="font-sz-normal color-danger-1 mt-1">Call Us: (+84) 666-888-999</p>
            </div>

            <p className="font-sz-medium font-wg-500 mb-2 mt-3">Contact Info</p>
            <p className="font-sz-normal color-grey-1">PO Box CT16122 Collins Street West, Victoria 8007,Australia.</p>

            <div className="social mt-3">
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="https://google.com" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="https://google.com" target="_blank" rel="noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

          <div className="col-md-2 mb-4">
            <p className="font-sz-medium font-wg-500 mb-4">Company</p>

            <div className="links">
              <Link to="/blog">{`>`} &nbsp; Blog</Link>
              <Link to="/about">{`>`} &nbsp; About Us</Link>
              <Link to="/contact">{`>`} &nbsp; Contact Us</Link>
              <Link to="/terms-privacy">{`>`} &nbsp; Terms & Privacy</Link>
              <Link to="/partner">{`>`} &nbsp; Partners</Link>
            </div>
          </div>

          <div className="col-md-2 mb-4">
            <p className="font-sz-medium font-wg-500 mb-4">Explore</p>

            <div className="links">
              <Link to="/hotel">{`>`} &nbsp; Hotels</Link>
              <Link to="/space">{`>`} &nbsp; Spaces</Link>
              <Link to="/tour">{`>`} &nbsp; Tours</Link>
              <Link to="/car">{`>`} &nbsp; Cars</Link>
              <Link to="/event">{`>`} &nbsp; Events</Link>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <p className="font-sz-medium font-wg-500 mb-4">Mailing List</p>

            <p>Sign up for our mailing list to get latest updates and offers.</p>

            <div className="mt-3">
              <InputGroup>
                <FormControl type="email" placeholder="Your Email" />
                <Button variant="default" className="bg-primary font-sz-normal text-white">Subscribe</Button>
              </InputGroup>
            </div>
          </div>
        </div>

        <div className="row mt-1">
          <div className="col-md-12 mt-5">
            <p className="color-dark font-sz-normal text-center">Copyright &copy; 2022 GoDiscoverAfrica. Allrights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
