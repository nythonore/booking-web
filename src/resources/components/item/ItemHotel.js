import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

const ItemHotel = ({ isFeatured }) => {
  return (
    <Link to="/hotel/slug">
      <div className="item">
        <div className="image d-flex flex-column justify-content-between flex-wrap">
          <div>
            {isFeatured && <Badge variant="default" className="featured">Featured</Badge>}
          </div>

          <div className="">
            <p className="text-white font-sz-medium">
              <i className="bi bi-geo-alt mr-2"></i>
              Arrondissement de Paris
            </p>
          </div>
        </div>

        <div className="p-3 border bg-white">
          <p className="font-sz-medium font-wg-500">Hotel WBF Hommachi</p>

          <div className="mt-2">
            <Badge className="bg-danger-1 p-2 text-white mr-2">4.3/5</Badge>
            <span>3 Reviews</span>
          </div>

          <span className="py-1"><hr /></span>
          <p className="font-sz-medium">From $350 / Night</p>
        </div>
      </div>
    </Link>
  );
}

export default ItemHotel;
