import { useContext, useEffect, useState } from "react";
import recipesAPI from "../api/recipesService";
import AuthContext from "../contexts/authContext";


export default function useMyPecipes() {
    const [myRecipes, setMyRecipes] = useState([]);
    const { userId } = useContext(AuthContext)
    useEffect(() => {

        (async () => {
            try {
                const result = await recipesAPI.getAll();
                const filtered = result.filter(recipe => recipe._ownerId === userId);
                setMyRecipes(filtered);

            } catch (err) {
                throw new Error('There was an error', err);
            }
        })();
    }, []);

    return [myRecipes]
}