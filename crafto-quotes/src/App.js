import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import QuoteListPage from './components/QuoteListPage';
import CreateQuotePage from './components/CreateQuotePage';

function App() {
    const [token, setToken] = useState(null);

    const logout = () => setToken(null);

    return (
        <Router>
            <Navbar token={token} logout={logout} />
            <Routes>
                <Route path="/" element={<LoginPage setToken={setToken} />} />
                {token ? (
                    <>
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
