// Add any interactive functionality here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
});
<script>
    function sendToWhatsApp(event) {
        event.preventDefault() // Prevent form from submitting the traditional way

        // Get form data
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value; // Ensure this field exists in your form
        let message = document.getElementById("message").value;

        // Validate form fields
        if (!name || !phone || !message) {
            alert("Please fill out all fields.")
            return;
        }

        // Your WhatsApp number (Replace with your actual WhatsApp number including country code)
        let phoneNumber = "916379764525"; // Example: 91 (India) + 9876543210

        // Format the message
        let whatsappMessage = `Hello, my name is *${name}*.\nPhone: *${phone}*\nMessage: *${message}*`;

        // Encode the message for URL
        let encodedMessage = encodeURIComponent(whatsappMessage);

        // WhatsApp API link
        let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open WhatsApp link in a new tab
        window.open(whatsappURL, "_blank");
    }
</script>
