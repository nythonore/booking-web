import { useParams } from "react-router-dom";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import ItemCar from "../../components/item/ItemCar";
import ItemEvent from "../../components/item/ItemEvent";
import ItemHotel from "../../components/item/ItemHotel";
import ItemSpace from "../../components/item/ItemSpace";
import ItemTour from "../../components/item/ItemTour";

const ItemFilterView = () => {
  const { category } = useParams();

  const formInputClass = `mb-3 ${['hotel', 'space'].includes(category) ? 'col-md-3' : 'col-md-4'}`;

  return (
    <>
      <div className="explore-banner d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12 title">
                  <h2 className="text-white">Search for {category}</h2>
                </div>

                <div className="col-md-12 mt-4">
                  <div className="form px-4 pt-4 pb-2 bg-white shadow">
                    <div className="row py-2">
                      <div className={formInputClass}>
                        <InputGroup>
                          <InputGroup.Text className="color-primary">
                            <i className="bi bi-compass"></i>
                          </InputGroup.Text>

                          <FormControl placeholder="Where are you going?" />
                        </InputGroup>
                      </div>

                      <div className={formInputClass}>
                        <InputGroup>
                          <InputGroup.Text className="color-primary">
                            <i className="bi bi-compass"></i>
                          </InputGroup.Text>

                          <FormControl placeholder="Check IN - Check OUT" />
                        </InputGroup>
                      </div>

                      {
                        (category === 'hotel' || category === 'space') && <div className={formInputClass}>
                          <InputGroup>
                            <InputGroup.Text className="color-primary">
                              <i className="bi bi-calendar-date"></i>
                            </InputGroup.Text>

                            <FormControl placeholder="1 Adult - 0 Child" />
                          </InputGroup>
                        </div>
                      }

                      <div className={formInputClass}>
                        <Button className="bg-primary btn-block px-5">
                          <i className="bi bi-search mr-2"></i>
                          <span className="text-uppercase">Search</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trending-section">
        <div className="container pt-5 mt-2">
          <div className="row">
            <div className="col-md-12">
              <p className="font-sz-large font-wg-500">8 {category} found</p>
            </div>
          </div>

          <div className="row mt-4">
            {
              [1, 2, 3, 4, 5, 6, 7, 8].map((_, key) => (
                <div className="col-md-3 mb-4">
                  {category === 'hotel' && <ItemHotel key={key} isFeatured={key % 3 === 0} />}
                  {category === 'space' && <ItemSpace key={key} isFeatured={key % 4 === 0} />}
                  {category === 'tour' && <ItemTour key={key} isFeatured={key % 2 === 0} />}
                  {category === 'car' && <ItemCar key={key} isFeatured={key % 6 === 0} />}
                  {category === 'event' && <ItemEvent key={key} isFeatured={key % 5 === 0} />}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemFilterView;
