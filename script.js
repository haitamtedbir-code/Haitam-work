emailjs.init({
    publicKey: "MROrvTA37H5FqsSx5"
});

document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_gzyu2c6",
        "template_0zgysge",
        this
    )
    .then(function(response) {
        console.log("SUCCESS:", response);
        alert("Message sent successfully! ✅");
        document.getElementById("contact-form").reset();
    })
    .catch(function(error) {
        console.error("EmailJS ERROR:", error);
        alert("Error: " + error.text);
    });

});