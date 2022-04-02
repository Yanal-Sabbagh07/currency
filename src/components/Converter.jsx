import React from "react";
import Amount from "./Amount";
import Options from "./Options";
import Button from "./Button";

export const Converter = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="cur-conv-container">
      <Amount amount={props.amount} onAmountChange={props.onAmountChange} />
      <Options
        currencyFrom={props.currencyFrom}
        currencyTo={props.currencyTo}
        rates={Object.keys(props.rates)}
        onCurrencyChangeFrom={props.onCurrencyChangeFrom}
        onCurrencyChangeTo={props.onCurrencyChangeTo}
      />
      <Button />
    </form>
  );
};
