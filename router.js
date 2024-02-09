import { about } from "./about.js";
import { home } from "./home.js";
import { projects } from "./projects.js";

const routes = {
    "":"home.html",
    "about":"about.html",
    "projects":"projects.html",
    "contact":"contact.html"
}
window.addEventListener('hashchange',()=>{
    //console.log(window.location.hash);
    navigate()
})

navigate()

//const loadPage = async()=>{}

function navigate(){
    let hash = window.location.hash.substring(2)
    console.log(hash);
    let page = routes[hash]
    loadPage(page,document.querySelector('main'))
    console.log(page);
}

async function loadPage(url, domObj){
    const response = await fetch(url)
    const html = await response.text()
    domObj.innerHTML = html
    if(url=="home.html") home()
    if(url=="about.html")about()
    if(url=="projects.html")projects()
}