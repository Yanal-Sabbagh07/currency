import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Converter } from "./components/Converter";
import axios from "axios";
import "./App.css";

const HomePage = (props) => {
  const [amount, setAmount] = useState(1.0);
  const [currencyFrom, setCrrencyFrom] = useState("EUR");
  const [currencyTo, setCrrencyTo] = useState("USD");
  const [rates, setRates] = useState([]);
  const [result, setResult] = useState(1.104058);
  const [submitted, setSubmittd] = useState(false);
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  const newdate = day + "/" + month + "/" + year;

  const BASE_URL =
    "https://v6.exchangerate-api.com/v6/19081e345e016284206097b9/latest/USD";
  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setRates(res.data.conversion_rates);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittd(true);
    props.setTransition((preValues) => {
      return [
        ...preValues,
        {
          date: newdate,
          amount: amount,
          from: currencyFrom,
          to: currencyTo,
          res: result,
        },
      ];
    });
    localStorage.setItem("transitons", JSON.stringify(props.transitions));
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
  function handleCurrencySwitch(currencyFrom, currencyTo) {
    setResult((amount * rates[currencyFrom]) / rates[currencyTo]);
    setCrrencyTo(currencyFrom);
    setCrrencyFrom(currencyTo);
  }

  if (rates) {
    return (
      <div className="App">
        <div className="main-container">
          <div className="upper-container">
            <img
              src={require("./images/logo.png")}
              alt="hatch"
              className="logo"
            />
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
            onCurrencySwitch={handleCurrencySwitch}
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
