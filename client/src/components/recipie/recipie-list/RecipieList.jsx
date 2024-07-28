import { useEffect, useState } from "react"

import './RecipieList.css'

import * as recipesAPI from '../../../api/recipesService'
import RecipieListItem from "../recipieListItem/RecipieListItem";

export default function RecipiesList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await recipesAPI.getAll();
            setRecipes(result)
        })();
    }, [])

    return (
            <div className="list">
                {recipes.length > 0 ?
                recipes.map(recipie => <RecipieListItem key={recipie._id} {...recipie} />) :
                <div className="no-recipes">No Recipes Found</div>}
            </div>
    )
}