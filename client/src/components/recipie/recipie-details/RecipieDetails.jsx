import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import './RecipieDetails.css';

import recipesAPI from "../../../api/recipesService";
import AuthContext from "../../../contexts/authContext";
import { convertIngredients } from "../../../utils/convertIngredients";
import favoritesAPI from "../../../api/favorites-api";
import likedId from "../../../utils/likeId";

export default function RecipieDetails() {

    const [recipe, setRecipe] = useState({});
    const [isActive, setIsActive] = useState(false);
    const [likeId, setLikeId] = useState('');
    const { recipieId } = useParams();
    const [igredientsArr, setIgredientsArr] = useState([]);
    const { isAuthenticated, userId } = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            const result = await recipesAPI.getOne(recipieId);
            setIgredientsArr(convertIngredients(result.igredients));
            setRecipe(result);
            const allLikes = await favoritesAPI.isLiked(recipieId);
            const res = allLikes?.some(like => like._ownerId === userId);
            setIsActive(res);

        })();
    }, [isActive, recipieId]);

    const createLike = async (recipieId) => {

        try {
            const result = await favoritesAPI.like(recipieId);
            setLikeId(result._id);
            setIsActive(true);
        } catch (err) {
            console.log(err.message);
        }
    }
    
    const disLike = async (recipieId) => {
        try {
            const getOne = await favoritesAPI.getLike(recipieId, userId);
            const likeId = likedId(getOne, userId);
            // console.log('dasdasdsa', likeId);
            const result = await favoritesAPI.disLike(likeId);
            setIsActive(false);
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
                    <div>
                        {isActive ? <i id="active"
                            className="fa-solid fa-heart fa-2xl is-active"
                            onClick={()=>disLike(recipieId)}></i>
                            : <i onClick={() => createLike(recipieId)}
                                id="inactive"
                                className="fa-solid fa-heart fa-2xl"></i>}
                    </div>}
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