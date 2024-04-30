import { useEffect, useState } from "react";
import { ResDataURL } from "../utils/photos";

const useRestroMenu = (ResId) => {
    const [ResMenu, SetResMenu] = useState(null)

    useEffect(() => {
        FetchResMenu()
    }, [])

    const FetchResMenu = async () => {
        const DataApi = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${ResId}`);
        const json = await DataApi.json();
        console.log("Fetched Data : ", json.data)
        SetResMenu(json.data);

    };
    return ResMenu;
};




export default useRestroMenu;