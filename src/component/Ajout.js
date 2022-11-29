import { useState } from "react";
import axios from 'axios';

function Ajout() {
    const [titre, setTitre]= useState("");
    const [duree, setDuree]= useState();

    const ajoutFilm = async(e)=>{
        e.preventDefault()
        await axios.post(`http://localhost:8000/film`, {
            titre: titre,
            duree: parseInt(duree)
          })
        .then(res => {
            console.log(res)
            if(res.status == 200){
                alert("envoie reussi")
            }
            else{
                alert("erreur d'envoi")
            }
            
          })
    }
    return (
      <div className="App">
       Ajout
       <form onSubmit={ajoutFilm}>
            <input type="text" name="title" onChange={(e)=> setTitre(e.target.value)}/>
            <input type="number" name="duree" onChange={(e)=> setDuree(e.target.value)}/>
            <button type="submit">Valider votre commentaire</button>
       </form>
      </div>
    );
  }
  
  export default Ajout;