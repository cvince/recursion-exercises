//{head: { val: 1, next: { val: 3, next: {val: 7, next: null}}}}

function LL(){
    this.head = null;
}

LL.prototype {

  pop: function(element){

    var obj = { val: element, next: null };

    if(this.head === null){
      this.head = obj;
    }else{
      var curr = this.head;
      while(curr.next !== null){
        curr = curr.next;
      }
      curr.next = obj;
    }

    var output = this.head;

    return output;

  }

}

LL.prototype.pop = function(){}

var ll = new LL();

ll.push(5);
ll.push(6);
ll.push(7);

console.log(JSON.stringify(ll));

