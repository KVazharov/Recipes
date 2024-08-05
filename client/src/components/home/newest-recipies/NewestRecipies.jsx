import { useEffect, useState } from "react"
import recipesAPI from "../../../api/recipesService";
import RecipieListItem from "../../recipie/recipieListItem/RecipieListItem";


export default function NewestRecipies() {

    const [latest, setLatest] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await recipesAPI.getLatest();
                console.log("latest", result);
                setLatest(result);
            } catch (err) {
                console.log(err.message);
            }
        })()
    }, []);

    return (
        <>
            <h2>Latest recipes</h2>
            <section className="newest-recipes">
                {latest.map(recipe => <RecipieListItem key={recipe._id} {...recipe} />)}
            </section>
        </>
    )
}