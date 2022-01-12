import { Link } from "react-router-dom";

const Destination = () => {
  return (
    <div className="destination cursor">
      <div className="container">
        <p className="text-white font-sz-large font-wg-500">Kigali City</p>
        <div className="line">.</div>

        <div className="links mt-5">
          <Link to="/">(7) Hotels</Link>
          <Link to="/">(7) Spaces</Link>
          <Link to="/">(7) Tours</Link>
          <Link to="/">(7) Cars</Link>
          <Link to="/">(7) Events</Link>
        </div>
      </div>
    </div>
  );
}

export default Destination;
