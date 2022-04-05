import React from "react";

const OptionInput = (props) => {
  return (
    <select
      className="opt"
      onChange={(e) => props.onCurrencyChange(e.target.value)}
      value={props.default}
    >
      {props.rates
        .filter(
          (currency) =>
            currency === "USD" || currency === "EUR" || currency === "CHF"
        )
        .map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
    </select>
  );
};

export default OptionInput;
