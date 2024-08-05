import { useEffect, useState } from "react";
import recipesAPI from "../api/recipesService";

export default function useCategory(category) {

    const [isLoading, setIsLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const [capCategory, setCapCategory] = useState('');
    

    useEffect(() => {
        (async () => {
            setCapCategory(capitalLetter(category));
            try {
                const result = await recipesAPI.getByCategory(category);
                setRecipes(result);
                setIsLoading(false);

            } catch (err) {
                throw Error('Something went wrong!');
            }

        })();

    }, [category]);


    const capitalLetter = (category) => {

        if (category == 'bbq') {
            return category.toUpperCase();
        }
        return (category.charAt(0).toUpperCase() + category.slice(1));
    }

    return [
        recipes,
        capCategory,
        isLoading,
    ]
}