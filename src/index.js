import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
       BrowserRouter,
       Routes,
       Route,
} from "react-router-dom";
import Blog from './pages/Blog';
import TrangChu from './pages/TrangChu';
import Chatting from './pages/Chatting';
import About from './pages/About';
import Marketing from './pages/Marketing';
import LienHe from './pages/LienHe';

ReactDOM.render(
       <BrowserRouter>
              <Routes>
                     <Route path="/" element={<App />}>
                            <Route
                                   path="/blog" element={<Blog />}>
                            </Route>
                            <Route
                                   path="/trangchu" element={<TrangChu />}>
                            </Route>
                            <Route
                                   path="/marketing" element={<Marketing />}>
                            </Route>
                            <Route
                                   path="/chatting" element={<Chatting />}>
                            </Route>
                            <Route
                                   path="/about" element={<About />}>
                            </Route>
                            <Route
                                   path="/lienHe" element={<LienHe />}>
                            </Route>
                     </Route>
              </Routes>
       </BrowserRouter>,
       document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
