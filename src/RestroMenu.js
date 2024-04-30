import { useEffect, useState } from "react";
import { ResDataURL } from "./utils/photos";
import { useParams } from "react-router-dom";
import useRestroMenu from "./utils/useRestroMenu";
import ShimmerUI from "./ShimmerUI"
import ItemList from "./ItemList";

const RestroMenu = () => {

    const { ResId } = useParams();
    const ResMenu = useRestroMenu(ResId);
    console.log("Resmenu", ResMenu)

    const [OpenOne, SetOpenOne] = useState(null);

    if (ResMenu === null) return <ShimmerUI />

    const { name = '', cuisines = [] } = ResMenu?.cards[2]?.card?.card?.info || {};
    const { itemCards = [] } = ResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

    console.log(ResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards, "Get Data")

    const categories = ResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    console.log(categories, "Categories")

    return (
        <div className="border border-black p-4 m-4 text-center bg-yellow-50">
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(", ")}</h2>
            <h3 className="font-bold m-4 bg-yellow-100 text-lg border border-black">Menu</h3>
            <p >{categories.map((category, index) => (
                <ItemList
                    key={category?.card?.card?.name}
                    data={category?.card?.card}
                    ItemView={index === OpenOne ? true : false}
                    SetOpenOne={() => SetOpenOne(index)}
                />
            ))}</p>
        </div>
    )
}
export default RestroMenu;