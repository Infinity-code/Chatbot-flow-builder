import ReactFlow, {  Connection, NodeOrigin} from 'reactflow';
import { useCallback, useMemo} from 'react';
import { SideBar } from './components/sidebar';
import { store } from './state/store';
import 'reactflow/dist/style.css';
import './App.css'
import { TextNode } from './nodes/textNode';
import { TitleBar } from './components/titlebarCompartment/titleBar';

/*
Setting the position of node relative to its coordinates
*/
const nodeOrigin:NodeOrigin=[0.5,1];

/*
To let the reactflow know about any custom nodes created and to be used, an object containing a keyword and the name of the custom node component shpuld be added. This object be passed to nodeTypes attribute in Reactflow component, otherwise, a default node would render.
*/
const customNodes={
  "textUpdater":TextNode
}

let set=new Set();

export function removeEdge(id:string){
  set.delete(id);
}



function App() {
  const seller=store();
  
  /*
    on dropping onto the react-flow pane, a new text node is formed
  */
  const onDrop=useCallback((e:any)=>{
    e.preventDefault();
    seller.createNode("textUpdater",{data:""},{"x":e.clientX,"y":e.clientY});
    
  },[]);

  //to check if there are more than one node with empty target handle

  const isValidFlow=useMemo(()=>{
    seller.edges.map((edge)=>{
      set.add(edge.target);
    });
    let temp=set.size;
    return temp;
  },[seller.edges]);

  //To make sure atmost one edge is connected to source handle
  


  const isValidConnection=useCallback((connection:Connection)=>{
    let edgeCount=1;
    if(seller.edges.length>0){
      seller.edges.map((edge)=>{
        if(edge.source===connection.source){
          edgeCount=edgeCount+1;
        }
      })
    }
    return edgeCount<=1?true:false;
  },[seller.edges]);

   return(
    <div className='identifier h-screen w-screen flex flex-col '  >
          <TitleBar isValidFLow={isValidFlow} nodes={seller.nodes}/>
      <div className='h-[92%] flex flex-row'>
        <div className='dropZone w-[75%] h-[100%] ' onDragOver={onDragOver}  onDrop={onDrop}>
          
        <ReactFlow
          nodeTypes={customNodes}
          nodes={seller.nodes}
          edges={seller.edges}
          nodeOrigin={nodeOrigin}
          onNodesChange={seller.onNodesChange}
          onEdgesChange={seller.onEdgesChange}
          onConnect={seller.addEdge}
          isValidConnection={isValidConnection}
          onEdgesDelete={(seller.onDeleteEdges)}
        >
        </ReactFlow>
        </div>
        <div className='w-[25%] h-full border-l-2 border-slate-200 bg-white overflow-auto'>
          <div className='h-fit w-full'>
          <SideBar variant={seller.sideBarComponentTrack}/>
          </div>
        
        </div>
        
      </div>
    </div>
   )
}



const onDragOver=(e:any)=>{
  e.preventDefault();
}

export default App;
