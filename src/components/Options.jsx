import React from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CurrencyInput from "./CurrencyInput";
const Option = (props) => {
  return (
    <>
      <div className="from-container">
        <div className="from-text">From</div>
        <div className="from-option">
          <CurrencyInput
            currencies={Object.keys(props.rates)}
            currencyFrom={props.currencyFrom}
            onCurrencyChange={props.onCurrencyChangeFrom}
            default={props.currencyFrom}
          />
        </div>
      </div>
      <div className="swip-container">
        <CurrencyExchangeIcon />
      </div>
      <div className="to-container">
        <div className="to-text">To</div>
        <div className="to-option">
          <CurrencyInput
            currencies={Object.keys(props.rates)}
            currencyTo={props.currencyTo}
            onCurrencyChange={props.onCurrencyChangeTo}
            default={props.currencyTo}
          />
        </div>
      </div>
    </>
  );
};

export default Option;
