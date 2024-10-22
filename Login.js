const password = "12THree45$ix";
const userName = "Jazz";


function login(){
  const userInput = document.getElementById('userName');
  const inputPass = document.getElementById('password');
  const passvalue = inputPass.value;
  const uservalue = userInput.value;
  if (passvalue === password && uservalue === userName) {
        window.location.reload ("Index.html");
    } else if (inputPass !== password) {
        window.alert("The password you've entered is incorrect");
    } else {
        window.alert("The username you've entered is incorrect");
    }
  return;
}