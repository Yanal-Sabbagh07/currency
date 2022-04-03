import React from "react";

const OptionInput = (props) => {
  return (
    <select
      className="opt"
      onChange={(e) => props.onCurrencyChange(e.target.value)}
      value={props.default}
    >
      {props.rates.map((currency) => (
        <option key={currency} value={currency}>
          {currency.substring(3)}
        </option>
      ))}
    </select>
  );
};

export default OptionInput;
