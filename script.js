//// Typing animation ////
const texts = [
    "Data Analyst",
    "Power BI Specialist",
    "Digital Health Enthusiast",
    "Database Developer"
];

let i = 0;
let j = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function type() {
    const currentText = texts[i];

    if (typingElement) {
        typingElement.textContent = currentText.substring(0, j);
    }

    if (!isDeleting) {
        j++;
    } else {
        j--;
    }

    if (!isDeleting && j === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 80 : 120);
}

type();

//// Scroll animations ////
const sections = document.querySelectorAll(".section");

function revealSections() {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 500;

        if (top > offset) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

//// Dark / Light Mode ////
const toggle = document.createElement("button");
toggle.innerText = "🌙 Toggle Mode";
toggle.classList.add("btn");

toggle.style.position = "fixed";
toggle.style.bottom = "20px";
toggle.style.right = "20px";

document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});