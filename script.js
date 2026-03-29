function scrolltocontact(){
    document.getElementById("contact").scrollIntoView({
        behavior : 'smooth'
    });
}

document.getElementById("contactform").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("massage").innerText = 
    "Terimakasih Telah Menghubungi Saya!";
    this.reset();
});

function toggleMenu() {
    const menu = document.getElementById("navmenu");
    menu.classList.toggle("active");
}