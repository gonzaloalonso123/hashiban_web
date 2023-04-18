import React from "react";
import "./Crowd.css";
import GoblinImage from "../../images/goblinImage.png";

interface IContactProps {
  setCrowdEnabled: React.Dispatch<React.SetStateAction<any>>;
}

function Crowd({ setCrowdEnabled }: IContactProps) {
  return (
    <div className="crowd-background">
      <div className="crowd-popUp">
        <div className="goblin-dialog">
          <img className="goblin-image" src={GoblinImage} alt="" />
          <div className="dialog-text">
            <p>La subasta de Hashiban es un proyecto en desarrollo.</p>
          </div>
        </div>
        <div className="goblin-dialog buttons">
          <a className="std-button crowd" href="https://vkm.is/hashiban">
            Ver campaña
          </a>
          <button
            className="std-button crowd"
            onClick={() => setCrowdEnabled(false)}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Crowd;
