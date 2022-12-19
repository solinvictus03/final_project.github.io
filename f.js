function checkpsw() {
    let p1 = document.getElementById("ps1").value;
    let p2 = document.getElementById("ps2").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let gen = document.getElementById("ol").value;

    if (p1 == "") {
        alert("Please, fill password");
        document.getElementById("alert").innerHTML = "Please, fill password";
    }

    if (p1.length < 8) {
        alert("Password must be at least 8 characters");
        document.getElementById("alert").innerHTML = "Password must be at least 8 characters";
    }

    if (gen == "select") {
        alert("Select gender");
    }

    if (p1.length >= 8) {
        if (p1 != p2) {
            alert("Passwords are not equal");
            document.getElementById("alert").innerHTML = "Passwords are not equal";
        }
        else {
            alert("Account has been created");
            document.getElementById("alert").innerHTML = "Account has been created";
        }
    }

    if (name == "" || surname == "" || email == "") {
        alert("Fill all requirements!");
    }
}

const loginText = document.getElementById("loginText"),
    regsiterBlock = document.getElementById('registerBlock'),
    container2 = document.getElementById('container2'),
    registerText = document.getElementById("registerText");

loginText.addEventListener('click', (e) => {
    e.preventDefault();

    container2.classList.add("pos-active");
    regsiterBlock.classList.add("form-active");
});

registerText.addEventListener("click", (e) => {
    e.preventDefault();
    
    regsiterBlock.classList.remove("form-active");
    container2.classList.remove("pos-active");

});