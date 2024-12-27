import react, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { SignupAPI } from "../Servise/Operation/userAPI";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
const Signup = () => {
    const [data, setData] = useState({ name: "", email: "", password: "", CNpassword: "" });
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isshowpass, setisshowpass] = useState(false)
    const [isCNshowpass,setisCNshowpass] = useState(false)
    const changeHandler = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    function submithadnler(e) {
        e.preventDefault();
        console.log("Response is ", data);
        dispatch(SignupAPI(data.name, data.email, data.password, data.CNpassword, navigate));
    }
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex flex-col items-center justify-center shadow-md w-[500px] gap-5 p-8">
                <h1 className="text-3xl font-semibold">
                    Signup
                </h1>
                <form
                    onSubmit={submithadnler}
                    className="flex flex-col gap-3 w-full p-5">
                    <div className="w-full flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            onChange={changeHandler}
                            placeholder="Name"
                            value={data.name}
                            className="border-gray-400 border-[1px] p-2 rounded-md"
                        />
                    </div>
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
                    <div className="w-full flex flex-col relative">
                        <label htmlFor="password">Password</label>
                        <input
                            type={`${isshowpass ? "text" : "password"}`}
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
                    <div className="w-full flex flex-col mt-3">
                        <label htmlFor="CNpassword">Conform Password</label>
                        <input
                            type={`${isCNshowpass ? 'text' : 'password'}`}
                            name="CNpassword"
                            id="CNpassword"
                            onChange={changeHandler}
                            value={data.CNpassword}
                            required
                            className="border-gray-400 border-[1px] p-2 pl-8 rounded-md"
                        />
                        <CiLock className='mt-[-27px] ml-3'/>
                        <span
                        onClick={() => setisCNshowpass(!isCNshowpass)}
                        className="mt-[-21px] ml-[350px]">
                            {isCNshowpass ? (<IoMdEye />) :(<IoMdEyeOff />) }
                        </span>
                    </div>
                    <button
                        className="bg-blue-600 mt-5 p-2 rounded-md text-white font-semibold hover:bg-blue-800"
                        type="submit">
                        SIGNUP
                    </button>
                </form>
                <button
                    onClick={() => navigate("sign-up")}
                    className="mb-5 text-blue-400">
                    I have an account. Login
                </button>
            </div>
        </div>
    )
}

export default Signup;