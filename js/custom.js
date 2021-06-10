// custom js

$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: true,
    anchors:['firstPage', 'secondPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['', 'Step one', 'Step two', 'Step three', 'Step four', 'Step five', 'Step six', 'Complete'],
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom'
  });

  // Click Events Fullpage.js provides an API
  $('#start').click(function (){
    // To move up one slide
    $.fn.fullpage.moveSectionDown();
  });

  $('#next').click(function (){
    // To move down one slide...
    $.fn.fullpage.moveSectionDown();
  });

  $('#back').click(function (){
    // To move up one slide
    $.fn.fullpage.moveSectionUp();
  });


  // if(peopleFromDom < data.hotel.guestMin)



});
// document ENDS
