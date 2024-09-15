
function ShowFieldData({heading, data, style}) {
    return (
        <div className='text-[14px] '>
            <p className='font-Five'>{heading}</p>
            <p className={`h-10 flex items-center pl-3 w-[15rem] bg-slate-200 text-slate-700 rounded-sm capitalize ${style}`}>{data}</p>
        </div>
    )
}

export default ShowFieldData