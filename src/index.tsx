import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import "./firebase";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
