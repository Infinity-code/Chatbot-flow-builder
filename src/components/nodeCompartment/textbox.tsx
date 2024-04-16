import { MessageCircleMore } from "lucide-react";

type Props={
    onDragStart?:(e:any)=>void,
    onDragEnd?:(e:any)=>void,
}
//This is the draggable element present in the nodes panel and dragging this and dropping over the react-flow pane will create a text node.
export function TextBox({onDragStart,onDragEnd}:Props){
    return(
        <div className="p-3">
            <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd} className='border border-[#8075c1] h-[60px] rounded-lg flex flex-col justify-center items-center min-h-10 min-w-20 bg-white'>
            <MessageCircleMore color='#8075c1' className='' size={20} />
            <span className='text-[#8075c1] text-sm'>Message</span>
            </div>
        </div>
        
    )
}