import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
<Tilt className="Tilt br3 shadow-2 pa2 ma4" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
 <div className="Tilt-inner"> <img src={brain} alt='brain' /></div>
</Tilt>
    );
}

export default Logo;