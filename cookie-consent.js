(function(){
  const STORAGE_KEY='cc-consent';

  function getConsent(){
    try{return JSON.parse(localStorage.getItem(STORAGE_KEY));}catch(e){return null;}
  }
  function saveConsent(){
    localStorage.setItem(STORAGE_KEY,JSON.stringify({acknowledged:true,date:new Date().toISOString()}));
  }

  function buildBanner(){
    const el=document.createElement('div');
    el.className='cookie-banner';
    el.id='cookieBanner';
    el.innerHTML=`
      <div class="cookie-banner-inner">
        <div class="cookie-banner-text">
          <h2>Datenschutzhinweis</h2>
          <p>
            Diese Seite speichert Theme, Klasse und Notenrechner-Daten lokal in deinem Browser.
            Außerdem werden Schriftarten und Icons per CDN geladen. Es gibt kein Tracking und keine Analyse.
            Details stehen in der <a href="datenschutz.html">Datenschutzerklärung</a>.
          </p>
          <div class="cookie-banner-groups hidden" id="cookieGroups">
            <div class="cg-item">
              <div><strong>Lokale Speicherung</strong><span>Theme, ausgewählte Klasse und Notenrechner-Daten bleiben auf diesem Gerät.</span></div>
            </div>
            <div class="cg-item">
              <div><strong>Externe Ressourcen</strong><span>Google Fonts, Lucide Icons und auf dem Notenrechner html2pdf.js werden per CDN geladen.</span></div>
            </div>
          </div>
        </div>
        <div class="cookie-banner-actions">
          <button class="modal-btn" id="cookieSettingsBtn" type="button">Details</button>
          <div class="btn-row">
            <button class="modal-btn primary" id="cookieAcceptBtn" type="button">Verstanden</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(el);

    el.querySelector('#cookieSettingsBtn').addEventListener('click',()=>{
      el.querySelector('#cookieGroups').classList.toggle('hidden');
    });
    el.querySelector('#cookieAcceptBtn').addEventListener('click',()=>{
      saveConsent();
      hideBanner();
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
