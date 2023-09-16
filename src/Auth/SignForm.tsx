import React, { useContext, useState } from "react";
import "./Auth.css";
import Trasgo from "../images/goblinImage.png";
import GoogleImage from "../images/google.webp";
import { AuthContext } from "./AuthContext";

type SignFormProps = {
  close: () => void;
  submit: (email: string, password: string, name?: string) => void;
  error: string;
  type: "signUp" | "signIn";
  googleSign: () => void;
};

export const SignForm = ({
  close,
  submit,
  error,
  type,
  googleSign,
}: SignFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const send = () => {
    if (type === "signUp") submit(email, password, name);
    else submit(email, password);
  };

  return (
    <div className="modal-bg">
      <div className="modal">
        <span className="close" onClick={close}>
          &times;
        </span>
        <img src={Trasgo} />
        <label>"-Quién eres? Identificate."</label>
        <h1>Email</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {type === "signUp" && (
          <>
            <h1>Nombre</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </>
        )}
        <h1>Contraseña</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <h1 className="error">{error}</h1>}
        <div className="modal-button-container">
          <button className="std-button" onClick={send}>
            {type === "signUp" ? "Registrarse" : "Entrar"}
          </button>
        </div>
        <div className="hr-surrounded-string">
          <hr style={{ width: "100%" }} />
          <label>o</label>
          <hr style={{ width: "100%" }} />
        </div>
        <div className="google-suggestion-container">
          <button className="google-login-button" onClick={googleSign}>
            <img src={GoogleImage} />
            <label>Accede con Google</label>
          </button>
        </div>
      </div>
    </div>
  );
};
