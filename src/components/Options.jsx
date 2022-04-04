import React from "react";
import OptionInput from "./OptionInput";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
const Options = (props) => {
  function handleSwitcher() {
    props.onCurrencySwitch(props.currencyFrom, props.currencyTo);
  }
  return (
    <div className="options-container">
      <div className="from-container">
        <div className="from-text">From</div>
        <OptionInput
          currencyFrom={props.currencyFrom}
          rates={props.rates}
          onCurrencyChange={props.onCurrencyChangeFrom}
          default={props.currencyFrom}
        />
      </div>
      <div className="swip-container" onClick={handleSwitcher}>
        <CurrencyExchangeIcon />
      </div>
      <div className="to-container">
        <div className="to-text">To</div>
        <OptionInput
          currencyTo={props.currencyTo}
          rates={props.rates}
          onCurrencyChange={props.onCurrencyChangeTo}
          default={props.currencyTo}
        />
      </div>
    </div>
  );
};

export default Options;
