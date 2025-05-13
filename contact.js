document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseMessage = document.getElementById("responseMessage");

  if (!name || !email || !subject || !message) {
    responseMessage.textContent = "Please fill out all fields.";
    responseMessage.style.color = "#e4002b";
    return;
  }

  // Simulate successful submission
  responseMessage.textContent = "Thanks! Your message has been sent.";
  responseMessage.style.color = "green";
  document.getElementById("contactForm").reset();
});
