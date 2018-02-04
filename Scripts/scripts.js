
//Demo objects data used to load the mini graphs placed top of the screen
var graphs = {
	graphDetails : [{
			name : 'MARKETING',
			type : 'column bar',
			lastUpdated : 'Nov-2017'
		}, {
			name : 'SOCIAL MEDIA',
			type : 'Line Grpahs',
			lastUpdated : 'Dec-2017'
		},{
			name : 'SMARTPHONES',
			type : 'Pie Charts',
			lastUpdated : 'Jan-2018'
		},
		{
			name : 'POPULATION',
			type : 'Pyramid Grpahs',
			lastUpdated : 'Dec-2017'
		},{
			name : 'CUSTOMERS',
			type : 'spider Charts',
			lastUpdated : 'Jan-2018'
		},{
			name : 'SMARTPHONES',
			type : 'Pie Charts',
			lastUpdated : 'Jan-2018'
		},
		{
			name : 'POPULATION',
			type : 'Pyramid Grpahs',
			lastUpdated : 'Dec-2017'
		},{
			name : 'CUSTOMERS',
			type : 'spider Charts',
			lastUpdated : 'Jan-2018'
		},{
			name : 'SMARTPHONES',
			type : 'Pie Charts',
			lastUpdated : 'Jan-2018'
		},
		{
			name : 'POPULATION',
			type : 'Pyramid Grpahs',
			lastUpdated : 'Dec-2017'
		},{
			name : 'CUSTOMERS',
			type : 'spider Charts',
			lastUpdated : 'Jan-2018'
		}
	]
};

//load the graphs once window is loaded completely
window.onload = function(){
	loadMiniGraphs();
}

//function logic to load the graphs by looping through the objects
function loadMiniGraphs(){
	graphs.graphDetails.forEach(function(graph){
		var newDiv = document.createElement('div');
		newDiv.id = 'graph';
		newDiv.innerHTML  = '<ul><li>'+graph.name+'</li></ul>'
		document.getElementById('header').appendChild(newDiv);
	});
}

//function to display the drop down while clicked on dropdown button
function showDropdown(id) {
	$('.dropdown-content').hide();
    $('#dropdown-' + id).show();
}
window.onclick = function(event) {
  if (!event.target.closest('.dropbtn')) {
    $('.dropdown-content').hide();
  }
}


//function to display extra filters
function openFilters(){
	document.getElementById('extraFilters').style.display = 'block';
}

//function to close the extra filters 
function closeFilters(){
	document.getElementById('extraFilters').style.display = 'none';
} 