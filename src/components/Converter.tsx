import React from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
export const Converter = () => {
  return (
    <div className="cur-conv-container">
      <div className="amount-container">
        <div className="amount-text">Amount</div>
        <input className="amount-number" type="number" />
      </div>
      <div className="from-container">
        <div className="from-text">From</div>
        <div className="from-option">
          <select className="opt">
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="CHF">CHF</option>
          </select>
        </div>
      </div>
      <div className="swip-container">
        <CurrencyExchangeIcon />
      </div>
      <div className="to-container">
        <div className="to-text">To</div>
        <div className="to-option">
          <select className="opt">
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="CHF">CHF</option>
          </select>
        </div>
      </div>
      <div className="convert-container">Convert</div>
    </div>
  );
};
