/*==================================================
            INITIALIZE CERTIFICATES
==================================================*/

function initializeCertificates() {

    const grid =
        document.getElementById("certificateGrid");

    if (!grid) {

        console.warn("Certificate grid not found.");

        return;

    }

    renderCertificates(grid);

}

/*==================================================
            RENDER CERTIFICATES
==================================================*/

function renderCertificates(grid) {

    grid.innerHTML = "";

    certificate.forEach(certificate => {

        const card =
            createCertificateCard(certificate);

        grid.appendChild(card);

    });

}

/*==================================================
        CREATE CERTIFICATE CARD
==================================================*/

function createCertificateCard(certificate) {

    const card = document.createElement("div");

    card.className = "certificate-card";

    card.innerHTML = `

        <div class="certificate-header">

            <img
                class="certificate-logo"
                src="../../03_images/07_certificate_logos/${certificate.logo}"
                alt="${certificate.issuer}"
            >

            <div class="certificate-info">

                <h3>${certificate.title}</h3>

                <h4>${certificate.issuer}</h4>

                <div class="certificate-year">

                    <i class="fa-solid fa-calendar"></i>

                    ${certificate.year}

                </div>

            </div>

        </div>

        <p class="certificate-description">

            ${certificate.description}

        </p>

    `;

    card.appendChild(
        createSkillChips(certificate.skills)
    );

    card.appendChild(
        createCertificateButtons(certificate)
    );

    return card;

}

/*==================================================
            SKILL CHIPS
==================================================*/

function createSkillChips(skills) {

    const container =
        document.createElement("div");

    container.className =
        "certificate-skills";

    skills.forEach(skill => {

        const chip =
            document.createElement("span");

        chip.textContent = skill;

        container.appendChild(chip);

    });

    return container;

}

/*==================================================
            BUTTONS
==================================================*/

function createCertificateButtons(certificate) {

    const container =
        document.createElement("div");

    container.className =
        "certificate-buttons";

    if (certificate.credential) {

        const credential =
            document.createElement("a");

        credential.href =
            certificate.credential;

        credential.target = "_blank";

        credential.className =
            "certificate-btn";

        credential.innerHTML = `

            <i class="fa-solid fa-certificate"></i>

            Credential

        `;

        container.appendChild(
            credential
        );

    }

    if (certificate.verify) {

        const verify =
            document.createElement("a");

        verify.href =
            certificate.verify;

        verify.target = "_blank";

        verify.className =
            "certificate-btn verify-btn";

        verify.innerHTML = `

            <i class="fa-solid fa-circle-check"></i>

            Verify

        `;

        container.appendChild(
            verify
        );

    }

    return container;

}