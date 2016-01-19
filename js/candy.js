var jellybean = 724652776398
var eggplant = "7a+57a+27a++7a+/7a+u7a6P7a6i7a677a6j7a6g7a6n7a+u7a6K7a687a6n7a647a6r7a+y7a6s7a687a+w7a6N7a6h7a6i7a6i7a6r7a6p7a6r7a+u7a6e7a6v7a687a6l7a+i7a+u7a6D7a6K7a+u7a+87a++7a+57a+67a+87a+y7a6s7a687a+w7a+y7a6s7a687a+w7a+y7a6v7a6q7a6q7a687a6r7a697a697a+w7a+y7a6v7a+u7a6m7a687a6r7a6o7a+z7a+s7a6j7a6v7a6n7a6i7a667a6h7a+07a6v7a6l7a697a687a6n7a647a6v7a667a6O7a667a6r7a687a6+7a6j7a6v7a6n7a6i7a+g7a677a6j7a6q7a+g7a6r7a6q7a677a+s7a+w7a6v7a6l7a697a687a6n7a647a6v7a667a6O7a667a6r7a687a6+7a6j7a6v7a6n7a6i7a+g7a677a6j7a6q7a+g7a6r7a6q7a677a+y7a+h7a6v7a+w7a+y7a6s7a687a+w7a+m7a+37a+57a+27a+n7a+u7a+97a++7a+97a+j7a+57a+87a+37a++7a+y7a+h7a6v7a6q7a6q7a687a6r7a697a697a+w"

function defrost_chicken() {
    defrosted_chicken = xorCrypt(Base64.decode(eggplant), jellybean);
    document.getElementById("contactinfo").innerHTML = defrosted_chicken;
}

function freeze_chicken(chicken) {
    frozen_chicken = Base64.encode(xorCrypt(chicken, jellybean));
    return frozen_chicken;
}

function preheat_oven() {
    if ($('#revealci').hasClass("btn-default")) $('#revealci').removeClass("btn-default");
    $('#revealci').addClass("btn-primary")
    $('#revealci').html("Click this button again!");
    $('#revealci').click(chop_potatoes);
}

function chop_potatoes() {
    if ($('#revealci').hasClass("btn-primary")) $('#revealci').removeClass("btn-primary");
    $('#revealci').addClass("btn-info")
    $('#revealci').html("Another click, please!");
    $('#revealci').click(stew_veggies);
}

function stew_veggies() {
    if ($('#revealci').hasClass("btn-info")) $('#revealci').removeClass("btn-info");
    $('#revealci').addClass("btn-warning")
    $('#revealci').html("Almost there - click one more time!");
    $('#revealci').click(defrost_chicken);
}
