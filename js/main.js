import Splide from '@splidejs/splide';
(window.onload = function() {
  var cookies = document.cookie;
  var acceptedCookies = cookies.indexOf('accepted=1');
  if(acceptedCookies < 0) {

    var cookieContainer = document.getElementById('cookie_container');
    cookieContainer.style.display = 'block';
    document.getElementById('cookie_button').onclick = function(){
      var expires = new Date();
      // expiration one year
      expires = new Date(expires.getTime() +1000*60*60*24*365);
      document.cookie = 'accepted=1; expires='+expires.toGMTString()+';';
      cookieContainer.style.display = 'none';
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  if(window.innerWidth < 1280) {
    var navButtonLabel = document.getElementById('nav_button_label');
    navButtonLabel.onclick = function() {
      if(typeof window.onscroll === 'function') {
        return window.onscroll = null
      }
      window.onscroll = function () { window.scrollTo(0, 0); };
    }

    var navOverlay = document.getElementById('nav_overlay');
    navOverlay.addEventListener('click', function (e) {
      var navButton = document.getElementById('nav_button');
      window.onscroll = null
      navButton.checked = false;
    })
  }

  var slider = document.getElementById('splide');

  if(slider) {
    new Splide('#splide', {
      padding: '0 10px',
      type  : 'fade',
      rewind: true,
      speed: 500,
    }).mount();
  }
})();
