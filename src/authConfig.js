export const msalConfig = {
    auth: {
      clientId: "3388c26b-0215-49d7-a275-ef1e682afc05",
      authority: "https://login.microsoftonline.com/bc58d244-ae9b-4fb2-82bb-ca171289f7b5", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3000/",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };