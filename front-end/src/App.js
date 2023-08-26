
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import PrivateRouter from './components/PrivateRouter';
import Logout from './components/Logout';
import Login from './components/Login';
import Products from './components/Products';
import AddProduct from './components/addProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route element={<PrivateRouter />}>
            <Route path='/' element={<Products/>} />
            <Route path='/add' element={<AddProduct/>} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
            <Route path='/delete' element={<h1>delete  product page</h1>} />
            <Route path='/profile' element={<Logout/>} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
