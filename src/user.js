import { useState } from "react";

const User = ({ Skill, name }) => {
    const [count] = useState(0);
    return (
        <div className="about-user">
            <h2>Iam {name}r</h2>
            <h3>{Skill}</h3>
            <h3>Location : Bengaluru</h3>
            <h3>Contact : 8096974312</h3>
            <h4>count: {count}</h4>
        </div>
    )
}
export default User;