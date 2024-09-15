
export const Button = ({ name, type, style, onClick }) => {
  return (
    <div>
      <button type={type} onClick={onClick} className={`text-black hover:text-[#fafafa] bg-[#55AD9B] hover:bg-[#3e9180] h-[2rem] sm:h-[2.4rem] md:h-[2.5rem] my-1 rounded-md ${style}`}>{name}</button>
    </div>
  )
}

