if (screen.width < 600) {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.bottom = "0";
    } else {
        document.getElementById("navbar").style.bottom = "-5rem";
    }
    prevScrollpos = currentScrollPos;
    }

}