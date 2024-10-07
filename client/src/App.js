import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Header from './components/Header';

function App() {

  // <Routes>
  //     <Route path='/' element={<Home/>}/>
  //     <Route path='/about' element={<About/>}/>
  //     <Route path='/shop' element={<Shop/>}/>
  //     <Route path='/blog' element={<Blog/>}/>
  // </Routes>

  return (
   <>
   {/* <Navbar/> */}
   {/* <Outlet/> */}
   {/* <Header/> */}
   </>
  );
}

export default App;
