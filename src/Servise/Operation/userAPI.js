import { apiConnector } from '../apiConnection';
import {setToken,setUserData} from '../../store/userSlice'
import { userEndpoint } from '../apis';
import { toast } from 'react-hot-toast';

const {
    USER_SIGNUP,
    USER_LOGIN,
} = userEndpoint;

export function SignupAPI(name, email, password, CNpassword, navigate) {
    return async (dispatch) => {
        try {
            const response = await apiConnector("POST", USER_SIGNUP, { name, email, password, CNpassword });
            console.log("API response.....", response);
            if (!response.success) {
                console.log("API response.....", response);
                throw new Error(response.success);
            }
            toast.success("Signup Successfull");
            navigate('/log-in')
        } catch (error) {
            console.log("SIGNUP API ERROR............", error)
            toast.error("Signup Failed")
            navigate("/sign-up")
        }
    }
}

export function loginAPI(email, password, navigate,setfdata,token) {
    return async (dispatch) => {
        try {
            const response = await apiConnector("POST", USER_LOGIN, { email, password },{Authorization:`Bearer ${token}`})
            console.log("API response ....", response);
            if (!response.success) {
                throw new Error(response.user)
            }
            toast.success("Logined");
            dispatch(setToken(response.token))
            dispatch(setUserData({...response.user}))
            setfdata(response.user);
            localStorage.setItem("token", JSON.stringify(response.token));
            localStorage.setItem("user", JSON.stringify(response.user));
            navigate("/home");
        }
        catch(error) {
            console.log("LOGIN API ERROR............", error)
            toast.error("Login Failed")
        }
    }
}
export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUserData(null))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/home")
    }
  }