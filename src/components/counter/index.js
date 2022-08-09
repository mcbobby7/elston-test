import { useState } from "react";
import "./style.css";
import { toast } from "react-toastify";

function Counter() {
  const [value, setValue] = useState(0);

  const addValue = (mode) => {
    if (mode === "add") {
      if (value >= 10) {
        toast("You have reached max of 10 items");
      } else {
        setValue((value) => value + 1);
      }
    } else {
      if (value <= 0) {
        toast("You can not go below 0 items");
      } else {
        setValue((value) => value - 1);
      }
    }
  };

  return (
    <div className="box">
      <div className="but" onClick={() => addValue("minus")}>
        -
      </div>
      <div className="result">{value}</div>
      <div className="but" onClick={() => addValue("add")}>
        +
      </div>
    </div>
  );
}

export default Counter;
