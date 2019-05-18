
import Web3 from 'web3';
import { voteStuff } from './voteStuff';

// @TODO nagy configure the provider.
const web3 = new Web3('ws://localhost:8546');

export default class ExampleComponent {
    constructor(private _domID: string, private _apiUrl: string) {
        this._el = document.getElementById(_domID);

        this.init();
    }

    private _el: HTMLElement;

    private init() {
        this.constructView();

        console.log(web3);
    }

    private constructView() {
        const viewWrapper = document.createElement("div");

        const button = document.createElement("div") as HTMLDivElement;
        const buttonLabel = document.createElement("span") as HTMLSpanElement;

        buttonLabel.id = "button";
        buttonLabel.innerText = "1$ vote";

        button.appendChild(buttonLabel);
        viewWrapper.appendChild(button);

        viewWrapper.addEventListener("click", (event: Event) => {
          console.log(event);
          console.log("this will call metamask");

          voteStuff(location.href);
        });

        this._el.appendChild(viewWrapper);
    }
}
