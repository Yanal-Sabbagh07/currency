import React from "react";

const Amount = (props) => {
  return (
    <div className="amount-container">
      <div className="amount-text">Amount</div>
      <input
        className="amount-number"
        type="number"
        value={props.amount}
        onChange={(e) => props.onAmountChange(e.target.value)}
        min="1"
        required
      />
    </div>
  );
};

export default Amount;
