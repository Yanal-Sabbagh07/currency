import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HistoryPage.css";
const HistoryPage = () => {
  const [transitions, setTransition] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("transitons");
    data = JSON.parse(data);
    setTransition(data);
  }, []);

  if (transitions) {
    return (
      <div className="history-container">
        <img src={require("./images/logo.png")} alt="hatch" className="logo" />
        <Link to="/" className="go-back">
          Go Back
        </Link>
        <div className="table">
          <div className="table-head">
            <label className="amount">Date</label>
            <label className="from">from</label>
            <label className="to">to</label>
          </div>
          {transitions.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-amount">{item.date}</div>
              <div className="table-from">
                {item.amount} {item.from}
              </div>

              <div className="table-result">
                {item.res.toFixed(4)} {item.to}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="history-container">
        <img src="./logo.png" alt="hatch" className="logo" />
        <Link to="/" className="go-back">
          Go Back
        </Link>
        <div className="table">
          <div className="table-head">
            <label className="amount">Date</label>
            <label className="from">from</label>
            <label className="to">to</label>
          </div>
        </div>
      </div>
    );
  }
};

export default HistoryPage;
