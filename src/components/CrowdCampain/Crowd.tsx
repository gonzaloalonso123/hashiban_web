import React from "react";
import "./Crowd.css";
import GoblinImage from "../../images/goblinImage.png";

interface IContactProps {
  setCrowdEnabled: React.Dispatch<React.SetStateAction<any>>;
  setBuyTab: React.Dispatch<React.SetStateAction<any>>;
}

function Crowd({ setCrowdEnabled, setBuyTab }: IContactProps) {
  return (
    <div className="crowd-background">
      <div className="crowd-popUp">
        <div className="goblin-dialog">
          <img className="goblin-image" src={GoblinImage} alt="" />
          <div className="dialog-text">
            <p
              style={{
                fontFamily: "sans-serif",
              }}
            >
              Primeras unidades. <br />
              Disponible hasta el 15/12/23. No pierdas tu oportunidad!
            </p>
          </div>
        </div>
        <div className="goblin-dialog buttons">
          {/* <a className="std-button crowd" href="https://vkm.is/hashiban">
            Ver campaña
          </a> */}
          <button
            className="crowd-button"
            onClick={() => {
              setCrowdEnabled(false);
            }}
          >
            A la web
          </button>
          <button
            className="crowd-button"
            onClick={() => {
              setCrowdEnabled(false);
              setBuyTab(true);
            }}
          >
            Consiguelo ya!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Crowd;
