
describe("rod creation", function() {
    var rod1;
    it("can create a new rod when given the rod length", function() {
        rod1 = new Rod();
        expect(rod1.new(1)).toBe(true);
    });
    it("returns false if the rod length is a negative number", function() {
        rod1 = new Rod();
        expect(rod1.new(-1)).toBe(false);
    });
    it("returns false if the rod length is 0", function() {
        rod1 = new Rod();
        expect(rod1.new(0)).toBe(false);
    });
    it("returns false if the rod length is greater than 10", function() {
        rod1 = new Rod();
        expect(rod1.new(11)).toBe(false);
    });
    it("creates a rod if the rod length is 10", function() {
        rod1 = new Rod();
        expect(rod1.new(10)).toBe(true);
    });
    it("returns false if the rod length is anything other than a number", function() {
        rod1 = new Rod();
        expect(rod1.new('a')).toBe(false);
    });
    it("returns false if the rod length is anything other than a number", function() {
        rod1 = new Rod();
        expect(rod1.new("'")).toBe(false);
    });
    it("can be destroyed", function() {
        rod1 = new Rod();
        rod1.new(2);
        rod1 = null;
        expect(rod1).toBe(null);
    })
});

describe("rod info", function() {
    var rod1;
    it("associates rod length with rod colour", function() {
        var pollock_colours = new Array();
        pollock_colours[1] = 'rgba(255,255,255,1)'; // white
        pollock_colours[2] = 'rgba(255,192,203,1)'; // pink
        pollock_colours[3] = 'rgba(135,206,250,1)'; //light-blue";
        pollock_colours[4] = 'rgba(255,36,0,1)'; //scarlet"
        pollock_colours[5] = 'rgba(255,255,0,1)'; //yellow";
        pollock_colours[6] = 'rgba(238,130,238,1)'; //violet"
        pollock_colours[7] = 'rgba(211,211,211,1)'; //light-grey";
        pollock_colours[8] = 'rgba(220,20,60,1)'; // crimson";
        pollock_colours[9] = 'rgba(65,105,225,1)'; //royal-blue";
        pollock_colours[10] = 'rgba(255,165,0,1)'; //orange";
        pollock_colours[11] = 'rgba(169,169,169,1)'; //dark-grey"
        rod1 = new Rod();
        rod1.new(3);
        expect(rod1.colour).toBe(pollock_colours[3]);
    });
    it("can tell us if it is in use", function() {
        rod1 = new Rod();
        rod1.new(5);
        expect(rod1.inUse).toBe(false);
        rod1.used();
        expect(rod1.inUse).toBe(true);
        rod1.usedCancel();
        expect(rod1.inUse).toBe(false);
    });
    it("can tell us how long it is", function() {
        rod1 = new Rod();
        rod1.new(4);
        expect(rod1.length).toBe(4);
    });
});

xdescribe("rod draw", function() {
    it("draws the rod", function() {
        expect(1).toBe("more code");
    });
    it("returns false if the rod does not exist", function() {
        expect(1).toBe("more code");
    });
    it("returns false if asked to draw anything other than a rod", function() {
        expect(1).toBe("more code");
    }); 
});


  


xdescribe("rod destroy", function() {
    var rod1;
    it("can destroy a rod", function() {
        rod1 = new Rod();
        rod1.new(4);
        rod1.destroy(rod1);
        expect(rod1).toBe(undefined);
    });
    it("returns true if a rod is succesfully destroyed", function() {
        expect(1).toBe("more code");
    });
    it("returns false if the rod cannot be destroyed", function() {
        expect(1).toBe("more code");
    });
    it("cannot destroy a rod that is in use", function() {
        expect(1).toBe("more code");
    });
});
