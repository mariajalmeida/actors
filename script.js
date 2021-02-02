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


    // const actorName = clone.querySelector("h2");
    console.log("full name", clone.fullname)
    // actorName.textContent = clone.fullname;

    document.querySelector("main").appendChild(clone);
}