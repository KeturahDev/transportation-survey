$(document).ready(function () {
  $('#formy').submit(function (event) {
    event.preventDefault();

    $('#work-output').show();
    $('#fun-output').show();

    $('input:checkbox[name=work-transpo]:checked').each(function () {
      var workTransportation = $(this).val();
      $('#work-output').append(workTransportation + "<br>")
    })
    $('#formy').hide();
  })
})