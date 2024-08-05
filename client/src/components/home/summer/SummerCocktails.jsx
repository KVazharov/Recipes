import useSummerCocktails from "../../../hooks/useSummerCocktails"
import RecipieListItem from "../../recipie/recipieListItem/RecipieListItem";

export default function SummerCocktails() {
    const [cocktails] = useSummerCocktails([]);


    return (
        <section className="most-popular-recipes">
            <h2>It's summer, it's for Cocktails</h2>
            <section className="newest-recipes">
                {cocktails.map(recipe => <RecipieListItem key={recipe._id} {...recipe} />)}
            </section>
        </section>
    )
}