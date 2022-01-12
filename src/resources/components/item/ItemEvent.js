import { Badge } from "react-bootstrap";

const ItemEvent = ({ isFeatured }) => {
  return (
    <div className="item cursor">
      <div className="image d-flex flex-column justify-content-between flex-wrap">
        <div>
          {isFeatured && <Badge variant="default" className="featured">Featured</Badge>}
        </div>

        <div className="">

        </div>
      </div>

      <div className="p-3 border bg-white">
        <p className="font-sz-medium color-grey-1">
          <i className="bi bi-geo-alt mr-2"></i>
          London
        </p>

        <p className="font-sz-medium font-wg-500 mt-2">Aspen Glade Weddings & Events</p>

        <div className="mt-2">
          <span className="color-danger-1 py-2 mr-2">4.3/5 Very Good</span>
          <span>3 Reviews</span>

          <p className="font-sz-medium mt-2">
            Start Time: 15:00
          </p>
        </div>

        <span className="py-1"><hr /></span>

        <div className="d-flex justify-content-between">
          <p className="font-sz-medium">
            3H
          </p>

          <p className="font-sz-medium">
            From $528
          </p>
        </div>
      </div>
    </div >
  );
}

export default ItemEvent;
