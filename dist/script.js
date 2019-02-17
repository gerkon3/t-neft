"use strict";document.body.onload=function(){setTimeout(function(){var t=document.getElementById("page-preloader");t.classList.contains("done")||(t.classList.add("done"),$("html").css("overflow","visible"))},1e3)},"relative"!==$(".navbar").css("position")&&$('link[href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"]').after('<link rel="stylesheet" href="css/bootstrap.min.css">'),$(document).ready(function(){function t(){991<$(window).width()&&$(window).bind("scroll",function(){115<$(this).scrollTop()?$(".header-nav").addClass("fixed-nav"):$(".header-nav").removeClass("fixed-nav")})}t(),$(window).resize(t)}),0<$(".s1").length&&("relative"!==$(".swiper-wrapper").css("position")&&$('link[href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.1.6/css/swiper.min.css"]').after('<link rel="stylesheet" href="css/swiper.min.css">'),$(document).ready(function(){new Swiper(".s1",{fadeEffect:{crossFade:!0},effect:"fade",autoplay:{delay:5e3},loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});function t(){991<$(window).width()?($("#mascot").addClass("mascot-style").css("height",""),$("#mascot>img").attr("src","img/mascot.png"),setTimeout(function(){$("#mascot").animate({width:"show"})},5e3),setTimeout(function(){$("#mascot>img").css("transition","0.2s ease")},6e3)):($("#mascot").hide().removeClass("mascot-style").css("height","0"),$("#mascot>img").css("transition","").attr("src",""))}t(),$(window).resize(t)})),0<$("#infrastructure-map").length&&$(document).ready(function(){var t;function e(){$(".railroad-storage-marker, .oil-storage-marker, .fuel-station-marker").css({opacity:"1",cursor:"pointer"}),$("#railroad, #oil, #fuel").hide(),$(".infrastructure-description").removeClass("infrastructure-show"),$(".infrastructure-border").removeClass("railroad-storage-border oil-storage-border fuel-station-border infrastructure-show")}$("map").imageMapResize(),$("map, .infrastructure-main-marker, .railroad-storage-marker, .oil-storage-marker, .fuel-station-marker, .infrastructure-description, .infrastructure-border").mouseenter(function(){$(".infrastructure-main-marker").hide(),$(".railroad-storage-marker, .oil-storage-marker, .fuel-station-marker").show().css("cursor","pointer"),clearTimeout(t)}).mouseleave(function(){$(".infrastructure-main-marker").show(),$(".railroad-storage-marker, .oil-storage-marker, .fuel-station-marker").hide(),t=setTimeout(e,10)}),$(".railroad-storage-marker, .oil-storage-marker, .fuel-station-marker").on("click",function(){$(this).css({cursor:"default",opacity:"0"})}),$(".railroad-storage-marker").on("click",function(){$(".infrastructure-border").addClass("railroad-storage-border infrastructure-show").removeClass("oil-storage-border fuel-station-border"),$("#railroad-storage-border, #railroad").show(),$("#oil-storage-border, #fuel-station-border, #oil, #fuel").hide(),$(".infrastructure-description").addClass("infrastructure-show").css({top:"120px",right:"",left:"0"}),$(".oil-storage-marker, .fuel-station-marker").css("opacity","1")}),$(".oil-storage-marker").on("click",function(){$(".infrastructure-border").addClass("oil-storage-border infrastructure-show").removeClass("railroad-storage-border fuel-station-border"),$("#oil-storage-border, #oil").show(),$("#railroad-storage-border, #fuel-station-border, #railroad, #fuel").hide(),$(".infrastructure-description").addClass("infrastructure-show").css({top:"120px",left:"",right:"0"}),$(".railroad-storage-marker, .fuel-station-marker").css("opacity","1")}),$(".fuel-station-marker").on("click",function(){$(".infrastructure-border").addClass("fuel-station-border infrastructure-show").removeClass("railroad-storage-border oil-storage-border"),$("#fuel-station-border, #fuel").show(),$("#railroad-storage-border, #oil-storage-border, #railroad, #oil").hide(),$(".infrastructure-description").addClass("infrastructure-show").css({top:"400px",right:"",left:"0"}),$(".railroad-storage-marker, .oil-storage-marker").css("opacity","1")}),$("map, .infrastructure-border, .infrastructure-description").click(e)}),0<$(".managment").length&&$(document).ready(function(){new Vue({el:"#managmentApp",data:{windowWidth:window.innerWidth,isActive:0,openContent:0},methods:{showContent:function(t){this.isActive=t,this.openContent=t},hideContent:function(){this.isActive=!1,this.openContent=!1},showDescription2:function(){this.openContent=2},showDescription3:function(){this.openContent=3},showDescription4:function(){this.openContent=4},showDescription6:function(){this.openContent=6},showFunction:function(){this.windowWidth<576?$("#Chepalov, #Makarov, #Ilyin, #Matveev, #Vasilyev").off("click"):this.windowWidth<768?($("#Chepalov, #Makarov, #Vasilyev").off("click"),$("#Chepalov").on("click",this.showDescription2),$("#Ilyin").on("click",this.showDescription4),$("#Matveev").on("click",this.showDescription6)):($("#Ilyin, #Matveev").off("click"),$("#Chepalov, #Makarov").on("click",this.showDescription3),$("#Vasilyev, #Matveev").on("click",this.showDescription6))}},mounted:function(){var t=this;this.showFunction(),window.addEventListener("resize",function(){t.windowWidth=window.innerWidth,t.checkWidth})},computed:{checkWidth:function(){this.hideContent(),this.showFunction(),this.windowWidth}}})}),0<$(".wow").length&&"slideInRight"!==$(".slideInRight").css("animation-name")&&$('link[href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"]').after('<link rel="stylesheet" href="css/animate.min.css">'),0<$(".services-block").length&&$(document).ready(function(){var t={openContent:0},e={showContent:function(t){this.openContent=t}};new Vue({el:"#servicesApp",data:t,methods:e}),new Vue({el:"#servicesApp2",data:t,methods:e})}),0<$(".s2").length&&("relative"!==$(".swiper-wrapper").css("position")&&$('link[href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.1.6/css/swiper.min.css"]').after('<link rel="stylesheet" href="css/swiper.min.css">'),$(document).ready(function(){new Swiper(".s2",{slidesPerView:2,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{991:{slidesPerView:1}}})})),0<$(".nav-products").length&&$(document).ready(function(){$("#productsModal").on("show.bs.modal",function(t){var e=$(t.relatedTarget).data("whatever");$(this).find(".modal-body input#fuel-name").val(e)}),$('option:contains("Передвижная АЗС")').attr("id","pazs"),$(".products-block button").on("click",function(){$("#pazs").removeAttr("disabled")}),$(".products-block button#ts-1, .products-block button#tsm").on("click",function(){$("#pazs").attr("disabled",!0)})}),0<$(".fuel-stations-map").length&&$(document).ready(function(){$(function(){$(".district-fuel-stations").niceScroll({cursorcolor:"#1CA06E",cursorwidth:"14px",cursorborderradius:10,autohidemode:!1,emulatetouch:!0,grabcursorenabled:!1,cursordragontouch:!0,preventmultitouchscrolling:!0})}),document.querySelectorAll(".fuel-stations-map svg a").forEach(function(t){t.addEventListener("click",function(){$(".district-fuel-stations").load("content.html #"+this.id),$(".district-title").load("content.html #"+this.id+"-title")})}),$(".district-title").html("<p>Выберите район</p>"),$(".fuel-stations-map svg").focusin(function(){$(".district-title").empty().css("height","55px")}),$(".fuel-stations-map svg").focusout(function(){$(".district-title").html("<p>Выберите район</p>").css("height","55px"),$(".district-fuel-stations").empty()})}),0<$(".photo-post").length&&"fixed"!==$(".lg-backdrop").css("position")&&$('link[href="https://cdn.jsdelivr.net/npm/lightgallery@1.6.11/dist/css/lightgallery.min.css"]').after('<link rel="stylesheet" href="css/lightgallery.min.css">');