'use strict';

const oReqVader = new XMLHttpRequest();
oReqVader.addEventListener('load', reqListenerVaderName);
oReqVader.open('GET', 'https://swapi.co/api/people/4/');
oReqVader.send();

function reqListenerVaderName() {
  let nameOf4 = document.getElementById('person4Name');
  nameOf4.innerHTML = JSON.parse(this.responseText).name;
}

const oReqVaderHomeWorld = new XMLHttpRequest();
oReqVaderHomeWorld.addEventListener('load', reqListenerVaderWorld);
oReqVaderHomeWorld.open('GET', 'https://swapi.co/api/planets/1/');
oReqVaderHomeWorld.send();

function reqListenerVaderWorld() {
  let worldOf4 = document.getElementById('person4HomeWorld');
  worldOf4.innerHTML = JSON.parse(this.responseText).name;
}

const oReqSolo = new XMLHttpRequest();
oReqSolo.addEventListener('load', reqListenerSoloName);
oReqSolo.open('GET', 'https://swapi.co/api/people/14/');
oReqSolo.send();

function reqListenerSoloName() {
  let nameOf14 = document.getElementById('person14Name');
  nameOf14.innerHTML = JSON.parse(this.responseText).name;
}

const oReqSoloSpecies = new XMLHttpRequest();
oReqSoloSpecies.addEventListener('load', reqListenerSoloSpecies);
oReqSoloSpecies.open('GET', 'https://swapi.co/api/species/1/');
oReqSoloSpecies.send();

function reqListenerSoloSpecies() {
  let speciesOf14 = document.getElementById('person14Species');
  speciesOf14.innerHTML = JSON.parse(this.responseText).name;
}

const oReqSWMovies = new XMLHttpRequest();
oReqSWMovies.addEventListener('load', reqListenerSWMovies);
oReqSWMovies.open('GET', 'https://swapi.co/api/films/');
oReqSWMovies.send();

function reqListenerSWMovies() {
  let responseData = JSON.parse(this.responseText);


  for (let i = 0; i < responseData.results.length; i++) {
    let movies = document.createElement('li');
    movies.innerHTML = responseData.results[i].title;
    let movieHTML = document.getElementById('filmList');
    movieHTML.appendChild(movies);
    let planetArray = responseData.results[i].planets;

    for (let j = 0; j < planetArray.length; j++) {

      console.log(planetArray[j])
      const oReqPlanets = new XMLHttpRequest();
      oReqPlanets.addEventListener('load', reqListenerPlanets);
      oReqPlanets.open('GET', planetArray[j]);
      oReqPlanets.send();

      function reqListenerPlanets() {
        let planets = document.createElement('li');
        planets.innerHTML = JSON.parse(this.responseText).name;
        movies.appendChild(planets);
        
        console.log(planetArray[j].name)
        
      }
    }
  }
}