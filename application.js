$(document).ready(function() {

  var validParams = true

  var runAllValidations = function(password, email) {
    validationCheck(password.length > 7, "Password length must be greater than 8 characters")
    validationCheck(password.match(/[0-9]/), "Password must include on numeric value")
    validationCheck(password.match(/[A-Z]/), "Password must include one capital letter")
    validationCheck(email.match(/[A-z]+@+[A-z]+\.[A-z]+/), "Not a valid email address")
  }

  var validationCheck = function(argument, message) {
    if(!argument) {
      $('#errors').append("<li>" + message + "</li>")
      validParams = false
    }
  }

  var onFormSubmit = function() {
    $('form').submit(function(event) {
      event.preventDefault()

      var inputtedPassword = $('input[name="password"]').val()
      var inputtedEmail = $('input[name="email"]').val()
      var formData = { email: inputtedEmail, password: inputtedPassword }

      runAllValidations(inputtedPassword, inputtedEmail)

      //send to backend if client-side validations pass
      // if(validParams) {
        // $.post('/to_server', formData, function() {})
      // }
    })
  }

 onFormSubmit();
})
