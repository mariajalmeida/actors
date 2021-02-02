window.addEventListener("DOMContentLoaded", getActors);

function getActors() {
    fetch("actors.json")
    .then(res => res.json())
    .then(handleActors);
}

function handleActors(actors) {
    const myData = actors;
    console.log("mydatay", myData)
    myData.forEach(divideActors);
}

function divideActors(singleActor) {
    console.log(singleActor);

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    const actorName = clone.querySelector("h2");
    actorName.textContent = singleActor.fullname;
    const actorsMovie = clone.querySelector("h3");
    actorsMovie.textContent = singleActor.movie;

    const img = singleActor.img;
    clone.querySelector("img").src = img;

    document.querySelector("main").appendChild(clone);
}