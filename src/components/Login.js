import react, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { loginAPI } from "../Servise/Operation/userAPI";
const Login = () => {
    const [data, setData] = useState({email:"",password:""});
    const [isshowpass, setisshowpass] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.user)
    const changeHandler = (e) => {
        setData((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    const [fdata,setfdata] = useState([]);
    function submithadnler(e){
        e.preventDefault();
        console.log("Response is ",data);
        dispatch(loginAPI(data.email,data.password,navigate,setfdata,token));
    }
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex flex-col items-center justify-center shadow-lg w-[500px] gap-5 p-8">
                <h1 className="text-3xl font-semibold">
                    Login
                </h1>
                <form
                onSubmit={submithadnler}
                className="flex flex-col gap-5 w-full p-5">
                    <div className="w-full flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            onChange={changeHandler}
                            value={data.email}
                            className="border-gray-400 border-[1px] p-2 pl-8 rounded-md"
                        />
                        <MdOutlineMailOutline  className="mt-[-27px] ml-3"/>
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input
                            type={`${isshowpass ? 'text' : 'password'}`}
                            name="password"
                            id="password"
                            onChange={changeHandler}
                            value={data.password}
                            required
                            className="border-gray-400 border-[1px] p-2 pl-8 rounded-md"
                        />
                        <CiLock className='mt-[-27px] ml-3'/>
                        <span
                        className="mt-[-21px] ml-[350px] rela"
                        onClick={() => setisshowpass(!isshowpass)}>
                            {isshowpass ? (<IoMdEye />) :(<IoMdEyeOff />) }
                        </span>
                    </div>
                    <button className="text-end">Forget Password</button>
                    <button
                    className="bg-blue-600 p-2 rounded-md text-white font-semibold hover:bg-blue-800"
                    type="submit">
                        LOGIN
                    </button>
                </form>
                <button
                onClick={()=>navigate("sign-up")}
                className="mb-5 text-blue-400">
                    Don't have an account? Signup
                </button>
            </div>
        </div>
    )
}

export default Login;