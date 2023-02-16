import './App.css';
import { Button } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route  path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
