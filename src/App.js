import "./App.css";
import Header from "./components/header";
import Counter from "./components/counter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chip from "./components/chip";
import ExpandedText from "./components/expandedText";

function App() {
  const details = [
    {
      name: "Delivered in",
      value: "2 days",
    },
    {
      name: "Next day delivery",
      value: "Order by 2:00 PM",
    },
    {
      name: "Delivery By",
      value: "Stove",
    },
  ];
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <div className="detailsBox">
        <div className="details">
          <div className="title">
            <div className="all">
              <div className="titleName">Amisa</div>
              <div className="titleDesc">Organic Spelt Crispy Spelt Flakes</div>

              <div className="lev">
                <div className="gram">250g</div>
                <div className="amount">$2.99</div>
              </div>
              <div className="cartBox">
                <div className="cart">
                  <Counter />
                </div>
                <button className="cartButton">Update Cart</button>
              </div>
              <div className="line"></div>

              <div className="itemDetails">
                {details.map((detail) => (
                  <div key={detail.name} className="singleDetail">
                    <div className="name">{detail.name}:</div>
                    <div className="value">
                      <Chip>{detail.value}</Chip>
                    </div>
                  </div>
                ))}
              </div>
              <div className="line"></div>
              <div className="about">
                <div className="aboutTitle">About the product</div>
                <ExpandedText>
                  Lightly toasted flakes drizzled in honey and barley malt
                  Organic, Spelt & delightful, Drizzled in honey and barley
                  malt, Wholegrain Spelt wheat* (93%), Honey* (5%), Barley
                  Malt*, Sea Salt *=Certified organic ingredients
                </ExpandedText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
