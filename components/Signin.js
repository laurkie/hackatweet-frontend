import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import { Modal } from 'antd';
import styles from '../styles/Signin.module.css';
import { useRouter } from 'next/router';

function Signin() {

    const router = useRouter();
    const dispatch = useDispatch();
    const log = useSelector(state => state.user.value);
    console.log(log);

    const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');
	const [signInFirstname, setSignInFirstname] = useState('');
	const [signUpFirstname, setSignUpFirstname] = useState('');

    const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
                    const { token, firstname, username, userImg } = data.user;
					dispatch(login({ token, firstname, username, userImg }));
					setSignUpUsername('');
					setSignUpPassword('');
                    router.push('/maison');
				}else{
                    console.log(data.error);
                }
			});
	};

    const handleConnection = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signInFirstname, username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
                    const { token, firstname, username, userImg } = data.user;
					dispatch(login({ token, firstname, username, userImg }));
					setSignInUsername('');
					setSignInPassword('');
                    router.push('/maison');
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
                        <input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
                        <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                        <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                        <button id="register" onClick={() => handleRegister()}>Register</button>
                    </div>
                    <div className={styles.registerSection}>
                        <p>Sign-in</p>
                        <input type="text" placeholder="Firstname" id="signInFirstname" onChange={(e) => setSignInFirstname(e.target.value)} value={signInFirstname} />
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