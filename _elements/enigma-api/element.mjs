import enigma from '../../_assets/data/enigma.js'

export default class extends HTMLElement {
    constructor() {
        super()

    }

    static get observedAttributes() {  }

    async authenticate() { 
        
        return new Promise((resolve, reject) => Array('User', 'Password').map(txt => {

            const p = this[txt.toLowerCase()] = document.createElement('p')
            p.contentEditable = 'true'
            p.innerText = txt
            p.addEventListener('keypress', async (e) => {
                [ ...document.querySelectorAll('.error') ].map( el => el.parentElement.removeChild(el))
                if(e.key != 'Enter') return true
                e.preventDefault()
                this.user.contentEditable = 'false'
                this.password.contentEditable = 'false'
                if(!this.user.innerText || !this.password.innerText) {
                    this.user.classList.add('error')
                    return false
                }
                const response = await fetch(`https://public.enigma.com/api/account/login`, {
                    method: "POST",
                    body: JSON.stringify({user:this.user.innerText, password:this.password.innerText}),
                    headers: { "Content-Type": "application/json" }
                }).then(r => r.json())
                if(response.message) {
                    const errorElement = document.createElement('h6')
                    errorElement.innerText = response.message
                    errorElement.classList.add('error')
                    this.insertAdjacentElement('afterBegin', errorElement)
                    ;[ ...this.querySelectorAll('p') ].map(el => el.contentEditable = 'true')
                } else {
                    for(let key in response) window.sessionStorage.setItem(key, response[key]) 
                    resolve(true)                    
                } 
            })
    
            this.appendChild(p)
        }))
    }

    async buildDataSet() {
        console.log(enigma.collection())
        this.innerHTML = `You've either just logged in or your session is still active` 
    }

    async connectedCallback() {
        this.apikey = window.sessionStorage.getItem('apikey') || false

        if(!this.apikey) {
            await this.authenticate()
        }

        this.buildDataSet()
    }

    attributeChangedCallback(name, oldValue, newValue) { }
}