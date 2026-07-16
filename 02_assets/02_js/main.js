/* ===========================================================
   DHAMMDEEP GAJBHIYE PORTFOLIO
   MAIN JAVASCRIPT
=========================================================== */

history.scrollRestoration = "manual";

document.addEventListener("DOMContentLoaded", async () => {

    // Always start from the top
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });

    try {

        if (typeof showLoader === "function") {
            showLoader();
        }

        const sections = [
            ["../05_sections/01_hero_section/hero.html", "hero"],
            ["../05_sections/02_analytics_section/analytics.html", "analytics"],
            ["../05_sections/03_about_section/about.html", "about"],
            ["../05_sections/04_skills_section/skills.html", "skills"],
            ["../05_sections/05_projects_section/project.html", "projects"],
            ["../05_sections/06_experience_section/experience.html", "experience"],
            ["../05_sections/07_certificate_section/certificate.html", "certificate"],
            ["../05_sections/08_resume_section/resume.html", "resume"],
            ["../05_sections/09_contact_section/contact.html", "contact"],
            ["../05_sections/10_footer_section/footer.html", "footer"]
        ];

        await Promise.all(
            sections.map(([path, id]) => loadSection(path, id))
        );

        window.scrollTo(0, 0);

        initializeApplication();

        window.scrollTo(0, 0);

    }
    catch (error) {

        console.error("Portfolio Initialization Failed", error);

    }
    finally {

        if (typeof hideLoader === "function") {
            hideLoader();
        }

    }

});

function initializeApplication() {

    if (typeof initializeNavigation === "function") {
        initializeNavigation();
    }

    if (typeof initializeAnimations === "function") {
        initializeAnimations();
    }

    if (typeof initializeBackToTop === "function") {
        initializeBackToTop();
    }

}


/* ===========================================================
   LOAD HTML SECTION
=========================================================== */

async function loadSection(path, id) {

    const element = document.getElementById(id);

    if (!element) {

        console.error(`Section '${id}' not found.`);

        return;

    }

    try {

        const response = await fetch(path);

        if (!response.ok) {

            throw new Error(`Unable to load ${path}`);

        }

        const html = await response.text();

        element.innerHTML = html;

        console.time(id);

        // Initialize section-specific scripts

        switch (id) {

            case "analytics":

                if (typeof initializeAnalytics === "function") {

                    requestAnimationFrame(() => {

                        initializeAnalytics();

                    });

                }

                break;

            case "projects":

                if (typeof initializeProjectSlider === "function") {

                    requestAnimationFrame(() => {

                        initializeProjectSlider();

                        initializeProjectModal();

                    });

                }

                break;

            case "experience":

                if (typeof initializeExperienceSection === "function") {

                    requestAnimationFrame(() => {

                        initializeExperienceSection();

                    });

                }

                break;

            case "certificate":

                if (typeof initializeCertificates === "function") {

                    requestAnimationFrame(() => {

                        initializeCertificates();

                    });

                }

                break;

            case "resume":

                if(typeof initializeResume==="function"){

                    requestAnimationFrame(()=>{

                        initializeResume();

                    });

                }

                break;

            case "contact":

                if(typeof initializeContact==="function"){

                    requestAnimationFrame(()=>{

                        initializeContact();

                    });

                }

                break;

        }

        console.timeEnd(id);

    }

    catch (error) {

        console.error(error);

        element.innerHTML = `
            <div style="
                padding:40px;
                text-align:center;
                color:red;
                font-size:18px;
                font-weight:600;
            ">
                Failed to load:
                <br><br>
                ${path}
            </div>
        `;

    }

}