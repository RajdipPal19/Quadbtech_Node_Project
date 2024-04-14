import React, { useState,useEffect, Component } from 'react';
import "./styles.css";
import {Header} from "./Header";
import {Footer} from "./Footer";
import 'react-circular-progressbar/dist/styles.css';
export const MainPage = () => {
    const [isLightTheme, setIsLightTheme ] = useState(false);
    const [countDownTimer, setCountDownTimer] = useState(60);
  useEffect(() => {
      if(countDownTimer == 0) setCountDownTimer(60);
    countDownTimer > 0 && setTimeout(() => setCountDownTimer(countDownTimer - 1), 1000);
  }, [countDownTimer])
const onThemeButtonClick = () => {
    setIsLightTheme(!isLightTheme)
};
// Import JSON data
const jsonData = {
    "tickers": [
        {
            "base_unit": "btc",
            "quote_unit": "inr",
            "low": "5800000.0",
            "high": "6300000.0",
            "last": "5972999.0",
            "type": "SPOT",
            "open": "6261000",
            "volume": "7.26865",
            "sell": "5972999.0",
            "buy": "5972401.0",
            "at": 1713113074,
            "name": "BTC/INR"
          },
          {
            "base_unit": "xrp",
            "quote_unit": "inr",
            "low": "41.5999",
            "high": "50.2531",
            "last": "45.9954",
            "type": "SPOT",
            "open": "49.5099",
            "volume": "446076.8",
            "sell": "46.0",
            "buy": "45.9954",
            "at": 1713113074,
            "name": "XRP/INR"
          },
          {
            "base_unit": "eth",
            "quote_unit": "inr",
            "low": "272001.0",
            "high": "304990.0",
            "last": "285291.8",
            "type": "SPOT",
            "open": "303999.9",
            "volume": "101.539",
            "sell": "285999.3",
            "buy": "285291.8",
            "at": 1713113074,
            "name": "ETH/INR"
          },
          {
            "base_unit": "trx",
            "quote_unit": "inr",
            "low": "10.001",
            "high": "10.79",
            "last": "10.297",
            "type": "SPOT",
            "open": "10.4",
            "volume": "1298064.0",
            "sell": "10.32",
            "buy": "10.28",
            "at": 1713113074,
            "name": "TRX/INR"
          },
          {
            "base_unit": "eos",
            "quote_unit": "inr",
            "low": "98.01",
            "high": "108.0",
            "last": "103.0",
            "type": "SPOT",
            "open": "101",
            "volume": "1194.58",
            "sell": "103.0",
            "buy": "102.0",
            "at": 1713113074,
            "name": "EOS/INR"
          },
          {
            "base_unit": "zil",
            "quote_unit": "inr",
            "low": "2.8",
            "high": "3.4",
            "last": "3.14",
            "type": "SPOT",
            "open": "3.37",
            "volume": "460122.0",
            "sell": "3.14",
            "buy": "3.08",
            "at": 1713113074,
            "name": "ZIL/INR"
          },
          {
            "base_unit": "bat",
            "quote_unit": "inr",
            "low": "21.0",
            "high": "25.665",
            "last": "23.674",
            "type": "SPOT",
            "open": "25.665",
            "volume": "26029.41",
            "sell": "23.843",
            "buy": "22.993",
            "at": 1713113074,
            "name": "BAT/INR"
          },
          {
            "base_unit": "zrx",
            "quote_unit": "inr",
            "low": "41.39",
            "high": "52.34",
            "last": "46.45",
            "type": "SPOT",
            "open": "52.34",
            "volume": "22327.25",
            "sell": "46.34",
            "buy": "45.71",
            "at": 1713113074,
            "name": "ZRX/INR"
          },
          {
            "base_unit": "req",
            "quote_unit": "inr",
            "low": "10.5001",
            "high": "12.7646",
            "last": "11.4835",
            "type": "SPOT",
            "open": "12.7646",
            "volume": "13787.0",
            "sell": "11.8999",
            "buy": "11.6167",
            "at": 1713113074,
            "name": "REQ/INR"
          },
          {
            "base_unit": "nuls",
            "quote_unit": "inr",
            "low": "108.0",
            "high": "108.0",
            "last": "108.0",
            "type": "SPOT",
            "open": 108,
            "volume": "0.0",
            "sell": "0.0",
            "buy": "0.0",
            "at": 1713113074,
            "name": "NULS/INR"
          }
    ]
};

    return (
        <React.Fragment>
            <div className={("theme-") + (isLightTheme ? "light" : "dark")}>
            <Header isLightTheme={isLightTheme} onThemeButtonClick={onThemeButtonClick } countDownTimer={countDownTimer}/>
            <div class="Container-fluid " style={{ padding: "0px 30px" }}>
                <div class="d-flex justify-content-around align-items-center average-header" style={{ padding: "10px 0px" }}>
                    <div class="text-center">
                        <div class="average-header-maintext color-green">0.47 %</div>
                        <div class="average-header-subHeading">5 Mins</div>
                    </div>
                    <div class="text-center">
                        <div class="average-header-maintext color-green">0.98 %</div>
                        <div class="average-header-subHeading">1 Hour</div>
                    </div>
                    <div style={{ "max-width": "40%" }}>
                        <div class="text-center font-32 average-block">
                            <div class="average-subText">
                                <span class="subText-heading">Best Price to Trade</span>
                            </div>
                            <div class="average-heading" style={{ "padding-bottom": "10px" }}>₹ 1,67,334</div>
                            <div class="average-subText">Average ETH/INR net price including commission</div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="average-header-maintext color-green">5.86 %</div>
                        <div class="average-header-subHeading">1 Day</div>
                    </div>
                    <div class="text-center">
                        <div class="average-header-maintext color-green">6.41 %</div>
                        <div class="average-header-subHeading">7 Days</div>
                    </div>
                </div>
                <a target="_blank" href="https://finstreet.in/">
                    <img src="cryptonews.png" style={{ width: "100%", padding: "0px 0px 20px" }} />
                </a>
            </div>
            <div class="fiat-crypto-table table-responsive" style={{ margin: "0px auto" }}>
                <table class="table table-borderless text-center">
                    <thead>
                        <tr>
                            <th>
                                <h4><span class="pointer">#</span></h4>
                            </th>
                            <th>
                                <h4><span class="pointer">Platform</span></h4>
                            </th>
                            <th>
                                <h4><span class="pointer">Last Traded Price</span></h4>
                            </th>
                            <th><h4><span class="pointer">Buy / Sell Price</span></h4>
                            </th>
                            <th><h4><span class="pointer">Difference</span></h4>
                            </th>
                            <th>
                                <h4><span class="pointer">Savings</span></h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                         {jsonData.tickers.map((ticker, index) => (
    <tr key={index}>
        <td className="align-middle"><h4 className="table-text">{index + 1}</h4></td>
        <td className="align-middle">
            <a target="_blank" href="">
                <h4 className="table-text">
                    {/* Customize according to your JSON structure */}
                    <span>{ticker.name}</span>
                </h4>
            </a>
        </td>
        <td className="align-middle"><h4 className="table-text">{ticker.last}</h4></td>
        <td className="align-middle"><h4 className="table-text">{ticker.buy}</h4></td>
        <td className="align-middle"><h4 className="table-text">{ticker.sell}</h4></td>
        <td className="align-middle"><h4 className="table-text">{ticker.volume}</h4></td>
        <td className="align-middle"><h4 className="table-text">{ticker.base_unit}</h4></td>
    </tr>
))}

                    </tbody>
                </table>
            </div>
            <div class="padding-header" style={{ padding: "20px" }}>
                <a target="_blank" href="https://ftx.com/#a=finstreet">
                    <img src="BannerFTXNews.png" style={{ width: "100%" }} /></a>
            </div>
            <Footer />
        <div class="d-flex justify-content-center" style={{border:"solid 1px #191d28","background-color":"#191d28",position:"fixed",left:"0","align-items":"center",width:"100vw",height:"47px",bottom:"0","z-index":"8"}}><button class="add-button btn btn-outline-info" style={{display: "block"}}>Add hodlinfo to home screen</button></div>
        </div>

        </React.Fragment>
    )
};