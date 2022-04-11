import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }




    return (
        <div className='login-card-shadow'>
            <div className="form-container">
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={handleUserSignIn}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error?.message}</p>
                        {
                            loading && <p>loading...</p>
                        }
                        <input className="form-submit" type="submit" value="Login" />
                    </form>
                    <p className='text'>
                        New to Ema-john?<Link className="form-link" to="/signup" required>Create an Account</Link>
                    </p>
                    <div className='straight-line'>
                        <div className='line'>
                            <hr />
                        </div>
                        <p>Or</p>
                        <div className='line'>
                            <hr />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;