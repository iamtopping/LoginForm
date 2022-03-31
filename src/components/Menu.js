// function Menu() {
//     return (
//       <button>
//         Click me
//       </button>
//     );
//   }

import { Link } from "react-router-dom";

  
export default function Menu() {
  return (
    <header>
        <div className="logo">
            HUMG
        </div>
        <ul className="menu-tab">
            <li>
              <Link to="/trangchu"> Trang Chủ</Link>
            </li>
            <li>
              <Link to="/marketing">Marketing</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Chatting">Chatting</Link>
            </li>
            <li>
              <Link to="/LienHe">Liên Hệ</Link>
            </li>
        </ul>
    </header>
  );
}