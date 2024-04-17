import { MessageCircleMore} from "lucide-react";
import { Handle, Position, useNodeId} from "reactflow";
import { store } from "../state/store.ts";



/*
This is the custom node (Text node).

By clicking on a text node, sidebar has been instructed to replace the nodes panel with settings panel and link the selected node with the text panel so that only the selected text node gets the message typed on it, when the user types in the settings panel.

Handle component creates a handle at the mentioned position on the text node.
useNodeId() provides the id of the node that is using this hook. Useful!
*/



export function TextNode(){
    const seller=store();
    const id=useNodeId();
    const node=seller.nodes.find((node)=>node.id===id);
   
    return(
        <>
            <Handle type="source"  position={Position.Right} className=" border-[1.5px] border-white size-[9px]"/>
            
            <div id="nodeContainer"  className="h-[100%] resize-y break-words rounded-[7px] shadow-[1px_5px_10px_0px_rgba(0,0,0,0.3)] " onClick={()=>{
                seller.onSideBarComponentTrackChange("userInput");
                seller.setOnSelectNodeId(id);
            }}>
                <div className="h-[23px] bg-green-200 flex flex-row rounded-t-[7px] justify-between py-1 px-2 text-sm font-sans">
                    <div className="flex flex-row w-[70%] justify-baseline items-center gap-1">
                    <MessageCircleMore fill="white" size={15} className="pt-1" strokeWidth={2}/>
                    <span className=" h-fit font-bold">Send Message</span>
                    </div>
                    <div className="w-[30%] flex justify-end">
                       <img src="WhatsApp.svg"></img>
                    </div>
                </div>
                <div className="  min-h-[70%] h-fit bg-white rounded-b-[7px] p-2 pl-3 overflow-auto ">
                    <div className=" text-wrap text-sm min-h-[29px]">
                    {node?.data.data}
                    </div>
                </div>
            </div>
            <Handle type="target" position={Position.Left} className=" border-[1.5px] border-white size-[9px]" />
        </>
             
    )
}


