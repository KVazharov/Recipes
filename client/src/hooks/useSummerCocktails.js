import { useEffect, useState } from "react";
import recipesAPI from "../api/recipesService";

export default function useSummerCocktails () {

    const [cocktails, setCocktails] = useState([]);

    useEffect(()=>{
        (async ()=> {
            try {
            const result = await recipesAPI.summerCocktails();
            setCocktails(result);
            } catch (err) {
            throw new Error ('Somthing went wrong', err);
            }
        })();

    },[])

    return[
        cocktails,
    ]
}