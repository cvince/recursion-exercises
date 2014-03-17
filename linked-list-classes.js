'use strict';

//{head: { val: 1, next: { val: 3, next: {val: 7, next: null}}}}

function ListNode (value){
  return { val: value, next: null };
}

function LL(){
    this.head = null;
}

LL.prototype = {

  empty: function(){
    return this.head === null ? true : false;
  },

  size: function(){
    var counter = 1;
    if(this.head === null){
      return 0;
    }else{
      var curr = this.head;
      while(curr.next !== null){
        curr = curr.next;
        counter++;
        if(curr.next === null){
          return counter;
        }
      }
    }
  },


  push: function(element){

    var newNode = new ListNode(element);

    if(this.empty() === true){
      this.head = newNode;
    }else{
      var curr = this.head;
      while(curr.next !== null){
        curr = curr.next;
      }
      curr.next = newNode;
    }

    var output = this.head;
    return output;

  },

  pop: function(pos){

    if(!pos && pos!==0 || pos>=this.size() || this.empty()===true){
      return false;
    }
    else{
      var curr = this.head;
      for(var i = 0; i<pos-1; i++){
        curr = curr.next;
      }
      if(curr.next===null){
        curr = null;
      }
      if(pos===0){
        this.head = curr.next;
      }else{
        curr.next = curr.next.next;
      }

    }

    var output = this.head;
    return output;

  },

  isElement: function(element){
    if(this.empty()===true) return false;
    else{
      var curr = this.head;
      while(curr.next !== null){
        curr = curr.next;
        if(curr.val === element){
          return true;
        }
      }
      return false;
    }
  }
};


var ll = new LL();

ll.push(0);
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);
ll.push(6);


