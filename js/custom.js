// custom js ......



$(document).ready(function() {


console.log(data);

var getHotelPrice = data.hotel.price;
var getHostelPrice = data.hostel.price;
var getMotelPrice = data.motel.price;
var getHousePrice = data.house.price;



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

  // individual buttons Goes to next or previous slide (left or right)
  $('.back').click(function() {
    $.fn.fullpage.moveSlideLeft();
  });
  $('#start').click(function() {
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
  $('#confirmCard2').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#confirmCard1').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#confirm').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
  });


  // hiding and showing accom option card elements
  $('#expandHotelCard').click(function(){
    $('.card').hide();
    $('#back5').hide();
    $('.expand').show();
    $('#hotelExpand').show();
    $('#cardHotelExpand').show();
    $('#backExpand').show();
  });

  $('#backExpand').click(function(){
    $('.card').show();
    $('#back5').show();
    $('.expand').hide();
    $('#hotelExpand').hide();
    $('#cardHotelExpand').hide();
    $('#backExpand').hide();
  });
  // // click Event ENDS

  // slide3 Date picker starts
  $(function() {
    $('#date').daterangepicker({
        "minDate": "06/28/2021",
        "maxDate": "07/13/2021",
        opens: 'left'
    }, function(start, end, label) {
      console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });
  });

  var d = new Date();
  document.getElementById("date").innerHTML = d;
  console.log(d);

  // date picker ends

  function updateDetails () {

  // slide2 data code starts
  var getLocation = document.getElementById('locationSelect').value;
  var getLocationDetails = document.getElementById('locationDetails');
  var getAccomodation = document.getElementById('accomodationSelect').value;
  var getAccomTypeDetails = document.getElementById('accomTypeDetails');
  var getTotalPrice = document.getElementById('amountTotal');
  var getHotelPrice = data.hotel.price;
  console.log(getLocation);
  console.log(getAccomodation);

  // Changes the text of the list element -- updates the details section
  getLocationDetails.textContent = getLocation;
  getAccomTypeDetails.textContent = getAccomodation;

  // slide2 location/accom picker Restaurants


  var getAccomodationSelect = document.getElementById('accomodationSelect').value;
  var getHotelCard = document.getElementById('hotel').value;
  // console.log(getHotelCard);

  if (getAccomodationSelect === 'Hotel'){
    getTotalPrice.textContent = getHotelPrice;
  } else if (getAccomodationSelect === 'Hostel') {
      getTotalPrice.textContent = getHostelPrice;
  } else if (getAccomodationSelect === 'Motel') {
      getTotalPrice.textContent = getMotelPrice;
  } else if (getAccomodationSelect === 'House') {
      getTotalPrice.textContent = getHousePrice;
  }

  // if (getAccomodationSelect === 'Hotel'){
  //   getHotelCard;
  // }

  // slide3 code starts
  var getDate = document.getElementById('date').value;
  var getDateDetails = document.getElementById('dateDetails');
  getDateDetails.textContent = getDate;

  // slide4 code starts
  var getAmount = document.getElementById('amount').value;
  var getGuestDetails = document.getElementById('guestDetails');
  getGuestDetails.textContent = getAmount;

}
// updateDetails ENDS

// slide4 code cont
  (function($) {
    $.fn.spinner = function() {
    this.each(function() {
    var el = $(this);

    // add elements
    el.wrap('<span class="spinner"></span>');
    el.before('<span class="sub">-</span>');
    el.after('<span class="add">+</span>');

    // substract
    el.parent().on('click', '.sub', function () {
    if (el.val() > parseInt(el.attr('min')))
    el.val( function(i, oldval) { return --oldval; });
    });

    // increment
    el.parent().on('click', '.add', function () {
    if (el.val() < parseInt(el.attr('max')))
    el.val( function(i, oldval) { return ++oldval; });
    });
      });
    };
    })(jQuery);
    console.log();

    $('input[type=number]').spinner();

  // scrn4 ENDS

  // scrn5 starts





  // scrn5 ENDS

});
// document ready ENDS
