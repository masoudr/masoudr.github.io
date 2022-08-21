
$("#contactForm").submit(function(event) {

  var recaptcha = $("#g-recaptcha-response").val();
  if (recaptcha === "") {
     event.preventDefault();
     $('#error_captcha').css('display', 'block');
  }
});