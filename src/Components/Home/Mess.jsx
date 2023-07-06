import React, { useEffect, useState } from "react";
import { MESS } from "./MessStyled";
import { useParams } from "react-router-dom";
import { TelephoneFill, GeoAltFill } from "react-bootstrap-icons";

const Mess = () => {
  const param = useParams();
  const [mess, setMess] = useState({});
  const [gallary, setGallary] = useState([]);
  const getMessData = async () => {
    let data = await fetch(
      `${process.env.REACT_APP_API_URL}/mess/${param.id}`,
      {
        method: "get",
      }
    );
    let result = await data.json();
    setMess(result);
    setGallary(result.photos);
  };

  const banner_style = {
    backgroundImage: `url(${mess.image ? mess.image: "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/95e6a-restaurants-vijayawada.jpg?fit=1000%2C667&ssl=1"})`,
  };

  useEffect(() => {
    getMessData();
    // eslint-disable-next-line
  }, []);

  return (
    <MESS>
      <div className="banner" style={banner_style}>
        <h3>{mess.messname} </h3>
      </div>

      <section className="contact   ">
        <div className="container d-flex ">
          <div className="address my-2">
            <h3>Contact</h3>

            <p>{mess.address}</p>
            <h5> Phone : {mess.phone? mess.phone:"NOT PROVIDED"}</h5>
            <a
              href={`tel:+91-${mess.phone }`}
              className={`btn btn-sm btn-success ${mess.phone? "":"disabled"}`}
            >
            
              <TelephoneFill className="icon" /> Call now
            </a>
            <a
              target="blank"
              href={mess.location}
              className= {`btn btn-sm btn-danger`}
            >
              
              <GeoAltFill className="icon" /> Get direction
            </a>
          </div>
          <div className="open-hours d-flex my-2">
            <h3>Open Hours</h3>
            <div className="d-flex row">
              <div className="col-md-6 ">
                <h5 className="text-warning">Lunch Time</h5>
                <h6 className="my-2 text-center text-light">
                  {mess.lunch_time ? mess.lunch_time :"Not Provided"}
                </h6>
              </div>
              <div className="col-md-6 ">
                <h5 className="text-warning">Dinner Time</h5>
                <h6 className="my-2 text-center text-light">
                  {mess.dinner_time ? mess.dinner_time:"Not Provided"}
                </h6>
              </div>
              <div className="col-md-6 ">
                <h5 className="text-warning">Lunch Price</h5>
                <h6 className="my-2 text-center text-light">
                  Rs. {mess.lunch_price  ? mess.lunch_price+" /-":"Not Provided"} 
                </h6>
              </div>
              <div className="col-md-6 ">
                <h5 className="text-warning">Dinner Price</h5>
                <h6 className="my-2 text-center text-light">
                  Rs. {mess.dinner_price  ? mess.dinner_price+ " /-":"Not Provided"} 
                </h6>
              </div>
            </div>
            <h3>Today's Menu</h3>
            <div className="d-flex row">
              <div className="col-md-6 ">
                <h5 className="text-warning">Lunch Menu</h5>
                <h6 className="my-2 text-center text-light">
                  {mess.lunch_menu ? mess.lunch_menu:"Not Provided"}
                </h6>
              </div>
              <div className="col-md-6 ">
                <h5 className="text-warning">Dinner Menu</h5>
                <h6 className="my-2 text-center text-light">
                  {mess.dinner_menu ? mess.dinner_menu:"Not Provided"}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="gallary container  ">
        <div>
          <h2 className="my-2 text-center text-warning">Gallary</h2>
        </div>
        <hr className="text-light" />
        <div className=" row g-2">
          {gallary.length > 0 ? (
            gallary.map((element) => {
              return (
                <div className="col-md-3 py-2 m-auto">
                  <div
                    className="card m-auto  my-2"
                    style={{ width: "18rem", borderRadius: "20px" }}
                  >
                    <img
                      src={element}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "200px", borderRadius: "20px" }}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <h3 className="text-center my-4"> Pictures not available</h3>
          )}
        </div>
      </div>
    </MESS>
  );
};

export default Mess;
