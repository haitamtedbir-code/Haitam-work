emailjs.init({
    publicKey: "MROrvTA37H5FqsSx5"
});

document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault();

    // Check CAPTCHA
    const captchaResponse = turnstile.getResponse();

    if (!captchaResponse) {
        alert("Please complete the CAPTCHA.");
        return;
    }

    emailjs.sendForm(
        "service_gzyu2c6",
        "template_0zgysge",
        this
    )
    .then(function() {

        alert("Message sent successfully! ✅");

        document.getElementById("contact-form").reset();

        // Reset CAPTCHA
        turnstile.reset();

    })
    .catch(function(error) {

        console.error("EmailJS Error:", error);
        alert("Failed to send message. ❌");

    });

});