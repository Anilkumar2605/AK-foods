import { Swiggy_Photo } from "./utils/photos"

const RestroContainer = (props) => {
    const { ResData } = props
    const { name, cuisines, avgRatingString, areaName, cloudinaryImageId } = ResData.info
    return (
        <div className="p-2 m-2 w-[200px] ">
            <img
                className="rounded-xl shadow-xl"
                alt="food-picture"
                src={Swiggy_Photo + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h6>{avgRatingString}</h6>
            <h6>{areaName}</h6>
        </div>
    )
}

export const withOpenStatus = (RestroContainer) => {
    return (props) => {
        return (
            <div className="my-3">
                <label className="mx-4 px-1 rounded-md font-semibold bg-black border border-yellow-400 text-white">Is Open</label>
                <RestroContainer {...props} />
            </div>
        )
    }
}


export default RestroContainer;