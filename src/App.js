import { Route, Routes } from 'react-router-dom';
import './App.css';
import ToDo from './Pages/Home/ToDo';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Navbar from './Pages/SharedComponets/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ToDo />}></Route>
        <Route path='/home' element={<ToDo />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
