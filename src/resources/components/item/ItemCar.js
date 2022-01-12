import { Badge } from "react-bootstrap";

const ItemCar = ({ isFeatured }) => {
  return (
    <div className="item cursor">
      <div className="image d-flex flex-column justify-content-between flex-wrap">
        <div>
          {isFeatured && <Badge variant="default" className="featured">Featured</Badge>}
        </div>

        <div>
          <p className="text-white font-sz-medium">
            2019 Honda Clarity
          </p>

          <p className="text-white font-sz-medium mt-2">
            From $300
          </p>
        </div>
      </div>

      <div className="p-3 border bg-white">
        <p className="font-sz-medium font-wg-500">
          <i className="bi bi-geo-alt mr-2"></i>
          New York
        </p>

        <div className="mt-2">
          <span className="color-danger-1 py-2 mr-2">4.3/5 Excellent</span>
          <span>3 Reviews</span>
        </div>

        <span className="py-1"><hr /></span>

        <div className="row">
          <div className="col-6 col-md-6 mb-2">
            <p className="color-grey-1">
              <i className="bi bi-cone mr-1"></i>
              5 Seats
            </p>
          </div>

          <div className="col-6 col-md-6 mb-2">
            <p className="color-grey-1">
              <i className="bi bi-cone mr-1"></i>
              9 Baggage
            </p>
          </div>

          <div className="col-6 col-md-6 mb-2">
            <p className="color-grey-1">
              <i className="bi bi-cone mr-1"></i>
              4 Auto
            </p>
          </div>

          <div className="col-6 col-md-6 mb-2">
            <p className="color-grey-1">
              <i className="bi bi-cone mr-1"></i>
              4 Door
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default ItemCar;
