const firstname = document.getElementById("fn");
const lastname = document.getElementById("ln");
const email = document.getElementById("email");
const msg = document.getElementById("msg");
const submitForm = document.querySelector(".contact-container");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");
});

function myFacebook() {
  window.open("https://www.facebook.com/soso.aljammal.9");
}
function myGithub() {
  window.open("https://github.com/Suha995");
}
function myLinkedin() {
  window.open("https://www.linkedin.com/in/suhair-aljammal");
}
function addBurger() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("menu-active");
}

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
