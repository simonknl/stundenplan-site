(function(){
  const STORAGE_KEY='cc-consent';

  function getConsent(){
    try{return JSON.parse(localStorage.getItem(STORAGE_KEY));}catch(e){return null;}
  }
  function saveConsent(external){
    localStorage.setItem(STORAGE_KEY,JSON.stringify({necessary:true,external:!!external,date:new Date().toISOString()}));
  }

  function buildBanner(){
    const el=document.createElement('div');
    el.className='cookie-banner';
    el.id='cookieBanner';
    el.innerHTML=`
      <div class="cookie-banner-inner">
        <div class="cookie-banner-text">
          <h2>Diese Website respektiert deine Privatsphäre</h2>
          <p>
            Wir verwenden ausschließlich technisch notwendige lokale Speicherung (z. B. für Theme und Notenrechner-Daten)
            und binden externe Schriftarten/Icons per CDN ein. Es findet kein Tracking und keine Analyse statt.
            Details findest du in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.
          </p>
          <div class="cookie-banner-groups hidden" id="cookieGroups">
            <label class="cg-item">
              <input type="checkbox" checked disabled>
              <div><strong>Notwendig</strong><span>Lokale Speicherung für Theme &amp; Notenrechner. Kann nicht deaktiviert werden.</span></div>
            </label>
            <label class="cg-item">
              <input type="checkbox" id="cookieExternal" checked>
              <div><strong>Externe Inhalte</strong><span>Schriftarten (Google Fonts) und Icons (Lucide/CDN) zur Darstellung der Seite.</span></div>
            </label>
          </div>
        </div>
        <div class="cookie-banner-actions">
          <button class="modal-btn" id="cookieSettingsBtn" type="button">Einstellungen</button>
          <div class="btn-row">
            <button class="modal-btn" id="cookieRejectBtn" type="button">Nur notwendige</button>
            <button class="modal-btn primary" id="cookieAcceptBtn" type="button">Alle akzeptieren</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(el);

    el.querySelector('#cookieSettingsBtn').addEventListener('click',()=>{
      el.querySelector('#cookieGroups').classList.toggle('hidden');
    });
    el.querySelector('#cookieAcceptBtn').addEventListener('click',()=>{
      const ext=el.querySelector('#cookieExternal');
      saveConsent(ext?ext.checked:true);
      hideBanner();
    });
    el.querySelector('#cookieRejectBtn').addEventListener('click',()=>{
      saveConsent(false);
      hideBanner();
    });
    el.querySelector('#cookieGroups').addEventListener('change',(e)=>{
      if(e.target.id==='cookieExternal'){
        el.querySelector('#cookieAcceptBtn').textContent=e.target.checked?'Alle akzeptieren':'Auswahl speichern';
      }
    });
    return el;
  }

  function hideBanner(){
    const el=document.getElementById('cookieBanner');
    if(!el)return;
    el.classList.remove('visible');
    setTimeout(()=>el.remove(),300);
  }

  function showBanner(){
    const existing=document.getElementById('cookieBanner');
    const el=existing||buildBanner();
    requestAnimationFrame(()=>el.classList.add('visible'));
  }

  window.openCookieSettings=showBanner;

  document.addEventListener('DOMContentLoaded',()=>{
    if(!getConsent())showBanner();

    const link=document.getElementById('cookieSettingsLink');
    if(link)link.addEventListener('click',(e)=>{
      e.preventDefault();
      showBanner();
    });
  });
})();
