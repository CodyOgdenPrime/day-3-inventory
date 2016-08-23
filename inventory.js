console.log( 'inventory.js sourced' );
// global vars
var inventory = [];
var selectedColor ='none';
var selectedSize ='none';

var addItem = function( color, name, size ){
  console.log( 'adding item: ' + name + ' ' + color + ' ' + size );
  // create object
  var item = new Object({
  	color: color,
  	name:  name,
  	size:  size
  });
  // push into array
  inventory.push(item);
  // show updated inventory
  console.log(inventory);
} // end addItem

var findItems = function( size, color ) {
	// Create items array
	var items = [];
	// Search through all the items in our inventory
	for ( var i = 0; i < inventory.length; i++ ) {
		// If the item is a match, add it to the items array
		if ( inventory[i].size === size && inventory[i].color === color ) {
			items.push( inventory[i].name );
		}
	}
	return items;
}

var searchInventory = function(){
  document.getElementById("items").innerHTML = "Loading ...";
  console.log( 'in searchInventory' );
  // get size from user
  selectedSize = document.getElementById( 'sizeIn' ).value;
  // get color from user
  selectedColor = document.getElementById( 'colorIn' ).value;
  console.log( 'looking for something ' + selectedColor + ' and ' + selectedSize );
  // check if an item fits this description
  var items = findItems(selectedSize, selectedColor);
  // If we get items, log out each item's name.
  if( items.length > 0 ) {
    document.getElementById("items").innerHTML = "";
  	for( var j = 0; j < items.length; j++ ) {
      document.getElementById("items").innerHTML += "<li>" + items[j] + "</li>";
  		console.log( "Match:", items[j] );
  	} 
  } else {
    document.getElementById("items").innerHTML = "No Items Match This Search";
  }

} // end searchInventory

///////// ADD ITEMS /////////
addItem( 'blue', 'Smurf', 'Small');
addItem( 'mermaid treasure', 'Prime Academy', 'Large');
addItem( 'bus seat green', 'Baby Banner', 'Medium');
addItem( 'purple', 'Eggplant', 'Small');
addItem( 'purple', 'Prince', 'Medium');