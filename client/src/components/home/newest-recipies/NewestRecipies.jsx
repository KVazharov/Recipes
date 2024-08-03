import { useEffect, useState } from "react"
import recipesAPI from "../../../api/recipesService";
import RecipieListItem from "../../recipie/recipieListItem/RecipieListItem";


export default function NewestRecipies() {

    const [latest, setLatest] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await recipesAPI.getLatest();
                setLatest(result);
            } catch (err) {
                console.log(err.message);
            }
        })()
    }, []);

    return (
        <section className="newest-recipes">

            {latest.map(recipe => <RecipieListItem key={recipe._id} {...recipe}/>)}
            {/* <h2>Latest recipes</h2>
            <div className="most-popular-list">
                <div className="recipe">
                    <a href="#">
                        <div>
                            <img src="../../public/raspberry-collection-rosewater-raspberry-sponge-cake-8614599.webp"
                                alt="" />
                            <h4>Raspberry recipes</h4>
                        </div>
                    </a>
                </div>
                <div className="recipe">
                    <a href="#">
                        <div>
                            <img src="c../../public/raspberry-collection-rosewater-raspberry-sponge-cake-8614599.webp"
                                alt="" />
                            <h4>Raspberry recipes</h4>
                        </div>
                    </a>
                </div>
                <div className="recipe">
                    <a href="#">
                        <div>
                            <img src="c../../public/raspberry-collection-rosewater-raspberry-sponge-cake-8614599.webp"
                                alt="" />
                            <h4>Raspberry recipes</h4>
                        </div>
                    </a>
                </div>
            </div> */}
        </section>
    )
}