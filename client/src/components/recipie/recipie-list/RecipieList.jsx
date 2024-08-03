import { useEffect, useState } from "react";

import './RecipieList.css';

import * as recipesAPI from '../../../api/recipesService';
import RecipieListItem from "../recipieListItem/RecipieListItem";
import Spinner from "../../spinner/Spinner";


export default function RecipiesList() {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   

    useEffect(() => {
        (async () => {
            const result = await recipesAPI.getAll();
            setRecipes(result)
            setIsLoading(false);

        })();
    }, [])

    return (

        <div className="list">
            {isLoading ? (
                <div className="spinner">
                    <Spinner />
                </div>
            ) : (
                recipes.length > 0 ? (
                    recipes.map(recipe => <RecipieListItem key={recipe._id} {...recipe} />)
                ) : (
                    <div className="no-recipes">No Recipes Found</div>
                )
            )}
        </div>
    )
}