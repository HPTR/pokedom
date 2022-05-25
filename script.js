import { default as pokemonArray } from "./data/pokemon.js";

const cardContainer = document.querySelector('.card-container');
const nameSearch = document.querySelector('.name-search')
const typeSearch = document.querySelector('.type-search');

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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

pokemonArray.forEach(pokemon => cardContainer.innerHTML += createCard(pokemon));

const handleSearchCriteriaChange = (event) => {

    const nameCriteria = nameSearch.value.toLowerCase();
    const typeCriteria = typeSearch.value.toLowerCase();
    const pokemonCards = document.querySelectorAll('.card');


    pokemonCards.forEach(pokemon => {

        if (pokemon.children[1].children[0].innerText.toLowerCase().indexOf(nameCriteria) > -1 && pokemon.children[1].children[2].innerText.toLowerCase().indexOf(typeCriteria) > -1) {
            pokemon.style.display = "";
        } else {
            pokemon.style.display = "none";
        }

    })

    return;
}


nameSearch.addEventListener('input', handleSearchCriteriaChange);
typeSearch.addEventListener('change', handleSearchCriteriaChange);