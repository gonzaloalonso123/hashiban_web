import React from "react";
import * as AiIcons from "react-icons/ai";
import "./buy-tab.css";
import GameBox from "../../images/producto1.png";
import { Stripe, loadStripe, RedirectToCheckoutOptions } from "@stripe/stripe-js";

interface props {
  setBuyTab: any;
  buyTab: boolean;
}

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.REACT_APP_STRIPE_KEY!)
  }
  return stripePromise;
};

function NavBar({ setBuyTab, buyTab }: props) {

  const item = {
    price: "price_1LXVaRLmCz48kJiSdh1QJNgC",
    quantity: 1,
  };

  const checkoutOptions : RedirectToCheckoutOptions = {
    lineItems: [item],
    shippingAddressCollection : {
        allowedCountries : ['ES']
    },
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async() => {
    const stripe = await getStripe();
    const {error} = await stripe!.redirectToCheckout(checkoutOptions);
  }

  return (
    <>
      <nav className={buyTab ? "nav-menu active" : "nav-menu"}>
        <a className="closeButton" onClick={() => setBuyTab(false)}>
          <AiIcons.AiOutlineClose size={20} />
        </a>
        <div className="product">
          <label className="titleOfProduct">Edición estándar</label>
          <img src={GameBox} alt="" className="gameBox" />
          <ul className="itemInfo">
            <li>Juego completo con 140 cartas.</li>
            <li>Envio gratuito a toda la peninsula.</li>
          </ul>
          <button className="buyButton" onClick={redirectToCheckout}>14,99€</button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
