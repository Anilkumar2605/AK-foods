import { useDispatch } from "react-redux";
import { Swiggy_Photo } from "./utils/photos";
import appStore from "./utils/appStore";
import { addItem } from "./utils/cartSlice";

const ItemCategory = ({ Food }) => {
    console.log(Food, "Food")

    const dipatch = useDispatch();

    const handleAddItem = (fooditems) => {
        dipatch(addItem(fooditems));
    }

    return (
        <div>
            <div>
                {Food.map((fooditems) => (
                    <div className="text-left p-2 m-2 flex justify-between border-yellow-500 border-b-2">
                        <div className="w-8/12 py-2">
                            <span className="font-bold" key={fooditems.card.info.id}>{fooditems.card.info.name} </span>
                            <span className="font-bold">- ₹ {fooditems.card.info.price / 100}</span>
                            <br />
                            <p className="text-xs py-2">{fooditems.card.info.description}</p>
                        </div>
                        <div className="w-4/12">
                            <img className="p-2 border border-black m-2" src={`${Swiggy_Photo}${fooditems.card.info.imageId}`} />
                            <button className="border border-black bg-black text-white px-2 rounded-lg m-2"
                                onClick={() => handleAddItem(fooditems)}
                            >Add + </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ItemCategory;