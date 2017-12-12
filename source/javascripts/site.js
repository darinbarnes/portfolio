#= require jquery

$(window).onload(function() {
   $('#fade1, #fade2').each(function(fadeInDiv) {
     $(this).delay(fadeInDiv * 500).fadeIn(1000);
   });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
