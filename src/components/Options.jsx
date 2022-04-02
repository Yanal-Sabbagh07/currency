import React from "react";
import OptionInput from "./OptionInput";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
const Options = (props) => {
  return (
    <>
      <div className="from-container">
        <div className="from-text">from</div>
        <OptionInput
          currencyFrom={props.currencyFrom}
          rates={props.rates}
          onCurrencyChange={props.onCurrencyChangeFrom}
          default={props.currencyFrom}
        />
      </div>
      <div className="swip-container">
        <CurrencyExchangeIcon />
      </div>
      <div className="to-container">
        <div className="to-text">to</div>
        <OptionInput
          currencyTo={props.currencyTo}
          rates={props.rates}
          onCurrencyChange={props.onCurrencyChangeTo}
          default={props.currencyTo}
        />
      </div>
    </>
  );
};

export default Options;
