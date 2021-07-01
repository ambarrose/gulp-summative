// custom js ......

$(document).ready(function() {

// variables connecting to price data
var getHotelPrice = data.hotel.price;
var getHostelPrice = data.hostel.price;
var getMotelPrice = data.motel.price;
var getHousePrice = data.house.price;

// --------------------full page js starts----------------------
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: true,
    anchors:['section', 'screen1', 'screen2', 'screen3'],
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom'
  });
// ---------------------fullpage ENDS-----------------------------

// ---individual buttons Goes to next or previous slide (left or right)---
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
    datePicker();
  });
  $('#submitDate').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
    updateGuests();
  });
  $('#submitGuest').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#confirmCard1').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#confirmCard2').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#confirmCard3').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#confirmCard4').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#confirmCardA').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#confirmCardB').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#confirmCardC').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#confirmCardD').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#confirmCardNoA').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
    updateDetails();
  });
  $('#finalConfirm').click(function() {
    // Goes to next slide (right)
    $.fn.fullpage.moveSlideRight();
  });
// ---------------------------click functions ENDS-----------------------------


// ------------------------slide3 Date picker starts------------------------
function datePicker (){
console.log('A');
  var getAccomodationSelect = document.getElementById('accomodationSelect').value;

  $(function() {
    $('#date').daterangepicker({
        'minDate': today,
        'maxDate': theDate,
        opens: 'left'
    }, function(start, end, label) {
    });
  });

  var theDate = new Date();
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  console.log(today);
  var theNextDate = new Date(today);
  console.log(getAccomodationSelect);

  if (getAccomodationSelect === 'Hotel'){
    console.log(getAccomodationSelect);
    theDate.setDate(theNextDate.getDate()+data.hotel.nightMax);
  } else if (getAccomodationSelect === 'Hostel'){
    console.log(getAccomodationSelect);
    theDate.setDate(theNextDate.getDate()+data.hostel.nightMax);
  } else if (getAccomodationSelect === 'Motel'){
    console.log(getAccomodationSelect);
    theDate.setDate(theNextDate.getDate()+data.motel.nightMax);
  } else if (getAccomodationSelect === 'House'){
    console.log(getAccomodationSelect);
    theDate.setDate(theNextDate.getDate()+data.house.nightMax);
  }
}
// --------------------------slide3 date picker ends---------------------------


// ---------------------------slide 5 code begins------------------------------
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

  $('#expandHostelCard').click(function(){
    $('.card').hide();
    $('#back5').hide();
    $('.expand').show();
    $('#hostelExpand').show();
    $('#cardHostelExpand').show();
    $('#backExpand').show();
  });

  $('#backExpand').click(function(){
    $('.card').show();
    $('#back5').show();
    $('.expand').hide();
    $('#hostelExpand').hide();
    $('#cardHostelExpand').hide();
    $('#backExpand').hide();
  });
// ---------------------Slide 5 hide show click Event ENDS---------------------

// -------------------Slide 4 update guests function starts--------------------
  function updateGuests (){
    // console.log('workinggg');
    var getAmountGuests = document.querySelector('#amount');
    var getAccomodationSelect = document.getElementById('accomodationSelect').value;
    var getHotelGuest = data.hotel.guestsMax;
    var getHostelGuest = data.hostel.guestsMax;
    var getMotelGuest = data.motel.guestsMax;
    var getHouseGuest = data.house.guestsMax;
    // console.log(getHotelGuest);

    // gets max amount of guests from accom select option
    if (getAccomodationSelect === 'Hotel'){
      // console.log('workingg');
      getAmountGuests.max = getHotelGuest;
    } else if (getAccomodationSelect === 'Hostel'){
      getAmountGuests.max = getHostelGuest;
    } else if (getAccomodationSelect === 'Motel'){
      getAmountGuests.max = getMotelGuest;
    } else if (getAccomodationSelect === 'House'){
      getAmountGuests.max = getHouseGuest;
    }
  }
// -------------------Slide 4 update guests function ENDS----------------------

// ----------------------update details function starts------------------------
  function updateDetails () {
// ----------------------slide2 data code starts------------------------------
  var getLocation = document.getElementById('locationSelect').value;
  var getLocationDetails = document.getElementById('locationDetails');
  var getAccomodation = document.getElementById('accomodationSelect').value;
  var getAccomTypeDetails = document.getElementById('accomTypeDetails');
  var getTotalPrice = document.getElementById('amountTotal');
  var getHotelPrice = data.hotel.price;
  // console.log(getLocation);
  // console.log(getAccomodation);

  // Changes the text of the list element -- updates the details section
  getLocationDetails.textContent = getLocation;
  getAccomTypeDetails.textContent = getAccomodation;

  // slide2 location/accom selector
  var getAccomodationSelect = document.getElementById('accomodationSelect').value;
  var getHotelCard = document.getElementById('hotel').value;
  var getHotelGuest = data.hotel.guestsMax;
  var getHostelGuest = data.hostel.guestsMax;
  var getMotelGuest = data.motel.guestsMax;
  var getHouseGuest = data.house.guestsMax;
  // console.log(getHotelCard);

  if (getAccomodationSelect === 'Hotel'){
    console.log(getHotelPrice);
    getTotalPrice.textContent = getHotelPrice * getHotelGuest;
  } else if (getAccomodationSelect === 'Hostel') {
      getTotalPrice.textContent = getHostelPrice * getHostelGuest;
  } else if (getAccomodationSelect === 'Motel') {
      getTotalPrice.textContent = getMotelPrice * getMotelGuest;
  } else if (getAccomodationSelect === 'House') {
      getTotalPrice.textContent = getHousePrice * getHouseGuest;
  }
  // multiply accom price by how many guests selected

// --------------------------slide3 code starts--------------------------------
  var getDate = document.getElementById('date').value;
  var getDateDetails = document.getElementById('dateDetails');
  getDateDetails.textContent = getDate;
  var getHotelDays = data.hotel.nightMax;


// --------------------------slide4 code starts--------------------------------
  var getAmount = document.getElementById('amount').value;
  var getGuestDetails = document.getElementById('guestDetails');
  getGuestDetails.textContent = getAmount;

// --------------------------slide6 code starts--------------------------------
  var getFood = document.getElementById('meals').value;
  var getFoodDetails = document.getElementById('foodDetails');
  getFoodDetails.textContent = getFood;
}
// --------------------------UpdateDetails ENDS--------------------------------

// -----------------------slide4 counter code starts---------------------------

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

    // add
    el.parent().on('click', '.add', function () {
    if (el.val() < parseInt(el.attr('max')))
    el.val( function(i, oldval) { return ++oldval; });
    });
      });
    };
    })(jQuery);
    console.log();

    $('input[type=number]').spinner();
// -------------------------slide4 counter code ENDS---------------------------

});
// ----------------------------document ready ENDS-----------------------------
