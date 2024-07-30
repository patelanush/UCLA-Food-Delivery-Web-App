import React, { useRef } from 'react';
import './Header.css'

const Header = () => {
  const menuRef = useRef(null);

  const scrollToMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order Your Delicious Delivery</h2>
            <p>Enjoy some of the best food UCLA has to offer in one of its state of the art dining halls.</p>
            <button onClick={scrollToMenu}>View Menu</button>
            <div id="explore-menu" ref={menuRef}></div>
            
        </div>
      
    </div>
  )
}

export default Header
