(window.onload = function() {
  const cookies = document.cookie;
  const acceptedCookies = cookies.indexOf('accepted=1');
  if(acceptedCookies < 0) {
    const cookieContainer = document.getElementById('cookie_container');
    cookieContainer.style.display = 'block';
    document.getElementById('cookie_button').onclick = function(){
      document.cookie = "accepted=1";
      cookieContainer.style.display = 'none';
    }
  }
})();
