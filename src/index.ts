
import MoneyButton from "./MoneyButton";
import { ATH } from "./types";
import "./style.css";

declare var window: any;

const athComponentRegister: MoneyButton[] = [];

const bootstrap = (opts: ATH.BootstrapOpts) => {
    opts = opts || {};

    if (!opts.domID) {
        throw new Error("ATH Component: Missing 'domId' in initialization options.");
    }

    athComponentRegister.push(new MoneyButton(opts.domID, opts.apiUrl));
};

window.ethNewYorkMoneyButton = {
    bootstrap
};
