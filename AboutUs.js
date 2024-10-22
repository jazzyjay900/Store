function sendEmail(){
  var subject = document.getElementById('subject').value
  var body = document.getElementById('body').value
  window.location.href = "mailto:jahzealnsimms@students.utech.edu.jm?subject="+subject+"&body="+body;
}