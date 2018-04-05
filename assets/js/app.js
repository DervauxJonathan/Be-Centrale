import "../scss/app.scss";
import "jquery";
import { TimelineMax, TweenMax, Linear, Power1, TweenLite, Power4 } from 'gsap';
require('animation.gsap');
require('debug.addIndicators');
const TimelineMax = require('TimelineMax');
const ScrollMagic = require('ScrollMagic');
import {ScrollScene} from 'scrollmagic';
import axios from "axios";


$(document).ready(function(){
//animation on scroll//
$('.section').each(function(){
    var timeline = new TimelineMax();
    var p = $(this).find('paragraphe');
    var line = $(this).find('.line');
    var button = $(this).find('.button');
    var title = $(this).find('h2');
    var bg = $(this).find('.bg');
    var line=$(this).find('.line')
      
    timeline
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

function getDataFromRoom() {
    return axios.get('http://localhost:3000/room.json')
}

async function data(room) {
    const res = await getDataFromRoom(room);
    return res;
}

let link = document.querySelectorAll('.room_link');
let roomName = document.querySelector('.room_box .name');
let roomCapacity = document.querySelector('.values #capacity');
let roomPeople = document.querySelector('.values #people');
let roomMaterial = document.querySelector('.values #material');
let roomImage = document.querySelector('.img_container_room #image');

link = Array.from(link);
link.forEach((element) => {
    element.addEventListener('click', () => {
        data().then(roomArray => {
                let selectedRoom = roomArray.data.find(e => e.id === element.id);
                roomName.innerHTML = selectedRoom.name;
                roomCapacity.innerHTML = selectedRoom.capacity;
                roomPeople.innerHTML = selectedRoom.people;
                roomMaterial.innerHTML = selectedRoom.material;
                roomImage.src = selectedRoom.image;
            }
        )
        var rooms = new TimelineMax();
        rooms
          .fromTo($('.green_overlay'),0.5,{width:0},{width:"100%",ease: Power4.easeInOut})
          .fromTo($('.green_overlay'),0.5,{x:"0%"},{x:"100%",ease: Power4.easeInOut})
          .add('controll')
          .from(roomImage,0.25,{x:"-100%",ease: Power4.easeInOut},"-=0.5")
          .fromTo($('.grey_overlay'),0.5,{width:0,},{width:"100%",ease: Power4.easeInOut},"-=0.5")
          .fromTo($('.grey_overlay'),0.5,{x:"0%"},{x:"100%",ease: Power4.easeInOut},"-=0.5")
        //   .fromTo(roomName,0.5,{x:-150},{x:0,ease: Power4.easeInOut})
          .from([roomCapacity,roomPeople,roomMaterial],0.5,{autoAlpha:0,y:20},'tween-=0.75')
          //.set([roomCapacity,roomPeople,roomMaterial],{autoAlpha:1})
          .from($('.paragraphe'),0.5,{width:0,ease:Power1.easeOut});
          // TweenLite.from([roomCapacity,roomPeople,roomMaterial],0.7,{autoAlpha:0,y:20});
    })
});
$('#openMenu').click(function(){
    $("#main").fadeIn(200);
    $('#openMenu').animate({left:"-10%"});
    $('#closeMenu').animate({left:"100%"});
    var opening = new TimelineMax();
    opening    
      .from($('#logoSection'),.2,{x:"-50%"})
      .from($('#menuSection'),.2,{x:"-70%"})
      .from($('#service'),0.1,{x:-350})
      .staggerFrom($('.menu'), 0.15, {x:-290}, 0.1)
  });
  
  $('#closeMenu').click(function(){
    $("#main").fadeOut(200);
    $('#openMenu').animate({left:"2%"});
    $('#closeMenu').animate({left:"110%"});
    
    //Rooms Transition //
    
  });


 })