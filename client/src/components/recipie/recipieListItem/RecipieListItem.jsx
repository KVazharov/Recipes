import { Link } from "react-router-dom"

export default function RecipieListItem({
    image, 
    name,
    _id
}) {
    return (
        <>
            <div className="recipe">
                <Link to={`/recipes/${_id}/details`}>
                    <div>
                        <img src={image}
                            alt="" />
                        <h4>{name}</h4>
                    </div>
                </Link>
            </div>
        </>
    )
}