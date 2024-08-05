import { useEffect, useState } from "react";
import recipesAPI from "../api/recipesService";

export default function useGetRecipe (recipieId) {
    const [recipe, setRecipe] = useState({});

    useEffect(()=> {
        (async ()=> {

            try {
                const result = await recipesAPI.getOne(recipieId)
                setRecipe(result);
            } catch (err) { 
                throw new Error('There was an error', err);
                
            }
        })()
    },[recipieId])

    return[ 
        recipe, 
        setRecipe
    ]

}