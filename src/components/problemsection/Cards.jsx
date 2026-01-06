import React from 'react'
import { MdBluetoothConnected, MdBatteryCharging20 } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaCloud, FaCheckCircle } from "react-icons/fa";
import { TbJumpRope } from "react-icons/tb";
import { PiSmileySadLight } from "react-icons/pi";
import { IoMdWarning } from "react-icons/io";
import Feature from './Feature'
import { useNavigate } from 'react-router-dom';

const Cards = () => {

    const navigate = useNavigate()

    return (
        <div className="relative flex flex-col lg:flex-row  justify-center gap-10 w-full max-w-6xl">

            <div className="w-full lg:w-1/2 border border-[#3a5d70] rounded-2xl p-5 bg-[#151F25]">
                <div className="flex gap-2 items-center p-2">
                    <IoMdWarning className="text-[#9DB0B9] text-xl" />
                    <p>The Problem</p>
                </div>

                <hr className="border-[#3B4B54]" />

                <div className="my-5 space-y-4">
                    <Feature icon={<TbJumpRope />} title="Tangled wires" text={"Wasting valuable time untangling cables every time you want to listen."}/>
                    <Feature icon={<MdBatteryCharging20 />} title="Low Battery Anxiety" text={"Headphones dying in the middle of your favorite song or workout."} />
                    <Feature icon={<PiSmileySadLight />} title="Uncomfortable Fit" text={"Hard plastic earbuds that cause pain and fatigue after just an hour."} />
                </div>
            </div>

            <div className="hidden lg:flex absolute top-2/5 left-1/2 -translate-x-1/2 items-center justify-center w-16 h-16 rounded-full border-5 border-[#3B4B54] bg-[#11222B]">
                <span className="text-[#9DB0B9] font-semibold">VS</span>
            </div>

            <div className="w-full lg:w-1/2 border border-[#2BADEE] bg-[#1e3b4a] rounded-2xl p-5">
                <div className="flex gap-2 items-center p-2">
                    <FaCheckCircle className="text-[#2BADEE] text-xl" />
                    <p>The Solution</p>
                </div>

                <hr className="border-[#576972]" />

                <div className="my-5 space-y-4">
                    <Feature icon={<MdBluetoothConnected className="text-[#2BADEE]" />} title="Wireless Freedom" text={"Instant Bluetooth 5.0 connection with zero lag for seamless audio."}  />
                    <Feature icon={<AiFillThunderbolt className="text-[#2BADEE]" />} title="40-Hour Playtime" text={"All-day battery life plus rapid charging capabilities when you need it."} />
                    <Feature icon={<FaCloud className="text-[#2BADEE]" />} title="Cloud-Soft Comfort" text={"Premium memory foam that molds to your ears for all-day listening."} />
                </div>

                <div className="flex flex-col gap-2">
                    <button className="bg-[#2BADEE] hover:bg-[#1388c3] text-white px-6 py-4 rounded-lg 
                    font-semibold transition active:scale-95"
                    onClick={()=>{
                        navigate("/order")
                    }}
                    >
                        Upgrade Your Sound →
                    </button>
                    <p className="text-sm text-gray-400 text-center">
                        30-days money-back guarantee
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards
