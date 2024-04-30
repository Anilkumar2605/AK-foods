import User from "./user";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: "DummyName",
            user_email: "dummy@gmail.com"
        }
        console.log("Parent Constructor")
    }
    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await data.json();
        console.log(json)
        this.setState({
            user_name: json[0].name,
            user_email: json[0].email,
        })
        console.log("Parent Component Did Mount")
    }
    render() {
        console.log("Parent Render")
        return (
            <div className="border border-black my-4 mx-2 p-4">
                <h1 className="font-bold text-xl">About Us</h1>
                <UserClass name={this.state.user_name} Email={this.state.user_email} />
            </div>

        )
    }
}
export default About;