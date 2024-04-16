import { ArrowLeft} from "lucide-react";
import { store } from "../../state/store";

/*This is the settings panel which would replace the nodes panel when a node is selected.
                    
 Typing in the text area will pass the text message to the selected text node
*/
export function UserInputMessage(){
    const seller=store();
    const node=seller.nodes.find((node)=>node.id===seller.onSelectNodeId);
    const value=node?.data.data;
    return(
        <div className="w-full h-fit border-b pb-4 border-slate-300 flex flex-col gap-1">
            <div className="border-b border-t-slate-300 h-[24px] grid grid-cols-9 ">
                <div className="flex justify-center items-center col-span-1">
                    <button onClick={()=>{
                            seller.onSideBarComponentTrackChange("customNodes");
                    }}>
                    <ArrowLeft size={18} />
                    </button>
                
                </div>
                
                <label className=" text-sm  col-span-7 text-center flex justify-center items-center-1">Message</label>
            </div>
            <div className="text-slate-300 text-sm pl-1">Text</div>
            <div className="h-fit w-full p-1">
                <textarea placeholder="Type message..." className=" flex bg-transparent w-full  h-[80px] border border-gray-300 rounded-md placeholder: text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-hsl(240 5.9% 10%) px-3 py-2 shadow-sm" value={value} onChange={(e)=>{
                    seller.updateNodeData(seller.onSelectNodeId,e.target.value)
                }}/>
            </div>
        </div>
    )
}