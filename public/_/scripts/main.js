// This should be a dynamic import. "If a legacy browser, import the polyfills."
// Might be wonky in the transpiler....
// import './polyfills.js'
import './auth.js'

// Add service workers to cache page responses.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/_/scripts/workers/sw_cached_pages.js')
      .then(reg => console.log('Service Worker: Registered (Pages)'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}




(async () => {
    console.log("Want to see under the hood? Start with /_/scripts/main.js.")
    console.log(`Operators are standing by.`)
})();

