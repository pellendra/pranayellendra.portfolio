document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function highlightSection() {
        let scrollY = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove("active"));
                navLinks[index].classList.add("active");

                // Add a background highlight effect to the active section
                sections.forEach(sec => sec.classList.remove("active-section"));
                section.classList.add("active-section");
            }
        });
    }

    window.addEventListener("scroll", highlightSection);
});
