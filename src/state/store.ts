import { useShallow } from "zustand/react/shallow";
import { Actions, State, useStore } from "./warehouse";


/*
Selector has the states and actions in the form of key-value pairs, which is useful in accessing.
By passing selector into the useStore hook, one can access the state or actions just like accessing the values of a key in an object. useShallow is a hook provided by zustand which checks for any changes in the state. This optimizes the re-renders.

Now that useStore with the appropriate selector has been exported, any component can use any states or actions by calling store() function.

*/

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
    onDeleteEdges:store.onDeleteEdges,

  });

  export function store(){
    const store=useStore(useShallow(selector));
    return store;
  }