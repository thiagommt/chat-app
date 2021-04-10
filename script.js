var messages = document.getElementById("chat");
var textbox = document.getElementById("message");
var button = document.getElementById("send");

button.addEventListener("click", function(){
    var newMessage = document.createElement("li");
    newMessage.className = "me";
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
})