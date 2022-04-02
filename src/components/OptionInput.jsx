import React from "react";

const OptionInput = (props) => {
  return (
    <select
      className="opt"
      onChange={(e) => props.onCurrencyChange(e.target.value)}
      value={props.default}
    >
      {props.rates.map((currency) => (
        <option value={currency}>{currency}</option>
      ))}
    </select>
  );
};

export default OptionInput;
