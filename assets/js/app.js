import "../scss/app.scss";
import "jquery";
import { TimelineMax, TweenMax, Linear, Power1 } from 'gsap';
require('animation.gsap');
require('debug.addIndicators');
const TimelineMax = require('TimelineMax');
const ScrollMagic = require('ScrollMagic');
import {ScrollScene} from 'scrollmagic';
$(document).ready(function() {  
    var ticket = $('.ticket');        
    var h1 = $('h1');
    var logo = $('.logo');
    var images = $('.img_container');
    
    var title = $('.title-animation');
    
    var section = $('section')
  //   var tl = new TimelineLite();  

  // tl
  // .from(ticket, 0.8, {width:0,ease:Power0.easeOut})
  // .from(h1, 1, {autoAlpha:0},'+=0.05')
  // .from(logo, 0.5, {opacity:0, x:-200,ease:Power0.easeOut},'-=0.25');
  
    
 var controller = new ScrollMagic.Controller();
 

 $('section').each(function(){
  var timeline = new TimelineMax();
  var p = $(this).find('p');
  var line = $(this).find('.line');
  var button = $(this).find('.button');
  var green = $(this).find('.green');
  var grey = $(this).find('.grey');
  var title = $(this).find('.title-animation');
    
    var bg = $('.bg');
    
  timeline
        .to(green, 0.5,{width:0, ease:Power1.easeInOut})
        .to(grey, 0.5,{width:0,ease:Power1.easeInOut},"-=0.25")
        .from(title, 0.25,{opacity:0, ease:Power0.easeInOut},"-=0.15")
        .from(line, 0.25, {width:0 , ease:Power0.easeInOut})
        .from(p, 0.25,{opacity:0, y:50,ease:Power1.easeOut})
        .from(button,0.25,{opacity:0,x:-200})
        .from(bg,0.5,{width:0});

  
  var animaiton = new ScrollMagic.Scene({
    triggerElement:this,
    triggerHook:'0.75',
    reverse:false
       
 }) 
    .setTween(timeline) 
    
    .addIndicators()
    .addTo(controller)
      
     
    });
// duration:(duration - window.innerHeight)
//---------------------------hamburger Menu----------------------------- //
    $(".hamburger").click(function() {
        $('.menu').toggleClass('show')
        $(".stick").toggleClass(function () {
          return $(this).is('.open, .close') ? 'open close' : 'open';
    });
  });    
}) 
   