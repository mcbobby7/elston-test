import React, { useState } from "react";
import "./style.css";

const ExpandedText = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text">
      <div className="main">
        {isReadMore ? text.slice(0, 140) + "..." : text}
      </div>

      <div onClick={toggleReadMore} className="read-or-hide">
        {isReadMore && (
          <button className="read">
            Read More
            <div className="sign">+</div>
          </button>
        )}
        {!isReadMore && (
          <button className="read">
            <div>Read Less</div>
            <div className="sign">-</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpandedText;
