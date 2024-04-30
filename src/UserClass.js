import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DOB: 0,
        }
        console.log("Child Constructor")
    }

    componentDidMount() {
        console.log("This is Child Component did mount")
    }
    render() {
        const { name, Email } = this.props
        const { DOB } = this.state
        console.log("Child Render")

        return (
            <div className="about-user">
                <h2>Name : {name}</h2>
                <h3>Email : {Email}</h3>
                <h3>Location : Bengaluru</h3>
                <h3>Contact : 8096974312</h3>
                <h3>DOB : {DOB}</h3>
                <button onClick={() => {
                    this.setState({
                        DOB: this.state.DOB + 1,
                    })
                }}>Click to update DOB</button>

            </div >
        )
    }
}
export default UserClass;