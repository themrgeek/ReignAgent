


//NAVIGATION
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
    }
    
    
    
    
    
    //ONSCROLL FUNCTION
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myTopnav").style.backgroundColor = "#1e1e1e";
    document.getElementById("myTopnav").style.boxShadow = "0px 6px 16px -6px rgba(1,1,1,0.5)";
    } else {
    document.getElementById("myTopnav").style.backgroundColor = "transparent";
    document.getElementById("myTopnav").style.boxShadow = "0px 0px 0px 0px rgba(1,1,1,0.5)";
    }
    } 
    
    
    
    
    
    //CLIENT LOGO SLIDER
    $(function() {
    var $clientslider = $('#clientlogo');
    var clients = $clientslider.children().length;
    var clientwidth = (clients * 220); 
    $clientslider.css('width', clientwidth);
    var rotating = true;
    var clientspeed = 1800;
    var seeclients = setInterval(rotateClients, clientspeed);
    $(document).on({
    mouseenter: function() {
    rotating = false;
    },
    mouseleave: function() {
    rotating = true;
    }
    }, '#ourclients');
    function rotateClients() {
    if (rotating != false) {
    var $first = $('#clientlogo li:first');
    $first.animate({
    'margin-left': '-245px'
    }, 2000, function() {
    $first.remove().css({
    'margin-left': '0px'
    });
    $('#clientlogo li:last').after($first);
    });
    }
    }
    });
    
    
    