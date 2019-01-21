(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}(function () { 'use strict';

    // This should be a dynamic import. "If a legacy browser, import the polyfills."
    // Might be wonky in the transpiler....
    // import './polyfills.js'

    /* Only the basics for now! */
    // window.iterations = (maxIterations) => { return Array(maxIterations).fill(0).map((n,i) => i) }

    (async () => {
        console.log("Want to see under the hood? Start with /_assets/scripts/main.js.", );
        /* Only the basics for now! 
        const url = document.querySelector('input').value
        const jsonResponse = await fetch(url).then(r => r.json())
        document.querySelector('fetch-result').innerHTML = `<pre><code>${JSON.stringify(jsonResponse, null, 2)}</code></pre>`
        for(let idx of iterations(10)) {
            console.log(idx)
        }
        const [ a, b ] = iterations(2)
        console.log(a, b)

        document.querySelector('.dialog-button').addEventListener('click', (e) => { e.preventDefault(); document.querySelector('dialog').toggleAttribute('open') })
        */

        document.querySelector('#dialog-preview').addEventListener('click', (e) => { e.preventDefault(); document.querySelector('dialog').toggleAttribute('open'); });
        document.querySelector('#dialog-popup-preview').addEventListener('click', (e) => { e.preventDefault(); document.querySelector('dialog[data-popup]').toggleAttribute('open'); });
    })();

}));
