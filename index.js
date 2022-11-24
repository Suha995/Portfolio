const firstname = document.getElementById("fn");
const lastname = document.getElementById("ln");
const email = document.getElementById("email");
const msg = document.getElementById("msg");
const submitForm = document.querySelector(".contact-container");

function sendEmail(ebody) {
  Email.send({
    SecureToken: "fcc8720d-f597-4e00-b31b-e27ef16ce265",
    To: "suhair.aljammal@gmail.com",
    From: "suhair.aljammal@gmail.com",
    Subject: "Email from a contact im my portfolio website",
    Body: ebody,
  }).then((message) => alert(message));
}

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");
  let ebody = `
  <b>Name: </b>${firstname.value}&nbsp;${lastname.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Subject: </b>${msg.value}
  `;
  sendEmail(ebody);
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

function sendEmail(ebody) {
  Email.send({
    SecureToken: "fcc8720d-f597-4e00-b31b-e27ef16ce265",
    To: "suhair.aljammal@gmail.com",
    From: "suhair.aljammal@gmail.com",
    Subject: "Email from a contact im my portfolio website",
    Body: ebody,
  }).then((message) => alert(message));
}
