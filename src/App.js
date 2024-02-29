
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./components/Pages/Home";
import Services from './components/Pages/Services'
import Products from './components/Pages/Products'
import Signup from './components/Pages/Signup'
function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/sign-up' element={<Signup/>}/>
            </Routes>
        </Router>

    </>
  );
}

export default App;
