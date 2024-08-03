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
                console.log(err.message);
                
            }
        })()
    },[recipieId])

    return[ 
        recipe, 
        setRecipe
    ]

}