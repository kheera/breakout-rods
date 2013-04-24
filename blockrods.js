

function Block() {
    var x;
    var y;
}

Block.prototype.new = function(x, y){
    if (x < 0) return false;
    if (y < 0) return false;
    if (isNaN(x)) return false;
    if (isNaN(y)) return false;
    this.x = x;
    this.y = y;
    return true;
}


// a collection of adjacent blocks 
function Rod(){
    var length;
    var arrBlock = new Array();
    var parent = new Block();
}

Rod.prototype.new = function(block)
{
    this.parent = block;
    this.orientation = 'horizontal';
}

Rod.prototype.rotate = function()
{
    if(this.orientation == "vertical")
    { // it's already vertical so switch it to horizontal
        this.orientation = "horizontal";    
    } else {
        this.orientation = "vertical";
    }
}