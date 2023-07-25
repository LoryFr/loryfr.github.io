var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.bottom = "0";
  } else if (currentScrollPos > prevScrollpos + 100) {
    document.getElementById("navbar").style.bottom = "-5rem";
  }
  prevScrollpos = currentScrollPos;
}