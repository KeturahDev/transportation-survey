$(document).ready(function () {
  $('#formy').submit(function (event) {
    event.preventDefault();

    $('#work-output').show();
    $('#fun-output').show();

    $('input:checkbox[name=work-transpo]:checked').each(function () {
      var workTransportation = $(this).val();
      $('#work-output').append(workTransportation + "<br>")
    })
    $('input:checkbox[name=fun-transpo]:checked').each(function () {
      var funTransportation = $(this).val();
      $('#fun-output').append(funTransportation + "<br>")
    })
    $('#formy').hide();
  })
})