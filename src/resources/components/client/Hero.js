import { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const Hero = () => {
  const [tab, setTab] = useState('Hotel');

  const tabs = [
    { icon: 'bi bi-house', value: 'Hotel' },
    { icon: 'bi bi-person-workspace', value: 'Space' },
    { icon: 'bi bi-geo', value: 'Tour' },
    { icon: 'bi bi-inboxes', value: 'Car' },
    { icon: 'bi bi-calendar-event', value: 'Event' },
  ];

  const formInputClass = `col-12 mb-3 ${['Hotel', 'Space'].includes(tab) ? 'col-md-4' : 'col-md-6'}`;

  return (
    <div className="hero d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12 text-center title">
                <h2 className="text-white">Let's The World Together!</h2>
                <p className="text-white d-block mt-2">Find awesome hotels, spaces, tours, cars and events in Kigali</p>
              </div>

              <div className="col-md-12 mt-5">
                <div className="tabs row mt-4">
                  {
                    tabs.map((data, key) => (
                      <div key={key} className="col cursor d-flex align-items-center" onClick={() => setTab(data.value)}>
                        <div className={`icon ${data.value === tab ? `bg-primary` : ``} d-flex justify-content-center align-items-center mr-2`}>
                          <i className={data.icon}></i>
                        </div>

                        <span className="text-white font-sz-title font-wg-400">{data.value}</span>
                      </div>
                    ))
                  }
                </div>

                <div className="form row mt-4">
                  <div className="col-md-12">
                    <div className="bg-white p-4">
                      <div className="row py-3">
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
                          (tab === 'Hotel' || tab === 'Space') && <div className={formInputClass}>
                            <InputGroup>
                              <InputGroup.Text className="color-primary">
                                <i className="bi bi-calendar-date"></i>
                              </InputGroup.Text>

                              <FormControl placeholder="1 Adult - 0 Child" />
                            </InputGroup>
                          </div>
                        }
                      </div>

                      <Button className="bg-primary px-5">
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
  );
}

export default Hero;
