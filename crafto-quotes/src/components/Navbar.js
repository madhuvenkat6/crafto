import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

function Navbar({ token, logout }) {
    return (
        <>{token && (   <nav>
           
               <>
               <div>
                    <Link to="/quotes">Quotes</Link>
                    <Link to="/create-quote">Create Quote</Link>
                    </div>                     

                    <button onClick={logout}>Logout</button>
                    
                    </>
            
        </nav>)}</>
    );
}

export default Navbar;
