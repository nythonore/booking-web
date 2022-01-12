import { Badge } from "react-bootstrap";

const ItemSpace = ({ isFeatured }) => {
  return (
    <div className="item cursor">
      <div className="image d-flex flex-column justify-content-between flex-wrap">
        <div>
          {isFeatured && <Badge variant="default" className="featured">Featured</Badge>}
        </div>

        <div>
          <p className="text-white font-sz-medium">
            Luxury Apartement
          </p>

          <p className="text-white font-sz-medium mt-2">
            From $50 / Day
          </p>
        </div>
      </div>

      <div className="p-3 border bg-white">
        <p className="font-sz-medium font-wg-500">
          <i className="bi bi-geo-alt mr-2"></i>
          Porte de Vanves
        </p>

        <div className="mt-2">
          <span className="color-danger-1 py-2 mr-2">4.3/5 Excellent</span>
          <span>3 Reviews</span>
        </div>

        <span className="py-1"><hr /></span>

        <div className="row">
          <div className="col-md-6 mb-2">
            <p className="color-grey-1">
              <i className="bi bi-cone mr-1"></i>
              133 sqft
            </p>
          </div>

          <div className="col-md-6 mb-2">
            <p className="color-grey-1">
              <i className="bi bi-cone mr-1"></i>
              7 People
            </p>
          </div>

          <div className="col-md-6 mb-2">
            <p className="color-grey-1">
              <i className="bi bi-cone mr-1"></i>
              4 Privy
            </p>
          </div>

          <div className="col-md-6 mb-2">
            <p className="color-grey-1">
              <i className="bi bi-cone mr-1"></i>
              4 Beeds
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default ItemSpace;
