

describe("block creation", function() {
    var block;
    beforeEach(function() {
        block = new Block();
    });
    
    it("can create a new block at x=1 and y=1", function() {
       block.new(1,1);
       expect(block.x).toEqual(1);
       expect(block.y).toEqual(1);
    });
    
    it("can create a new block at x=1 and y=5", function() {
        block.new(1,5);
        expect(block.x).toEqual(1);
        expect(block.y).toEqual(5);
    });
    
    it("returns false for negative values of x", function() {
        expect(block.new(-1,1)).toBe(false);
    });
    
    it("returns false for negative values of y", function() {
       expect(block.new(1,-1)).toBe(false); 
    });
    
    it("returns false when both x and y are negative", function () {
       expect(block.new(-1,-1)).toBe(false); 
    });
    
    it("returns false when x is not a number", function(){
       expect(block.new('a',1)).toBe(false); 
    });
    
    it("returns false when y is not a number", function() {
       expect(block.new(1,'b')).toBe(false); 
    });
});


describe("rod creation", function() {
    var block1;
    var block2;
    var rod1;
    var rod2;
    
    beforeEach(function() {
        block1 = new Block();
        block2 = new Block();
        block1.new(1,1);
        block2.new(1,2);
        rod1 = new Rod();
    });
    
    it("creates a new rod which contains an existing block", function() {
        rod1.new(block1);
        expect(rod1.parent).toBe(block1);
    });
    

});

describe("rod rotate -- this should probably be in the grid object", function() {
    var block1;
    var block2;
    var rod1;
    var rod2;
    
    beforeEach(function() {
        block1 = new Block();
        block2 = new Block();
        block1.new(1,1);
        block2.new(1,2);
        rod1 = new Rod();
    });
    
    it("converts horizontal rods to vertical rods and vice versa.", function() {
        rod1.new(block1);
        expect(rod1.orientation).toBe('horizontal');
        rod1.rotate();
        expect(rod1.orientation).toBe('vertical');
        rod1.rotate();
        expect(rod1.orientation).toBe('horizontal');
    });
    it("leaves the parent rod in the same location", function() {
        expect(1).toBe('more testing code needed!');
    });
    it("leave the rod as the same length", function() {
        expect(1).toBe('more testing code needed!');
    });
    it("when flipping from horizontal to vertical it moves the rod's x position to the associated y position down the grid and vice versa", function() {
        expect(1).toBe('more testing code needed!');
    });
});


describe("rod merge", function() {

    it("allows a right side merge - allows the merging of an existing rod with an existing adjacent block", function() {
        expect(1).toBe(2);
    });
    
    it("allows a left side merge - allows the merging of an existing rod with an existing adjacent block", function() {
        expect(1).toBe(2);
    });
    
    it("returns false if merge attempt is made on a non-adjacent block", function() {
        expect(1).toBe(2);
    })
});

describe("grid", function() {
        
    it("returns false if a new rod is created at the location of an existing rod", function() {
        expect(1).toBe("Rod's don't know about other rods.  Something else has to figure out if rods overlap");
    });
    
    it("returns false if block placed on the second portion of an exiting rod", function() {
        expect(1).toBe("Rod's don't know about other rods.  Something else has to figure out if rods overlap");
    });

    it("returns false if block placed on the last portion of an exiting rod", function() {
        expect(1).toBe("Rod's don't know about other rods.  Something else has to figure out if rods overlap");
    });
    
   
});