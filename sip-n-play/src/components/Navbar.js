// import React from 'react';
// import '../styles/Navbar.css';

// function Navbar() {
//     return (
//         <nav>
//             <ul>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="#Games">Our Games</a></li>
//                 <li><a href="#about">About</a></li>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;


// Navbar.js

import React from 'react';
import '../styles/Navbar.css';
import logo from '../images/sipnplay.png'; // Replace with your logo file path

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Company Logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="#about">About</a></li>
                <li><a href="#about">Reservations</a></li>
                <li><a href="#menu">MTG Schedule</a></li>
                <li><a href="#games">Our Board Game Collection</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#about">Feedback</a></li>
                <li><a href="#about">Gift Cards</a></li>
                <li><a href="#about">Press</a></li>



            </ul>
        </nav>
    );
}

export default Navbar;
