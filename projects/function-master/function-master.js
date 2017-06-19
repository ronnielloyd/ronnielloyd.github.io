function objectValues(object){
    var array = [];
    for(var key in object){
        array.push(object[key]);
    }return array;
}

function keysToString(object){
    var newString = "";
    for(var key in object){
        newString += (key + " ");
    }return newString.trim();
}

function valuesToString(object){
 var newString = "";
 for(var key in object){
  if(typeof(object[key]) === "string"){
    newString += (object[key] + " ");
    }
    }return newString.trim();
}

function arrayOrObject(value){
    if(Array.isArray(value) === true){
        return "array";
    }else {
        return "object";
    }
}

function capitalizeWord(value){
    return value[0].toUpperCase() + value.slice(1);
}

function capitalizeAllWords(value){
  var arr = value.split(" ");
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  } return arr.join(" ");  
} 

function welcomeMessage(value){
    return "Welcome " + value["name"][0].toUpperCase() + value["name"].slice(1) + "!";
}

function profileInfo(value){
    return  value["name"][0].toUpperCase() + value["name"].slice(1) + " is a " + value["species"][0].toUpperCase() + value["species"].slice(1);
}

function maybeNoises(value){
    if (value.hasOwnProperty('noises') && value.noises.length > 0){
        return value.noises.join(' ');
    } else {
        return 'there are no noises';
    }
}

function hasWord(string,word){
 var arr = string.split(" ");
 for(var i = 0; i < arr.length; i++){
   if(arr[i] === word){
     return true;
   }
 } return false;
}

function addFriend(name, object){
        object.friends.push(name);
            return object;
     
 }
 
function isFriend(name, object){
    if (object.hasOwnProperty('friends')){
        for (var i = 0; i < object.friends.length; i++){
            if (object.friends[i] === name){
                return true;
            }
            
       }
    }
    return false;
}

function nonFriends(name, list){
  var notFriendsWith = [];
  for(var i = 0; i < list.length; i++){
      if (list[i]['name'] !== name) {
        var check = false
        for(var j = 0; j < list[i]['friends'].length; j++){
          if (list[i]['friends'][j] === name){
          check = true;
          }
          }if (check === false){
            notFriendsWith.push(list[i]['name']);
        }
      }
    }
  return notFriendsWith;
} 

function updateObject(obj, key, value) {
    obj[key] = value;
    return obj;
}

function removeProperties(object, array){
    for (var i = 0; i < array.length; i++){
        if (object.hasOwnProperty(array[i])) {
                delete object[array[i]];
            }
        } return object;
    }
    
function dedup(value){
    var newArray = [];
    for (var i = 0; i < value.length; i++){
        if (!(newArray.includes(value[i]))){
        newArray.push(value[i]);
    }
    }
    return newArray;
}