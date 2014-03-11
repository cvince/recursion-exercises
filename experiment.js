/*

{ head: 1, tail: { head: 2, tail: { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } } } }

Converts to:

==> { head: 5, tail: { head: 4, tail: { head: 3, tail: { head: 2, tail: { head: 1, tail: null } } } } }

*/

function reverse (l) {
 if (l === null) { return null; }
 else {
 return append(reverse(l.tail), 
 { head: l.head,
 tail: null});
 }
}

function listReverse(list, iterator){
 if(list == null){ return null }
 if(list. !== 0){  }
 else return append(reverse(list.tail, list.head-1),  {
   head: list.head,
   tail: null
  }
 }
}
