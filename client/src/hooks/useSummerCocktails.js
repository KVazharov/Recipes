import { useEffect, useState } from "react";
import recipesAPI from "../api/recipesService";

export default function useSummerCocktails () {

    const [cocktails, setCocktails] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        (async ()=> {
            try {
            const result = await recipesAPI.summerCocktails();
            setCocktails(result);
        } catch (err) {
            setError(err.statusText);
            throw new Error ('Somthing went wrong', err);
            }
        })();

    },[])

    return[
        cocktails,
        error,
    ]
}