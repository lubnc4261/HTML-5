var attempt = 2;
function validate(){
var username = document.getElementById("nutzername").value;
var password = document.getElementById("passwort").value;
if ( username == "user" && password == "pass"){
alert ("Erfolgreich eingeloggt");
window.location = "main.html";
return false;
}
else{
attempt --;
alert("Du hast keine "+attempt+" Versuche mehr übrig;");
if( attempt == 0){
document.getElementById("nutzername").disabled = true;
document.getElementById("passwort").disabled = true;
document.getElementById("Einloggen").disabled = true;
return false;
}
}
}
