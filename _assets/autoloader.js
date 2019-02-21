let elementsUsed = []
let extendedElementsUsed = []

;(async ({elementsUsed, extendedElementsUsed}) => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
          });
        });
      }
    addElements({elementsUsed, extendedElementsUsed})
})({elementsUsed, extendedElementsUsed})

async function addElements({elementsUsed, extendedElementsUsed}) {
    elementsUsed = document.querySelector('script[data-elements]').dataset.elements.split(' ')
    elementsUsed.map(async elementName => {
        const importedElement = await import(`/_elements/${elementName}/element.mjs`)
        customElements.define(elementName, importedElement.default)
        const linkElement = document.createElement('link')
        linkElement.href = `/_elements/${elementName}/style.css`
        linkElement.type = `text/css`
        linkElement.rel = `stylesheet`
        document.querySelector('head').appendChild(linkElement)
    })

    extendedElementsUsed.map(async elementName => {
        await import(`./_elements/${elementName}/element.js`)
    })
}

