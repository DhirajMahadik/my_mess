import { useState } from "react";
import { REGISTER_LOGIN } from "./RegistrationStyled";
import { ToastContainer, toast } from "react-toastify";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";

const Register = () => {
  const Navigate = useNavigate();
  const [User, setUser] = useState({
    messname: "",
    phone: "",
    email: "",
    password: "",
  });

  const Toastoptions = {
    position: "top-center",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const onchangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...User, [name]: value });
  };

  const OnsubmitHandler = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_API_URL}/add-mess`, {
      method: "POST",
      body: JSON.stringify(User),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Registered Successfully");
          toast.success("Registered Successfully", Toastoptions);
          setTimeout(() => {
            Navigate("/login");
          }, 5000);
        } else if (res.status === 400) {
          console.log("Email Already exist");
          toast.error("Email Already exist.", Toastoptions);
        }
      })
      .catch((err) => {
        toast.error(err.message, Toastoptions);
      });
  };

  const backToHome = () => {
    Navigate("/");
  };

  return (
    <REGISTER_LOGIN className="">
      <form onSubmit={OnsubmitHandler} className="row g-3">
        <div className="col-md-12">
          <ArrowLeftCircleFill
            onClick={backToHome}
            style={{ fontSize: "2rem" }}
          />
        </div>
        <div className="col-md-12">
          <h1>
            <PersonCircle />
          </h1>
          <h2>Register your mess here</h2>
        </div>
        <div className="col-md-12">
          <label htmlFor="name" className="form-label">
            Name of your mess
          </label>
          <input
            required
            onChange={onchangeHandler}
            name="messname"
            value={User.messname}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name here"
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="phone" className="form-label">
            Phone no
          </label>
          <input
            required
            onChange={onchangeHandler}
            name="phone"
            value={User.phone}
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter phone no"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            required
            onChange={onchangeHandler}
            name="email"
            value={User.email}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            required
            onChange={onchangeHandler}
            name="password"
            type="password"
            value={User.password}
            className="form-control"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <div className="col-md-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label"
              data-bs-toggle="modal"
              data-bs-target="#termsANDconditions"
            >
              Accept terms & conditions
            </label>
          </div>
        </div>

        <div className="col-12 d-flex">
          <button type="submit" className="btn btn-sm btn-warning ">
            Register
          </button>
        </div>
      </form>

      {/* Terms and conditions model */}

      <div
        className="modal fade"
        id="termsANDconditions"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Terms & conditions
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Thank you for using mymess. These Terms of Service (the "Terms")
                are intended to make you aware of your legal rights and
                responsibilities with respect to your access to and use of the
                mymess website at www.mymess.com (the "Site") and any related
                mobile or software applications ("mymess Platform") including
                but not limited to delivery of information via the website
                whether existing now or in the future that link to the Terms
                (collectively, the "Services").
                <br />
                <b>
                  These Terms are effective for all existing and future mymess
                  customers, including but without limitation to users having
                  access to 'restaurant business page' to manage their claimed
                  business listings.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </REGISTER_LOGIN>
  );
};

export default Register;
