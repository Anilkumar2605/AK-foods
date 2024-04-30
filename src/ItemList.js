import ItemCategory from "./ItemCategory";
import { useState } from "react";
const ItemList = ({ data, ItemView, SetOpenOne }) => {

    //const [ItemView, SetItemView] = useState(false)

    const settingview = () => {
        SetOpenOne();
    }

    console.log(data, "Dataaaa")
    return (
        <div className="my-4 m-auto border border-black w-6/12  p-2 bg-yellow-100  shadow-lg cursor-pointer">
            <div className="flex justify-between" onClick={settingview}>
                <span className="my-2 font-bold">{data?.title} ({data?.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {ItemView && <ItemCategory Food={data.itemCards} />}
        </div>
    )
}
export default ItemList;