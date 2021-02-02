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

function separateData(data) {
    divideActors(data);
    openModal(data);
}

function divideActors(singleActor) {

    const template = document.querySelector("#actor").content;
    const clone = template.cloneNode(true);

    const actorName = clone.querySelector("h2");
    actorName.textContent = singleActor.fullname;

    clone.querySelector("button").addEventListener("click", openModal);

    document.querySelector("main").appendChild(clone);
}

function openModal(e) {
    const template = document.querySelector("#modal").content;
    const clone = template.cloneNode(true);

    const actorsMovie = clone.querySelector("h3");
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
}