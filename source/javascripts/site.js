function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(window).load(function() {
   $('div').each(function(i) {
      $(this).delay((i + 1) * 250).fadeIn(2000);
   });
});
