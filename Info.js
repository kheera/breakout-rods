function Info(){
    this.info = new Array;
}

Info.prototype.write = function(ctx, text){
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.fillRect(0, 0, 600, 25);
    ctx.fillStyle = "blue";
    ctx.font = "bold 16px Arial";
    ctx.fillText(text, 20, 20);
}