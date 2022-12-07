
import { Link } from "react-router-dom";
import styled from "styled-components"
const Navbar = () => {
  return (
    <Header>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">My<span>Mess</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/">Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Features</a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Pricing</a> */}
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

.navbar-toggler:focus{
  box-shadow: none;
}
`;