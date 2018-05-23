'use strict';

const traverseBF = function(KAryTree) {
  queue.enqueue(this._root);
  
  currentTree = queue.dequeue();

  while (currentTree) {
    for (let i = 0; length = currentTree.children.length; i++) {
      queue.enqueue(currentTree.children[i]);
    }

    return(currentTree);
    currentTree = queue.dequeue();
  }
};
