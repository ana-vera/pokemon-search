export function createCard(pokemon, containerText){
    containerText += `
    <div class="show-card" id="${pokemon.name}">
        <img src=${pokemon.ThumbnailImage} alt="">
        <div id="title"><h2 class="attribute" id="name">${pokemon.name}</h2><h2 class="attribute" id="number">#${pokemon.number}</h2></div>
        <h3 class="attribute" id="type">Type: ${pokemon.type}</h3>
        <div class="bottom-text"><h3 class="attribute" id="weight">Weight: ${pokemon.weight}kg</h3> <h3 class="attribute" id="height">Height: ${pokemon.height}m</h3></div>
    </div>
    `
    return containerText
}