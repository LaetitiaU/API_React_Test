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
</div>
    );
}