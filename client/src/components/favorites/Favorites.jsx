import useFavorites from "../../hooks/useFavorites"
import ErrorMsg from "../error/ErrorMsg";
import RecipieListItem from "../recipie/recipieListItem/RecipieListItem";
import Spinner from "../spinner/Spinner";

export default function Favorites() {
    const [favorites, isLoading, error] = useFavorites([]);

    return (
        <>
            <h2>Fovorites</h2>
            {error ? <ErrorMsg err={error} /> :
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
            }
        </>
    )
}