//Work with functions
var x = 14;
var y = 15;

var name1 = 'Ivan';
var name2 = 'Iwan';

function Funk (x, y) {
	if(y == undefined || x == undefined) {
		document.write('One of arguments is not specified');
	} else {
		document.write(x + y);
	}
	}


Funk(1, null);
