import { MessageCircleMore } from "lucide-react";

type Props={
    onDragStart?:(e:any)=>void,
    onDragEnd?:(e:any)=>void,
}

export function TextBox({onDragStart,onDragEnd}:Props){
    return(
        <div className="p-3">
            <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd} className='border border-[#8075c1] h-[100px] rounded-lg flex flex-col justify-center items-center min-h-10 min-w-20 bg-white'>
            <MessageCircleMore color='#8075c1' className='' />
            <span className='text-[#8075c1]'>Message</span>
            </div>
        </div>
        
    )
}