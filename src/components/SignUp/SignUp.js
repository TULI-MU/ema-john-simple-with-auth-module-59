import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    }
    if (user) {
        navigate('/shop');
    }
    //form submit korle jate reload na hoy sejonno preventdefault use kora hoy
    const handleCreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Your two password did not match");
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters long');
        }
        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='login-card-shadow'>
            <div className="form-container">
                <div>
                    <h2 className='form-title'>Sign Up</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        <input className="form-submit" type="submit" value="Login" />
                    </form>
                    <p className='text'>
                        Already have an account?<Link className="form-link" to="/login">Login</Link>
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

export default SignUp;