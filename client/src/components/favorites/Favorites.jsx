import useFavorites from "../../hooks/useFavorites"
import RecipieListItem from "../recipie/recipieListItem/RecipieListItem";
import Spinner from "../spinner/Spinner";

export default function Favorites() {
    const [favorites, isLoading] = useFavorites([]);

    return (
        <>
            <h2>Fovorites</h2>
            <div className="list">
                {isLoading ? (
                    <div className="spinner">
                        <Spinner />
                    </div>
                ) : (
                    favorites.length > 0 ? (
                        favorites.map(recipe => <RecipieListItem key={recipe._id} {...recipe} />)
                    ) : (
                        <div className="no-recipes">No Recipes Found</div>
                    )
                )}
            </div>
        </>
    )
}