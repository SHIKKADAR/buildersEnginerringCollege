document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered username and password
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    // Perform password authentication
    if (username === "admin" && password === "admin1234") {
      // Redirect to another HTML page
      window.location.href = "admissinpage1.html";
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  });
  


  