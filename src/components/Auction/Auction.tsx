import "./Auction.css";
import Product from "../../images/Setas.png";
import { useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { AuthContext, AuthContextProvider } from "../../Auth/AuthContext";
import DownArrow from "../../images/down.png";
import Wall from "../../images/wall.webp";
import TrasgoImage from "../../images/goblinImage.png";
import Countdown, { zeroPad } from "react-countdown";
import { useNavigate } from "react-router-dom";

export const Auction = () => {
  const [currentBid, setCurrentBid] = useState("");
  const [maxBid, setMaxBid] = useState("");
  const [history, setHistory] = useState<{ bid: string; name: string }[]>([]);
  const [error, setError] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedNotification, setAcceptedNotification] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const { user, setSignUpOpen, setSignInOpen } = useContext(AuthContext);
  const navigate = useNavigate();

  const getBids = async () => {
    const docRef = doc(db, "pujas", "demonedition");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setHistory(docSnap.data().bids.reverse());
      setMaxBid(docSnap.data().max);
    } else {
      console.log("No such document!");
    }
  };

  const handleBidChange = (e: any) => {
    setCurrentBid(e.target.value.replace(/[^0-9]/g, ""));
  };

  useEffect(() => {
    getBids();
  }, []);

  const submit = async () => {
    const auctionRef = doc(db, "pujas", "demonedition");

    if (parseInt(currentBid) > parseInt(maxBid)) {
      await setDoc(auctionRef, {
        bids: [
          ...history,
          {
            bid: currentBid,
            name: user?.displayName,
            email: user?.email,
          },
        ],
        max: currentBid,
      });
      setHistory([
        {
          bid: currentBid,
          name: user?.displayName!,
        },
        ...history,
      ]);
      setMaxBid(currentBid);
    } else {
      setError("La puja debe ser mayor que la actual");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    setCurrentBid("0");
  };

  return (
    <div className="auction-container">
      <header className="auction-header">
        <div>
          <a
            className="logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            La subasta de Hashiban
          </a>
        </div>
        {user && (
          <div className="user-name-container">
            <img src={TrasgoImage} />
            <h1>{user?.displayName}</h1>
          </div>
        )}
      </header>
      {/* <img src={Wall} id="wall" /> */}
      <div className="auction-box-container">
        <img src={Product} className="auction-image" />
        <h2>Subasta por</h2>
        <h1 className="auction-title" style={{ textAlign: "center" }}>
          Subasta de Hashiban, Fungi Edition
        </h1>
        <div className="current-bid-container">
          <label className="auction-subtitle">Puja actual : </label>
          <h1>{maxBid}€</h1>
          <label className="auction-subtitle">{history[0].name}</label>
        </div>
        <div className="countdown-container">
          <Countdown
            date="2023-09-30T01:02:03"
            renderer={(props) => (
              <span className="counter">
                {zeroPad(props.days)} Days, {zeroPad(props.hours)} Hours,{" "}
                {zeroPad(props.minutes)} Mins {zeroPad(props.seconds)} Secs.
              </span>
            )}
          />
        </div>
        {user ? (
          <div className="auction-makebid-container">
            <h2 className="auction-subtitle">
              {user.displayName}, Haga su puja :{" "}
            </h2>
            <div className="auction-form-field">
              <h3>Cantidad (€)</h3>
              <input
                type="number"
                min={0}
                value={currentBid}
                className="auction-input"
                onChange={handleBidChange}
              />
            </div>
            <div style={{ height: "2em" }}>
              <h3 className="auction-error">
                {error != "" ? `❌ ${error}` : ""}
              </h3>
            </div>
            {/* <div
              className="accept-container"
              onClick={() => setAcceptedNotification(!acceptedNotification)}
            >
              <input type="checkbox" checked={acceptedNotification} />
              <label>
                Acepto ser notificado por correo electrónico de las
                actualizaciones de esta subasta.
              </label>
            </div> */}
            <div
              className="accept-container"
              onClick={() => setAcceptedTerms(!acceptedTerms)}
            >
              <input type="checkbox" checked={acceptedTerms} />
              <label>
                Acepto comprar el juego por la cantidad pujada en caso de ser el
                ganador de la subasta.
              </label>
            </div>
            <button
              className={`bid-button ${acceptedTerms ? "" : "disabled"}`}
              disabled={!acceptedTerms}
              onClick={submit}
            >
              Pujar
            </button>
          </div>
        ) : (
          <div className="auction-makebid-container">
            <h2>Identificate para acceder a la subasta</h2>
            <button
              className="std-button wide square"
              onClick={() => setSignInOpen(true)}
            >
              Entrar
            </button>
            <button
              className="std-button wide square"
              onClick={() => setSignUpOpen(true)}
            >
              Registro
            </button>
          </div>
        )}
        <div style={{ paddingBottom: "10em", width: "100%" }}>
          <h1 className="auction-title" style={{ marginTop: "1em" }}>
            Historial de la subasta
          </h1>
          <div
            className="show-history-arrow-container"
            onClick={() => setShowHistory(!showHistory)}
          >
            <img
              src={DownArrow}
              className={`down-arrow ${showHistory ? "rotate" : ""}`}
            />
          </div>
          {showHistory && (
            <div className={`auction-history-container`}>
              {history
                .sort((a, b) => {
                  return parseInt(b.bid) - parseInt(a.bid);
                })
                .map((item, i) => {
                  return (
                    <>
                      <div className="auction-history-item" key={i}>
                        <h3>{item.name}</h3>
                        <h3>{item.bid}€</h3>
                      </div>
                      <hr />
                    </>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
