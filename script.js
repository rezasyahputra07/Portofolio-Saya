function scrolltocontact(){
    document.getElementById("contact").scrollIntoView({
        behavior : 'smooth'
    });
}

document.getElementById("contactform").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const pesan = document.querySelector('textarea').value;

    
    const nomor = "6288215752104"; 

    const text = `Halo, saya ${nama}%0AEmail: ${email}%0APesan: ${pesan}`;

    alert("Anda akan diarahkan ke WhatsApp");
    
    window.open(`https://wa.me/${nomor}?text=${text}`, "_blank");
});

function toggleMenu() {
    const menu = document.getElementById("navmenu");
    menu.classList.toggle("active");
}

window.addEventListener("scroll", () => {
    document.querySelectorAll(".section").forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});