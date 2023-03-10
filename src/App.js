import './App.css';
import { Button } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import MevabePage from './Components/MevabePage';
import Camnang from './Components/Camnang';
import ProfilePage from './Components/ProfilePage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route  path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/mevabe' element={<MevabePage/>}/>
        <Route path='/camnang' element={<Camnang/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>

      


      </BrowserRouter>
      
    </div>
  );
}

export default App;
