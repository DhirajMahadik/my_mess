import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home';
import Mess from './Components/Home/Mess';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Components/Home/Register';
import Login from './Components/Home/Login';
import Profile from './Components/Profile/Profile';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mess/:id' element={<Mess />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
