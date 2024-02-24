import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
// import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import Newproducts from './components/Newproducts';
import Women from './components/Women';
import Men from './components/Men';
import Shoes from './components/Shoes';
// import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/' element={<Newproducts />} >

              <Route index element={<Men />} />
              <Route path='women' element={<Women />} />
              <Route path='men' element={<Men />} />
              <Route path='shoes' element={<Shoes />} />
          </Route>

          {/* <Route path='/' element={<Products />} /> */}
          <Route path='/form' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/home' element={<Products />} /> */}
          {/* <Route path='/' element={<Footer />} /> */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        
      </BrowserRouter>

       
    </div>
  );
}

export default App;

