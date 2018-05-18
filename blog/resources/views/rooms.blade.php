<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="apple-touch-icon" sizes="152x152" href="images/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicons/favicon-16x16.png">
    <link rel="manifest" href="images/favicons/site.webmanifest">
    <link rel="mask-icon" href="images/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="stylesheet" href="app.css">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <title>Rooms</title>
</head>
<body>

<div class="rooms">
    <div>
        <div class="containerMobile">
            <div class="back backMobile">
                <a href="index.html"><img src="images/arrow.svg" alt=""><span>Back</span></a>
            </div>
            <div class="content">
                <div class="subTitle">
                    <hr class="line">
                    <h2>Our Spaces</h2>
                </div>
                <div class="mobileDescription">
                    We organize training sessions, workshops, seminars, meetups, hackathons, bootcamps… Any form of
                    exchange involving digital knowledge, expertise, insights and experiences intented to help
                    people and companies forward.
                </div>
                <a href="mailto:yourock@becentral.org" class="buttonStyle">BOOK A ROOM</a>

            </div>
            <img src="images/boardroom.jpg" alt="">
            <img src="images/foyer.jpg" alt="">
            <img src="images/studioC.jpg" alt="">

        </div>
        <div class="container">
            <div class="back">
                <a href="index.html"><img src="images/arrow.svg" alt=""><span>Back</span></a>
            </div>
            <div class="left">
                <div class="description">
                    <div class="subTitle">
                        <hr class="line">
                        <h2>Our Spaces</h2>
                    </div>
                    <div class="paragraphe">
                        <div class="float">
                            We organize training sessions, workshops, seminars, meetups, hackathons, bootcamps… Any form
                            of
                            exchange involving digital knowledge, expertise, insights and experiences intented to help
                            people and companies forward.
                        </div>
                        <div class="buttonContent">
                            <div class="button">
                                <a href="#" id="roomButton" class="animated-button">BOOK A ROOM</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="specs">
                    <div class="content">
                        <ul class="names">
                            <li> Capacity</li>
                            <li> Material</li>
                            <li> People</li>
                        </ul>
                        <ul class="values">
                            <li id="capacity">110m²</li>
                            <li id="material">Micro | Beamer | Audio | Screen</li>
                            <li id="people">U-Shape : 25 p | Classroom : 30 p | Theater : 75 p</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="shaddow"></div>
                <ul class="rooms_list">
                    <li id="board" class="room_link">The Boardroom</li>
                    <li id="foyer" class="room_link">The foyer</li>
                    <li id="studioc" class="room_link">Studio C</li>

                </ul>
                <div class="green_overlay"></div>
                <div class="img_container_room">
                    <img id="image" src="images/boardroom.jpg" alt="">
                </div>

                <div class="room_box">
                    <div class="grey_overlay"></div>
                    <div class="name">
                        The Boardroom
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="modal">
        <div class="closeButton">
            <img src="images/close.png" alt="close button" class="closing">
        </div>
        <div class="form">
            <div class="container">

                <div class="form_contact">
                    <h3>Contact us</h3>
                    <form id="contact-form" class="form" action="https://formspree.io/yourock@becentral.org"
                          method="POST" role="form">
                        <div class="form-group">
                            <label class="form-label" for="name">Lastname</label>
                            <input type="text" class="form-control" id="name" name="Lastname" placeholder="Lastname"
                                   tabindex="1" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="name">Firstname</label>
                            <input type="text" class="form-control" id="Firstname" name="Firstname"
                                   placeholder="First-Name"
                                   tabindex="2" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="email">Email</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Your Email"
                                   tabindex="3" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="company">Company</label>
                            <input type="text" class="form-control" id="company" name="company" placeholder="Company"
                                   tabindex="4" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="name-event">Name of event</label>
                            <input type="text" class="form-control" id="name-event" name="name-event"
                                   placeholder="Name of event" tabindex="5" required>
                        </div>
                        <div class="number">
                            <div class="form-group">
                                <label class="form-label" for="date-event">Date of event</label>
                                <input type="date" class="form-control" id="date-event" name="date-event"
                                       placeholder="Date of event" tabindex="6" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="time-event">Time of event</label>
                                <input type="time" class="form-control" id="time" name="time-event"
                                       placeholder="Time of event" tabindex="7" required>
                            </div>
                        </div>
                        <div class="form-group_number">
                            <label class="form-label" for="attendees">Number of attendees</label>
                            <input type="number" class="form-control" id="attendees" name="attendees"
                                   placeholder="Number of attendees" tabindex="8" required>
                        </div>

                        <div class="checkbox">
                            <h4>Catering</h4>
                            <div class="contain">
                                <div class="form-group">
                                    <input type="checkbox" class="form-control" id="checkbox" name="breakfast"
                                           placeholder="Breakfast" tabindex="9"> <span>Breakfast</span> <span
                                        class="checkmark"></span>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" class="form-control" id="checkbox" name="lunch"
                                           placeholder="Lunch" tabindex="10"> <span>Lunch</span> <span
                                        class="checkmark"></span>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" class="form-control" id="checkbox" name="dinner"
                                           placeholder="Dinner" tabindex="11"> <span>Dinner</span> <span
                                        class="checkmark"></span>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" class="form-control" id="checkbox" name="reception"
                                           placeholder="Reception" tabindex="12"> <span>Reception</span> <span
                                        class="checkmark"></span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">

                            <h4>Message</h4>
                            <div class="msg">
                                <textarea name="message" class="form-control" id="message"
                                          tabindex="13" required></textarea>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-start-order">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    var roomButton = document.querySelector('#roomButton');
    var closeButton = document.querySelector('.closing');
    var form = document.querySelector('.modal');

    roomButton.addEventListener('click', function () {
        form.style.display = "block";
    });

    closeButton.addEventListener('click', function () {
        form.style.display = "none";
    });

</script>
<script src="app.js"></script>
<script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous">
</script>

<script>
    $(document).ready(function () {
        // Test for placeholder support
        $.support.placeholder = (function () {
            var i = document.createElement('input');
            return 'placeholder' in i;
        })();
        // Hide labels by default if placeholders are supported
        if ($.support.placeholder) {
            $('.form-label').each(function () {
                $(this).addClass('js-hide-label');
            });
            // Code for adding/removing classes here
            $('.form-group').find('input, textarea').on('keyup blur focus', function (e) {
                // Cache our selectors
                var $this = $(this),
                    $parent = $this.parent().find("label");
                if (e.type == 'keyup') {
                    if ($this.val() == '') {
                        $parent.addClass('js-hide-label');
                    } else {
                        $parent.removeClass('js-hide-label');
                    }
                } else if (e.type == 'blur') {
                    if ($this.val() == '') {
                        $parent.addClass('js-hide-label');
                    } else {
                        $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                    }
                } else if (e.type == 'focus') {
                    if ($this.val() !== '') {
                        $parent.removeClass('js-unhighlight-label');
                    }
                }
            });
        }
    });
</script>
</body>
</html>
