import { useState, useEffect, useContext } from "react"

import { Link, NavLink, useParams } from "react-router-dom"

import './RecipieDetails.css'
import recipesAPI from "../../../api/recipesService";
import AuthContext from "../../../contexts/authContext";
import { convertIngredients } from "../../../utils/convertIngredients";

export default function RecipieDetails() {

    const [recipe, setRecipe] = useState({});
    const { recipieId } = useParams();
    const [igredientsArr, setIgredientsArr] = useState([])
    const { isAuthenticated } = useContext(AuthContext)
    useEffect(() => {

        (async () => {
            const result = await recipesAPI.getOne(recipieId);
            setIgredientsArr(convertIngredients(result.igredients));

            setRecipe(result);
        })()
    }, []);



    return (
        <div className="details">
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt="" />
            <div className="recipie-bar">
                {isAuthenticated && <NavLink  to="#"><i className="fa-solid fa-heart fa-2xl" ></i></NavLink>}

            </div>
            <div className="igredients">
                <h3>Necessary products</h3>
                <ul>
                    {igredientsArr.map((igredient, index) => <li key={index}>{igredient}</li>)}
                </ul>
            </div>
            <div className="preparation">
                <h3>Method of preparation</h3>
                <p>{recipe.preparation}</p>
            </div>
        </div>
    )
}