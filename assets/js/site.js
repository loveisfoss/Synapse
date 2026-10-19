/* Shared by every page: sidebar / hamburger behaviour */
  function toggleSidebar() {
    var s = document.getElementById('sidebar');
    var h = document.getElementById('hamburger');
    var o = document.getElementById('sidebarOverlay');
    s.classList.toggle('open');
    h.classList.toggle('open');
    o.classList.toggle('open');
  }
  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('open');
  }
  function toggleSubmenu(btn) {
    btn.classList.toggle('open');
    var sub = btn.nextElementSibling;
    sub.classList.toggle('open');
  }
  // Prevent sidebar touch scroll from propagating to body
  (function() {
    var sidebar = document.getElementById('sidebar');
    var startY = 0;
    sidebar.addEventListener('touchstart', function(e) {
      startY = e.touches[0].clientY;
    }, { passive: true });
    sidebar.addEventListener('touchmove', function(e) {
      var scrollable = sidebar.scrollHeight > sidebar.clientHeight;
      if (!scrollable) {
        e.preventDefault();
        return;
      }
      var atTop = sidebar.scrollTop === 0;
      var atBottom = sidebar.scrollTop + sidebar.clientHeight >= sidebar.scrollHeight;
      var movingDown = e.touches[0].clientY < startY;
      var movingUp = e.touches[0].clientY > startY;
      if ((atTop && movingUp) || (atBottom && movingDown)) {
        e.preventDefault();
      }
    }, { passive: false });
  })();
