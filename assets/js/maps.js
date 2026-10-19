/* Contact buttons: open the native maps app on Android, a new tab elsewhere */
  function openMaps(e) {
    e.preventDefault();
    var url = e.currentTarget.href
    if (/Android/i.test(navigator.userAgent)) {
      window.location = 'geo:40.2704275,22.5095192';
      setTimeout(function(){ window.open(url,'_blank'); }, 500);
    } else { window.open(url,'_blank'); }
  }
