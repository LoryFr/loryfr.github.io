if (screen.width < 600) {

    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    // var currentScrollPos = window.pageYOffset;
    // if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("navbar").style.bottom = "0";
    // } else {
    //     document.getElementById("navbar").style.bottom = "-5rem";
    // }
    // prevScrollpos = currentScrollPos;
    // }

    window.addEventListener("scroll", function(){

let currentSCroll = document.documentElement.scrollTop;

if(currentSCroll > 100) {
    document.getElementById("navbar").style.bottom = "-5rem";


} else {
    document.getElementById("navbar").style.bottom = "0";

     }


    });
 
}