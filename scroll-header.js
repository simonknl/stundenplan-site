(function(){
  const root=document.documentElement;
  function update(){
    const a=Math.min(window.scrollY/80,1);
    root.style.setProperty('--topbar-alpha',a.toFixed(3));
  }
  update();
  window.addEventListener('scroll',update,{passive:true});
})();
