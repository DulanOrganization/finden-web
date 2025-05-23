import React, { useEffect } from "react";

const AuthHandler: React.FC = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const scope = urlParams.get("scope");
    const authuser = urlParams.get("authuser");
    const prompt = urlParams.get("prompt");

    let redirectUrl = "http://localhost:5000";
    let paramsExist = false;

    if (code) {
      redirectUrl += `?code=${encodeURIComponent(code)}`;
      paramsExist = true;
    }
    if (scope) {
      redirectUrl +=
        (paramsExist ? "&" : "?") + `scope=${encodeURIComponent(scope)}`;
      paramsExist = true;
    }
    if (authuser) {
      redirectUrl +=
        (paramsExist ? "&" : "?") + `authuser=${encodeURIComponent(authuser)}`;
      paramsExist = true;
    }
    if (prompt) {
      redirectUrl +=
        (paramsExist ? "&" : "?") + `prompt=${encodeURIComponent(prompt)}`;
    }

    window.location.href = redirectUrl;
  }, []);

  return (
    <div>
      <p>You are being redirected to localhost:5000...</p>
      <noscript>
        <p>Please enable JavaScript to be automatically redirected.</p>
        <a href="http://localhost:5000">Click here to go to localhost:5000</a>
      </noscript>
    </div>
  );
};

export default AuthHandler;
