import { useNavigate } from 'react-router-dom'

import './AddRecipie.css'

import * as recipesAPI from "../../../api/recipesService";
import useAddRecipie from "../../../hooks/useAddRecipie";


export default function AddRecipie() {
   
    const navigate = useNavigate()
    const [addRecipieFormValues, changeHandler, handleImageUpload] = useAddRecipie({
        image: '',
        category: '',
        name: '',
        igredients: '',
        preparation: '',
    })


    const formSubmitHandler = async (e) => {
        e.preventDefault();

         const result = await recipesAPI.addRecipie(addRecipieFormValues);
        // const result = await addRecipie(addRecipieFormValues);
         // TODO: change path to recipe/id/details
        navigate('/');
    }

    return (
        <div className="add-recipe" >
            <form className="add-form" onSubmit={formSubmitHandler}>
                <h3>Add recipie</h3>
                <label htmlFor="image"></label>
                <input
                    type="file"
                    name='image'
                    id="file"
                    onChange={handleImageUpload}
                />
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
                <label htmlFor="name">Recipie name</label>
                <input
                    name="name"
                    type="text"
                    id="name"
                    value={addRecipieFormValues.name}
                    onChange={changeHandler}
                />

                <label htmlFor="igredients">Igredients</label>
                <textarea
                    name="igredients"
                    id="recipie-igredients"
                    cols="15"
                    rows="10"
                    value={addRecipieFormValues.igredients}
                    onChange={changeHandler}
                ></textarea>

                <label htmlFor="preperaion">Preparation</label>
                <textarea
                    name="preparation"
                    id="preperaion"
                    cols="15"
                    rows="10"
                    value={addRecipieFormValues.preparation}
                    onChange={changeHandler}
                ></textarea>

                <div className="btns">
                    <button className="cancle-btn">Cancle</button>
                    <button className="add-btn" type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}