window.addEventListener("DOMContentLoaded", getActors);

function getActors() {
    fetch("actors.json")
    .then(res => res.json())
    .then(handleActors);
}

function handleActors(actors) {
    const myData = actors;
    console.log("mydatay", myData)
    myData.forEach(separateData);
}

const button = document.querySelectorAll("button");

function separateData(data) {
    divideActors(data);
    // openModal(data);
}

function divideActors(singleActor) {
    // console.log("single", singleActor)
    const template = document.querySelector("#actor").content;
    const clone = template.cloneNode(true);

    const actorName = clone.querySelector("h2");
    actorName.textContent = singleActor.fullname;

    clone.querySelector("button").addEventListener("click", res => {
        openModal(singleActor);
    });

    document.querySelector("main").appendChild(clone);
}

function openModal(model) {
    console.log(model, "buenos");

    console.log(model.fullname, "FULL NAME");

    // const template = document.querySelector("#actor").content;
    // const clone = template.cloneNode(true);

    const actorNames = document.querySelector("h3");
    actorNames.textContent = model.fullname;
    const actorsMovie = document.querySelector("h4");
    actorsMovie.textContent = model.movie;
    const img = model.img;
    document.querySelector("img").src = img;

    // document.querySelector("main").appendChild(clone);


    const modal = document.querySelector(".modal-background");
    modal.classList.remove("hide");
    const closeBtn = document.querySelector("span");
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hide");
    } )
    modal.onclick = () => {
        modal.classList.add("hide");
    }
}