import React, { useState } from 'react';
import spaceXlogoNav from '../../../Assets/SpaceX-Logo-White.svg';
import './Header.css';

export default function Header() {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 700){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return(
        <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
            <ul>
                <a href="/"><img src={spaceXlogoNav} alt="logo"></img></a>
                <li key={'contact'} style={{float:'right'}}><a href="/">CONTACT</a></li>
                <li key={'equipe'} style={{float:'right'}}><a href="/">EQUIPE</a></li>
                <li key={'projects'} style={{float:'right'}}><a href="/">PROJECTS</a></li>
                <li key={'vision'} style={{float:'right'}}><a href="/">VISION & MISSION</a></li>
            </ul>
        </div>
    )
}