import React from "react";

const CurrencyInput = (props) => {
  return (
    <select
      className="opt"
      onChange={(e) => props.onCurrencyChange(e.target.value)}
      value={props.default}
    >
      {props.currencies.map((currency) => (
        <option value={currency}>{currency}</option>
      ))}
    </select>
  );
};

export default CurrencyInput;
