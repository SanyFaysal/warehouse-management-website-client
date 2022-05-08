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
import RequireAuth from './shared/RequireAuth/RequireAuth';
import MyProducts from './pages/MyProducts/MyProducts';
import NotFound from './shared/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/stockProducts' element={<StockProducts></StockProducts>}></Route>
        <Route path='/products/:id' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/manageProducts' element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
        <Route path='/addProduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path='/myProducts' element={
          <RequireAuth>
            <MyProducts></MyProducts>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
