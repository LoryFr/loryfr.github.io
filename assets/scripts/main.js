// Nav

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      if (screen.height < 1080) {
            document.getElementById("nav-bar").style.bottom = "24px";
      }
      else {
            document.getElementById("nav-bar").style.bottom = "48px";
      }
  } else {
    document.getElementById("nav-bar").style.bottom = "-100px";
  }
  prevScrollpos = currentScrollPos;
}