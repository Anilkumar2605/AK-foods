import { useContext, useEffect, useState } from "react";
import { CDN_LINKS } from "./utils/photos"
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [LogIn, SetLogin] = useState("Login")
    const OnlineStatus = useOnlineStatus();

    console.log("Header Rendered")

    useEffect(() => {
        console.log("Header Called")
    }, [LogIn])

    const name = useContext(UserContext);
    console.log(name)

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems, "CartItems")

    return (
        <div className="flex px-4 m-2 py-2 justify-between bg-yellow-300 shadow-xl" >
            <div className="w-20">
                <img className="w-15 rounded-xl py-2 shadow-xl" src={CDN_LINKS} />
            </div>
            <div className="flex">
                <ul className="flex justify-between p-4 m-4">
                    <li className="px-4">
                        Online Status: {OnlineStatus === true ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to='/'>Home</Link></li>
                    <li className="px-4">
                        <Link to='/about'>About</Link></li>
                    <li className="px-4">
                        <Link to='/contact'>Contact</Link></li>

                    <li className="px-4">
                        <Link to='/cart'>
                            Cart <span className="bg-red-400 font-black border border-black px-1 rounded-2xl">{cartItems.length}</span>
                        </Link>
                    </li>

                    <li className="px-4">{name.UserName}</li>


                    <button className="border border-yellow-400 bg-black text-white px-1 rounded-md" onClick={() => LogIn == "Login" ? SetLogin("Logout") : SetLogin("Login")}>{LogIn}</button>


                </ul>
            </div>
        </div >
    )
}
export default Header;