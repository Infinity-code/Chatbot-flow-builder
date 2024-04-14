import { MessageCircleMore, MoveDownRight} from "lucide-react";
import { Handle, NodeResizeControl, Position, useNodeId} from "reactflow";
import { Store } from "../state/store.ts";
export function TextNode(){
    const store=Store();
    NodeResizeControl
    /*
    useNodeId() provides the id of the node that is using this hook. Useful!
    */
    const id=useNodeId();
    const node=store.nodes.find((node)=>node.id===id);
   
    return(
        <>
            <NodeResizeControl style={{
                background: 'transparent',
                border: 'none',
                }} minHeight={80} minWidth={250} maxWidth={250} >
                <MoveDownRight size={12} style={{ position: 'absolute', right: 5, bottom: 5,}}/> 
            </NodeResizeControl>
            <Handle type="source"  position={Position.Right} className=" border-[1.5px] border-white size-[9px]"/>
            <div id="nodeContainer"  className="h-[100%] resize-y break-words rounded-[7px] shadow-[1px_5px_10px_0px_rgba(0,0,0,0.3)] " onClick={()=>{
                store.onSideBarComponentTrackChange("userInput");
                store.setOnSelectNodeId(id);
            }}>
                <div className="h-[23px] bg-green-200 flex flex-row rounded-t-[7px] justify-between p-1 text-sm font-sans">
                    <div className="flex flex-row w-[70%] justify-baseline items-center gap-1">
                    <MessageCircleMore fill="white" size={15} className="pt-1" strokeWidth={2}/>
                    <span className=" h-fit font-bold">Send Message</span>
                    </div>
                    <div className="w-[30%] flex justify-end">
                       <img src="./src/assets/WhatsApp.svg"></img>
                    </div>
                </div>
                <div className="  h-[70%]  bg-white rounded-b-[7px] p-2 pl-3 overflow-auto ">
                    {/* <textarea className="h-full text-sm w-full resize-none" value={node?.data.data} readOnly /> */}
                    <div className=" text-wrap text-sm ">
                    {node?.data.data}
                    </div>
                    
                    
                </div>
            </div>
            <Handle type="target" position={Position.Left} className=" border-[1.5px] border-white size-[9px]" />
        </>
             
    )
}


