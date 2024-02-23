// Nav

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      if (screen.height < 1080) {
            document.getElementById("navbar").style.bottom = "24px";
      }
      else {
            document.getElementById("navbar").style.bottom = "48px";
      }
  } else {
    document.getElementById("navbar").style.bottom = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// Modal

function openModal() {

  var modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.style.background = "rgba(0, 0, 0, 0)";

  setTimeout(function() {
    modal.style.background = "rgba(0, 0, 0, 0.4)";}, 100)

  var modalContent = document.getElementById("modal-content");
  modalContent.style.opacity = "0";

  setTimeout(function() {
    modalContent.style.opacity = "100";}, 100)

}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}