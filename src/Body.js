import RestroContainer, { withOpenStatus } from "./RestroContainer";
import { ResList } from "./utils/ResList"
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
    const [List, SetList] = useState([])
    const [SearchText, SetsearchText] = useState("")
    const [FilterdRestro, SetFilteredRestro] = useState([])

    console.log("Body Rendered", List)

    const ResIsOpen = withOpenStatus(RestroContainer);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const datas = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await datas.json()
        const FinalData = json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        const FilterdRestro = json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        //console.log(FinalData)
        SetList(FinalData)
        SetFilteredRestro(FilterdRestro)
    }

    const OnlineStatus = useOnlineStatus();
    if (OnlineStatus != true) return <h1>You are Offline..</h1>

    return (List.length == 0) ? < ShimmerUI /> : (
        <div className="p-2 bg-yellow-50">
            <div className="">
                <input type="text" className="p-2 border border-black rounded-md" value={SearchText}
                    onChange={(e) => SetsearchText(e.target.value)}
                />
                <button className="p-2 m-2 bg-yellow-300 border border-black rounded-md shadow-xl" onClick={() => {
                    const Filtered = List.filter((res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase()))
                    SetFilteredRestro(Filtered);
                }}>Search</button>

                <button className="bg-yellow-300 p-2 border border-black rounded-md" onClick={() => {
                    const FilterList = List.filter(
                        (res) => res.info.avgRating > 4.5
                    )
                    SetFilteredRestro(FilterList)
                }}>

                    Get Top Rated Restuarants
                </button>

                <label className="p-3">UserName : </label>
                <input type="text" />

            </div>
            <div className="flex flex-wrap">
                {
                    FilterdRestro.map((Restuarant) => (
                        <Link className="px-2 border border-black my-2 mx-2 bg-yellow-100 rounded-xl hover:translate-y-1 hover:shadow-2xl" key={Restuarant.info.id} to={"/Restaurent/" + Restuarant.info.id}>
                            {Restuarant.info.isOpen ? <ResIsOpen ResData={Restuarant} /> :
                                <RestroContainer ResData={Restuarant} />}
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default Body;