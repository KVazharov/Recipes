import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

import './RecipieDetails.css';

import recipesAPI from "../../../api/recipesService";
import AuthContext from "../../../contexts/authContext";
import { convertIngredients } from "../../../utils/convertIngredients";
import favoritesAPI from "../../../api/favorites-api";

export default function RecipieDetails() {

    const [recipe, setRecipe] = useState({});
    const [isActive, setIsActive] = useState(false)
    const { recipieId } = useParams();
    const [igredientsArr, setIgredientsArr] = useState([])
    const { isAuthenticated, userId } = useContext(AuthContext);

    const myStyle = {
        color: "#035a5a"
    }
    useEffect(() => {
        (async () => {
            const result = await recipesAPI.getOne(recipieId);
            setIgredientsArr(convertIngredients(result.igredients));
            setRecipe(result);
            const allLikes = await favoritesAPI.isLiked(recipieId);
            const x = allLikes?.some(like => like._ownerId === userId);
            setIsActive(x);

        })();
    }, [isActive, recipieId]);

    console.log("is active", isActive);
    const createLike = async (recipieId) => {

        try {
            const result = await favoritesAPI.like(recipieId)
            setIsActive(true)
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="details">
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt="" />
            <div className="recipie-bar">
                {isAuthenticated &&
                    <Link>
                        <i className={`fa-solid fa-heart  ${isActive ? 'fa-2xl' : 'fa-heart-o'}`}
                            onClick={() => createLike(recipieId)}>

                        </i>
                    </Link>
                }
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