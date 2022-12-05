import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
