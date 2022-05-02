import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './pages/AllProducts/AllProducts';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allProducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
