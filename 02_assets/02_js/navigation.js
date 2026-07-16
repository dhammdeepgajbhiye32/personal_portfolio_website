/*==================================================
            NAVIGATION CONTROLLER
==================================================*/

function initializeNavigation() {

    initializeHeader();

    initializeMobileMenu();

    initializeSmoothScroll();

    initializeScrollProgress();

    initializeActiveNavigation();

}

/*==================================================
            HEADER
==================================================*/

function initializeHeader() {

    const header = document.querySelector(".header");

    if (!header) return;


    window.addEventListener("scroll", () => {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 40
        );

    });

}

/*==================================================
            MOBILE MENU
==================================================*/

function initializeMobileMenu() {

    const menuBtn = document.getElementById("menuBtn");

    const nav = document.querySelector(".nav-links");

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}

/*==================================================
            SMOOTH SCROLL
==================================================*/

function initializeSmoothScroll() {

    document
        .querySelectorAll('.nav-links a')
        .forEach(link => {

            link.addEventListener("click", () => {

                document
                    .querySelector(".nav-links")
                    ?.classList.remove("open");

            });

        });

}

/*==================================================
            SCROLL PROGRESS
==================================================*/

function initializeScrollProgress() {

    const bar = document.getElementById("scrollProgress");

    if (!bar) return;

    window.addEventListener("scroll", () => {

        const scroll =
            window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (scroll / height) * 100;

        bar.style.width =
            progress + "%";

    });

}

function initializeActiveNavigation() {

    const links = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {

        let current = "";

        document.querySelectorAll("main section").forEach((section) => {

            const rect = section.getBoundingClientRect();

            if (rect.top <= 120 && rect.bottom >= 120) {

                current = section.id;

            }

        });

        links.forEach((link) => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    window.addEventListener("resize", updateActiveLink);

    updateActiveLink();

}