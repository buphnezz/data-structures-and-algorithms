'use strict';

let totalNumberOfNodes = 0;

const countNumberOfNodes = (rootNode) => {
  if (rootNode === null) {
    return;
  }
  
  countNumberOfNodes(rootNode.left);
  totalNumberOfNodes += 1;
  countNumberOfNodes(rootNode.right);
};

return totalNumberOfNodes;
