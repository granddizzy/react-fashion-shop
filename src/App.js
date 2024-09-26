import './App.css';
import './css/style.css';

import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const baseUrl = "";

function App() {
  return (
    <>
      <BrowserRouter basename={baseUrl}>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          {/*<Route path="/cart" element={<Cart/>}/>*/}
          {/*<Route path="/pizza/:id" element={<Pizza/>}/>*/}
          {/*<Route path="*" element={<NotFount/>}/>*/}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
