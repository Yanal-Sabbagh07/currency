import React, { useState, useEffect } from "react";
import { Converter } from "./components/Converter";
import axios from "axios";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1.0);
  const [currencyFrom, setCrrencyFrom] = useState("EUR");
  const [currencyTo, setCrrencyTo] = useState("USD");
  const [rates, setRates] = useState([]);
  const [result, setResult] = useState(1.104058);
  const [submitted, setSubmittd] = useState(false);
  const [transitions, setTransition] = useState([]);
  const BASE_URL =
    "http://data.fixer.io/api/latest?access_key=ffd6e55655ecf0103396c2bd35eef170";
  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setRates(res.data.rates);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittd(true);
    setTransition((preValues) => {
      return [
        ...preValues,
        { amount: amount, from: currencyFrom, to: currencyTo, res: result },
      ];
    });
    console.log(transitions);
    localStorage.setItem("transitons", JSON.stringify(transitions));
  };
  function handleAmountChange(amount) {
    setResult((amount * rates[currencyTo]) / rates[currencyFrom]);
    setAmount(amount);
    setSubmittd(false);
  }
  function handleCurrencyFromChange(currencyFrom) {
    setResult((amount * rates[currencyTo]) / rates[currencyFrom]);
    setCrrencyFrom(currencyFrom);
    setSubmittd(false);
  }
  function handleCurrencyToChange(currencyTo) {
    setResult((amount * rates[currencyTo]) / rates[currencyFrom]);
    setCrrencyTo(currencyTo);
    setSubmittd(false);
  }

  if (rates) {
    return (
      <div className="App">
        <div className="main-container">
          <div className="upper-container">
            <img src="./logo.png" alt="hatch" className="logo" />
            <h1 className="header">Convert currencies in Real-time.</h1>
          </div>
          <Converter
            handleSubmit={handleSubmit}
            amount={amount}
            currencyFrom={currencyFrom}
            currencyTo={currencyTo}
            rates={rates}
            submitted={submitted}
            onAmountChange={handleAmountChange}
            onCurrencyChangeFrom={handleCurrencyFromChange}
            onCurrencyChangeTo={handleCurrencyToChange}
            onSubmitted={handleSubmit}
          />
          <div className="footer-container">
            {submitted === true ? (
              <div className="statment">
                {amount} {currencyFrom} = <br />
                <span>
                  {result} {currencyTo}
                </span>
              </div>
            ) : (
              <div />
            )}
            <div className="history">View conversion history</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default App;
