import './style.css'
import * as React from 'react';
import Button from '@mui/material/Button';

export function LoginPage() {
    return (
        <div className='LoginPage'>
            <h1>Login</h1>
            <input placeholder='Username/Email' type="text" /> <br />
            <input placeholder='Password' type="password" />

            <a className='forgot' href="#">Forgot passowrd</a>

            <Button
                sx={{ backgroundColor: '#FA8072', width: '278px',marginTop:'20px' }}
                variant="contained">Login</Button> <br />

            <a className='signup' href="#">Sign Up</a>

        </div>
    )
}