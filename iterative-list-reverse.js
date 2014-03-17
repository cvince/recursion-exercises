'use strict';

/*

{ head: 1, tail: { head: 2, tail: { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } } } }

Converts to:

==> { head: 5, tail: { head: 4, tail: { head: 3, tail: { head: 2, tail: { head: 1, tail: null } } } } }

*/

function append (l1,l2) {
  if (l1 === null) {
    return l2;
  }
  else {
    return {
      head: l1.head,
      tail: append(l1.tail,l2)
    };
  }
}


//recursive quadric

function reverse (l) {
  if (l === null) {
    return null;
  }
  else {
    return append( reverse(l.tail) ,  { head: l.head, tail: null });
  }
}


//iterative linear

function linReverse(list){
  if(list===null){
    return null;
  }
  function r(l, acc){
    console.log(acc);
    if(l === null){
      return acc;
    }
    return r(l.tail, { head: l.head, tail: acc });
  }
  if(list !== null){
    return r(list, null);
  }
}



/* some figuring out */

/* STEP 1
append(   reverse({ head: 2, tail: { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } } }),
          {head: 1, tail: null};  )

append()'s
return
------------------------
      =>  {
            head: reverse( { head: 2, tail: { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } } }).head,
            tail: append( reverse({ head: 2, tail: { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } } }).tail.tail, {head: 1, tail: null} )
          }




--STEP 2


reverse({ head: 2, tail: { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } } })
//turn into

append(   reverse( { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } } }),
          {head: 2, tail: null};  )


next append()'s head's
return
------------------------
      => {
            head: reverse( { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } } }).head,
            tail: append( reverse( { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } } }).tail.tail, {head: 2, tail: null} )
          }


--STEP 3

next append()'s head's
return
------------------------
      => {
            head: reverse( { head: 4, tail: { head: 5, tail: null } } ).head,
            tail: append( reverse( { head: 4, tail: { head: 5, tail: null } } ).tail.tail, {head: 3, tail: null} )
          }


--STEP 4

next append()'s head's
return
------------------------
      =>  {
            head: reverse( { head: 5, tail: null } ).head,
            tail: append( reverse( { head: 5, tail: null } ).tail ).tail, {head: 4, tail: null} )
          }

--STEP 5

next append()'s head's
return
------------------------
      =>  {
            head: reverse(null).head,
            tail: append( reverse(null).tail ).tail, {head: 5, tail: null} )
          }

      =>  {
            head: null.head,
            tail: append( null.tail.tail, {head: 5, tail: null} )
          }

      =>  {
            head: 5,
            tail: null
          }


STEP 2
==========
l.head = 2;
l.tail = { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } }
l = {head: 2, tail: { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } } }

return append( reverse({ head: 2, tail: { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } } }).tail.tail, {head: 1, tail: null} )
=> { head: 5, tail: { head: 4, tail: null } }


STEP 3
==========
l.head = 3;
l.tail = { head: 4, tail: { head: 5, tail: null } }
l = { head: 3, tail: { head: 4, tail: { head: 5, tail: null } } }

STEP 4
==========
l.head = 4;
l.tail = { head: 5, tail: null }
l = { head: 4, tail: { head: 5, tail: null } }

STEP 5
==========
l.head = 5;
l.tail = null
l = { head: 5, tail: null }



*/




