// custom js ......
$(document).ready(function() {
// console.log(data);

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
    datePicker();
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
  // hide show click Event ENDS

  // slide3 Date picker starts
  function datePicker (){

    var getAccomodationSelect = document.getElementById('accomodationSelect').value;

    $(function() {
      $('#date').daterangepicker({
          "minDate": newDate,
          "maxDate": theDate,
          opens: 'left'
      }, function(start, end, label) {
      });
    });

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var theDate = new Date();
    var newDate = month + "/" + day + "/" + year;
    console.log(newDate);
    var theNextDate = new Date(newDate);

    console.log(getAccomodationSelect);

    if (getAccomodationSelect === 'Hotel'){
      theDate.setDate(theNextDate.getDate()+data.hotel.nightMax);
    } else if (getAccomodationSelect === 'Hostel'){
      theDate.setDate(theNextDate.getDate()+data.hostel.nightMax);
    } else if (getAccomodationSelect === 'Motel'){
      theDate.setDate(theNextDate.getDate()+data.motel.nightMax);
    } else if (getAccomodationSelect === 'House'){
      theDate.setDate(theNextDate.getDate()+data.house.nightMax);
    }
  }
  // date picker ends

  // 1. Get the amount
  // 2. console.dir the amount id max attribute
  // 3. Change the max value with .js
  // 4. Test this works
  // 5. Start on conditionals
  // 6. Do you need a function

  function updateGuests (){

    var getAmountGuests = document.querySelector('#amount');
    console.dir(getAmountGuests.max);
    var input = document.getElementById('#guest');
    input.setAttribute('max', 10);
  };

  // var getAccomodationSelect =
  // document.getElementById('accomodationSelect').value;

  // if (getAccomodationSelect === 'Hotel'){
  //     console.log(getAmount);
  //   getAmount = (data.hotel.guestsMax);
  // }

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

  // slide2 location/accom selector
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

  // slide3 code starts
  var getDate = document.getElementById('date').value;
  var getDateDetails = document.getElementById('dateDetails');
  getDateDetails.textContent = getDate;
  var getHotelDays = data.hotel.nightMax;


  // slide4 code starts
  var getAmount = document.getElementById('amount').value;
  var getGuestDetails = document.getElementById('guestDetails');
  getGuestDetails.textContent = getAmount;



  // slide5 code starts

  // slide6 code starts
  var getFood = document.getElementById('meals').value;
  var getFoodDetails = document.getElementById('foodDetails');
  getFoodDetails.textContent = getFood;


}
// updateDetails ENDS

// slide4 counter code
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
  // scrn4 ENDS

  // scrn5 starts





  // scrn5 ENDS

});
// document ready ENDS
