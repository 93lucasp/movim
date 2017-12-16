var _layout = function () {
    return {
        init: function () {
            new WOW().init();
           
            $(".owl-carousel").owlCarousel({
                navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
                autoplay: true,
                loop: true,
                items: 1,
                margin: 10,
                
                responsive : {
                   
                    768 : {
                        nav: true,
                        
                    }
                }
            });
           
        },
       
    }
}();
$(document).ready(function () {
    _layout.init();
});