import { jwtDecode } from "jwt-decode";
import useUserStore from "../../store/useUserStore";
import { GoogleLogin } from "@react-oauth/google";
import { doGetUser, doPostUser } from "../../service/userService";

function Login() {

    const setUser = useUserStore((state) => state.setUser);
    const handleLoginSuccess = async (credentialResponse) => {
        const userInfo = jwtDecode(credentialResponse.credential);
        console.log(userInfo);
        try {
            const responseData = await doGetUser(`?search=${userInfo.sub}`);
            if (responseData.length == 0) {
                const newUser = {
                    name: userInfo.name,
                    googleId: userInfo.sub,
                    avatar: userInfo.picture,
                    role: "CUSTOMER"
                };
                try {
                    await doPostUser("", newUser);
                    console.log("User created!");
                    setUser(newUser);
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log(responseData[0]);
                setUser(responseData[0]);
            }
        } catch (error) {
            const newUser = {
                name: userInfo.name,
                googleId: userInfo.sub,
                avatar: userInfo.picture,
                role: "CUSTOMER"
            };
            try {
                await doPostUser("", newUser);
                console.log("User created!");
                setUser(newUser);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <GoogleLogin onSuccess={handleLoginSuccess} />
        </>
    )
}

export default Login;