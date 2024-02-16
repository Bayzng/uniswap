import './Navbar.css'
import imgLogo from '../../assets/DLT-Africa.png';

import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



const Navbar = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <nav>
        <div className="logo" onClick={goHome}>
          <img src="/src/assets/DLT-Africa.png" />
        </div>
        <div style={{position: 'relative'}}>
          <Link to='swap'>
            <h1>Swap</h1>
          </Link>
        </div>
        <button>Connect Wallet</button>
      </nav>
    </header>

  );
};

export default Navbar;
