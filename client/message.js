var msg = []

function show_message(new_message, bg_color) {
    document.getElementById("message").innerHTML = new_message
    document.getElementById("message_box")["background_color"] = bg_color;
}