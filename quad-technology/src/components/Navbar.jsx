import React from 'react';
import "./Navbar.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SendIcon from '@mui/icons-material/Send';

const Navbar = () => {
    return (
        <div className='navbar'>
        

        <div className='left-div'>
        <div className='title'>HOLDINFO <span className='title-span'>.com</span></div>
        <div className='desc'> Powered by <span className='desc-span'> Finstreet</span></div>
        </div>

        <div className='middle-div'>
        
<div className='dropdown'>INR<ArrowDropDownIcon /></div>
<div className='dropdown'>BTC<ArrowDropDownIcon/></div>
       

        
        </div>

        <div className='right-div'>
          <div className='rounded'>40</div>
          <div> <button className='btn'><div className='btn-element'> <SendIcon /> Connect Telegram </div></button></div>
          <div className='switch'>  
        <input type="checkbox" id="switch"
                    class="checkbox" />
        <label for="switch" class="toggle">
        </label>
        </div>
        </div>
        </div>
    );
}

export default Navbar;
