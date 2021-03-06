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
  if ( inventory.push(item) ) return true;
  // show updated inventory
  console.log(inventory);
} // end addItem

var addItemFromUser = function ( ) {
  console.log( "in addItemFromUser" );
  // Let's setup some variables
  theName = document.getElementById( 'nameInput' );
  theColor = document.getElementById( 'colorInput' );
  theSize = document.getElementById( 'sizeInput' );
  // The message box
  messageBox = document.getElementById( 'productAddedMessage' );

  // If all the fields pass a simple validation ( must have all necessary values )
  if( theName.value != "" && theColor.value != "--" && theSize.value != "--" ) {

    // Add the item
    addItem( theColor.value, theName.value, theSize.value );

    // Reset the form
    theName.value = "";
    theSize.value = "--";
    theColor.value = "--";

    // Add a message to let the user know the item was added
    messageBox.innerHTML += "Product Added!";

    //Set a timeout to clear the message after two seconds
    setTimeout(function(){ messageBox.innerHTML = ""; }, 2000);

    // This ensures the form doesn't server submit
    return false;

  } else {
    // Alert the user to let them know that the product is not added, need more fields
    alert("All fields are required!!");
    return false;
  }
}

var findItems = function( size, color, name ) {
	// Create items array
	var items = [];

  console.log( size );
	// Search through all the items in our inventory
	for ( var i = 0; i < inventory.length; i++ ) {
		// If the item is a match, add it to the items array
    var productName = inventory[i].name + "";

    if( size == "--" || color == "--" ) {
      if ( ( inventory[i].size === size || inventory[i].color === color ) || productName.toLowerCase() === name.toLowerCase() )
        items.push( inventory[i] );
      } else {
        if ( ( inventory[i].size === size && inventory[i].color === color ) || productName.toLowerCase() === name.toLowerCase() ) {
          items.push( inventory[i] );
        }
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
  // get name of product from user search
  selectedName = document.getElementById( 'nameIn' ).value;
  console.log( 'looking for something ' + selectedColor + ' and ' + selectedSize );
  // check if an item fits this description
  var items = findItems( selectedSize, selectedColor, selectedName );
  // If we get items, log out each item's name.
  if( items.length > 0 ) {
    document.getElementById("items").innerHTML = "";

  	for( var j = 0; j < items.length; j++ ) {
      document.getElementById("items").innerHTML += "<li>We found a " + items[j].name + " that is " + items[j].size + " and " + items[j].color + "</li>";
  		console.log( "Match:", items[j] );
  	} 
  } else {
    document.getElementById("items").innerHTML = "No Items Match This Search";
  }

} // end searchInventory

///////// ADD ITEMS /////////
addItem( 'blue', 'Smurf', 'Small');
addItem( 'blue', 'blueberry', 'Small');
addItem( 'mermaid treasure', 'Prime Academy', 'Large');
addItem( 'bus seat green', 'Baby Banner', 'Medium');
addItem( 'purple', 'Eggplant', 'Small');
addItem( 'purple', 'Prince', 'Medium');