import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Contact from "../src/pages/Contact";
import About_us from "../src/pages/about_us";
import Layout from "./components/Layout";
import Login from "../src/components/Login";
import Orders from '../src/pages/Orders';
import {  NameProvider } from '../src/global/nameContext';

function App() {

  return (
    <div>
      <NameProvider>
      <BrowserRouter>
      <header></header>
      <footer>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/about_us' element={<About_us />}></Route>
            <Route path="/Orders" element={<Orders />}></Route>
          </Routes>
        <Layout></Layout>
      </footer>
      </BrowserRouter>
      </NameProvider>
    </div>
  );
}

export default App;
