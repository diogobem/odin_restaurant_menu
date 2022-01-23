import createNavbar from "./navbar.js";
import createHome from "./home.js";
import createFooter from "./footer.js";

function initializeWebsite (content){
const header = createNavbar();
const home = createHome();
const footer = createFooter();

const principal = document.createElement('div')
principal.classList.add('principal')

content.append(header)
content.append(principal)
principal.append(home)
content.append(footer)
console.log("init_load")
return;
}

export default initializeWebsite;