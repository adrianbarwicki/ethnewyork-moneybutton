# Moneybutton for upvoting stuff on Internet

## Intro
This repository contains a code for creating your own money button component. It does depend on the `web3` library and requires Metamask to work correctly.

If you click on the button, it will send X ETH to an Ethereum smart contract that will distribute it between the author and previous voters.

## Example Integration
```html
<html>
    <head>
    <title></title>
    </head>
    <body> 
        <div id="your-custom-moneybutton"></div>

        <script type="text/javascript" src="./ath-component.js">
            window.athComponent.bootstrap({
                domID: "your-custom-moneybutton",
                apiUrl: "https://alphateamhackers.com"
            })
        </script>
    </body>
</html>
```

## Technologies used
* Ethereum
* Web3
* SKALE - the smart contracts have been deployed to SKALE side chain in order to significatly lower the costs.

## Developers
* [Adrian Barwicki](https://adrianbarwicki.com)

## Licence
MIT
