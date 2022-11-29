import { useEffect, useState } from 'react';
import axios from 'axios';

function Liste() {
  const [films, setFilms] = useState([])
  const [affichage, setAffichage]= useState(false)

  const recup = async () => {
    await axios.get(`http://localhost:8000/film`)
    .then(res => {
      console.log(res)
      setFilms(res.data)
      setAffichage(true)

    })
  }
  useEffect(()=>{
    recup()
  },[])

  return (
    <div className="Liste">
      <h1>Listes des films:</h1>
      <p>Ajouter un film : </p>
      { affichage ? 
      films.map(film =>(
                <div>
                  <fieldset>
                  <p> id: {film.id} </p>
                    <p> titre: {film.titre} </p>
                    <p> durée: {film.duree} </p>
                  </fieldset>
                </div>
            ))
      : <p>Chargement...</p> }
    </div>
  );
}

export default Liste;
