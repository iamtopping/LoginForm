import React, { useState } from 'react';
import Menu from  './components/Menu'
import {
  Outlet
} from "react-router-dom";
import LoginFrom from './pages/TrangChu';



function App() {
  const [isShowMenu, setIsShowMenu] = useState(true)
  const handleClickMenu = () => {
    setIsShowMenu(!isShowMenu)
  }

  return (
    <div className="App">
      <header>
        <Menu/>
      </header>
    <Outlet />
    </div>
    
  );
}


export default App;
