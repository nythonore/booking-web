import { Badge } from "react-bootstrap";

const ItemTour = ({ isFeatured }) => {
  return (
    <div className="item cursor">
      <div className="image d-flex flex-column justify-content-between flex-wrap">
        <div>
          {isFeatured && <Badge variant="default" className="featured">Featured</Badge>}
        </div>

        <div className="">
          <p className="text-white font-sz-medium">
            From $652
          </p>
        </div>
      </div>

      <div className="p-3 border bg-white">
        <p className="font-sz-medium color-grey-1">
          <i className="bi bi-geo-alt mr-2"></i>
          London
        </p>

        <p className="font-sz-medium font-wg-500 mt-2">New York: Museum of Modern Art</p>

        <div className="mt-2">
          <Badge className="bg-danger-1 p-2 text-white mr-2">4.3/5</Badge>
          <span>3 Reviews</span>
        </div>

        <span className="py-1"><hr /></span>
        <p className="font-sz-medium">
          <i className="bi bi-alarm mr-1"></i>
          3 Hours
        </p>
      </div>
    </div >
  );
}

export default ItemTour;
