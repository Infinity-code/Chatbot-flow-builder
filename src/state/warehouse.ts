import { nanoid } from "nanoid";
import {  Edge, EdgeChange,  MarkerType,  Node,  NodeChange, applyEdgeChanges, applyNodeChanges } from "reactflow";
import { create } from "zustand";
import { removeEdge } from "../App";

// STATE MANAGEMENT USING ZUSTAND

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
    onDeleteEdges:((edges:Edge[])=>void),
}

/*
creates a store which holds all the states and any actions. useStore is a hook which is used to access the states and actions
*/

export const useStore=create<State&Actions>((set,get)=>({
    nodes:[],
    edges:[],
    sideBarComponentTrack:"textNode",
    onSelectNodeId:"",

    /*keeps track of the "navigation" of the sidebar. By default it has nodes panel but when clicked on a node the settings panel replaces the nodes panel
    */
    onsideBarComponentTrackChange(name:string){
        set({
            sideBarComponentTrack:name
        });
    },

    /*updates the flow's state by taking NodeChange array. Any changes (changes defined in the type NodeChange) to node and the flow re-renders.
    */
    onNodesChange(changes:NodeChange[]){
        set({
            nodes:applyNodeChanges(changes,get().nodes)
        });
    },

    /*updates the flow's state by taking EdgeChange array. Any changes (chnages defined in the type EdgeChange) to an edge and the flow re-renders
    */
    onEdgesChange(changes:EdgeChange[]){
        set({
            edges:applyEdgeChanges(changes,get().edges)
        });
            
    },

    /*this will update the data on the nodes as and when something is typed in the textfield on the right( setting panel).
    */
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
    

    /*creates a node when dragged (from nodes panel) and dropped onto the react-flow pane
    */
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

    /*creates an edge when an edge is drawn between two nodes
    */
    addEdge(data:any){
        const id=nanoid(6);
        const markerEnd={
              type:MarkerType.ArrowClosed,
        }
        const edge={id,markerEnd, ...data};
        
        set({
            edges:[...get().edges,edge]
        });
    },

    /*when an edge is deleted, the set which holds all the unique (unique target source. No two edges in this set will have same target source) edges gets updated.
    */
    onDeleteEdges(edges:Edge[]){
        for(const {target} of edges){
            removeEdge(target);
        }
    },

    /*when a node is selected, its corresponding node id is sent to the settings panel so that the message that has been typed is sent to selected node only.
    */
    setOnSelectNodeId(id:string|null) {
        set({
            onSelectNodeId:id
        });
    },

})); 