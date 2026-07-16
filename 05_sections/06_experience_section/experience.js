/*==================================================
        INITIALIZE EXPERIENCE
==================================================*/

function initializeExperience() {

    const timeline =
        document.getElementById("experienceTimeline");

    if (!timeline) {

        console.warn("Experience timeline not found.");

        return;

    }

    renderExperience(timeline);

}

/*==================================================
        RENDER EXPERIENCE
==================================================*/

function renderExperience(timeline) {

    timeline.innerHTML = "";

    experiences.forEach(experience => {

        const card =
            createExperienceCard(experience);

        timeline.appendChild(card);

    });

}

/*==================================================
        CREATE EXPERIENCE CARD
==================================================*/

function createExperienceCard(experience) {

    const card = document.createElement("div");

    card.className = "experience-card";

    card.innerHTML = `

        <div class="timeline-dot"></div>

        <div class="experience-header">

            <div class="company-info">

                <h3>${experience.company}</h3>

                <h4>${experience.role}</h4>

                <div class="duration">

                    <i class="fa-solid fa-calendar"></i>

                    ${experience.duration}

                </div>

                <div class="location">

                    <i class="fa-solid fa-location-dot"></i>

                    ${experience.location}

                </div>

            </div>

            <img
                class="company-logo ${experience.id}"
                src="../../03_images/06_company_logos/${experience.logo}"
                alt="${experience.company}"
            >

        </div>

        <p class="experience-description">

            ${experience.description}

        </p>

    `;

    card.appendChild(
        createTechnologyStack(
            experience.technologies
        )
    );

    card.appendChild(
        createAchievements(
            experience.achievements
        )
    );

    card.appendChild(
        createButtons(
            experience
        )
    );

    return card;

}

function initializeExperienceSection() {

    initializeExperience();

}

/*==================================================
        CREATE TECHNOLOGY STACK
==================================================*/

function createTechnologyStack(technologies) {

    const techStack = document.createElement("div");

    techStack.className = "tech-stack";

    technologies.forEach(tech => {

        const chip = document.createElement("span");

        chip.innerHTML = `
            <i class="fa-solid ${tech.icon}"></i>
            ${tech.name}
        `;

        techStack.appendChild(chip);

    });

    return techStack;

}

/*==================================================
        CREATE ACHIEVEMENTS
==================================================*/

function createAchievements(achievements) {

    const list = document.createElement("ul");

    list.className = "achievement-list";

    achievements.forEach(item => {

        const li = document.createElement("li");

        li.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            <span>${item}</span>
        `;

        list.appendChild(li);

    });

    return list;

}

/*==================================================
            CREATE BUTTONS
==================================================*/

function createButtons(experience) {

    const container = document.createElement("div");

    container.className = "experience-links";

    /* Certificate Button */

    if (experience.certificate) {

        const certificate = document.createElement("a");

        certificate.href = experience.certificate;

        certificate.target = "_blank";

        certificate.className = "experience-btn";

        certificate.innerHTML = `
            <i class="fa-solid fa-certificate"></i>
            Certificate
        `;

        container.appendChild(certificate);

    }

    /* LinkedIn Button */

    if (experience.linkedin) {

        const linkedin = document.createElement("a");

        linkedin.href = experience.linkedin;

        linkedin.target = "_blank";

        linkedin.className = "experience-btn linkedin-btn";

        linkedin.innerHTML = `
            <i class="fa-brands fa-linkedin"></i>
            LinkedIn
        `;

        container.appendChild(linkedin);

    }

    return container;

}