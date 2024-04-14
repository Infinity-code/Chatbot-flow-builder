import { useShallow } from "zustand/react/shallow";
import { Actions, State, useStore } from "./warehouse";

export const selector=(store:State&Actions)=>({
    nodes: store.nodes,
    edges: store.edges,
    sideBarComponentTrack:store.sideBarComponentTrack,
    onSelectNodeId:store.onSelectNodeId,
    
    onNodesChange:store.onNodesChange,
    onEdgesChange:store.onEdgesChange,
    addEdge: store.addEdge,
    createNode:store.createNode,
    onSideBarComponentTrackChange:store.onsideBarComponentTrackChange,
    setOnSelectNodeId:store.setOnSelectNodeId,
    updateNodeData:store.updateNodeData,
    updateNode:store.updateNode,
  });

  export function Store(){
    const store=useStore(useShallow(selector));
    return store;
  }