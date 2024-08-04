import { useNavigate } from 'react-router-dom';
import './ConfirmDelete.css';
import recipesAPI from '../../../api/recipesService';

export default function ConfirmDelete({
    id,
    name,
    onCancel
}) {
    const navigate = useNavigate();

    const onDelete = async () => {
        try {
            await recipesAPI.remove(id);
            navigate('/');

        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="overlay" onClick={onCancel}>
            <div id="modal" className="modal-container">
                <div className="modal-content">
                    <p className="confirmation-message">
                        Are you sure you want to delete </p>
                    <p className='recipe-title'>{name}</p>
                    <div className="button-container">
                        <button id="cancelBtn"
                            onClick={onCancel}
                            className="button cancel-button">
                            Cancel
                        </button>
                        <button id="deleteBtn"
                            onClick={onDelete}
                            className="button delete-button">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}