import react, { act, useEffect, useState } from "react";
import Footer from '../components/Footer'
import { useForm } from 'react-hook-form'
const Home = () => {
    const [active, setActive] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col gap-5 justify-center items-center absolute opacity-95">
                <h1 className="text-3xl font-semibold">Make a Payment</h1>
                <p>Click the button below and fill out the form to complete your payment.</p>
                <button
                    onClick={() => setActive(true)}
                    className="w-fit p-2 rounded-md bg-blue-600 font-semibold shadow-lg text-white"
                >PAYMENT BUTTON</button>
            </div>
            <div className={`${active ? 'flex' : 'hidden'} flex justify-center items-center w-screen h-[1000px] bg-gray-500 relative`}>
                <div className={`flex-col w-[600px] p-8 rounded-md bg-white shadow-2xl gap-2`}>
                    <h1 className="text-2xl font-semibold">Make a Payment</h1>
                    <form
                        className="flex flex-col gap-5">
                        <div className="flex flex-col rounded-md p-1">
                            <label>To<sup>*</sup></label>
                            <input
                                type="text"
                                name="to"
                                id="to"
                                placeholder="To"
                                className="p-2 rounded-md border-gray-400 border-[1px]"
                                {...register("to", { required: true })} />
                            {
                                errors.to && (
                                    <span>required</span>
                                )
                            }
                        </div>
                        <div className="flex flex-col rounded-md p-1">
                            <label htmlFor="from">From<sup>*</sup></label>
                            <select
                            name="from"
                            id="from"
                            {...register("from",{required:true})}
                            className="p-2 rounded-md border-gray-400 border-[1px]">
                                <option className="text-gray-500 select-none" aria-disabled="true">Select Currency</option>
                                <option value="BTC">BTC</option>
                                <option value="ETH">ETH</option>
                            </select>
                            {
                                errors.from && (<span>required</span>)
                            }
                        </div>

                        <div className="flex flex-col rounded-md p-1">
                            <label>Amount<sup>*</sup></label>
                            <input
                                type="number"
                                name="amount"
                                id="amount"
                                placeholder="Amount"
                                className="p-2 rounded-md border-gray-400 border-[1px]"
                                {...register("amount", { required: true })} />
                            {
                                errors.amount && (
                                    <span>required</span>
                                )
                            }
                        </div>
                        <div className="flex flex-col rounded-md p-1">
                            <label>Description<sup>*</sup></label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Description"
                                className="p-2 rounded-md border-gray-400 border-[1px]"
                                {...register("description", { required: true })} />
                            {
                                errors.description && (
                                    <span>required</span>
                                )
                            }
                        </div>
                        <div className="flex items-center justify-between gap-1 text-white">
                            <button
                                onClick={() => setActive(false)}
                                className="text-xl semibold p-2 w-full text-blue-400 rounded-md text-center">
                                CANCEL
                            </button>
                            <button
                                className="text-xl font-semibold p-2 w-full text-gray-400 bg-slate-100 rounded-md text-center disabled">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Home;