import User from "./User";
import UserClass from "./UserClass";

export default function AboutUs(){
    return (
        <div >
            <h2>About Us</h2>
            <p>This is our about us page.</p>
            <User name = {"AK-User"}/>
            <UserClass name={"AK-Class"}/>
        </div>
    );
}