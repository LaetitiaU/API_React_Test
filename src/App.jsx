import React from 'react';
import { useEffect, useState } from 'react';


export const App = () => {

    fetch('https://api.rawg.io/api/platforms?key=26ca020995fa4556beee331585dac50d')
.then((response) => {
    response = response.json()
    response.then((result) => {
        console.log(result)
    })
.then(data => {

})
})
.catch(function(error) {
  console.log(error);
});

    return (



<div className="jeuxVideos">
    <h1>Derniers jeux vidéos</h1>
    <ul id="listeJeuxVideos">
        <li></li>
    </ul>
</div>
    );
}



/*

    function createNode(element) {
        return document.createElement(element);
    }
    
    function append(parent, el) {
        return parent.appendChild(el);
    }
    
    const ul = document.getElementById('listeJeux');
    const url = 'https://api.rawg.io/api/platforms?key=26ca020995fa4556beee331585dac50d';
    
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let jeux = data.results;
        return jeux.map(function(jeu) {
            let li = createNode('li');
            let img = createNode('img');
            let span = createNode('span');
        img.src = jeu.picture.medium;
        span.innerHTML = `${jeu.name.first} ${jeu.name.last}`;
        append(li, img);
        append(li, span);
        append(ul, li);
        })
    })
    
    .catch(function(error) {
    
    });
*/