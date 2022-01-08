import CardList from "../components/cardlist/cardList";
import CategoryHeading from "../components/Category-heading";

function List(){

    return(
        <div className="page_list">
            <CategoryHeading/>
            <CardList />

        </div>
    )
}
export default List;