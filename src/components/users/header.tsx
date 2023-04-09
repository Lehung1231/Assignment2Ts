import { Link } from "react-router-dom"
const Header = () => {
    return <>
        <div className="container mx-auto flex gap-4 justify-start items-center ml-96 p-2 ">
            <img className="w-[50px]" src="/logo.png" alt="" />
            <input className="grow-1 w-96 rounded-xl" type="text" placeholder="search"/>
        </div>
        </>
}

export default Header