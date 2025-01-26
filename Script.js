document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); 
            const targetId = link.getAttribute("href").substring(1); 
            const targetSection = document.getElementById(targetId); 

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

document.getElementById('contact-btn').addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
    });
});

document.getElementById('experience-btn').addEventListener('click', () => {
    const experienceSection = document.getElementById('experience');
    experienceSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});

