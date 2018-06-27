function makeGrid() {
	console.log("makeGrid is running!")
	
	// Select size input
	
	var board, cell, height, width;
	
	board = $('#pixelCanvas');
	height = $('#height').val();
	width = $('#width').val();
	
	board.children().remove()
	
	for (x = 0; x < height; x++) {
	board.append('<tr></tr>');
	}
	
	
	for (y = 0; y < width; y++) {
	$( "<td></td>" ).appendTo( "tr" );
	} 
	
	cell = board.find('td');
	
	cell.click(function() {	
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

// When size is submitted by the user, call makeGrid()

 $('#submit').click(function(event) {
  event.preventDefault();
  makeGrid();
});

