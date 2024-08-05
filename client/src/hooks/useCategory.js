import { useEffect, useState } from "react";
import recipesAPI from "../api/recipesService";

export default function useCategory(category) {

    const [recipes, setRecipes] = useState([]);
    const [capCategory, setCapCategory] = useState('')
    useEffect(() => {
        (async () => {
            const result = await recipesAPI.getByCategory(category);
            setRecipes(result);
            setCapCategory(capitalLetter(category));
        })();

    }, [category]);


    const capitalLetter = (category) => {

        if (category == 'bbq') {
            return category.toUpperCase();
        }
        return (category.charAt(0).toUpperCase() + category.slice(1))
    }

    return [
        recipes,
        capCategory
    ]
}