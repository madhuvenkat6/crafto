import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ token, logout }) {
    return (
        <nav>
            {token ? (
                <>
                    <Link to="/quotes">Quotes</Link>
                    <Link to="/create-quote">Create Quote</Link>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <Link to="/">Login</Link>
            )}
        </nav>
    );
}

export default Navbar;
