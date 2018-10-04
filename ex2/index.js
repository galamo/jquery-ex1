
$(function () {
    const liItems = $("li")
    liItems.click(function () {
        liItems.removeClass("active");
        $(this).addClass("active");
        $("#selected-item").val($(this)[0].innerText);
        const data = $(this)[0].innerText;

        alertify
            .alert("you clicked ." + data, function () {
                alertify.message("bye " + data);
            });
    })


    const styles = { color: "yellow", border: "10px dotted black" }
    console.log($("#necro").css(styles));



})


function CSSOverloading() {
    if (arguments != null) {
        if (Array.isArray(arguments[0])) {
            return "action array";
        }
        else if (arguments[0] != null && arguments[1] != null) {
            return "action 2 ";
        }
        else if (arguments[0] != null) {
            return "action 1 ";
        }

    }
}