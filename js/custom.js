// custom js ......

$(document).ready(function() {

  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: true,
    anchors:['section', 'screen1', 'screen2', 'screen3'],
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom'
  });
  // fullpage ENDS
  $('#start').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#submitLocAccom').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#submitDate').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#submitGuest').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#submitCard').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#submitCard2').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#submitFoodCard').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#submitFoodCard2').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#confirm').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });

  // // click Event ENDS

  // slide3 Date picker starts
  $(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });
  // date picker ends

  function updateDetails () {

  // slide2 data code starts
  var getLocation = document.getElementById('locationSelect').value;

  var getLocationDetails = document.getElementById('locationDetails');

  var getAccomodation = document.getElementById('accomodationSelect').value;
  var getAccomTypeDetails = document.getElementById('accomTypeDetails');
  // Changes the text of the list element -- updates the details section
  getLocationDetails.textContent = getLocation;
  getAccomTypeDetails.textContent = getAccomodation;
  // console.log(getLocation);
  // console.log(getAccomodation);

  // slide3 code starts
  var getDate = document.getElementById('date').value;
  var getDateDetails = document.getElementById('dateDetails');
  getDateDetails.textContent = getDate;

  // slide4 code starts

  };







});
// document ready ENDS

// if(peopleFromDom < data.hotel.guestMin)
