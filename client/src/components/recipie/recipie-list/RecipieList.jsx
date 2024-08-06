import { useEffect, useState } from "react";

import './RecipieList.css';

import * as recipesAPI from '../../../api/recipesService';
import RecipieListItem from "../recipieListItem/RecipieListItem";
import Spinner from "../../spinner/Spinner";
import ErrorMsg from "../../error/ErrorMsg";


export default function RecipiesList() {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        (async () => {
            try {
                const result = await recipesAPI.getAll();
                setRecipes(result)
                setIsLoading(false);

            } catch (err) {
                setError(err.statusText);
                isLoading(false);
                throw new Error('There was an error', err);
            } 

        })();
    }, [])

    return (
        <>
            <h2>Recipes</h2>
            {error ? <ErrorMsg err={error} /> :
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
            }
        </>
    )
}