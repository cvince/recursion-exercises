'use strict';

function BinaryTree(val){
  return val? ({
    root: val,
    left: null,
    right: null
  }) : null;
}

function BST(){

  var bst;

  function C(){
    this.bst = new BinaryTree(null);
  }

  C.prototype.insert = function(tree, val){

    var curr = tree;

    if(val>=tree.root){
      if(tree.right === null){
        tree.right = new BinaryTree(val);
      }else{
        while(curr.right!== null){
          curr = curr.right;
        }
        this.insert(curr, val);
      }
    }if(val<tree.root){
      if(tree.left === null){
        tree.left = new BinaryTree(val);
      }else{
        while(curr.left!== null){
          curr = curr.left;
        }
        this.insert(curr, val);
      }
    }
  };

  C.prototype.array = function(array){

    var mid = Math.ceil(array.length/2);
    this.bst = new BinaryTree(array[mid]);
  // C.prototype.populate = function(array){

  //   var mid = Math.ceil(array.length/2);

  //   binaryTree.root = array[mid];
  //   binaryTree.root.left = BinaryTree(array[mid-1]);
  //   binaryTree.root.right = BinaryTree(array[mid+1]);

  // }

  };


  return new C();

}



{root: 5, left: null, right: null};


{root: 5, left: null, right: {root: 7, left: null, right: null}}
