import { Link } from "react-router-dom"

function Logo() {
    return (
        <>
            <div className="text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-3 text-[#fafafa]">
                <Link to={"/"}><div className=" text-[#0062FF] text-[25px] tracking-[0.5px]">
                    <span className=" text-[#124EB5] text-[25px]">WIZ</span>TIE
                </div></Link>
            </div>
        </>
    )
}

export default Logo