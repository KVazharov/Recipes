import useSummerCocktails from "../../../hooks/useSummerCocktails"
import ErrorMsg from "../../error/ErrorMsg";
import RecipieListItem from "../../recipie/recipieListItem/RecipieListItem";

export default function SummerCocktails() {
    const [cocktails, error] = useSummerCocktails([]);


    return (
        <>
            {error ? <ErrorMsg err={error} /> :
                <section className="most-popular-recipes">
                    <h2>It's summer, it's for Cocktails</h2>
                    <section className="newest-recipes">
                        {cocktails.map(recipe => <RecipieListItem key={recipe._id} {...recipe} />)}
                    </section>
                </section>
            }
        </>
    )
}