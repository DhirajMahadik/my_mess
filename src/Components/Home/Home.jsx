import { HOME } from "./HomeStyled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GeoAltFill } from "react-bootstrap-icons";
import Loder from "../Loader/Loder";

const Home = () => {
  const [messList, setMessList] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(messList.image);
  console.log(process.env.REACT_APP_API_URL)

  const GetData = async () => {
    setLoading(true);
    let data = await fetch(process.env.REACT_APP_API_URL, {
      method: "get",
    });
    let result = await data.json();
    setMessList(result);
    setLoading(false);
    // console.log(result)
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

  // const DeleteCard = async (id) => {
  //     console.log(id)
  //     let data = await fetch(` https://teal-zealous-lemur.cyclic.app/delete/${id}`, { method: "delete" })
  //     let res = await data.json()
  //     console.log(res)
  //     GetData()
  // }

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
          {!loading ? !messList.length < 1 ? (
            messList.map((element) => {
              console.log(element);

              // return
           
              return (
                
                <div className="col-md-4">
                  <div className="card " key={element._id} style={{ width: "18rem"}}>
                    <Link className="Link  " to={`/mess/${element._id}`}>
                      {/* <span style={{ color: "black", border: " solid 2px #fff" }} className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-warning">
                                4.5
                            </span> */}

                      {/* <img src={element.image ? element.image : "https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020"} className="card-img-top" alt="..." /> */}
                      <img
                        src={element.image}
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
                          <GeoAltFill /> {element.address}
                        </span>
                      </div>
                    </Link>
                    {/* <div className="d-flex">
                            <button onClick={() => DeleteCard(element._id)} className="btn btn-danger btn-sm">delete</button>
                            </div> */}
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
          ) : <Loder/>}
        </div>
      </div>
    </HOME>
  );
};

export default Home;


