import { HOME } from "./HomeStyled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GeoAltFill } from "react-bootstrap-icons";
import Loder from "../Loader/Loder";

const Home = () => {
  const [messList, setMessList] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(messList.image);
  console.log(process.env.REACT_APP_API_URL);

  const GetData = async () => {
    setLoading(true);
    let data = await fetch('https://careful-ray-helmet.cyclic.app/', {
      method: "get",
    });
    let result = await data.json();
    setMessList(result);
    setLoading(false);
  };

  const SearchHandler = async (e) => {
    setLoading(true);
    let key = e.target.value;
    console.log(key);
    if (key) {
      let data = await fetch(
        ` ${process.env.REACT_APP_API_URL}/search/${key}`,
        { method: "get" }
      );
      let res = await data.json();
      console.log(res);
      if (res) {
        setMessList(res);
        setLoading(false);
      }
    } else {
      GetData();
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <HOME>
      <div className="Flex">
        <form>
          <h1>
            My<span>MESS</span>
          </h1>
          <input
            onChange={(e) => SearchHandler(e)}
            type="Text"
            className="form-control"
            placeholder="Search by location"
          />
        </form>
      </div>

      <div className="container py-3">
        {/* <hr /> */}
        <h4>{!messList.length < 1 ? "You can check following results" : ""}</h4>
        <div className="row g-3">
          {!loading ? (
            !messList.length < 1 ? (
              messList.map((element) => {
                console.log(element);

                // return

                return (
                  <div className="col-md-4">
                    <div
                      className="card "
                      key={element._id}
                      style={{ width: "18rem" }}
                    >
                      <Link className="Link  " to={`/mess/${element._id}`}>
                        <img
                          src={element.image ?element.image : element.location}
                          className="card-img-top"
                          alt="..."
                        />

                        <div className="card-body">
                          <h5 className="card-title ">{element.messname}</h5>
                          <span className="card-text">{element.messtype}</span>
                          <span>Open : {element.mess_open}</span>
                          <span>Close : {element.mess_close}</span>
                          <span>
                            {" "}
                            <GeoAltFill /> {element.address ? element.address.slice(0, 40) + "...": "Address not found"}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="container d-flex" style={{ height: "50vh" }}>
                <h2 style={{ textAlign: "center", margin: "auto" }}>
                  No mess found
                </h2>
              </div>
            )
          ) : (
            <Loder />
          )}
        </div>
      </div>
    </HOME>
  );
};

export default Home;
