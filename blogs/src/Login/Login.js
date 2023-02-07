import { useEffect, useState } from "react"


export default function Login({setLogged}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);
    const [users, setUsers] = useState();       //try removing this
    const [error, setError] = useState('');

    useEffect(() => {
        const storageUsers = localStorage.getItem('users')
        if (!storageUsers)
            localStorage.setItem('users', JSON.stringify([]));
        else if (storageUsers.length)
            setUsers(JSON.parse(storageUsers));
        else
            setUsers([])
    }, [])


    const errFun = (msg) => {
        setError(msg)
        setTimeout(() => { setError("") }, 3000)
    }
    const onSubmit = e => {
        e.preventDefault();
        if (!username || !password)
            errFun("Please Enter Username Or Password")
        else {
            if (isNewUser) {
                let isExist = users.filter(e => e.name === username);
                if (isExist.length === 0) {
                    let addedUser = [...users, { name: username, password: password }];
                    localStorage.setItem('users', JSON.stringify(addedUser));
                    console.log("user added");
                }
                else
                    errFun("User Already Exist")
            }
            else {
                let isExist = users.filter(e => e.name === username && e.password === password);
                if (isExist.length === 0) 
                    errFun("Username or Password is Incorrect")                
                else {
                    console.log("Login Succefull");
                    setLogged(true)
                }
            }
        }
    }
    
    return (
        <form onSubmit={onSubmit}>
            <h2>{isNewUser ? "Create New Account" : "Login"}</h2>
            <>
                <label htmlFor="username">Username :</label>
                <input type="text" id="username" value={username} onInput={e => setUsername(e.target.value)}></input>
            </>
            <>
                <label htmlFor="password">Password :</label>
                <input type="password" id="password" value={password} onInput={e => setPassword(e.target.value)}></input>
            </>
            <input type='submit' value={isNewUser ? "Sign up" : "Login"}></input>
            <strong>{error}</strong>
            <input type="button" value={isNewUser ? "Have an Account? Login!" : "Create New Account!"} onClick={() => isNewUser ? setIsNewUser(false) : setIsNewUser(true)}></input>
        </form>
    )

}