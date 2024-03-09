import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
    icon:ReactNode;
    title:string;
    subtitle:string
}

const ReadMore:FC<Props> = ({icon, title, subtitle})=>{
    return (
    <div className="action-card">
        <div className="w-full flex justify-center">
            {icon}
        </div>
        <h1 className="font-bold">{title}</h1>
        <p>{subtitle}</p>
        <Link href="#">Read more</Link>
    </div>
    )
}
export default ReadMore