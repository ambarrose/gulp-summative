// custom js ......

$(document).ready(function() {

  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: true,
    anchors:['section', 's1', 's2', 's3'],
    controlArrows: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom'
  });
  // fullpage ENDS

  // $('.btn').click(function(){
  //     // // Calling the function
  //     // updateDetails();
  // });
  // click Event ENDS
  //
  // function updateDetails () {

  // slide2 data logic starts
  // var getLocation = document.getElementById('locationSelect').value;
  // // add images
  // // var getPlace  = document.querySelectorAll.img;
  // var getLocationDetails = document.getElementById('locationDetails');
  // // Changes the text of the list element -- updates the details section
  // getlocationDetails.textContent = getLocation;
  // console.log(getLocation);



  // slide3 Date picker starts
  $(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    },
    function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });

});
// document ready ENDS

// if(peopleFromDom < data.hotel.guestMin)
