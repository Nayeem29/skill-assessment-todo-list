import { Route, Routes } from 'react-router-dom';
import './App.css';
import ToDo from './Pages/Home/ToDo';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Navbar from './Pages/SharedComponets/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <RequireAuth><ToDo /></RequireAuth>
        }></Route>

        <Route path='/home' element={
          <RequireAuth><ToDo /></RequireAuth>
        }></Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
