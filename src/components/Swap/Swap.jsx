import { FaArrowDown } from "react-icons/fa";
import "./Swap.css";
import { useState, useEffect } from "react";

const Swap = () => {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const balance = await window.web3.eth.getBalance(accounts[0])
        console.log(balance);

        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        // let balance = await window.web3.eth.getBalance(accounts[0])
        // console.log(balance);

        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  return (
    <div className="--swap">
      <h1 className="--swap-headerOne">
        Swap anytime, <br /> anywhere.
      </h1>

      <div className="--swap-page">
        <div className="--swap-page-one">
          <h1 style={{ marginLeft: "10px", paddingTop: "10px" }}>You Pay</h1>
          <section className="--swap-section-one">
            <input type="number" placeholder="0" />
            <select>
              <option value="dltToken">DLT TOKEN</option>
            </select>
          </section>
          <p className="--swap-amount">$....</p>
        </div>

        <h1 className="--flex">
          <FaArrowDown size={25} style={{ marginLeft: "17px" }} />
        </h1>

        <div className="--swap-page-two">
          <h1 style={{ marginLeft: "10px", paddingTop: "10px" }}>
            You Receive
          </h1>
          <section className="--swap-section-two">
            <input type="number" placeholder="0" />
            <select className="--swap-select-token">
              <option value="dltToken">Select token</option>
              <option value="dltToken">USDT</option>
              <option value="dltToken">USDC</option>
            </select>
          </section>
          <p className="--swap-amount">$....</p>
        </div>
        <button className="button" onClick={connectWallet}>
          {/* <h1>connect wallet</h1>
          <h3>{walletAddress}</h3> */}
          {walletAddress && walletAddress.length > 0
            ? `Connected: ${walletAddress.substring(
                0,
                6
              )}...${walletAddress.substring(38)}`
            : "Connect Wallet"}
        </button>
      </div>

      <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
      </div>
    </div>
  );
};

export default Swap;
