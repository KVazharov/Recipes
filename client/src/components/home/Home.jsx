
import SummerCocktails from "./summer/SummerCocktails";
import NewestRecipies from "./newest-recipies/NewestRecipies";

import './Home.css'

export default function Home() {

    return (
        <>
            <h1>Recipe inspiration</h1>
            <p>Whether you're after an old favourite or inspiration for something new, we have the perfect recipe.</p>
            <SummerCocktails />
            <NewestRecipies />
        </>
    )
}