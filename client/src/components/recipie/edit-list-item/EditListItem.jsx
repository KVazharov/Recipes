import { Link } from "react-router-dom";

import './EditListItem.css'

export default function EditListItem({
    image,
    _id,
    name
}) {

  
    return (
            <div className="edit-list">
                <div className="edit-recipe">
                    <Link to={`/recipes/${_id}/details`} className="edit-link">
                        <div>
                            <img src={image}
                                alt="" />
                            <h4>{name}</h4>
                        </div>
                    </Link>
                    <div className="edit-options">
                        <Link to={`/recipes/${_id}/edit`} className="button">Edit</Link>
                        <Link to='#' className="button">Delete</Link>
                    </div>
                </div>
            </div>
    )
}