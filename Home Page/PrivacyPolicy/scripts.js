// Accordion interaction (click + keyboard)
document.addEventListener('click', function(e){
  var head = e.target.closest('.acc-head');
  if(head){
    var tgt = head.getAttribute('data-target');
    var body = document.getElementById(tgt);
    if(!body) return;
    var isOpen = body.style.display === 'block';
    body.style.display = isOpen ? 'none' : 'block';
  }
});

// keyboard accessibility for accordion headers
document.querySelectorAll('.acc-head').forEach(function(h){
  h.addEventListener('keydown', function(ev){
    if(ev.key === 'Enter' || ev.key === ' '){
      ev.preventDefault(); h.click();
    }
  });
});

// Cookie controls (simple local demo)
var cookieVal = document.getElementById('cookieVal');
var cookieStatus = document.getElementById('cookieStatus');

document.getElementById('acceptCookies').addEventListener('click', function(){
  try{
    localStorage.setItem('site_cookies','accepted');
    cookieVal.textContent='Accepted';
    cookieStatus.style.color='green';
  }catch(e){
    cookieVal.textContent='Unable to save';
  }
});

document.getElementById('manageCookies').addEventListener('click', function(){
  var choice = confirm('Toggle analytics cookies on this device? OK = enable, Cancel = disable');
  try{
    localStorage.setItem('analytics_cookies', choice ? 'on' : 'off');
    cookieVal.textContent = 'Managed';
    cookieStatus.style.color='inherit';
  }catch(e){
    cookieVal.textContent='Unable to save';
  }
});

document.getElementById('printBtn').addEventListener('click', function(){ window.print() });

// Set effective & updated dates default to today if not edited, show cookie state, open first accordion
(function(){
  var today = new Date().toISOString().slice(0,10);
  var eff = document.getElementById('effectiveDate');
  var upd = document.getElementById('lastUpdated');
  if(eff && eff.textContent.trim().startsWith('[')) eff.textContent = today;
  if(upd && upd.textContent.trim().startsWith('[')) upd.textContent = today;

  try{
    var v = localStorage.getItem('site_cookies');
    if(v){
      cookieVal.textContent = v === 'accepted' ? 'Accepted' : v;
      cookieStatus.style.color = v === 'accepted' ? 'green' : 'inherit';
    }
  }catch(e){}

})();

document.addEventListener('DOMContentLoaded', function() {
  let lastScroll = 0;
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 50) {
      header.classList.remove('hide-nav');
      lastScroll = currentScroll;
      return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add('hide-nav');
    } else if (currentScroll < lastScroll) {
      header.classList.remove('hide-nav');
    }
    
    lastScroll = currentScroll;
  });
});
