export default class extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = '<p>I am an example Element. Check out /_elements/example-element/</p>'
    }

    static get observedAttributes() {  }

    connectedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }
}