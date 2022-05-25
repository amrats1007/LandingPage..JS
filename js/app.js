/*
 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 
 * Dependencies: None
 
 * JS Version: ES2015/ES6
 
 * JS Standard: ESlint
 
*/

/*
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/*
 * Define Global Variables
*/

const sections = document.querySelectorAll("section");

/*
 * End Global Variables
*/

/*
 * Begin Main Functions
*/

// build the nav
function buildTheNav() {
    const ul = document.querySelector("#navbar__list");
    const fragment = document.createDocumentFragment();
    sections.forEach((section) => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = section.dataset.nav;
        a.href = "#${section.id}";
        a.classList.add("menu__link");

        // Scroll to anchor ID using scrollTO event
        a.addEventListener("click", (e) => {
            e.preventDefault();
            section.scrollIntoView({behavior: "smooth"});
            });

        li.appendChild(a);
        fragment.appendChild(li);
    });
    ul.appendChild(fragment);
};

// Add class 'active' to section when near top of viewport
function sectionsClass() {
    sections.forEach((section) =>{
        section.classList.remove("your-active-class");
        const sectionTop = section.getBoundingClientRect().top;
        const top = 300;
        const activeListLink = document.querySelector("a[href=\"#${section.id}\"]");
        if (sectionTop > 0 && sectionTop <= top) {
            section.classList.add("your-active-class");
            activeListLink.classList.add("active-link");
        }else{
            section.classList.remove("your-active-class");
            activeListLink.classList.remove("active-link");
        };
    });
}

/*
 * End Main Functions
*/

/*
 * Begin Events
*/

// Build menu 
buildTheNav();

// Set sections as active
document.addEventListener('scroll', sectionsClass);

/*
 * End Events
*/