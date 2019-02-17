document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
            $('html').css("overflow","visible");
        }
    }, 1000);
};

if($('.navbar').css('position') !== 'relative'){
    $('link[href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"]').after('<link rel="stylesheet" href="css/bootstrap.min.css">');
};

/*Фолбэк для fontawesome подключается при интеграции в CMS с помощью php (функция @fopen)*/

$(document).ready(function(){
    
    function fixedNav(){
        if ($(window).width() > 991){
            $(window).bind("scroll", function(){
                if ($(this).scrollTop() > 115){
                    $(".header-nav").addClass("fixed-nav");
                }else{
                    $(".header-nav").removeClass("fixed-nav");
                };
            });
        };
    };
    fixedNav();
    $(window).resize(fixedNav);
    
});
    
if($(".s1").length>0){
    
    if($('.swiper-wrapper').css('position') !== 'relative'){
        $('link[href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.1.6/css/swiper.min.css"]').after('<link rel="stylesheet" href="css/swiper.min.css">');
    };
    
    $(document).ready(function(){
        
        var mySwiper = new Swiper (".s1", {
            fadeEffect: {
                crossFade: true
            },
            effect: "fade",
            autoplay: {
                delay: 5000
            },
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });

        function mascotWidth(){
            var mascotwindow = $(window).width();
            if (mascotwindow > 991){
                $("#mascot").addClass("mascot-style").css("height","");
                $("#mascot>img").attr("src", "img/mascot.png");
                setTimeout(function(){
                    $("#mascot").animate({ width: "show" });
                }, 5000);
                setTimeout(function(){
                    $("#mascot>img").css("transition", "0.2s ease");
                }, 6000);
            }else{
                $("#mascot").hide().removeClass("mascot-style").css("height","0");
                $("#mascot>img").css("transition", "").attr("src", "");
            };
        };
        mascotWidth();
        $(window).resize(mascotWidth);
        
    });
    
};
    
if($("#infrastructure-map").length>0){
    
    $(document).ready(function(){
        
        $('map').imageMapResize();
        
        var timer;
        function removeDescription(){
            $('.railroad-storage-marker, .oil-storage-marker, .fuel-station-marker').css({"opacity": "1", "cursor": "pointer"});
            $('#railroad, #oil, #fuel').hide();
            $('.infrastructure-description').removeClass('infrastructure-show');
            $('.infrastructure-border').removeClass('railroad-storage-border oil-storage-border fuel-station-border infrastructure-show');
        };
        
        $('map, .infrastructure-main-marker, .railroad-storage-marker, .oil-storage-marker, .fuel-station-marker, .infrastructure-description, .infrastructure-border').mouseenter(function(){
            $('.infrastructure-main-marker').hide();
            $('.railroad-storage-marker, .oil-storage-marker, .fuel-station-marker').show().css("cursor", "pointer");
            clearTimeout(timer);
        }).mouseleave(function(){
            $('.infrastructure-main-marker').show();
            $('.railroad-storage-marker, .oil-storage-marker, .fuel-station-marker').hide();
            timer = setTimeout(removeDescription, 10);
        });
        
        $('.railroad-storage-marker, .oil-storage-marker, .fuel-station-marker').on("click", function(){
            $(this).css({"cursor": "default", "opacity": "0"});
        });
        
        $('.railroad-storage-marker').on("click", function(){
            $('.infrastructure-border').addClass('railroad-storage-border infrastructure-show').removeClass('oil-storage-border fuel-station-border');
            $('#railroad-storage-border, #railroad').show();
            $('#oil-storage-border, #fuel-station-border, #oil, #fuel').hide();
            $('.infrastructure-description').addClass('infrastructure-show').css({"top": "120px", "right": "", "left": "0"});
            $('.oil-storage-marker, .fuel-station-marker').css("opacity", "1");
        });

        $('.oil-storage-marker').on("click", function(){
            $('.infrastructure-border').addClass('oil-storage-border infrastructure-show').removeClass('railroad-storage-border fuel-station-border');
            $('#oil-storage-border, #oil').show();
            $('#railroad-storage-border, #fuel-station-border, #railroad, #fuel').hide();
            $('.infrastructure-description').addClass('infrastructure-show').css({"top": "120px", "left": "", "right": "0"});
            $('.railroad-storage-marker, .fuel-station-marker').css("opacity", "1");
        });

        $('.fuel-station-marker').on("click", function(){
            $('.infrastructure-border').addClass('fuel-station-border infrastructure-show').removeClass('railroad-storage-border oil-storage-border');
            $('#fuel-station-border, #fuel').show();
            $('#railroad-storage-border, #oil-storage-border, #railroad, #oil').hide();
            $('.infrastructure-description').addClass('infrastructure-show').css({"top": "400px", "right": "", "left": "0"});
            $('.railroad-storage-marker, .oil-storage-marker').css("opacity", "1");
        });

        $('map, .infrastructure-border, .infrastructure-description').click(removeDescription);
        
    });
    
};

if($(".managment").length>0){
    
    $(document).ready(function(){
    
        var managment = new Vue({
            el: '#managmentApp',
            data: {
                windowWidth: window.innerWidth,
                isActive: 0,
                openContent: 0
            },
            methods: {
                showContent: function(el){
                    this.isActive = el;
                    this.openContent = el;
                },
                hideContent: function(){
                    this.isActive = false;
                    this.openContent = false;
                },
                showDescription2: function(){
                    this.openContent = 2;
                },
                showDescription3: function(){
                    this.openContent = 3;
                },
                showDescription4: function(){
                    this.openContent = 4;
                },
                showDescription6: function(){
                    this.openContent = 6;
                },
                showFunction: function(){
                    if (this.windowWidth < 576){
                        $('#Chepalov, #Makarov, #Ilyin, #Matveev, #Vasilyev').off('click');
                    }else if (this.windowWidth < 768){
                        $('#Chepalov, #Makarov, #Vasilyev').off('click');
                        $('#Chepalov').on('click', this.showDescription2);
                        $('#Ilyin').on('click', this.showDescription4);
                        $('#Matveev').on('click', this.showDescription6);
                    }else{
                        $('#Ilyin, #Matveev').off('click');
                        $('#Chepalov, #Makarov').on('click', this.showDescription3);
                        $('#Vasilyev, #Matveev').on('click', this.showDescription6);
                    };
                }
            },
            mounted(){
                this.showFunction();
                window.addEventListener('resize', () => {
                    this.windowWidth = window.innerWidth;
                    this.checkWidth;
                });
            },
            computed: {
                checkWidth(){
                    this.hideContent();
                    this.showFunction();
                    this.windowWidth;
                }
            }
        });
        
    });
    
};

if($(".wow").length>0){
    
    if($('.slideInRight').css('animation-name') !== 'slideInRight'){
        $('link[href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"]').after('<link rel="stylesheet" href="css/animate.min.css">');
    };
    
};

if($(".services-block").length>0){
    
    $(document).ready(function(){
        
        var commonData = {
            openContent: 0
        };
        
        var commonMethods = {
            showContent: function(el){
                this.openContent = el;
            }
        };
        
        var services = new Vue({
            el: '#servicesApp',
            data: commonData,
            methods: commonMethods
        });
        
        var services2 = new Vue({
            el: '#servicesApp2',
            data: commonData,
            methods: commonMethods
        });
        
    });
    
};

if($(".s2").length>0){
    
    if($('.swiper-wrapper').css('position') !== 'relative'){
        $('link[href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.1.6/css/swiper.min.css"]').after('<link rel="stylesheet" href="css/swiper.min.css">');
    };
    
    $(document).ready(function(){
        
        var mySwiper2 = new Swiper(".s2", {
            slidesPerView: 2,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            breakpoints: {
                991: {
                    slidesPerView: 1,
                },
            },
        });
        
    });
    
};

if($(".nav-products").length>0){
    
    $(document).ready(function(){

        $('#productsModal').on('show.bs.modal', function(event){
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var modal = $(this)
            modal.find('.modal-body input#fuel-name').val(recipient)
        });
        
        $('option:contains("Передвижная АЗС")').attr('id', 'pazs');

        $('.products-block button').on('click', function(){
            $('#pazs').removeAttr('disabled');
        });
        $('.products-block button#ts-1, .products-block button#tsm').on('click', function(){
            $('#pazs').attr('disabled', true);
        });
    
    });
    
};

if($(".fuel-stations-map").length>0){
    
    $(document).ready(function(){
        
        $(function(){
            $(".district-fuel-stations").niceScroll({
                cursorcolor: "#1CA06E",
                cursorwidth: "14px",
                cursorborderradius: 10,
                autohidemode: false,
                emulatetouch: true,
                grabcursorenabled: false,
                cursordragontouch: true,
                preventmultitouchscrolling: true
            });
        });
        
        document.querySelectorAll('.fuel-stations-map svg a').forEach(function(item) { 
            item.addEventListener('click', function(){
                $('.district-fuel-stations').load('content.html #' + this.id);
                $('.district-title').load('content.html #' + this.id + '-title');
            })
        });

        $('.district-title').html('<p>Выберите район</p>');
        $('.fuel-stations-map svg').focusin(function(){
            $('.district-title').empty().css('height','55px');
        });
        $('.fuel-stations-map svg').focusout(function(){
            $('.district-title').html('<p>Выберите район</p>').css('height','55px');
            $('.district-fuel-stations').empty();
        });
        
    });
    
};

if($(".photo-post").length>0){
    
    if($('.lg-backdrop').css('position') !== 'fixed'){
        $('link[href="https://cdn.jsdelivr.net/npm/lightgallery@1.6.11/dist/css/lightgallery.min.css"]').after('<link rel="stylesheet" href="css/lightgallery.min.css">');
    };
    
};