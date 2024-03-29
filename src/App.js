import './App.css';
import { Button } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import MevabePage from './Components/MevabePage';
import Camnang from './Components/Camnang';
import ProfilePage from './Components/ProfilePage';
import Bathangdau from './Components/Bathangdau';
import BathanggiuaPage from './Components/BathanggiuaPage';
import BathangcuoiPage from './Components/BathangcuoiPage';
import AndamPage from './Components/AndamPage';
import LienhePage from './Components/LienhePage';
import AdminPage from './Pages/AdminPage';
import QuanLyMenu from './Pages/QuanLyMenu';
import ModalTemplate from './Template/ModalTemplate';
import MenuPage from './Pages/MenuPage';
import QuanLyUsers from './Pages/QuanLyUsers';
import ChatBot from './Components/ChatBot';
import CamnangPage from './Pages/CamnangPage';
import QuanlyCamnang from './Pages/QuanlyCamnang';
// import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      <ChatBot/>
      <ModalTemplate/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/mevabe' element={<MevabePage/>}/>
        <Route path='/camnang' element={<CamnangPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/3thangdau' element={<Bathangdau/>}/>
        <Route path='/3thanggiua' element={<BathanggiuaPage/>}/>
        <Route path='/3thangcuoi' element={<BathangcuoiPage/>}/>
        <Route path='/andam' element={<AndamPage/>}/>
        <Route path='/lienhe' element={<LienhePage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/adminmenu' element={<AdminPage content={<QuanLyMenu/>}/>}/>
        <Route path='/admincamnang' element={<AdminPage content={<QuanlyCamnang/>}/>}/>
        <Route path='/admin' element={<AdminPage content={<QuanLyUsers/>}/>}/>
      </Routes>

      


      </BrowserRouter>
      
    </div>
  );
}

export default App;
