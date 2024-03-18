import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function Header() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(-1);
    return <div className={`bg-black min-h-[40px] sm:h-10 ${menu == 1 ? " mb-4 h-40" : ""} sticky z-10 top-0 w-screen flex justify-between rounded-md `}>
        <ul className={`flex gap-2 sm:flex-row ${menu == 1 ? " flex-col" : " "} m-2`}>
            <li><button className={` ${menu == 1 ? " inline-block" : " hidden"} sm:inline-block rounded-md px-2 hover:bg-slate-500 hover:text-white transition-all`} onClick={() => { navigate("/home") }}>Home</button></li>
            <li><button className={`${menu == 1 ? " inline-block" : " hidden"}  sm:inline-block rounded-md px-2 hover:bg-slate-500 hover:text-white transition-all`} onClick={() => { navigate("/login") }}>LogIn</button></li>
            <li><button className={`${menu == 1 ? " inline-block" : " hidden"} sm:inline-block rounded-md px-2 hover:bg-slate-500 hover:text-white transition-all`} onClick={() => { navigate("/signup") }}>SignUp</button></li>
            <li><button className={`${menu == 1 ? " inline-block" : " hidden"} sm:inline-block rounded-md px-2 hover:bg-slate-500 hover:text-white transition-all`} onClick={() => { navigate("/contactUs") }}>Contact Us</button></li>
        </ul>
        <button onClick={() => { setMenu(menu * -1) }} className={`${menu == 1 ? " absolute pt-1 top-1 right-0" : ""} sm:hidden mr-2`}><img src="./menu.svg" className="h-7 items-center" alt="" /></button>
    </div>
}