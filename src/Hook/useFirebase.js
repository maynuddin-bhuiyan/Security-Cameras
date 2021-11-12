import initializeFirebase from "../Page/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isloading, setIsloading] = useState(true);
  const [authError, setAuthError] = useState('');

  const [isAdmin, setIsAdmin] = useState(false);


  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  const registraUser = (email, password, name, hostory) => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = {email, displayName: name}
        setUser(newUser);

        seavedUser(email, name, 'POST');

        updateProfile(auth.currentUser, {
          displayName:  name
        }).then(() => {
          
        }).catch((error) => {
          
        });

        hostory.replace('/')

      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
        
      });
  };


  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };


  const loginWithGoogle = (hostory) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        seavedUser(user.email, user.displayName, 'PUT');
        setAuthError('');
        hostory.replace('/home')

      }).catch((error) => {
        setAuthError(error.message);
        console.log(error);
      });

  }



  const loginUser = (email, password,hostory) => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        hostory.replace('/')
        
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      });

  }




  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
    });
    return () => unsubscribe;


  }, []);


  const seavedUser = (email, displayName,method) => {
    
        const user = { email, displayName };

        fetch('http://localhost:7000/user', {
            method: method,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
        
  

  }



  useEffect( () => {
      fetch(`http://localhost:7000/user/${user.email}`)
      .then(res => res.json())
      .then(data => setIsAdmin(data.admin))


  } , [user.email])


  return {
    user,
    isAdmin,
    isloading,
    authError,
    registraUser,
    logOut,
    loginUser,
    loginWithGoogle
  }

}


export default useFirebase;