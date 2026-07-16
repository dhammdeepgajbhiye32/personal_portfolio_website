/*==================================================
            ANALYTICS SECTION
==================================================*/

let analyticsInitialized = false;

function initializeAnalytics() {

    if (analyticsInitialized) return;

    analyticsInitialized = true;

    const analyticsSection = document.querySelector(".analytics");

    if (!analyticsSection) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            animateCounters();

            animateProgressBars();

            observer.disconnect();

        });

    }, {

        threshold: 0.3

    });

    observer.observe(analyticsSection);

}

/*==================================================
                COUNTER
==================================================*/

function animateCounters() {

    const counters = document.querySelectorAll("[data-target]");

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 80));

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.textContent = current;

        }, 20);

    });

}

/*==================================================
            PROGRESS BAR
==================================================*/

function animateProgressBars() {

    const bars = document.querySelectorAll(".progress-fill");

    bars.forEach(bar => {

        const width = bar.dataset.progress;

        bar.style.width = width + "%";

    });

}