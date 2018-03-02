import "../scss/app.scss";
import 'jquery';
import 'gsap';
import { TweenLite } from "gsap";
import 'scrollmagic';
$(document).ready(function() {
   
    var ticket = $('.ticket');
    var h1 = $('h1');
    var logo = $('.logo');
    var images = $('.img_container');
    var tl = new TimelineLite();
    var line = $('.line');
    var title = $('.title-animation');
    var green = $('.green');
    var grey = $('.grey');
    var title = $('.title-animation');
    var p = $('p');
    var bg = $('.bg');
    var button = $('.button');
    var section = $('section');
    var controller = new ScrollMagic.Controller();
 tl
 .from(ticket, 0.8, {width:0,ease:Power0.easeOut})
 .from(h1, 1, {autoAlpha:0},'+=0.05')
 .from(logo, 0.5, {opacity:0, x:-200,ease:Power0.easeOut},'-=0.25');        
    
      TweenLite.to(green, 1,{width:0})
      TweenLite.to(grey, 1.5,{width:0, delay:0.25});
      TweenLite.from(title, 0.5,{opacity:0, delay:.75, ease:Power0.easeInOut});
  tl
    .from(line, 0.3, {width:0 , ease:Power0.easeInOut})
    .from(p, 0.4,{opacity:0, y:50,ease:Power1.easeOut},'+=0.15')
    //TweenMax.from(images, 1.5,{width:0, height:0});
    .from(button,0.3,{opacity:0,x:-200},'+=0.15')
    TweenLite.from(bg,1,{width:0, delay:1})
    .addTo(controller);
    })
    $(".hamburger").click(function() {
        $('.menu').toggleClass('show')
        $(".stick").toggleClass(function () {
          return $(this).is('.open, .close') ? 'open close' : 'open';
        });
      });
    
  
