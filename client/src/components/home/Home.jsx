import MostPopularRecipies from "./most-popular-recipies/MostPopularRecipies";
import NewesRecipies from "./newest-recipies/NewestRecipies";

export default function Home() {
    return (
        <>
            <h1>Recipe inspiration</h1>
            <p>Whether you're after an old favourite or inspiration for something new, we have the perfect recipe.</p>
            <MostPopularRecipies/>
           <NewesRecipies/>
        </>
    )
}