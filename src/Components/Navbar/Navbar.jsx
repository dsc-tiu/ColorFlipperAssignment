import React from 'react';

import gdscLogo from '../../Assets/gdscTIULogo.png';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logoSection'>
        <img src={gdscLogo} alt='GDSC' id='gdsclogo' />
      </div>
      <div className='titleSection'>Color Flipper</div>
    </div>
  );
};

export default Navbar;
