document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("Nama").value;
    let email = document.getElementById("Email").value;
    let message = document.getElementById("Pesan").value;

    if (name && email && message) {
        document.getElementById("response-message").innerText = "Pesan Anda telah dikirim.";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("response-message").innerText = "Harap isi semua bidang!";
    }
});