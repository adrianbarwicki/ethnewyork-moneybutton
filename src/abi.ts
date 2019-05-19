export default [
  {
   "constant": true,
   "inputs": [
    {
     "name": "url",
     "type": "string"
    },
    {
     "name": "id",
     "type": "uint256"
    }
   ],
   "name": "getVoter",
   "outputs": [
    {
     "name": "",
     "type": "address"
    },
    {
     "name": "",
     "type": "uint256"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "url",
     "type": "string"
    }
   ],
   "name": "withdraw",
   "outputs": [
    {
     "name": "",
     "type": "bool"
    }
   ],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": true,
   "inputs": [
    {
     "name": "url",
     "type": "string"
    }
   ],
   "name": "getCount",
   "outputs": [
    {
     "name": "",
     "type": "uint256"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "url",
     "type": "string"
    }
   ],
   "name": "vote",
   "outputs": [
    {
     "name": "",
     "type": "bool"
    }
   ],
   "payable": true,
   "stateMutability": "payable",
   "type": "function"
  }
 ];
