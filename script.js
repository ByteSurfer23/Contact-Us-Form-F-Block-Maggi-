function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_fq6uhpb","template_wyt3q8y",params).then(alert("Email Sent"))
}
/* https://www.youtube.com/watch?v=BgVjild0C9A I used this video to get this mailing stuff working*/