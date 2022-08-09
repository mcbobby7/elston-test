import "./style.css";
import Bag from "../../assets/images/bag.webp";

function Header() {
  return (
    <div className="header">
      <div className="bagContainer">
        <img src={Bag} className="bag" alt="bag of wheat" />
      </div>
    </div>
  );
}

export default Header;
