import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import About_us from "./pages/about_us";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Orders from './pages/Orders';
import {  NameProvider } from './global/nameContext';

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
