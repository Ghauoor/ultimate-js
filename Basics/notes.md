# Javascript Notes:

i- Value have type not the variable.

Always use const --> let --> var try to avoid var at all cost
use const as a default
any mutation in code can lead to potential bugs so try to not or use less let and avoid var

# Return type of variables in JavaScript

1. Primitive Datatypes
   Number => number
   String => string
   Boolean => boolean
   null => object
   undefined => undefined
   Symbol => symbol
   BigInt => bigint

2. Non-primitive Datatypes --> Refrence Type
   Arrays => object
   Function => function
   Object => object

## Falsy values:

. false
. undefined
. null
. 0
. NaN
. the empty string ("")

# Memory in jS

-> Stack (Primitive Datatypes)
When Stack memory in use it means copy of value is aviliable

-> Heap (Non-Primitive Datatypes)
When Heap is in use Orignal ref aviliable
Mean any changes leads to changing the actual value

# Promise

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:

### pending: initial state, neither fulfilled nor rejected.

### fulfilled: meaning that the operation was completed successfully.

### rejected: meaning that the operation failed.
