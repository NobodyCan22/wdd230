const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
const prophets = jsonObject['prophets'];

function displayProphets(prophet) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let portrait = document.createElement('img');
  
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
  ____.setAttribute('src', prophet.imageurl);
  ____.setAttribute(`alt`, `Portait of ${prophet.name} ${prophet.lastname}`);
  ____.setAttribute('loading', 'lazy');
  
  card.appendChild(h2);
  card.appendChild(portrait);
  
  document.querySelector('div.cards').appendChild(card);
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    prophets.forEach(displayProphets);
});

