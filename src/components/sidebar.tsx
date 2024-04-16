import { UserInputMessage } from "./settings/userInputMessage";

import { TextBox } from "./nodeCompartment/textbox";

/* 
This hosts the nodes panel or the settings panel, whichever is called.

One can add different nodes apart from text node by adding the corresponding draggable components here.

*/
export function SideBar({variant,onDragStart,onDragEnd}:{onDragStart?:((e:any)=>void),onDragEnd?:((e:any)=>void),variant:string}){
    switch(variant){
        case("userInput")://Settings panel
            return(
                <UserInputMessage/>
            )
        default://Nodes panel
            return (
                <div className="grid grid-cols-2 h-full">
                    <TextBox onDragStart={onDragStart} onDragEnd={onDragEnd}/>
                </div>
            )
    }
    
}