import React, { useEffect, useState } from "react";
import "./HistoryPage.css";
const HistoryPage = () => {
  const [transitions, setTransition] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("transitons");
    data = JSON.parse(data);
    setTransition(data);
    console.log(transitions);
  }, [transitions]);
  return (
    <div className="history-container">
      <div className="table">
        <div className="table-head">
          <label className="amount">Date</label>
          <label className="from">from</label>
          <label className="to">to</label>
        </div>
        {transitions.map((item) => (
          <div className="table-row">
            <div className="table-amount">02.04.2022</div>
            <div className="table-from">
              {item.amount} {item.from.substring(3)}
            </div>

            <div className="table-result">
              {item.res} {item.to.substring(3)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
