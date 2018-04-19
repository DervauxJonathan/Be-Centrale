import "../scss/app.scss";
import "jquery";
import {TimelineMax, TweenMax, Linear, Power1, TweenLite, Power4} from 'gsap';

require('animation.gsap');
require('debug.addIndicators');
const TimelineMax = require('TimelineMax');
const ScrollMagic = require('ScrollMagic');
import {ScrollScene} from 'scrollmagic';
import axios from "axios";


$(document).ready(function () {



//animation ticket //
    var ticket = $('.ticket');
    var h1 = $('h1');
    var logo = $('.logoBe');
    var images = $('.img_container');
    var title = $('.title-animation');
    var section = $('section')
    var tl = new TimelineLite();

    tl
        .from(ticket, 0.8, {width: 0, ease: Power0.easeOut})
        .from(h1, 1, {autoAlpha: 0}, '+=0.05')
        .from(logo, 0.5, {opacity: 0, x: -200, ease: Power0.easeOut}, '-=0.25');
//animation on scroll//

    var controller = new ScrollMagic.Controller();

    $('.section').each(function () {
        var timeline = new TimelineMax();
        var p = $(this).find('p');
        var line = $(this).find('.line');
        var button = $(this).find('.animated-button');
        var title = $(this).find('h2');
        var bg = $(this).find('.bg');
        var line = $(this).find('.line')
        var img = $(this).find('.img_container')

        timeline
            .from(title, 0.25, {opacity: 0, ease: Power0.easeInOut}, "-=0.15")
            .from(line, 0.25, {width: 0, ease: Power0.easeInOut})
            .from(p, 0.25, {opacity: 0, y: 50, ease: Power1.easeOut})
            .from(bg, 0.5, {width: 0})
            .from(button, 0.5, {opacity: 0, x: -200})
            .add(function () {
                button.addClass('animated')
            });


        var animation = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: '0.75',
            reverse: false

        })
            .setTween(timeline)


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
    let overlay = document.querySelector('.green_overlay');
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
                    overlay.style.display = 'block';
                }
            )

            TweenLite.from($('.name'), 0.5, {x: -100, autoAlpha: 0})

            var rooms = new TimelineMax();
            rooms
                .fromTo($('.green_overlay'), 0.5, {width: 0}, {width: "100%", ease: Power4.easeInOut})
                .fromTo($('.green_overlay'), 0.5, {x: "0%"}, {x: "100%", ease: Power4.easeInOut})
                .add('controll')
                .from(roomImage, 0.25, {x: "-100%", ease: Power4.easeInOut}, "-=0.5")
                .fromTo($('.grey_overlay'), 0.5, {width: 0,}, {width: "100%", ease: Power4.easeInOut}, "-=0.5")
                .fromTo($('.grey_overlay'), 0.5, {x: "0%"}, {x: "100%", ease: Power4.easeInOut}, "-=0.5")
                //   .fromTo(roomName,0.5,{x:-150},{x:0,ease: Power4.easeInOut})
                .from([roomCapacity, roomPeople, roomMaterial], 0.5, {autoAlpha: 0, y: 20}, 'tween-=0.75')
            //.set([roomCapacity,roomPeople,roomMaterial],{autoAlpha:1})
            // TweenLite.from([roomCapacity,roomPeople,roomMaterial],0.7,{autoAlpha:0,y:20});
        })
    });
    $('#openMenu').click(function () {
        $("#main").fadeIn(200);
        $('#openMenu').animate({left: "-10%"});
        $('#closeMenu').animate({left: "100%"});
        var opening = new TimelineMax();
        opening
            .from($('#logoSection'), .2, {x: "-50%"})
            .from($('#menuSection'), .2, {x: "-70%"})
            .from($('#service'), 0.1, {x: -350})
            .staggerFrom($('.menu'), 0.15, {x: -290}, 0.1)
    });

    $('#closeMenu').click(function () {
        $("#main").fadeOut(200);
        $('#openMenu').animate({left: "2%"});
        $('#closeMenu').animate({left: "110%"});

        //Rooms Transition //

    });
//scroll-nav//

    $("#aboutbtn").click(function () {
        $('html, body').animate({
            scrollTop: $(".about").offset().top - 50
        }, 500);
    });


    $("#cofoundersbtn").click(function () {
        $('html, body').animate({
            scrollTop: $(".co-founders").offset().top - 50
        }, 500);
    });


    $("#communitybtn").click(function () {
        $('html, body').animate({
            scrollTop: $(".community").offset().top - 50
        }, 500);
    });

    $("#joinusbtn").click(function () {
        $('html, body').animate({
            scrollTop: $(".join_us").offset().top - 100
        }, 500);
    });

    $("#spacesbtn").click(function () {
        $('html, body').animate({
            scrollTop: $(".spaces").offset().top - 100
        }, 500);
    });
    $("#evmtbtn").click(function () {
        $('html, body').animate({
            scrollTop: $(".event").offset().top - 100
        }, 500);
    });
    $("#contactbtn").click(function () {
        $('html, body').animate({
            scrollTop: $(".contact").offset().top - 100
        }, 500);
    });
});


formatGoogleCalendar.init({
    calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/becentral.org_e38ra8m0u4tgu03nipvtkvcca8@group.calendar.google.com/events?key=AIzaSyDm_lJBT0CIW7hDU38FmlblBbwpJALaqLg',
    past: false,
    upcoming: true,
    sameDayTimes: true,
    dayNames: true,
    pastTopN: -1,
    upcomingTopN: 6,
    recurringEvents: true,
    itemsTagName: 'li',
    upcomingSelector: '#events-upcoming',
    pastSelector: '#events-past',
    upcomingHeading: "",
    pastHeading: "",
    format: ['*date*', '*summary*', '*description*'],
});


$("#aboutbtn").click(function () {
    $('html, body').animate({
        scrollTop: $(".about").offset().top - 50
    }, 500);
});


$("#cofoundersbtnMobile").click(function () {
    $('html, body').animate({
        scrollTop: $(".co-founders").offset().top - 50
    }, 500);
});


$("#communitybtnMobile").click(function () {
    $('html, body').animate({
        scrollTop: $(".community").offset().top - 50
    }, 500);
});

$("#joinusbtnMobile").click(function () {
    $('html, body').animate({
        scrollTop: $(".join_us").offset().top - 100
    }, 500);
});

$("#spacesbtnMobile").click(function () {
    $('html, body').animate({
        scrollTop: $(".spaces").offset().top - 100
    }, 500);
});
$("#evmtbtnMobile").click(function () {
    $('html, body').animate({
        scrollTop: $(".event").offset().top - 100
    }, 500);
});
$("#contactbtnMobile").click(function () {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top - 100
    }, 500);
});

$('#closeMobile').click(function () {
    var tl = new TimelineMax();
    tl.to($('.main-mobile-nav'), 0.3, {x: '-100%'});
})


$('#ham').click(function () {
    var tl = new TimelineMax();
    tl.to($('.main-mobile-nav'), 0.3, {x: '100%'});
})

$('.mobileLink').click(function () {

})

var roomButton = document.querySelector('#roomButton');
var form = document.querySelector('.modal');
roomButton.addEventListener('click', function () {
    form.style.display = "block";

    $('.closing').click(function () {
        form.style.display = "none";
    })
});