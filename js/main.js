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

  //FIXME poprawić paginację

  new Splide( '.splide', {
    // autoWidth: true,
    // focus: 'center',
    padding: '0 10px',
  } ).mount();
})();
