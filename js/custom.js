// custom js ......

$(document).ready(function() {

  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: true,
    anchors:['section1', 'slide1', 'slide2', 'slide3'],
    controlArrows: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom'
  });
  // fullpage ENDS

  // Click Events Fullpage.js provides an API
  $('#btnOne').click(function (){
    // To move down one slide...
    $.fn.fullpage.moveSectionDown();
  });

  $('#btnTwo').click(function (){
    // To move up one slide
    $.fn.fullpage.moveSectionUp();
  });

});
// document ready ENDS

// if(peopleFromDom < data.hotel.guestMin)
