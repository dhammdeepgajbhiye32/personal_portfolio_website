/*==================================================
            PROJECT SLIDER ENGINE
==================================================*/


if (typeof projects !== "undefined") {

    window.projectMap = Object.fromEntries(
        projects.map(project => [project.id, project])
    );

}   

/*==================================================
                PROJECT SLIDER
==================================================*/

class ProjectSlider {

    constructor(card) {

        this.card = card;

        this.projectId = card.dataset.project;

        this.project = window.projectMap[this.projectId];

        if (!this.project) {

            console.warn(`Project "${this.projectId}" not found`);

            return;

        }

        /* Cache Elements */

        this.image = this.card.querySelector(".slider-image");

        this.prevBtn = this.card.querySelector(".prev");

        this.nextBtn = this.card.querySelector(".next");

        this.dotsContainer = this.card.querySelector(".slider-dots");

        if (
            !this.image ||
            !this.prevBtn ||
            !this.nextBtn ||
            !this.dotsContainer
        ) {

            console.warn("Slider elements missing");

            return;

        }

        /* Images */

        this.images = this.project.images.map(img =>
            this.project.folder + img
        );

        this.current = 0;

        this.interval = null;

        this.populateProjectData();

        this.createDots();

        this.showImage(0, false);

        this.attachEvents();

        this.startAutoPlay();

    }

    /*======================================
            CREATE DOTS
    ======================================*/

    createDots() {

        this.dotsContainer.innerHTML = "";

        this.images.forEach((_, index) => {

            const dot = document.createElement("span");

            dot.className = "dot";

            if (index === 0) {

                dot.classList.add("active");

            }

            dot.addEventListener("click", () => {

                this.current = index;

                this.showImage(index);

                this.restartAutoPlay();

            });

            this.dotsContainer.appendChild(dot);

        });

        this.dots =
            this.dotsContainer.querySelectorAll(".dot");

    }

    /*======================================
            SHOW IMAGE
    ======================================*/

    showImage(index, animate = true) {

        if (!this.images[index]) return;

        if (animate) {

            this.image.classList.add("fade");

        }

        setTimeout(() => {

            this.image.src = this.images[index];

            this.image.classList.remove("fade");

            this.updateDots();

        }, animate ? 180 : 0);

    }

    /*======================================
            UPDATE DOTS
    ======================================*/

    updateDots() {

        this.dots.forEach(dot =>
            dot.classList.remove("active")
        );

        this.dots[this.current]
            .classList.add("active");

    }

    /*======================================
                NEXT
    ======================================*/

    next() {

        this.current = (this.current + 1) % this.images.length;

        this.showImage(this.current);

    }

    /*======================================
                PREVIOUS
    ======================================*/

    previous() {

        this.current =
            (this.current - 1 + this.images.length) %
            this.images.length;

        this.showImage(this.current);

    }

    /*======================================
            AUTO PLAY
    ======================================*/

    startAutoPlay() {

        if (this.images.length <= 1) return;

        clearInterval(this.interval);

        this.interval = setInterval(() => {

            this.next();

        }, 3500);

    }

    stopAutoPlay() {

        clearInterval(this.interval);

    }

    restartAutoPlay() {

        this.stopAutoPlay();

        this.startAutoPlay();

    }

    /*======================================
            EVENTS
    ======================================*/

    attachEvents() {

        this.nextBtn.addEventListener("click", (e) => {

            e.preventDefault();

            this.next();

            this.restartAutoPlay();

        });

        this.prevBtn.addEventListener("click", (e) => {

            e.preventDefault();

            this.previous();

            this.restartAutoPlay();

        });

        this.card.addEventListener("mouseenter", () => {

            this.stopAutoPlay();

        });

        this.card.addEventListener("mouseleave", () => {

            this.startAutoPlay();

        });

    }

    populateProjectData() {

    /* Browser Title */

    const browserTitle =
            this.card.querySelector(".browser-title");

        if (browserTitle) {

            browserTitle.textContent =
                this.project.title;

        }

    /* Project Title */

    const title =
            this.card.querySelector(".project-content h4");

        if (title) {

            title.textContent =
                this.project.title;

        }

    /* Description */

    const description =
            this.card.querySelector(".project-content p");

        if (description) {

            description.textContent =
                this.project.description;

        }

    /* Technologies */

    const techContainer =
            this.card.querySelector(".project-tech");

        if (techContainer) {

            techContainer.innerHTML = "";

            this.project.technologies.forEach(tech => {

                const span =
                    document.createElement("span");

                span.textContent = tech;

                techContainer.appendChild(span);

            });

        }

    /* Buttons */

    const buttons =
            this.card.querySelectorAll(".project-buttons a");

        if (buttons.length >= 2) {

            // GitHub Button
            buttons[0].href = this.project.github;
            buttons[0].target = "_blank";

            // Details Button
            buttons[1].href = "#";
            buttons[1].dataset.project = this.project.id;
            buttons[1].classList.add("project-details-btn");

        }

    }

}

function initializeProjectSlider() {

    document.querySelectorAll(".project-card").forEach(card => {

        new ProjectSlider(card);

    });

}

/*==================================================
            PROJECT MODAL ENGINE
==================================================*/

function initializeProjectModal() {

    const modal = document.getElementById("projectModal");

    const overlay = modal.querySelector(".modal-overlay");

    const closeBtn = modal.querySelector(".modal-close");

    document
        .querySelectorAll(".project-details-btn")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.preventDefault();

                const projectId =
                    button.dataset.project;

                const project =
                    window.projectMap[projectId];

                if (!project) return;

                renderProjectModal(project);

                modal.classList.add("active");

                document.body.style.overflow = "hidden";

            });

        });

    overlay.onclick = closeProjectModal;

    closeBtn.onclick = closeProjectModal;

}

function closeProjectModal() {

    document
        .getElementById("projectModal")
        .classList.remove("active");

    document.body.style.overflow = "";

}

/*==================================================
            RENDER MODAL
==================================================*/

function renderProjectModal(project) {

    const modalContent =
        document.getElementById("modalContent");

        modalContent.innerHTML = `

            <div class="modal-header">

                <h2>${project.title}</h2>

                <p class="modal-subtitle">

                    ${project.category}

                </p>

            </div>

            <div class="modal-body">

                <div class="modal-image">

                    <button class="modal-slide-btn modal-prev">

                        &#10094;

                    </button>

                    <img
                        id="modalSliderImage"
                        src="${project.folder}${project.images[0]}"
                        alt="${project.title}">

                    <button class="modal-slide-btn modal-next">

                        &#10095;

                    </button>

                    <div
                        id="modalSliderDots"
                        class="modal-slider-dots">

                    </div>

                </div>

                <div class="modal-info">

                    <div class="modal-section">

                        <h3>Overview</h3>

                        <p>

                            ${project.overview}

                        </p>

                    </div>

                    <div class="modal-section">

                        <h3>Business Problem</h3>

                        <p>

                            ${project.businessProblem}

                        </p>

                    </div>

                    <div class="modal-section">

                        <h3>Dataset</h3>

                        <p>

                            ${project.dataset}

                        </p>

                    </div>

                    <div class="modal-section">

                        <h3>Role</h3>

                        <p>

                            ${project.role}

                        </p>

                    </div>

                    <div class="modal-section">

                        <h3>Duration</h3>

                        <p>

                            ${project.duration}

                        </p>

                    </div>

                </div>

            </div>

            ${createProjectTechnologyStack(project)}

            ${createProjectKPIs(project)}

            ${createProjectInsights(project)}

            ${createProjectRecommendations(project)}

            ${createProjectButtons(project)}

        `;

        new ModalSlider(project);

}

function createProjectTechnologyStack(project){

    return `

        <div class="modal-section">

            <h3>Technology Stack</h3>

            <div class="modal-tech">

                ${project.technologies.map(tech => `

                    <span>${tech}</span>

                `).join("")}

            </div>

        </div>

    `;

}

function createProjectKPIs(project){

    return `

        <div class="modal-section">

            <h3>Key Performance Indicators</h3>

            <div class="modal-kpis">

                ${project.kpis.map(item => `

                    <div class="modal-kpi-card">

                        <i class="fa-solid fa-chart-line"></i>

                        <span>${item}</span>

                    </div>

                `).join("")}

            </div>

        </div>

    `;

}

function createProjectInsights(project){

    return `

        <div class="modal-section">

            <h3>Key Insights</h3>

            <div class="modal-insights">

                ${project.insights.map(item => `

                    <div class="modal-insight-card">

                        <div class="insight-icon">

                            <i class="fa-solid fa-lightbulb"></i>

                        </div>

                        <p>${item}</p>

                    </div>

                `).join("")}

            </div>

        </div>

    `;

}

function createProjectRecommendations(project){

    return `

        <div class="modal-section">

            <h3>Recommendations</h3>

            <div class="modal-recommendations">

                ${project.recommendations.map(item => `

                    <div class="modal-recommendation-card">

                        <div class="recommendation-icon">

                            <i class="fa-solid fa-circle-check"></i>

                        </div>

                        <p>${item}</p>

                    </div>

                `).join("")}

            </div>

        </div>

    `;

}

function createProjectButtons(project){

    return `

        <div class="modal-buttons">

            <a
                href="${project.github}"
                target="_blank"
                class="modal-btn">

                <i class="fa-brands fa-github"></i>

                GitHub

            </a>

        </div>

    `;

}

/*==================================================
            MODAL IMAGE SLIDER
==================================================*/

class ModalSlider{

    constructor(project){

        this.project = project;

        this.images = project.images.map(img => project.folder + img);

        this.current = 0;

        this.image =
            document.getElementById("modalSliderImage");

        this.prev =
            document.querySelector(".modal-prev");

        this.next =
            document.querySelector(".modal-next");

        this.dots =
            document.getElementById("modalSliderDots");

        this.createDots();

        this.show(0);

        this.attachEvents();

    }

    createDots(){

        this.dots.innerHTML="";

        this.images.forEach((img,index)=>{

            const dot=document.createElement("span");

            if(index===0){

                dot.classList.add("active");

            }

            dot.onclick=()=>{

                this.current=index;

                this.show(index);

            };

            this.dots.appendChild(dot);

        });

    }

    show(index){

        this.image.src=this.images[index];

        [...this.dots.children].forEach(dot=>dot.classList.remove("active"));

        this.dots.children[index].classList.add("active");

    }

    nextSlide(){

        this.current=(this.current+1)%this.images.length;

        this.show(this.current);

    }

    previousSlide(){

        this.current=(this.current-1+this.images.length)%this.images.length;

        this.show(this.current);

    }

    attachEvents(){

        this.next.onclick=()=>{

            this.nextSlide();

        };

        this.prev.onclick=()=>{

            this.previousSlide();

        };

    }

}