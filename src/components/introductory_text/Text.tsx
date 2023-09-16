import "./Text.css";

interface props {
    text: string;
}
function Text({text} : props) {
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

export default Text;
