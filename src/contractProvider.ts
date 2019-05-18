import Web3 from "web3";

// @todo waiting for NAGY
import abi from "./abi";
import contractAddress from "./contractAddress";

if (typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);

  console.log("metamask is installed");
} else {

  console.log("metamask is not installed");

  alert("Metamask is not installed")
  // set the provider you want from Web3.providers
}

let defaultAddress: string, defaultTx;

/*
const privateKey = '6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1';
const account = web3.eth.accounts.privateKeyToAccount('0x' + privateKey);
web3.eth.accounts.wallet.add(account);
*/

/**
web3.eth.getAccounts().then(e => { 
  defaultAddress = e[0];
  defaultTx = {
    from: defaultAddress,
    // gas: 500000,
    // gasPrice: web3.utils.toWei("20", "gwei")
  };
 }) 
 */;

 web3.eth.getAccounts()
 .then(console.log);

const contractInstance = new web3.eth.Contract(abi, contractAddress);

export const getDefaultAddress = () => window.web3.currentProvider.selectedAddress;

export const get = () => contractInstance;