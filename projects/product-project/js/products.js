/* global $ _ */
$(document).ready(function () {
$.getJSON('data/product.json', function (data){ 
  // ALL YOUR CODE GOES BELOW HERE //
$('body').css('background-color', 'lightskyblue')

$('<section>').attr('id', 'product-list').appendTo('main');
var product = data;
_.map(product, function(products){
  var $name = $('<div>').text(products.desc).addClass('name');
  var $type = $('<div>').addClass('type').prepend('Type: ');
  var $img;
  var $price = $('<div>').addClass('price').prepend('Price: ');
  var $color = $('<div>').addClass('color').prepend('Color: ');
  var $availableColors = $('<div>').addClass('availableColors').prepend('Available Colors: ');
  var $specs = $('<div>').addClass('specs').prepend('Specifications: ');
  var $stock = $('<div>').addClass('stock').prepend('Stock: ');
  var $space = $('<p>');
  // var $name = $('<div>').text(products.desc).addClass('name');
  // var $type = $('<div>').text(products.type).addClass('type');
  // var $typeDes = 'Type: '  ,$type;
  // var $img;
  // var $price = $('<div>').text(products.price).addClass('price').prepend('Price: ');
  // var $color = $('<div>').text(products.color).addClass('color').prepend('Color: ');
  // var $availableColors = $('<div>').text(products.availableColors).addClass('availableColors').prepend('Available Colors: ');
  // var $specs = $('<div>').text(products.specs).addClass('specs').prepend('Specifications: ');
  // var $stock = $('<div>').text(products.stock).addClass('stock').prepend('Stock: ');
  // var $space = $('<p>');
  // with div id can prepend text? Try it so we get 'text: + value' eg. name: $name
  $('#product-list').append($name, $type, $price, $color, $availableColors, $specs, $stock, $space);
});

//search function
/* use input to make an input bar can give it an id of search box
will look for access to value. Since we only have one searchBox it is at [0]
$('#searchBox'[0].value)
Use recursion that takes an object and a string. Object is what we are looping over, string is search query
If statement for if it is an object and do recursion again?

function (object, query) {
  each(object, function(value, index, obj){
  var queryInObject = false
    if(typeof value === "string"){
      we find out if the query is in the string!!
      queryInObject = true;
    } else if (typoeof value === 'object'){
      we rerun the function, recursivly, with the object and query search(value, query);
      if (search(value, query)){
        quieryInObject = true;
      }
    }
  } return quieryInObject
};
*/

/**
 * use reduce to narrow down search
 *reduce to make array of all types 
 *loop over that arrow and append option tages with the text as things in array
 * option tages are appended to select tags
 * /

//modals
/**
 * <div>.addClass('modal');
 * you will want to want to make position fixed so it moves with page. 
 * Absolute will let us change the positions to values you type in
 * if you want to have it where everything works on a click do $('.product-fino').click(function(){
   $('.modal').css('display','hidden');
   do one for another click that uses .css('display', 'none');
  
 })
 */
  // ALL YOUR CODE GOES ABOVE HERE //
});
});