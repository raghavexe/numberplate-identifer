import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBoard from "./Components/SearchBoard";

export default function App() {
  const logoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coat_of_arms_of_Germany.svg/1200px-Coat_of_arms_of_Germany.svg.png";
  return (
    <div id="root-layer">
      <div id="site-title" className="d-flex align-items-center">
        <img id="Logo" src={logoUrl} alt="logo" />
        <div id="title-text" className="ml-3">
          <div>Numberplate</div>
          <div>Identification Tool</div>
        </div>
      </div>
      <SearchBoard />
    </div>
  );
}
