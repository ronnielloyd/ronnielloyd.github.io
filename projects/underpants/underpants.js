// This is the proper way to start a javascript library
(function() {

// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// This allows us to use our "_" anywhere. In a web browser, properties of window
// are available everywhere without having to type "window."
/* global _ */
window._ = {};

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
  return value;  
};

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
  if(Array.isArray(value)) return "array"; 
  if(value instanceof Date) return "date";
  if(value === null) return "null";
  return typeof value;
};

/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first(["a","b","c"], 1) -> "a"
*   _.first(["a","b","c"], 2) -> ["a", "b"]
*   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
_.first = function(array, n){
    if(!Array.isArray(array) || n < 0) return [];
    if(n === undefined || isNaN(n)) return array[0];
    return array.slice(0,n);
};

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <nubmer> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last(["a","b","c"], 2) -> ["b","c"]
*   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
_.last = function(array, n){
  if(!Array.isArray(array) || n < 0) return [];  
  if(n === undefined || isNaN(n)) return array[array.length -1];
  return array.slice(-n);
};

/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
};

/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
  //create a for loop
  for(var i = 0; i < array.length; i++){
   // if statement for first occurence
    if(value === array[i]){
      return i;
    }
  } return -1; // else if not in array?
};

/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(collection, test){
  // create an output array //
  // loop through the original array //
  // use each because we need to go through everything in collection//
  //design a function passed to each that must run the test,
  //inspect the result of the test, and determineif value has passed the test//
  // if value passed test, push to output array//
  //return output//
  
  const filtered = [];
  _.each(collection, function(value, pos, collection){
    // execute the test, based on result, push passed values
    if(test(value, pos, collection)) filtered.push(value);
    //test looks at value, potentially pos, collection as well
    
  });
  return filtered;
};

/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, test){
  // call a function that takes our array and then second value is filter function
 const rejected = []; //array that we willbe using
_.filter(array, function(value, pos, collection){
    if(!test(value, pos, collection)) rejected.push(value);
     
  }); 
  return rejected;
  
};

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
// make an array
//will have to call both filter and reject
_.partition = function(array, test){
// have to make multiple arrays 
  const filtered = []; //result off filter
  const rejected = []; //result of reject
  const partition = [filtered,rejected]; //an array that has both variables
  
 _.each(array, function(value, pos, collection){
    if(test(value, pos, collection)) filtered.push(value);
  }); //is the filter function
  
  _.filter(array, function(value, pos, collection){
    if(!test(value, pos, collection)) rejected.push(value);
  }); // is the reject function
  return partition;
};
  


/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
//going to take an array
// indexOf will take an array and value
// have it loop through array and only count first instance?
_.unique = function(array){
  const arr = [];
  _.each(array, function(value, pos, collection){
    if(_.indexOf(array, value) === pos){
      arr.push(value)}
  }); return arr;
};

/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
/*our map function will take a collection and action
* inside our map function we will need to check if 
we have an array our object. We can use our each function.
*each will check if it is array or function, then push the 
value to an array
*/
_.map = function(collection,action){
  var mapped = [];
  _.each(collection,function(value, pos, collection){
    mapped.push(action(value, pos, collection));
  });
  return mapped;
};



/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
//since we are returning an array, create one
//use map instead of each? map 
_.pluck = function(object, property){
 return _.map(object, function(value, pos, collection){
    return value[property];
  });
};

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
  var answer = false;
  _.each(array, function(val){
    val === value ? answer = true : 0;
  });return answer;
};

/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function (collection, test){
var answer = true;  
  if(typeof(test) === "function"){
    _.each(collection, function(value, pos, collection) {
        if(!test(value, pos, collection)){
          answer = false;
        }
    });
  }else(_.each(collection, function(value, pos, collection){
    if(!value){
      answer = false;
    }
  }));
  return answer;
};


/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
// out function will use _.each
//
_.some = function(collection, test){
  var result = false;  
  if(typeof(test) === "function"){
    _.each(collection, function(value, pos, collection) {
        if(test(value, pos, collection)){
          result = true;
        }
    });
  }else(_.each(collection, function(value, pos, collection){
    if(value){
      result = true;
    }
  }));
  return result;
};


/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, test, start){
  var result;
  // each statment will be our loop
  /* Do if statements. One if the start is less than 0
  one if the start is undefined, one checks if result has a value */
  // our if statements will go first so that we can figure out value of result
  // reassign result to function that takes the previous, the value, and the position
    _.each(array, function(value, pos, collection){
        if(start < 0){start= collection[0];}
        if(typeof (start) === "undefined"){start = 1}
        if(!result){result = start}
        result = test(result, value, pos);
    });
  
  return result;

};
/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
//will originally take two objects
//will loop and put properties from object two into object 1
//if we have a new object, have to loop through that, so two each funcions
//the first object key will equal the new value then we return it

_.extend = function(object1, object2){
  _.each(arguments,function(newObj){
    _.each(newObj, function(value,key){
      object1[key] = value;
    });
  });
  return object1;
};

// This is the proper way to end a javascript library
}());
