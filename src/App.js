import { Route, Routes } from 'react-router-dom';
import './App.css';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import StockProducts from './pages/StockProducts/StockProducts';
import AddProduct from './pages/AddProduct/AddProduct';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/stockProducts' element={<StockProducts></StockProducts>}></Route>
        <Route path='/manageProducts' element={<ManageProducts></ManageProducts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/products/:id' element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
