import { UserInputMessage } from "./settings/userInputMessage";

import { TextBox } from "./nodeCompartment/textbox";

export function SideBar({variant,onDragStart,onDragEnd}:{onDragStart?:((e:any)=>void),onDragEnd?:((e:any)=>void),variant:string}){
    switch(variant){
        case("userInput"):
            return(
                <UserInputMessage/>
            )
        default:
            return (
                <TextBox onDragStart={onDragStart} onDragEnd={onDragEnd}/>
            )
    }
    
}