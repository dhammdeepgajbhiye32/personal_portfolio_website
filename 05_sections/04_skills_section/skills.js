/* ============================================
        SKILL PROGRESS ANIMATION
============================================ */

document.addEventListener("DOMContentLoaded", () => {

    const bars = document.querySelectorAll(".skill-progress-fill");

    setTimeout(() => {

        bars.forEach(bar => {

            const progress = bar.style.getPropertyValue("--progress");

            bar.style.width = progress + "%";

        });

    }, 300);

});