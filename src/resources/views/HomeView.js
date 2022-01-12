import { useState } from "react";
import { Button } from "react-bootstrap";
import Blog from "../components/client/Blog";
import Destination from "../components/client/Destination";
import Hero from "../components/client/Hero";
import ItemCar from "../components/item/ItemCar";
import ItemEvent from "../components/item/ItemEvent";
import ItemHotel from "../components/item/ItemHotel";
import ItemSpace from "../components/item/ItemSpace";
import ItemTour from "../components/item/ItemTour";

const HomeView = () => {
  const [category, setCategory] = useState('Hotel');
  const buttons = ['Hotel', 'Space', 'Tour', 'Car', 'Event']

  return (
    <>
      <Hero />

      <div className="destination-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center font-sz-large font-wg-700">Top Destination</p>
              <div className="d-flex justify-content-center mt-2"><p className="title-line"></p></div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <Destination />
            </div>

            <div className="col-md-6 mb-4">
              <Destination />
            </div>

            <div className="col-md-3 mb-4">
              <Destination />
            </div>

            <div className="col-md-3 mb-4">
              <Destination />
            </div>

            <div className="col-md-3 mb-4">
              <Destination />
            </div>

            <div className="col-md-3 mb-4">
              <Destination />
            </div>
          </div>
        </div>
      </div>

      <div className="trending-section bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center font-sz-large font-wg-700">Top Trending</p>
              <div className="d-flex justify-content-center mt-2"><p className="title-line"></p></div>
            </div>
          </div>

          <div className="row justify-content-center category mt-5">
            <div className="col-md-12 text-center">
              {
                buttons.map((value, key) => (
                  <Button
                    key={key}
                    variant="default"
                    className={`${value === category ? `bg-primary text-white` : `text-dark`} px-4`}
                    onClick={() => setCategory(value)}
                  >{value}</Button>
                ))
              }
            </div>
          </div>

          <div className="row mt-5">
            {
              [1, 2, 3, 4, 5, 6, 7, 8].map((_, key) => (
                <div className="col-md-3 mb-4">
                  {category === 'Hotel' && <ItemHotel key={key} isFeatured={key % 3 === 0} />}
                  {category === 'Space' && <ItemSpace key={key} isFeatured={key % 4 === 0} />}
                  {category === 'Tour' && <ItemTour key={key} isFeatured={key % 2 === 0} />}
                  {category === 'Car' && <ItemCar key={key} isFeatured={key % 6 === 0} />}
                  {category === 'Event' && <ItemEvent key={key} isFeatured={key % 5 === 0} />}
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="why-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center font-sz-large font-wg-700">Why Choose</p>
              <div className="d-flex justify-content-center mt-2"><p className="title-line"></p></div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4 text-center mb-4">
              <i className="bi bi-tag color-danger-1"></i>
              <p className="mt-4 font-sz-title font-wg-500">Competitive Pricing</p>
              <p className="mt-2 font-sz-medium color-grey-1">With 500+ suppliers and the purchasing power of 300 million members, mytravel.com can save you more!</p>
            </div>

            <div className="col-md-4 text-center mb-4">
              <i className="bi bi-award color-danger-1"></i>
              <p className="mt-4 font-sz-title font-wg-500">Award-Winning Service</p>
              <p className="mt-2 font-sz-medium color-grey-1">Travel worry-free knowing that we're here if you needus, 24 hours a day</p>
            </div>

            <div className="col-md-4 text-center mb-4">
              <i className="bi bi-globe color-danger-1"></i>
              <p className="mt-4 font-sz-title font-wg-500">Worldwide Coverage</p>
              <p className="mt-2 font-sz-medium color-grey-1">Over 1,200,000 hotels in more than 200 countries and regions & flights to over 5,000 cities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center font-sz-large font-wg-700">Today's Blog</p>
              <div className="d-flex justify-content-center mt-2"><p className="title-line"></p></div>
            </div>
          </div>

          <div className="row mt-5">
            {
              [1, 2, 3].map((_, key) => (
                <div className="col-md-4"><Blog /></div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeView;
