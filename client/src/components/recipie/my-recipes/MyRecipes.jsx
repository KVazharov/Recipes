import useMyPecipes from "../../../hooks/useMyRecipes";
import EditListItem from "../edit-list-item/EditListItem";

export default function MyRecipes () {
    const [myRecipes ] = useMyPecipes([]);


    return(
      <div className="my-recipes">
        {myRecipes.map(recipe => <EditListItem key={recipe._id} {...recipe}/>)}
      </div>
    )
}