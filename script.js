const correctUsername = "admin123";
const correctPassword = "admin123";

let attempt = 0;
let isLocked = false;


function validateLogin() {
    if (isLocked) {
        alert("You need to wait before trying again.");
        return;
    }

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {
        alert("Login successful! Redirecting...");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        attempt++;

        if (attempt >= 2) {
            alert("Incorrect login details entered twice! Please wait 10 seconds before trying again.");
            lockLogin();
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    }
}


function lockLogin() {
    isLocked = true;
    setTimeout(() => {
        attempt = 0;
        isLocked = false;
        alert("You can try again now.");
    }, 10000); // 10 seconds delay
}
