//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  const checkbox = document.querySelector("#checkbox");
  const submit = document.querySelector("#submit");
  const existingBtn = document.querySelector("#existing");

  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingBtn.style.display = "block";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert(`Logged in as ${username.value}`);

    if (checkbox.checked) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("password", password.value);
      existingBtn.style.display = "block";
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingBtn.style.display = "none";
    }
  });

  existingBtn.addEventListener("click", function () {
    const savedUser = localStorage.getItem("username");
    alert(`Logged in as ${savedUser}`);
  });

});