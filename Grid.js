function Grid(){
    this.vertical;
    this.horizontal;
    this.blockSizePx;
    this.gridRows;
}

Grid.prototype.test = function(widthBlockPx,heightBlockPx)
{
    return (widthBlockPx-heightBlockPx);
}
Grid.prototype.calculateBlockSize = function(numUnits, pxArea)
{
    return (pxArea/numUnits);
}

// rows
// columns
Grid.prototype.new = function(horizontal,vertical,blockSizePx)
{
    if (isNaN(vertical) == true) { return false; }
    if (vertical <= 0) { return false; }
    if (isNaN(horizontal) == true) { return false; }
    if (horizontal <= 0) { return false; }
    if (isNaN(blockSizePx) == true) { return false; }
    if (blockSizePx <= 0) { return false; }
    // row = horizontal, column = vertical
    this.vertical = vertical;
    this.column = vertical;
    this.horizontal = horizontal;
    this.row = horizontal;
    this.blockSizePx = blockSizePx;
    this.gridRows = new Array();
    // fill up the grid with nothing!
    for (row = 0; row < this.horizontal; row++)
    {
        this.gridRows[row] = new Array();
        for (column = 0; column < this.vertical; column++)
        {
            this.gridRows[row][column] = false;
        }
    }
    return true;
}

Grid.prototype.placeRod = function(rod,horizontal,vertical)
{
    if (isNaN(vertical) == true) { return false; }
    if (vertical < 0) { return false; }
    if (isNaN(horizontal) == true) { return false; }
    if (horizontal < 0) { return false; }
    if (vertical > this.vertical) { return false; }
    if (horizontal > this.horizontal) { return false; }
    if (rod instanceof Rod == false) return false;
    // if the rod would extend beyond the end of the grid then return the number of spaces it would extend
    if (rod.length + vertical - this.vertical > 0 ) { return (rod.length+vertical - this.vertical)}

    // scan the grid area where the rod would go to see if a rod exists in any of the blocks
    for (offset = 0; offset < rod.length; offset++)
    {
        if (this.gridRows[horizontal][vertical+offset] != false)
        {
            return -1;  // found alocation which contains a rod!
        }
    }
    
    // place the rod on the grid
    this.gridRows[horizontal][vertical] = rod;
    for (column = 1; column < rod.length; column++)
    {
        this.gridRows[horizontal][column + vertical] = Array(horizontal,vertical);
    }
    rod.used();
    return 0;
}

Grid.prototype.removeRod = function(rod)
{
    if (rod instanceof Rod == false) return false;
    // figure out where in the grid the rod is
    for (row = 0; row < this.row; row++)
    {
        for (column = 0; column < this.column; column++)
        {
            //alert(this.gridRows[row][column] + rod);
            if (this.gridRows[row][column] === rod)
            {
                rod.usedCancel();
                return true;
            }
        }
    }
    return false;
}

Grid.prototype.getBlock = function(horizontal,vertical)
{
    if (isNaN(horizontal)) { return false; }
    if (horizontal > this.horizontal) { return false; }
    if (horizontal < 0) { return false; }
    if (isNaN(vertical)) { return false; }
    if (vertical > this.vertical) { return false; }
    if (vertical < 0) { return false; }
    if(Array.isArray(this.gridRows[horizontal][vertical]) == true)
    {
        var h = this.gridRows[horizontal][vertical][0];
        var v = this.gridRows[horizontal][vertical][1];
        return this.gridRows[h][v];
    } else {
        var r = this.gridRows[horizontal][vertical];
        if (r instanceof Rod)
        {
            return r;
        } else {
            return false;
        }
    return false;
    }
}
Grid.prototype.draw = function(ctx)
{
    for (row = 0; row < this.row; row++)
    {  
        ctx.beginPath();
        ctx.moveTo(0,row*this.blockSizePx);
        ctx.lineTo(this.column*this.blockSizePx,row*this.blockSizePx);
        ctx.closePath();  
        ctx.stroke();  
    }
    for (column = 0; column < this.column; column++)
    {  
        ctx.beginPath();
        ctx.moveTo(column*this.blockSizePx,0);
        ctx.lineTo(column*this.blockSizePx,this.row*this.blockSizePx);
        ctx.closePath();  
        ctx.stroke();  
    }
}

Grid.prototype.drawBlockByMousePos = function(ctx, mousePos)
{
    var block;
    block = (this.getBlockByPx(mousePos.x, mousePos.y));
    
}

Grid.prototype.getBlockByPx = function(pxRow,pxColumn)
{
    // row = horizontal, column = vertical
    if(isNaN(pxRow)) {return false;}
    if(isNaN(pxColumn)) {return false;}
    if(pxRow < 0) {return false;}
    if(pxColumn < 0) {return false;}
    //alert(pxx + ' < ' + this.vertical * this.blockSizePx);

    if(pxRow > this.horizontal * this.blockSizePx) {return false;}
    if(pxColumn > this.vertical * this.blockSizePx) {return false;}
    
    return 1;
}












