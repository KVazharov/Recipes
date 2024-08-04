import { Link } from "react-router-dom";

import './EditListItem.css';
import { useState } from "react";
import ConfirmDelete from "../confitm-delete/ConfirmDelete";

export default function EditListItem({
    image,
    _id,
    name
}) {
    const [confirm, setComfirm] = useState(false);

    const onCancel = () => {
        setComfirm(false);
    }

    const onDelete = () => {
        setComfirm(true);
    }

    return (
        <>
            {confirm && <ConfirmDelete onCancel={onCancel} id={_id} name={name} />}
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
                        <Link
                            to={`/recipes/${_id}/edit`}
                            className="button">Edit</Link>
                        <Link
                            onClick={onDelete}
                            className="button">Delete</Link>
                    </div>
                </div>
            </div>
        </>

    )
}