import { Link } from "react-router-dom"

function Logo() {
    return(
        <>
        <div className="text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-3 text-[#fafafa]">
        <Link to={"/"}>ShopEase</Link> 
        </div>
        </>
    )
}

export default Logo