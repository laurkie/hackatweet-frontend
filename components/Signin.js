import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import { Modal } from 'antd';
import Link from 'next/link';
import Moment from 'react-moment';
import styles from '../styles/Signin.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark, faEye } from '@fortawesome/free-solid-svg-icons';

function Signin() {
    const dispatch = useDispatch();

    const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

    const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: data.data.token, token: data.data.token }));
					setSignUpUsername('');
					setSignUpPassword('');
				}
			});
	};

    const handleConnection = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: data.data.username, token: data.data.token }));
					setSignInUsername('');
					setSignInPassword('');
				}
			});
	};

    return(
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <img src='/bird.png' alt="imgBird"/>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.registerContainer}>
                    <img src='/bird.png' alt="imgBird"/>
                    <h3>Create your hackatweet account</h3>
                    <div className={styles.registerSection}>
                        <p>Sign-up</p>
                        <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                        <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                        <button id="register" onClick={() => handleRegister()}>Register</button>
                    </div>
                    <div className={styles.registerSection}>
                        <p>Sign-in</p>
                        <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                        <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                        <button id="connection" onClick={() => handleConnection()}>Connect</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Signin;