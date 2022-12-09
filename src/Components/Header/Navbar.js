
import { Link } from "react-router-dom";
import styled from "styled-components"
const Navbar = () => {
  return (
    <Header>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">My<span>Mess</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link " to="/register">Register</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link " to="/Login">Login   </Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled">Disabled</a> */}
        </li>
      </ul>
    </div>
  </div>
</nav>
    </Header>
  )
}

export default Navbar

const Header = styled.header`
span{
  color: red;
  font-weight: 700;
}

.navbar-toggler{
  border: none;
}

.collapse{
  justify-content: flex-end;
  margin-right: 30px;
}

.navbar-toggler:focus{
  box-shadow: none;
}
`;