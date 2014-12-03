Template.rowCell.events({
  	"click .card" : function(event){
  		var r = Rows.findOne({_id:this._row});
  		r.cells[this.index-1].rotation = rotateCW(r.cells[this.index-1].rotation); 
  		Rows.update(this._row, r);
	}		
});


function rotateCW(rotation){
	var newRotation = 'rotate0'
	switch (rotation) {
    case 'rotate0':
    	newRotation = 'rotate90';
        break;
    case 'rotate90':
    	newRotation = 'rotate180';
        break;
    case 'rotate180':
    	newRotation = 'rotate270';
        break;
    case 'rotate270':
    	newRotation = 'rotate0';
        break;
	} 
	return newRotation;
}