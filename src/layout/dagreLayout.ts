import dagre from '@dagrejs/dagre'
import { Edge, Node, Position } from 'reactflow';
import { Store } from '../state/store';
//create a new directed graph
let graphLayout=new dagre.graphlib.Graph();


// we are assigning an empty object for each new edge
graphLayout.setDefaultEdgeLabel(()=>({}));

const nodeWidth:number=180;
const nodeHeight:number=100;

export function Dagre(nodes:Node[],edges:Edge[],direction:string="TB"){
    // const store=Store();
    const isHorizontal=direction==="LR";
    graphLayout.setGraph({rankdir:direction});
    
    nodes.forEach((node)=>{
        graphLayout.setNode(node.id,{width:nodeWidth,height:nodeHeight});
    });

    edges.forEach((edge)=>{
        graphLayout.setEdge(edge.source,edge.target);
    });

    dagre.layout(graphLayout);

    nodes.forEach((node)=>{
        node.sourcePosition=isHorizontal?Position.Right:Position.Bottom;
        node.targetPosition=isHorizontal?Position.Left:Position.Top;
        return node;
    });

    // store.updateNode(nodes);
    // console.log(store.nodes);

    return nodes;
}
