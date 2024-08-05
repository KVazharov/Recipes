import { useParams } from 'react-router-dom';
import useCategory from '../../../hooks/useCategory';
import RecipieListItem from '../recipieListItem/RecipieListItem';

import './CategoryComponet.css';

export default function CategoryComponet() {
    const {category} = useParams();
    console.log(category);

    const [recipes, capCategory] = useCategory(category);

    return (
        <>
            <h1>{capCategory}</h1>
            <div className='category-component'>
                {recipes.length > 0 ? (
                    recipes.map(recipe => <RecipieListItem key={recipe._id} {...recipe} />)
                ) : (
                    <div className="no-recipes">No Recipes Found</div>
                )
                }
            </div>
        </>
    )
}