let txtName = document.querySelector("#txtName")
let txtMessage = document.querySelector("#txtMessage")
let btnSend = document.querySelector("#btnSend")
let messageContainer = document.querySelector(".messageContainer")

const socket = io();

socket.on("message", message => {

    messageContainer.innerHTML += "<br>" + message

})

btnSend.addEventListener("click", () => {

    if (txtName.value != "" && txtName.value != "") {

        var msg = txtName.value + ": " + txtMessage.value

        socket.emit("chatMessage", msg)

        txtMessage.value = ""

    }

})