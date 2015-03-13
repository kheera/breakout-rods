function Grid(){
    this.rows = 0;
    this.cols = 0;
    this.gridLength = 0;
    this.grid = [];
    this.blockSizePx = 20;
}

Grid.prototype.test = function(widthBlockPx,heightBlockPx)
{
    return (widthBlockPx-heightBlockPx);
}
Grid.prototype.calculateBlockSize = function(numUnits, pxArea)
{
    return (pxArea/numUnits);
}

Grid.prototype.new = function(rows,cols)
{
    if (isNaN(rows)) { throw "error: rows isNaN"; }
    if (isNaN(cols)) { throw "error: cols isNaN"; }
    if (rows <= 0) { throw "error: vertical is <= 0"; }
    if (cols <= 0) { throw "error: horizontal is <= 0"; }

    this.rows = rows;
    this.cols = cols;
    this.gridLength = (this.rows+1) * (this.cols+1);
    for (var i = 0; i < this.gridLength; i++) {
        this.grid[i] = 0;
    };
    return true;
}

Grid.prototype.placeRod = function(rod,col,row)
{
    if (isNaN(row)) { throw "error: row is NaN"; return false; }
    if (isNaN(col)) { throw "error: col is NaN"; return false; }
    if (rod instanceof Rod == false) { throw "error: rod isn't a Rod"; return false; }
    if (row < 0) { throw "error: row is < 0"; return false; }
    if (col < 0) { throw "error: col is < 0"; return false; }
    if (row > this.rows) { throw "error: row is > this.rows"; return false; }
    if (col > this.cols) { throw "error: cols is > this.cols: " + col + ' > ' + this.cols; return false; }

    // if the rod would extend beyond the end of the grid then return the number of spaces it would extend
    //if (rod.length + vertical - this.vertical > 0 ) { return (rod.length+vertical - this.vertical)}

    // scan the grid area where the rod would go to see if a rod exists in any of the blocks
    // TODO

    // place the rod on the grid
    //this.grid[row*this.cols + col] = rod;
    //if ()
    this.grid[row*this.cols + col] = rod;
    rod.used();
    return true;
}

// returns empty as string
// returns full as string
/*
Grid.prototype.status(col,row)
{

}
*/
/*
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
*/


Grid.prototype.draw = function(ctx) {
//    this.info.write(ctx, "......: " + this.mousePos.x + ',' + this.mousePos.y);
//    ctx.fillRect(0, 0, 600, 25);
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.fillStyle = "blue";
    ctx.font = "bold 16px Arial";
    for (var i = 0; i < this.grid.length; i++) {
        ctx.fillText(this.grid[i], 0 + 20 * (i - (Math.floor(i/this.cols)*this.cols)), 0+20*Math.floor(1+i/this.cols));
    };
    this.drawGridLines(ctx);
};
// cols = x
// rows = y
// i * col_width = x position
// row_height * number_rows = y position
// number rows = number of full columns
// a full column = this.colls.
// number of grid spaces / this.colls = number of columns
// number_full_rows = Math.floor(i/this.colls)

Grid.prototype.drawGridLines = function(ctx)
{

    //console.log(this.blockSizePx);
    ctx.strokeStyle="#000000";
    for (row = 0; row < this.rows; row++)
    {  
        //console.log(row);
        ctx.beginPath();
        ctx.moveTo(0,row*this.blockSizePx);
        ctx.lineTo(this.cols*this.blockSizePx,row*this.blockSizePx);
        ctx.closePath();  
        ctx.stroke();  
    }
    for (column = 0; column < this.cols; column++)
    {  
        ctx.beginPath();
        ctx.moveTo(column*this.blockSizePx,0);
        ctx.lineTo(column*this.blockSizePx,this.rows*this.blockSizePx);
        ctx.closePath();  
        ctx.stroke();  
    }
}
/*
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
*/











