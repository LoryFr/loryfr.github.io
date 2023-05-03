if (screen.width < 600) {

    window.addEventListener("scroll", function(){

let currentSCroll = document.documentElement.scrollTop;

if(currentSCroll > 100) {

    document.getElementById("navbar").style.bottom = "-5rem";

} else {

    document.getElementById("navbar").style.bottom = "0";

     }
     
    });
}