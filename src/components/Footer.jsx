import { useEffect, useState } from "react";

const Footer = () => {
  //   let deferedPrompt;
  useEffect(() => {
    let deferredPrompt;
    window.addEventListener("beforeinstallprompt", (e) => {
      deferredPrompt = e;
    });

    const installApp = document.getElementById("installApp");
    installApp.addEventListener("click", async () => {
      if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
          deferredPrompt = null;
        }
        // Todo catch if navigateur non compatible
      }
    });
    console.log(deferredPrompt);
  }, []);

  return (
    <div>
      <hr></hr>
      <br />
      <button id="installApp">Install PWA</button>
    </div>
  );
};

export default Footer;
