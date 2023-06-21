
import './App.css';
import { Routes, Route  } from 'react-router-dom';
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
function App() {
  return (
    <div>
    <Header />
     <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
     </Routes>
    </div>
  );
}

export default App;
