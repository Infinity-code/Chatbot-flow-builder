import ReactFlow, { Edge, Node, NodeOrigin, Panel} from 'reactflow';
import { useCallback} from 'react';
import { SideBar } from './components/sidebar';
import { Store } from './state/store';
import 'reactflow/dist/style.css';
import './App.css'
import { Dagre } from './layout/dagreLayout';
import { TextNode } from './nodes/textNode';

const nodeOrigin:NodeOrigin=[0.5,0.5];

const customNodes={
  "textUpdater":TextNode
}

function App() {
  const store=Store();
  const onDrop=useCallback((e:any)=>{
    e.preventDefault();
    if(e.target.classList.contains("react-flow__pane")){
      e.target.classList.remove("bg-slate-100");
    }
    
    store.createNode("textUpdater",{data:""},{"x":e.clientX,"y":e.clientY});
    
  },[]);

    

   return(
    <div className='identifier h-screen w-screen flex flex-col '  >
      <div className=' h-[8%] bg-slate-200 flex justify-end p-2 pr-20 min-h-10'>
          <button type='button' className=' border-0 border-blue-600 bg-white text-sm min-h-7 pb-1 text-blue-600 rounded-lg w-[130px] shadow-md' >Save Changes</button>
      </div>
      <div className='h-[92%] flex flex-row'>
        <div className='dropZone w-[80%] h-[100%] ' onDragOver={onDragOver} onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
        <ReactFlow
          nodeTypes={customNodes}
          nodes={store.nodes}
          edges={store.edges}
          nodeOrigin={nodeOrigin}
          onNodesChange={store.onNodesChange}
          onEdgesChange={store.onEdgesChange}
          onConnect={store.addEdge}
          elevateNodesOnSelect={true}
          // preventScrolling={false}
        >
          <Panel position='top-right' >
              <button >Vertical </button>
              <button >Horizontal</button>
          </Panel>
        </ReactFlow>
        </div>
        <div className='w-[20%] h-full border-l-2 border-slate-200 bg-white'>
          <div className='h-fit w-full border-b border-b-slate-300'>
          <SideBar variant={store.sideBarComponentTrack}/>
          </div>
        
        </div>
        
      </div>
    </div>
   )
}



const onDragOver=(e:any)=>{
  e.preventDefault();
  e.dataTransfer.dropEffect="copy";
}

const onDragEnter=(e:any)=>{
  
  if(e.target.classList.contains("react-flow__pane")){
    e.target.classList.add("bg-slate-100");
  }
  
}

const onDragLeave=(e:any)=>{
  if(e.target.classList.contains("react-flow__pane")){
    e.target.classList.remove("bg-slate-100");
  }
}



export default App
