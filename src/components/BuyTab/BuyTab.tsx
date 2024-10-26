import * as AiIcons from "react-icons/ai";
import "./BuyTab.css";
import GameBox from "../../images/game_box.webp";
import {
  Stripe,
  loadStripe,
  RedirectToCheckoutOptions,
} from "@stripe/stripe-js";
import { useTranslation } from "react-i18next";

interface props {
  setBuyTab: any;
  buyTab: boolean;
}

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY!);
  }
  return stripePromise;
};

function NavBar({ setBuyTab, buyTab }: props) {
  const { t } = useTranslation();

  const item = {
    price: "price_1OKe0VLmCz48kJiSXJj2YLZx",
    quantity: 1,
  };

  const checkoutOptions: RedirectToCheckoutOptions = {
    lineItems: [item],
    shippingAddressCollection: {
      allowedCountries: ["ES"],
    },
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    // const stripe = await getStripe();
    // const { error } = await stripe!.redirectToCheckout(checkoutOptions);
  };

  return (
    <>
      <div
        className={`pointer-events-none w-screen h-screen fixed bg-black/80 z-50 transition-all duration-150 opacity-0 ${
          buyTab ? "opacity-100" : ""
        }`}
      />
      <nav className={buyTab ? "nav-menu active" : "nav-menu"}>
        <a className="absolute right-4 top-4" onClick={() => setBuyTab(false)}>
          <AiIcons.AiOutlineClose size={20} />
        </a>
        <div className="relative w-full h-fit pointer-events-auto">
          <div className="flex flex-col items-center justify-center">
            {/* <img src={Scroll} className="w-11/12 absolute" /> */}
            <div className="z-10 flex flex-col w-full justify-center items-center">
              {/* <label className="titleOfProduct text-4xl xl:text-5xl">
                {t("game_name")}
              </label> */}
              <img src={GameBox} alt="" className="w-1/3" />
              <ul className="mt-8 list-disc">
                <li className="text-sm">{t("game_with_x_cards")}</li>
                <li className="text-sm">{t("free_delivery")}</li>
              </ul>
              <div className="flex flex-col items-center mt-8">
                <h1 className="text-4xl">19.95 €</h1>
              </div>
              <button
                className="buyButton disabled:bg-gray-500 disabled:hover:bg-gray-500"
                onClick={redirectToCheckout}
                disabled
              >
                {/* {t("buy")} */}
                {t("available_soon")}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
