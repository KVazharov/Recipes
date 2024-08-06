import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import favoritesAPI from "../api/favorites-api";
import recipesAPI from "../api/recipesService";

export default function useFavorites() {
    const { userId } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const result = await favoritesAPI.favorites(userId);
                convert(result);
                setIsLoading(false);
            } catch (err) {
                throw new Error('Something went wrong!');
            }
        })();

    }, []);

    const convert = async (arr) => {
        let favorites = [];

        for (let x of arr) {
            const result = await recipesAPI.getOne(x.recipeId);
            favorites.push(result);
        }
        setFavorites(favorites);
    }

    return [
        favorites,
        isLoading
    ]
}