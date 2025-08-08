// Form validation JS code
let formCheck = document.querySelector("#checkout-form");
formCheck.addEventListener("submit", function(eve){
    eve.preventDefault();

    let name = document.querySelector("#name").value.trim();
    let address = document.querySelector("#address").value.trim();
    let email = document.querySelector("#email").value.trim();

    if (!name || !address || !email) {
        alert("Please fill in all fields!");
        return;
    }

    let nameRegex = /^[A-Za-z\s]+$/;
    if (!name || !nameRegex.test(name)) {
        alert("Please enter a valid name (only letters and spaces allowed)");
        return;
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    let successMessg = document.querySelector("#success-message");
    successMessg.style.display = "block";

    let formClear = document.querySelector("#checkout-form");
    formClear.reset();
});

console.log("Form Submitted!");