import React, { useState } from "react";
import "./Vault.css";
import Web3Modal from "web3modal";
import Button from "@mui/material/Button";
import WalletIcon from "@mui/icons-material/Wallet";
import SendIcon from "@mui/icons-material/Send";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const vault = require("./build/Vault.json");
const contractAddress = "0x5E5713a0d915701F464DEbb66015adD62B2e6AE9";
const ethers = require("ethers");

const networks = {
  mainnet: {
    chainId: `0x${Number(1).toString(16)}`,
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
      name: "ETHEREUM",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.infura.io/v3/"],
    blockExplorerUrls: ["https://etherscan.io"],
  },
};

export const Vault = () => {
  const [account, setaccount] = useState("");
  const [balance, setbalance] = useState("");
  const [address, setaddress] = useState("");
  const [connected, setconnected] = useState(false);
  const [hasClickedDeposit, sethasClickedDeposit] = useState(false);
  const [hasClickedWithdraw, sethasClickedWithdraw] = useState(false);
  const [hasClickedStake, sethasClickedStake] = useState(false);
  const [hasClickedClaim, sethasClickedClaim] = useState(false);
  const [provider, setprovider] = useState(null);
  const [showDepositForm, setShowDepositForm] = useState(false);
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);
  const [showStakeForm, setShowStakeForm] = useState(false);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [token, settoken] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [assets, setassets] = useState("");
  const [receiver, setreceiver] = useState("");
  const [owner, setowner] = useState("");

  const connectWallet = async () => {
    setLoading(true);

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();

    let Provider = new ethers.providers.Web3Provider(connection);

    if ((await Provider.getNetwork()).chainId !== 1) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              ...networks["mainnet"],
            },
          ],
        });
      } catch (e) {
        alert("Please switch to Ethereum network");
      }
    }
    Provider = new ethers.providers.Web3Provider(connection);
    setprovider(Provider);

    const Account = Provider.getSigner();
    setaccount(Account);
    const Address = await Account.getAddress();
    setaddress(Address);
    // const contract = new ethers.Contract(
    //   contractAddress,
    //   vault.abi,
    //   Provider.getSigner()
    // );
    const Bal = await Provider.getBalance(Address);
    const bal = ethers.utils.formatEther(Bal);

    setbalance(`${bal} ETH`);
    setLoading(false);
    setconnected(true);
  };

  const handlerequestChange = (e) => {
    const { name, value } = e.target;

    if (name === "assets") {
      setassets(value);
    } else if (name === "receiver") {
      setreceiver(value);
    } else if (name === "owner") {
      setowner(value);
    } else if (name === "amount") {
      setAmount(value);
    } else if (name === "token") {
      settoken(value);
    }
  };
  const handleDepositSubmit = async (e) => {
    e.preventDefault();
    const submittedReceiver = ethers.utils.getAddress(receiver);
    const submittedAssets = ethers.utils.getAddress(assets);

    // const erc = new ethers.Contract(
    //   ethers.utils.getAddress(token),
    //   tokenContract.abi,
    //   provider.getSigner()
    // );
    // const approve = await erc
    //   .connect(account)
    //   .approve(escrowContract.address, submittedAmount);
    // await approve.wait();
    // const tx = await escrow
    //   .connect(account)
    //   .createRequest(submittedBuyer, 1800, submittedToken, submittedAmount);
    // await tx.wait();
  
  };

  const handleWithdrawSubmit = async () => {
    // const erc = new ethers.Contract(
    //   ethers.utils.getAddress(token),
    //   tokenContract.abi,
    //   provider.getSigner()
    // );
    // const approve = await erc
    //   .connect(account)
    //   .approve(escrowContract.address, submittedAmount);
    // await approve.wait();
    // const tx = await escrow
    //   .connect(account)
    //   .createRequest(submittedBuyer, 1800, submittedToken, submittedAmount);
    // await tx.wait();
  
  };
  const handleStakeSubmit = async (e) => {
    // const erc = new ethers.Contract(
    //   ethers.utils.getAddress(token),
    //   tokenContract.abi,
    //   provider.getSigner()
    // );
    // const approve = await erc
    //   .connect(account)
    //   .approve(escrowContract.address, submittedAmount);
    // await approve.wait();
    // const tx = await escrow
    //   .connect(account)
    //   .createRequest(submittedBuyer, 1800, submittedToken, submittedAmount);
    // await tx.wait();

  };
  const handleClaimSubmit = async (e) => {
    // e.preventDefault();
    // const submittedBuyer = ethers.utils.getAddress(buyer);
    // const submittedToken = ethers.utils.getAddress(token);
    // const submittedAmount = ethers.utils.parseEther(amount);
    // const erc = new ethers.Contract(
    //   ethers.utils.getAddress(token),
    //   tokenContract.abi,
    //   provider.getSigner()
    // );
    // const approve = await erc
    //   .connect(account)
    //   .approve(escrowContract.address, submittedAmount);
    // await approve.wait();
    // const tx = await escrow
    //   .connect(account)
    //   .createRequest(submittedBuyer, 1800, submittedToken, submittedAmount);
    // await tx.wait();

  };

  function handleDepositClickForm() {
    setShowDepositForm(true);
    sethasClickedDeposit(true);
    setShowStakeForm(false);
    sethasClickedStake(false);
    setShowWithdrawForm(false);
    sethasClickedWithdraw(false);
    setShowClaimForm(false);
    sethasClickedClaim(false);
  }
  function handleStakeClickForm() {
    setShowDepositForm(false);
    sethasClickedDeposit(false);
    setShowStakeForm(true);
    sethasClickedStake(true);
    setShowWithdrawForm(false);
    sethasClickedWithdraw(false);
    setShowClaimForm(false);
    sethasClickedClaim(false);
  }
  function handleWithdrawClickForm() {
    setShowDepositForm(false);
    sethasClickedDeposit(false);
    setShowStakeForm(false);
    sethasClickedStake(false);
    setShowWithdrawForm(true);
    sethasClickedWithdraw(true);
    setShowClaimForm(false);
    sethasClickedClaim(false);
  }
  function handleClaimClickForm() {
    setShowDepositForm(false);
    sethasClickedDeposit(false);
    setShowStakeForm(false);
    sethasClickedStake(false);
    setShowWithdrawForm(false);
    sethasClickedWithdraw(false);
    setShowClaimForm(true);
    sethasClickedClaim(true);
  }

  return (
    <div className="home-container">
      <Button
        onClick={connectWallet}
        variant="contained"
        endIcon={<WalletIcon />}
        sx={{ mt: 3 }}
      >
        {connected ? "Connected" : "Connect Wallet"}
      </Button>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {connected && (
        <div className="user-info">
          <Typography sx={{ mt: 3 }} variant="h6">
            Wallet address
            <Typography variant="subtitle1">{address}</Typography>
          </Typography>

          <Typography sx={{ mt: 3, mb: 3 }} variant="h6">
            User Balance Address
            <Typography variant="subtitle1">{balance}</Typography>
          </Typography>
          <div style={{ marginBottom: "10px" }}>
            {!hasClickedDeposit && (
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleDepositClickForm}
              >
                Deposit
              </Button>
            )}
          </div>
          <div style={{ marginBottom: "10px" }}>
            {!hasClickedWithdraw && (
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleWithdrawClickForm}
              >
                Withdraw
              </Button>
            )}
          </div>
          <div style={{ marginBottom: "10px" }}>
            {!hasClickedStake && (
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleStakeClickForm}
              >
                Stake Tokens
              </Button>
            )}
          </div>
          <div style={{ marginBottom: "10px" }}>
            {!hasClickedClaim && (
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleClaimClickForm}
              >
                Claim{" "}
              </Button>
            )}
          </div>
        </div>
      )}

      <div>
        {showDepositForm && (
          <div className="form-container">
            <form className="vault-form" onSubmit={handleDepositSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="assets"
                  id="assets"
                  value={assets}
                  onChange={handlerequestChange}
                  placeholder="Enter assets ..."
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="receiver"
                  id="receiver"
                  value={receiver}
                  onChange={handlerequestChange}
                  placeholder="Enter receiver..."
                  className="form-control"
                />
              </div>

              <Button type="submit" variant="contained">
                Deposit
              </Button>
              <Button
                onClick={() => {
                  sethasClickedDeposit(false);
                  setShowDepositForm(false);
                }}
                variant="outlined"
                sx={{ mt: 2 }}
              >
                Cancel
              </Button>
            </form>
          </div>
        )}
      </div>
      <div>
        {showWithdrawForm && (
          <div className="form-container">
            <form className="vault-form" onSubmit={handleWithdrawSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="assets"
                  id="assets"
                  value={assets}
                  onChange={handlerequestChange}
                  placeholder="Enter assets ..."
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="receiver"
                  id="receiver"
                  value={receiver}
                  onChange={handlerequestChange}
                  placeholder="Enter receiver..."
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="owner"
                  id="owner"
                  value={owner}
                  onChange={handlerequestChange}
                  placeholder="Enter owner..."
                  className="form-control"
                />
              </div>

              <Button type="submit" variant="contained">
                Withdraw
              </Button>
              <Button
                onClick={() => {
                  sethasClickedWithdraw(false);
                  setShowWithdrawForm(false);
                }}
                variant="outlined"
                sx={{ mt: 2 }}
              >
                Cancel
              </Button>
            </form>
          </div>
        )}
      </div>
      <div>
        {showStakeForm && (
          <div className="form-container">
            <form className="vault-form" onSubmit={handleStakeSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={handlerequestChange}
                  placeholder="Enter amount..."
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="token"
                  id="token"
                  value={token}
                  onChange={handlerequestChange}
                  placeholder="Enter token..."
                  className="form-control"
                />
              </div>

              <Button type="submit" variant="contained">
                Stake
              </Button>
              <Button
                onClick={() => {
                  sethasClickedStake(false);
                  setShowStakeForm(false);
                }}
                variant="outlined"
                sx={{ mt: 2 }}
              >
                Cancel
              </Button>
            </form>
          </div>
        )}
      </div>
      <div>
        {showClaimForm && (
          <div className="form-container">
            <form className="vault-form" onSubmit={handleClaimSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={handlerequestChange}
                  placeholder="Enter amount..."
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="token"
                  id="token"
                  value={token}
                  onChange={handlerequestChange}
                  placeholder="Enter token..."
                  className="form-control"
                />
              </div>

              <Button type="submit" variant="contained">
                Claim
              </Button>
              <Button
                onClick={() => {
                  sethasClickedClaim(false);
                  setShowClaimForm(false);
                }}
                variant="outlined"
                sx={{ mt: 2 }}
              >
                Cancel
              </Button>
            </form>
          </div>
        )}
      </div>
      <br />
    </div>
  );
};
