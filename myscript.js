//funzione per mostrare il bottone di invio e nascondere quello del microfono

function showButtonSend() {

  $('#txt-form').keydown(function(){
    $('.send-btn .enter').removeClass('hide');
    $('.send-btn .record').addClass('hide');
  });

};


//funzione per invio msg con click
function showUserMsgClick() {

  $('#box-writing .send-btn  i').click(function (){

    var template = $('#msg-by-user > div').clone();
    var target = $('.user-side.active');
    var userMsg = $('#txt-form').val();

    template.find('#message-text').text(usermsg);
    template.find('#msg-time').text(getHourNow());

    target.append(template);

    $('#txt-form').val('');
    $('.send-btn .record').removeClass('hide');
    $('.send-btn .enter').addClass('hide');

    showCpuMsg();
  });
};

//funzione per invio msg con keyup
function showUserMsgKey() {
  $('#txt-form').keyup(function() {
    if ( event.which == 13 ) {
      var template = $('#msg-by-user > div').clone();
      var target = $('.user-side.active');
      var usermsg = $('#txt-form').val();

      template.find('#message-text').text(usermsg);
      template.find('#msg-time').text(getHourNow());

      target.append(template);

      $('#txt-form').val('');
      $('.send-btn .record').removeClass('hide');
      $('.send-btn .enter').addClass('hide');

      showcpuMsg();
    }
  })
};

//funzione per messaggio cpu
function showcpuMsg() {

  setTimeout(function () {

    var template = $('#msg-by-cpu > div').clone();
    var target = $('.cpu-side.active');

    template.find('#msg-time').text(getHourNow());
    target.append(template);

  }, 1000);

};

//funzione per orario messaggio
function getHourNow() {

  var date = new Date();
  return date.getHours() + ':' + date.getMinutes();

};

//funzione per ricerca contatti
function showSearchContacts() {

  var target = $('#search-bar');
  target.keyup(searchKeyup);

};
function searchKeyup() {

  var input = $(this);
  var txt = input.val();
  var contacts = $('.contact');

  contacts.each(function() {
    var contact = $(this);
    var name = contact.find('.name').text();
    if (name.toLowerCase().includes(txt.toLowerCase())) {
      contact.show();
    } else {
      contact.hide();
    }
  })

};

//funzione per cambiare utente e chat
function showContactChat() {

  $(document).on('click', '.contact', userClick);

};
function userClick() {

  $('.contact').removeClass('active');
  $(this).addClass('active');

  var contact = $(this).children('.user-img').clone();
  var name = $(this).children('.contact-information').children('.name').clone();
  var target = $('.user-img-cpu')
  var target2 = $('#name');

  target.html(contact);
  target2.html(name);
  $('#last-access').show();

  var contactDataValue = $(this).data('id');
  var userMsg = $('.user-side');
  var cpuMsg = $('.cpu-side');

  userMsg.each(function() {

    var user = $(this);
    var userMsgDataValue = $(user).data('id');

    if (userMsgDataValue == contactDataValue) {

      user.addClass('active');

    } else {

      user.removeClass('active');

    }

  })

  cpuMsg.each(function() {

    var cpu = $(this);
    var cpuMsgDataValue = $(cpu).data('id');


    if (cpuMsgDataValue == contactDataValue) {


      cpu.addClass('active');


    } else {

      cpu.removeClass('active');

    }

  })

};

// ELENCO DELLE FUNZIONI!!

function init() {
  showButtonSend();
  showUserMsgClick();
  showUserMsgKey();
  showSearchContacts();
  showContactChat();
};


$(document).ready(init);
