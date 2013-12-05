describe("grid create", function() {
    it("can be created by passing three arguments, vertical and horizontal number of blocks and one for block size in pixels", function() {
        var grid;
        grid = new Grid();
        expect(grid.new(10,20,100)).toBe(true);    
    });
    it("needs to remember the horizintal and vertical number of blocks and block size in pixels and return these values when asked", function() {
 
        var grid;
        grid = new Grid();
        expect(grid.new(10,20,100)).toBe(true);
        expect(grid.horizontal).toBe(10);
        expect(grid.vertical).toBe(20);
        expect(grid.blockSizePx).toBe(100);
    });
    it("returns false if any of the arguments are negative or zero", function() {
    
        var grid;
        grid = new Grid();
        expect(grid.new(-1,20,100)).toBe(false);
        expect(grid.new(10,-1,100)).toBe(false);
        expect(grid.new(10,20,-1)).toBe(false);
        expect(grid.new(0,20,100)).toBe(false);
        expect(grid.new(10,0,100)).toBe(false);
        expect(grid.new(10,20,0)).toBe(false);  
    });
    it("returns false if any of the arguments are not a number", function() {
    
        var grid;
        grid = new Grid();
        expect(grid.new('a',20,100)).toBe(false);
        expect(grid.new(10,'a',100)).toBe(false);
        expect(grid.new(10,20,'a')).toBe(false);
    });
    it("should create a grid the same size as we asked for", function() {
    
        var grid;
        grid = new Grid();
        grid.new(1,5,10); // one horizontal line and five vertical lines
        expect(grid.gridRows.length).toBe(1);
        expect(grid.gridRows[0].length).toBe(5);
    });

});

describe("grid test", function() {
   it("tests if block would be square.  returns 0 for square", function() {
        var grid;
        grid = new Grid();
        var ret,widthBLockPx,heightBlockPx;
        widthBlockPx = grid.calculateBlockSize(10,600);
        heightBlockPx = grid.calculateBlockSize(10,400);
        ret = grid.test(widthBlockPx,heightBlockPx);
        // results are:
        expect(ret).toBe(0);
   });
   it("tests if block would be square.  returns a positive number for width is greater than height", function() {
        var grid;
        grid = new Grid();
        var ret,widthBLockPx,heightBlockPx;
        widthBlockPx = grid.calculateBlockSize(10,600);
        heightBlockPx = grid.calculateBlockSize(10,400);
        ret = grid.test(widthBlockPx,heightBlockPx);
        expect(ret).not.toBeLessThan(0);
   });
   it("tests if block would be square.  returns a negative number for height is greater than width", function() {
        var grid;
        grid = new Grid();
        var ret,widthBLockPx,heightBlockPx;
        widthBlockPx = grid.calculateBlockSize(10,600);
        heightBlockPx = grid.calculateBlockSize(10,400);
        ret = grid.test(widthBlockPx,heightBlockPx);
        expect(ret).toBeLessThan(0);
   });
});

describe("calculate block size", function() {
   it("returns a block size given a requested number of units and a canvas length or width in pixels", function() {
        var grid;
        grid = new Grid();
        var ret;
        // should return 400 / 10 = 40
        ret = grid.calculateBlockSize(10,400);
        expect(ret).toBe(40);
   });
});

describe("add rod to grid", function () {
    it("can place a rod in the grid based on the three arguments: rod, horizontal postion, vertical position", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        var grid;
        grid = new Grid();
        grid.new(100,50,100);
        expect(grid.placeRod(rod,4,4)).toBe(0);    
    });
    it("can place a rod in the grid if the rod is the exact same size as the grid", function()  {
        var rod;
        rod = new Rod();
        rod.new(5);
        var grid;
        grid = new Grid();
        grid.new(1,5,10);
        expect(grid.placeRod(rod,0,0)).toBe(0);
    });
    it("can not place a rod in the grid if the rod is one block larger than the grid and instead returns 1 to indicate the rod is one block larger", function()  {
        var rod;
        rod = new Rod();
        rod.new(6);
        var grid;
        grid = new Grid();
        grid.new(1,5,10);
        expect(grid.placeRod(rod,0,0)).toBe(1);
    });
    it("returns false if an attempt is made to place a rod in a locatino which does not exist", function()  {
        var rod;
        rod = new Rod();
        rod.new(6);
        var grid;
        grid = new Grid();
        grid.new(1,5,10);
        expect(grid.placeRod(rod,2,0)).toBe(false);
    });
    it("it marks the rod as in use when it is on the grid", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        var grid;
        grid = new Grid();
        grid.new(100,50,100);
        grid.placeRod(rod,4,4);
        expect(rod.inUse).toBe(true);    
    });
    it("makes sure a rod is marked as not in use if an attempt to place the rod is made but the attempt fails", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        var grid;
        grid = new Grid();
        grid.new(100,50,100);
        grid.placeRod(rod,-4,4);
        expect(rod.inUse).toBe(false);    
    });
    it("returns false an attempt is made to place a rod at a grid location with negative vertical or horizintal values", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        var grid;
        grid = new Grid();
        grid.new(10,10,100);
        expect(grid.placeRod(rod,-1,10)).toBe(false);    
        expect(grid.placeRod(rod,50,-10)).toBe(false);     
    });
    it("returns false if an attempt is made to place a rod at a grid location which is not a number", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        var grid;
        grid = new Grid();
        grid.new(10,10,100);
        expect(grid.placeRod(rod,'a',10)).toBe(false);    
        expect(grid.placeRod(rod,50,'a')).toBe(false);     
    });
    it("returns 0 if a newly placed rod would be completly on the grid", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        var grid;
        grid = new Grid();
        grid.new(10,10,100);
        expect(grid.placeRod(rod,1,1)).toBe(0);
    });
    it("returns -1 if an attempt is made to place a new rod at a grid location containing an existing rod", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        var rod1;
        rod1 = new Rod();
        rod1.new(5);
        var grid;
        grid = new Grid();
        grid.new(2,10,100);
        grid.placeRod(rod,0,0);
        expect(grid.placeRod(rod1,0,2)).toBe(-1);   
    });
    
    it("returns the number of blocks a rod would extend beyond the edge of the grid", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        var grid;
        grid = new Grid();
        grid.new(1,10,100);
        expect(grid.placeRod(rod,0,9)).toBe(4);
        
    });
    it("returns false if anything other than a rod is placed on the grid", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        var grid;
        grid = new Grid();
        grid.new(10,10,100);
        expect(grid.placeRod('fr',10,1)).toBe(false);
    });
    it("defaults rods to be horizotally placed", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        var grid;
        grid = new Grid(10,10,100);
        grid.new(10,10,100);
        grid.placeRod(rod,1,3);
        expect(grid.getBlock(1,2)).not.toBe(rod);
        expect(grid.getBlock(1,3)).toBe(rod);
        expect(grid.getBlock(1,4)).toBe(rod);
        expect(grid.getBlock(1,5)).toBe(rod);
        expect(grid.getBlock(1,6)).toBe(rod);
        expect(grid.getBlock(1,7)).toBe(rod);
        expect(grid.getBlock(1,8)).not.toBe(rod);
    });
});

describe("grid info", function () {
    it("returns false if an attempt is made to get a block which falls outside of the grid", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        var grid;
        grid = new Grid(10,10,100);
        grid.new(10,10,100);
        grid.placeRod(rod,1,3);
        expect(grid.getBlock(12,3)).toBe(false);
        expect(grid.getBlock(2,12)).toBe(false);
        expect(grid.getBlock(-1,8)).toBe(false);
        expect(grid.getBlock(1,-1)).toBe(false);   

    });   
    it("can tell us what rod is in what grid location", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        rod2 = new Rod();
        rod2.new(10);
        var grid;
        grid = new Grid();
        grid.new(10,30,100);
        grid.placeRod(rod,3,3);
        grid.placeRod(rod2, 4,1);
        expect(grid.getBlock(3,3)).toBe(rod);
        expect(grid.getBlock(4,1)).toBe(rod2);
        expect(grid.getBlock(1,8)).toBe(false);
    });  
    it("returns false if no rod is in that grid location", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        rod2 = new Rod();
        rod2.new(10);
        var grid;
        grid = new Grid();
        grid.new(5,20,10);
        grid.placeRod(rod,0,0);
        grid.placeRod(rod,1,5);
        expect(grid.getBlock(0,5)).toBe(false);
        expect(grid.getBlock(1,1)).toBe(false);
        expect(grid.getBlock(1,3)).toBe(false);
        expect(grid.getBlock(1,15)).toBe(false);        
    });
    it("can tell us if pixel (row,column) coordinates are on the grid, returns false if they are off the grid.", function() {
        grid = new Grid();
        // one row, two columns, 10 px per cell.
        // row should be 20px long and 10px high
        grid.new(1,2,10);
        expect(grid.getBlockByPx(-1,0)).toBe(false);
        expect(grid.getBlockByPx(0,-1)).toBe(false);
        expect(grid.getBlockByPx(0,20)).toEqual(jasmine.any(Number));
        expect(grid.getBlockByPx(0,21)).toBe(false);
        expect(grid.getBlockByPx(10,0)).toEqual(jasmine.any(Number));
        expect(grid.getBlockByPx(11,0)).toBe(false);

    });
    it("reports pixels on the inside edge of the graph to be on the graph!!", function() {
        grid = new Grid();
        // one row, two columns, 10 px per cell.
        // row should be 20px long and 10px high
        grid.new(1,2,10);
        expect(grid.getBlockByPx(0,20)).toEqual(jasmine.any(Number));

    });
    it("can tell us if pixel (x,y) coordinates are on the grid, if yes returns the block coordinates (horiziontal,vertical).", function() {
        expect(grid.getBlockByPx(-1,0)).toBe(false);
    });
});

describe("grid draw", function (){
    it("can draw the block when giving pixel locations", function() {
        expect(1).toBe(2);
    });
    it("can draw the rod when given pixel locations", function() {
        expect(1).toBe(2); 
    });
    it("can draw the entire grid", function() {
        expect(1).toBe("2");
    });
});

xdescribe("grid draw", function() {
    it("can draw itself", function() {
        expect(1).toBe("code to write here");
    }); 
});
xdescribe("rod rotate", function() {
    it("allows rods to be rotated from horizintal to vertical and vice versa", function() {
        expect(1).toBe("code to write here!!");    
    });    
    it("returns false if a rotated rod will rotate onto an existing rod.", function() {
        expect(1).toBe("code to write here!!");    
    });
});

describe("grid remove rod", function() {
    it("accepts a rod as an argument and removes that rod from the grid, returns true on success", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        var grid;
        grid = new Grid();
        grid.new(1,10,10);
        grid.placeRod(rod,0,0);
        expect(rod.inUse).toBe(true);
        expect(grid.removeRod(rod)).toBe(true);
        expect(rod.inUse).toBe(false);
    });
    it("returns false if that rod is not on the grid", function() {
        var rod;
        rod = new Rod();
        rod.new(5);
        var grid;
        grid = new Grid();
        grid.new(5,20,10);
        expect(grid.removeRod(rod)).toBe(false);
    });
    it("returns false if anything other than a rod is attempted to be removed", function() {
        var grid;
        grid = new Grid();
        grid.new(5,20,10);
        expect(grid.removeRod('lksdf')).toBe(false);
    });
});