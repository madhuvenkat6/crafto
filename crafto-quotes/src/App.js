import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import QuoteListPage from './components/QuoteListPage';
import CreateQuotePage from './components/CreateQuotePage';

function App() {
    const [token, setToken] = useState(null);

    const logout = () => {
        localStorage.removeItem('token')
        setToken(null)
    };


    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            setToken(token)        
        }
    },[])

    return (
        <Router>
            <Navbar token={token} logout={logout} />
            <Routes>
            {!token && <Route path="/" element={<LoginPage setToken={setToken} />} />}
                {token ? (
                    <>
                        <Route path="/" element={<Navigate to="/quotes" />} />
                        <Route path="/quotes" element={<QuoteListPage token={token} />} />
                        <Route path="/create-quote" element={<CreateQuotePage token={token} />} />
                    </>
                ) : (
                    <Route path="*" element={<Navigate to="/" />} />
                )}
            </Routes>
        </Router>
    );
}

export default App;
