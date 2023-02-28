import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GeoAltFill } from "react-bootstrap-icons";
import Loder from "../Loader/Loder";

const Home = () => {
  const [messList, setMessList] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(messList.image);

  const GetData = async () => {
    setLoading(true);
    let data = await fetch(" https://careful-ray-helmet.cyclic.app/", {
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
        ` https://careful-ray-helmet.cyclic.app/search/${key}`,
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
                  <div className="card " key={element._id} style={{ width: "18rem" }}>
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
          ) : <Loder />}
        </div>
      </div>
    </HOME>
  );
};

export default Home;

const HOME = styled.section`
  background-color: #000;
  padding-top: 10px;
  /* height: 100vh; */
  .Link {
    width: 100%;
    text-decoration: none;
    color: #000;
  }

  .Flex {
    /* background-image: url("https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020"); */
    background-image:url("https://b.zmtcdn.com/data/pictures/8/18894888/479fef6a7a652d56a755e0d4bcf2e90e.jpg");
    /* background-image:url("http://malbecho.net/cart/php/store/static_uploads/B2_06_10_2016_11_27_49.png"); */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 300px;
    display: flex;
  }

  .Flex form {
    margin: auto;
    input {
      padding: 20px 20px;
      background-color: #0000005e;
      color: #fff;
      border: solid goldenrod 2px;
      border-radius: 20px;
      -webkit-text-fill-color: #fff;
      -webkit-text-fill-background-color: #000;
      :hover{
        padding: 20px 100px; 
        transition: 1s;
      }

      input:-webkit-autofill{
     background-color:#0000005e ;
    
}

    }
  }

  .Flex span {
    color: red;
  }

  .Flex form h1 {
    font-size: 4rem;
    font-family: cursive;
    color: #fff;
    font-weight: 900;
    font-style: italic;
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: center;
    text-shadow: 2px 2px 2px #000;
  }

  .card {
    /* width: 18rem; */
    margin: 20px  auto;
    padding: 0;
    border-radius: 50px 0;
    background-color: #e0e0e0;
    height: 300px;
    /* border: none; */
    :hover{
        transform: scale(1.1);
        transition: .5s;
    }
  }


  .card-body {
    position: relative;
    margin-top: 123px;
    background-color: #e0e0e0;
    border-radius: 50px 0px 50px 0px;
  }

  button {
    margin: 10px auto;
  }

  .container {
    margin: auto;
    padding: 20px;
    /* height: 100vh; */
  }

  .card-text {
    font-weight: 800;
  }

  img {
    height: 170px;
    position: absolute;
    border-radius: 50px 0 0 0;
  }

  hr {
    color: #fff;
  }

  h4 {
    text-align: center;
    color: #fff;
    font-weight: bold;
    padding: 20px;
  }

  span {
    display: block;
  }

  /* form{
        width: fit-content;
        padding-top: 30px;
        margin: auto;
    } */

  form input {
    height: 30px;
  }

  @media (max-width: 767px) {
    height: 100%;

    .Container {
      height: 100%;
    }
  }
`;
