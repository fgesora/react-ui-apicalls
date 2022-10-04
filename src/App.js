import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HelloWorld from './Components/HelloWorld'
import './tailwind.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Contact from './Views/Contact';
import Product from './Views/Product';

function App() {
  return (
    <div className='relative pb-10 min-h-screen'>

      <Router>
        
        <Header/>

        <div className='p-3'>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/about" element = { <About/> } />
            <Route path="/product/:id" element = { <Product/> } />
            <Route path="/contact" element = { <Contact/> } />
          </Routes>
        </div>

        <Footer/>

      </Router>

      
    </div>
  );
}

export default App;