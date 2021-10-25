import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signOut, GithubAuthProvider, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const logInUser = result.user;
                console.log(logInUser);
                setUser(result.user)
            })
            .catch((error) => {
                const errorText = error.message;
                setError(errorText);

            })
    }

    const signInUsingGitHub = () => {
        signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                setUser(result.user);

            })

    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser('');
        })
            .catch((error) => {
                setError(error.message);
            });

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })

    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGitHub,
        logOut
    }

}
export default useFirebase;