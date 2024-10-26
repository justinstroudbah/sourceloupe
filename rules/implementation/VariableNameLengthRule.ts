import ScanRule from "../ScanRule.ts";
import Node from "npm:tree-sitter";

export default class VariableNameLengthRule extends ScanRule{
    inspect(whatToScan: Array<Node>){
        let violatingNodes: Array<Node> = whatToScan
            .filter(scannedNode => 
                scannedNode.text != null && 
                scannedNode.text.length <= 3 
            );
            
        violatingNodes.forEach(node=>{
            this.addViolation(node);
        });
    }
}