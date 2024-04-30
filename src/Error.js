import { useRouteError } from "react-router-dom";


const Error = () => {
    const arr = useRouteError();
    console.log(arr);

    return (
        <div>
            <h1>Oops...</h1>
            <h2>Something went wrong...</h2>
            <h5>{arr.status},{arr.statusText}</h5>

        </div>
    )
}
export default Error;