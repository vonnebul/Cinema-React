import Liste from "./component/Liste";
import Ajout from "./component/Ajout";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
 

  return (
    <div className="App">
      <Link to="/"> Accueil </Link>
      <Link to="/ajout"> Ajoutez </Link>

      <Routes>
        <Route path="/" element={<Liste />}/>
        <Route path="/ajout" element={<Ajout/>}/>
      </Routes>
    </div>
  );
}

export default App;
