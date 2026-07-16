/*==================================================
            INITIALIZE RESUME
==================================================*/

function initializeResume(){

    const container=document.getElementById("resumeContent");

    if(!container){

        console.warn("Resume container not found.");

        return;

    }

    container.innerHTML=`

        <div class="resume-details">

            <h2 class="resume-title">
                ${resume.title}
            </h2>

            <p class="resume-description">
                ${resume.description}
            </p>

            <div class="resume-info">

                <div class="resume-item">
                    <h4>Role</h4>
                    <p>${resume.role}</p>
                </div>

                <div class="resume-item">
                    <h4>ATS Score</h4>
                    <p>${resume.ats}</p>
                </div>

                <div class="resume-item">
                    <h4>Version</h4>
                    <p>${resume.version}</p>
                </div>

                <div class="resume-item">
                    <h4>Format</h4>
                    <p>${resume.format}</p>
                </div>

            </div>

            <div class="resume-buttons">

                <a
                    href="${resume.pdf}"
                    download
                    class="resume-btn">

                    <i class="fa-solid fa-download"></i>

                    Download

                </a>

                <a
                    href="${resume.pdf}"
                    target="_blank"
                    class="resume-btn preview-btn">

                    <i class="fa-solid fa-eye"></i>

                    Preview

                </a>

            </div>

        </div>

        <div class="resume-preview">

            <img
                src="../../03_images/08_resume/${resume.preview}"
                alt="Resume Preview">

        </div>

    `;

}