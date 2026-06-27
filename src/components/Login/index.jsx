import { jwtDecode } from "jwt-decode";
import useUserStore from "../../store/useUserStore";
import { GoogleLogin } from "@react-oauth/google";
import { doGetUser, doPostUser } from "../../service/userService";

function Login() {

    const setUser = useUserStore((state) => state.setUser);
    const handleLoginSuccess = async (credentialResponse) => {
        const userInfo = jwtDecode(credentialResponse.credential);
        console.log(userInfo);
        const responseData = await doGetUser(`?googleId=${userInfo.googleId}`);
        console.log(responseData);
        if (responseData.length == 0) {
            const newUser = {
                name: userInfo.name,
                googleId: userInfo.googleId,
                avatar: userInfo.picture,
                role: "CUSTOMER"
            };
            try {
                await doPostUser("", newUser);
                console.log("User created!");
                console.log(newUser);
                setUser(newUser);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("GoolgeId found");
            console.log(responseData[0]);
            setUser(responseData[0]);
        }
    }

    return (
        <>
            <GoogleLogin onSuccess={handleLoginSuccess}/>            
        </>
    )
}

export default Login;