import { useEffect, useState } from "react"
import recipesAPI from "../../../api/recipesService";
import RecipieListItem from "../../recipie/recipieListItem/RecipieListItem";
import ErrorMsg from "../../error/ErrorMsg";


export default function NewestRecipies() {

    const [latest, setLatest] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await recipesAPI.getLatest();
                setLatest(result);
            } catch (err) {
                setError(err.statusText);
                throw new Error(err.statusText);
            }
        })()
    }, []);

    // if(error) throw error;

    return (

        <>
            {error ? <ErrorMsg err= {error}/> :
                <>
                    <h2>Latest recipes</h2>
                    <section className="newest-recipes">
                        {latest.map(recipe => <RecipieListItem key={recipe._id} {...recipe} />)}
                    </section>
                </>
            }
        </>
    )
}