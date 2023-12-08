import { useState } from "react";
import app from "./firebase.config";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error);
            });

    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>{user ?
            <button onClick={handleGoogleSignOut}>Logout</button> :
            <div>
                <button onClick={handleGoogleSignIn}>Google Login</button>
                <button onClick={handleGithubSignIn}>Github Login</button>
            </div>}
            {
                user && <div>
                    <h1>{user.displayName}</h1>
                    <h3>Email: {user.email}</h3>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;