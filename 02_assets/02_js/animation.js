/*==================================================
            ANIMATION CONTROLLER
==================================================*/

let sectionObserver = null;
let analyticsTriggered = false;

/*==================================================
            INITIALIZE
==================================================*/

function initializeAnimations() {

    const sections = document.querySelectorAll(".animate-section");

    sections.forEach(section => {
        section.classList.remove("visible");
    });

    analyticsTriggered = false;

    setupSectionObserver();

}

/*==================================================
            OBSERVER
==================================================*/

function setupSectionObserver() {

    const sections = document.querySelectorAll(".animate-section");

    if (!sections.length) return;

    sectionObserver = new IntersectionObserver(

        handleSectionReveal,

        {
            threshold: 0.08,
            rootMargin: "0px 0px -60px 0px"
        }

    );

    sections.forEach(section => {

        sectionObserver.observe(section);

    });

}

/*==================================================
            REVEAL
==================================================*/

function handleSectionReveal(entries, observer) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");

        triggerSection(entry.target);

        observer.unobserve(entry.target);

    });

}

/*==================================================
            SECTION TRIGGERS
==================================================*/

function triggerSection(section) {

    switch (section.id) {

        case "analytics":

            if (!analyticsTriggered) {

                analyticsTriggered = true;

                if (typeof animateCounters === "function") {
                    animateCounters();
                }

            }

            break;

        default:
            break;

    }

}