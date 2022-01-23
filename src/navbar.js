import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import clearContent from "./clearcontent"

function createNavbar(){



const navbar = document.createElement("div");
navbar.classList.add('navbar');


const spanTitulo=document.createElement('span')
spanTitulo.classList.add('titulo');
spanTitulo.innerHTML='<i class="fas fa-utensils"></i> MyRestaurant'
navbar.append(spanTitulo)

const navbarLinks = document.createElement('div')
navbarLinks.classList.add('navbar-links');
navbarLinks.id="navbarSupportedContent";
navbar.append(navbarLinks)

const navbarUL = document.createElement('ul')
navbarUL.classList.add('navbar-nav');
navbarLinks.append(navbarUL)

const listLink1 = document.createElement('li')
const listLink2 = document.createElement('li')
const listLink3 = document.createElement('li')
navbarUL.append(listLink1)
navbarUL.append(listLink2)
navbarUL.append(listLink3)


const button1 = document.createElement('button')
button1.textContent=' Who We Are!'
button1.classList.add ('nav-link');
button1.id='startPage'
button1.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    let principal = document.querySelector('.principal')
    setActiveButton(button1);
    clearContent();
    const home = createHome();
    principal.append(home)
});

listLink1.append(button1)

const button2 = document.createElement('button')
button2.classList.add ('nav-link');
button2.id='menuPage'
button2.textContent=' Menu'
button2.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    let principal = document.querySelector('.principal')
    setActiveButton(button2);
    clearContent();
    const menu=createMenu();
    principal.append(menu)
    console.log(principal)
});
listLink2.append(button2)

const button3 = document.createElement('button')
button3.textContent='Contact'
button3.classList.add ('nav-link');
button3.id='contactPage'
button3.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    let principal = document.querySelector('.principal')
    setActiveButton(button3);
    clearContent();
    const contact = createContact();
    principal.append(contact)
});
listLink3.append(button3)
console.log("navbar")


return navbar;

}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-link");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
}

export default createNavbar
