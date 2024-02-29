import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Button} from "./Button";
import './Navbar.css';
function Navbar() {
    let [click,setclick]=useState(false);
    let [button,setButton]=useState(true);
    let handleclick=()=>{
        setclick(!click)
    }
    let closemobilemenu=()=>{
        setclick(false)
    }
    let showButton=()=>{
        if(window.innerWidth <=960){
            setButton(false);
        } else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize',showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closemobilemenu}>
                    TRVL <i className="fab fa-typo3"/>
                </Link>
                    <div className="menu-icon" onClick={handleclick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/Home' className='nav-links' onClick={closemobilemenu}>HOME</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Services' className='nav-links' onClick={closemobilemenu}>SERVICES</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Products' className='nav-links' onClick={closemobilemenu}>PRODUCTS</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closemobilemenu}>SIGN UP</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;