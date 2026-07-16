/* ============================================
            HERO TYPING EFFECT
============================================ */

const roles = [

    "Data Analyst",

    "Power BI Developer",

    "SQL Developer",

    "Business Intelligence Analyst"

];

let roleIndex = 0;

let charIndex = 0;

let deleting = false;

const typingElement = document.getElementById("typing-text");

function typeRole(){

    if(!typingElement) return;

    const current = roles[roleIndex];

    if(!deleting){

        typingElement.textContent =

        current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeRole,1500);

            return;

        }

    }

    else{

        typingElement.textContent =

        current.substring(0,--charIndex);

        if(charIndex === 0){

            deleting = false;

            roleIndex =

            (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(typeRole,deleting?40:90);

}

window.addEventListener(

    "load",

    typeRole

);

/* ============================================
            COUNTER
============================================ */

const counters =

document.querySelectorAll(".counter");

const observer =

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target =

+counter.dataset.target;

let count = 0;

const speed = target/70;

const update=()=>{

count+=speed;

if(count<target){

counter.textContent=

Math.floor(count);

requestAnimationFrame(update);

}

else{

counter.textContent=target;

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>{

observer.observe(counter);

});

/* ============================================
            PARALLAX
============================================ */

const card =

document.querySelector(".profile-card");

document.addEventListener(

"mousemove",

(e)=>{

if(!card) return;

const x=

(window.innerWidth/2-e.clientX)/40;

const y=

(window.innerHeight/2-e.clientY)/40;

card.style.transform=

`translate(${x}px,${y}px)`;

});