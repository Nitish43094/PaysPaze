import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Servise/Operation/userAPI";
const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { userData, token } = useSelector((state) => state.user)
    return (
        <div className="w-full h-[60px] bg-blue-600 shadow-md shadow-blue-950 flex justify-between items-center">
            <button
                onClick={() => navigate("/home")}
                className="ml-5 text-2xl">
                <span className="text-green-500 font-semibold">Pay</span>
                <span className="text-orange-300 font-semibold">Spaze</span>
            </button>
            {
                userData === null ? (
                    <div className="mr-5 flex gap-8 text-white">
                        <button
                            onClick={() => {
                                navigate("/log-in");
                            }}
                            className="p-2 rounded-md w-[80px] shadow-sm shadow-black">
                            LOG IN
                        </button>
                        <button
                            onClick={() => {
                                navigate("/sign-up");
                            }}
                            className="p-2 rounded-md w-[90px] shadow-sm shadow-black">
                            SIGN UP
                        </button>
                    </div>
                )
                    :
                    (
                        <button
                        onClick={()=>dispatch(logout(navigate))}
                        className="p-2 font-semibold rounded-md w-[90px] shadow-sm shadow-black bg-red-800 text-white mr-5"
                        >Log-Out
                        </button>
                    )
            }


        </div>
    )
}

export default NavBar;