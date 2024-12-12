import React, { useState } from "react";
import "./FaqComp.css";

const FaqComp = (props) => {
  const [data, setData] = useState(null);

  const toggleData = (id) => {
    if (data === id) {
      setData(null);
    } else {
      setData(id);
    }
  };

  return (
    <div className="faq-column remove-border-bottm">
      <div onClick={() => toggleData(props.id)} className="faq-table-contents">
        <h4>{props.data}</h4>
        <h4 className={`plus ${data === props.id ? "rotate" : ""}`}>+</h4>
      </div>
      {data === props.id && <p>{props.des}</p>}
    </div>
  );
};

export default FaqComp;


