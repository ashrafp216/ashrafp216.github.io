

$("#aboutbtn").click(function () {
    $('html, body').animate({
        scrollTop: $("#Lecturers").offset().top
    }, 2000);
    return false;
});

$('#submit').click(function (event) {
    if (event.value == null) { console.log('null value'); return; }
    event.preventDefault();
    let myForm = document.getElementById("subscribe_form");
    let formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
})


$('emailInput').click((event) => {
    event.target.attr("placeholder", "Type a name (Lastname, Firstname)");
})


