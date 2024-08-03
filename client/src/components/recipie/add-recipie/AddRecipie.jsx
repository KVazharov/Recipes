import { useNavigate, useParams } from 'react-router-dom'

import './AddRecipie.css'

import * as recipesAPI from "../../../api/recipesService";
import useAddRecipie from "../../../hooks/useAddRecipie";
import { useEffect, useState } from 'react';
import addRecipeValidation from '../../../validation/addRecipeValidation';


export default function AddRecipie() {

    const { recipieId } = useParams();
    const navigate = useNavigate()

    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);
    const [initialRender, setInitialRender] = useState(true);
    const [addRecipieFormValues, changeHandler, handleImageUpload] = useAddRecipie({
        image: '',
        category: '',
        name: '',
        igredients: '',
        preparation: '',
    })

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const result = await recipesAPI.addRecipie(addRecipieFormValues);
            navigate(`/recipes/${result._id}/details`);
        } catch (err) {
            console.log(err.message);
        }
        
              
    }

    useEffect(() => {

        if (!initialRender) {
        
            setIsDisabled(Object.keys(errors).length !== 0);
            setErrors(addRecipeValidation(addRecipieFormValues));
        }
        setInitialRender(false);

    }, [addRecipieFormValues, isDisabled]);


    return (
        <div className="add-recipe" >
            <form className="add-form" onSubmit={formSubmitHandler}>
                <h3>Add recipe</h3>
                <label htmlFor="image"></label>
                <input
                    type="file"
                    name='image'
                    id="file"
                    onChange={handleImageUpload}
                />
                {errors.image && <span className="error">{errors.image}</span>}
                <label htmlFor="category" id="category">Category:
                </label>
                <select
                    name="category"
                    id="category"
                    value={addRecipieFormValues.category}
                    onChange={changeHandler}>
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
                    value={addRecipieFormValues.name}
                    onChange={changeHandler}
                />
                {errors.name && <span className="error">{errors.name}</span>}
                <label htmlFor="igredients">Igredients</label>
                <textarea
                    name="igredients"
                    id="recipie-igredients"
                    cols="15"
                    rows="10"
                    value={addRecipieFormValues.igredients}
                    onChange={changeHandler}
                ></textarea>
                {errors.igredients && <span className="error">{errors.igredients}</span>}
                <label htmlFor="preperaion">Preparation</label>
                <textarea
                    name="preparation"
                    id="preperaion"
                    cols="15"
                    rows="10"
                    value={addRecipieFormValues.preparation}
                    onChange={changeHandler}
                ></textarea>
                {errors.preparation && <span className="error">{errors.preparation}</span>}
                <div className="btns">
                    <button className="cancle-btn" onClick={()=> navigate('/')}>Cancle</button>
                    <button className="add-btn" disabled={isDisabled} type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}