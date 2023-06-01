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
    backgroundImage: `url(${mess.image})`,
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
            <h5> Phone : {mess.phone}</h5>
            <a
              href={`tel:+91-${mess.phone}`}
              className="btn btn-sm btn-success"
            >
            
              <TelephoneFill className="icon" /> Call now
            </a>
            <a
              target="blank"
              href={mess.location}
              className="btn btn-sm btn-danger"
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
                  {mess.lunch_time}
                </h6>
              </div>
              <div className="col-md-6 ">
                <h5 className="text-warning">Dinner Time</h5>
                <h6 className="my-2 text-center text-light">
                  {mess.dinner_time}
                </h6>
              </div>
              <div className="col-md-6 ">
                <h5 className="text-warning">Lunch Price</h5>
                <h6 className="my-2 text-center text-light">
                  Rs. {mess.lunch_price} /-
                </h6>
              </div>
              <div className="col-md-6 ">
                <h5 className="text-warning">Dinner Price</h5>
                <h6 className="my-2 text-center text-light">
                  Rs. {mess.dinner_price} /-
                </h6>
              </div>
            </div>
            <h3>Today's Menu</h3>
            <div className="d-flex row">
              <div className="col-md-6 ">
                <h5 className="text-warning">Lunch Menu</h5>
                <h6 className="my-2 text-center text-light">
                  {mess.lunch_menu}
                </h6>
              </div>
              <div className="col-md-6 ">
                <h5 className="text-warning">Dinner Menu</h5>
                <h6 className="my-2 text-center text-light">
                  {mess.dinner_menu}
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
