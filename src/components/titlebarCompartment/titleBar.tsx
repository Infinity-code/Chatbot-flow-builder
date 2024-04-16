import {  useEffect, useState } from "react";
import { Node } from "reactflow";
import '../../App.css';

/* This is the title bar which hosts the save button and also intimates the user if more than one node has EMPTY TARGET HANDLE, using a pop up message.

.titlebar, .titleBarUnsaved and .titleBarSave are the classnames used in the label element (pop up message).

*/

export function TitleBar({isValidFLow,nodes}:{isValidFLow:number,nodes:Node[]}){
    const [popup,setPopup]=useState({
        "label":"",
        "visible":"titlebar"
    })

    useEffect(()=>{
        const interval=setTimeout(()=>{
            setPopup({
                "label":"",
                "visible":"titlebar"
            });
        },3000);
        return ()=> clearInterval(interval);
    },[popup.label]);
    

    return(
        <div className=' h-[8%] bg-slate-200 grid grid-flow-col grid-cols-4 min-h-10'>
            <div className='col-span-3 flex justify-center items-center'>
                <label className={`${popup.visible} fixed top-2 flex justify-center items-center w-fit  p-3 h-[35px] font-bold text-xs rounded-md`}>{popup.label}</label>
            </div>
            <div className='cols-span-1 flex justify-center items-center'>
                <button type='button' className='  border-0 border-blue-600 bg-white text-xs flex justify-center items-center min-h-7 text-blue-600 rounded-lg w-[130px] shadow-md' onClick={()=>{
                    if(isValidFLow<nodes.length-1 || nodes.length==0 ){
                        setPopup({
                            "label":"Cannot save flow",
                            "visible":"titleBarUnsaved"
                        });
                    }else{
                        setPopup({
                            "label":"Flow saved",
                            "visible":"titleBarSave"
                        })
                    }
                }}>Save Changes</button>
            </div>
        </div>
    )
}