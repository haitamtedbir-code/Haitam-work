const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector("textarea").value;

    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    alert("Message received successfully!");

    form.reset();
});
