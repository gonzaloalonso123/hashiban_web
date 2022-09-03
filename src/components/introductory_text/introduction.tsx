import "./introductory_text.css";
import Logo from "../../images/logo.png";

interface props {
    text: string;
}
function Introduction({text} : props) {
  return (
    <div className="introduction-section">
      <div className="introduction">
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Introduction;
