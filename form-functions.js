function showPassword() {
  let passwordInput = document.getElementById("usr-password");
  let confPasswordInput = document.getElementById("usr-password-conf");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    confPasswordInput.type = "text";
  } else {
    passwordInput.type = "password";
    confPasswordInput.type = "password";
  }
}
