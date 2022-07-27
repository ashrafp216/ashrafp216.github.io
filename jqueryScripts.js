

$("#aboutbtn").click(function () {
    $('html, body').animate({
        scrollTop: $("#Lecturers").offset().top
    }, 2000);
    return false;
});

// $('#submit').click(function (event) {
//     event.preventDefault();
//     let myForm = document.getElementById("subscribe_form");
//     let email = document.getElementById("email_input").value;
//     console.log(email)
//     if (validateEmail(email)) {
//         console.log('null value');
//         return;
//     }
//     let formData = new FormData(myForm);
//     fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(formData).toString(),
//     })
//         .then(() => console.log("Form successfully submitted"))
//         .catch((error) => ShowMessage(error));
// })

function submitForm(event) {
    event.preventDefault();
    let myForm = document.getElementById("subscribe_form");
    let email = document.getElementById("email_input").value;
    console.log(email)
    let emailModel = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailModel.test(email)) {
        ShowMessage('Invalide email. Please check your input')
        return;
    }
    let formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            ShowMessage("You will get event notifications to your email: "+ email)
            document.getElementById("email_input").value = null;
        })
        .catch((error) => ShowMessage(error));
}



// const validateEmail = (email) => {
//     emailModel = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     if (emailModel.test(email)) {
//         return String(email).toLowerCase()
//     } else {
//         return false
//     }
// };


$('emailInput').click((event) => {
    event.target.attr("placeholder", "Type a name (Lastname, Firstname)");
})


