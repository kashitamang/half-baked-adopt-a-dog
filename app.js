import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';



async function loadData() {
    // on load
// fetch all dogs
    const dogs = await getDogs();
    console.log(dogs);
    const dogListContainer = document.getElementById('dog-list-container');

// render and append all dog cards to the container
    for (let dog of dogs) {
        const dogDiv = renderDogCard(dog);
        dogListContainer.append(dogDiv);
    }
}

loadData();
