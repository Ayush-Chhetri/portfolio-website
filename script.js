document.addEventListener("DOMContentLoaded", function () {

    var elementsToReveal = document.querySelectorAll(
        ".info-card, .skills-box, .first-container, .second-container, .project-right, .project-left, .contact-container"
    );

    elementsToReveal.forEach(function (el) {
        el.classList.add("reveal");
    });

    var revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
        revealObserver.observe(el);
    });

    var navLinks = document.querySelectorAll(".nav-container ul li a");
    var sections = document.querySelectorAll("main section[id], main section");

    var sectionMap = {
        hero: "#home",
        about: "#about",
        skills: "#skills",
        certificates: "#certificate",
        projects: "#projects",
        contact: "#contact"
    };

    var navObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                var sectionClass = Array.from(entry.target.classList).find(function (cls) {
                    return sectionMap.hasOwnProperty(cls);
                });

                if (!sectionClass) return;

                var matchingHref = sectionMap[sectionClass];

                if (entry.isIntersecting) {
                    navLinks.forEach(function (link) {
                        link.classList.remove("active-link");
                        if (link.getAttribute("href") === matchingHref) {
                            link.classList.add("active-link");
                        }
                    });
                }
            });
        },
        {
            threshold: 0.4
        }
    );

    sections.forEach(function (section) {
        navObserver.observe(section);
    });

});

var yearSpan = document.getElementById("footer-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }