import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="info_container">
      <h1 className="info_title">Genial! Has comprado la subasta de Hashiban.</h1>
      <h2 className="info_info">Pronto recibirás un email con la factura de  tu  compra.</h2>
      <Link to="/">
        <button className="info_button">✓</button>
      </Link>
    </div>
  );
};

export default Success;
