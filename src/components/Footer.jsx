
import { useEffect, useState } from 'react';

const Footer = () => {

  useEffect(() => {
    let deferedPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        const deferredPrompt = e;
    });

    const installApp = document.getElementById('installApp');
    installApp.addEventListener('click', async () => {
      if (deferredPrompt !== null) {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          if (outcome === 'accepted') {
              deferredPrompt = null;
          }
          // Todo catch if navigateur non compatible
      }
    });
  }, [])

  return(
    <div>
      <hr></hr>
      <br />
      <button id="installApp">Install PWA</button>
    </div>
  )
}

export default Footer;