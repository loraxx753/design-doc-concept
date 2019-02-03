const url = new URL('http://faker.hook.io')

export default class FakerJs extends HTMLElement {
    constructor() {
        super()
        const data = { ...this.dataset }
        Object.keys(data).forEach((key) => {
            (data[key] == null) ? null : url.searchParams.set(key, data[key])
        })
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", () => {
            const response = JSON.parse(oReq.responseText)
            if(typeof response === 'string') {
                this.innerHTML = response
            } else {
                this.response = response
                console.log(this)
            }
        });
        oReq.open("GET", url.href);
        oReq.send();
    }
}
class FakerJsImage extends HTMLImageElement {

}

(async () => {
    customElements.define('faker-js', FakerJs)
    customElements.define('faker-img', FakerJsImage, { extends: 'img'})
})()