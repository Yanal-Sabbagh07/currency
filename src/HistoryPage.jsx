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
          {transitions.map((item, index) => (
            <div className="table-row" key={item.index}>
              <div className="table-amount" key={item.index}>
                {item.date}
              </div>
              <div className="table-from" key={item.index}>
                {item.amount} {item.from.substring(3)}
              </div>

              <div className="table-result" key={item.index}>
                {item.res.toFixed(4)} {item.to.substring(3)}
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
