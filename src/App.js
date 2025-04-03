import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Category from './components/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Home/>} />
          {/* <Route path = '/productDetail/:name' element={<ProductDetails/>} /> */}
          <Route path= '/category/:name' element={<Category/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

