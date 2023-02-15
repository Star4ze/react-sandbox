import { useContext, useEffect, useState } from "react"
import './Login.css'
import { StateContext } from "../App";
import Actions from "../../state/Actions";

export default function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    const context = useContext(StateContext)
    const theme = context.state.theme

    useEffect(() => {
        const storageUsers = localStorage.getItem('users')
        if (!storageUsers) {
            localStorage.setItem('users', JSON.stringify([]));
        } else if (storageUsers.length) {
            setUsers(JSON.parse(storageUsers));
        }
    }, [])

    const showErrorMessage = (message) => {
        setError(message)
        setTimeout(() => { setError('') }, 3000)
    }

    const onSubmit = e => {
        e.preventDefault();
        if (!username || !password) {
            showErrorMessage('Please Enter Username Or Password');
        } else {
            if (isNewUser) {
                if (users.filter(e => e.name === username).length) {
                    showErrorMessage('User Already Exist');
                } else {
                    let addedUser = [...users, { name: username, password: password }];
                    localStorage.setItem('users', JSON.stringify(addedUser));
                    console.log('user added');
                }
            } else {
                if (users.filter(e => e.name === username && e.password === password).length) {
                    console.log('Login Succefull');
                    context.dispatch({type:Actions.login})
                } else {
                    showErrorMessage('Username or Password is Incorrect');
                }
            }
        }
    }

    return (
        <form className="login" onSubmit={onSubmit}>
            <strong className={`login-font-${theme}`}>{isNewUser ? 'Create New Account' : 'Login'}</strong>

            <label htmlFor="username">Username</label>
            <input type="text" id="username" className={`inputs inputs-${theme}`} value={username} onInput={e => setUsername(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" className={`inputs inputs-${theme}`} value={password} onInput={e => setPassword(e.target.value)} />

            <input type='submit' className={`form-submit-button Button-${theme}`} value={isNewUser ? 'Sign up' : 'Login'} />
            <strong>{error}</strong>
            <input type="button" className={`form-submit-button Button-${theme}`} value={isNewUser ? 'Have an Account? Login!' : 'Create New Account!'} onClick={() => setIsNewUser(!isNewUser)} />
        </form>
    )

}
