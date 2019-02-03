const user = {
    isSignedIn: () => false
};
(async () => {
    if (window.PasswordCredential || window.FederatedCredential) {
        if (!user.isSignedIn()) {
          const resp = await navigator.credentials.get({
            password: true,
            federated: {
              providers: [
                'https://accounts.google.com'
              ]
            },
            mediation: 'silent'
          })
          console.log(resp)
          // ...
         }
       }
       
})()
