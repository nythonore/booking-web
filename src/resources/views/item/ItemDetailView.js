import { Badge, Image } from "react-bootstrap";

const ItemDetailView = () => {
  return (
    <div className="trending-section">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="d-flex justify-content-between">
              <div>
                <p className="font-sz-large font-wg-500">Toyota Prius Plus</p>

                <p className="font-sz-normal color-grey-1 mt-2">
                  <i className="bi bi-geo-alt mr-2"></i>
                  Arrondissement de Paris
                </p>
              </div>

              <div className="d-flex align-items-center">
                <div className="mr-2">
                  <p className="font-sz-medium">Not Rated</p>
                  <p className="font-sz-normal color-primary">from 0 reviews</p>
                </div>

                <div>
                  <Badge className="bg-primary text-white font-sz-medium py-3">0/5</Badge>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Image src="https://i.pinimg.com/originals/c7/05/82/c70582ace59a21310b39b838b19ef5e6.jpg" alt="Image" className="img-fluid" width="100%" />

              <div className="row px-2 mt-3">
                {
                  [1, 2, 3, 4, 5, 6].map((_, key) => (
                    <div key={key} className="col-md-2 px-2">
                      <Image src="https://i.pinimg.com/originals/c7/05/82/c70582ace59a21310b39b838b19ef5e6.jpg" alt="Image" className="img-fluid" width="100%" />
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="py-3"><hr /></div>

            <div>
              <p className="color-primary font-sz-title font-wg-500 text-uppercase">Description</p>

              <div className="mt-3 color-grey-1 font-sz-medium">
                <p>Libero sem vitae sed donec conubia integer nisi integer rhoncus imperdiet orci odio libero est integer a integer tincidunt sollicitudin blandit fusce nibh leo vulputate lobortis egestas dapibus faucibus metus conubia maecenas cras potenti cum hac arcu rhoncus nullam eros dictum torquent integer cursus bibendum sem sociis molestie tellus purus</p>
                <p className="mt-3">Quam fusce convallis ipsum malesuada amet velit aliquam urna nullam vehicula fermentum id morbi dis magnis porta sagittis euismod etiam</p>
              </div>
            </div>

            <div className="py-3"><hr /></div>

            <div>
              <p className="color-primary font-sz-title font-wg-500 text-uppercase">Highlight</p>

              <div className="mt-3 color-grey-1 font-sz-medium">
                <p>
                  <i className="bi bi-circle color-primary mr-2"></i>
                  Visit the Museum of Modern Art in Manhattan
                </p>

                <p className="mt-2">
                  <i className="bi bi-circle color-primary mr-2"></i>
                  See amazing works of contemporary art, including Vincent van Gogh's The Starry Night
                </p>

                <p className="mt-2">
                  <i className="bi bi-circle color-primary mr-2"></i>
                  Check out Campbell's Soup Cans by Warhol and The Dance (I) by Matisse
                </p>

                <p className="mt-2">
                  <i className="bi bi-circle color-primary mr-2"></i>
                  Behold masterpieces by Gauguin, Dali, Picasso, and Pollock
                </p>
              </div>
            </div>

            <div className="py-3"><hr /></div>

            <div>
              <p className="color-primary font-sz-title font-wg-500 text-uppercase">Facilities</p>

              <div className="row mt-4">
                {
                  [1, 2, 3, 4, 5, 6].map((_, key) => (
                    <div key={key} className="col-md-4">
                      <p className="mb-3">
                        <i className="bi bi-alarm color-primary mr-2 font-sz-title"></i>
                        Wake-up call
                      </p>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="py-3"><hr /></div>

            <div>
              <p className="color-primary font-sz-title font-wg-500 text-uppercase">Hotel Service</p>

              <div className="row mt-4">
                {
                  [1, 2, 3, 4, 5, 6].map((_, key) => (
                    <div key={key} className="col-md-4">
                      <p className="mb-3">
                        <i className="bi bi-alarm color-primary mr-2 font-sz-title"></i>
                        Wake-up call
                      </p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="border d-flex align-items-center p-3">
              <Image src="https://nythonore.me/nythonore.jpg" className="img-fluid mr-2 user_item_img" />

              <div>
                <p className="font-sz-normal font-wg-500 color-dark">Admin User</p>
                <p className="font-sz-small color-grey-1">Member since May 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailView;
