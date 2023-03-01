import { useState } from "react";
import { LOGIN } from "./LoginStyled";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { PersonCircle, ArrowLeftCircleFill } from "react-bootstrap-icons";

const Login = () => {
  const Toastoptions = {
    position: "top-center",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const Navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const onchangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const backToHome = () => {
    Navigate("/");
  };

  const UserLogin = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 400) {
          toast.error("Enter valid login credential", Toastoptions);
          return;
        } else {
          return res.json();
        }
      })
      .then((res) => {
        const token = res;
        console.log(res);
        if (res) {
          localStorage.setItem("auth_token", JSON.stringify(token));
          toast.success("Login successfull", Toastoptions);
          Navigate("/profile");
        } else {
          return;
        }
      })
      .catch((err) => {
        console.log();
        toast.error(err.message, Toastoptions);
      });
  };

  return (
    <LOGIN>
      <form onSubmit={UserLogin} className="col g-3">
        <div class="col-md-12">
          <ArrowLeftCircleFill
            onClick={backToHome}
            style={{ fontSize: "2rem" }}
          />
        </div>
        <div class="col-md-12">
          <h1>
            <PersonCircle />
          </h1>
          <h2>Login</h2>
          <ToastContainer />
        </div>
        <div class="col-md-12">
          <label for="InputEmail" class="form-label">
            Email address
          </label>
          <input
            required
            onChange={onchangeHandler}
            value={user.email}
            name="email"
            type="email"
            class="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
          />
        </div>
        <div class="col-md-12">
          <label for="Password" class="form-label">
            Password
          </label>
          <input
            required
            onChange={onchangeHandler}
            value={user.password}
            name="password"
            type="password"
            class="form-control"
            id="Password"
            placeholder="Enter your password"
          />
        </div>
        <div class="col-md-12">
          <button type="submit" class="btn btn-sm btn-outline-warning">
            Login
          </button>
        </div>
      </form>
    </LOGIN>
  );
};

export default Login;
