import Link from "next/link"
import { FC, ReactNode } from "react";

interface IProps {
    title:string;
    buttonText:string;
    link:string;
    Icon?:ReactNode
}


export const PageHeader:FC<IProps> = ({title,buttonText,link,Icon}) =>{

    return(
        <div className="w-full flex justify-between items-center px-4 md:px-6">
            <div>
                <p className="text-lg md:text-xl font-bold italic">{title}</p>
            </div>

            <Link href={link}>
                <div className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white px-3 rounded-md md:px-4 py-2 flex items-center gap-1 font-bold text-lg">
                    <p>{buttonText}</p>
                    {Icon && Icon}
                </div>
            </Link>


        </div>

    )
}