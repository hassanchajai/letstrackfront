import UserClass from "../DB/User/UserClass";
import UserContext from "../DB/User/UserContext";

const withUserContext=Component=>props=>(
    <UserContext.Provider value={new UserClass}>
        <Component {...props}></Component>
    </UserContext.Provider>
)
export default withUserContext