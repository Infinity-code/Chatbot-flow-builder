import { nanoid } from "nanoid";
import {  Edge, EdgeChange,  MarkerType,  Node,  NodeChange, applyEdgeChanges, applyNodeChanges } from "reactflow";
import { create } from "zustand";

export type State={
    nodes:Node[],
    edges:Edge[],
    sideBarComponentTrack:string,
    onSelectNodeId:string|null,
}

export type Actions={
    onNodesChange: ((changes:NodeChange[])=>void),
    onEdgesChange:((changes:EdgeChange[])=>void),
    addEdge:((data:any)=>void),
    createNode:((type:string,data:any,position:{x:number,y:number})=>void),
    onsideBarComponentTrackChange:((text:string)=>void),
    setOnSelectNodeId:((id:string|null)=>void),
    updateNodeData:((nodeId:string|null,data:string)=>void),
    updateNode:((nodes:Node[])=>void),
}

export const useStore=create<State&Actions>((set,get)=>({
    nodes:[],
    edges:[],
    sideBarComponentTrack:"textNode",
    onSelectNodeId:"",

    onsideBarComponentTrackChange(name:string){
        set({
            sideBarComponentTrack:name
        });
    },

    onNodesChange(changes:NodeChange[]){
        set({
            nodes:applyNodeChanges(changes,get().nodes)
        });
    },

    updateNode(nodes:Node[]){
        set({
            nodes:nodes
        })
    },

    updateNodeData(nodeId:string|null,data:string){
        set({
            nodes:get().nodes.map((node)=>{
                if(node.id===nodeId){
                    node.data={...node.data,data
                        }
                }
                return node;
            })
        })
    },

    onEdgesChange(changes:EdgeChange[]){
        set({
            edges:applyEdgeChanges(changes,get().edges)
        });
    },

    createNode(type:string,data:any,position:{x:number,y:number}){
        const id=nanoid(6);
        const node:Node={
            id,
            type,
            position:{x:position.x,y:position.y},
            data,
            selected:false,
        }
        set({
            nodes:[...get().nodes,node]
        });
    },

    addEdge(data:any){
        const id=nanoid(6);
        const markerEnd={
            type:MarkerType.ArrowClosed,
            width:30,
            height:200,
            
        }
        const edge={id,markerEnd,animated:true, ...data};
        set({
            edges:[...get().edges,edge]
        });
        // console.log(edge)
    },

    setOnSelectNodeId(id:string|null) {
        set({
            onSelectNodeId:id
        });
    },

})); 