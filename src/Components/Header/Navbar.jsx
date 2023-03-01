
import { Link } from "react-router-dom";
import { Header } from "./NavbarStyled";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem('auth_token')

  const logout_handler =()=>{
    localStorage.removeItem('auth_token')
    navigate('/login')
    // alert("logout")
  }

  return (
    <Header>
        <nav className="navbar position-sticky navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">My<span>Mess</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      { !token ? <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/">Home</Link>
        </li>
         <li className="nav-item">
        <Link  className="nav-link " to="/register">Register</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link " to="/Login">Login   </Link>
        </li>
       
      </ul> : <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/">Home</Link>
        </li>
         <li className="nav-item">
        <Link onClick={logout_handler} className="nav-link " to="/login">Logout</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link " to="/profile">Profile   </Link>
        </li>
      </ul>}
    </div>
  </div>
</nav>
    </Header>
  )
}

export default Navbar

