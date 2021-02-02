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
}

function divideActors(singleActor) {

    const template = document.querySelector("#actor").content;
    const clone = template.cloneNode(true);

    const actorName = clone.querySelector("h2");
    actorName.textContent = singleActor.fullname;

    clone.querySelector("button").classList.add(singleActor.id);

    clone.querySelector("button").addEventListener("click", () => {
        console.log("SEPARATE", singleActor)
        fetch(singleActor)
        .then(openModal);
    })

    document.querySelector("main").appendChild(clone);
}

function openModal(e) {
    console.log(e, "buenos");
    const template = document.querySelector("#modal").content;
    const clone = template.cloneNode(true);

    const actorName = clone.querySelector("h3");
    actorName.textContent = e.fullname;
    const actorsMovie = clone.querySelector("h4");
    actorsMovie.textContent = e.movie;
    const img = e.img;
    clone.querySelector("img").src = img;

    document.querySelector("main").appendChild(clone);


    const modal = document.querySelector(".modal-background");
    modal.classList.remove("hide");
    const closeBtn = document.querySelector("span");
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hide");
    } )
    modal.addEventListener("click", () => {
        modal.classList.add("hide");
    } )
}