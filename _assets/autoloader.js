let elementsUsed = []
let extendedElementsUsed = []

// Need to condense this 
// transfers sessionStorage from one tab to another
const sessionStorage_transfer = (event) => {
  if(!event) { event = window.event; } // ie suq
  if(!event.newValue) return;          // do nothing if no value to work with
  if (event.key == 'getSessionStorage') {
    // another tab asked for the sessionStorage -> send it
    localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
    // the other tab should now have it, so we're done with it.
    localStorage.removeItem('sessionStorage'); // <- could do short timeout as well.
  } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
    // another tab sent data <- get it
    var data = JSON.parse(event.newValue);
    for (var key in data) {
      sessionStorage.setItem(key, data[key]);
    }
  }
};

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

;(async ({elementsUsed, extendedElementsUsed}) => {
    // listen for changes to localStorage
    if(window.addEventListener) {
      window.addEventListener("storage", sessionStorage_transfer, false);
    } else {
      window.attachEvent("onstorage", sessionStorage_transfer);
    };


    // Ask other tabs for session storage (this is ONLY to trigger event)
    if (!sessionStorage.length) {
      localStorage.setItem('getSessionStorage', 'foobar');
      localStorage.removeItem('getSessionStorage', 'foobar');
    };

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
