import React, { useState } from 'react';
import { login } from '../api/api';
import './css/LoginPage.css';

function LoginPage({ setToken }) {
    const [username, setUsername] = useState('');
    const [otp, setOtp] = useState('');

    const handleLogin = async () => {
        try {
            const data = await login(username, otp);
            setToken(data.token);
            localStorage.setItem('token',data.token)
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <div className='main-container'>            
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
        </div>
    );
}

export default LoginPage;
