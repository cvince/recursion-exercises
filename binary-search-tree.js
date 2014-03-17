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
        while(curr.left !== null){
          curr = curr.left;
        }
        this.insert(curr, val);
      }
    }
  };

  C.prototype.arrayToBst = function(array){

    var mid = Math.floor(array.length/2);
    this.bst = new BinaryTree(array[mid]);

    for(var i = 1; i<=mid; i++){
      this.insert(this.bst, array[mid-i]);
      this.insert(this.bst, array[mid+i]);
    }

    return this.bst;

  };

  C.prototype.rangeSearchBst = function(input, min, max){

    var outputArr = [];

    var currR = currL = input;

    while(currL.left !== null && currL.left.root > min){
        currL = currL.left;
        outputArr.unshift(currL.root);
    }

    while(currR.right !== null && currR.right.root < max){
        currR = currR.right;
        outputArr.push(currR.root);
    }

    console.log(outputArr);
  }

  return new C();

}

//testing

var bst = new BST();

var array = [1, 2, 3, 4];

console.log(JSON.stringify(bst.arrayToBst(array)));

console.log(bst.rangeSearchBst(bst.arrayToBst([1,5,6,22,34,46,48,51,63,69,72,83,95]), 7, 64));

