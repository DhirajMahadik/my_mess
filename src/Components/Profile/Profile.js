import styled from "styled-components";
import { PencilSquare } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loder from "../Loader/Loder";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
//   const [gallary, setGallary] = useState([])
  const [loading, setLoading] = useState(false);
  const [banner_loading, setBanner_loading] = useState(false);
  // const [newData, setNewData] = useState({
  //     messname:user.messname, messtype:"", address:"", location:"", phone:"", email:"", mess_open:"", mess_closs:""
  // })

  const [daily_updates, set_daily_updates] = useState({
    lunch_time: "",
    lunch_price: "",
    dinner_time: "",
    dinner_price: "",
    lunch_menu: "",
    dinner_menu: "",
  });

  // const [image_collection, setImage_collection] = useState()

  const addImage_banner = (e) => {
    let file = e.target.files[0];
    let obj = { _id: user._id, image: file, previous: user.image };
    let formData = new FormData();
    for (let key of Object.keys(obj)) {
      formData.append(key, obj[key]);
    }
    console.log(formData);
    setBanner_loading(true);
    fetch("http://localhost:5000/add-image", {
      method: "POST",
      body: formData,
      // headers:{'Content-Type':'application/json'}
    }).then((res) => {
      getProfile();
      setBanner_loading(false);
      return res.json();
    });
  };

  const addImage_collection = (e) => {
    let file = e.target.files[0];
    let obj = { _id: user._id, image: file };
    let formData = new FormData();
    for (let key of Object.keys(obj)) {
      formData.append(key, obj[key]);
    }
    console.log(formData);
    setLoading(true);
    fetch("https://careful-ray-helmet.cyclic.app/add-collection-image", {
      method: "POST",
      body: formData,
      // headers:{'Content-Type':'application/json'}
    }).then((res) => {
      if (res.status === 200) {
        getProfile();
        setLoading(false);
      }
    });
  };

  const removeImage_collection = (url) => {
    let obj = { _id: user._id, previous: url };
    // let formData = new FormData()
    // for (let key of Object.keys(obj)) {
    //     formData.append(key, obj[key]);
    // }
    // console.log(formData)
    setLoading(true);
    fetch("https://careful-ray-helmet.cyclic.app/remove-collection-image", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {

        getProfile();
        setLoading(false);
      }
    });
  };

  const onChangeHandler = (e) => {
    // setNewData({...newData, [e.target.name]:e.target.value})
    set_daily_updates({ ...daily_updates, [e.target.name]: e.target.value });
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateProfileInfo = () => {
    console.log(user);
    fetch("https://careful-ray-helmet.cyclic.app/update-profile", {
      method: "PUT",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        getProfile();
        toast.success("Profile details updeted successfully.", Toastoptions);
      }
    });
  };

  const updateDailyUpdates = () => {
    fetch("https://careful-ray-helmet.cyclic.app/update-profile", {
      method: "PUT",
      body: JSON.stringify(Object.assign(daily_updates, { _id: user._id })),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        getProfile();
        toast.success("Daily details updeted successfully.", Toastoptions);
      }
    });
  };

  const Toastoptions = {
    position: "top-center",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const getProfile = () => {
    let auth_token = localStorage.getItem("auth_token");

    if (auth_token) {
      let token_key = JSON.parse(auth_token);
      console.log(token_key.token);

      fetch("https://careful-ray-helmet.cyclic.app/profile", {
        method: "GET",
        headers: {
          authorization: "Bearer " + token_key.token,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res1) => {
          if (res1.name === "TokenExpiredError") {
            localStorage.removeItem("auth_token");
            navigate("/login");
          } else {
            setUser(res1);
            // setGallary(res1.photos)
            console.log(res1);
          }
        })
        .catch(async (err) => {
          let Err = await err.json();
          console.log(Err);
        });
    } else {
      navigate("/login");
    }
  };
  console.log(user);

  useEffect(() => {
    getProfile();
    console.log("hello");
    // eslint-disable-next-line
  }, []);

  const image_style = {
    backgroundImage: `url(${user.image})`,
  };

  return (
    <PROFILE>
      <div className="container">
        <div className="image py-3" style={image_style}>
          {/* <img className="py-3" src="https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020" alt="" /> */}
          {!banner_loading ? (
            <form>
              <h2 htmlFor="banner">Update your mess banner...</h2>
              <input
                className=" my-2"
                id="banner"
                name="image"
                onChange={addImage_banner}
                type="file"
              />
              <label
                type="button"
                htmlFor="banner"
                className="btn btn-sm btn-warning"
              >
                Update
              </label>
            </form>
          ) : (
            <Loder />
          )}
        </div>

        <div className="Deatails py-5 px-4 my-4 mx-3 row g-3 ">
          <div className="edit">
            <samp data-bs-toggle="modal" data-bs-target="#exampleModal">
              Edit details <PencilSquare />
            </samp>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Edit your details
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        Name of your mess
                      </label>
                      <input
                        required
                        onChange={onChangeHandler}
                        name="messname"
                        value={user.messname}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter name here"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="type" className="form-label">
                        Type
                      </label>
                      <select
                        required
                        onChange={onChangeHandler}
                        name="messtype"
                        value={user.messtype}
                        id="type"
                        className="form-select"
                      >
                        <option value={"Veg/Non-Veg"}>Veg / Non-veg</option>
                        <option value={" Only Veg"}>Only Veg</option>
                        <option value={" Only Non-Veg"}>Only Non-Veg</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label htmlFor="inputAddress" className="form-label">
                        Address
                      </label>
                      <input
                        required
                        onChange={onChangeHandler}
                        name="address"
                        value={user.address}
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="location" className="form-label">
                        Location URL
                      </label>
                      <input
                        required
                        onChange={onChangeHandler}
                        name="location"
                        value={user.location}
                        type="text"
                        className="form-control"
                        id="location"
                        placeholder="Google map link etc"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Phone no
                      </label>
                      <input
                        required
                        onChange={onChangeHandler}
                        name="phone"
                        value={user.phone}
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone no"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        required
                        onChange={onChangeHandler}
                        name="email"
                        value={user.email}
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="col-4">
                      <label className="form-label" htmlFor="openTime">
                        Mess open at
                      </label>
                      <input
                        required
                        onChange={onChangeHandler}
                        name="mess_open"
                        value={user.mess_open}
                        className="form-control"
                        type="time"
                        id="openTime"
                      />
                    </div>

                    <div className="col-4">
                      <label className="form-label" htmlFor="closeTime">
                        Mess close at
                      </label>
                      <input
                        onChange={onChangeHandler}
                        name="mess_close"
                        value={user.mess_close}
                        className="form-control"
                        type="time"
                        id="closeTime"
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    {/* <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button> */}
                    <button
                      type="button"
                      onClick={updateProfileInfo}
                      className="btn btn-primary btn-sm"
                      data-bs-dismiss="modal"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-md-6">
            <h4> Mess name </h4>
            <p className={`${user.messname ? "" : "text-danger"}`}>
              {user.messname
                ? user.messname
                : "Please update your messname****"}
            </p>
          </div>
          <div className="col-md-6">
            <h4> Type </h4>
            <p className={`${user.messtype ? "" : "text-danger"}`}>
              {user.messtype ? user.messtype : "Please update****"}
            </p>
          </div>
          <div className="col-md-6">
            <h4> Address </h4>
            <p className={`${user.address ? "" : "text-danger"}`}>
              {user.address ? user.address : "Please update your address****"}
            </p>
          </div>

          {/* <div className="col-md-6">
                        <h4> Location link </h4>
                        <p></p>
                    </div> */}

          <div className="col-md-6">
            <h4> Phone no </h4>
            <p>{user.phone}</p>
          </div>

          <div className="col-md-6">
            <h4> Email address </h4>
            <p className={`${user.email ? "" : "text-danger"}`}>{user.email}</p>
          </div>

          <div className="col-md-6">
            <h4> Mess open at </h4>
            <p className={`${user.mess_open ? "" : "text-danger"}`}>
              {user.mess_open ? user.mess_open : "Please update****"}
            </p>
          </div>

          <div className="col-md-6">
            <h4> Mess close at </h4>
            <p className={`${user.mess_close ? "" : "text-danger"}`}>
              {user.mess_close ? user.mess_close : "please update****"}
            </p>
          </div>
          <hr />

          <div className=" col-md-12">
            <h3> Daily Updates </h3>
          </div>

          <div className=" col-md-12">
            <h5> Lunch and Dinner time </h5>
          </div>

          <div className="col-md-3">
            Lunch time{" "}
            <input
              className="form-control"
              onChange={onChangeHandler}
              type="time"
              name="lunch_time"
              value={user.lunch_time}
              placeholder="eg. 12 pm to 3 pm"
            />
          </div>

          <div className="col-md-3">
            Dinner time{" "}
            <input
              className="form-control"
              onChange={onChangeHandler}
              type="time"
              name="dinner_time"
              value={user.dinner_time}
              placeholder="eg. 7 pm to 10 pm"
            />
          </div>
          <div className="col-md-3">
            Lunch Price{" "}
            <input
              className="form-control"
              onChange={onChangeHandler}
              type="text"
              name="lunch_price"
              value={user.lunch_price}
              placeholder=""
            />
          </div>

          <div className="col-md-3">
            Dinner Price{" "}
            <input
              className="form-control"
              onChange={onChangeHandler}
              type="text"
              name="dinner_price"
              value={user.dinner_price}
              placeholder=""
            />
          </div>

          <hr />

          <div className="col-md-12">
            <h5> Today's Menu</h5>
            <h6 className="text-danger">
              Please update menu details regularly
            </h6>
          </div>

          <div className="col-md-3">
            <label className="form-controlo">Lunch menu</label>
            <textarea
              className="form-control"
              rows=""
              cols=""
              name="lunch_menu"
              onChange={onChangeHandler}
              value={user.lunch_menu}
              placeholder=" please update it on daily basis Eg. bhaji , chapati ect"
            />
          </div>

          <div className="col-md-3">
            <label className="form-controlo">Dinner menu</label>
            <textarea
              className="form-control"
              rows=""
              cols=""
              name="dinner_menu"
              onChange={onChangeHandler}
              value={user.dinner_menu}
              placeholder=" please update it on daily basis Eg. bhaji , chapati ect"
            />
          </div>

          <div className="edit">
            <button
              type="button"
              onClick={updateDailyUpdates}
              className="btn btn-sm btn-warning"
            >
              Update
            </button>
          </div>

          {/* <div className="col-md-3">
                    Friday <input type="" name="" value=""/>
                    </div>

                    <div className="col-md-3">
                    Saturday <input type="" name="" value=""/>
                    </div> */}
        </div>

        <h2>Gallary</h2>
        <hr />
        <div className=" gallary row g-3">
          {!loading ? (
            user.photos ? (
                user.photos.map((element) => {
                return (
                  <div className="col-md-4 py-2">
                    <div className="card " style={{ width: "18rem" }}>
                      <img src={element} className="card-img-top" alt="..." />
                      <div className="card-body position-absulute">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => removeImage_collection(element)}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h3>Please upload some pictures</h3>
            )
          ) : (
            <Loder />
          )}

          <div className="col-md-12 py-2 d-flex">
            <label className="upload-label bg-warning" htmlFor="upload-photo">
              Add More
            </label>
            <input
              className="upload-photo"
              type="file"
              name="photo"
              onChange={addImage_collection}
              id="upload-photo"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </PROFILE>
  );
};

export default Profile;

const PROFILE = styled.div`
  /* background-color: #000; */
  background-color: #6a8297;

  .container {
    /* background-color: aliceblue; */

    display: flex;
    flex-direction: column;
    .loader {
      position: absolute;
    }
  }

  .container h3 {
    text-align: center;
  }

  .container h2 {
    text-align: center;
  }

  .image {
    display: flex;
    /* flex-direction: column; */
    /* margin: auto; */
    /* background-image: url("https://cdnkdc.azureedge.net/cdprod/Media/global/pages/kerrydigest/asian-trends-2020"); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 400px;
    margin-top: 20px;
    border-radius: 20px;
  }

  .image form {
    /* width: 500px; */
    margin: auto;
    text-align: center;
    background-color: rgba(0 0 0/50%);
    padding: 15px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    h2 {
      color: #fff;
      font-weight: 800;
    }
  }

  .image input {
    border-radius: 20px;
    color: #fff;
    visibility: hidden;
  }

  .image label {
    /* font-size: 1rem; */
    font-weight: bold;
    padding: 10px;
    color: #fff;
  }

  .image img {
    /* width: 100vw; */
    width: -webkit-fill-available;
    margin: auto;
    border-radius: 50px;
  }

  .Deatails {
    /* background-color: #b0dada; */
    background-color: #d2f1f1;
    border-radius: 20px;
  }

  .Deatails h4,
  p {
    padding: 0;
    margin: 2px;
  }

  input {
    border: none;
  }

  input:focus,
  textarea:focus {
    border: none;
    box-shadow: none;
  }

  .Deatails p {
    padding: 5px 5px 5px 10px;
    color: #000;
    background-color: #b7dce3;
    border-radius: 5px;
    text-align: center;
  }

  .Deatails h4 {
    /* border-bottom: solid #000 1px; */
    /* text-align: center; */
    /* border-top: solid #000 1px; */
  }

  .edit {
    display: flex;
    justify-content: end;
  }

  .edit samp {
    cursor: pointer;
  }

  .modal-body input {
    border: solid 1px;
  }

  .gallary .card {
    margin: auto;
  }

  .gallary .card-body {
    position: absolute;
    bottom: 0;
  }

  .upload-photo {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  .upload-label {
    margin: auto;
    /* color: #fff; */
    padding: 5px 10px;
    cursor: pointer;
    /* font-weight: bold; */
    /* border: solid yellowgreen 1px; */
    /* background-color: red; */
    border-radius: 20px;
  }
`;
