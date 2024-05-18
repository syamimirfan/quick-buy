"use client"

import { IconType } from "react-icons"

interface ButtonProps {
    label: string,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    custom?: string,
    icon?: IconType,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
    label,
    disabled,
    outline,
    small,
    custom,
    icon: Icon,
    onClick
}) => {
    return ( 
      <button className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 border-none
       transition w-full bg-secondary-color flex items-center justify-center gap-2 ${outline? "bg-white" : "bg-secondary-color"}
       ${outline? "text-sm font-light" : "text-md font-semibold"} ${small? "py-2 px-2 border-[1px]" : "py-3 px-4 border-2 "}
       ${custom? custom : ""} text-main-color`}>
         {Icon && <Icon size={24}/>}
         {label}
      </button>
     );
}
 
export default Button;