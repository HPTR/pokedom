import { default as pokemonArray } from "./data/pokemon.js";

const createCard = (object) => {

    let typeString = '';

    if (object.types.length === 2) {
        typeString = `${capitalizeFirstLetter(object.name)} (#${object.id}) is a ${object.types[0]} and ${object.types[1]} type pokemon.`
    } else {
        typeString = `${capitalizeFirstLetter(object.name)} (#${object.id}) is a ${object.types[0]} type pokemon.`
    }

    return (
        `<div class="card">
            <img class="card__image" src="${object.sprite}" />
            <div class="card__content">
                <h2 class="card__heading" >${capitalizeFirstLetter(object.name)}</h2>
                <p class="card__text" >${typeString}</p>
                <p class="types" hidden>${object.types[0]} ${object.types[1]} all</p>
            </div>
        </div>`
    )
}
