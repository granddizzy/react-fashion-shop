import './App.css';
import './css/style.css';

import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './pages/Product';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Catalog from "./pages/Catalog";

const baseUrl = "";

function App() {
  return (
    <>
      <BrowserRouter basename={baseUrl}>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          {/*<Route path="/cart" element={<Cart/>}/>*/}
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          {/*<Route path="*" element={<NotFount/>}/>*/}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
