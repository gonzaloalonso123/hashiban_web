import {
  MultiFactorUser,
  User,
  createUserWithEmailAndPassword,
  multiFactor,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { SignForm } from "./SignForm";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

type authContextType = {
  user: User | null;
  setSignUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSignInOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultValue = {
  user: null,
  setSignUpOpen: () => {},
  setSignInOpen: () => {},
};

const provider = new GoogleAuthProvider();

export const AuthContext = React.createContext<authContextType>(defaultValue);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const signUp = (email: string, password: string, name?: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
        }).then(() => {
          setUser(userCredential.user);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/email-already-in-use":
            setError("El email ya está en uso");
            break;
          case "auth/invalid-email":
            setError("El email no es válido");
            break;
          case "auth/weak-password":
            setError("La contraseña es demasiado débil");
            break;
          default:
        }
      });
  };

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/account-exists-with-different-credential":
            setError("Ya existe una cuenta con ese email");
            break;
          case "auth/auth-domain-config-required":
            setError("El dominio de la aplicación no está configurado");
            break;
          case "auth/cancelled-popup-request":
            setError("La petición ha sido cancelada");
            break;
          case "auth/operation-not-allowed":
            setError("La operación no está permitida");
            break;
          case "auth/operation-not-supported-in-this-environment":
            setError("La operación no está soportada en este entorno");
            break;
          case "auth/popup-blocked":
            setError("El popup ha sido bloqueado");
            break;
          case "auth/popup-closed-by-user":
            setError("El popup ha sido cerrado por el usuario");
            break;
          case "auth/unauthorized-domain":
            setError("El dominio no está autorizado");
            break;
          default:
        }
      });
  };

  useEffect(() => {
    setSignInOpen(false);
    setSignUpOpen(false);
  }, [user]);

  useEffect(() => {
    setError("");
  }, [signInOpen, signUpOpen]);

  const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/invalid-email":
            setError("El email no es válido");
            break;
          case "auth/user-disabled":
            setError("El usuario está deshabilitado");
            break;
          case "auth/user-not-found":
            setError("El usuario no existe");
            break;
          case "auth/wrong-password":
            setError("La contraseña es incorrecta");
            break;
          default:
        }
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setSignUpOpen,
        setSignInOpen,
      }}
    >
      {signUpOpen && (
        <SignForm
          close={() => setSignUpOpen(false)}
          submit={signUp}
          error={error}
          type="signUp"
          googleSign={googleSignIn}
        />
      )}
      {signInOpen && (
        <SignForm
          close={() => setSignInOpen(false)}
          submit={signIn}
          error={error}
          type="signIn"
          googleSign={googleSignIn}
        />
      )}
      {children}
    </AuthContext.Provider>
  );
};
