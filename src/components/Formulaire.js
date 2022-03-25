import React,{ useState } from "react";
import axios from "axios";

const Formulaire = (props) => {
    const longueurMax = 130;
    const [contenuSaisi, setContenuSaisi] = useState("");
    const [reste, setReste] = useState(longueurMax);
    const [titre, setTitre] = useState("");

    const handleChangeDescription = (e) => {
        setContenuSaisi(e.target.value);
        setReste(longueurMax - contenuSaisi.length);
    }

    const handleChangeTitre = (e) => {
        setTitre(e.target.value);
    }

    const handleSbmit = (e) => {
        e.preventDefault();
        axios.post("https://box-ideas.herokuapp.com/api/ideas",{title:titre, description:contenuSaisi, status:false}).then((response)=>console.log(response.data))
        // window.location.reload(false);
    }

    return(
        <div className='d-flex justify-center-start align-items-center'>
        <form onSubmit={handleSbmit} className='col-6'>
            <div className="mb-3">
                <label htmlFor="titre" className="form-label">Titre</label>
                <input type="text" className="form-control" name="titre" placeholder="Ex : Brief......" aria-describedby="titreHelp" onChange={handleChangeTitre} />
                <div className="form-text"> Merci de donner un titre clair pourla catégorisation</div>
            </div>
            <div className="mb-3">
                <label htmlFor="suggestion" className="form-label">Suggestion</label>
                <textarea className="form-control" id="suggestion" name="suggestion" rows="3" onChange={handleChangeDescription}></textarea>
                <p style={{color: (reste < 0) ? "red" : "green"}}>Contenu saisi {contenuSaisi.length} / 130</p>
                <p id="text-restant">Il vous reste {reste}</p>
            </div>
            <button type="submit" id="btn-suggestion" className="btn btn-danger float-end" style={{backgroundColor: "#ce0033"}}>Envoyer </button>
        </form>
        <div className="col-6">
            <img src="fille.svg" className="img-fluid" alt="image de deum-deumlou" />
        </div>
        </div>
    );
}

export default Formulaire;