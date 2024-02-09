import {getData} from "./utils.js";

const url = "https://raw.githubusercontent.com/Bianka191122/projects-json/main/projects-json"

function cards_projects(data){
    data.forEach(element => {
        document.querySelector(".cards").innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h3 class="project-id">${element.id}.</h3>
                        <h5 class="project-title">${element.title}</h5>
                        <p class="project-technologies">Technológiák:<br>${element.technologies}</p>
                        <p class="project-createdAt">Dátum: ${element.createdAt}</p>
                        <a src="${element.hosted}" class="gomb project-hosted target="_blank">Megnézem</a>
                    </div>
                </div>
        ` 
    });
}

export const projects=()=>{
    getData(url, renderProjects)
}

function renderProjects(data){
    console.log(data);
    getData(url, cards_projects)
}