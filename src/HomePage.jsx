import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Converter } from "./components/Converter";
import axios from "axios";
import "./App.css";

const HomePage = () => {
  const [amount, setAmount] = useState(1.0);
  const [currencyFrom, setCrrencyFrom] = useState("USDEUR");
  const [currencyTo, setCrrencyTo] = useState("USDUSD");
  const [rates, setRates] = useState([]);
  const [result, setResult] = useState(1.104058);
  const [submitted, setSubmittd] = useState(false);
  const [transitions, setTransition] = useState([]);
  const BASE_URL =
    "http://apilayer.net/api/live?access_key=fe55a03e9133a90af4c38d2f722a28af";
  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setRates(res.data.quotes);
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
                {amount} {currencyFrom.substring(3)} = <br />
                <span>
                  {result} {currencyTo.substring(3)}
                </span>
              </div>
            ) : (
              <div />
            )}
            <div className="history">
              <Link to="/history" className="history-btn">
                View conversion history
              </Link>
            </div>
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
};

export default HomePage;
