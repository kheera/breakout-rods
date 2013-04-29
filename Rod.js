
function Rod(){
    this.length;
    this.orientation;
    this.colour;
    this.inUse;
    this.pollock_colours = new Array();
    this.pollock_colours[1] = 'rgba(255,255,255,1)'; // white
    this.pollock_colours[2] = 'rgba(255,192,203,1)'; // pink
    this.pollock_colours[3] = 'rgba(135,206,250,1)'; //light-blue";
    this.pollock_colours[4] = 'rgba(255,36,0,1)'; //scarlet"
    this.pollock_colours[5] = 'rgba(255,255,0,1)'; //yellow";
    this.pollock_colours[6] = 'rgba(238,130,238,1)'; //violet"
    this.pollock_colours[7] = 'rgba(211,211,211,1)'; //light-grey";
    this.pollock_colours[8] = 'rgba(220,20,60,1)'; // crimson";
    this.pollock_colours[9] = 'rgba(65,105,225,1)'; //royal-blue";
    this.pollock_colours[10] = 'rgba(255,165,0,1)'; //orange";
    this.pollock_colours[11] = 'rgba(169,169,169,1)'; //dark-grey"
}
Rod.prototype.new = function(l)
{
    if (isNaN(l) == true) { return false; }
    if (l <= 0) { return false; }
    if (l > 10) { return false; }
   
    this.inUse = false;
    this.orientation = 'horizontal';
    this.length = l
    this.colour = this.pollock_colours[l];
    return true;
}   
Rod.prototype.used = function()
{
    this.inUse = true;
}
Rod.prototype.usedCancel = function()
{
    this.inUse = false;
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