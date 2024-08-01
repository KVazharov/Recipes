import { useState, useEffect, useContext } from "react"

import { Link, useParams } from "react-router-dom"

import './RecipieDetails.css'
import recipesAPI from "../../../api/recipesService";
import AuthContext from "../../../contexts/authContext";

export default function RecipieDetails() {

    const [recipe, setRecipe] = useState({});
    const { recipieId } = useParams();
    const { isAuthenticated } = useContext(AuthContext)
    useEffect(() => {
        (async () => {
            const result = await recipesAPI.getOne(recipieId)
            setRecipe(result);
        })()
    }, []);


    return (
        <div className="details">
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt="" />
            <div className="recipie-bar">
                {isAuthenticated && <Link to="#"><i className="fa-regular fa-heart  fa-2xl"></i></Link>}
                
            </div>
            <div className="igredients">
                <ul>
                    {recipe.igredients}
                </ul>
            </div>
            <div className="preparation">
                <p>{recipe.preparation}</p>
            </div>
        </div>
    )
}