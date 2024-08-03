
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useGetRecipe from "../../../hooks/useGetRecipe";
import useEdit from "../../../hooks/useEdit";
import recipesAPI from "../../../api/recipesService";
import editRecipeValidation from "../../../validation/editRecipeValidation";


const initialValues = {
    image: '',
    category: '',
    name: '',
    igredients: '',
    preparation: '',
}

export default function EditRecipe() {
    const navigate = useNavigate()
    const { recipieId } = useParams();
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);
    const [initialRender, setInitialRender] = useState(true);
    const [recipe, setRecipe] = useGetRecipe(recipieId);

    const { formValues,
        onChangeHandler,
        onSubmit
    } = useEdit(Object.assign(initialValues, recipe), async (values) => {

        const updatedRecipe = await recipesAPI.update(recipieId, values);
        navigate('/my-recipes');
    });

    useEffect(() => {

        if (!initialRender) {

            setIsDisabled(Object.keys(errors).length !== 0);
            setErrors(editRecipeValidation(formValues));
        }
        setInitialRender(false);
    }, [formValues, isDisabled]);


    return (
        <div className="edit-recipe" >
            <form className="add-form" onSubmit={onSubmit} >
                <h3>Edit Recipe</h3>
                
                <label htmlFor="category" id="category">Category:
                </label>
                <select
                    name="category"
                    id="category"
                    value={formValues.category}
                    onChange={onChangeHandler}
                >
                    <option value="---">---</option>
                    <option value="salads">Salads</option>
                    <option value="bbq">BBQ</option>
                    <option value="cocktails">Cocktails</option>
                    <option value="soups">Soups</option>
                    <option value="burgers">Burgers</option>
                    <option value="dessert">Dessert</option>
                </select>
                {errors.category && <span className="error">{errors.category}</span>}
                <label htmlFor="name">Recipie name</label>
                <input
                    name="name"
                    type="text"
                    id="name"
                    value={formValues.name}
                    onChange={onChangeHandler}
                />
                {errors.name && <span className="error">{errors.name}</span>}
                <label htmlFor="igredients">Igredients</label>
                <textarea
                    name="igredients"
                    id="recipie-igredients"
                    cols="15"
                    rows="10"
                    value={formValues.igredients}
                    onChange={onChangeHandler}
                ></textarea>
                {errors.igredients && <span className="error">{errors.igredients}</span>}
                <label htmlFor="preperaion">Preparation</label>
                <textarea
                    name="preparation"
                    id="preperaion"
                    cols="15"
                    rows="10"
                    value={formValues.preparation}
                    onChange={onChangeHandler}
                ></textarea>
                {errors.preparation && <span className="error">{errors.preparation}</span>}
                <div className="btns">
                    <button className="cancle-btn" onClick={() => navigate('/my-recipes')}>Cancle</button>
                    <button className="add-btn" disabled={isDisabled} type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}