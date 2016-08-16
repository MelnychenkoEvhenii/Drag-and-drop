$(function() {
	
	// create a handler function GetNumber that generate random
 	function GetNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	// event processing by pressing the button with id = 'addBlock'
    $('#addBlock').click(function(){
    	
		var randName = GetNumber(1, 3); //declare variable 'randName'
	
		$('#blocks').prepend("<div class = 'blocks " + randName + "'>" + randName + "</div>"); // adding random blocks
		
		$('.' + randName).css("background", "#" + GetNumber(0, 9) + GetNumber(0, 9) + GetNumber(0, 9) + GetNumber(0, 9) + GetNumber(0, 9) + GetNumber(0, 9));
	}); // adding random class
	
	// Binding sorted containers together
	$("#blocks, #sortable2").sortable({
	      connectWith: ".connectedSortable"
	    }).disableSelection();
	    
	showStatistic(); // invoke the function showStatistic
	
});

// create a handler function showStatistic
function showStatistic() {
		
		// event release the mouse button with id = 'sortable1'
		$('#sortable1').mouseup(function(){
		
		$('div > p').empty(); // remove the block with paragraphs
		var countOne = $('#sortable2 > .1').length; //declare variable 'countOne' which contain the blocks with class '1' 
		var countTwo = $('#sortable2 > .2').length; //declare variable 'countTwo' which contain the blocks with class '2'
		var countThree = $('#sortable2 > .3').length; //declare variable 'countThree' which contain the blocks with class '3' 
		
		// adding statistics for each block
		$('div > p').append( "The number of first blocks is " + '<span>' + countOne + '</span>' + '<br />')
					.append( "The number of second blocks is " + '<span>' + countTwo + '</span>' + '<br />')
					.append( "The number of third blocks is " + '<span>' + countThree + '</span>');
	});
	
}