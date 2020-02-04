(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 612,
	height: 938,
	fps: 24,
	color: "#424242",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApdEUIAAonIS7AAIAAIng");
	mask.setTransform(60.7,82.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2F760").s().p("AmFGGQiiiiAAjkQAAjjCiiiQCiihDjgBQDkABCiChQCiCiAADjQAADkiiCiQiiCijkAAQjjAAiiiig");
	this.shape.setTransform(60.4,55.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.2,55.2,110.5,55.2);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAwQAHARADAQQgWgfgcgXQAKACANAHQgNgRgRgLQAWAFAaAMQgFgLgagSIAiAPQgGgOgLgLQANAMAJACQABgFgHgMIgKgRQgGgKgGgDIAXAMQAFACAIAHQAHAHAEACIgCgGIgEgHIgJgLIgZgcIASAMQALAHAIADQAAgEgGgIIgIgMIATARQgBgHgHgNIgNgSQADAAAJAIIAJAKQAJAGAQAIIgPgaQARALAYAcIAXAeQgNgKgLgFQAJAEAEAWIAGAdQgMgVgPgOQAQASACAaQgEgLgIgIQgFgFgNgIIAOAbIgggbQATAjAPAnQgcgsgUgMQAKATAHAWIgXgYIAIAeQAGARAGALQgPgdgbgQg");
	this.shape.setTransform(7.7,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,18.6);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIBWIgJgKQgMgJgNgGIAPAbQgSgNgWgbIgYgeQARANAHADQgIgFgFgWIgHgdQAMAUAQAPQgPgTgDgYQAFALAHAHQAFAFAOAHIgPgaIAhAaQgTgigQgnQAcAsATAMQgIgTgIgWIAXAYIgIgeQgGgRgGgLQAPAdAbARQgIgUgCgPQATAcAfAbQgMgDgKgGQANASAQAKQgTgEgcgNQAFANAZARIgigPQAGANALALQgOgMgIgCQgBAFAHAMIAKARQAGAKAGADIgXgMQgFgCgHgHQgIgHgFgCQACABAFAMIAJAMIAYAbQgXgRgNgFQABAEAFAIIAJAMIgUgRQABAIAHAMIANASQgDAAgJgHg");
	this.shape.setTransform(7.7,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.2,15.4,18.7);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BAQgcgbAAglQAAglAcgaQAagcAlAAQAlAAAbAcQAbAaAAAlQAAAlgbAbQgbAbglAAQglAAgagbgAgHgHQgDAEAAADQAAAEADAEQAEAEADAAQAEAAAEgEQAEgEAAgEQAAgDgEgEQgEgDgEAAQgDAAgEADg");
	this.shape.setTransform(9.2,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.4,18.4);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C55C").s().p("AgjAqQgMgBgRgCQAPgBAQgFQAbgKAbgXQAUgTAMgQIAMgGQgBAWgLATQgMASgSALQgXANgeAAIgFAAg");
	this.shape.setTransform(9.9,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,0,13.1,8.5);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C55C").s().p("AAnAQQg+gBg5gRIgBgIQAYAOA2gEQAqgGAogJQAEAHgDAIQgDAGgHAEQgJAGgRAAIgFAAg");
	this.shape.setTransform(8.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.4,3.3);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C55C").s().p("AgEAYQgBgZAIgcQAIAWgBALQgBAJgGAIQgDAHgJACg");
	this.shape.setTransform(1,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.1,6.2);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AEE174").s().p("AguFnQgYAAgVgVQgPgQgJgdQgLgrAKgqQAJgpAegiQAJhIgfhDQgMgbgDgIQgIgZACgtQACgrAPgTQAHgJAZgVQAWgSAIgOQAGgMAAgYIAAggIgBgIIgFgJQgFgIACgJQACgJAHgGQAPgKAUAGQAUgGAPAKQAHAGACAJQACAJgFAIIgFAJIgBAIIAAAgQABAaAFAKQAIAOAWASQAaAWAHAIQAPATACArQACAtgJAZIgPAjQgeBBAIBKQAeAiAKApQAKAqgMArQgIAcgQARQgUAVgZAAIguAAIguAAg");
	this.shape.setTransform(12.2,35.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.5,72);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C55C").s().p("AhXAwQgGgCAAgFQAXgJAYgHQAogDAjgTQAngSAagiQgDAlgnAWQgXAOgvALIg5AOIgFABIgHgCg");
	this.shape.setTransform(9.4,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,10);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSA/QgCgBAAgGIAAhwIgCADQABgGAHgCQAGgDAGADQAHAEAHAPQAUArgOAuIgDAHQgDAEgGABQgIAEgLABg");
	this.shape.setTransform(2.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.8,12.8);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C55C").s().p("AgzA3QgNABgMgGQA0gPAhgYQArgbATgpQAVAig1AoQgqAigoAHg");
	this.shape.setTransform(7.7,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.5,11.8);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXBSQgDgCAAgHIAAiTIgDAEQACgIAIgDQAJgDAIAEQAJAFAJATQAMAcACAdQACAfgIAdQgCAHgDACQgCAEgJADQgLAGgOAAIgGgBg");
	this.shape.setTransform(3.1,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.2,16.8);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C55C").s().p("AgKAbQgGgBgLgEQAHgBAHgEQAdgQAagbIADAHQgEAFgHAOQgHALgFAFQgKALgPAAIgHAAgAgsAOIARAIIgDAAQgJAAgFgIgAgbAWIAAAAg");
	this.shape.setTransform(4.6,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.1,5.6);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBBQgBgBAAgGIAAh1IgCADQABgGAFgCQAFgDAEADQAFAFAFAPQAOAsgKAwQgBAGgBACQgCADgFADQgFAEgIAAIgEgBg");
	this.shape.setTransform(1.8,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.6,13.4);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C55C").s().p("AAGB8QgGgCgDgIQg8hcgFhqQgBgdANgKQABAAAAAAQABgBAAABQABAAAAAAQABABABAAQACADAAADIAFAwIAGAwQAJA3AZAhIAVAcQALAJAVgDIAUgRQgTAUgdAPQgHAFgFAAIgDgBg");
	this.shape.setTransform(6.9,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.9,25);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAtQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIAAhQIgCACQABgFAEgBQADgCAEACQACADAEALQALAegHAhIgCAFQgBACgEACQgDADgHABIgCgBg");
	this.shape_1.setTransform(1.3,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.7,9.3);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C55C").s().p("AAIBqQASgPAEgaQAEgYgIgYQgNghgqgpQgbgaACgTIACgDQAEgFAHAIIBMBcQAPARADALQACAIgBARIgCAtIgCAHQgBADgFACQgPAIgQAAg");
	this.shape.setTransform(5.5,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,21.7);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEE174").s().p("ABaFAIgvgNQgcgIgSAAIgSABIgTABQgfgEgqg1Qgqg0gggBQgHgSgJgtQgIgqgLgVQgGgLgLgNIgTgXQgvg5gRhHQgShLAUhFQADgKADgDQAHgFAOAEQAzAOAvBCQAHAKAWArQAQAiASAOQAVARAdABQAdAAAVgQQAWgQAHgcQAFgcgIgZQgJgUgxguQgogmABghQAtgWBGA9QA4AwAvBAQAvBBAbBEIADAGIAJAZQAGALAGAJQAaAjA5AIQASAEAFAEQAFAFADANQALAxgPAyQgPAxgjAjQgkAjgxAOQgcAIgbAAQgWAAgVgFgAksjlIAEABQgGACABAKQADBOAJAjQAPA+AoAjQAHAGAIACQAKADALgFQALgDAFgLQALgSgJgZQgFgPgRgZQgfgxgbgxQgSgigUAAIgCAAgAAZhlQAPgNADgUQADgVgKgQQgHgKgGADIgBAMIADgCQgBAlABAegAAJjUQgDgWgPgVQgLgOgZgVQgPgNgMgBQgCARAYAUIA7A3IAAAAg");
	this.shape_1.setTransform(33.2,32.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.5,65.2);


(lib.Path_91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIAMggIABAAQgBAFADAEQADAFADACQAGACAFgBQAGgCACgEIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIANggQgBAFADAEQADAFADACQAOAFAFgKIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGADADAEQADADgCAFIAAABQgEAGgHAAIgGgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgFgCQgFgCgCgFQgDgEACgFIANggQgCALALAFQAFACAGgBQAFgCACgEIgNAgQgBAFgFACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgMgFABgIIABgBQABgFAGgBQAFgCAEACQAGADADAEQAEADgCAFIgBABQgCAEgFABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,2.5);


(lib.Path_85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgFgCQgFgCgCgFQgDgEACgFIANggIAAABQgBAEADAEQADAFAEACQAFACAGgBQAFgCACgEIgNAgQgBAFgFACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEAAgDIABgBQABgFAGgBQAFgCAEACQAGADADAEQAEADgCAFIgBABQgCAEgFABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,2.5);


(lib.Path_83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIAMggIABABQgBAEADAEQADAFADACQAGACAFgBQAGgCACgEIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIANggIAAABQgBAEADAEQADAFADACQAOAFAFgKIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGADADAEQADADgCAFIAAABQgEAGgHAAIgGgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIANggIAAABQgBAEADAEQADAFADACQAOAFAFgKIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGADADAEQADADgCAFIAAABQgEAGgHAAIgGgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgFgCQgFgCgCgFQgDgEACgFIANggIAAABQgBAEADAEQADAFAEACQAFACAGgBQAFgCACgEIgNAgQgBAFgFACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEAAgDIABgBQABgFAGgBQAFgCAEACQAGADADAEQAEADgCAFIgBABQgCAEgFABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,2.5);


(lib.Path_75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIAMggIABABQgBAEADAEQADAFADACQAGACAFgBQAGgCACgEIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIAMggIABABQgBAEADAEQADAFADACQAGACAFgBQAGgCACgEIAAABIgNAfQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIANggIAAABQgBAEADAEQADAFADACQAOAFAFgKIAAABIgNAfQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGADADAEQADADgCAFIAAABQgEAGgHAAIgGgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgFgCQgFgCgCgFQgDgEACgFIANggIAAABQgBAEADAEQADAFAEACQAFACAGgBQAFgCACgEIAAABIgNAfQgBAFgFACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEAAgDIABgBQABgFAGgBQAFgCAEACQAGADADAEQAEADgCAFIgBABQgCAEgFABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,2.5);


(lib.Path_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgFACgFIAMgfIABAAQgBAFADAEQADAFADACQAGACAFgBQAGgCACgEIgNAfQgCAFgEACIgDACIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3.1,2.5);


(lib.Path_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgFACgFIANgfQgBAFADAEQADAFADACQAOAFAFgKIgNAfQgCAFgEACIgDACIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGADADAEQADADgCAFIAAABQgEAGgHAAIgGgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3.1,2.5);


(lib.Path_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgFgCQgFgCgCgFQgDgFACgFIANgfQgCALALAFQAFACAGgBQAFgCACgEIgNAfQgBAFgFACIgDACIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgMgFABgIIABgBQABgFAGgBQAFgCAEACQAGADADAEQAEADgCAFIgBABQgCAEgFABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3,2.5);


(lib.Path_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgFgCQgFgCgCgFQgDgFACgFIANgfQgCALALAFQAFACAGgBQAFgCACgEIgNAgQgBAEgFACIgDACIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgMgFABgIIABgBQABgFAGgBQAFgCAEACQAGADADAEQAEADgCAFIgBABQgCAEgFABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3,2.5);


(lib.Path_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgFACgFIAMgfIABAAQgBAFADAEQADAFADACQAGACAFgBQAGgCACgEIgNAgQgCAEgEACIgDACIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3.1,2.5);


(lib.Path_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgFACgFIANgfQgBAFADAEQADAFADACQAOAFAFgKIgNAgQgCAEgEACIgDACIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGADADAEQADADgCAFIAAABQgEAGgHAAIgGgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3.1,2.5);


(lib.Path_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIANggIAAABQgBAEADAEQADAFADACQAGACAFgBQAGgCACgEIAAABIgNAfQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgEgCgCgFQgDgEACgFIANggIAAABQgBAEADAEQADAFAEACQAFACAFgBQAGgCACgEIAAABIgNAfQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEAAgDIABgBQABgFAGgBQAFgCAEACQAGADADAEQAEADgCAFIgBABQgCAEgFABIgEABIgFgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,2.5);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgFACgFIANgfQgBAFADAEQADAFAEACQAFACAFgBQAGgCACgEIgNAfQgCAFgEACIgDACIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgCAKQgGgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGADADAEQADADgCAFIAAABQgCAEgGABIgEABIgEgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3.1,2.5);


(lib.Path_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgFACgFIAMgfQgBALAKAFQAGACAFgBQAFgCACgEIABAAIgNAfQgCAFgEACIgEACIgEgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgMgFABgIIABgBQACgFAFgBQAFgCAEACQAHACADAFQADADgCAFIgBABQgCAEgFABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3.1,2.5);


(lib.Path_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIAMggIABABQgBAEADAEQADAFADACQAGACAFgBQAFgCACgEIABABIgNAfQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAFgCAFACQAGACADAFQADADgCAFIgBABQgCAEgFABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIANggIAAABQgBAEADAEQADAFADACQAGACAFgBQAGgCACgEIAAABIgNAfQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgFACgFIAMgfIABAAQgBAFADAEQADAFADACQAGACAFgBQAGgCACgEIgNAfQgCAFgEACIgDACIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3.1,2.5);


(lib.Path_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgFACgFIANgfQgBAFADAEQADAFAEACQAFACAFgBQAGgCACgEIgNAfQgCAFgEACIgDACIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgCAKQgGgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGADADAEQADADgCAFIAAABQgCAEgGABIgEABIgEgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3.1,2.5);


(lib.Path_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIANggIAAABQgBAEADAEQADAFADACQAGACAFgBQAGgCACgEIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgEgCgCgFQgDgEACgFIANggIAAABQgBAEADAEQADAFAEACQAFACAFgBQAGgCACgEIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEAAgDIABgBQABgFAGgBQAFgCAEACQAGADADAEQAEADgCAFIgBABQgCAEgFABIgEABIgFgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,2.5);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgFgCQgFgCgCgFQgDgFACgFIANgfQgCALALAFQAFACAGgCQAFgBACgEIgNAfQgBAFgFACIgDACIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgMgEABgJIABgBQABgFAGgBQAFgBAEACQAGACADAEQAEAEgCAEIgBABQgCAEgFABIgEABIgFgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3,2.4);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgFACgFIAMgfIABAAQgBAFADAEQADAFADACQAGACAFgCQAGgBACgEIgNAfQgCAFgEACIgDACIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgBAEACQAGACADAEQADAEgCAEIAAABQgCAEgGABIgFABIgEgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3.1,2.4);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIAMggIABABQgBAEADAEQADAFADACQAGACAFgBQAFgCACgEIABAAIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAFgCAFACQAGACADAFQADADgCAFIgBABQgCAEgFABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIANggIAAABQgBAEADAEQADAFADACQAGACAFgBQAGgCACgEIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgFACgFIANgfQgBAFADAEQADAFADACQAOAEAFgJIgNAfQgCAFgEACIgDACIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGADADAEQADADgCAFIAAABQgEAGgHAAIgGgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3.1,2.5);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgFgCQgFgCgCgFQgDgFACgFIANgfQgCALALAFQAFACAGgCQAFgBACgEIgNAfQgBAFgFACIgDACIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgMgEABgJIABgBQABgFAGgBQAFgBAEACQAGACADAEQAEAEgCAEIgBABQgCAEgFABIgEABIgFgCg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,3,2.4);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIANggQgBAFADAEQADAFADACQAOAFAFgKIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGADADAEQADADgCAFIAAABQgEAGgHAAIgGgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgFgCQgFgCgCgFQgDgEACgFIANggQgCALALAFQAFACAGgBQAFgCACgEIgNAgQgBAFgFACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgMgFABgIIABgBQABgFAGgBQAFgCAEACQAGADADAEQAEADgCAFIgBABQgCAEgFABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,2.5);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIAMggIABAAQgBAFADAEQADAFADACQAGACAFgBQAGgCACgEIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIANggQgBAFADAEQADAFADACQAOAFAFgKIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGADADAEQADADgCAFIAAABQgEAGgHAAIgGgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgFgCQgFgCgCgFQgDgEACgFIANggQgCALALAFQAFACAGgBQAFgCACgEIgNAgQgBAFgFACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgMgFABgIIABgBQABgFAGgBQAFgCAEACQAGADADAEQAEADgCAFIgBABQgCAEgFABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,2.5);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIAMggIABAAQgBAFADAEQADAFADACQAGACAFgBQAGgCACgEIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIANggQgBAFADAEQADAFADACQAOAFAFgKIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGADADAEQADADgCAFIAAABQgEAGgHAAIgGgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CB64").s().p("AgGAZIgFgCQgFgCgCgFQgDgEACgFIANggQgCALALAFQAFACAGgBQAFgCACgEIgNAgQgBAFgFACIgDABIgFgBg");
	this.shape.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414D20").s().p("AgDAKQgMgFABgIIABgBQABgFAGgBQAFgCAEACQAGADADAEQAEADgCAFIgBABQgCAEgFABIgEABQgCAAgDgCg");
	this.shape.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,2.5);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIAMggIABAAQgBAFADAEQADAFADACQAGACAFgBQAGgCACgEIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape_1.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape_1.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIANggQgBAFADAEQADAFADACQAOAFAFgKIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape_1.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGADADAEQADADgCAFIAAABQgEAGgHAAIgGgCg");
	this.shape_1.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0CB64").s().p("AgGAZIgFgCQgFgCgCgFQgDgEACgFIANggQgCALALAFQAFACAGgBQAFgCACgEIgNAgQgBAFgFACIgDABIgFgBg");
	this.shape_1.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414D20").s().p("AgDAKQgMgFABgIIABgBQABgFAGgBQAFgCAEACQAGADADAEQAEADgCAFIgBABQgCAEgFABIgEABQgCAAgDgCg");
	this.shape_1.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,2.5);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0CB64").s().p("AgGAZIgGgCQgFgCgCgFQgCgEACgFIAMggIABAAQgBAFADAEQADAFADACQAGACAFgBQAGgCACgEIgNAgQgCAFgEACIgDABIgFgBg");
	this.shape_2.setTransform(2.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,5.3);


(lib.Path_92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414D20").s().p("AgDAKQgFgCgDgEQgDgEABgDIAAgBQACgFAFgBQAGgCAEACQAGACADAFQADADgCAFIAAABQgCAEgGABIgEABQgCAAgDgCg");
	this.shape_1.setTransform(1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,2.5);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEE174").s().p("AU+KxIjVgDMgwZgANIgE0+QBugpCpAqICNAjQBSARBDgCQAjgCCQgSQB8gPB8ABQA4ABBZAVQBvAbAhAEQAzAIAaACQAtAFAggCQAjgCA8gTQBLgYAUgEQCygkCNAWQAyAIBpAUQBeAQBBgBQAzAAA3gOQARgEBQgZQCDgpB7AEQA+ABBDAOQAxAJBOAWQA8ARAlAEQBGAJBKgNQA0gIBZgbQBIgXBugCIBqAAQEwAagEAPQgVBGgSB0QgVCDgOA5QhHEbhDDXQgsCOgrByQgHAVgZBYQgaBRgXAMQgFACgOgBIgUgCQg5ADhLAAIhQgBg");
	this.shape_1.setTransform(197.4,69.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.2,394.7,138.1);


(lib.Path_93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3D0C9").s().p("ABVENQgXAAgmgRQgngSgTgCQgTgDgiAFQgmAFgPgBQghgBglgTQgYgMgngcQgigYgRgPQgbgYgNgZIgbg7QgRgfgWgVQgqgrgwADQgJABgQADIgYADQhAAFAgguQAcgnAmgSQA8gdBCAZQA9AWAnA5QAkgUAVAAQAQABARATQANAPAQgIQAGgCALgPQAMgRAFgDQAVgQAegKQA+gTA3ARQBEAVAFBBQARgaAkgEQAjgDAWAXQgIgIALgjQAIgZAKgSQASgiAqgnQA8g3BPAFQBNAGA4A8QAQggAPgKIADgBQAIgEAIABQAJACAEAGIABABIAAGIQgWAogdAYQhIA8iCgKIhrgLQg+gFgrAIIgfAHQgRADgLAAIgDAAg");
	this.shape_2.setTransform(61.2,27);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122.6,54);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEE174").s().p("Ag5HBQggAAgZgaQgTgVgKgkQgPg1AMg0QANg0AkgqQAMhcgnhTIgTgsQgKggADg4QACg2ATgXQAIgLAhgaQAbgXAKgSQAHgNAAggIAAgoIgBgKIgHgLQgFgJACgMQADgLAJgIQAIgGANgBQAMgBAKADQALgDALABQAOABAIAGQAJAIACALQADAMgGAJIgHALIgBAKIAAAoQAAAfAIAOQAJASAcAXQAhAaAIALQATAXACA2QADA5gKAfIgTAsQgnBSALBdQAlAqANA0QAMA0gPA1QgJAigUAXQgZAbgggBIg6AAIg5AAg");
	this.shape_2.setTransform(15.3,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,90);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWBPQgDgCAAgHIAAiNIgDADQACgHAIgDQAIgCAHADQAJAFAJATQAZA1gRA6QgCAGgDADQgCADgIAEQgMAFgNABIgFgBg");
	this.shape_2.setTransform(3,8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,16.1);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBSQgCgCAAgHIgBiTIgCAEQABgIAHgDQAGgDAFAEQAHAGAGATQASA3gMA9IgDAJQgDAEgGADQgHAFgKABIgEgBg");
	this.shape_2.setTransform(2.2,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.5,16.8);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLA4QgCgBAAgFIAAhlIgCACQABgFAFgCQAFgCAEADQADADAFAOQAOAmgKApIgCAHQgBADgFACQgFAEgHAAIgCAAIgBgBg");
	this.shape_3.setTransform(1.6,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.3,11.6);


(lib.Path_94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAQQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgdIgBABQABgDAKABQADABADAEQAKAKgHAMIgCACIgNADg");
	this.shape_3.setTransform(1.3,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.6,3.4);


// stage content:
(lib.comosefazplástico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdCNQgPgDgJgMQgIgMADgQIAGgYIAHgXQALglANghQAOgjAOgiQAEgKgBgFQgCgFgKgFIgFgBIgGgBIgJgFIgIgGQgEgDABgEQABgEAGgBQAUgEAOABQAQABATAFIAHAEQAIAEABAGQACAFgEAIIggBBQgQAhgJAfIgHAaIgHAbIgCAJIABAJQAAAEAHADQAGAEAGACIARAFIAMAEIAKAEQAFACADAHQgHAFgLADQgKADgMACIgVADIgFAAQgIAAgGgCg");
	this.shape.setTransform(168.4,125.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwCGQgHgFgBgLIAAgJIAAgIQAFgrADgqQACgpAFgqQAAgbALgTQAKgTAZgHQAQAAAJAGQAJAHAFAJQAEAKACAKIABATIgBAfIAAAaIACAYIACAfQACAXAAAWQgCAXADAXIAAADQgIAGgGgBQgFgCgFgJQgDgGgBgHIgCgOIAAgMIgBgLIgBgGIgBgFQgFgLgJgBQgJgCgFAIQgLAKgCAQIgCAPIgCAQQgBAGgCAFQgBAFgEAFQgEAFgEABIgBABQgFAAgFgGgAgBhlQgFAEgBAQIAAAtIABAAIgBAXIABAWQAAAKAGAAQAHABAGgGQAGgFABgJIABgJIAAgLIAAgZQgBgMAAgNQACgLgFgIQgEgJgFgEIgFgBQgDAAgBACg");
	this.shape_1.setTransform(155.1,125.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdCKIgEgHIgDgLIgDgMIAAgDIAAgEIAAhrIAAhtQAAgLADgEQADgFAKgDQAigJAdAaIAAACQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgJAAIgIABQgZADgHAcQgCALAAALIABAVIADAPQADAMAJABQAPACAKAMQAFAHgHAEQgDACgDAAIgGACIgEAAIgDABQgIACgFAFQgEAEgBAMIgBAHIAAAIIABAcIAAAdQAAAJgCAKQgBADgCADQgCAEgEABIgBAAQgDAAgDgDg");
	this.shape_2.setTransform(144.4,125.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFCKQgNAAgHgDQgFgCgDgEQgCgFgBgFIgBgKIgBgHIgChZIgDhWIAAgVIAAgVIAAgJIADgIIAFgFQADgBAEACQAFACAJABIAOAAIAKAAIALAAQAGABAGACQAGACADAGQADAGgBAEQgCAEgHAAIgHAAIgGgBIgFgCIgEAAQgJgBgEADQgBAEAAAIIAAAKIAAAJIABAhIAAAgQAAAGACACIAHAEIAFAAIAFABIAMAAQACAAACACQACACABADQABAHgGACIgGACIgHABIgEABIgEAAQgGACgCAEQgDAEgBAFIAAAlIAAAmIARACQAHAAAFACQAEACADAEIAIAIQADADgIADQgIACgMACIgRABIgHgBg");
	this.shape_3.setTransform(128,125.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHCPQgHgBgEgDQgKgGgHgLQgGgKgDgNQgEgNgCgOIgCgcQgBgFABgFIACgIQABgEAEgFQAJgJALAFQAFACACADQABAEgBAGQgHAgAOAfQAHAOAEABQABACADgGIADgRIADgTIACgNIABgNQABgVgRgMIgEgCIgDgCQgggRgHgiQgFgVAFgTQAEgTAQgRQAGgHAKgGQAUgMATAPQAIAGAFAJQAGAJAEAOQAEANAAAOQABANgDAOQgDAOgHAMIgKgEQgEgBgCgCQgCgCgBgDQgBgEABgIIAAgKIAAgSIgBgUQgBgKgCgHQgDgHgEgBQgFgCgGAIQgGAHgDALQgEAKAAANQAAALAEAMQADAMAFAIQAHAMAJAGIAQAIQAIAFAFAJQAFAIACATQACASgDARQgDASgHARQgCAGgEAGIgIAKQgDADgGACQgGACgHAAIgEAAIgHAAg");
	this.shape_4.setTransform(116.4,124.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFCKQgLgCgJgGQgIgHgFgLQgFgLgCgOQgDgNgBgQIgCgeIgCgcIAAgXIABgXIADgZQABgKADgKQADgJAFgKQAGgJAHgHQAIgHAKgDQAYgIAQAVQAFAGADAHIAFAPIAGAeQACAPgBAQIAAA7IgBA9IgCAPIgEAOQgEAKgIAGQgJAFgLACIgKABIgKgBgAgBhpQgGABgDAFQgDAFgBAEIgFAjQgCATgBATQgBARAAATQAAATADARQACAPAFAOQAEAOAGAIQAEAHAGgDQAGgDAEgUIABgbIAAgbIAAgZIABgaIABgcIAAgaIgCgOQgBgHgCgGQgBgEgGgCIgGAAIgDAAg");
	this.shape_5.setTransform(96.2,125.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag5CNQgHgBgEgEQgFgEgBgHQgEgMAAgNIAAhDIAAhBIAAgpIABgpIABgIIABgJQACgGAFgBQAEgCAHAEQAEACAFAFQAfAhAIAqIAHAdIACAYIAFASIADgRIACgRIAEgTIACgPIAJgnIAIgmQADgOAOACQAKACAGAFQAGAFADAJQAEAPAAARIgCBTIgBBRIgBAQIAAAQIAAAHQgCAQgKACQgGABgGgDQgFgDgDgGQgEgKABgHIABgYIACgYIACgeQACgPgDgNIgDgMIgEgLIgDAAIgCAHQgIAcgEAfQgEAegBAfQgBAJgCADQgCAEgGABQgFABgHgDQgGgDgDgHIgBgMIgBgMIAAgIIABgJIAAgCIgDgaIgHgfIgJgiIAAADIAAADIgBAdIgBAsIgBArIgCAfQAAANgLAAIgEAAg");
	this.shape_6.setTransform(79.9,125.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFCKQgLgCgJgGQgIgHgFgLQgFgLgCgOQgDgNgBgQIgCgeIgCgcIAAgXIABgXIADgZQABgKADgKQADgJAFgKQAGgJAHgHQAIgHAKgDQAYgIAQAVQAFAGADAHIAFAPIAGAeQACAPgBAQIAAA7IgBA9IgCAPIgEAOQgEAKgIAGQgJAFgLACIgKABIgKgBgAgBhpQgGABgDAFQgDAFgBAEIgFAjQgCATgBATQgBARAAATQAAATADARQACAPAFAOQAEAOAGAIQAEAHAGgDQAGgDAEgUIABgbIAAgbIAAgZIABgaIABgcIAAgaIgCgOQgBgHgCgGQgBgEgGgCIgGAAIgDAAg");
	this.shape_7.setTransform(63.5,125.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgECJQgHgBgHgDQgGgDgFgFQgHgJgEgIQgFgIAAgLIACgyQACgZAAgYIAAgdIABgeQAAgRAGgRQAHgUAQgJQAGgEAGAAQAHgBAHABQAIACAGAFQAGAEADAHQAHAMABANQABAMgBAOIgBAFIgFAGIgGAEIgGACQgEAAgCgCQgFgFAAgKIgBgSQgBgQgDgDQgEgCgEAEQgEAFgCAJQgDAKAAAJIgCAbQgBAOABAOIABAtIACAvIAAAEIABACIAAACIAAAEIABAFIACAGQABAJAGgIQADgGAAgGIABgLIABgIIABgIIAAgLIADgPQABgIADgFQADgEAGAAIALABIACAmQACASgCASQgCANgEAHQgFAHgJAHQgGAFgHACQgGABgEAAIgDAAg");
	this.shape_8.setTransform(50.7,125.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHCnQgOgDgJgHQgLgIgGgOQgFgNgDgQQgEgRgBgSIgDglIgBgiIgBgcIACgcIADgeQABgMAEgMQADgMAHgLQAHgLAJgIQAJgIAMgFQAdgJAUAZQAGAHAEAJIAGASQAEASACATQADASgBASIAABIQAAAlgBAlQAAALgCAHQgCAHgEAKQgEAMgLAHQgKAHgNACIgMABQgGAAgHgBgAgCh/QgHABgDAGQgEAGgBAFQgEAUgDAWIgEAuQgBAVABAXQAAAXADAUQACATAGARQAGARAHAJQAFAJAHgEQAIgEAEgYIABggIAAghIABgfIABggIABghIAAgfIgCgRQgBgIgDgIQgCgFgHgCIgIgBIgDABg");
	this.shape_9.setTransform(155.1,173.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFCmQgJgBgIgDQgIgEgFgHIgPgUQgFgKAAgOIACg8QACgeABgdIAAgjIABgkQAAgVAHgVQAIgXAUgMQAHgEAIgBQAJgBAIACQAJACAHAGQAIAFAEAJQAIAOABAPQACAQgCAQIgBAHQgCADgDADQgEADgEACIgIACQgEABgDgDQgFgGgBgMIAAgVQgCgUgEgDQgFgEgFAGQgEAFgDAMQgEALAAALIgCAiQgCAQABARIACA3IACA4IABAFIAAADIABACIAAAFIABAHIACAHQACALAHgLQAEgHAAgHIABgNIABgKIABgKIABgNIACgRQACgKAEgGQADgFAHAAIAOABIADAtQABAWgCAXQgCAOgFAJQgGAJgLAJQgHAGgIACIgLABIgFAAg");
	this.shape_10.setTransform(139.7,172.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAECdQgPgFgDgQQgEgTgBgSQgCgmgBgmQgBgkACgmIACgmIADgmQABgKAFgKQAGgKAHAAQAKABAFAKQAEAHABAIQABAHgBAIIgCA0IgCAzIAAAYIgBAAIABBDIABBCQAAAOgLAAIgFgBg");
	this.shape_11.setTransform(128.7,173.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFCrQgMgEgIgNQgFgJgCgJQgBgKAAgLIAAgRIAAgRIADhlIAChnIAAgFIAAgFIgTgBQgGAAgFgDQgFgDgDgFQgEgFABgFQABgMAOgBQAegDAegBIARABIASABIALAEIAKAFQAEACADAFQACAEgCAGIgZACQgNACgOAEIAACYIABCYQgIAFgIAAIgHgCg");
	this.shape_12.setTransform(118.1,172.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJCtQgIgBgEgDQgNgIgIgNQgIgNgEgQQgEgPgCgRIgDgiQgBgGABgFIACgLQACgFAFgGQAKgKAOAGQAGADACADQACAEgCAIQgIAnAQAlQAJARAEACQADABADgHQACgHACgNIADgYIACgPIACgQQABgZgVgOIgEgDIgFgDQgmgUgJgpQgFgaAFgXQAGgXATgUQAIgJALgHQAYgOAXASQAKAHAGAKQAIAMAEAQQAFAQABARQAAARgDAQQgEARgIAOIgMgFQgFgBgCgCQgDgCgBgEQgCgFACgKIAAgNIAAgVQAAgMgBgMQgCgMgCgIQgDgIgGgCQgFgCgIAJQgHAIgEAOQgEANAAAOQAAAPADAOQAEAOAGAJQAKAPALAHIATALQAJAGAGALQAGAKADAWQADAWgEAVQgEAVgIAVQgDAHgEAHIgLAMQgDAFgIACQgHACgIAAIgFAAIgJAAg");
	this.shape_13.setTransform(102.8,173.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag7DRQgIgGgBgNIAAgLIABgKQAGg0ACgzQADgzAGgxQABghAMgXQAMgXAfgIQATgBALAIQALAIAGALQAFAMACANQACANAAAKIgBAlIAAAdIACAfIADAmQACAcgBAbQgBAbADAcIAAAEQgKAHgHgBQgGgCgGgLQgEgIgBgIIgCgSIAAgNIgBgOIgCgGIgCgHQgGgNgKgCQgKgCgIAJQgMANgDATIgDATIgCATQgBAHgCAGQgDAGgEAFQgEAHgGABIgBAAQgFAAgHgGgAgBhLQgHAFgBATIAAA0IABAAIAAAdIAAAcQAAAMAIAAQAJABAGgGQAIgHABgLIABgNIAAgNQABgPgCgNQgBgPABgQQACgNgEgKQgGgLgGgEQgDgCgDAAQgEAAgBADgAAKiUQgCgIABgKIABgHIAAgHQgCgIABgGQABgGAGgFQAEgEAEgCIAHgDQAJAGACAOQACAOgGAQQgEALgGAGQgFAGgFAAQgFAAgDgHg");
	this.shape_14.setTransform(88,168.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAJCnIgRgCIgTgDIgFgBIgGgCIgSgHQgFgDAAgNIAAgcIABgdIAEhpIAEhsQAAgNAFgLQAFgNANAIQAOAKADAQIADAYIACAXIAABYIABBWQAAASADARQACAMAJADIAXAEIARADQASAFgFAVIgaAAIgaAAg");
	this.shape_15.setTransform(73.8,172.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrCqQgFAAgIgIQgHgIgDgKQgDgJABgLQAHg/ACg9QABg/gDhAIAAgRIAAgSQASgIARAAQARABAQAHQAWAHAOAOQANANAHARQAGAQAAATQABATgFASQgEASgIARQgJAOgLAMIgFAFQgIADgHgBIgMgDQgFgCgEABQgEABgDAGQgBACAAAKIAAAXIAAAeIgCAeIgEAZQgDALgFADQgIAFgEAAIgBgBgAgQh+IAAAPIAAAQIAAAgIAAAhIABAKQABAHACAFQADAFAFADQAEAAAJAAQAAAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAIACgDIACgHQAGgWAAgWQAAgWgEgWIgFgSQgCgIgJgCIgHAAIgLABg");
	this.shape_16.setTransform(60,173.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ap7EJIAAoRIT3AAIAAIRg");
	this.shape_17.setTransform(109.5,172.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(127));

	// why not
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgNBcIgGgCIgGgDQgDgBgBgCIgBgDIAAgBIAAgCQAHgBAFABQAGAAAFADQAEADgBACQgBAEgCABIgEABIgCAAgAgUBEQgDgBgCgCIgBgFIAAgJIABgJQAAgIADgFIAGgLIAIgMIAIgLIAHgOQAEgIADgIIADgNQABgHgDgHQgCgHgDgFQgCgEgDAAQgEgBgBADQgEACgCADIgEAHQgIAVgBAVIgBAJQAAAFgDADQgBAEgCABQgCAAgEAAQgCgFgBgGIgBgKQAAgMABgKQACgLAEgKQAEgJAGgGQAHgGAJgEQAKgDAJAEQAKAEAFALQAFAIAAAJQABAJgBAJQgEAcgVATIgLALQgHAKABANIAAAFIAAAFQAAAHgFAEIgEADIgDABIgCAAg");
	this.shape_18.setTransform(337.7,75.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgCBdQgGgCgEgHQgDgFgBgFIgBgLIAAgKIAAgJIACg2IABg4IAAgDIAAgCIgLgBIgGgCIgEgEIgCgGQABgGAIgBIAfgCIAKAAIAKABIAFACIAGADQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQACACgBAEIgOABQgHAAgIADIABBRIAABTQgFADgEAAIgDgBg");
	this.shape_19.setTransform(329.4,75.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDBbQgIgCgFgEQgFgEgDgIQgEgHgCgJIgCgTIgBgUIgBgSIgBgPIACgPIABgQIACgNQADgHADgGQAEgGAFgEQAFgFAHgCQAOgFAMAOIAFAIIADAKIADAUIABAUIAAAmIAAApIgCAJIgCAKQgDAGgFAEQgGADgHACIgIAAIgFAAgAgBhEQgDAAgCAEIgDAFIgDAXIgCAZQgBALABAMQAAANACALQABAKACAJQAEAJADAFQACAFAEgCQAEgCADgNIABgSIAAgRIAAgRIABgRIAAgSIAAgRIgBgJIgCgIQgCgDgEgBIgDgBIgCABg");
	this.shape_20.setTransform(320.8,75.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AATBbQgGgDgDgEQgEgFgCgGIgCgNIgBgQIgBgRIAAgKIgEgRIgEgPIgDgJIgCgBIgCgCIgBAFIAAAEIAAATIAAAcIAAAcIgBAWQAAAFgCADQgBADgFABQgEABgCgCIgEgHQgCgEgBgFQgBgFABgFIACgfIABgfIADglIACgnIABgGQABgDAEgCIAGABQAEABACADQADAFACAFIAIAbIAKAbIABACIABACQAFgOAAgOQABgOgCgOIAAgHIABgFIABgEIACgDQAEgEAFABQAFAAACAGQACAEAAAHIAAAOIgBANIgFA8IgEA8IAAAFIgBAFQAAAFgDABIgDABIgDAAg");
	this.shape_21.setTransform(311.7,75.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AABBbIgBAAIgFgBIgEgDIgCgDIAAgDIgBgWIAAgQIABgfQAAgNgDgPQgDgQgFgOQgFgOgHgOIgBgBIgBgCQgEgGAEgEIAFgEIAGABIAFACIAFAEQADACACAGIAEAOIADANIADALIAAADIAAAEIAAAAIADgPIAEgPIABgIIADgIQACgFAFgDQAFgEAGABIAEABIADACIACAEIABAEIgCAFIgEAEIAAABQgJALgDANQgEANgBAOIgBAZIgBAaIAAAIIgBAHIgBAhIAAACQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgCACgEABIgDgBg");
	this.shape_22.setTransform(298.8,75.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgfBXQgCgEAAgFIgBgKIAAghIAAggIAAgEIAAhHIABgIQABgDAEgCQAEgBAEABQAEACACAEIADAHIABAHQABANAAAMIgDAZIAAACIAAADIAAAFQAAADADABIAGABQADAAAAgCQAEgGABgGIAFgjIACgRIACgQQAAgFACgCQABgCADgBQAEgBADABQAEACABADIACAGIABAGQAAAFgBAFIgBAKQgEAhgBAfQgBAhAAAhQAAAHgBACQgCADgEABQgEABgEgBQgDgCgCgFIgCgGIgBgGIAAgUIAAgTIgBgIQgBgCgCgBQgDgBgDACQgDACgCAFIgBAFIAAAGIAAAWIAAAVIgBAIQgCACgDACIgDAAQgGAAgEgGg");
	this.shape_23.setTransform(290,75.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAeBcQgFgBgDgEIgDgJIAAgCIAAgCIgKgzIgJgxIgLAxIgMAzIgBACIAAACQgBAGgDAEQgCAEgGAAQgEABgFgDQgFgDgCgGIgCgJIgCgJIAAgbIAAgaQAAgWgCgXIgFgwIAAgCIgBgDQAFgEAEAAQAFAAAEADQAGAEAEAGQAEAHAAAJIgBAJIgBARIgBAWIgCAVIgBARIAAAJIACAGQACADAEABIACgIIACgSIADgUIACgWIACgRIACgJIABgIIABgJQABgEACgDIAEgFQADgHAGADQAMADACAMIABAJIABAJIABAIIABASIACAWIACAUIACARIACAJQAEgBACgCIACgHIAAgIIAAgSIgBgUIgBgXIgBgRIAAgJQABgSAOgIQAFgCAEAAQAEAAAFAEIgBADIAAADIgHAvIgEAtIgBAaIgBAaQAAAKgEAJQgCAFgFADQgEADgDAAIgDgBg");
	this.shape_24.setTransform(278.7,75.7);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(306,55.2,1,1,0,0,0,60.6,55.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(127));

	// Layer 61
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDBFIgFgCQgFgDgDgFQgDgFgCgHQgCgGAAgHIgCgNIAAgFIABgEIADgEQAEgEAFACIAEADIAAAEQgDAQAGAOQADAHACABQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIACgIIABgKIABgGIABgGQAAgKgHgGIgCgBIgBgBQgQgHgDgRQgCgKACgJQACgJAHgIIAIgGQAJgGAJAHQAEADACAEQADAFACAGQACAGAAAHQABAHgCAHQgBAGgEAGIgEgCIgDgBIgCgDIAAgGIAAgFIAAgIIAAgKIgCgIQgBgDgCgBQgCgBgDAEQgCADgCAFQgCAGAAAGIACALQABAGADADIAHAJIAIADQADADADAEQACAEABAJQABAIgBAJIgFARIgDAFIgEAFIgEADIgHABIgEAAg");
	this.shape_25.setTransform(51.6,901.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLBBQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCgFIAAgFIgBgDIgBgrIgBgpIAAgKIAAgKIAAgEIABgEIADgCQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQADABAEAAIAGABIAEgBIAGABIAFABQADABACADQABADAAACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAgBAAIgDgBIgDAAIgCgBIgCAAQgFAAgBABQAAACAAAEIAAAFIAAAEIAAAQIAAAQIAAADIAEACIACAAIADAAIAFAAIADABIABACQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABIgDAAIgEABIgCAAIgCABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABIAAASIAAASIAIABIAFABQABAAAAABQABAAABAAQAAAAAAABQABAAAAABIAEAEQAAAAAAAAQAAABAAAAQAAABgBAAQgBAAgBABIgJABIgLABQgGgBgDgBg");
	this.shape_26.setTransform(46.4,902);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgBBEQgFgBgDgFIgDgIIgBgIIAAgHIABgHIABgnIABgpIAAgCIgBgCIgHgBIgFgBIgDgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgFAFAAIAXgCIAHABIAHAAIAEACIAEACIADACIAAAFIgKAAIgLADIAAA7IABA9QgDACgDAAIgCgBg");
	this.shape_27.setTransform(41,901.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAOBDQgEgCgDgDQgDgEgBgEIgBgJIgBgNIgBgMIAAgIIgCgMIgDgKQgCgGgBgBIgBgBIgCgBIAAADIAAADIAAAOIgBAUIAAAVIAAAQIgBAGQgCACgDABQgDABgCgCIgCgFIgDgHIAAgHIACgXIABgXIACgaIABgdIABgFQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAIAFABQADAAACADIADAHIAGAUIAHATIABACIABACQADgLAAgKQABgKgBgLIgBgEIABgFIABgCIABgCQADgDAEAAQADAAACAFQACADAAAFIgBAKIAAAKIgEArIgDAtIAAAEIAAADQgBADgCACIgCAAIgCAAg");
	this.shape_28.setTransform(35.3,901.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgCBCQgFgBgFgDQgDgDgCgFIgFgMIgBgOIgBgPIgBgNIAAgLIABgLIABgMIABgJQACgFADgEQADgFADgDQAEgEAFgBQAKgEAIAKIAEAGIACAIIADAOIABAPIAAAcIAAAdIgCAHIgCAHQgBAFgEADQgFACgFABIgFABIgEgBgAAAgyQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABIgCAEIgCARIgCASIgBARIACARIADAOQADAHACAEQABADADgBQADgCACgKIAAgMIABgNIAAgNIAAgLIAAgOIABgMIgBgHIgCgGQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAgBgBIgDAAIAAAAg");
	this.shape_29.setTransform(28.5,901.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNBDIgCgDIgCgGIgBgFIAAgCIAAgCIAAgzIAAg1QAAgFABgCQACgCAFgCQAPgEAOANIAAABIgBAAIgEAAIgEABQgLABgDAOIgBAKIAAALIABAHQACAGADAAQAIABAEAFQADADgEACIgDABIgDABIgBABIgCAAQgDABgCACQgCACgBAGIAAADIAAAEIAAAOIABAOIgBAJIgCADIgDACQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_30.setTransform(23.2,901.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAAAgIgCgBIgBgBIAAg7IABgBIACAAIABAAIACAAIAAABIAAA7IAAABIgCABg");
	this.shape_31.setTransform(259.6,917.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAAAgIgCgBIAAgBIAAg7IAAgBIACAAIABAAIACAAIAAABIAAA7IAAABIgCABg");
	this.shape_32.setTransform(257.4,917.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOASQgFgGAAgJIAAgXIABgBIABgBIAEAAIACABIAAABIAAAXQAAANALAAQAFAAADgDQAEgEAAgGIAAgXIAAgBIACgBIAEAAIABABIABABIAAApIgBABIgBABIgEAAIgBgBIgBgBIAAgFQgDAEgDACQgEABgDAAQgJAAgEgFg");
	this.shape_33.setTransform(253.6,918.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgDAhIgBgBIgBgBIAAgkIgIAAIgBgBIgBgBIAAgDIABgBIABgBIAIAAIAAgFQAAgHAEgEQABgEAIAAIAGAAIABABIABABIAAADIgBACIgBAAIgFAAQgFAAgBACQgCACAAAFIAAAEIAMAAIABABIABABIAAADIgBABIgBABIgMAAIAAAkIAAABIgBABg");
	this.shape_34.setTransform(249.2,917.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_35.setTransform(245.3,917.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAIAfIgCgBIAAgBIAAgNIgbAAIgCgBIAAgCIAAgDIABgCIAZgkIABgCIACAAIAGAAIACAAIAAACIAAAkIAIAAIACABIAAABIAAADIAAACIgCABIgIAAIAAANIAAABIgCABgAgOAJIAUAAIAAgeg");
	this.shape_36.setTransform(240.4,917.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgKAdQgGgCgDgEQgDgEAAgGQAAgGACgEQADgDAFAAQgEgDgCgDQgCgEAAgEQABgIAFgEQAGgFAIAAQAJAAAGAFQAGAEAAAIQAAAEgDAEQgBADgEADQAEAAAEADQACAEAAAGQAAAGgDAEQgDAEgFACQgGADgGAAQgGAAgEgDgAgJAEQgFADABAGQgBAFAFADQAEAEAFAAQAGAAAEgEQAEgDABgFQgBgGgEgDQgEgDgGAAQgFAAgEADgAgIgVQgDACAAAFQAAAFADACQAEADAEAAQAFAAAEgDQADgCABgFQgBgFgDgCQgEgDgFAAQgEAAgEADg");
	this.shape_37.setTransform(234.8,917.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_38.setTransform(229.8,917.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDIgBgEIAAgCIABAAIAEAAIABAAIABABIAEAEQADABADAAQAEAAADgCQADgBAAgEIgBgDIgFgDIgGgCQgIgCgDgBQgDgDAAgGQAAgDABgDQACgDAFgCQAEgCAEAAQAFAAAEACQADACADACQAAABAAAAQABABAAABQAAAAAAABQABAAAAABIgBABIgBAAIgEAAIgCgBIgCgCIgDgCIgEAAQgDAAgDABQgDACABADIABADIADADIAHACQAIACAEABQADAEABAFQgBAEgCADQgCADgFACQgEACgFAAQgFAAgEgCg");
	this.shape_39.setTransform(225.4,918.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABACAEAAIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_40.setTransform(221.3,917.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgBgDIgDgEIABgCIACAAIADAAIABAAIABABIAFAEQACABADAAQAEAAADgCQADgBAAgEIgBgDIgEgDIgHgCQgIgCgDgBQgEgDAAgGQABgDACgDQACgDADgCQAEgCAFAAQAEAAAEACQAFACABACQABABAAAAQABABAAABQAAAAAAABQAAAAAAABIAAABIgCAAIgDAAIgBgBIgDgCIgDgCIgEAAQgDAAgDABQgDACAAADIABADIAFADIAGACQAIACAEABQAEAEAAAFQAAAEgDADQgCADgEACQgFACgFAAQgFAAgEgCg");
	this.shape_41.setTransform(217.3,918.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOASQgFgFAAgKIgBgDIABgDQAAgJAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAJIABADIgBADQAAAKgFAFQgGAGgJAAQgIAAgGgGgAgIgNQgDAEAAAHIAAACIAAADQAAAHADADQAEAEAEAAQAFAAAEgEQADgDAAgHIAAgDIAAgCQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_42.setTransform(212.4,918.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgSAgIgBgBIgBgBIAAg6IABgCIABAAIAEAAIACAAIABACIAAAEQAEgHAIAAQAKAAAEAGQAFAGABAJIAAADIAAADQgBAIgFAGQgEAGgKAAQgIAAgEgHIAAAVIgBABIgBABgAgIgUQgDAEAAAGIAAAEIAAADQAAAEADAEQAEAEAEAAQAGAAADgEQADgEAAgFIAAgDQAAgRgMAAQgFAAgDAEg");
	this.shape_43.setTransform(207.3,919.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_44.setTransform(202.4,917.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAIAfIgCgBIAAgBIAAgNIgbAAIgCgBIAAgCIAAgDIABgCIAZgkIABgCIACAAIAGAAIACAAIAAACIAAAkIAIAAIACABIAAABIAAADIAAACIgCABIgIAAIAAANIAAABIgCABgAgOAJIAUAAIAAgeg");
	this.shape_45.setTransform(197.4,917.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_46.setTransform(192.5,917.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgCgDIgBgEIAAgCIABAAIAEAAIABAAIABABIAEAEQADABADAAQAEAAADgCQADgBAAgEIgBgDIgEgDIgHgCQgIgCgDgBQgDgDAAgGQgBgDACgDQADgDAEgCQADgCAFAAQAFAAAEACQAEACACACQAAABAAAAQABABAAABQAAAAAAABQABAAAAABIgBABIgBAAIgEAAIgCgBIgCgCIgDgCIgEAAQgDAAgDABQgDACABADIAAADIAEADIAHACQAJACADABQADAEAAAFQABAEgDADQgCADgFACQgEACgFAAQgFAAgEgCg");
	this.shape_47.setTransform(188.1,918.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABACAEAAIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_48.setTransform(184,917.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgCgDQgCgDAAgEQAAgGAFgEQAEgBAJgCIALgCIAAgCQAAgJgKAAQgDAAgCABQgDACgBACIgBABIgBABIgDAAIgCgBIAAgBIACgFQACgDAEgCQAEgCAEAAQAKAAAEAFQAEAEAAAHIAAAcIAAABIgCABIgEAAIgBgBIgBgBIAAgEQgCADgDACQgEACgEAAQgEAAgEgCgAABABQgFABgDACQgDACAAADQAAAEADACQADACAEAAQAEAAADgEQAEgEAAgHIAAgCg");
	this.shape_49.setTransform(179.7,918.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgNASQgFgFgBgKIAAgDIAAgCQABgKAFgGQAGgFAHAAQAGAAAFACQAEADACADQADADAAAEIAAABIgCABIgEAAIgBAAIgBgCQgCgEgDgCQgDgCgEAAQgEAAgDADQgDAEgBAHIAAACIAAACQABAIADADQADAEAEAAQAEAAADgCQADgCACgEIABgCIABAAIAEAAIACAAIAAACQAAADgDAEQgCADgEACQgFADgGAAQgHAAgGgGg");
	this.shape_50.setTransform(174.9,918.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_51.setTransform(170.3,917.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgKAXIgBgBIAAgBIAAgpIAAgBIABgBIAEAAIACABIABABIAAAFQADgHAHAAIADAAIACAAIABACIAAAEIgBABIgCAAIgFAAQgFAAAAADQgDAEAAAEIAAAZIgBABIgCABg");
	this.shape_52.setTransform(166.7,918.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgMAZIAAAEIgBABIgBABIgDAAIgCgBIgBgBIAAg6IABgCIACAAIADAAIACAAIAAACIAAAVQAGgGAHgBQAKAAAEAHQAFAFAAAIIAAADIAAACQAAAJgFAHQgEAGgKAAQgHAAgGgHgAgIgEQgDAEgBAEIAAAEIAAACQABAHADADQADAFAFAAQAGAAADgEQADgEAAgHIAAgCQAAgQgMABQgFAAgDADg");
	this.shape_53.setTransform(162.2,917.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgCAFIgBgBIgBgBIAAgFIABgBIABgBIAFAAIABABIABABIAAAFIgBABIgBABg");
	this.shape_54.setTransform(158.2,920.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgKAfQgEgDgDgDQgCgDAAgDIABgBIABgBIAFAAIABABIABABQADAHAHAAQAGAAAEgDQADgCAAgIIAAgGQgGAHgHAAQgKAAgEgGQgFgHgBgHIAAgCIAAgDQABgJAFgGQAEgGAKAAQAHAAAGAGIAAgDIAAgCIACgBIAEAAIABABIABACIAAApQAAAVgVAAQgGAAgEgCgAgIgVQgDAEAAAGIAAADIAAACQAAAGADADQADAEAFAAQAGAAADgEQADgDABgFIAAgDIAAgDQgBgGgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_55.setTransform(154.3,919.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgKAXIgBgBIgBgBIAAgpIABgBIABgBIAEAAIACABIAAABIAAAFQAEgHAHAAIAEAAIABAAIAAACIAAAEIAAABIgBAAIgGAAQgFAAgBADQgDAEAAAEIAAAZIAAABIgBABg");
	this.shape_56.setTransform(150.4,918.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgOASQgFgFAAgKIgBgDIABgDQAAgJAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAJIABADIgBADQAAAKgFAFQgGAGgJAAQgIAAgGgGgAgIgNQgDAEAAAHIAAACIAAADQAAAHADADQAEAEAEAAQAFAAAEgEQADgDAAgHIAAgDIAAgCQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_57.setTransform(145.8,918.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgCAFIgBgBIgBgBIAAgFIABgBIABgBIAFAAIABABIABABIAAAFIgBABIgBABg");
	this.shape_58.setTransform(142.1,920.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgOASQgFgGAAgJIAAgXIABgBIABgBIAEAAIACABIAAABIAAAXQAAANALAAQAFAAADgDQAEgEAAgGIAAgXIAAgBIACgBIAEAAIABABIABABIAAApIgBABIgBABIgEAAIgBgBIgBgBIAAgFQgDAEgDACQgEABgDAAQgJAAgEgFg");
	this.shape_59.setTransform(138.2,918.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABACAEAAIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_60.setTransform(133.8,917.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgCgDQgCgDAAgEQAAgGAFgEQAEgBAJgCIALgCIAAgCQAAgJgKAAQgDAAgCABQgDACgBACIgBABIgBABIgDAAIgCgBIAAgBIACgFQACgDAEgCQAEgCAEAAQAKAAAEAFQAEAEAAAHIAAAcIAAABIgCABIgEAAIgBgBIgBgBIAAgEQgCADgDACQgEACgEAAQgEAAgEgCgAABABQgFABgDACQgDACAAADQAAAEADACQADACAEAAQAEAAADgEQAEgEAAgHIAAgCg");
	this.shape_61.setTransform(129.4,918.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAMAgIgCgBIgBgBIgSgTIAAATIgBABIgBABIgFAAIgBgBIAAgBIAAg7IAAgBIABAAIAFAAIABAAIABABIAAAeIAQgNIACgBIABAAIAFAAIABAAIABACIgCABIgTAQIAWAWIAAACIAAABIgBABg");
	this.shape_62.setTransform(125.1,917.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgOASQgFgGAAgJIAAgXIABgBIABgBIAEAAIACABIAAABIAAAXQAAANALAAQAFAAADgDQAEgEAAgGIAAgXIAAgBIACgBIAEAAIABABIABABIAAApIgBABIgBABIgEAAIgBgBIgBgBIAAgFQgDAEgDACQgEABgDAAQgJAAgEgFg");
	this.shape_63.setTransform(119.8,918.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgPAaQgEgGAAgKIAAgCIAAgDQAAgIAEgFQAGgHAJAAQAHABAFAGIAAgVIABgCIACAAIADAAIACAAIAAACIAAA6IAAABIgCABIgDAAIgCgBIgBgBIAAgEQgEAHgIAAQgJAAgGgGgAgIgEQgDAEAAAFIAAADQAAARALAAQAGAAADgFQADgDAAgHIAAgCIAAgEQAAgEgDgEQgEgDgFAAQgFAAgDADg");
	this.shape_64.setTransform(114.3,917.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgKIAAgCIAAgCQAAgJAGgGQAFgGAIAAQAJAAAGAGQAFAHAAAKIAAAAIAAACIgCAAIgdAAIAAABQAAAGAEAEQADAEAEAAQAEAAACgCQADgBABgCIACgBIABgBIAEAAIACABIAAABQAAACgCADQgDADgEACQgFACgFAAQgIAAgFgGgAgIgNQgDAEAAAHIAAAAIAXAAIAAAAQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_65.setTransform(109.2,918.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_66.setTransform(104.6,917.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_67.setTransform(100.3,917.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgBAUIgCAAIAAgCIAAgGIAAgBIACgBIAEAAIABABIABABIAAAGIgBACIgBAAgAgBgJIgCgBIAAgBIAAgGIAAgCIACAAIAEAAIABAAIABACIAAAGIgBABIgBABg");
	this.shape_68.setTransform(97,919);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgBgDIgDgEIABgCIACAAIADAAIABAAIABABIAFAEQACABADAAQAEAAADgCQADgBAAgEIgBgDIgFgDIgGgCQgIgCgDgBQgEgDAAgGQABgDACgDQACgDADgCQAEgCAFAAQAEAAAEACQAFACABACQABABAAAAQABABAAABQAAAAAAABQAAAAAAABIAAABIgCAAIgDAAIgBgBIgDgCIgDgCIgEAAQgDAAgDABQgDACAAADIABADIAFADIAGACQAIACAEABQAEAEAAAFQAAAEgDADQgCADgEACQgFACgFAAQgFAAgEgCg");
	this.shape_69.setTransform(93.6,918.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgSAgIgBgBIgBgBIAAg6IABgCIABAAIAEAAIABAAIABACIAAAEQAGgHAHAAQAKAAAEAGQAFAGABAJIAAADIAAADQgBAIgFAGQgEAGgKAAQgHAAgGgHIAAAVIAAABIgBABgAgIgUQgDAEgBAGIAAAEIAAADQABAEADAEQADAEAFAAQAGAAADgEQADgEAAgFIAAgDQAAgRgMAAQgFAAgDAEg");
	this.shape_70.setTransform(88.7,919.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABACAEAAIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_71.setTransform(84.1,917.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABACAEAAIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_72.setTransform(80.6,917.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAOAgIgCgBIAAgBIAAgZQAAgFgDgDQgEgEgFAAQgEAAgEAEQgDADAAAFIAAAZIgBABIgBABIgEAAIgCgBIAAgBIAAg7IAAgBIACAAIAEAAIABAAIABABIAAAVQACgDAEgBQAEgCADAAQAIAAAFAFQAFAGAAAHIAAAaIgBABIgBABg");
	this.shape_73.setTransform(76.2,917.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgSAgIgBgBIgBgBIAAg6IABgCIABAAIAEAAIACAAIABACIAAAEQAEgHAIAAQAKAAAEAGQAFAGABAJIAAADIAAADQgBAIgFAGQgEAGgKAAQgIAAgEgHIAAAVIgBABIgBABgAgIgUQgEAEABAGIAAAEIAAADQAAAEADAEQAEAEAEAAQAGAAADgEQADgEAAgFIAAgDQAAgRgMAAQgFAAgDAEg");
	this.shape_74.setTransform(331.5,906.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgCgDIgCgEIABgCIABAAIAEAAIABAAIABABIAEAEQADABADAAQAEAAADgCQADgBAAgEIgBgDIgEgDIgHgCQgIgCgDgBQgDgDgBgGQAAgDACgDQADgDADgCQAEgCAFAAQAEAAAEACQAFACACACQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABIAAABIgBAAIgEAAIgCgBIgCgCIgDgCIgEAAQgEAAgCABQgCACgBADIABADIAFADIAGACQAJACADABQAEAEgBAFQAAAEgCADQgCADgFACQgDACgGAAQgFAAgEgCg");
	this.shape_75.setTransform(326.5,905.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgCgDQgCgDAAgEQAAgGAFgEQAEgBAJgCIALgCIAAgCQAAgJgKAAQgDAAgCABQgDACgBACIgBABIgBABIgDAAIgCgBIAAgBIACgFQACgDAEgCQAEgCAEAAQAKAAAEAFQAEAEAAAHIAAAcIAAABIgCABIgEAAIgBgBIgBgBIAAgEQgCADgDACQgEACgEAAQgEAAgEgCgAABABQgFABgDACQgDACAAADQAAAEADACQADACAEAAQAEAAADgEQAEgEAAgHIAAgCg");
	this.shape_76.setTransform(321.5,905.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgCAFIgBgBIgBgBIAAgFIABgBIABgBIAFAAIABABIABABIAAAFIgBABIgBABg");
	this.shape_77.setTransform(318.1,907.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgOASQgFgFAAgKIgBgDIABgDQAAgJAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAJIABADIgBADQAAAKgFAFQgGAGgJAAQgIAAgGgGgAgIgNQgDAEAAAHIAAACIAAADQAAAHADADQAEAEAEAAQAFAAAEgEQADgDAAgHIAAgDIAAgCQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_78.setTransform(314.4,905.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABADAEgBIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_79.setTransform(310,904.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAAAgIgCgBIAAgBIAAgpIAAgBIACgBIACAAIABABIABABIAAApIgBABIgBABgAgBgWIgCAAIAAgCIAAgFIAAgBIACgBIADAAIACABIAAABIAAAFIAAACIgCAAg");
	this.shape_80.setTransform(307.2,904.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgKIAAgCIAAgCQAAgJAGgGQAFgGAIAAQAJAAAGAGQAFAHAAAKIAAAAIAAACIgCAAIgdAAIAAABQAAAGAEAEQADAEAEAAQAEAAACgCQADgBABgCIACgBIABgBIAEAAIACABIAAABQAAACgCADQgDADgEACQgFACgFAAQgIAAgFgGgAgIgNQgDAEAAAHIAAAAIAXAAIAAAAQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_81.setTransform(303.6,905.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgDAhIgBgBIgBgBIAAgkIgIAAIgBgBIgBgBIAAgDIABgBIABgBIAIAAIAAgFQAAgHAEgEQABgEAIAAIAGAAIABABIABABIAAADIgBACIgBAAIgFAAQgFAAgBACQgCACAAAFIAAAEIAMAAIABABIABABIAAADIgBABIgBABIgMAAIAAAkIAAABIgBABg");
	this.shape_82.setTransform(299.4,904.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_83.setTransform(295.5,904.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgOASQgFgFAAgKIgBgDIABgDQAAgJAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAJIABADIgBADQAAAKgFAFQgGAGgJAAQgIAAgGgGgAgIgNQgDAEAAAHIAAACIAAADQAAAHADADQAEAEAEAAQAFAAAEgEQADgDAAgHIAAgDIAAgCQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_84.setTransform(290.8,905.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgCgDQgCgDAAgEQAAgGAFgEQAEgBAJgCIALgCIAAgCQAAgJgKAAQgDAAgCABQgDACgBACIgBABIgBABIgDAAIgCgBIAAgBIACgFQACgDAEgCQAEgCAEAAQAKAAAEAFQAEAEAAAHIAAAcIAAABIgCABIgEAAIgBgBIgBgBIAAgEQgCADgDACQgEACgEAAQgEAAgEgCgAABABQgFABgDACQgDACAAADQAAAEADACQADACAEAAQAEAAADgEQAEgEAAgHIAAgCg");
	this.shape_85.setTransform(285.6,905.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgNASQgGgFABgKIgBgDIABgCQgBgKAGgGQAFgFAIAAQAGAAAFACQAEADADADQACADAAAEIgBABIgBABIgEAAIgCAAIgBgCQgBgEgDgCQgDgCgEAAQgEAAgDADQgEAEABAHIAAACIAAACQgBAIAEADQADAEAEAAQAEAAADgCQADgCABgEIABgCIACAAIAEAAIABAAIABACQAAADgCAEQgDADgEACQgFADgGAAQgIAAgFgGg");
	this.shape_86.setTransform(280.8,905.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgCgDQgCgDAAgEQAAgGAFgEQAEgBAJgCIALgCIAAgCQAAgJgKAAQgDAAgCABQgDACgBACIgBABIgBABIgDAAIgCgBIAAgBIACgFQACgDAEgCQAEgCAEAAQAKAAAEAFQAEAEAAAHIAAAcIAAABIgCABIgEAAIgBgBIgBgBIAAgEQgCADgDACQgEACgEAAQgEAAgEgCgAABABQgFABgDACQgDACAAADQAAAEADACQADACAEAAQAEAAADgEQAEgEAAgHIAAgCg");
	this.shape_87.setTransform(275.7,905.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgQAXIgBgBIgBgBIAAgDIAAgBIABgCIAXgeIgVAAIgCAAIAAgCIAAgDIAAgBIACgBIAeAAIABABIABABIAAAEIgCACIgWAeIAXAAIACABIABABIAAADIgBABIgCABg");
	this.shape_88.setTransform(271.1,905.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAAAgIgCgBIAAgBIAAgpIAAgBIACgBIACAAIABABIABABIAAApIgBABIgBABgAgBgWIgCAAIAAgCIAAgFIAAgBIACgBIADAAIACABIAAABIAAAFIAAACIgCAAg");
	this.shape_89.setTransform(267.7,904.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgKAXIgBgBIAAgBIAAgpIAAgBIABgBIAEAAIACABIABABIAAAFQADgHAHAAIADAAIACAAIABACIAAAEIgBABIgCAAIgFAAQgFABgBACQgCAEAAAEIAAAZIgBABIgCABg");
	this.shape_90.setTransform(265.3,905.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgKIAAgCIAAgCQAAgJAGgGQAFgGAIAAQAJAAAGAGQAFAHAAAKIAAAAIAAACIgCAAIgdAAIAAABQAAAGAEAEQADAEAEAAQAEAAACgCQADgBABgCIACgBIABgBIAEAAIACABIAAABQAAACgCADQgDADgEACQgFACgFAAQgIAAgFgGgAgIgNQgDAEAAAHIAAAAIAXAAIAAAAQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_91.setTransform(260.7,905.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAbAXIgCAAIAAgCIAAgXQAAgHgDgDQgDgDgFAAQgEAAgDADQgDADAAAHIAAAXIgBACIgCAAIgCAAIgBAAIgBgCIAAgXQAAgHgDgDQgDgDgEAAQgFAAgDADQgDADAAAHIAAAXIAAACIgCAAIgEAAIgBAAIgBgCIAAgoIABgCIABgBIAEAAIABABIABACIAAADQAFgGAIAAQAKAAACAIQACgEAEgCQAEgCAFAAQAHAAAFAFQAFAFAAAJIAAAYIgBACIgBAAg");
	this.shape_92.setTransform(254.2,905.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAAAgIgCgBIAAgBIAAgpIAAgBIACgBIACAAIABABIABABIAAApIgBABIgBABgAgBgWIgCAAIAAgCIAAgFIAAgBIACgBIADAAIACABIAAABIAAAFIAAACIgCAAg");
	this.shape_93.setTransform(249.1,904.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgBAgIgBgBIgBgBIAAg7IABgBIABAAIADAAIABAAIABABIAAA7IgBABIgBABg");
	this.shape_94.setTransform(247,904.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgOASQgFgFAAgKIgBgDIABgDQAAgJAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAJIABADIgBADQAAAKgFAFQgGAGgJAAQgIAAgGgGgAgIgNQgDAEAAAHIAAACIAAADQAAAHADADQAEAEAEAAQAFAAAEgEQADgDAAgHIAAgDIAAgCQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_95.setTransform(243.3,905.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgRAgIgCgBIgBgBIAAg6IABgCIACAAIADAAIABAAIABACIAAAEQAGgHAHAAQAKAAAEAGQAFAGABAJIAAADIAAADQgBAIgFAGQgEAGgKAAQgHAAgGgHIAAAVIAAABIgCABgAgIgUQgDAEgBAGIAAAEIAAADQABAEADAEQADAEAFAAQAGAAADgEQADgEAAgFIAAgDQAAgRgMAAQgFAAgDAEg");
	this.shape_96.setTransform(238.2,906.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_97.setTransform(233.3,904.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAbAXIgCAAIAAgCIAAgXQAAgHgDgDQgDgDgFAAQgEAAgDADQgDADAAAHIAAAXIgBACIgCAAIgCAAIgBAAIgBgCIAAgXQAAgHgDgDQgDgDgEAAQgFAAgDADQgDADAAAHIAAAXIAAACIgCAAIgEAAIgBAAIgBgCIAAgoIABgCIABgBIAEAAIABABIABACIAAADQAFgGAIAAQAKAAACAIQACgEAEgCQAEgCAFAAQAHAAAFAFQAFAFAAAJIAAAYIgBACIgBAAg");
	this.shape_98.setTransform(227.1,905.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgOASQgFgFAAgKIgBgDIABgDQAAgJAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAJIABADIgBADQAAAKgFAFQgGAGgJAAQgIAAgGgGgAgIgNQgDAEAAAHIAAACIAAADQAAAHADADQAEAEAEAAQAFAAAEgEQADgDAAgHIAAgDIAAgCQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_99.setTransform(220.5,905.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgNASQgFgFgBgKIAAgDIAAgCQABgKAFgGQAGgFAHAAQAGAAAFACQAFADABADQADADAAAEIAAABIgCABIgEAAIgBAAIgBgCQgCgEgDgCQgDgCgEAAQgDAAgEADQgDAEgBAHIAAACIAAACQABAIADADQAEAEADAAQAEAAADgCQADgCACgEIABgCIABAAIAEAAIACAAIAAACQAAADgDAEQgBADgFACQgFADgGAAQgHAAgGgGg");
	this.shape_100.setTransform(215.5,905.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgCAFIgBgBIgBgBIAAgFIABgBIABgBIAFAAIABABIABABIAAAFIgBABIgBABg");
	this.shape_101.setTransform(211.9,907.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgCgDIgCgEIAAgCIACAAIADAAIABAAIABABIAFAEQACABADAAQAEAAADgCQADgBAAgEIgBgDIgFgDIgGgCQgIgCgDgBQgEgDABgGQAAgDACgDQABgDAFgCQAEgCAEAAQAFAAAEACQADACACACQABABAAAAQABABAAABQAAAAAAABQABAAAAABIgBABIgCAAIgDAAIgBgBIgDgCIgDgCIgEAAQgDAAgDABQgCACAAADIABADIADADIAHACQAJACADABQADAEABAFQgBAEgCADQgCADgEACQgFACgFAAQgFAAgEgCg");
	this.shape_102.setTransform(208.5,905.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgOASQgFgFAAgKIgBgDIABgDQAAgJAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAJIABADIgBADQAAAKgFAFQgGAGgJAAQgIAAgGgGgAgIgNQgDAEAAAHIAAACIAAADQAAAHADADQAEAEAEAAQAFAAAEgEQADgDAAgHIAAgDIAAgCQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_103.setTransform(203.6,905.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgNASQgGgFAAgKIAAgDIAAgCQAAgKAGgGQAGgFAHAAQAHAAAEACQAFADACADQACADAAAEIAAABIgCABIgEAAIgCAAIAAgCQgCgEgDgCQgCgCgFAAQgEAAgDADQgEAEAAAHIAAACIAAACQAAAIAEADQADAEAEAAQAFAAACgCQADgCACgEIAAgCIACAAIAEAAIACAAIAAACQAAADgCAEQgCADgFACQgEADgHAAQgHAAgGgGg");
	this.shape_104.setTransform(198.6,905.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAAAgIgCgBIAAgBIAAgpIAAgBIACgBIACAAIABABIABABIAAApIgBABIgBABgAgBgWIgCAAIAAgCIAAgFIAAgBIACgBIADAAIACABIAAABIAAAFIAAACIgCAAg");
	this.shape_105.setTransform(195,904.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABADAEgBIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_106.setTransform(192.2,904.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgCgDIgBgEIAAgCIABAAIAEAAIABAAIABABIAEAEQADABADAAQAEAAADgCQADgBAAgEIgBgDIgEgDIgHgCQgIgCgDgBQgDgDgBgGQAAgDACgDQACgDAEgCQAEgCAFAAQAFAAADACQAEACADACQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABIAAABIgBAAIgEAAIgCgBIgCgCIgDgCIgEAAQgEAAgCABQgCACgBADIABADIAFADIAGACQAJACADABQAEAEgBAFQABAEgDADQgCADgFACQgDACgGAAQgFAAgEgCg");
	this.shape_107.setTransform(188.2,905.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgCgDQgCgDAAgEQAAgGAFgEQAEgBAJgCIALgCIAAgCQAAgJgKAAQgDAAgCABQgDACgBACIgBABIgBABIgDAAIgCgBIAAgBIACgFQACgDAEgCQAEgCAEAAQAKAAAEAFQAEAEAAAHIAAAcIAAABIgCABIgEAAIgBgBIgBgBIAAgEQgCADgDACQgEACgEAAQgEAAgEgCgAABABQgFABgDACQgDACAAADQAAAEADACQADACAEAAQAEAAADgEQAEgEAAgHIAAgCg");
	this.shape_108.setTransform(183.3,905.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAAAgIgCgBIgBgBIAAg7IABgBIACAAIABAAIACAAIAAABIAAA7IAAABIgCABg");
	this.shape_109.setTransform(179.9,904.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgSAgIgBgBIgBgBIAAg6IABgCIABAAIAEAAIACAAIABACIAAAEQAEgHAIAAQAKAAAEAGQAFAGABAJIAAADIAAADQgBAIgFAGQgEAGgKAAQgIAAgEgHIAAAVIgBABIgBABgAgIgUQgDAEAAAGIAAAEIAAADQAAAEADAEQAEAEAEAAQAGAAADgEQADgEAAgFIAAgDQAAgRgMAAQgFAAgDAEg");
	this.shape_110.setTransform(176.3,906.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgKIAAgCIAAgCQAAgJAGgGQAFgGAIAAQAJAAAGAGQAFAHAAAKIAAAAIAAACIgCAAIgdAAIAAABQAAAGAEAEQADAEAEAAQAEAAACgCQADgBABgCIACgBIABgBIAEAAIACABIAAABQAAACgCADQgDADgEACQgFACgFAAQgIAAgFgGgAgIgNQgDAEAAAHIAAAAIAXAAIAAAAQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_111.setTransform(170.9,905.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgKAXIgBgBIgBgBIAAgpIABgBIABgBIAEAAIACABIAAABIAAAFQAEgHAHAAIAEAAIABAAIABACIAAAEIgBABIgBAAIgGAAQgFABgBACQgDAEAAAEIAAAZIAAABIgBABg");
	this.shape_112.setTransform(167,905.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgLAZIAAAEIgCABIgBABIgDAAIgCgBIAAgBIAAg6IAAgCIACAAIADAAIACAAIABACIAAAVQAEgGAIgBQAJAAAGAHQAEAFAAAIIAAADIAAACQAAAJgEAHQgGAGgJAAQgIAAgEgHgAgIgEQgDAEAAAEIAAAEIAAACQAAAHADADQADAFAFAAQAGAAADgEQADgEAAgHIAAgCQAAgQgMABQgEAAgEADg");
	this.shape_113.setTransform(162.5,904.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgOASQgFgFAAgKIgBgDIABgDQAAgJAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAJIABADIgBADQAAAKgFAFQgGAGgJAAQgIAAgGgGgAgIgNQgDAEAAAHIAAACIAAADQAAAHADADQAEAEAEAAQAFAAAEgEQADgDAAgHIAAgDIAAgCQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_114.setTransform(157.1,905.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgCgDIgCgEIAAgCIACAAIADAAIABAAIABABIAFAEQACABADAAQAEAAADgCQADgBAAgEIgBgDIgFgDIgGgCQgIgCgDgBQgEgDABgGQAAgDACgDQABgDAFgCQAEgCAEAAQAFAAAEACQADACACACQABABAAAAQABABAAABQAAAAAAABQABAAAAABIgBABIgCAAIgDAAIgBgBIgDgCIgDgCIgEAAQgDAAgDABQgCACAAADIABADIADADIAHACQAIACAEABQADAEABAFQgBAEgCADQgCADgEACQgFACgFAAQgFAAgEgCg");
	this.shape_115.setTransform(152.3,905.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgOASQgFgFAAgKIgBgDIABgDQAAgJAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAJIABADIgBADQAAAKgFAFQgGAGgJAAQgIAAgGgGgAgIgNQgDAEAAAHIAAACIAAADQAAAHADADQAEAEAEAAQAFAAAEgEQADgDAAgHIAAgDIAAgCQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_116.setTransform(147.4,905.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgPAaQgEgGgBgKIAAgCIAAgDQABgIAEgFQAFgHAKAAQAHABAFAGIAAgVIABgCIABAAIAFAAIABAAIAAACIAAA6IAAABIgBABIgFAAIgBgBIgBgBIAAgEQgEAHgIAAQgKAAgFgGgAgIgEQgDAEAAAFIAAADQAAARALAAQAGAAADgFQADgDAAgHIAAgCIAAgEQAAgEgDgEQgEgDgFAAQgFAAgDADg");
	this.shape_117.setTransform(142,904.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgOASQgFgGAAgJIAAgXIABgBIABgBIAEAAIACABIAAABIAAAXQAAAOALgBQAFAAADgDQAEgEAAgGIAAgXIAAgBIACgBIAEAAIABABIABABIAAApIgBABIgBABIgEAAIgBgBIgBgBIAAgFQgDAEgDACQgEABgDAAQgJAAgEgFg");
	this.shape_118.setTransform(136.7,905.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABADAEgBIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_119.setTransform(132.3,904.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgCAFIgBgBIgBgBIAAgFIABgBIABgBIAFAAIABABIABABIAAAFIgBABIgBABg");
	this.shape_120.setTransform(129.4,907.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AANAXQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgKgfIgJAfQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDAAIgCgBIgBgBIgNgoIAAgBIAAgCIABAAIAFAAIABAAIABABIAKAhIAKggIABgBIACgBIABAAIACABIAAABIALAgIAKghIABgBIACAAIAEAAIAAAAIABACIAAABIgNAoIgBABIgCABg");
	this.shape_121.setTransform(124.7,905.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AANAXQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgKgfIgJAfQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDAAIgCgBIgBgBIgNgoIAAgBIAAgCIABAAIAFAAIABAAIABABIAKAhIAKggIABgBIACgBIABAAIACABIABABIAKAgIAKghIABgBIACAAIADAAIABAAIABACIAAABIgNAoIgBABIgCABg");
	this.shape_122.setTransform(117.5,905.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AANAXQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgKgfIgJAfQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDAAIgCgBIgBgBIgNgoIAAgBIAAgCIABAAIAFAAIABAAIABABIAKAhIAKggIABgBIACgBIABAAIACABIAAABIALAgIAKghIABgBIACAAIAEAAIAAAAIABACIAAABIgNAoIgBABIgCABg");
	this.shape_123.setTransform(110.3,905.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_124.setTransform(104.6,904.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_125.setTransform(100.3,904.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgBAUIgCAAIAAgCIAAgGIAAgBIACgBIAEAAIABABIABABIAAAGIgBACIgBAAgAgBgJIgCgBIAAgBIAAgGIAAgCIACAAIAEAAIABAAIABACIAAAGIgBABIgBABg");
	this.shape_126.setTransform(97,905.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgBgDIgDgEIABgCIACAAIADAAIABAAIABABIAFAEQACABADAAQAEAAADgCQADgBAAgEIgBgDIgFgDIgGgCQgIgCgDgBQgEgDAAgGQABgDACgDQACgDADgCQAEgCAFAAQAEAAAEACQAFACABACQABABAAAAQABABAAABQAAAAAAABQAAAAAAABIAAABIgCAAIgDAAIgBgBIgDgCIgDgCIgEAAQgDAAgDABQgDACAAADIABADIAFADIAGACQAIACAEABQAEAEAAAFQAAAEgDADQgCADgEACQgFACgFAAQgFAAgEgCg");
	this.shape_127.setTransform(93.6,905.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgSAgIgBgBIgBgBIAAg6IABgCIABAAIAEAAIABAAIABACIAAAEQAGgHAHAAQAKAAAEAGQAFAGABAJIAAADIAAADQgBAIgFAGQgEAGgKAAQgHAAgGgHIAAAVIAAABIgBABgAgIgUQgDAEgBAGIAAAEIAAADQABAEADAEQADAEAFAAQAGAAADgEQADgEAAgFIAAgDQAAgRgMAAQgFAAgDAEg");
	this.shape_128.setTransform(88.7,906.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABADAEgBIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_129.setTransform(84.1,904.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABADAEgBIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_130.setTransform(80.6,904.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAOAgIgCgBIAAgBIAAgZQAAgFgDgDQgEgEgFAAQgEAAgEAEQgDADAAAFIAAAZIgBABIgBABIgEAAIgCgBIAAgBIAAg7IAAgBIACAAIAEAAIABAAIABABIAAAVQACgDAEgBQAEgCADAAQAIAAAFAFQAFAGAAAHIAAAaIgBABIgBABg");
	this.shape_131.setTransform(76.2,904.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_132.setTransform(311.6,891.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgKIAAgCIAAgCQAAgJAGgGQAFgGAIAAQAJAAAGAGQAFAHAAAKIAAAAIAAACIgCAAIgdAAIAAABQAAAGAEAEQADAEAEAAQAEAAACgCQADgBABgCIACgBIABgBIAEAAIACABIAAABQAAACgCADQgDADgEACQgFACgFAAQgIAAgFgGgAgIgNQgDAEAAAHIAAAAIAXAAIAAAAQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_133.setTransform(306.9,892.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgPAaQgEgGAAgKIAAgCIAAgDQAAgIAEgFQAGgHAJAAQAHABAGAGIAAgVIAAgCIACAAIADAAIACAAIAAACIAAA6IAAABIgCABIgDAAIgCgBIAAgBIAAgEQgGAHgHAAQgJAAgGgGgAgIgEQgDAEAAAFIAAADQAAARALAAQAGAAADgFQADgDABgHIAAgCIAAgEQgBgEgDgEQgEgDgFAAQgFAAgDADg");
	this.shape_134.setTransform(301.6,891.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgCgDQgCgDAAgEQAAgGAFgEQAEgBAJgCIALgCIAAgCQAAgJgKAAQgDAAgCABQgDACgBACIgBABIgBABIgDAAIgCgBIAAgBIACgFQACgDAEgCQAEgCAEAAQAKAAAEAFQAEAEAAAHIAAAcIAAABIgCABIgEAAIgBgBIgBgBIAAgEQgCADgDACQgEACgEAAQgEAAgEgCgAABABQgFABgDACQgDACAAADQAAAEADACQADACAEAAQAEAAADgEQAEgEAAgHIAAgCg");
	this.shape_135.setTransform(296.4,892.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAbAXIgCAAIAAgCIAAgXQAAgHgDgDQgDgDgFAAQgEAAgDADQgDADAAAHIAAAXIgBACIgCAAIgCAAIgBAAIgBgCIAAgXQAAgHgDgDQgDgDgEAAQgFAAgDADQgDADAAAHIAAAXIAAACIgCAAIgEAAIgBAAIgBgCIAAgoIABgCIABgBIAEAAIABABIABACIAAADQAFgGAIAAQAKAAACAIQACgEAEgCQAEgCAFAAQAHAAAFAFQAFAFAAAJIAAAYIgBACIgBAAg");
	this.shape_136.setTransform(290.1,892.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgMADIgBgBIgBgBIAAgBIABgBIABgBIAZAAIACABIAAABIAAABIAAABIgCABg");
	this.shape_137.setTransform(283.9,892.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgCgDIgDgEIABgCIACAAIADAAIABAAIABABIAFAEQACABADAAQAEAAADgCQADgBAAgEIgBgDIgFgDIgGgCQgIgCgDgBQgDgDAAgGQAAgDACgDQABgDAEgCQAFgCAEAAQAEAAAFACQADACACACQABABAAAAQABABAAABQAAAAAAABQAAAAAAABIAAABIgCAAIgDAAIgBgBIgDgCIgDgCIgEAAQgEAAgCABQgDACAAADIACADIADADIAHACQAJACADABQAEAEAAAFQAAAEgDADQgCADgEACQgFACgFAAQgFAAgEgCg");
	this.shape_138.setTransform(279.5,892.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgNASQgGgFABgKIgBgDIABgCQgBgKAGgGQAGgFAHAAQAGAAAFACQAFADACADQACADAAAEIAAABIgCABIgEAAIgCAAIgBgCQgBgEgDgCQgCgCgFAAQgDAAgEADQgEAEAAAHIAAACIAAACQAAAIAEADQAEAEADAAQAFAAACgCQADgCABgEIABgCIACAAIAEAAIACAAIAAACQAAADgCAEQgCADgFACQgFADgGAAQgHAAgGgGg");
	this.shape_139.setTransform(274.8,892.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAAAgIgCgBIAAgBIAAgpIAAgBIACgBIACAAIABABIABABIAAApIgBABIgBABgAgBgWIgCAAIAAgCIAAgFIAAgBIACgBIADAAIACABIAAABIAAAFIAAACIgCAAg");
	this.shape_140.setTransform(271.2,891.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABADAEgBIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_141.setTransform(268.3,891.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgCgDIgCgEIABgCIABAAIAEAAIABAAIABABIAEAEQADABADAAQAEAAADgCQADgBAAgEIgBgDIgEgDIgHgCQgIgCgDgBQgDgDgBgGQAAgDACgDQADgDADgCQAEgCAFAAQAEAAAEACQAFACACACQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABIAAABIgBAAIgEAAIgCgBIgCgCIgDgCIgEAAQgEAAgCABQgCACgBADIABADIAFADIAGACQAJACADABQAEAEgBAFQAAAEgCADQgCADgFACQgDACgGAAQgFAAgEgCg");
	this.shape_142.setTransform(264.4,892.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgCgDQgCgDAAgEQAAgGAFgEQAEgBAJgCIALgCIAAgCQAAgJgKAAQgDAAgCABQgDACgBACIgBABIgBABIgDAAIgCgBIAAgBIACgFQACgDAEgCQAEgCAEAAQAKAAAEAFQAEAEAAAHIAAAcIAAABIgCABIgEAAIgBgBIgBgBIAAgEQgCADgDACQgEACgEAAQgEAAgEgCgAABABQgFABgDACQgDACAAADQAAAEADACQADACAEAAQAEAAADgEQAEgEAAgHIAAgCg");
	this.shape_143.setTransform(259.4,892.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAAAgIgCgBIAAgBIAAg7IAAgBIACAAIABAAIACAAIAAABIAAA7IAAABIgCABg");
	this.shape_144.setTransform(256.1,891.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgSAgIgBgBIgBgBIAAg6IABgCIABAAIAEAAIACAAIABACIAAAEQAEgHAIAAQAKAAAEAGQAFAGABAJIAAADIAAADQgBAIgFAGQgEAGgKAAQgIAAgEgHIAAAVIgBABIgBABgAgIgUQgDAEAAAGIAAAEIAAADQAAAEADAEQADAEAFAAQAGAAADgEQADgEAAgFIAAgDQAAgRgMAAQgFAAgDAEg");
	this.shape_145.setTransform(252.4,893.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgMADIgBgBIgBgBIAAgBIABgBIABgBIAZAAIACABIAAABIAAABIAAABIgCABg");
	this.shape_146.setTransform(247.4,892.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgKIAAgCIAAgCQAAgJAGgGQAFgGAIAAQAJAAAGAGQAFAHAAAKIAAAAIAAACIgCAAIgdAAIAAABQAAAGAEAEQADAEAEAAQAEAAACgCQADgBABgCIACgBIABgBIAEAAIACABIAAABQAAACgCADQgDADgEACQgFACgFAAQgIAAgFgGgAgIgNQgDAEAAAHIAAAAIAXAAIAAAAQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_147.setTransform(242.7,892.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgKAXIgBgBIAAgBIAAgpIAAgBIABgBIAEAAIACABIABABIAAAFQADgHAHAAIAEAAIABAAIABACIAAAEIgBABIgBAAIgGAAQgFABgBACQgCAEAAAEIAAAZIgBABIgBABg");
	this.shape_148.setTransform(238.8,892.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgCgDQgCgDAAgEQAAgGAFgEQAEgBAJgCIALgCIAAgCQAAgJgKAAQgDAAgCABQgDACgBACIgBABIgBABIgDAAIgCgBIAAgBIACgFQACgDAEgCQAEgCAEAAQAKAAAEAFQAEAEAAAHIAAAcIAAABIgCABIgEAAIgBgBIgBgBIAAgEQgCADgDACQgEACgEAAQgEAAgEgCgAABABQgFABgDACQgDACAAADQAAAEADACQADACAEAAQAEAAADgEQAEgEAAgHIAAgCg");
	this.shape_149.setTransform(234.2,892.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgMADIgBgBIgBgBIAAgBIABgBIABgBIAZAAIACABIAAABIAAABIAAABIgCABg");
	this.shape_150.setTransform(229.7,892.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AANAXQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgKgfIgJAfQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDAAIgCgBIgBgBIgNgoIAAgBIAAgCIABAAIAFAAIABAAIAAABIAKAhIALggIABgBIACgBIABAAIABABIABABIALAgIALghIAAgBIACAAIADAAIABAAIABACIAAABIgNAoIgBABIgBABg");
	this.shape_151.setTransform(223.9,892.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgOASQgFgFAAgKIgBgDIABgDQAAgJAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAJIABADIgBADQAAAKgFAFQgGAGgJAAQgIAAgGgGgAgIgNQgDAEAAAHIAAACIAAADQAAAHADADQAEAEAEAAQAFAAAEgEQADgDAAgHIAAgDIAAgCQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_152.setTransform(217.7,892.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAOAgIgCgBIAAgBIAAgZQAAgFgDgDQgEgEgFAAQgEAAgEAEQgDADAAAFIAAAZIgBABIgBABIgEAAIgCgBIAAgBIAAg7IAAgBIACAAIAEAAIABAAIABABIAAAVQACgCAEgCQAEgCADAAQAIAAAFAFQAFAGAAAHIAAAaIgBABIgBABg");
	this.shape_153.setTransform(212.5,891.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_154.setTransform(207.6,891.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAbAXIgCAAIAAgCIAAgXQAAgHgDgDQgDgDgFAAQgEAAgDADQgDADAAAHIAAAXIgBACIgCAAIgCAAIgBAAIgBgCIAAgXQAAgHgDgDQgDgDgEAAQgFAAgDADQgDADAAAHIAAAXIAAACIgCAAIgEAAIgBAAIgBgCIAAgoIABgCIABgBIAEAAIABABIABACIAAADQAFgGAIAAQAKAAACAIQACgEAEgCQAEgCAFAAQAHAAAFAFQAFAFAAAJIAAAYIgBACIgBAAg");
	this.shape_155.setTransform(201.4,892.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgOASQgFgFAAgKIgBgDIABgDQAAgJAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAJIABADIgBADQAAAKgFAFQgGAGgJAAQgIAAgGgGgAgIgNQgDAEAAAHIAAACIAAADQAAAHADADQAEAEAEAAQAFAAAEgEQADgDAAgHIAAgDIAAgCQAAgHgDgEQgEgDgFAAQgEAAgEADg");
	this.shape_156.setTransform(194.8,892.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgNASQgGgFABgKIgBgDIABgCQgBgKAGgGQAGgFAHAAQAGAAAFACQAFADACADQACADAAAEIgBABIgBABIgEAAIgCAAIgBgCQgBgEgDgCQgCgCgFAAQgDAAgEADQgDAEAAAHIAAACIAAACQAAAIADADQAEAEADAAQAFAAACgCQADgCABgEIABgCIACAAIAEAAIABAAIABACQAAADgCAEQgCADgFACQgFADgGAAQgHAAgGgGg");
	this.shape_157.setTransform(189.8,892.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgCAFIgBgBIgBgBIAAgFIABgBIABgBIAFAAIABABIABABIAAAFIgBABIgBABg");
	this.shape_158.setTransform(186.2,894.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgCgDIgCgEIABgCIABAAIAEAAIABAAIABABIAEAEQADABADAAQAEAAADgCQADgBAAgEIgBgDIgEgDIgHgCQgIgCgDgBQgDgDgBgGQAAgDACgDQACgDAFgCQADgCAFAAQAFAAADACQAEACADACQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABIAAABIgBAAIgEAAIgCgBIgCgCIgDgCIgEAAQgEAAgCABQgCACAAADIAAADIAFADIAGACQAJACADABQAEAEgBAFQABAEgDADQgCADgFACQgDACgGAAQgFAAgEgCg");
	this.shape_159.setTransform(182.8,892.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgNASQgFgFgBgKIAAgDIAAgCQABgKAFgGQAGgFAHAAQAGAAAFACQAEADACADQADADAAAEIAAABIgCABIgEAAIgBAAIgBgCQgCgEgDgCQgDgCgEAAQgEAAgDADQgDAEgBAHIAAACIAAACQABAIADADQADAEAEAAQAEAAADgCQADgCACgEIABgCIABAAIAEAAIACAAIAAACQAAADgDAEQgCADgEACQgFADgGAAQgHAAgGgGg");
	this.shape_160.setTransform(178.1,892.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAAAgIgCgBIAAgBIAAgpIAAgBIACgBIACAAIABABIABABIAAApIgBABIgBABgAgBgWIgCAAIAAgCIAAgFIAAgBIACgBIADAAIACABIAAABIAAAFIAAACIgCAAg");
	this.shape_161.setTransform(174.5,891.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABADAEgBIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_162.setTransform(171.6,891.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgCgDIgCgEIAAgCIACAAIADAAIABAAIABABIAEAEQADABADAAQAEAAADgCQADgBAAgEIgBgDIgFgDIgGgCQgIgCgDgBQgEgDABgGQAAgDACgDQABgDAFgCQAEgCAEAAQAEAAAFACQADACACACQABABAAAAQABABAAABQAAAAAAABQABAAAAABIgBABIgCAAIgDAAIgBgBIgDgCIgDgCIgEAAQgDAAgDABQgCACAAADIABADIADADIAHACQAIACAEABQADAEABAFQgBAEgCADQgCADgEACQgEACgGAAQgFAAgEgCg");
	this.shape_163.setTransform(167.7,892.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgCgDQgCgDAAgEQAAgGAFgEQAEgBAJgCIALgCIAAgCQAAgJgKAAQgDAAgCABQgDACgBACIgBABIgBABIgDAAIgCgBIAAgBIACgFQACgDAEgCQAEgCAEAAQAKAAAEAFQAEAEAAAHIAAAcIAAABIgCABIgEAAIgBgBIgBgBIAAgEQgCADgDACQgEACgEAAQgEAAgEgCgAABABQgFABgDACQgDACAAADQAAAEADACQADACAEAAQAEAAADgEQAEgEAAgHIAAgCg");
	this.shape_164.setTransform(162.7,892.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgBAgIgBgBIgBgBIAAg7IABgBIABAAIADAAIABAAIABABIAAA7IgBABIgBABg");
	this.shape_165.setTransform(159.4,891.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgRAgIgCgBIAAgBIAAg6IAAgCIACAAIADAAIABAAIACACIAAAEQAEgHAIAAQAJAAAGAGQAEAGAAAJIAAADIAAADQAAAIgEAGQgGAGgJAAQgIAAgEgHIAAAVIgBABIgCABgAgIgUQgDAEAAAGIAAAEIAAADQAAAEADAEQAEAEAEAAQAGAAADgEQADgEAAgFIAAgDQAAgRgMAAQgFAAgDAEg");
	this.shape_166.setTransform(155.7,893.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgJAWQgEgCgDgDIgBgEIAAgCIABAAIAEAAIABAAIABABIAEAEQADABADAAQAEAAADgCQADgBAAgEIgBgDIgFgDIgGgCQgIgCgDgBQgDgDAAgGQAAgDABgDQACgDAFgCQAEgCAEAAQAFAAAEACQADACADACQAAABAAAAQABABAAABQAAAAAAABQABAAAAABIgBABIgBAAIgEAAIgCgBIgCgCIgDgCIgEAAQgDAAgDABQgDACABADIABADIADADIAHACQAIACAEABQADAEABAFQgBAEgCADQgCADgFACQgEACgFAAQgFAAgEgCg");
	this.shape_167.setTransform(150.7,892.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AAAAgIgCgBIAAgBIAAgpIAAgBIACgBIACAAIABABIABABIAAApIgBABIgBABgAgBgWIgCAAIAAgCIAAgFIAAgBIACgBIADAAIACABIAAABIAAAFIAAACIgCAAg");
	this.shape_168.setTransform(147.3,891.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgBgDIgDgEIABgCIACAAIADAAIABAAIABABIAFAEQACABADAAQAEAAADgCQADgBAAgEIgBgDIgFgDIgGgCQgIgCgDgBQgEgDAAgGQABgDACgDQACgDADgCQAEgCAFAAQAEAAAEACQAFACABACQABABAAAAQABABAAABQAAAAAAABQAAAAAAABIAAABIgCAAIgDAAIgBgBIgDgCIgDgCIgEAAQgDAAgDABQgDACAAADIABADIAFADIAGACQAIACAEABQAEAEAAAFQAAAEgDADQgCADgEACQgFACgFAAQgFAAgEgCg");
	this.shape_169.setTransform(144,892.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AAAAgIgCgBIAAgBIAAgpIAAgBIACgBIACAAIABABIABABIAAApIgBABIgBABgAgBgWIgCAAIAAgCIAAgFIAAgBIACgBIADAAIACABIAAABIAAAFIAAACIgCAAg");
	this.shape_170.setTransform(140.6,891.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAOAgIgCgBIAAgBIAAgZQAAgFgDgDQgEgEgFAAQgEAAgEAEQgDADAAAFIAAAZIgBABIgBABIgEAAIgCgBIAAgBIAAg7IAAgBIACAAIAEAAIABAAIABABIAAAVQACgCAEgCQAEgCADAAQAIAAAFAFQAFAGAAAHIAAAaIgBABIgBABg");
	this.shape_171.setTransform(136.8,891.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABADAEgBIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_172.setTransform(132.3,891.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgCAFIgBgBIgBgBIAAgFIABgBIABgBIAFAAIABABIABABIAAAFIgBABIgBABg");
	this.shape_173.setTransform(129.4,894.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AANAXQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgKgfIgJAfQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDAAIgCgBIgBgBIgNgoIAAgBIAAgCIABAAIAFAAIABAAIABABIAKAhIAKggIABgBIACgBIABAAIACABIAAABIALAgIAKghIABgBIACAAIAEAAIAAAAIABACIAAABIgNAoIgBABIgCABg");
	this.shape_174.setTransform(124.7,892.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AANAXQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgKgfIgJAfQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDAAIgCgBIgBgBIgNgoIAAgBIAAgCIABAAIAFAAIABAAIABABIAKAhIAKggIABgBIACgBIABAAIACABIABABIAKAgIAKghIABgBIACAAIADAAIABAAIABACIAAABIgNAoIgBABIgCABg");
	this.shape_175.setTransform(117.5,892.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AANAXQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgKgfIgJAfQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDAAIgCgBIgBgBIgNgoIAAgBIAAgCIABAAIAFAAIABAAIABABIAKAhIAKggIABgBIACgBIABAAIACABIAAABIALAgIAKghIABgBIACAAIAEAAIAAAAIABACIAAABIgNAoIgBABIgCABg");
	this.shape_176.setTransform(110.3,892.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_177.setTransform(104.6,891.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgQAnIgBgBIgBgBIAAgBIAdhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABABIABABIgBABIgdBIIAAABIgCABg");
	this.shape_178.setTransform(100.3,891.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgBAUIgCAAIAAgCIAAgGIAAgBIACgBIAEAAIABABIABABIAAAGIgBACIgBAAgAgBgJIgCgBIAAgBIAAgGIAAgCIACAAIAEAAIABAAIABACIAAAGIgBABIgBABg");
	this.shape_179.setTransform(97,892.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgBgDIgDgEIABgCIACAAIADAAIABAAIABABIAFAEQACABADAAQAEAAADgCQADgBAAgEIgBgDIgFgDIgGgCQgIgCgDgBQgEgDAAgGQABgDACgDQACgDADgCQAEgCAFAAQAEAAAEACQAFACABACQABABAAAAQABABAAABQAAAAAAABQAAAAAAABIAAABIgCAAIgDAAIgBgBIgDgCIgDgCIgEAAQgDAAgDABQgDACAAADIABADIAFADIAGACQAIACAEABQAEAEAAAFQAAAEgDADQgCADgEACQgFACgFAAQgFAAgEgCg");
	this.shape_180.setTransform(93.6,892.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgSAgIgBgBIgBgBIAAg6IABgCIABAAIAEAAIABAAIABACIAAAEQAGgHAHAAQAKAAAEAGQAFAGABAJIAAADIAAADQgBAIgFAGQgEAGgKAAQgHAAgGgHIAAAVIAAABIgBABgAgIgUQgDAEgBAGIAAAEIAAADQABAEADAEQADAEAFAAQAGAAADgEQADgEAAgFIAAgDQAAgRgMAAQgFAAgDAEg");
	this.shape_181.setTransform(88.7,893.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABADAEgBIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_182.setTransform(84.1,891.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AAHAgQgMAAAAgQIAAgXIgHAAIgCAAIAAgCIAAgCIAAgBIACgBIAHAAIAAgQIABgBIABAAIADAAIAAAAIABABIAAAQIALAAIACABIAAABIAAACIAAACIgCAAIgLAAIAAAWQAAAEACADQABADAEgBIAFAAIACABIAAABIAAAEIAAABIgCABg");
	this.shape_183.setTransform(80.6,891.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AAOAgIgCgBIAAgBIAAgZQAAgFgDgDQgEgEgFAAQgEAAgEAEQgDADAAAFIAAAZIgBABIgBABIgEAAIgCgBIAAgBIAAg7IAAgBIACAAIAEAAIABAAIABABIAAAVQACgCAEgCQAEgCADAAQAIAAAFAFQAFAGAAAHIAAAaIgBABIgBABg");
	this.shape_184.setTransform(76.2,891.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(127));

	// Layer 60
	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#050404").s().p("EgvzADwIAAnfMBfnAAAIAAHfg");
	this.shape_185.setTransform(306.1,903);

	this.timeline.addTween(cjs.Tween.get(this.shape_185).wait(127));

	// termoplasticos
	this.instance_1 = new lib.Path_0();
	this.instance_1.setTransform(520.8,657.2,1,1,0,0,0,5.5,10.9);
	this.instance_1.alpha = 0.609;

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.setTransform(498.5,666.8,1,1,0,0,0,7,12.5);
	this.instance_2.alpha = 0.609;

	this.instance_3 = new lib.Path_2_0();
	this.instance_3.setTransform(524,695.8,1,1,0,0,0,4.5,2.8);
	this.instance_3.alpha = 0.609;

	this.instance_4 = new lib.Path_3_0();
	this.instance_4.setTransform(541.2,686.3,1,1,0,0,0,7.8,5.9);
	this.instance_4.alpha = 0.609;

	this.instance_5 = new lib.Path_4_0();
	this.instance_5.setTransform(539.6,695,1,1,0,0,0,9.4,5);
	this.instance_5.alpha = 0.609;

	this.instance_6 = new lib.Path_5_0();
	this.instance_6.setTransform(530.6,674.3,1,1,0,0,0,1,3.1);
	this.instance_6.alpha = 0.609;

	this.instance_7 = new lib.Path_6();
	this.instance_7.setTransform(519,684.3,1,1,0,0,0,8.2,1.7);
	this.instance_7.alpha = 0.609;

	this.instance_8 = new lib.Path_7();
	this.instance_8.setTransform(519.1,674.5,1,1,0,0,0,9.8,4.3);
	this.instance_8.alpha = 0.609;

	this.instance_9 = new lib.CompoundPath_1();
	this.instance_9.setTransform(524,676.7,1,1,0,0,0,33.2,32.6);
	this.instance_9.alpha = 0.609;

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#D9C438").s().p("AgYANQgLgFAAgIQAAgHALgGQAKgFAOAAQAPAAAKAFQAKAGAAAHQAAAIgKAFQgKAHgPgBQgOABgKgHg");
	this.shape_186.setTransform(451.9,649);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#AF8D1E").s().p("AgHAoQgLAAgIgIQgJgIAAgMIAAgoQABgEADgDQADgEAFAAIAvAAQAFAAADAEQADADAAAEIAAAoQABAMgJAIQgIAIgLAAg");
	this.shape_187.setTransform(451.9,652.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#D9C438").p("AAAgZIAAA0");
	this.shape_188.setTransform(457.3,709.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E1E05A").s().p("AgRApQgfgBgRgMQgNgKACgNQACgLAMgKQALgJAXgKQAcgLAaAKQAbAJARAZQAVAbgrALQgWAGgcAAIgPgBg");
	this.shape_189.setTransform(452,659.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#D9C438").p("AAAgZIAAA0");
	this.shape_190.setTransform(455.9,709.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#D9C438").p("AAAgaIAAA1");
	this.shape_191.setTransform(454.3,709.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#D9C438").p("AAAgaIAAA1");
	this.shape_192.setTransform(452.8,709.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#D9C438").p("AAAgaIAAA1");
	this.shape_193.setTransform(451.2,709.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#D9C438").p("AAAgaIAAA1");
	this.shape_194.setTransform(449.6,709.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#D9C438").p("AAAgaIAAA1");
	this.shape_195.setTransform(448,709.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#D9C438").p("AAAgaIAAA1");
	this.shape_196.setTransform(458.7,708.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#D9C438").p("AAAgaIAAA1");
	this.shape_197.setTransform(444.6,708.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#D9C438").p("AAAgZIAAA0");
	this.shape_198.setTransform(446.3,709.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#D9C438").s().p("AgCAJQgxgBglgRICxAJQg7AKgdAAIgDgBg");
	this.shape_199.setTransform(451.9,702.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D9C438").s().p("AgDAJQgygBgjgRICxAJQhBAKgYAAIgDgBg");
	this.shape_200.setTransform(452,696.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#D9C438").s().p("AgCAJQgzgBgjgRICxAJQg6AKgfAAIgCgBg");
	this.shape_201.setTransform(451.9,691.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#D9C438").s().p("AgCAJQgzgBgjgRICxAJQg6AKgfAAIgCgBg");
	this.shape_202.setTransform(451.9,687.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#D9C438").s().p("AgDAJQgwgBglgRICxAJQg7AKgeAAIgDgBg");
	this.shape_203.setTransform(452,681.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#E2EB7A").s().p("AgKElQgqgCgTgIQgGgDgCgDIAAgGIgBgxIgBgEQgBgCgEgEQgEgEgDgOIgDgTQgGghAAgeIgBhIQAAgoAGgcQACgHAFgGQAFgGAHAAQAEgYgMgnQgQg0gCgMQgCgYACgOQAFgVAWgdQAMgPAKgEQA4gVAvAVQAyAXAHA+QAEAggWAvQgEAIgEAdQgFAhAHAAQAHAAAFAGQAFAGABAHQAHAcAAAoIgBBHQAAAfgGAhQAAAIgHAMQgHAOgCAFQgCAIAAAPIAAAWQgBALgBADQgJASg5ACg");
	this.shape_204.setTransform(451.8,683.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#7C7D1E").s().p("AgoAOQgBgEALgHQALgFASgGQAOgGANgBQANgCACAEQABAEgLAHQgLAFgRAGQgPAGgOABIgGABQgHAAgBgDg");
	this.shape_205.setTransform(387.2,654.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#A2AD28").s().p("AgXAiQgJgFgEgKIgKgYIBRgeIAKAaQADAJgEAIQgEAJgKAEIgiANQgEACgEAAQgFAAgGgCg");
	this.shape_206.setTransform(387.8,657);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#EBF9A5").s().p("AgMhbIgCAAQgFgIAFgHQAGgDAHADQAEADADAFQAFAHACASQAGBDgCBDQgBAhgLAOg");
	this.shape_207.setTransform(407.2,696.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#EBF9A5").s().p("AgchWIgCAAQgGgGAEgJQAEgDAHABQAHABAFAFQAGAGADAQQAVBEALA/QAGAhgIAQg");
	this.shape_208.setTransform(401.6,672.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D5F169").s().p("AgUEaQgagBgIgLQgfgMgRg0QgfhhgMhtQgGgzgCg1QgCgoABgNIAAgWQAAgPAEgGQAFgGANgDQARgDAEgCQAGgDAAgEIAAgFQgJgRAAgGIAAgDQABgEANgIQALgGAXgIIAJgDQAEAAADAFIAHAQQADAJAIABQAFABALgFIAPgIQAMgFAHgBIAFAAQADABACACQAhAcAiBHQAbA7AOBBQAMA5AFBIQADA2gBBOIABAPQAAAHgCAHQgDALgEAEQgHAIgUAEQgfAGgoABIgrAAIgaAAg");
	this.shape_209.setTransform(397,685.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#A8D08E").s().p("AhFARQAJgWgDgUQA6AFBEgFQgBARAIAbQgsAGgaAAIgDABQgjAAgfgJg");
	this.shape_210.setTransform(344.6,663.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#A8D08E").s().p("AAAA7QgmgBgjgLQgKgDgGgJQgHgJAAgLIAAhJQAJAGAhAHQAgAGATAAQArAAA5gOIAABHQAAALgHAJQgHAKgLACQggAJgiAAIgGAAg");
	this.shape_211.setTransform(344.6,704.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#84AF68").s().p("AgzAJQgWgEAAgFQAAgEAWgEQAWgDAdAAQAfAAAVADQAWAEAAAEQAAAFgWAEQgVADgfAAQgeAAgVgDg");
	this.shape_212.setTransform(344.6,656.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#B8E5A2").s().p("AgCEjQgjABgfgMQgXgJgJgMQgGgKgDgOIgBgOIAAgOQgDhvAAhQQAAgzAEgiQAFgvANgmIALgfQAFgSAAgPQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgCgDIgHgCQgHgCgDgIQgCgGABgIQAAgNAEgQIABgEIAFgDQAJgCAGABQAHAAAPgBIAWgCIASAAIAAAAIACAAIAGAAIAAAAIAAAAIAVAAIAXACQAQABAIAAQAHgBAIACQAEABACACIACAEQADAQABANQAAAJgCAFQgDAIgHACIgHACIgDADQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQgBAPAFASIAMAfQAPAmAFAvQAEAkAAAxQAABmgEBZIAAAOIgBAOQgEAQgGAIQgJAMgYAJQgeALgiAAIgEAAg");
	this.shape_213.setTransform(344.6,683.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#7C7D1E").s().p("AAAAJQgRAAgNgDQgNgDABgDQAAgEANgCQAMgDARABQASAAANADQAMAEAAABQAAAEgNADQgLADgPAAIgEgBg");
	this.shape_214.setTransform(291.7,641);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#A2AD28").s().p("AASAaIgkAAQgKAAgHgIQgIgHABgLIAAgZIBVAAIAAAaQABAKgIAIQgHAHgKAAIgBAAg");
	this.shape_215.setTransform(291.8,643.7);

	this.instance_10 = new lib.Path_1_1();
	this.instance_10.setTransform(292.8,650.8,1,1,0,0,0,1.3,4.6);
	this.instance_10.alpha = 0.512;

	this.instance_11 = new lib.Path_2();
	this.instance_11.setTransform(296.1,683,1,1,0,0,0,1.8,6.7);
	this.instance_11.alpha = 0.512;

	this.instance_12 = new lib.Path_3();
	this.instance_12.setTransform(298.5,701.7,1,1,0,0,0,3.1,8.3);
	this.instance_12.alpha = 0.512;

	this.instance_13 = new lib.Path_4();
	this.instance_13.setTransform(299.3,666.5,1,1,0,0,0,2.4,6.4);
	this.instance_13.alpha = 0.512;

	this.instance_14 = new lib.Path_5();
	this.instance_14.setTransform(291.8,677.6,1,1,0,0,0,12.2,35.9);
	this.instance_14.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(127));

	// termorigidos
	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#EFA455").p("AAAgJIAAAT");
	this.shape_216.setTransform(527.8,814.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#EFA455").p("AAAgJIAAAT");
	this.shape_217.setTransform(525.6,814.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#EFA455").p("AAAgUIAAAp");
	this.shape_218.setTransform(523.1,813.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#EFA455").p("AAAgMIAAAZ");
	this.shape_219.setTransform(520.4,814.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#EFA455").p("AAAgOIAAAd");
	this.shape_220.setTransform(517.6,814.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#EFA455").p("AAAgaIAAA1");
	this.shape_221.setTransform(514.7,812.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#EFA455").p("AhgAAIDCAA");
	this.shape_222.setTransform(522.4,817.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#D4833D").s().p("AgYAZQgLgKAAgPQAAgOALgLQAKgKAOAAQAPAAAKAKQALALAAAOQAAAPgLAKQgKALgPAAQgOAAgKgLgAgFgFQgDADAAACQAAAEADACQADADACgBQADABADgDQACgCAAgEQAAgCgCgDQgDgCgDgBQgCABgDACg");
	this.shape_223.setTransform(516.7,827.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#050404").s().p("AgMATQgIgGgCgKQgBgIAFgIQAHgIAKgBQAIgBAIAGQgDABgHAHIgBACQgBABAAAAQAAABABAAQAAAAAAABQABAAABAAIAEAAIAKgFQACgBABAGIAAAEQAAAHgEAGQgGAIgKACIgDAAQgGAAgGgEg");
	this.shape_224.setTransform(532.4,825.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#050404").s().p("AgQAQQgGgIgBgJQAFACAJABIABgBIACgBIAAAAIgCgDIgLgGQgBAAADgFIAGgFQAFgDAGAAQAJgBAIAIQAGAGABAJQgBAJgGAHQgIAIgJgBQgJAAgHgHg");
	this.shape_225.setTransform(524.8,825.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#84AF68").s().p("AhFAIQgJABAAgJQgBgDADgCQADgCAEgBICMAAQAEABACACQADADAAACQAAAEgDACQgCADgEgBg");
	this.shape_226.setTransform(549.4,827.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#84AF68").s().p("AhFAJQgJAAAAgJQgBgCADgDQADgDAEAAICMAAQADAAADADQADADAAACQAAAEgDACQgCADgEAAg");
	this.shape_227.setTransform(549.4,821.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#84AF68").s().p("AhFAJQgEAAgDgDQgDgDABgDQgBgDADgCQADgDAEAAICMAAQAEAAACADQADADAAACQAAADgDADQgDADgDAAg");
	this.shape_228.setTransform(549.4,816);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#84AF68").s().p("AhFAJQgEAAgDgDQgDgDABgDQgBgDADgCQADgDAEAAICMAAQAEAAACADQADADAAACQAAADgDADQgDADgDAAg");
	this.shape_229.setTransform(549.4,810.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#84AF68").s().p("AhFAJQgJAAAAgJQgBgCADgDQADgDAEAAICMAAQADAAADADQADADAAACQAAAEgDACQgCADgEAAg");
	this.shape_230.setTransform(549.4,805.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#F1F9CA").s().p("AhhBNQgKAAgIgHQgHgHAAgKIAAhpQAAgKAHgHQAIgHAKAAIDEAAQAKAAAHAHQAHAHAAAKIAABpQAAAKgHAHQgHAHgKAAg");
	this.shape_231.setTransform(523.1,811.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#C3BEB7").p("AiWBGIEtiL");
	this.shape_232.setTransform(535.5,790.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#C3BEB7").s().p("AgIAJQgFgEAAgFQAAgEAEgDQAEgEAFgBQAFAAAEAEQAEAEAAAEQABAFgEAEQgFAEgFAAQgEAAgEgEg");
	this.shape_233.setTransform(551.5,782.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#847B78").s().p("AgfAQIAAgRQAAgGAFgEQAEgEAGAAIAhAAQAGAAAFAEQAEAEAAAGIAAARg");
	this.shape_234.setTransform(517.6,798.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#A2D087").s().p("AjBCjQgcAAgTgTQgTgUgBgbIAAjBQABgcATgTQATgTAcAAIGDAAQAbAAAUATQATATAAAcIAADBQAAAcgTATQgTATgcAAg");
	this.shape_235.setTransform(533.8,816.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgEAFQgCgDAAgCQAAgHAGAAQAHAAAAAHQAAACgCADQgDACgCABQgCgBgCgCg");
	this.shape_236.setTransform(446.2,784.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgGAIQgDgEAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDAEQgDADgEAAQgDAAgDgDg");
	this.shape_237.setTransform(449,784.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#D1DB8A").s().p("Ag1A9QgFAAAAgFIAAhvQAAgFAFAAIBrAAQAFAAAAAFIAABvQAAAFgFAAg");
	this.shape_238.setTransform(428.3,796.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#D1DB8A").s().p("Ag1A9QgEAAgBgFIAAhvQABgFAEAAIBqAAQAFAAABAFIAABvQgBAFgFAAg");
	this.shape_239.setTransform(442.5,811.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#EFA455").s().p("Ag1A9QgEAAgBgFIAAhvQABgFAEAAIBqAAQAFAAABAFIAABvQgBAFgFAAg");
	this.shape_240.setTransform(442.5,796.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#EFA455").s().p("Ag1A9QgFAAAAgFIAAhvQAAgFAFAAIBrAAQAFAAAAAFIAABvQAAAFgFAAg");
	this.shape_241.setTransform(428.3,811.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#F6DA4A").s().p("Ah8CFQgFgBAAgFIAAj9QAAgGAFAAID5AAQAFAAAAAGIAAD9QAAAFgFABg");
	this.shape_242.setTransform(463.1,803.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#D2D5B4").s().p("AhQAYQgEABAAgIIAGgiQAAgHAEABICWAAQADgBAAAHIAGAiQAAAIgEgBg");
	this.shape_243.setTransform(449.3,838.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#D2D5B4").s().p("AknAjQgEAAgFgDQgDgDAAgEIAYgyQAAgEAEgCQADgDAFAAIIfAAQAGAAADADQADACABAEIAXAyQAAAEgEADQgDADgFAAg");
	this.shape_244.setTransform(449.3,829.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#ABAD88").s().p("Al/BcQgGgHABgIIBCiZQAAgIAGgHQAFgFAHAAIJhAAQAJAAAFAFQAGAHgBAIIBBCYQABAJgGAGQgGAFgHAAIrlABQgHAAgGgFg");
	this.shape_245.setTransform(449.3,833.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#514D31").s().p("Al/BTQgFgSAAgMIBCiGQABgJAFgGQAGgGAHAAIJhAAQAJAAAFAGQAGAGgBAJIBACFQAAAMgEASQgHAUgGAAIrlABQgGAAgIgUg");
	this.shape_246.setTransform(449.3,837.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#F1F9CA").s().p("AkfCrQgEAAgDgDQgEgEAAgEIAAk/QAAgEAEgDQADgEAEAAII/AAQAEAAAEAEQADADAAAEIAAE/QAAAEgDAEQgEADgEAAg");
	this.shape_247.setTransform(449.1,803.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#514D31").s().p("AkyDLQgHAAgFgEQgFgFAAgHIAAl0QAAgHAFgFQAFgFAHAAIJlAAQAHAAAFAFQAFAFAAAHIAAF0QAAAHgFAFQgFAEgHAAg");
	this.shape_248.setTransform(449,803.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#0A070A").s().p("AiiB2QhJgNgHgmQgJgtAzgyQA8g9BwgWQBzgXBQAfQBEAZAIAtQAIAkhCArQhEAshoAUQg/AMg0AAQghAAgbgEg");
	this.shape_249.setTransform(293.2,816.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#664E43").s().p("AitCLQhagagLg8QgLg5BIg6QBJg6BxgWQBxgWBZAaQBYAaAMA8QALA5hIA6QhJA6hyAWQgyAKgvAAQg3AAgwgOg");
	this.shape_250.setTransform(292.4,813.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#CCA47D").s().p("AiPCWQgogQgigqQgYgegagzQgFgIAAgEQAAgGAFgJQAOgbAegUIA4geQBXguBEgNQBWgRBPAJQByAMAGBGQABAKgCANIgFAaIgLAyQgWBfi8AlQg4ALgtAAQg0AAgkgOg");
	this.shape_251.setTransform(292,819.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#0A070A").s().p("AgaAOQAWgfAiADQgcAVgfAJg");
	this.shape_252.setTransform(336.8,784.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#EFA455").s().p("AhXB+QgFgCgBgIIgDgNIg4gYQApguAWgWQAkgiAggaQBRhABTgNQAIAHABANQABAMgHALQgHANgbASIh9BSQgVANgIAMQgGAIgIAaQgIAWgJAKQgFAGgFAAIgEgBg");
	this.shape_253.setTransform(328,794.1);

	this.instance_15 = new lib.CompoundPath();
	this.instance_15.setTransform(371.7,812.3,1,1,0,0,0,9.2,9.2);
	this.instance_15.alpha = 0.602;

	this.instance_16 = new lib.Path();
	this.instance_16.setTransform(359.2,825.1,1,1,0,0,0,7.7,9.5);
	this.instance_16.alpha = 0.441;

	this.instance_17 = new lib.Path_1();
	this.instance_17.setTransform(385,800.5,1,1,0,0,0,7.7,9.3);
	this.instance_17.alpha = 0.441;

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("Ai6C7QhOhNAAhuQAAhsBOhOQBOhOBsAAQBuAABNBOQBOBOAABsQAABuhOBNQhNBOhuAAQhsAAhOhOg");
	this.shape_254.setTransform(371.6,812.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_254},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]}).wait(127));

	// texto
	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AAIAlQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgEIAYg4QABgEACgCQADgCAFAAIAVAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAGIgJA4QgCAEgCADQgDADgEAAgAg5AlQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgEIAWg4QACgEADgCQACgCAEAAIAWAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABADAAADIgJA4QgBAEgDADQgCADgFAAg");
	this.shape_255.setTransform(531.3,573.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AAIAlQgBABAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgDIAYg4QABgEACgCQADgCAEAAIAWAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIABAEIgJA5QgBAEgCAEQgDACgEAAgAg4AlQgBABgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgDIAXg4QACgEACgCQADgCAEAAIAVAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQABACAAACIgJA5QgBAEgDAEQgCACgFAAg");
	this.shape_256.setTransform(252.5,547.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgFBmQADgIABgXIgIAAIgcAAIgKAAIg6ABQADgGAyhJIApg+IAdgvIAigFIAWgEIAAAPIgCAoIgEAzIgDAmIApgCQgNAegFAGIgIAJQgCADgRADQAAAUgEASQgnANggAHgAgTgNIgiAkIA1gBIAAgHQAAgNAGgrIABgGQgMASgOAQg");
	this.shape_257.setTransform(48.9,557);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgSAUQgHgFAAgLIAAgEIAAgDQAAgLAHgFQAHgHALABQAMgBAHAHQAHAFAAALIAAADIAAAEQAAALgHAFQgHAHgMAAQgLAAgHgHgAgFgKQgCADAAAEIAAADIAAADQAAAGACACQACADADAAQAEAAACgDQACgCAAgGIAAgDIAAgDQAAgEgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_258.setTransform(104.2,548.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgRAUQgHgFgBgMIAAgDIAAgDQABgKAHgGQAHgHAKABQAIAAAGACQAGADADAFQACAEABAEIgBABIgCABIgNAAIgCAAIgBgCIgDgEIgEgBQgGAAAAAKIgBACIABADQAAAFACADQACACACAAIAEgBIADgEIABgCIACAAIANAAIACABIABABQAAADgDAFQgDAEgGADQgGADgIABQgKAAgHgHg");
	this.shape_259.setTransform(98.2,548.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgFAkIgBAAIgBgCIAAgtIABgCIABgBIAKAAIADABIABACIAAAtIgBACIgDAAgAgFgVIgBgBIgBgCIAAgJIABgCIABAAIAKAAIADAAIABACIAAAJIgBACIgDABg");
	this.shape_260.setTransform(93.8,547.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAJAjQgTAAAAgUIAAgQIgIAAIgCgBIAAgCIAAgIIAAgCIACgBIAIAAIAAgQIABgDIACAAIAKAAIACAAIAAADIAAAQIANAAIACABIAAACIAAAIIAAACIgCABIgNAAIAAAPQAAADACACQAAAAAAABQABAAAAAAQABAAAAAAQABABABAAIAIAAIACABIAAABIAAAJIAAACIgCABg");
	this.shape_261.setTransform(89.9,547.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgMAYQgGgCgDgEQgDgCAAgDIACgCIABgBIAMAAIABABIACABIAEADIACAAIAEgBQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAgBIgBgCIgEgCIgGgDQgRgDAAgKQAAgEADgEQACgEAFgCQAGgDAGABQAGgBAFADQAFACADADQADADAAADIAAACIgCAAIgLAAIgCAAIgCgCIgDgCIgCAAIgDABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIABACIADACIAHACQAKACAEACQAEAFAAAFQABAIgIAEQgGAEgLABQgHgBgFgCg");
	this.shape_262.setTransform(84.8,548.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgPAkQgEgDgDgDQgCgEAAgEQAAgHAFgEQAGgEAKgCIAKgCIAAgBQAAgCgBgCQgCgBgDAAIgCAAIgDACIgCABIgBAAIgMAAIgBAAIgBgBQAAgCADgDQADgDAFgDQAFgDAGABQAMAAAGAFQAGAFAAAHIAAAfIAAACIgCABIgMAAIgCgBIgBgCIAAgEQgCADgEADQgCACgFAAQgGAAgEgCgAAAAOQgHACAAAFQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAIAFACQACAAADgDQADgDAAgGIAAgBgAgEgVQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIAHgLIACgCIACAAIAOAAIABABIAAACIAAABIgNALIgCAAIgCABg");
	this.shape_263.setTransform(78.9,547.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgFAjIgCgBIAAgCIAAg/IAAgDIACAAIALAAIACAAIABADIAAA/IgBACIgCABg");
	this.shape_264.setTransform(74.6,547.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgZAjIgCgBIgBgCIAAg/IABgCIACgBIAaAAQANAAAHAHQAIAFAAAMQAAAKgIAFQgHAFgNAAIgKAAIAAAWIAAACIgCABgAgJgCIAJAAQAEAAADgCQACgCAAgEQAAgFgCgBQgCgDgFAAIgJAAg");
	this.shape_265.setTransform(70,547.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgBAEIgCAAIAAgCIAAgDIAAgBIACgBIADAAIABABIABABIAAADIgBACIgBAAg");
	this.shape_266.setTransform(423.7,761.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgIATIgFgEIgCgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgGgCQgGgCgEgBQgCgDAAgEQAAgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAGACQAHABADABQAEADgBAFQAAADgCADQgBADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_267.setTransform(420.7,760);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_268.setTransform(417.7,759.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgZAAIAAABQAAAFACAEQADADAEAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgDACgEACQgEACgEAAQgGAAgFgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgEgDgEAAQgEAAgDADg");
	this.shape_269.setTransform(414.6,760);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AAAAUQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgPgjIAAgBIABgBIABAAIADAAIACABIALAeIAMgeIAAgBIACAAIAEAAIABAAIAAABIAAABIgPAjQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_270.setTransform(410.1,760);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgJAbQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgDAIgBIAKgCIAAgCQAAgGgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAEIAAAaIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABAJQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCgAgBgRQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIAEgHIACgBIABAAIAFAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIgBABIgJAIIgBAAIgBABg");
	this.shape_271.setTransform(405.6,759.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AAAAcIgCgBIAAgBIAAgzIAAgBIACgBIABAAIACABIAAABIAAAzIAAABIgCABg");
	this.shape_272.setTransform(402.5,759.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_273.setTransform(399.4,760);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_274.setTransform(396.2,759.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_275.setTransform(393.1,760);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgLAQQgFgFgBgJIAAgCIAAgBQABgJAFgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAADgBIADgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgBACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAVAAIAAgBQgBgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_276.setTransform(388.7,760);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIACAAIAAACIAAADQADgFAGAAIAEAAIABAAIAAABIAAADIAAACIgBAAIgFAAQgFAAAAADQgCACAAAFIAAAVIgBACIgBAAg");
	this.shape_277.setTransform(385.2,760);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_278.setTransform(379.1,760);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgJAaQgDgCgCgCQgCgDAAgDQAAgFAEgEQAEgEAIAAIAKgCIAAgBQAAgHgKgBQgBAAgDACIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgFQACgCAEgBQADgCADAAQAJgBAEAFQAEAEAAAFIAAAZIAAABIgCABIgDAAIgBgBIgBgBIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABAHQgEABgDACQgDADAAACQAAAEADABQACACAEAAQADAAAEgEQADgDAAgHIAAgCgAACgTIgCgBIAAAAIgBgBIgBABIgBABIgCAAIgCAAIgBAAIAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgCADAAIACAAIABABIABABIACABIABgBIABgBIAAgBIABAAIADAAIABABIAAAAQAAADgCADQgCACgDAAIgCgBg");
	this.shape_279.setTransform(374.5,759.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_280.setTransform(370,760);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAADgBIADgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgBACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAVAAIAAgBQgBgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_281.setTransform(539.4,748.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgIATIgFgEIgCgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgGgCQgGgCgEgBQgCgDAAgEQAAgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAGACQAHABADABQAEADgBAFQAAADgCADQgBADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_282.setTransform(533.2,748.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_283.setTransform(530.2,747.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgZAAIAAABQAAAFACAEQADADAEAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgDACgEACQgEACgEAAQgHAAgEgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgDgEQgDgDgEAAQgEAAgDADg");
	this.shape_284.setTransform(527.1,748.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AAAAUQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgPgjIAAgBIABgBIABAAIADAAIACABIALAeIAMgeIAAgBIACAAIAEAAIABAAIAAABIAAABIgPAjQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_285.setTransform(522.6,748.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgMAYQgFgFAAgIIAAgVIABgBIABAAIAEAAIABAAIABABIAAAVQAAAMAJAAQAEAAADgDQADgEAAgFIAAgVIABgBIABAAIAEAAIABAAIABABIAAAkIgBACIgBAAIgEAAIgBAAIAAgCIAAgDIgGAFQgDABgDAAQgHAAgEgFgAgBgRQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIAEgHIACgBIABAAIAFAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIgKAIIgBAAIgBABg");
	this.shape_286.setTransform(518,747.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AAAAcIgCgBIAAgBIAAgzIAAgCIACAAIABAAIACAAIAAACIAAAzIAAABIgCABg");
	this.shape_287.setTransform(514.6,747.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_288.setTransform(511.3,748.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgHgCgEgBQgDgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgDADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_289.setTransform(507.1,748.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_290.setTransform(502.6,748.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_291.setTransform(499.2,747.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgCAHIgBAAIgBgBIACgKQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAEAAIABAAIAAABIAAACIgFAIQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAg");
	this.shape_292.setTransform(493.3,750.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_293.setTransform(490,748.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgUIgGAAIgCAAIAAgBIAAgDIAAgBIACAAIAGAAIAAgOIAAgCIACAAIACAAIAAAAIABACIAAAOIAKAAIABAAIABABIAAADIgBABIgBAAIgKAAIAAAUQAAADABACQABABAAAAQABABAAAAQABAAAAAAQABABABAAIAFAAIABAAIAAACIAAACIAAABIgBABg");
	this.shape_294.setTransform(486.2,747.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_295.setTransform(482.2,748.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAGgFAGAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgaAAIAAABQABAFADAEQACADAEAAQADAAACgBIAEgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgLQgDAEgBAFIAAABIAVAAIAAgBQAAgFgDgEQgEgDgEAAQgEAAgCADg");
	this.shape_296.setTransform(477.6,748.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_297.setTransform(471.8,748.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_298.setTransform(467.3,747.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_299.setTransform(464.2,748.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgLAQQgFgFgBgJIAAgCIAAgBQABgJAFgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAADgBIADgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgCACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAVAAIAAgBQgBgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_300.setTransform(459.8,748.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgVIABgBIABgBIAEAAIABABIABABIAAAUQAAAMAJAAQAEAAADgDQADgDAAgGIAAgUIABgBIABgBIAEAAIABABIABABIAAAkIgBABIgBABIgEAAIgBgBIAAgBIAAgEIgGAFQgDACgDAAQgHAAgEgFg");
	this.shape_301.setTransform(455.1,748.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AANAcIgBAAIgBgBIAAgTQgFAGgGAAQgIAAgFgFQgEgGAAgGIAAgDIAAgCQAAgJAEgFQAFgFAIAAQAHAAAEAGIAAgEIABgBIABAAIADAAIACAAIAAABIAAA0IAAABIgCAAgAgHgRQgCADgBAGIAAACQAAAOAKAAQAFAAADgEQADgDAAgDIAAgDIAAgDQAAgGgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_302.setTransform(450.2,749.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_303.setTransform(445.6,748.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_304.setTransform(438.1,748.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_305.setTransform(432.2,748.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_306.setTransform(427.7,748.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_307.setTransform(420,748.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgMAQQgFgFAAgJIAAgCIAAgBQAAgJAFgFQAGgFAGAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFADAEQACADAEAAQADAAACgBIAEgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgLQgDAEAAAFIAAABIAUAAIAAgBQgBgFgCgEQgEgDgEAAQgEAAgCADg");
	this.shape_308.setTransform(414.3,748.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgCIAAgDQAAgGAEgFQAFgGAIAAQAGAAAFAGIAAgSIAAgCIACAAIADAAIACAAIAAACIAAAzIAAABIgCABIgDAAIgBgBIgBgBIAAgEQgEAGgHAAQgIAAgFgFgAgHgDQgDADAAAEIAAADQAAAPAKAAQAFAAADgDQADgEAAgFIAAgDIAAgEQAAgDgDgDQgDgEgFABQgEgBgDAEg");
	this.shape_309.setTransform(409.5,747.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_310.setTransform(404.8,748.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgVIABgBIABgBIAEAAIABABIABABIAAAUQAAAMAJAAQAEAAADgDQADgDAAgGIAAgUIABgBIABgBIAEAAIABABIABABIAAAkIgBABIgBABIgEAAIgBgBIAAgBIAAgEIgGAFQgDACgDAAQgHAAgEgFg");
	this.shape_311.setTransform(400,748.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgCAdIgCgBIAAgBIAAggIgHAAIgBAAIgBgBIAAgDIABgBIABAAIAHAAIAAgFQAAgGADgEQABgDAHAAIAFAAIABABIABABIAAACIgBABIgBABIgEAAQgEAAgCACIgBAGIAAAEIAKAAIACAAIAAABIAAADIAAABIgCAAIgKAAIAAAgIAAABIgBABg");
	this.shape_312.setTransform(396.1,747.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgMAQQgFgFAAgJIAAgCIAAgBQAAgJAFgFQAGgFAGAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFADAEQACADAEAAQADAAACgBIAEgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgLQgDAEAAAFIAAABIAUAAIAAgBQgBgFgCgEQgEgDgEAAQgEAAgCADg");
	this.shape_313.setTransform(390.4,748.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgIATIgFgEIgCgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgGgCQgGgCgEgBQgCgDAAgEQAAgDACgDQABgDAEgBQADgCAEAAQAEAAADACIAGADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAGACQAHABADABQADADAAAFQAAADgCADQgBADgEABQgFACgEAAQgEAAgEgCg");
	this.shape_314.setTransform(386.2,748.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_315.setTransform(379.8,748.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgJAaQgDgBgCgDQgCgDAAgEQAAgEAEgEQAEgEAIAAIAKgCIAAgBQAAgHgKgBQgBAAgDACIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgFQACgCAEgBQADgCADAAQAJgBAEAFQAEAEAAAFIAAAZIAAABIgCABIgDAAIgBgBIgBgBIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABAHQgEABgDADQgDABAAADQAAAEADABQACACAEAAQADAAAEgEQADgDAAgHIAAgCgAACgTIgCgBIAAAAIgBgBIgBABIgBAAIgCABIgCAAIgBAAIAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgCADAAIACAAIABABIABABIACABIABgBIABgBIAAgBIABAAIADAAIABABIAAAAQAAAEgCACQgCACgDAAIgCgBg");
	this.shape_316.setTransform(375.2,747.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AAPAcIgCgBIgZgoIAAAnIAAABIgCABIgDAAIgCgBIAAgBIAAgyIAAgCIACAAIADAAIABAAIABABIAZAnIAAgmIAAgCIACAAIADAAIACAAIAAACIAAAyIAAABIgCABg");
	this.shape_317.setTransform(370.4,747.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgBAEIgBAAIgBgCIAAgDIABgBIABgBIAEAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_318.setTransform(543.5,627.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgIgCgCgBQgEgDAAgEQAAgDACgDQACgDADgBQAEgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgDADgEABQgDACgFAAQgEAAgEgCg");
	this.shape_319.setTransform(540.5,625.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_320.setTransform(537.5,624.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAGgFAGAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgaAAIAAABQABAFADAEQACADAEAAQADAAACgBIAEgDIABgBIACgBIADAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgLQgDAEgBAFIAAABIAVAAIAAgBQAAgFgDgEQgEgDgEAAQgEAAgCADg");
	this.shape_321.setTransform(534.3,625.6);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AAAAUQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgPgjIAAgBIAAgBIABAAIAFAAIACABIAKAeIAMgeIABgBIABAAIADAAIABAAIABABIAAABIgPAjQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_322.setTransform(529.9,625.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgJAbQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgDAIgBIAKgCIAAgCQAAgGgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAEIAAAaIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABAJQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCgAgBgRQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIAEgHIACgBIABAAIAFAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIgBABIgJAIIgBAAIgBABg");
	this.shape_323.setTransform(525.3,624.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgzIAAgBIACgBIABAAIACABIAAABIAAAzIAAACIgCAAg");
	this.shape_324.setTransform(522.3,624.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_325.setTransform(519.1,625.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_326.setTransform(516,624.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_327.setTransform(512.8,625.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgMAQQgFgFAAgJIAAgCIAAgBQAAgJAFgFQAFgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFADAEQADADADAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgDACgDACQgEACgFAAQgHAAgFgFgAgGgLQgDAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgDgDgFAAQgEAAgCADg");
	this.shape_328.setTransform(508.4,625.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AAPAbIgCAAIgBgCIgLgUIgNAAIAAAUIgBACIgBAAIgDAAIgCAAIgBgCIAAgyIABgBIACgBIARAAQAJAAAFAFQAFAEABAIQgBAGgDAEQgDACgFACIAMAVIAAABIAAABIgBAAgAgMAAIAMAAQAMAAgBgKQABgKgMAAIgMAAg");
	this.shape_329.setTransform(503.7,624.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgBAEIgCAAIAAgCIAAgDIAAgBIACgBIADAAIABABIABABIAAADIgBACIgBAAg");
	this.shape_330.setTransform(498,627.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIABAAIABACIAAADQADgFAHAAIADAAIAAAAIABABIAAADIgBACIAAAAIgFAAQgEAAgBADQgDACAAAFIAAAVIAAACIgCAAg");
	this.shape_331.setTransform(495.7,625.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_332.setTransform(491.6,625.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgzIAAgBIACgBIABAAIACABIAAABIAAAzIAAACIgCAAg");
	this.shape_333.setTransform(488.6,624.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgVIABgBIABgBIAEAAIABABIABABIAAAUQAAAMAJAAQAEAAADgDQADgDAAgGIAAgUIABgBIABgBIAEAAIABABIABABIAAAkIgBABIgBABIgEAAIgBgBIAAgBIAAgEIgGAFQgDACgDAAQgHAAgEgFg");
	this.shape_334.setTransform(485.2,625.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_335.setTransform(480.6,625.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgZAAIAAABQAAAFACAEQADADAEAAQADAAADgBIADgDIABgBIABgBIAEAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgDACgEACQgEACgEAAQgHAAgEgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgDgEQgDgDgEAAQgEAAgDADg");
	this.shape_336.setTransform(476.2,625.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgzIAAgBIACgBIABAAIACABIAAABIAAAzIAAACIgCAAg");
	this.shape_337.setTransform(473,624.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_338.setTransform(469.7,625.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_339.setTransform(463.9,625.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_340.setTransform(456,625.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIABAAIABACIAAADQADgFAHAAIACAAIABAAIABABIAAADIgBACIgBAAIgEAAQgEAAgBADQgCACAAAFIAAAVIgBACIgCAAg");
	this.shape_341.setTransform(452.7,625.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgVIABgBIABgBIAEAAIABABIABABIAAAUQAAAMAJAAQAEAAADgDQADgDAAgGIAAgUIABgBIABgBIAEAAIABABIABABIAAAkIgBABIgBABIgEAAIgBgBIAAgBIAAgEIgGAFQgDACgDAAQgHAAgEgFg");
	this.shape_342.setTransform(448.5,625.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgUIgGAAIgCAAIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgBIACgBIACAAIAAABIABABIAAANIAKAAIABABIABABIAAADIgBABIgBAAIgKAAIAAATQAAAFABABQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_343.setTransform(444.6,624.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgVIABgBIABgBIAEAAIABABIABABIAAAUQAAAMAJAAQAEAAADgDQADgDAAgGIAAgUIABgBIABgBIAEAAIABABIABABIAAAkIgBABIgBABIgEAAIgBgBIAAgBIAAgEIgGAFQgDACgDAAQgHAAgEgFg");
	this.shape_344.setTransform(440.6,625.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIABAAIABACIAAADQADgFAGAAIAEAAIABAAIAAABIAAADIAAACIgBAAIgFAAQgFAAAAADQgCACgBAFIAAAVIAAACIgBAAg");
	this.shape_345.setTransform(437,625.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgUIgGAAIgCAAIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgBIACgBIACAAIAAABIABABIAAANIAKAAIABABIABABIAAADIgBABIgBAAIgKAAIAAATQAAAFABABQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_346.setTransform(433.7,624.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgIATIgFgEIgCgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgGgCQgGgCgDgBQgDgDAAgEQAAgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAGACQAHABADABQAEADgBAFQAAADgCADQgBADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_347.setTransform(430.2,625.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAADgBIADgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgCACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAUAAIAAgBQAAgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_348.setTransform(425.9,625.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_349.setTransform(419.4,625.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgVIABgBIABgBIAEAAIABABIABABIAAAUQAAAMAJAAQAEAAADgDQADgDAAgGIAAgUIABgBIABgBIAEAAIABABIABABIAAAkIgBABIgBABIgEAAIgBgBIAAgBIAAgEIgGAFQgDACgDAAQgHAAgEgFg");
	this.shape_350.setTransform(414.9,625.7);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgEgDAAgEQAAgDADgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADAAAFQAAADgBADQgDADgEABQgDACgFAAQgFAAgDgCg");
	this.shape_351.setTransform(410.5,625.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAADgBIADgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgCACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAUAAIAAgBQAAgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_352.setTransform(404.3,625.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgNAXQgEgFAAgJIAAgDIAAgBQAAgHAEgGQAFgFAIAAQAGAAAFAGIAAgTIAAgBIACgBIADAAIACABIAAABIAAAzIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgEAHgHAAQgIAAgFgGgAgHgDQgDADAAAFIAAABQAAAQAKAAQAFAAADgEQADgDAAgGIAAgDIAAgCQAAgEgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_353.setTransform(399.6,624.9);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIABAAIABACIAAADQADgFAHAAIADAAIAAAAIABABIAAADIgBACIAAAAIgFAAQgFAAAAADQgDACAAAFIAAAVIAAACIgCAAg");
	this.shape_354.setTransform(394.1,625.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_355.setTransform(390,625.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIABAAIABACIAAADQADgFAGAAIAEAAIABAAIAAABIAAADIAAACIgBAAIgFAAQgFAAAAADQgCACgBAFIAAAVIAAACIgBAAg");
	this.shape_356.setTransform(386.7,625.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgMAQQgFgFAAgJIAAgCIAAgBQAAgJAFgFQAGgFAGAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFADAEQACADAEAAQADAAACgBIAEgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgLQgDAEAAAFIAAABIAUAAIAAgBQgBgFgCgEQgEgDgEAAQgEAAgCADg");
	this.shape_357.setTransform(382.8,625.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgUIgGAAIgCAAIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgBIACgBIACAAIAAABIABABIAAANIAKAAIABABIABABIAAADIgBABIgBAAIgKAAIAAATQAAAFABABQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_358.setTransform(378.9,624.9);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgzIAAgBIACgBIABAAIACABIAAABIAAAzIAAACIgCAAg");
	this.shape_359.setTransform(376.4,624.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_360.setTransform(373.1,625.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_361.setTransform(554.3,614);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgLAQQgFgFgBgJIAAgCIAAgBQABgJAFgFQAEgFAHAAQAIAAAFAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFAEAEQADADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgBACgFACQgDACgFAAQgHAAgEgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgCgDgFAAQgDAAgDADg");
	this.shape_362.setTransform(548.5,614);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgIATIgFgEIgDgEIABgBIABAAIAEAAIAAAAIABAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgDgDgBgEQABgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAGACQAHABADABQADADAAAFQAAADgBADQgCADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_363.setTransform(544.3,614);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIABAAIABACIAAADQADgFAHAAIADAAIAAAAIABABIAAADIgBACIAAAAIgFAAQgEAAgBADQgDACAAAFIAAAVIAAACIgCAAg");
	this.shape_364.setTransform(539,614);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_365.setTransform(536.3,613.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgNAXQgEgFAAgJIAAgDIAAgCQAAgGAEgGQAFgFAIAAQAGAAAFAGIAAgTIAAgBIACgBIADAAIACABIAAABIAAAzIAAACIgCABIgDAAIgBgBIgBgCIAAgDQgEAHgHAAQgIAAgFgGgAgHgDQgDADAAAEIAAACQAAAQAKAAQAFAAADgDQADgFAAgEIAAgEIAAgCQAAgEgDgDQgDgDgFAAQgEAAgDADg");
	this.shape_366.setTransform(532.9,613.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_367.setTransform(528.2,614);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgVIABgBIABgBIAEAAIABABIABABIAAAUQAAAMAJAAQAEAAADgDQADgDAAgGIAAgUIABgBIABgBIAEAAIABABIABABIAAAkIgBABIgBABIgEAAIgBgBIAAgBIAAgEIgGAFQgDACgDAAQgHAAgEgFg");
	this.shape_368.setTransform(523.3,614.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgCAdIgCgBIAAgBIAAggIgHAAIgBAAIgBgBIAAgDIABgBIABgBIAHAAIAAgEQAAgGADgDQABgEAHAAIAFAAIABABIABABIAAACIgBABIgBABIgEAAQgEAAgCACIgBAGIAAADIAKAAIACABIAAABIAAADIAAABIgCAAIgKAAIAAAgIAAABIgBABg");
	this.shape_369.setTransform(519.5,613.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgLAQQgFgFgBgJIAAgCIAAgBQAAgJAGgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgCACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAVAAIAAgBQgBgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_370.setTransform(513.8,614);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgEgDAAgEQAAgDADgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgDADgEABQgDACgFAAQgFAAgDgCg");
	this.shape_371.setTransform(509.5,614);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_372.setTransform(502,614);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQABgJAFgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgBACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAVAAIAAgBQgBgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_373.setTransform(496.2,614);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgNAXQgEgFAAgJIAAgDIAAgCQAAgGAEgGQAFgFAIAAQAGAAAFAGIAAgTIAAgBIACgBIADAAIACABIAAABIAAAzIAAACIgCABIgDAAIgBgBIgBgCIAAgDQgEAHgHAAQgIAAgFgGgAgHgDQgDADAAAEIAAACQAAAQAKAAQAFAAADgDQADgFAAgEIAAgEIAAgCQAAgEgDgDQgDgDgFAAQgEAAgDADg");
	this.shape_374.setTransform(491.5,613.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_375.setTransform(486.9,614);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_376.setTransform(482.3,614.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIADAAIACAAIAAAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgGgCQgGgCgEgBQgDgDAAgEQABgDABgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAFACQAIABADABQAEADAAAFQAAADgDADQgCADgDABQgFACgEAAQgFAAgDgCg");
	this.shape_377.setTransform(475.9,614);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_378.setTransform(471.5,614);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgNAXQgEgFAAgJIAAgDIAAgCQAAgGAEgGQAFgFAIAAQAGAAAFAGIAAgTIAAgBIACgBIADAAIACABIAAABIAAAzIAAACIgCABIgDAAIgBgBIgBgCIAAgDQgEAHgHAAQgIAAgFgGgAgHgDQgDADAAAEIAAACQAAAQAKAAQAFAAADgDQADgFAAgEIAAgEIAAgCQAAgEgDgDQgDgDgFAAQgEAAgDADg");
	this.shape_379.setTransform(466.8,613.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_380.setTransform(463.6,613.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_381.setTransform(460.4,614);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAGgFAGAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgaAAIAAABQABAFADAEQACADAEAAQADAAACgBIAEgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgLQgDAEgBAFIAAABIAVAAIAAgBQAAgFgDgEQgEgDgEAAQgEAAgCADg");
	this.shape_382.setTransform(456,614);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgVIABgBIABgBIAEAAIABABIABABIAAAUQAAAMAJAAQAEAAADgDQADgDAAgGIAAgUIABgBIABgBIAEAAIABABIABABIAAAkIgBABIgBABIgEAAIgBgBIAAgBIAAgEIgGAFQgDACgDAAQgHAAgEgFg");
	this.shape_383.setTransform(451.3,614.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AANAcIgBAAIgBgBIAAgTQgFAGgGAAQgIAAgFgFQgEgGAAgGIAAgDIAAgCQAAgJAEgFQAFgFAIAAQAHAAAEAGIAAgEIABgBIABAAIADAAIACAAIAAABIAAA0IAAABIgCAAgAgHgRQgCADgBAGIAAACQAAAOAKAAQAFAAADgEQADgDAAgDIAAgDIAAgDQAAgGgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_384.setTransform(446.5,614.7);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AATAcIgBgBIgBgBIgEgMIgZAAIgEAMQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABAAAAIgEAAIgBgBIgBgBIABgBIATgyQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIATAyIABABIgBABIgBABgAgKAIIAUAAIgKgbg");
	this.shape_385.setTransform(441.5,613.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgBAEIgBAAIgBgCIAAgDIABgBIABgBIAEAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_386.setTransform(435.9,615.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AACAHIgBAAIgBgCIACgJQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAFAAIAAAAIABABIAAACIgEAIIgBACIgBAAgAgJAHIAAAAIgBgCIACgJQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAGAAIAAAAIAAABIAAACIgEAIIgBACIgBAAg");
	this.shape_387.setTransform(433.5,611.2);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgEgDAAgEQAAgDADgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADAAAFQAAADgBADQgDADgEABQgDACgFAAQgFAAgDgCg");
	this.shape_388.setTransform(429.9,614);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgMAQQgFgFAAgJIAAgCIAAgBQAAgJAFgFQAFgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFACAEQAEADADAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgDACgDACQgEACgFAAQgHAAgFgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgDgDgFAAQgDAAgEADg");
	this.shape_389.setTransform(425.6,614);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AAAAcIgCgBIAAgBIAAgzIAAgBIACgBIABAAIACABIAAABIAAAzIAAABIgCABg");
	this.shape_390.setTransform(422.4,613.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_391.setTransform(419.1,614);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_392.setTransform(413.3,614);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AACAHIgBAAIgBgBIABgCIAEgIIABgCIABAAIADAAIABAAIAAACIgCAJQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAgAgJAHIgBAAIAAgBIAAgCIAEgIIABgCIACAAIACAAIABAAIAAACIgBAJQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_393.setTransform(408.2,611.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgHgCgEgBQgDgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAFACQAIABADABQADADABAFQAAADgCADQgDADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_394.setTransform(402.7,614);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_395.setTransform(398.3,614);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_396.setTransform(393.8,614);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_397.setTransform(390.7,613.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgUIgGAAIgCAAIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgBIACgBIACAAIAAABIABABIAAANIAKAAIABABIABABIAAADIgBABIgBAAIgKAAIAAATQAAAFABABQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAACIAAACIAAABIgBABg");
	this.shape_398.setTransform(388.1,613.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgIATIgFgEIgDgEIABgBIABAAIADAAIABAAIABAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgGgCQgHgCgCgBQgDgDAAgEQAAgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAGACQAHABADABQAEADgBAFQAAADgBADQgCADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_399.setTransform(384.6,614);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgJAbQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgDAIgBIAKgCIAAgCQAAgGgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAEIAAAaIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABAJQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCgAgBgRQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIAEgHIACgBIABAAIAFAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIgBABIgJAIIgBAAIgBABg");
	this.shape_400.setTransform(380.2,613.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AAAAcIgCgBIAAgBIAAgzIAAgBIACgBIABAAIACABIAAABIAAAzIAAABIgCABg");
	this.shape_401.setTransform(377.2,613.3);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgRAcIgCgBIAAgCIAAgxIAAgCIACgBIASAAQAJAAAFAFQAFAEAAAIQAAAJgFACQgFAEgJAAIgNAAIAAAUIAAACIgBABgAgMAAIAMAAQAMAAAAgKQAAgEgDgEQgDgCgGAAIgMAAg");
	this.shape_402.setTransform(373.8,613.3);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgBAEIgCAAIAAgCIAAgDIAAgBIACgBIAEAAIAAABIABABIAAADIgBACIAAAAg");
	this.shape_403.setTransform(179.6,600.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_404.setTransform(176.3,598.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_405.setTransform(170.7,598.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIABAAIABACIAAADQADgFAHAAIADAAIAAAAIABABIAAADIgBACIAAAAIgFAAQgEAAgBADQgDACAAAFIAAAVIAAACIgCAAg");
	this.shape_406.setTransform(165.9,598.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_407.setTransform(161.8,598.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgCAdIgCAAIAAgCIAAgfIgHAAIgBgBIgBgBIAAgDIABgBIABgBIAHAAIAAgDQAAgHADgDQABgEAHAAIAFAAIABAAIABABIAAADIgBACIgBAAIgEAAQgEAAgCACIgBAGIAAADIAKAAIACABIAAABIAAADIAAABIgCABIgKAAIAAAfIAAACIgBAAg");
	this.shape_408.setTransform(158,598);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_409.setTransform(152.2,598.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_410.setTransform(146.6,598.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_411.setTransform(140.7,598.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgTIgGAAIgCgBIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgCIACAAIACAAIAAAAIABACIAAANIAKAAIABABIABABIAAADIgBABIgBABIgKAAIAAASQAAAEABADQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_412.setTransform(136.8,598.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_413.setTransform(131,598.9);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_414.setTransform(126.6,598.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_415.setTransform(123.4,598.1);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgTIgGAAIgCgBIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgCIACAAIACAAIAAAAIABACIAAANIAKAAIABABIABABIAAADIgBABIgBABIgKAAIAAASQAAAEABADQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_416.setTransform(120.9,598.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgHgCgEgBQgDgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgDADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_417.setTransform(117.4,598.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgJAbQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgDAIgBIAKgCIAAgCQAAgGgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAEIAAAaIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABAJQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCgAgBgRQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIAEgHIACgBIABAAIAFAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIgBABIgJAIIgBAAIgBABg");
	this.shape_418.setTransform(113,598.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgzIAAgCIACAAIABAAIACAAIAAACIAAAzIAAACIgCAAg");
	this.shape_419.setTransform(109.9,598.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_420.setTransform(106.7,599.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_421.setTransform(99.9,598.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_422.setTransform(92.2,598.8);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_423.setTransform(87.7,598.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgEgDAAgEQAAgDADgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQgBADgBADQgDADgEABQgDACgFAAQgFAAgDgCg");
	this.shape_424.setTransform(84.7,598.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgEgDAAgEQAAgDADgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADAAAFQABADgCADQgDADgEABQgDACgFAAQgFAAgDgCg");
	this.shape_425.setTransform(80.7,598.9);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_426.setTransform(76.3,598.9);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgLAQQgFgFgBgJIAAgCIAAgBQABgJAFgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAADgBIADgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAVAAIAAgBQgBgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_427.setTransform(70.1,598.9);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIADAAIACAAIAAAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgGgCQgGgCgEgBQgDgDAAgEQABgDABgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAFACQAIABADABQAEADAAAFQAAADgDADQgCADgDABQgFACgEAAQgFAAgDgCg");
	this.shape_428.setTransform(116.8,587.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_429.setTransform(112.4,587.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgCIAAgCQAAgHAEgGQAFgFAIAAQAGAAAFAGIAAgTIAAgBIACgBIADAAIACABIAAABIAAAzIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgEAHgHgBQgIABgFgGgAgHgDQgDADAAAFIAAACQAAAPAKAAQAFAAADgEQADgDAAgGIAAgCIAAgDQAAgEgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_430.setTransform(107.9,586.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_431.setTransform(103.3,587.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgCIAAgCQAAgHAEgGQAFgFAIAAQAGAAAFAGIAAgTIAAgBIACgBIADAAIACABIAAABIAAAzIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgEAHgHgBQgIABgFgGgAgHgDQgDADAAAFIAAACQAAAPAKAAQAFAAADgEQADgDAAgGIAAgCIAAgDQAAgEgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_432.setTransform(98.7,586.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgzIAAgBIACgBIABAAIACABIAAABIAAAzIAAACIgCAAg");
	this.shape_433.setTransform(95.5,586.5);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_434.setTransform(92.2,587.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_435.setTransform(86.4,587.2);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_436.setTransform(78.5,587.3);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgJAaQgDgCgCgCQgCgDAAgDQAAgGAEgDQAEgEAIgBIAKgBIAAgBQAAgIgKABQgBgBgDACIgDADIgBABIgBAAIgDAAIgBAAIAAgBIABgEQACgDAEgCQADgCADAAQAJABAEAEQAEAEAAAFIAAAZIAAACIgCAAIgDAAIgBAAIgBgCIAAgEQgCADgDACQgDACgEAAQgEAAgDgCgAABAIQgEABgDACQgDABAAADQAAADADACQACACAEAAQADAAAEgDQADgEAAgGIAAgCgAACgSIgCgCIAAgBIgBAAIgBAAIgBABIgCACIgCAAIgBgBIAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgDADAAIACABIABABIABABIACAAIABAAIABgBIAAgBIABAAIADAAIABAAIAAABQAAACgCACQgCADgDAAIgCAAg");
	this.shape_437.setTransform(73.9,586.6);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgIgCgCgBQgEgDAAgEQAAgDADgDQABgDADgBQAEgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADAAAFQAAADgBADQgDADgEABQgDACgFAAQgFAAgDgCg");
	this.shape_438.setTransform(69.9,587.3);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgKATQgEgCgCgCQgBgBAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBIAAgBIACgBIAJAAIABABIACABIACABIACABIADgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIgBgCIgDgCIgFgBQgNgDAAgIQAAgDACgDQACgDAEgCQAEgCAFAAQAFAAAEACQAEABACADQADADAAACIgBABIgBAAIgJAAIgBAAIgCgBIgCgCIgCAAIgCABIgBACIAAACIADABIAFACQAHABAEACQADADAAAFQAAAGgFADQgFAEgJAAQgFAAgFgCg");
	this.shape_439.setTransform(169.9,575.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgMATQgDgBgCgDQgCgDAAgDQAAgGAEgDQAFgCAIgBIAIgBIAAgBQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIAAAAIgDACIgCABIAAABIgKAAIgBgBIAAgBIACgFQACgCAEgCQAEgCAFAAQAJAAAFAEQAFAFAAAHIAAAWIgBACIgBAAIgKAAIgBAAIgBgCIAAgDIgFAFQgBABgEAAQgEAAgEgCgAAAADQgGABAAAEQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAIAEACQABAAADgDQACgCAAgEIAAgBg");
	this.shape_440.setTransform(165.2,575.7);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AAJAVIgCgBIgBgBIAAgUQAAgEgCgCQgBgCgDAAQgCAAgCACQgBACAAAEIAAAUIgBABIgBABIgLAAIgCgBIAAgBIAAgkIAAgBIACgBIAKAAIACABIAAABIAAADIAFgEQACgCAEAAQAFAAADACQAEADACAEQACAEAAAFIAAAVIgBABIgBABg");
	this.shape_441.setTransform(160.4,575.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgEAdIgBAAIgBgCIAAgjIABgCIABgBIAJAAIABABIABACIAAAjIgBACIgBAAgAgEgQIgBgBIgBgCIAAgHIABgCIABAAIAJAAIABAAIABACIAAAHIgBACIgBABg");
	this.shape_442.setTransform(156.6,574.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgKATQgEgCgCgCQgBgBAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBIAAgBIACgBIAJAAIABABIACABIACABIACABIADgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIgBgCIgDgCIgFgBQgNgDAAgIQAAgDACgDQACgDAEgCQAEgCAFAAQAFAAAEACQAEABACADQADADAAACIgBABIgBAAIgJAAIgBAAIgCgBIgCgCIgCAAIgCABIgBACIAAACIADABIAFACQAHABAEACQADADAAAFQAAAGgFADQgFAEgJAAQgFAAgFgCg");
	this.shape_443.setTransform(153.2,575.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgOAQQgGgFABgKIAAgBQAAgJAFgGQAGgFAIAAQAHAAAEADQAFACACAFQACAFAAAFIAAABIAAACIgCAAIgXAAIAAABIACAGQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAIACgBIADgCIABgBIABAAIAKAAIACAAIAAABQAAACgCADQgCADgFACQgEACgGAAQgIAAgGgFgAgDgJQgCACAAAEIAAAAIALAAIAAAAQAAgEgCgCQgCgCgCAAQgCAAgBACg");
	this.shape_444.setTransform(148.6,575.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgMAUIgCAAIAAgCIAAgjIAAgCIACAAIAKAAIABAAIABACIAAADIADgEIAHgBIADAAIACAAIAAACIAAAIIAAACIgCAAIgIAAQgDAAgCACQAAACAAADIAAASIAAACIgCAAg");
	this.shape_445.setTransform(144.5,575.7);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgIATIgFgEIgCgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgGgCQgGgCgEgBQgCgDAAgEQAAgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAGACQAHABADABQAEADgBAFQAAADgCADQgBADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_446.setTransform(138.6,575.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_447.setTransform(134.2,575.7);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgHgCgEgBQgDgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgDADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_448.setTransform(128.2,575.7);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_449.setTransform(123.8,575.7);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIACAAIAAACIAAADQADgFAGAAIADAAIACAAIAAABIAAADIAAACIgCAAIgEAAQgEAAgBADQgDACABAFIAAAVIgBACIgBAAg");
	this.shape_450.setTransform(120.5,575.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_451.setTransform(116.4,575.7);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgNAXQgEgFAAgJIAAgDIAAgBQAAgHAEgGQAFgFAIAAQAGAAAFAGIAAgTIAAgBIACgBIADAAIACABIAAABIAAAzIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgEAHgHAAQgIAAgFgGgAgHgDQgDADAAAFIAAABQAAAQAKAAQAFAAADgEQADgDAAgGIAAgDIAAgCQAAgEgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_452.setTransform(111.6,575);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_453.setTransform(107,575.7);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_454.setTransform(101.4,575.6);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIACAAIAAACIAAADQADgFAGAAIADAAIACAAIAAABIAAADIAAACIgCAAIgEAAQgEAAgBADQgDACABAFIAAAVIgBACIgBAAg");
	this.shape_455.setTransform(96.6,575.7);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_456.setTransform(92.5,575.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AgCAdIgCAAIAAgCIAAgfIgHAAIgBgBIgBgBIAAgDIABgBIABgBIAHAAIAAgDQAAgHADgDQABgEAHAAIAFAAIABAAIABACIAAACIgBABIgBABIgEAAQgEAAgCACIgBAGIAAADIAKAAIACABIAAABIAAADIAAABIgCABIgKAAIAAAfIAAACIgBAAg");
	this.shape_457.setTransform(88.8,574.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgGgCQgHgCgDgBQgCgDAAgEQAAgDABgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAFACQAIABADABQAEADAAAFQgBADgCADQgCADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_458.setTransform(85.2,575.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_459.setTransform(80.7,575.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_460.setTransform(76,575.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIACAAIAAACIAAADQADgFAGAAIADAAIABAAIABABIAAADIgBACIgBAAIgEAAQgEAAgBADQgDACABAFIAAAVIgBACIgBAAg");
	this.shape_461.setTransform(72.7,575.7);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgTIgGAAIgCgBIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgBIACgBIACAAIAAABIABABIAAANIAKAAIABABIABABIAAADIgBABIgBABIgKAAIAAASQAAAFABABQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_462.setTransform(69.3,574.9);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgEgDAAgEQAAgDADgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADAAAFQAAADgBADQgDADgEABQgDACgFAAQgFAAgDgCg");
	this.shape_463.setTransform(118,564.1);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_464.setTransform(113.6,564.1);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgIATIgFgEIgDgEIABgBIABAAIAEAAIAAAAIABAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgDgDgBgEQABgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAGACQAHABADABQADADAAAFQAAADgBADQgCADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_465.setTransform(109.6,564.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgZAAIAAABQAAAFACAEQAEADADAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgCACgFACQgEACgEAAQgHAAgEgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgEgDgEAAQgDAAgEADg");
	this.shape_466.setTransform(105.3,564.1);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIACAAIAAACIAAADQADgFAHAAIACAAIABAAIABABIAAADIgBACIgBAAIgEAAQgEAAgBADQgCACAAAFIAAAVIgBACIgCAAg");
	this.shape_467.setTransform(101.8,564.1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_468.setTransform(97.8,564.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_469.setTransform(91.8,564);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAFgFAHAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgaAAIAAABQAAAFAEAEQACADAEAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgBACgEACQgFACgEAAQgHAAgFgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgDgDgEAAQgEAAgCADg");
	this.shape_470.setTransform(86,564.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgGgCQgHgCgDgBQgCgDAAgEQAAgDABgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAFACQAIABADABQAEADAAAFQgBADgCADQgCADgDABQgEACgFAAQgFAAgDgCg");
	this.shape_471.setTransform(79.8,564.1);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_472.setTransform(75.4,564.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AAPAcIgCgCIgZgmIAAAlIAAACIgCABIgDAAIgCgBIAAgCIAAgxIAAgCIACgBIADAAIABABIABAAIAZAoIAAgmIAAgCIACgBIADAAIACABIAAACIAAAxIAAACIgCABg");
	this.shape_473.setTransform(70.6,563.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AhGBxIAAgBQApgEAOgOQANgNAAgUQAAgiguAAQAEgHAHgJQAagdAPgqIgZAAIgUAAIgSABIgJgBQANgoAEgSQAVgCAbAAIAaABIAYAAIAYAAIg+BrQAhAEAPAEQAGALABAXQAAAtgYAXQgWAXgfAAQgbAAgegIg");
	this.shape_474.setTransform(443,127.4);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AgSAUQgHgFAAgLIAAgEIAAgDQAAgKAHgHQAHgFALAAQAMAAAHAFQAHAHAAAKIAAADIAAAEQAAALgHAFQgHAHgMAAQgLAAgHgHgAgFgLQgCAEAAAEIAAADIAAADQAAAGACACQACADADAAQAEAAACgDQACgCAAgGIAAgDIAAgDQAAgEgCgEQgCgCgEAAQgDAAgCACg");
	this.shape_475.setTransform(525.4,120.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AgPAjQgEgCgDgEQgCgEAAgDQAAgHAFgFQAGgEAKgBIAKgDIAAgBQAAgCgBgBQgCgBgDAAIgCAAIgDACIgCABIgBAAIgMAAIgBAAIgBgBQAAgDADgDQADgDAFgCQAFgDAGAAQAMAAAGAGQAGAFAAAHIAAAfIAAABIgCABIgMAAIgCgBIgBgBIAAgEQgCADgEACQgCACgFAAQgGAAgEgCgAAAAOQgHACAAAEQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAFABQACAAADgCQADgEAAgFIAAgBgAADgVIgDgCIgCgCIgCABIgBABIgBABIgBABIgGAAIgBgBIgBgBIABgGQABgDADgCQACgCAEAAIAEAAIABACIACABIACAAIACAAIABgCIABgBIABAAIAGAAIACABIAAABIgBAGQgBADgDACQgCACgEAAIgEAAg");
	this.shape_476.setTransform(519.2,119.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgFAjQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgBIACgBIABgBIACABIACAAIACgBIAAgCIAAgCIgCgBIgBAAIgCABIgBgBIgCgCIgBgBIABgCIACgFQgJgBgGgGQgFgFgBgIIAAgEIAAgEQABgLAHgGQAHgGAKAAQAIAAAGADQAGADADAEQACAFABADIgBACIgCABIgNAAIgCAAIgBgDIgDgDIgEgBQgGgBAAALIgBADIABAEQAAAFACABQACACACAAIAEgBIADgDIABgCIACAAIANAAIACABIABABQAAABgDAFQgDAFgGADQgGADgIAAIAAAEIAAAAIABAAQAEAAACACQACACAAAEQAAAEgDACQgCADgEAAQgCAAgDgCg");
	this.shape_477.setTransform(513.5,121.9);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AgPAZQgEgDgDgDQgCgEAAgEQAAgHAFgEQAGgCAKgCIAKgCIAAgBQAAgEgBgCQgCgBgDAAIgCAAIgDACIgCACIgBABIgMAAIgBgBIgBgCQAAgCADgDQADgEAFgCQAFgDAGABQAMgBAGAGQAGAFAAAKIAAAcIAAACIgCABIgMAAIgCgBIgBgCIAAgEQgCADgEADQgCACgFAAQgGAAgEgCgAAAADQgHACAAAFQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAIAFABQACAAADgCQADgDAAgGIAAgBg");
	this.shape_478.setTransform(507.3,120.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgUAaIgCgBIgBgCIAAgJIACgDIAVgWIgUAAIgBgBIgBgCIAAgIIABgCIABAAIAnAAIACAAIABACIAAAJIgCADIgUAWIAVAAIACABIABABIAAAJIgBACIgCABg");
	this.shape_479.setTransform(501.8,120.9);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgFAkIgBAAIgBgCIAAgtIABgCIABgBIAKAAIADABIABACIAAAtIgBACIgDAAgAgFgVIgBgBIgBgCIAAgJIABgCIABAAIAKAAIADAAIABACIAAAJIgBACIgDABg");
	this.shape_480.setTransform(497.5,119.8);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AgQAaIgBgBIgBgCIAAgtIABgCIABAAIANAAIACAAIAAACIAAAEIAFgFQAEgCAEABIAFAAIABAAIABACIAAALIgBACIgBABIgKAAQgEAAgDACQAAACAAAEIAAAXIgBACIgBABg");
	this.shape_481.setTransform(494,120.9);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgRAUQgIgHAAgMIAAgBQAAgMAIgHQAGgGALAAQAIgBAGAEQAGAEADAFQADAHAAAGIAAABIgBACIgCABIgdAAIAAABQAAAEABADQACADADAAIADgBIADgDIACgBIABAAIANAAIACAAIABACQgBADgDADQgDAEgFACQgGACgHABQgLgBgGgGgAgFgMQgBADAAAFIAOAAQAAgFgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_482.setTransform(488.5,120.9);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AAZAaIgCgBIAAgBIAAgaQAAgFgCgCQgCgCgEAAQgCAAgCACQgDACAAAFIAAAaIAAABIgCABIgKAAIgCgBIgBgBIAAgaQAAgFgCgCQgCgCgDAAQgDAAgCACQgCACAAAFIAAAaIgBABIgBABIgOAAIgBgBIgBgBIAAgtIABgDIABAAIAMAAIACAAIABADIAAADQACgDAEgCQAEgCAEAAQAKAAAEAIQACgDAFgCQADgDAGAAQAIAAAFAGQAFAFAAALIAAAbIAAABIgCABg");
	this.shape_483.setTransform(480.9,120.8);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgFAkIgCAAIgBgCIAAgtIABgCIACgBIALAAIABABIABACIAAAtIgBACIgBAAgAgFgVIgCgBIgBgCIAAgJIABgCIACAAIALAAIABAAIABACIAAAJIgBACIgBABg");
	this.shape_484.setTransform(474.9,119.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgFAjIgCgBIAAgBIAAhAIAAgDIACAAIALAAIACAAIABADIAABAIgBABIgCABg");
	this.shape_485.setTransform(472,119.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgSAUQgHgFAAgLIAAgEIAAgDQAAgKAHgHQAHgFALAAQAMAAAHAFQAHAHAAAKIAAADIAAAEQAAALgHAFQgHAHgMAAQgLAAgHgHgAgFgLQgCAEAAAEIAAADIAAADQAAAGACACQACADADAAQAEAAACgDQACgCAAgGIAAgDIAAgDQAAgEgCgEQgCgCgEAAQgDAAgCACg");
	this.shape_486.setTransform(467.4,120.9);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AgZAjIgCgBIgBgCIAAg/IABgCIACAAIAaAAQANgBAHAHQAIAGAAAKQAAALgIAFQgHAFgNAAIgKAAIAAAWIAAACIgCABgAgJgCIAJAAQAEAAADgCQACgCAAgFQAAgDgCgCQgCgDgFAAIgJAAg");
	this.shape_487.setTransform(461.2,120);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgBAEIgCAAIAAgCIAAgDIAAgBIACgBIADAAIABABIABABIAAADIgBACIgBAAg");
	this.shape_488.setTransform(565,207.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgKATQgEgCgCgCQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBIAAgBIACgBIAJAAIABABIACABIACABIACABIADgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIgBgCIgDgCIgFgBQgNgDAAgIQAAgDACgDQACgDAEgCQAEgCAFAAQAFAAAEACQAEABACADQADADAAACIgBABIgBAAIgJAAIgBAAIgCgBIgCgCIgCAAIgCABIgBACIAAACIADABIAFACQAHABAEACQADADAAAFQAAAGgFADQgFAEgJAAQgFAAgFgCg");
	this.shape_489.setTransform(561.8,206.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgMATQgDgBgCgDQgCgDAAgDQAAgGAEgDQAFgCAIgBIAIgBIAAgBQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIAAAAIgDACIgCABIAAABIgKAAIgBgBIAAgBIACgFQACgCAEgCQAEgCAFAAQAJAAAFAEQAFAFAAAHIAAAWIgBACIgBAAIgKAAIgBAAIgBgCIAAgDIgFAFQgBABgEAAQgEAAgEgCgAAAADQgGABAAAEQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAIAEACQABAAADgDQACgCAAgEIAAgBg");
	this.shape_490.setTransform(557.1,206.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AAIAVIgBgBIAAgBIAAgUQAAgEgCgCQgCgCgDAAQgBAAgCACQgDACAAAEIAAAUIAAABIgCABIgKAAIgBgBIgBgBIAAgkIABgBIABgBIAKAAIABABIABABIAAADIAGgEQABgCAFAAQAEAAAEACQADADACAEQACAEAAAFIAAAVIgBABIgBABg");
	this.shape_491.setTransform(552.3,206);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgDAdIgCgBIAAgBIAAgjIAAgCIACAAIAIAAIABAAIAAACIAAAjIAAABIgBABgAgDgRIgCAAIAAgBIAAgIIAAgBIACgBIAIAAIABABIAAABIAAAIIAAABIgBAAg");
	this.shape_492.setTransform(548.5,205.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgKATQgEgCgCgCQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBIAAgBIACgBIAJAAIABABIACABIACABIACABIADgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIgBgCIgDgCIgFgBQgNgDAAgIQAAgDACgDQACgDAEgCQAEgCAFAAQAFAAAEACQAEABACADQADADAAACIgBABIgBAAIgJAAIgBAAIgCgBIgCgCIgCAAIgCABIgBACIAAACIADABIAFACQAHABAEACQADADAAAFQAAAGgFADQgFAEgJAAQgFAAgFgCg");
	this.shape_493.setTransform(545.1,206.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgOAQQgGgFAAgKIAAgBQABgJAGgGQAFgFAIAAQAGAAAFADQAFACADAFQACAFAAAFIAAABIgBACIgBAAIgYAAIAAABIACAGQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAIADgBIABgCIACgBIABAAIALAAIABAAIABABQgBACgCADQgCADgEACQgGACgFAAQgIAAgGgFgAgDgJQgCACAAAEIAAAAIALAAIAAAAQAAgEgCgCQgCgCgCAAQgCAAgBACg");
	this.shape_494.setTransform(540.5,206.1);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AgMAUIgCAAIAAgCIAAgjIAAgCIACAAIAKAAIABAAIABACIAAADIADgEIAHgBIADAAIACAAIAAACIAAAIIAAACIgCAAIgIAAQgDAAgCACQAAACAAADIAAASIAAACIgCAAg");
	this.shape_495.setTransform(536.4,206.1);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgZAAIAAABQAAAFACAEQAEADADAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgDACgDACQgFACgEAAQgHAAgEgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgEgDgEAAQgDAAgEADg");
	this.shape_496.setTransform(528.3,206.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgEgDAAgEQAAgDADgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADAAAFQABADgCADQgDADgEABQgDACgFAAQgFAAgDgCg");
	this.shape_497.setTransform(522.1,206.1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_498.setTransform(517.7,206.1);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgUIgGAAIgCAAIAAgBIAAgDIAAgBIACAAIAGAAIAAgOIAAgCIACAAIACAAIAAAAIABACIAAAOIAKAAIABAAIABABIAAADIgBABIgBAAIgKAAIAAAUQAAADABACQABABAAAAQABABAAAAQABAAAAAAQABABABAAIAFAAIABAAIAAACIAAACIAAABIgBABg");
	this.shape_499.setTransform(513.9,205.3);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_500.setTransform(509.9,206);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgLAQQgFgFgBgJIAAgCIAAgBQABgJAFgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFAEAEQADADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgBACgFACQgDACgFAAQgHAAgEgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgCgDgFAAQgDAAgDADg");
	this.shape_501.setTransform(505.3,206.1);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_502.setTransform(499.5,206);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_503.setTransform(493.6,206.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AAAAcIgCgBIAAgBIAAgzIAAgCIACAAIABAAIACAAIAAACIAAAzIAAABIgCABg");
	this.shape_504.setTransform(490.6,205.3);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_505.setTransform(488.7,205.3);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AgCAdIgCgBIAAgBIAAggIgHAAIgBAAIgBgBIAAgDIABgBIABAAIAHAAIAAgFQAAgGADgEQABgDAHAAIAFAAIABABIABABIAAACIgBABIgBABIgEAAQgEAAgCACIgBAGIAAAEIAKAAIACAAIAAABIAAADIAAABIgCAAIgKAAIAAAgIAAABIgBABg");
	this.shape_506.setTransform(486.2,205.2);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_507.setTransform(479.2,206);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_508.setTransform(473.3,206.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIABAAIABACIAAADQADgFAGAAIAEAAIABAAIAAABIAAADIAAACIgBAAIgFAAQgFAAAAADQgCACgBAFIAAAVIAAACIgBAAg");
	this.shape_509.setTransform(470,206.1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AgMAQQgFgFAAgJIAAgCIAAgBQAAgJAFgFQAGgFAGAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFADAEQACADAEAAQADAAACgBIAEgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgLQgDAEAAAFIAAABIAUAAIAAgBQgBgFgCgEQgEgDgEAAQgEAAgCADg");
	this.shape_510.setTransform(466,206.1);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AgJAbQgEgCgCgDIgBgEIAAgCIACAAIADAAIABAAIABABQACAHAHAAQAFAAADgDQADgDAAgGIAAgFQgFAFgGAAQgIABgFgGQgEgGAAgGIAAgCIAAgCQAAgIAEgGQAFgGAIABQAGgBAFAHIAAgDIABgCIABAAIADAAIACAAIAAACIAAAkQAAASgSAAQgFAAgEgCgAgHgSQgCADgBAGIAAACIAAACQABAFACACQADAEAEAAQAFAAADgEQADgCAAgEIAAgDIAAgCQAAgGgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_511.setTransform(461.3,206.9);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgHgCgEgBQgDgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgDADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_512.setTransform(546.2,194.5);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_513.setTransform(541.8,194.5);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIACAAIAAACIAAADQADgFAHAAIACAAIABAAIABABIAAADIgBACIgBAAIgEAAQgEAAgBADQgCACAAAFIAAAVIgBACIgCAAg");
	this.shape_514.setTransform(538.3,194.5);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAADgBIADgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgDACgEACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAUAAIAAgBQAAgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_515.setTransform(534.4,194.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_516.setTransform(528.6,194.4);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AgFAdIgBgBIAAgBIAAgkIAAgBIABgBIAEAAIABABIAAABIAAAkIAAABIgBABgAgFgRQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIAGgHIAAgCIABAAIAFAAQAAAAABAAQAAAAAAABQAAAAAAAAQABAAAAABIAAABIgIAHIgBABIgCAAg");
	this.shape_517.setTransform(524.5,193.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AAAAcIgCgBIAAgBIAAgzIAAgCIACAAIABAAIACAAIAAACIAAAzIAAABIgCABg");
	this.shape_518.setTransform(522.1,193.7);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_519.setTransform(518.8,194.5);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_520.setTransform(514.3,195.2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAFgFAHAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgaAAIAAABQAAAFAEAEQACADAEAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgBACgEACQgFACgEAAQgHAAgFgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgDgDgEAAQgEAAgCADg");
	this.shape_521.setTransform(507.7,194.5);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgCIAAgDQAAgGAEgFQAFgGAIAAQAGAAAFAGIAAgSIAAgCIACAAIADAAIACAAIAAACIAAAzIAAABIgCABIgDAAIgBgBIgBgBIAAgEQgEAGgHAAQgIAAgFgFgAgHgDQgDADAAAEIAAADQAAAPAKAAQAFAAADgDQADgEAAgFIAAgDIAAgEQAAgDgDgDQgDgDgFAAQgEAAgDADg");
	this.shape_522.setTransform(502.9,193.8);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgHgCgEgBQgDgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgDADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_523.setTransform(496.7,194.5);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_524.setTransform(492.3,194.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_525.setTransform(489.3,193.7);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAGgFAGAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgaAAIAAABQABAFADAEQACADAEAAQADAAACgBIAEgDIABgBIACgBIADAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgLQgDAEgBAFIAAABIAVAAIAAgBQAAgFgDgEQgEgDgEAAQgEAAgCADg");
	this.shape_526.setTransform(486.2,194.5);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgCIAAgDQAAgGAEgFQAFgGAIAAQAGAAAFAGIAAgSIAAgCIACAAIADAAIACAAIAAACIAAAzIAAABIgCABIgDAAIgBgBIgBgBIAAgEQgEAGgHAAQgIAAgFgFgAgHgDQgDADAAAEIAAADQAAAPAKAAQAFAAADgDQADgEAAgFIAAgDIAAgEQAAgDgDgDQgDgDgFAAQgEAAgDADg");
	this.shape_527.setTransform(481.4,193.8);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_528.setTransform(476.8,194.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_529.setTransform(472.6,194.5);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgIATIgFgEIgDgEIABgBIABAAIAEAAIAAAAIABAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgDgDgBgEQABgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAGACQAHABADABQADADAAAFQAAADgBADQgCADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_530.setTransform(466.4,194.5);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AATAcIgBgBIgBgBIgEgMIgZAAIgEAMQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABAAAAIgEAAIgBgBIgBgBIABgBIATgyQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAIADAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAIATAyIABABIgBABIgBABgAgKAIIAUAAIgKgag");
	this.shape_531.setTransform(461.7,193.8);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AgBAEIgCAAIAAgCIAAgDIAAgBIACgBIAEAAIAAABIABABIAAADIgBACIAAAAg");
	this.shape_532.setTransform(496.4,172.9);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AgIATIgFgEIgDgEIABgBIABAAIAEAAIAAAAIABAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgDgDgBgEQABgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAGACQAHABADABQADADAAAFQAAADgBADQgCADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_533.setTransform(493.4,171.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_534.setTransform(489,171.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIACAAIAAACIAAADQADgFAGAAIAEAAIABAAIAAABIAAADIAAACIgBAAIgFAAQgFAAAAADQgCACAAAFIAAAVIgBACIgBAAg");
	this.shape_535.setTransform(485.5,171.3);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAFgFAHAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgaAAIAAABQAAAFAEAEQACADAEAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgCACgDACQgFACgEAAQgHAAgFgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgDgDgEAAQgEAAgCADg");
	this.shape_536.setTransform(481.6,171.3);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_537.setTransform(475.8,171.2);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AgFAdIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAkIAAABIgBABgAgFgRQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIABgBIAGgHIAAgCIABAAIAFAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAABABIAAABIgIAHIgBABIgBAAg");
	this.shape_538.setTransform(471.7,170.4);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgzIAAgCIACAAIABAAIACAAIAAACIAAAzIAAACIgCAAg");
	this.shape_539.setTransform(469.3,170.5);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_540.setTransform(466,171.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_541.setTransform(461.5,172);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIABAAIABACIAAADQADgFAHAAIACAAIABAAIABABIAAADIgBACIgBAAIgEAAQgFAAAAADQgCACAAAFIAAAVIgBACIgCAAg");
	this.shape_542.setTransform(535.5,159.7);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_543.setTransform(531.4,159.7);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIABAAIABACIAAADQADgFAHAAIADAAIABAAIAAABIAAADIAAACIgBAAIgFAAQgEAAgBADQgDACAAAFIAAAVIAAACIgCAAg");
	this.shape_544.setTransform(528.1,159.7);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AgMAQQgFgFAAgJIAAgCIAAgBQAAgJAFgFQAFgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFACAEQADADAEAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgDACgDACQgEACgFAAQgHAAgFgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_545.setTransform(524.2,159.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AgJAbQgEgCgCgDIgBgFIAAgBIACgBIADAAIABABIABABQACAGAHAAQAFAAADgCQADgCAAgHIAAgGQgFAHgGAAQgIgBgFgFQgEgGAAgGIAAgCIAAgCQAAgIAEgGQAFgFAIgBQAGABAFAGIAAgEIABgBIABgBIADAAIACABIAAABIAAAlQAAASgSABQgFAAgEgDgAgHgTQgCAEgBAGIAAACIAAACQABAFACADQADADAEAAQAFAAADgDQADgDAAgEIAAgDIAAgDQAAgFgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_546.setTransform(519.4,160.5);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_547.setTransform(512.9,159.7);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIABAAIABACIAAADQADgFAGAAIAEAAIABAAIAAABIAAADIAAACIgBAAIgFAAQgFAAAAADQgCACgBAFIAAAVIAAACIgBAAg");
	this.shape_548.setTransform(509.6,159.7);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_549.setTransform(505.5,159.7);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_550.setTransform(501.1,160.4);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgGgCQgHgCgDgBQgCgDAAgEQAAgDABgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAGACQAHABADABQAEADAAAFQgBADgCADQgCADgDABQgEACgFAAQgFAAgDgCg");
	this.shape_551.setTransform(494.7,159.7);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_552.setTransform(490.3,159.7);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgzIAAgCIACAAIABAAIACAAIAAACIAAAzIAAACIgCAAg");
	this.shape_553.setTransform(487.3,158.9);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgVIABgBIABgBIAEAAIABABIABABIAAAUQAAAMAJAAQAEAAADgDQADgDAAgGIAAgUIABgBIABgBIAEAAIABABIABABIAAAkIgBABIgBABIgEAAIgBgBIAAgBIAAgEIgGAFQgDACgDAAQgHAAgEgFg");
	this.shape_554.setTransform(483.9,159.7);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_555.setTransform(479.3,159.7);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgMAYQgEgFgBgJIAAgDIAAgCQABgHAEgFQAGgFAGAAQAIAAAFAFQAFAGAAAIIAAABIAAABIgCABIgaAAIAAABQABAFADAEQACADAEAAQADAAACgBIAEgDIABgBIACgBIADAAIACABIAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgDQgDADgBAEIAAABIAVAAIAAgBQAAgEgDgDQgEgDgEAAQgEAAgCADgAgBgRQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIAAgBIAEgHIACgBIABAAIAGAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIgKAIIAAAAIgCABg");
	this.shape_556.setTransform(474.9,158.9);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgzIAAgCIACAAIABAAIACAAIAAACIAAAzIAAACIgCAAg");
	this.shape_557.setTransform(471.7,158.9);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_558.setTransform(468.4,159.7);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_559.setTransform(462.6,159.6);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AgIATIgFgEIgCgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgGgCQgHgCgDgBQgCgDAAgEQAAgDABgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAFACQAIABADABQAEADAAAFQgBADgCADQgCADgDABQgFACgEAAQgFAAgDgCg");
	this.shape_560.setTransform(562.2,148.1);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_561.setTransform(557.8,148.1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgCIAAgCQAAgHAEgGQAFgFAIAAQAGAAAFAGIAAgTIAAgBIACgBIADAAIACABIAAABIAAAzIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgEAHgHgBQgIABgFgGgAgHgDQgDADAAAFIAAACQAAAPAKAAQAFAAADgEQADgDAAgGIAAgCIAAgDQAAgEgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_562.setTransform(553.3,147.4);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_563.setTransform(550.1,147.3);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgTIgGAAIgCgBIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgBIACgBIACAAIAAABIABABIAAANIAKAAIABABIABABIAAADIgBABIgBABIgKAAIAAASQAAAFABACQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_564.setTransform(547.5,147.3);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AgKAWIAAADIgBACIgBAAIgDAAIgCAAIAAgCIAAgzIAAgBIACgBIADAAIACABIAAABIAAATQAFgGAGAAQAIAAAFAFQAEAGAAAHIAAACIAAACQAAAIgEAGQgFAGgIgBQgHABgEgHgAgHgDQgDADAAAEIAAADIAAACQAAAGADADQADAEAEAAQAFAAADgEQADgDAAgGIAAgCQAAgOgLAAQgEAAgDAEg");
	this.shape_565.setTransform(543.7,147.4);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_566.setTransform(538.9,148.1);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_567.setTransform(532.4,148.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AgJAaQgDgCgCgCQgCgDAAgDQAAgGAEgDQAEgDAIgCIAKgBIAAgBQAAgIgKABQgBgBgDACIgDADIgBABIgBAAIgDAAIgBAAIAAgBIABgEQACgDAEgCQADgCADAAQAJABAEAEQAEAEAAAFIAAAZIAAACIgCAAIgDAAIgBAAIgBgCIAAgEQgCADgDACQgDACgEAAQgEAAgDgCgAABAIQgEABgDABQgDADAAACQAAADADACQACACAEAAQADAAAEgDQADgEAAgGIAAgCgAACgSIgCgCIAAgBIgBAAIgBAAIgBABIgCACIgCAAIgBgBIAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgDADAAIACABIABABIABABIACAAIABAAIABgBIAAgBIABAAIADAAIABAAIAAABQAAACgCACQgCADgDAAIgCAAg");
	this.shape_568.setTransform(527.8,147.4);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgHgCgEgBQgDgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgDADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_569.setTransform(523.7,148.1);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgZAAIAAABQAAAFACAEQAEADADAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgDACgEACQgEACgEAAQgHAAgEgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgEgDgEAAQgDAAgEADg");
	this.shape_570.setTransform(517.5,148.1);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_571.setTransform(511,148.1);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgTIgGAAIgCgBIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgBIACgBIACAAIAAABIABABIAAANIAKAAIABABIABABIAAADIgBABIgBABIgKAAIAAASQAAAFABACQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_572.setTransform(507.1,147.3);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_573.setTransform(503.2,148);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AgLAQQgFgFgBgJIAAgCIAAgBQABgJAFgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFAEAEQADADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBACgFACQgDACgFAAQgHAAgEgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgCgDgFAAQgDAAgDADg");
	this.shape_574.setTransform(498.6,148.1);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_575.setTransform(492.8,148);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_576.setTransform(486.9,148.1);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAADgBIADgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAUAAIAAgBQAAgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_577.setTransform(482.6,148.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgVIABgBIABgBIAEAAIABABIABABIAAAUQAAAMAJAAQAEAAADgDQADgDAAgGIAAgUIABgBIABgBIAEAAIABABIABABIAAAkIgBABIgBABIgEAAIgBgBIAAgBIAAgEIgGAFQgDACgDAAQgHAAgEgFg");
	this.shape_578.setTransform(477.9,148.1);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AANAcIgBAAIgBgBIAAgTQgFAGgGAAQgIAAgFgFQgEgGAAgGIAAgDIAAgCQAAgJAEgFQAFgFAIAAQAHAAAEAGIAAgEIABgBIABAAIADAAIACAAIAAABIAAA0IAAABIgCAAgAgHgRQgCADgBAGIAAACQAAAOAKAAQAFAAADgEQADgDAAgDIAAgDIAAgDQAAgGgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_579.setTransform(473.1,148.8);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_580.setTransform(468.5,148.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIACAAIAAACIAAADQADgFAGAAIADAAIACAAIAAABIAAADIAAACIgCAAIgEAAQgEAAgBADQgDACABAFIAAAVIgBACIgBAAg");
	this.shape_581.setTransform(465.2,148.1);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_582.setTransform(461.2,148.1);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIACAAIAAACIAAADQADgFAHAAIACAAIABAAIABABIAAADIgBACIgBAAIgEAAQgEAAgBADQgCACAAAFIAAAVIgBACIgCAAg");
	this.shape_583.setTransform(523.5,136.5);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_584.setTransform(519.4,136.5);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_585.setTransform(514.8,137.2);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_586.setTransform(508.1,136.5);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgIgCgCgBQgEgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgCADgFABQgDACgFAAQgEAAgEgCg");
	this.shape_587.setTransform(504,136.5);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgIgCgCgBQgEgDAAgEQAAgDACgDQACgDADgBQAEgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgCADgEABQgEACgFAAQgEAAgEgCg");
	this.shape_588.setTransform(500,136.5);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_589.setTransform(495.6,136.5);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_590.setTransform(491.2,137.2);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_591.setTransform(484.5,136.5);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgTIgGAAIgCgBIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgBIACgBIACAAIAAABIABABIAAANIAKAAIABABIABABIAAADIgBABIgBABIgKAAIAAASQAAAFABABQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_592.setTransform(480.8,135.7);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("AgCAdIgCAAIAAgCIAAggIgHAAIgBAAIgBgBIAAgDIABgBIABgBIAHAAIAAgDQAAgHADgDQABgEAHAAIAFAAIABAAIABACIAAACIgBABIgBABIgEAAQgEAAgCACIgBAGIAAADIAKAAIACABIAAABIAAADIAAABIgCAAIgKAAIAAAgIAAACIgBAAg");
	this.shape_593.setTransform(477.8,135.6);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_594.setTransform(473.9,136.5);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("AAPAbIgCgBIgZgmIAAAlIAAACIgCAAIgDAAIgCAAIAAgCIAAgyIAAgBIACgBIADAAIABABIABAAIAZAoIAAgnIAAgBIACgBIADAAIACABIAAABIAAAyIAAACIgCAAg");
	this.shape_595.setTransform(469.1,135.8);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#000000").s().p("AATAbIgBAAIgBgBIgEgLIgZAAIgEALQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgEAAIgBAAIgBgBIABgBIATgyQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBABAAIADAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIATAyIABABIgBABIgBAAgAgKAIIAUAAIgKgbg");
	this.shape_596.setTransform(461.7,135.8);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AgFBtQgsgJgcgDIAXgZIAZgbQAJgMAFgIQALgSAAgSQAAgTgMgMQgLgLgUAAQgMAAgOAEIAvg/IARgCQAcAAAWAUQAVAUAAAbQAAAyg+AxQAYAIA2AAIgGAPQgJAYgLAIQgMAIgNAAQgJAAgXgGg");
	this.shape_597.setTransform(320.4,197.4);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#000000").s().p("AgSAUQgHgFAAgLIAAgEIAAgDQAAgKAHgHQAHgFALAAQAMAAAHAFQAHAHAAAKIAAADIAAAEQAAALgHAFQgHAGgMABQgLgBgHgGgAgFgLQgCAEAAAEIAAADIAAADQAAAGACACQACADADAAQAEAAACgDQACgCAAgGIAAgDIAAgDQAAgEgCgEQgCgCgEAAQgDAAgCACg");
	this.shape_598.setTransform(384.5,192.3);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgPAjQgEgCgDgEQgCgDAAgFQAAgGAFgFQAGgEAKgBIAKgDIAAgBQAAgCgBgBQgCgCgDAAIgCABIgDACIgCABIgBAAIgMAAIgBAAIgBgBQAAgCADgEQADgDAFgDQAFgCAGAAQAMAAAGAGQAGAFAAAHIAAAfIAAABIgCABIgMAAIgCgBIgBgBIAAgEQgCADgEACQgCACgFAAQgGAAgEgCgAAAAOQgHABAAAFQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAFABQACAAADgCQADgDAAgGIAAgCgAADgWIgDgBIgCgCIgCABIgBABIgBABIgBAAIgGAAIgBAAIgBgBIABgGQABgDADgCQACgCAEAAIAEABIABABIACABIACAAIACAAIABgCIABAAIABAAIAGAAIACAAIAAABIgBAGQgBADgDACQgCACgEAAIgEgBg");
	this.shape_599.setTransform(378.3,191.3);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#000000").s().p("AgFAjQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgBIACgBIABgBIACABIACAAIACgBIAAgCIAAgCIgCgBIgBAAIgCABIgBgBIgCgBIgBgCIABgCIACgFQgJgBgGgGQgFgFgBgIIAAgEIAAgEQABgLAHgGQAHgGAKAAQAIAAAGADQAGADADAEQACAEABAEIgBACIgCABIgNAAIgCgBIgBgCIgDgDIgEgBQgGAAAAAKIgBADIABAEQAAAFACAAQACADACAAIAEgBIADgDIABgBIACgBIANAAIACABIABABQAAABgDAFQgDAFgGADQgGADgIAAIAAAEIAAAAIABAAQAEAAACACQACACAAAEQAAAEgDACQgCADgEAAQgCAAgDgCg");
	this.shape_600.setTransform(372.6,193.4);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AgPAYQgEgBgDgEQgCgEAAgEQAAgHAFgEQAGgCAKgCIAKgCIAAgBQAAgEgBgCQgCgBgDAAIgCABIgDABIgCACIgBABIgMAAIgBgBIgBgCQAAgCADgDQADgDAFgDQAFgCAGAAQAMgBAGAGQAGAFAAAKIAAAcIAAACIgCABIgMAAIgCgBIgBgCIAAgDQgCACgEACQgCADgFAAQgGAAgEgDgAAAADQgHACAAAFQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAIAFABQACAAADgCQADgDAAgGIAAgBg");
	this.shape_601.setTransform(366.4,192.3);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#000000").s().p("AgFAjIgBgBIgBgBIAAhBIABgCIABAAIALAAIACAAIABACIAABBIgBABIgCABg");
	this.shape_602.setTransform(362.2,191.4);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("AgFAkIgBAAIgBgCIAAgtIABgCIABgBIAKAAIADABIABACIAAAtIgBACIgDAAgAgFgVIgBgBIgBgCIAAgJIABgCIABAAIAKAAIADAAIABACIAAAJIgBACIgDABg");
	this.shape_603.setTransform(359.3,191.2);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#000000").s().p("AAJAjQgTAAAAgUIAAgQIgIAAIgCgBIAAgCIAAgIIAAgDIACAAIAIAAIAAgRIABgCIACAAIAKAAIACAAIAAACIAAARIANAAIACAAIAAADIAAAIIAAACIgCABIgNAAIAAAPQAAADACACQAAAAAAABQABAAAAAAQABAAAAAAQABAAABAAIAIAAIACACIAAACIAAAJIAAABIgCABg");
	this.shape_604.setTransform(355.4,191.4);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AgMAYQgGgCgDgDQgDgDAAgDIACgCIABAAIAMAAIABAAIACABIAEACIACABIAEgBQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIgBgCIgEgDIgGgCQgRgDAAgLQAAgEADgDQACgEAFgCQAGgCAGAAQAGAAAFACQAFACADADQADADAAADIAAABIgCABIgLAAIgCAAIgCgCIgDgBIgCgBIgDABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAIABADIAEACIAGACQAKACAEACQAEAFAAAFQABAHgIAFQgGAFgLAAQgHAAgFgDg");
	this.shape_605.setTransform(350.3,192.3);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#000000").s().p("AgSAUQgGgGgBgNIAAgBQABgMAGgHQAHgHALABQAIgBAGAEQAGAEADAFQADAHAAAGIAAACIgBABIgCABIgeAAIAAABQABAEACADQACADACAAIADgBIADgDIABAAIACgBIAOAAIABABIAAABQAAADgCADQgDADgGADQgFADgIAAQgLAAgHgHgAgEgMQgCADgBAFIAOAAQAAgFgCgDQgBgCgEAAQgCAAgCACg");
	this.shape_606.setTransform(344.6,192.3);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("AgaAjIgCgBIgBgCIAAg/IABgBIACgBIAaAAQANgBAIAIQAIAGAAAOIABAGIgBAHQgBAcgcAAgAgKAUIAKAAQAEAAADgDQADgEAAgGIABgHIgBgGQAAgGgDgDQgDgDgFgBIgJAAg");
	this.shape_607.setTransform(338.1,191.4);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#000000").s().p("AgBAEIgBAAIgBgCIAAgDIABgBIABgBIADAAIACABIAAABIAAADIAAACIgCAAg");
	this.shape_608.setTransform(439.3,254.8);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIADAAIACAAIAAAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgGgCQgGgCgEgBQgDgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAFACQAIABADABQAEADAAAFQAAADgDADQgCADgDABQgFACgEAAQgFAAgDgCg");
	this.shape_609.setTransform(436.3,253.2);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAFgFAHAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgaAAIAAABQAAAFAEAEQACADAEAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgCACgDACQgFACgEAAQgHAAgFgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgDgDgEAAQgEAAgCADg");
	this.shape_610.setTransform(432.1,253.2);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgUIgGAAIgCAAIAAgBIAAgDIAAgBIACAAIAGAAIAAgOIAAgBIACgBIACAAIAAABIABABIAAAOIAKAAIABAAIABABIAAADIgBABIgBAAIgKAAIAAAUQAAAEABABQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAACIAAACIAAABIgBABg");
	this.shape_611.setTransform(428.2,252.5);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIACAAIAAACIAAADQADgFAGAAIADAAIABAAIABABIAAADIgBACIgBAAIgEAAQgEAAgBADQgDACABAFIAAAVIgBACIgBAAg");
	this.shape_612.setTransform(425.5,253.2);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_613.setTransform(421.4,253.2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_614.setTransform(417,253.9);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#000000").s().p("AgIATIgFgEIgDgEIABgBIABAAIAEAAIAAAAIABAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgDgDgBgEQABgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAGACQAHABADABQADADAAAFQAAADgBADQgCADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_615.setTransform(410.6,253.2);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgZAAIAAABQAAAFACAEQAEADADAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgCACgFACQgEACgEAAQgHAAgEgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgEgDgEAAQgDAAgEADg");
	this.shape_616.setTransform(406.4,253.2);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgUIgGAAIgCAAIAAgBIAAgDIAAgBIACAAIAGAAIAAgOIAAgBIACgBIACAAIAAABIABABIAAAOIAKAAIABAAIABABIAAADIgBABIgBAAIgKAAIAAAUQAAAEABABQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAACIAAACIAAABIgBABg");
	this.shape_617.setTransform(402.5,252.5);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_618.setTransform(398.6,253.2);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgZAAIAAABQgBAFADAEQAEADADAAQADAAADgBIADgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgCACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEABAFIAAABIATAAIAAgBQAAgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_619.setTransform(394,253.2);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIACAAIAAACIAAADQADgFAGAAIADAAIACAAIAAABIAAADIAAACIgCAAIgEAAQgEAAgBADQgDACABAFIAAAVIgBACIgBAAg");
	this.shape_620.setTransform(390.5,253.2);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAFgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFAEAEQADADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgBACgFACQgDACgFAAQgHAAgFgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgCgDgFAAQgDAAgDADg");
	this.shape_621.setTransform(386.5,253.2);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#000000").s().p("AgCAdIgCgBIAAgBIAAggIgHAAIgBAAIgBgBIAAgDIABgBIABAAIAHAAIAAgFQAAgGADgEQABgDAHAAIAFAAIABABIABABIAAACIgBABIgBABIgEAAQgEAAgCACIgBAGIAAAEIAKAAIACAAIAAABIAAADIAAABIgCAAIgKAAIAAAgIAAABIgBABg");
	this.shape_622.setTransform(382.8,252.4);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_623.setTransform(380.3,252.4);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgDIAAgCQAAgGAEgFQAFgGAIAAQAGAAAFAGIAAgSIAAgCIACgBIADAAIACABIAAACIAAAyIAAACIgCABIgDAAIgBgBIgBgCIAAgDQgEAGgHABQgIgBgFgFgAgHgDQgDADAAAEIAAACQAAAQAKAAQAFAAADgDQADgFAAgEIAAgEIAAgDQAAgDgDgDQgDgEgFABQgEgBgDAEg");
	this.shape_624.setTransform(376.8,252.5);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIADAAIACAAIAAAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgGgCQgGgCgEgBQgDgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAFACQAIABADABQAEADAAAFQAAADgDADQgCADgDABQgFACgEAAQgFAAgDgCg");
	this.shape_625.setTransform(370.6,253.2);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_626.setTransform(366.2,253.2);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgDIAAgCQAAgGAEgFQAFgGAIAAQAGAAAFAGIAAgSIAAgCIACgBIADAAIACABIAAACIAAAyIAAACIgCABIgDAAIgBgBIgBgCIAAgDQgEAGgHABQgIgBgFgFgAgHgDQgDADAAAEIAAACQAAAQAKAAQAFAAADgDQADgFAAgEIAAgEIAAgDQAAgDgDgDQgDgEgFABQgEgBgDAEg");
	this.shape_627.setTransform(361.7,252.5);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_628.setTransform(357.1,253.2);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIABAAIABACIAAADQADgFAGAAIAEAAIABAAIAAABIAAADIAAACIgBAAIgFAAQgFAAAAADQgCACgBAFIAAAVIAAACIgBAAg");
	this.shape_629.setTransform(353.8,253.2);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_630.setTransform(349.7,253.2);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_631.setTransform(345.3,253.9);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgZAAIAAABQAAAFACAEQAEADADAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgCACgFACQgEACgEAAQgHAAgEgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgEgDgEAAQgDAAgEADg");
	this.shape_632.setTransform(340.7,253.2);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIADAAIACAAIAAAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgGgCQgGgCgEgBQgDgDAAgEQABgDABgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAFACQAIABADABQAEADAAAFQAAADgDADQgCADgDABQgFACgEAAQgFAAgDgCg");
	this.shape_633.setTransform(336.4,253.2);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_634.setTransform(428.8,241.6);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#000000").s().p("AgJAaQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgEAIAAIAKgCIAAgBQAAgHgKgBQgBABgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgFQACgCAEgBQADgCADAAQAJgBAEAFQAEAEAAAFIAAAZIAAABIgCABIgDAAIgBgBIgBgBIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABAHQgEABgDACQgDADAAACQAAAEADABQACACAEAAQADAAAEgEQADgDAAgHIAAgCgAACgTIgCgBIAAAAIgBgBIgBABIgBABIgCAAIgCAAIgBAAIAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgCADAAIACAAIABABIABABIACABIABgBIABgBIAAgBIABAAIADAAIABABIAAAAQAAADgCADQgCACgDAAIgCgBg");
	this.shape_635.setTransform(424.2,241);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#000000").s().p("AgIATIgFgEIgDgEIABgBIABAAIADAAIABAAIABAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgDgDAAgEQAAgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAGACQAHABADABQAEADgBAFQAAADgCADQgBADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_636.setTransform(420.2,241.6);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIABAAIABACIAAADQADgFAHAAIACAAIABAAIABABIAAADIgBACIgBAAIgEAAQgFAAAAADQgCACAAAFIAAAVIgBACIgCAAg");
	this.shape_637.setTransform(414.9,241.6);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_638.setTransform(410.8,241.6);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#000000").s().p("AAAAcIgCgBIAAgBIAAgzIAAgBIACgBIABAAIACABIAAABIAAAzIAAABIgCABg");
	this.shape_639.setTransform(407.6,240.9);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_640.setTransform(404.3,241.6);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_641.setTransform(400,241.6);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_642.setTransform(393.5,241.6);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_643.setTransform(388.9,241.6);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_644.setTransform(382.6,241.6);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#000000").s().p("AgJAaQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgEAIAAIAKgCIAAgBQAAgHgKgBQgBABgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgFQACgCAEgBQADgCADAAQAJgBAEAFQAEAEAAAFIAAAZIAAABIgCABIgDAAIgBgBIgBgBIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABAHQgEABgDACQgDADAAACQAAAEADABQACACAEAAQADAAAEgEQADgDAAgHIAAgCgAACgTIgCgBIAAAAIgBgBIgBABIgBABIgCAAIgCAAIgBAAIAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgCADAAIACAAIABABIABABIACABIABgBIABgBIAAgBIABAAIADAAIABABIAAAAQAAADgCADQgCACgDAAIgCgBg");
	this.shape_645.setTransform(378,241);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#000000").s().p("AgDAcQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAAAIABgBIABgBIABABIACABIAAAAIACgBIABgDIgBgCIgCAAIAAAAIgCAAIgBAAIgBgCIgBAAIABgBIACgFQgHgBgEgEQgDgFAAgGIgBgDIABgDQAAgJAFgFQAEgEAHAAQAGAAAEACQAEACACACIACAHIgBABIgBAAIgEAAIgBAAIgBgBQgBgEgDgCQgCgBgEAAQgDAAgDADQgDADAAAHIAAACIAAADQAAAEADADQADAEADAAQAEAAACgCQADgCABgDIABAAIABAAIAEAAIABAAIABAAIgCAGQgCADgEABQgEADgGAAIAAAEIABgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQABABAAADQAAAEgCACQgBABgEAAIgDgBg");
	this.shape_646.setTransform(373.7,242.5);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_647.setTransform(369.2,241.6);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#000000").s().p("AgLAQQgFgFgBgJIAAgCIAAgBQABgJAFgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFAEAEQADADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgBACgFACQgDACgFAAQgHAAgEgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgCgDgFAAQgDAAgDADg");
	this.shape_648.setTransform(364.9,241.6);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIABAAIABACIAAADQADgFAGAAIAEAAIABAAIAAABIAAADIAAACIgBAAIgFAAQgFAAAAADQgCACgBAFIAAAVIAAACIgBAAg");
	this.shape_649.setTransform(361.4,241.6);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_650.setTransform(355.4,241.6);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_651.setTransform(347.8,241.6);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_652.setTransform(341.9,241.6);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#000000").s().p("AgPAWQgFgFgBgLIAAgGIAAgFQABgKAFgHQAGgFAJgBQAGAAAFADQAFADADAEQACAEABAEIgBACIgBAAIgEAAIgBAAIgBgCQgCgGgDgDQgEgCgFAAQgNAAAAAQIAAAFIAAAGQAAAPANAAQAFABAEgDQADgDACgFIABgBIABgBIAEAAIABABIABABQgBAEgCAEQgDAEgFADQgFACgGABQgJAAgGgHg");
	this.shape_653.setTransform(337.1,240.9);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#000000").s().p("AgBAEIgBAAIgBgCIAAgDIABgBIABgBIAEAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_654.setTransform(384.2,220);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_655.setTransform(380.8,218.4);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgTIgGAAIgCgBIAAgBIAAgDIAAgBIACAAIAGAAIAAgOIAAgCIACAAIACAAIAAAAIABACIAAAOIAKAAIABAAIABABIAAADIgBABIgBABIgKAAIAAATQAAADABADQABAAAAAAQABABAAAAQABAAAAAAQABABABAAIAFAAIABAAIAAACIAAACIAAABIgBABg");
	this.shape_656.setTransform(377,217.7);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_657.setTransform(373,218.4);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#000000").s().p("AgLAQQgFgFgBgJIAAgCIAAgBQABgJAFgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAADgBIADgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAVAAIAAgBQgBgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_658.setTransform(368.4,218.4);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_659.setTransform(362.6,218.4);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_660.setTransform(358.1,217.6);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_661.setTransform(355,218.4);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFACAEQAEADADAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgDACgEACQgEACgEAAQgHAAgEgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgEgDgEAAQgDAAgEADg");
	this.shape_662.setTransform(350.6,218.4);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgVIABgBIABgBIAEAAIABABIABABIAAAUQAAAMAJAAQAEAAADgDQADgDAAgGIAAgUIABgBIABgBIAEAAIABABIABABIAAAkIgBABIgBABIgEAAIgBgBIAAgBIAAgEIgGAFQgDACgDAAQgHAAgEgFg");
	this.shape_663.setTransform(345.9,218.5);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#000000").s().p("AANAcIgBAAIgBgBIAAgTQgFAGgGAAQgIAAgFgFQgEgGAAgGIAAgDIAAgCQAAgJAEgFQAFgFAIAAQAHAAAEAGIAAgEIABgBIABAAIADAAIACAAIAAABIAAA0IAAABIgCAAgAgHgRQgCADgBAGIAAACQAAAOAKAAQAFAAADgEQADgDAAgDIAAgDIAAgDQAAgGgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_664.setTransform(341,219.1);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_665.setTransform(336.4,218.4);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_666.setTransform(424.5,206.8);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_667.setTransform(418.1,206.8);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#000000").s().p("AgNAXQgEgFAAgJIAAgCIAAgCQAAgHAEgGQAFgFAIAAQAGAAAFAGIAAgTIAAgBIACAAIADAAIACAAIAAABIAAA0IAAABIgCAAIgDAAIgBAAIgBgBIAAgEQgEAGgHAAQgIABgFgGgAgHgDQgDADAAAFIAAACQAAAPAKAAQAFAAADgEQADgEAAgFIAAgCIAAgEQAAgDgDgDQgDgDgFgBQgEABgDADg");
	this.shape_668.setTransform(413.4,206.1);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_669.setTransform(410.2,206);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgTIgGAAIgCgBIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgCIACAAIACAAIAAAAIABACIAAANIAKAAIABABIABABIAAADIgBABIgBABIgKAAIAAASQAAAFABACQABAAAAAAQABABAAAAQABAAAAAAQABABABAAIAFAAIABAAIAAABIAAADIAAACIgBAAg");
	this.shape_670.setTransform(407.6,206.1);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#000000").s().p("AgMAQQgFgFAAgJIAAgCIAAgBQAAgJAFgFQAGgFAGAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFADAEQACADAEAAQADAAACgBIAEgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgLQgDAEAAAFIAAABIAUAAIAAgBQgBgFgCgEQgEgDgEAAQgEAAgCADg");
	this.shape_671.setTransform(403.9,206.8);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_672.setTransform(398.1,206.8);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#000000").s().p("AgKAWIAAAEIgBABIgBAAIgDAAIgCAAIAAgBIAAg0IAAgBIACAAIADAAIACAAIAAABIAAATQAFgGAGAAQAIAAAFAFQAEAGAAAHIAAACIAAACQAAAJgEAFQgFAGgIgBQgHAAgEgGgAgHgDQgDADAAADIAAAEIAAACQAAAFADAEQADAEAEAAQAFAAADgEQADgDAAgGIAAgCQAAgNgLgBQgEABgDADg");
	this.shape_673.setTransform(392.3,206.1);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgVIABgBIABgBIAEAAIABABIABABIAAAUQAAAMAJAAQAEAAADgDQADgDAAgGIAAgUIABgBIABgBIAEAAIABABIABABIAAAkIgBABIgBABIgEAAIgBgBIAAgBIAAgEIgGAFQgDACgDAAQgHAAgEgFg");
	this.shape_674.setTransform(387.4,206.9);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#000000").s().p("AgIATIgFgEIgCgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgGgCQgGgCgEgBQgCgDAAgEQAAgDACgDQABgDAEgBQADgCAEAAQAEAAADACIAGADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAGACQAHABADABQADADAAAFQAAADgCADQgBADgEABQgFACgEAAQgEAAgEgCg");
	this.shape_675.setTransform(383,206.8);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#000000").s().p("AgMAYQgEgFgBgJIAAgDIAAgCQABgHAEgFQAGgFAGAAQAIAAAFAFQAFAGAAAIIAAABIAAABIgCABIgaAAIAAABQABAFADAEQACADAEAAQADAAACgBIAEgDIABgBIACgBIADAAIACABIAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgDQgDADgBAEIAAABIAVAAIAAgBQAAgEgDgDQgEgDgEAAQgEAAgCADgAgBgRQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIAAgBIAFgHIABgBIABAAIAGAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIgJAIIgBAAIgCABg");
	this.shape_676.setTransform(376.8,206);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_677.setTransform(370.3,206.8);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#000000").s().p("AgLAQQgFgFgBgJIAAgCIAAgBQABgJAFgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFAEAEQADADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBACgFACQgDACgFAAQgHAAgEgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgCgDgFAAQgDAAgDADg");
	this.shape_678.setTransform(365.8,206.8);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgzIAAgCIACAAIABAAIACAAIAAACIAAAzIAAACIgCAAg");
	this.shape_679.setTransform(362.6,206.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#000000").s().p("AgMAYQgFgFAAgIIAAgEIAAgDQAAgGAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAGIAAADIAAAEQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgDQgDADgBAEIAAADIAAADQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgDIAAgDQAAgEgDgDQgDgDgFAAQgDAAgDADgAgBgRQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIABgBIADgHIACgBIABAAIAGAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAABIgKAIIgBAAIgBABg");
	this.shape_680.setTransform(359.3,206);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIABAAIABACIAAADQADgFAHAAIADAAIABAAIAAABIAAADIAAACIgBAAIgFAAQgEAAgBADQgDACAAAFIAAAVIAAACIgCAAg");
	this.shape_681.setTransform(355.8,206.8);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgTIgGAAIgCgBIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgCIACAAIACAAIAAAAIABACIAAANIAKAAIABABIABABIAAADIgBABIgBABIgKAAIAAASQAAAFABACQABAAAAAAQABABAAAAQABAAAAAAQABABABAAIAFAAIABAAIAAABIAAADIAAACIgBAAg");
	this.shape_682.setTransform(352.4,206.1);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAFgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFAEAEQADADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBACgFACQgDACgFAAQgHAAgFgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgCgDgFAAQgDAAgDADg");
	this.shape_683.setTransform(348.7,206.8);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_684.setTransform(344.2,207.5);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#000000").s().p("AgPAXQgFgFAAgLIAAgHIAAgFQAAgLAFgGQAHgFAIAAQAJAAAHAFQAFAGAAALIAAAFIAAAHQAAALgFAFQgGAGgKgBQgJABgGgGgAgIgRQgEAEgBAIIAAAFIAAAGQABAIADAEQAEADAFAAQAGAAAEgDQADgEABgIIAAgGIAAgFQgBgIgDgEQgEgDgGAAQgFAAgDADg");
	this.shape_685.setTransform(337.1,206.1);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#000000").s().p("AgRBNIABgwIABgyIAAgLIgWAPIgQAKIACgxQApgWAbgQQATgLASgKIAAAGIgCAgIgFAyIgCAnQgEA6gCAMQgCANgKAFQgJAHgqAJQAHgNAAgag");
	this.shape_686.setTransform(198.5,197);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#000000").s().p("AgBAEIgCAAIAAgCIAAgDIAAgBIACgBIADAAIABABIABABIAAADIgBACIgBAAg");
	this.shape_687.setTransform(234.7,304.2);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#000000").s().p("AgIATIgFgEIgCgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgGgCQgGgCgEgBQgCgDAAgEQAAgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAGACQAHABADABQAEADgBAFQAAADgCADQgBADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_688.setTransform(231.7,302.6);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_689.setTransform(227.3,302.6);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_690.setTransform(222.6,302.5);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_691.setTransform(217.9,302.6);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgZAAIAAABQAAAFACAEQADADAEAAQADAAADgBIADgDIABgBIABgBIAEAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgDACgEACQgEACgEAAQgHAAgEgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgDgEQgDgDgEAAQgEAAgDADg");
	this.shape_692.setTransform(298.5,291);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgCIAAgCQAAgHAEgFQAFgGAIAAQAGAAAFAGIAAgTIAAgBIACAAIADAAIACAAIAAABIAAA0IAAABIgCAAIgDAAIgBAAIgBgBIAAgEQgEAGgHAAQgIABgFgGgAgHgDQgDADAAAFIAAACQAAAPAKAAQAFAAADgEQADgEAAgFIAAgCIAAgEQAAgDgDgDQgDgDgFgBQgEABgDADg");
	this.shape_693.setTransform(293.7,290.3);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#000000").s().p("AgIATIgFgEIgCgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgGgCQgGgCgEgBQgCgDAAgEQAAgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAGACQAHABADABQAEADgBAFQAAADgCADQgBADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_694.setTransform(287.5,291);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAADgBIADgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgDACgEACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAUAAIAAgBQAAgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_695.setTransform(283.3,291);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#000000").s().p("AgMAXQgFgFAAgIIAAgEIAAgDQAAgHAFgFQAFgEAHAAQAIAAAFAEQAFAFAAAHIAAADIAAAEQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgEQgDADgBAEIAAADIAAADQABAGADAEQADADADAAQAFAAADgDQADgEAAgGIAAgDIAAgDQAAgEgDgDQgDgDgFAAQgDAAgDADgAABgTIgBgBIAAgBIgCAAIgBAAIgBABIgBABIgDAAIgBAAIAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgDADAAIACAAIAAACIABABIACAAIABAAIABgBIABgCIABAAIACAAIABABIAAABQAAADgBABQgCADgDAAIgDgBg");
	this.shape_696.setTransform(278.7,290.3);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#000000").s().p("AANAcIgCAAIAAgCIAAgWQAAgEgEgDQgCgDgFAAQgDAAgDADQgEADAAAEIAAAWIAAACIgCAAIgDAAIgCAAIAAgCIAAgzIAAgCIACAAIADAAIACAAIAAACIAAATQACgEAEgBQADgCADABQAHAAAEAEQAFAFAAAHIAAAWIgBACIgBAAg");
	this.shape_697.setTransform(274,290.2);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgzIAAgCIACAAIABAAIACAAIAAACIAAAzIAAACIgCAAg");
	this.shape_698.setTransform(270.6,290.2);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_699.setTransform(268.7,290.2);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_700.setTransform(264.2,290.9);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAFgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFAEAEQADADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBACgFACQgDACgFAAQgHAAgFgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgCgDgFAAQgDAAgDADg");
	this.shape_701.setTransform(256.5,291);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgCIAAgCQAAgHAEgFQAFgGAIAAQAGAAAFAGIAAgTIAAgBIACAAIADAAIACAAIAAABIAAA0IAAABIgCAAIgDAAIgBAAIgBgBIAAgEQgEAGgHAAQgIABgFgGgAgHgDQgDADAAAFIAAACQAAAPAKAAQAFAAADgEQADgEAAgFIAAgCIAAgEQAAgDgDgDQgDgDgFgBQgEABgDADg");
	this.shape_702.setTransform(251.7,290.3);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_703.setTransform(245.2,291);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#000000").s().p("AgJAbQgEgCgCgDIgBgFIAAgBIACgBIADAAIABABIABABQACAGAHABQAFgBADgCQADgCAAgHIAAgGQgFAGgGABQgIAAgFgGQgEgFAAgHIAAgCIAAgCQAAgJAEgFQAFgFAIAAQAGAAAFAGIAAgEIABgBIABgBIADAAIACABIAAABIAAAlQAAASgSABQgFgBgEgCgAgHgTQgCAEgBAGIAAACIAAACQABAFACADQADADAEAAQAFAAADgDQADgDAAgEIAAgDIAAgDQAAgFgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_704.setTransform(240.4,291.8);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_705.setTransform(235.7,290.9);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_706.setTransform(231,291);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgzIAAgCIACAAIABAAIACAAIAAACIAAAzIAAACIgCAAg");
	this.shape_707.setTransform(227.7,290.2);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_708.setTransform(222.5,291);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_709.setTransform(217.9,291);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgHgCgEgBQgDgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgDADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_710.setTransform(295.6,279.4);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_711.setTransform(291.2,279.4);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_712.setTransform(286.9,279.4);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_713.setTransform(283.8,278.6);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#000000").s().p("AgCAdIgCAAIAAgCIAAgfIgHAAIgBgBIgBgBIAAgDIABgBIABgBIAHAAIAAgDQAAgHADgDQABgEAHAAIAFAAIABAAIABABIAAADIgBACIgBAAIgEAAQgEAAgCACIgBAGIAAADIAKAAIACABIAAABIAAADIAAABIgCABIgKAAIAAAfIAAACIgBAAg");
	this.shape_714.setTransform(281.3,278.5);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#000000").s().p("AgFAdIgBgBIAAgBIAAgkIAAgBIABgBIAEAAIABABIAAABIAAAkIAAABIgBABgAgFgRQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIAGgHIAAgCIABAAIAFAAQAAAAABAAQAAAAAAABQAAAAAAAAQABAAAAABIAAABIgIAHIgBABIgCAAg");
	this.shape_715.setTransform(279.3,278.5);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_716.setTransform(275.7,279.4);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#000000").s().p("AgMAQQgFgFAAgJIAAgCIAAgBQAAgJAFgFQAFgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFACAEQADADAEAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgDACgDACQgEACgFAAQgHAAgFgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_717.setTransform(271.3,279.4);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_718.setTransform(266.7,280.1);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#000000").s().p("AgIATIgGgEIgCgEIABgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgHgCgEgBQgDgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgDADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_719.setTransform(262.3,279.4);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAGgFAGAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgaAAIAAABQABAFADAEQACADAEAAQADAAACgBIAEgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgLQgDAEgBAFIAAABIAVAAIAAgBQAAgFgDgEQgEgDgEAAQgEAAgCADg");
	this.shape_720.setTransform(258,279.4);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIADAAIACAAIAAAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgGgCQgGgCgEgBQgDgDAAgEQABgDABgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAFACQAIABADABQAEADAAAFQAAADgDADQgCADgDABQgFACgEAAQgFAAgDgCg");
	this.shape_721.setTransform(251.8,279.4);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAFgFAHAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgaAAIAAABQAAAFAEAEQACADAEAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgCACgDACQgFACgEAAQgHAAgFgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgDgDgEAAQgEAAgCADg");
	this.shape_722.setTransform(247.6,279.4);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#000000").s().p("AgMAXQgFgFAAgIIAAgEIAAgEQAAgGAFgEQAFgGAHAAQAIAAAFAGQAFAEAAAGIAAAEIAAAEQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgEQgDADgBAEIAAADIAAADQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgDIAAgDQAAgEgDgDQgDgEgFABQgDgBgDAEgAABgTIgBgBIAAgBIgCAAIgBAAIgBABIgBABIgDAAIgBAAIAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQACgDADAAIACABIAAABIABABIACAAIABAAIABgBIABgBIABAAIACAAIABAAIAAABQAAACgBACQgCADgDAAIgDgBg");
	this.shape_723.setTransform(243,278.7);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#000000").s().p("AgDAdQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgBIABgBIABAAIABAAIACABIAAAAIACAAIABgCIgBgCIgCgBIAAAAIgCABIgBgBIgBgCIgBAAIABgCIACgDQgHgCgEgFQgDgEAAgFIgBgEIABgDQAAgJAFgEQAEgGAHAAQAGAAAEACQAEADACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAGIAAADIAAADQAAAFADADQADACADAAQAEABACgCQADgBABgEIABAAIABgBIAEAAIABABIABAAIgCAFQgCADgEADQgEACgGAAIAAADIABAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQABACAAAEQAAACgCACQgBADgEAAIgDgBg");
	this.shape_724.setTransform(238.5,280.2);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_725.setTransform(235.4,278.6);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgCIAAgCQAAgHAEgGQAFgFAIAAQAGAAAFAGIAAgTIAAgBIACAAIADAAIACAAIAAABIAAA0IAAABIgCAAIgDAAIgBAAIgBgBIAAgEQgEAHgHgBQgIABgFgGgAgHgDQgDADAAAFIAAACQAAAPAKAAQAFAAADgEQADgDAAgGIAAgCIAAgDQAAgEgDgDQgDgDgFgBQgEABgDADg");
	this.shape_726.setTransform(231.9,278.7);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_727.setTransform(227.2,279.3);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_728.setTransform(222.5,279.4);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_729.setTransform(218,279.4);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_730.setTransform(278.2,267.7);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgZAAIAAABQgBAFADAEQAEADADAAQADAAADgBIADgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEABAFIAAABIATAAIAAgBQAAgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_731.setTransform(272.5,267.8);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#000000").s().p("AgIATIgFgEIgDgEIABgBIABAAIADAAIABAAIABAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgGgCQgHgCgCgBQgDgDAAgEQAAgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAGACQAHABADABQAEADgBAFQAAADgBADQgCADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_732.setTransform(266.3,267.8);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_733.setTransform(261.9,267.8);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgCIAAgCQAAgHAEgGQAFgFAIAAQAGAAAFAGIAAgTIAAgBIACgBIADAAIACABIAAABIAAAzIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgEAHgHgBQgIABgFgGgAgHgDQgDADAAAFIAAACQAAAPAKAAQAFAAADgEQADgDAAgGIAAgCIAAgDQAAgEgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_734.setTransform(257.1,267.1);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_735.setTransform(252.5,267.8);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgTIgGAAIgCgBIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgBIACgBIACAAIAAABIABABIAAANIAKAAIABABIABABIAAADIgBABIgBABIgKAAIAAASQAAAEABADQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_736.setTransform(248.9,267);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_737.setTransform(244.9,267.7);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgZAAIAAABQAAAFACAEQAEADADAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCACgFACQgEACgEAAQgHAAgEgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgEgDgEAAQgDAAgEADg");
	this.shape_738.setTransform(240.3,267.8);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_739.setTransform(234.5,267.7);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_740.setTransform(230,267);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgCIAAgCQAAgHAEgGQAFgFAIAAQAGAAAFAGIAAgTIAAgBIACgBIADAAIACABIAAABIAAAzIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgEAHgHgBQgIABgFgGgAgHgDQgDADAAAFIAAACQAAAPAKAAQAFAAADgEQADgDAAgGIAAgCIAAgDQAAgEgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_741.setTransform(226.6,267.1);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#000000").s().p("AgMAQQgFgFAAgJIAAgCIAAgBQAAgJAFgFQAGgFAGAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFADAEQACADAEAAQADAAACgBIAEgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgLQgDAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgEgDgEAAQgEAAgCADg");
	this.shape_742.setTransform(222.1,267.8);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#000000").s().p("AgIATIgFgEIgCgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgGgCQgGgCgEgBQgCgDAAgEQAAgDABgDQACgDAEgBQADgCAEAAQAEAAADACIAGADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAGACQAHABADABQADADAAAFQAAADgCADQgBADgEABQgFACgEAAQgEAAgEgCg");
	this.shape_743.setTransform(217.9,267.8);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIADAAIABAAIABAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgGgCQgHgCgDgBQgCgDAAgEQAAgDABgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIABAEIAAABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIABACIADADIAGACQAHABADABQAEADAAAFQgBADgCADQgCADgDABQgEACgFAAQgFAAgDgCg");
	this.shape_744.setTransform(293.6,256.2);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_745.setTransform(289.2,256.2);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_746.setTransform(284.7,256.2);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_747.setTransform(281.6,255.4);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_748.setTransform(278.2,256.1);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#000000").s().p("AgJAbQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgDAIgBIAKgCIAAgCQAAgGgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAEIAAAaIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABAJQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCgAAJgRIgCgBIgHgEIgEAEIgDABIgCAAIgBgBIABgCIAIgHIABgBIAAAAIABAAIACAAIABABIAHAHIABACQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAg");
	this.shape_749.setTransform(273.4,255.4);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#000000").s().p("AgJAcQgEgDgCgDIgBgEIAAgCIACgBIADAAIABABIABABQACAGAHAAQAFABADgDQADgCAAgHIAAgGQgFAHgGgBQgIAAgFgFQgEgGAAgGIAAgCIAAgCQAAgIAEgGQAFgFAIgBQAGABAFAGIAAgDIABgCIABgBIADAAIACABIAAACIAAAkQAAATgSAAQgFAAgEgCgAgHgTQgCAEgBAGIAAACIAAACQABAFACADQADADAEAAQAFAAADgDQADgDAAgEIAAgDIAAgDQAAgFgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_750.setTransform(268.9,257);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIACAAIAAACIAAADQADgFAGAAIADAAIACAAIAAABIAAADIAAACIgCAAIgEAAQgEAAgBADQgDACABAFIAAAVIgBACIgBAAg");
	this.shape_751.setTransform(265.4,256.2);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_752.setTransform(261.3,256.2);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgHgCgEgBQgDgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgDADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_753.setTransform(255.1,256.2);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_754.setTransform(250.7,256.2);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgUIgGAAIgCAAIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgBIACgBIACAAIAAABIABABIAAANIAKAAIABABIABABIAAADIgBABIgBAAIgKAAIAAATQAAAFABABQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAABIAAADIAAACIgBAAg");
	this.shape_755.setTransform(246.8,255.4);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#000000").s().p("AgIATIgFgEIgDgEIABgBIABAAIADAAIABAAIABAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgGgCQgHgCgCgBQgDgDAAgEQAAgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAGACQAHABADABQAEADgBAFQAAADgBADQgCADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_756.setTransform(243.3,256.2);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_757.setTransform(238.9,256.2);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_758.setTransform(234.4,256.9);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_759.setTransform(228.4,256.1);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_760.setTransform(222.5,256.2);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_761.setTransform(218,256.2);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAFgFAHAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgaAAIAAABQAAAFAEAEQACADAEAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgCACgDACQgFACgEAAQgHAAgFgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgDgDgEAAQgEAAgCADg");
	this.shape_762.setTransform(286.7,244.6);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#000000").s().p("AgNAXQgEgFAAgJIAAgDIAAgCQAAgGAEgGQAFgFAIAAQAGAAAFAGIAAgTIAAgBIACgBIADAAIACABIAAABIAAAzIAAACIgCABIgDAAIgBgBIgBgCIAAgDQgEAHgHAAQgIAAgFgGgAgHgDQgDADAAAEIAAACQAAAQAKAAQAFAAADgDQADgFAAgEIAAgEIAAgCQAAgEgDgDQgDgDgFAAQgEAAgDADg");
	this.shape_763.setTransform(282,243.9);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIACAAIAAACIAAADQADgFAGAAIADAAIABAAIABABIAAADIgBACIgBAAIgEAAQgEAAgBADQgDACABAFIAAAVIgBACIgBAAg");
	this.shape_764.setTransform(276.5,244.6);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_765.setTransform(273.8,243.8);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgUIgGAAIgCAAIAAgBIAAgDIAAgBIACgBIAGAAIAAgNIAAgBIACgBIACAAIAAABIABABIAAANIAKAAIABABIABABIAAADIgBABIgBAAIgKAAIAAATQAAAFABABQABABAAAAQABABAAAAQABAAAAAAQABAAABAAIAFAAIABABIAAACIAAACIAAABIgBABg");
	this.shape_766.setTransform(271.3,243.8);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIACAAIAAACIAAADQADgFAGAAIADAAIACAAIAAABIAAADIAAACIgCAAIgEAAQgEAAgBADQgDACABAFIAAAVIgBACIgBAAg");
	this.shape_767.setTransform(268.5,244.6);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_768.setTransform(264.4,244.6);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_769.setTransform(260.1,245.3);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_770.setTransform(253.3,244.6);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_771.setTransform(247,244.6);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_772.setTransform(241.4,244.5);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIACAAIAAACIAAADQADgFAGAAIADAAIACAAIAAABIAAADIAAACIgCAAIgEAAQgEAAgBADQgDACABAFIAAAVIgBACIgBAAg");
	this.shape_773.setTransform(236.6,244.6);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_774.setTransform(232.5,244.6);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#000000").s().p("AgCAdIgCgBIAAgBIAAggIgHAAIgBAAIgBgBIAAgDIABgBIABgBIAHAAIAAgEQAAgGADgDQABgEAHAAIAFAAIABABIABABIAAACIgBABIgBABIgEAAQgEAAgCACIgBAGIAAADIAKAAIACABIAAABIAAADIAAABIgCAAIgKAAIAAAgIAAABIgBABg");
	this.shape_775.setTransform(228.7,243.7);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#000000").s().p("AgMAQQgFgFAAgJIAAgCIAAgBQAAgJAFgFQAGgFAGAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFADAEQACADAEAAQADAAACgBIAEgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgLQgDAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgEgDgEAAQgEAAgCADg");
	this.shape_776.setTransform(223,244.6);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#000000").s().p("AgKAaQgFgCgCgDQgDgDAAgEIABgBIABgBIAEAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQABADADACQADACAFABQAGAAAEgCQADgDAAgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgFgDIgIgDIgKgCQgEgCgBgDQgCgDAAgEQAAgEACgEQACgDAFgDQAEgCAFAAQAFABAFACQAEACADADQACAEAAADIAAACIgCAAIgEAAIgBAAIgBgCQAAgDgDgDQgEgCgEAAQgEAAgDACQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAEAEIAHACIALADQAEABACADQACADAAAFQAAAHgGAEQgGAFgJAAQgFAAgFgDg");
	this.shape_777.setTransform(218.3,243.9);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#000000").s().p("AgBAEIgCAAIAAgCIAAgDIAAgBIACgBIAEAAIAAABIABABIAAADIgBACIAAAAg");
	this.shape_778.setTransform(296.6,232.4);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#000000").s().p("AgIATIgFgEIgDgEIABgBIABAAIAEAAIAAAAIABAAIAEAEIAFABQAEAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgDgCIgFgCQgIgCgCgBQgDgDgBgEQABgDACgDQABgDADgBQAEgCAEAAQAEAAADACIAGADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgCgCIgEAAQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAACIAEADIAGACQAHABADABQADADAAAFQAAADgBADQgCADgFABQgEACgEAAQgFAAgDgCg");
	this.shape_779.setTransform(293.6,230.8);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgZAAIAAABQAAAFACAEQAEADADAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgCACgFACQgEACgEAAQgHAAgEgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgEgDgEAAQgDAAgEADg");
	this.shape_780.setTransform(289.4,230.8);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIACAAIAAACIAAADQADgFAHAAIACAAIABAAIABABIAAADIgBACIgBAAIgEAAQgEAAgBADQgCACAAAFIAAAVIgBACIgCAAg");
	this.shape_781.setTransform(285.9,230.8);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_782.setTransform(281.8,230.8);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgUIgGAAIgCAAIAAgBIAAgDIAAgBIACAAIAGAAIAAgOIAAgCIACAAIACAAIAAAAIABACIAAAOIAKAAIABAAIABABIAAADIgBABIgBAAIgKAAIAAAUQAAADABACQABABAAAAQABABAAAAQABAAAAAAQABABABAAIAFAAIABAAIAAACIAAACIAAABIgBABg");
	this.shape_783.setTransform(278.1,230.1);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_784.setTransform(274.2,230.8);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFACAEQAEADADAAQADAAADgBIADgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgDACgEACQgEACgEAAQgHAAgEgFgAgHgLQgCAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgEgDgEAAQgDAAgEADg");
	this.shape_785.setTransform(269.6,230.8);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_786.setTransform(263.8,230.8);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_787.setTransform(259.3,230);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgDIAAgCQAAgGAEgFQAFgGAIAAQAGAAAFAGIAAgSIAAgCIACgBIADAAIACABIAAACIAAAzIAAABIgCABIgDAAIgBgBIgBgBIAAgEQgEAGgHABQgIgBgFgFgAgHgDQgDADAAAEIAAACQAAAQAKAAQAFAAADgDQADgFAAgEIAAgEIAAgDQAAgDgDgDQgDgEgFABQgEgBgDAEg");
	this.shape_788.setTransform(255.8,230.1);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#000000").s().p("AgMAQQgFgFAAgJIAAgCIAAgBQAAgJAFgFQAGgFAGAAQAIAAAFAFQAFAGAAAJIAAAAIAAABIgCABIgZAAIAAABQAAAFADAEQACADAEAAQADAAACgBIAEgDIABgBIABgBIAEAAIACABIAAABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgCACgDACQgFACgEAAQgGAAgGgFgAgGgLQgDAEAAAFIAAABIATAAIAAgBQAAgFgCgEQgEgDgEAAQgEAAgCADg");
	this.shape_789.setTransform(251.4,230.8);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#000000").s().p("AgKAaQgFgCgCgEQgDgCAAgFIABgBIABAAIAEAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQABAEADACQADADAFgBQAGAAAEgBQADgDAAgFQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIgFgDIgIgDIgKgCQgEgCgBgDQgCgDAAgFQAAgDACgEQACgDAFgCQAEgCAFgBQAFAAAFADQAEACADADQACAEAAADIAAABIgCABIgEAAIgBgBIgBgBQAAgDgDgDQgEgCgEAAQgEAAgDACQgEADAAADQAAABAAABQAAABABAAQAAABAAAAQAAABABAAIAEAEIAHACIALADQAEABACADQACADAAAEQAAAIgGAEQgGAEgJABQgFgBgFgCg");
	this.shape_790.setTransform(246.6,230.1);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#000000").s().p("AgIATIgGgEIgBgEIAAgBIABAAIAEAAIABAAIAAAAIAEAEIAFABQADAAADgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgEgCIgFgCQgHgCgEgBQgDgDAAgEQAAgDACgDQACgDAEgBQADgCAEAAQAEAAAEACIAFADIACAEIgBABIgBABIgDAAIgCgBIgCgCIgDgCIgDAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAACIAEADIAFACQAIABADABQADADABAFQAAADgCADQgDADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_791.setTransform(240.2,230.8);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_792.setTransform(235.8,230.8);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#000000").s().p("AAMAcIgBgBIAAgBIAAgWQAAgEgEgDQgCgDgFAAQgEAAgCADQgEADAAAEIAAAWIAAABIgCABIgDAAIgBgBIgBgBIAAgzIABgCIABAAIADAAIACAAIAAACIAAASQACgDAEgBQADgBADAAQAHAAAEAEQAFAFAAAHIAAAWIAAABIgCABg");
	this.shape_793.setTransform(231.4,230.1);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_794.setTransform(226.7,230.8);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_795.setTransform(222.2,230.8);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#000000").s().p("AAPAcIgBgBIgCgBIgMgVIgMAAIAAAVIAAABIgCABIgDAAIgCgBIAAgBIAAgyIAAgCIACAAIARAAQAJgBAFAFQAGAEgBAIQABAGgEAEQgDACgFABIAMAWIAAABIAAABIgCABgAgMAAIAMAAQALAAAAgKQAAgKgLAAIgMAAg");
	this.shape_796.setTransform(217.5,230.1);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_797.setTransform(286.3,219.2);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#000000").s().p("AgLAQQgGgFAAgJIAAgCIAAgBQAAgJAGgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAADgBIADgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAAAABQgCACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAUAAIAAgBQAAgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_798.setTransform(280.6,219.2);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_799.setTransform(274,219.2);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#000000").s().p("AgNAXQgEgGAAgIIAAgCIAAgDQAAgGAEgFQAFgGAIAAQAGAAAFAGIAAgSIAAgCIACAAIADAAIACAAIAAACIAAAzIAAABIgCABIgDAAIgBgBIgBgBIAAgEQgEAGgHAAQgIAAgFgFgAgHgDQgDADAAAEIAAADQAAAPAKAAQAFAAADgDQADgEAAgFIAAgDIAAgEQAAgDgDgDQgDgDgFAAQgEAAgDADg");
	this.shape_800.setTransform(269.3,218.5);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_801.setTransform(264.7,219.2);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#000000").s().p("AAMAVIgBgBIAAgBIAAgUQAAgGgDgDQgDgDgFAAQgDAAgDADQgDADAAAGIAAAUIgBABIgBABIgEAAIgBgBIgBgBIAAgkIABgBIABgBIAEAAIABABIAAABIAAAEIAGgFQADgCADAAQAIAAAEAFQAEAFAAAIIAAAVIgBABIgBABg");
	this.shape_802.setTransform(260.2,219.2);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#000000").s().p("AgLAQQgFgFgBgJIAAgCIAAgBQABgJAFgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFAEAEQADADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBAAQAAABAAABQgBAAgBABQgBACgFACQgDACgFAAQgHAAgEgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgCgDgFAAQgDAAgDADg");
	this.shape_803.setTransform(255.6,219.2);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#000000").s().p("AgOAUIgBAAIgBgCIAAgCIAAgCIABgBIAVgaIgTAAIgCgBIAAgBIAAgDIAAgBIACAAIAaAAIACAAIAAABIAAADIgBADIgUAaIAVAAIABABIAAABIAAACIAAACIgBAAg");
	this.shape_804.setTransform(251.3,219.2);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_805.setTransform(246.9,219.2);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#000000").s().p("AAYAVIgBgBIgBgBIAAgVQAAgGgDgDQgCgCgFAAQgDAAgDACQgDADAAAGIAAAVIAAABIgCABIgBAAIgCgBIAAgBIAAgVQAAgGgDgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAVIgBABIgBABIgDAAIgCgBIAAgBIAAgkIAAgBIACgBIADAAIABABIABABIAAADQAEgGAHAAQAJAAACAIQACgEADgCQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAAVIAAABIgCABg");
	this.shape_806.setTransform(241.3,219.2);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIABAAIABACIAAADQADgFAHAAIADAAIAAAAIABABIAAADIgBACIAAAAIgFAAQgEAAgBADQgDACAAAFIAAAVIAAACIgCAAg");
	this.shape_807.setTransform(236.5,219.2);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_808.setTransform(232.4,219.2);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_809.setTransform(226.1,219.2);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#000000").s().p("AgLAQQgFgFAAgIIgBgDIABgCQAAgIAFgFQAEgFAHAAQAGAAAEACQAEACACADIACAGIgBABIgBABIgEAAIgBAAIgBgCQgBgEgDgBQgCgCgEAAQgDAAgDADQgDADAAAHIAAABIAAACQAAAHADADQADADADAAQAEAAACgCQADgBABgEIABgCIABAAIAEAAIABABIABABIgCAGQgCADgEACQgEACgGAAQgHAAgEgFg");
	this.shape_810.setTransform(221.8,219.2);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#000000").s().p("AAAAcIgCAAIAAgCIAAgkIAAgBIACAAIABAAIABAAIABABIAAAkIgBACIgBAAgAgBgTIgBgBIgBgBIAAgEIABgCIABAAIADAAIABAAIABACIAAAEIgBABIgBABg");
	this.shape_811.setTransform(218.7,218.4);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#000000").s().p("AgCAdIgCgBIAAgBIAAggIgHAAIgBAAIgBgBIAAgDIABgBIABAAIAHAAIAAgFQAAgGADgEQABgDAHAAIAFAAIABABIABABIAAACIgBABIgBABIgEAAQgEAAgCACIgBAGIAAAEIAKAAIACAAIAAABIAAADIAAABIgCAAIgKAAIAAAgIAAABIgBABg");
	this.shape_812.setTransform(216.2,218.4);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_813.setTransform(285,207.6);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#000000").s().p("AgNAXQgEgFAAgJIAAgCIAAgDQAAgGAEgFQAFgGAIAAQAGAAAFAGIAAgSIAAgCIACAAIADAAIACAAIAAACIAAAzIAAABIgCAAIgDAAIgBAAIgBgBIAAgEQgEAGgHAAQgIAAgFgFgAgHgDQgDADAAAEIAAADQAAAPAKAAQAFAAADgDQADgFAAgFIAAgCIAAgEQAAgDgDgDQgDgDgFgBQgEABgDADg");
	this.shape_814.setTransform(280.2,206.9);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#000000").s().p("AgFAdIgBgBIAAgBIAAgkIAAgBIABgBIAEAAIABABIAAABIAAAkIAAABIgBABgAgFgRQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIAGgHIAAgCIABAAIAFAAQAAAAABAAQAAAAAAABQAAAAAAAAQABAAAAABIAAABIgIAHIgBABIgCAAg");
	this.shape_815.setTransform(277.5,206.8);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#000000").s().p("AgJATQgDgBgCgDQgCgDAAgDQAAgFAEgEQAEgBAIgBIAKgCIAAgCQAAgIgKAAQgBAAgDABIgDAEIgBABIgBAAIgDAAIgBgBIAAgBIABgEQACgDAEgBQADgCADAAQAJAAAEAEQAEAEAAAGIAAAYIAAACIgCAAIgDAAIgBAAIgBgCIAAgDQgCADgDABQgDACgEAAQgEAAgDgCgAABABQgEABgDACQgDACAAACQAAAEADABQACACAEAAQADAAAEgDQADgEAAgGIAAgCg");
	this.shape_816.setTransform(273.7,207.6);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#000000").s().p("AgIAUIgCAAIAAgCIAAgjIAAgCIACAAIADAAIACAAIAAACIAAADQADgFAGAAIAEAAIABAAIAAABIAAADIAAACIgBAAIgFAAQgFAAAAADQgCACAAAFIAAAVIgBACIgBAAg");
	this.shape_817.setTransform(270.4,207.6);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgTIgGAAIgCgBIAAgBIAAgDIAAgBIACAAIAGAAIAAgOIAAgCIACAAIACAAIAAAAIABACIAAAOIAKAAIABAAIABABIAAADIgBABIgBABIgKAAIAAATQAAADABADQABAAAAAAQABABAAAAQABAAAAAAQABABABAAIAFAAIABAAIAAACIAAACIAAABIgBABg");
	this.shape_818.setTransform(267.1,206.9);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#000000").s().p("AANAUIgCgBIgLgPIgKAPIgBABIgBAAIgEAAIgBAAIAAgBIAAgCIAOgRIgNgQIgBgCIABgBIABAAIADAAIADABIAJAOIALgOIABgBIAAAAIAEAAIACAAIAAABIgBACIgNAQIAOARIABACIgBABIgBAAg");
	this.shape_819.setTransform(263.4,207.6);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#000000").s().p("AgLAQQgFgFgBgJIAAgCIAAgBQABgJAFgFQAFgFAGAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFADAEQAEADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBACgFACQgDACgFAAQgGAAgFgFgAgHgLQgDAEAAAFIAAABIAVAAIAAgBQgBgFgDgEQgCgDgFAAQgDAAgEADg");
	this.shape_820.setTransform(259.1,207.6);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#000000").s().p("AgMAQQgFgFAAgIIAAgDIAAgCQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIIAAACIAAADQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgLQgDADgBAGIAAACIAAACQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgCIAAgCQAAgGgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_821.setTransform(250.6,207.6);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#000000").s().p("AgLAQQgFgFgBgJIAAgCIAAgBQABgJAFgFQAEgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFAEAEQADADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBACgFACQgDACgFAAQgHAAgEgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgCgDgFAAQgDAAgDADg");
	this.shape_822.setTransform(246.1,207.6);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#000000").s().p("AAAAcIgCgBIAAgBIAAgzIAAgCIACAAIABAAIACAAIAAACIAAAzIAAABIgCABg");
	this.shape_823.setTransform(242.9,206.9);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#000000").s().p("AgMAYQgFgFAAgIIAAgEIAAgDQAAgGAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAGIAAADIAAAEQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgGgDQgDADgBAEIAAADIAAADQABAHADADQADADADAAQAFAAADgDQADgDAAgHIAAgDIAAgDQAAgEgDgDQgDgDgFAAQgDAAgDADgAgBgRQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIABgBIADgHIACgBIABAAIAGAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAABIgKAIIgBAAIgBABg");
	this.shape_824.setTransform(239.6,206.8);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#000000").s().p("AgIAUIgBAAIgBgCIAAgjIABgCIABAAIADAAIABAAIABACIAAADQADgFAHAAIADAAIAAAAIABABIAAADIgBACIAAAAIgFAAQgEAAgBADQgDACAAAFIAAAVIAAACIgCAAg");
	this.shape_825.setTransform(236.1,207.6);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#000000").s().p("AAGAcQgKAAAAgOIAAgTIgGAAIgCgBIAAgBIAAgDIAAgBIACAAIAGAAIAAgOIAAgCIACAAIACAAIAAAAIABACIAAAOIAKAAIABAAIABABIAAADIgBABIgBABIgKAAIAAATQAAADABADQABAAAAAAQABABAAAAQABAAAAAAQABABABAAIAFAAIABAAIAAACIAAACIAAABIgBABg");
	this.shape_826.setTransform(232.7,206.9);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#000000").s().p("AgMAQQgEgFgBgJIAAgCIAAgBQABgJAEgFQAFgFAHAAQAJAAAEAFQAFAGAAAJIAAAAIgBABIgBABIgaAAIAAABQAAAFAEAEQADADADAAQADAAACgBIAEgDIABgBIACgBIADAAIABABIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBACgFACQgDACgFAAQgHAAgFgFgAgGgLQgEAEAAAFIAAABIAVAAIAAgBQAAgFgEgEQgCgDgFAAQgDAAgDADg");
	this.shape_827.setTransform(229,207.6);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#000000").s().p("AgPAcIgCAAIAAgBIAAg0IAAgBIACAAIADAAIABAAIABABIAAAEQAFgGAGAAQAIAAAFAFQAEAFAAAJIAAACIAAADQAAAGgEAGQgFAFgIAAQgGAAgFgGIAAATIAAABIgCAAgAgHgRQgDAEAAAFIAAADIAAADQAAADADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgDQAAgPgLAAQgEAAgDAEg");
	this.shape_828.setTransform(224.5,208.3);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#000000").s().p("AgPAXQgFgGAAgKIAAgHIAAgFQAAgLAFgGQAHgFAIAAQAJAAAHAFQAFAGAAALIAAAFIAAAHQAAAKgFAGQgGAFgKAAQgJAAgGgFgAgIgRQgEAEgBAIIAAAFIAAAGQABAIADAEQAEAEAFgBQAGABAEgEQADgEABgIIAAgGIAAgFQgBgIgDgEQgEgEgGAAQgFAAgDAEg");
	this.shape_829.setTransform(217.4,206.9);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#000000").s().p("AgSAUQgHgFAAgLIAAgEIAAgDQAAgKAHgHQAHgFALAAQAMAAAHAFQAHAHAAAKIAAADIAAAEQAAALgHAFQgHAHgMAAQgLAAgHgHgAgFgLQgCAEAAAEIAAADIAAADQAAAGACACQACADADAAQAEAAACgDQACgCAAgGIAAgDIAAgDQAAgEgCgEQgCgCgEAAQgDAAgCACg");
	this.shape_830.setTransform(259.1,192);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#000000").s().p("AgPAjQgEgCgDgEQgCgEAAgDQAAgHAFgFQAGgEAKgBIAKgDIAAgBQAAgCgBgBQgCgBgDAAIgCAAIgDACIgCABIgBAAIgMAAIgBAAIgBgBQAAgDADgDQADgDAFgCQAFgDAGAAQAMAAAGAGQAGAFAAAHIAAAfIAAABIgCABIgMAAIgCgBIgBgBIAAgEQgCADgEACQgCACgFAAQgGAAgEgCgAAAAOQgHACAAAEQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAFABQACAAADgCQADgEAAgFIAAgBgAADgVIgDgCIgCgCIgCABIgBABIgBABIgBABIgGAAIgBgBIgBgBIABgGQABgDADgCQACgCAEAAIAEAAIABACIACABIACAAIACAAIABgCIABgBIABAAIAGAAIACABIAAABIgBAGQgBADgDACQgCACgEAAIgEAAg");
	this.shape_831.setTransform(252.9,190.9);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#000000").s().p("AgFAjQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgBIACgBIABgBIACABIACAAIACgBIAAgCIAAgCIgCgBIgBAAIgCABIgBgBIgCgCIgBgBIABgCIACgFQgJgBgGgGQgFgFgBgIIAAgEIAAgEQABgLAHgGQAHgGAKAAQAIAAAGADQAGADADAEQACAFABADIgBACIgCABIgNAAIgCAAIgBgDIgDgDIgEgBQgGgBAAALIgBADIABAEQAAAFACABQACACACAAIAEgBIADgDIABgCIACAAIANAAIACABIABABQAAABgDAFQgDAFgGADQgGADgIAAIAAAEIAAAAIABAAQAEAAACACQACACAAAEQAAAEgDACQgCADgEAAQgCAAgDgCg");
	this.shape_832.setTransform(247.1,193);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#000000").s().p("AgPAZQgEgDgDgDQgCgEAAgEQAAgHAFgEQAGgCAKgCIAKgCIAAgBQAAgEgBgCQgCgBgDAAIgCAAIgDACIgCACIgBABIgMAAIgBgBIgBgCQAAgCADgDQADgEAFgCQAFgDAGABQAMgBAGAGQAGAFAAAKIAAAcIAAACIgCABIgMAAIgCgBIgBgCIAAgEQgCADgEADQgCACgFAAQgGAAgEgCgAAAADQgHACAAAFQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAIAFABQACAAADgCQADgDAAgGIAAgBg");
	this.shape_833.setTransform(241,192);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#000000").s().p("AgQAaIgBgBIgBgCIAAgtIABgCIABAAIANAAIACAAIAAACIAAAEIAFgFQAEgCAEABIAFAAIABAAIABACIAAALIgBACIgBABIgKAAQgEAAgDACQAAACAAAEIAAAXIgBACIgBABg");
	this.shape_834.setTransform(236.1,192);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#000000").s().p("AAJAjQgTAAAAgUIAAgQIgIAAIgCgBIAAgCIAAgIIAAgDIACAAIAIAAIAAgQIABgDIACAAIAKAAIACAAIAAADIAAAQIANAAIACAAIAAADIAAAIIAAACIgCABIgNAAIAAAPQAAADACACQAAAAAAABQABAAAAAAQABAAAAAAQABABABAAIAIAAIACABIAAACIAAAJIAAABIgCABg");
	this.shape_835.setTransform(231.1,191);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#000000").s().p("AAMAaIgDgCIgJgNIgJANIgBABIgBABIgOAAIgBgBIgBgCIABgCIAQgVIgPgVIAAgBIAAgCIACAAIANAAIACAAIABABIAHAMIAJgMIAAgBIABAAIACAAIAMAAIABAAIABABIAAACIgQAVIARAVIABACIgBACIgCABg");
	this.shape_836.setTransform(225.8,192);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#000000").s().p("AgWAjIgDgBIAAgCIAAg/IAAgCIADAAIAtAAIACAAIAAACIAAAKIAAACIgCABIgeAAIAAAMIAcAAIABABIABACIAAAHIgBABIgBACIgcAAIAAANIAfAAIABAAIABACIAAAKIgBACIgBABg");
	this.shape_837.setTransform(219.8,191.1);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#000000").s().p("AgQAfQgHgEgDgDQgEgEAAgEIABgCIADAAIAPAAIABAAIACACIAFACIADABIAFgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgEgDIgIgCQgWgFAAgNQAAgFADgFQAEgEAGgDQAHgDAIAAQAIAAAGADQAHACAEAFQADADAAADIgBADIgCABIgNAAIgCgBIgDgCIgEgDIgDAAQgDAAgBABQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABADIAEACIAIACQANADAFADQAGAGAAAHQAAAJgJAFQgIAGgOAAQgJAAgHgCg");
	this.shape_838.setTransform(515.3,572.2);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#000000").s().p("AgXAaQgIgIgBgNIAAgFIAAgEQAAgOAKgHQAIgHAOAAQAPAAAIAHQAJAHABAOIAAAEIAAAFQgBANgJAIQgIAHgPAAQgOAAgJgHgAgGgNQgCADgBAHIAAADIAAAFQABAGACAEQACACAEAAQAFAAACgCQACgEABgGIAAgFIAAgDQgBgHgCgDQgCgDgFgBQgEABgCADg");
	this.shape_839.setTransform(508,572.2);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#000000").s().p("AgUAgIgCgBIgBgCIAAg5IABgCIACgBIAPAAIADABIAAACIAAAFQACgEAFgCQAEgCAHAAIAFAAIACABIABACIAAANIgBADIgCABIgMAAQgGAAgCACQgBAEAAAFIAAAdIgBACIgDABg");
	this.shape_840.setTransform(501.6,572.2);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#000000").s().p("AgXAZQgIgIgBgQIAAgBQABgPAJgJQAJgIANAAQAKAAAIAEQAHAFAEAHQAEAHgBAJIAAADIgBACIgCABIglAAIAAAAQAAAGADAEQACADADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIAEgCIACgCIABAAIARAAIACABIAAABQAAADgDAFQgEAEgGADQgIADgJAAQgNAAgKgIgAgGgPQgCADAAAGIAAABIASAAIAAgBQgBgGgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_841.setTransform(494.7,572.2);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#000000").s().p("AAfAgIgCgBIgBgCIAAggQAAgGgCgDQgDgCgEAAQgEAAgCACQgDADAAAGIAAAgIAAACIgDABIgNAAIgCgBIgBgCIAAggQAAgGgDgDQgCgCgEAAQgEAAgDACQgCADAAAFIAAAhIgBACIgCABIgQAAIgCgBIgBgCIAAg5IABgCIACgBIAPAAIACABIABACIAAAFQADgEAEgCQAFgCAGgBQAMAAAFALQADgEAFgEQAGgCAGgBQAKABAHAGQAGAHAAAOIAAAhIgBACIgCABg");
	this.shape_842.setTransform(485.2,572.1);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#000000").s().p("AgOAuIgCgBIgBgCIAAg5IABgCIACgBIAOAAIACABIABACIAAA5IgBACIgCABgAgOgaQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgBIALgOIACgCIACAAIAQAAIACAAIAAACIAAABIgRAPIgBAAIgCABg");
	this.shape_843.setTransform(478.4,570.7);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#000000").s().p("AgGAsIgDgBIAAgCIAAhRIAAgCIADgBIANAAIADABIAAACIAABRIAAACIgDABg");
	this.shape_844.setTransform(474,571);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#000000").s().p("AgXAaQgJgIAAgNIAAgFIAAgEQAAgOAKgHQAIgHAOAAQAOAAAJAHQAJAHABAOIAAAEIAAAFQgBANgJAIQgIAHgPAAQgOAAgJgHgAgGgNQgCADgBAHIAAADIAAAFQABAGACAEQACACAEAAQAEAAADgCQADgEAAgGIAAgFIAAgDQAAgHgDgDQgDgDgEgBQgEABgCADg");
	this.shape_845.setTransform(468.3,572.2);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#000000").s().p("AgdAsIgCAAIgBgDIAAhQIABgCIACgBIAPAAIACABIABACIAAAEQAHgIAKAAQANAAAHAHQAGAIABAOIAAAEIAAAFQgBAMgGAHQgHAIgNAAQgKAAgGgIIAAAbIgBADIgCAAgAgHgXQgCAEgBAFIAAAFIAAAEQABAFACABQADAEAEAAQAFAAACgEQADgBAAgGIAAgEIAAgEQAAgFgDgEQgCgDgFAAQgEAAgDADg");
	this.shape_846.setTransform(460.6,573.3);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#000000").s().p("AgWAZQgJgIAAgQIAAgBQAAgPAJgJQAIgIAOAAQAKAAAIAEQAHAFAEAHQAEAHgBAJIAAADIgBACIgCABIglAAIAAAAQAAAGADAEQACADADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIAEgCIACgCIACAAIAQAAIACABIAAABQAAADgDAFQgEAEgGADQgIADgJAAQgNAAgJgIgAgGgPQgCADAAAGIAAABIASAAIAAgBQgBgGgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_847.setTransform(450.2,572.2);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#000000").s().p("AgYAlQgIgIAAgOIAAgEIAAgFQAAgLAIgIQAGgIANAAQAIAAAIAHIAAgaIABgDIABAAIARAAIACAAIABADIAABQIgBACIgCABIgPAAIgCgBIgBgCIAAgEQgHAIgKAAQgNAAgGgHgAgGAAQgDABAAAGIAAAEIAAAEQAAAFADAEQACADAEAAQAFAAADgDQADgEAAgFIAAgFIAAgEQAAgFgEgBQgCgEgFAAQgEAAgCAEg");
	this.shape_848.setTransform(442.3,571);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#000000").s().p("AgTAfQgFgDgEgEQgDgFAAgFQAAgIAHgGQAIgDAMgDIANgCIAAgCQAAgEgBgCQgCgCgFAAIgCAAIgEADIgDADIgBAAIgOAAIgDAAIAAgDQAAgDADgEQADgEAHgDQAHgDAHAAQAQAAAHAGQAIAIAAALIAAAkIgBACIgCABIgQAAIgCgBIgBgCIAAgFQgCAEgFADQgDACgHAAQgHAAgFgCgAAAAFQgJACAAAFQAAADACABQADACADAAQAEABADgEQAEgEAAgGIAAgCg");
	this.shape_849.setTransform(431.9,572.2);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#000000").s().p("AgTAgIgDgBIgBgCIAAg5IABgCIADgBIAOAAIADABIABACIAAAFQABgEAFgCQAFgCAGAAIAFAAIACABIABACIAAANIgBADIgCABIgNAAQgFAAgDACQAAAEAAAFIAAAdIgBACIgCABg");
	this.shape_850.setTransform(425.8,572.2);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#000000").s().p("AgaAaQgGgIAAgOIAAghIABgCIACgBIARAAIACABIABACIAAAgQAAANAJAAQAEgBADgDQADgDAAgGIAAggIABgCIADgBIAQAAIACABIABACIAAA5IgBACIgCABIgPAAIgDgBIgBgCIAAgFQgGAJgNAAQgKAAgIgGg");
	this.shape_851.setTransform(418.6,572.2);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#000000").s().p("AAMAsQgZAAAAgZIAAgVIgKAAIgCgBIgBgCIAAgLIABgCIACgBIAKAAIAAgVIABgCIACgBIAOAAIACABIABACIAAAVIAPAAIADABIAAACIAAALIAAACIgDABIgPAAIAAATQAAAEABADQACACAEAAIAJAAIADABIABACIAAAMIgBACIgDABg");
	this.shape_852.setTransform(411.6,571);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#000000").s().p("AgZAaQgHgIAAgOIAAghIABgCIACgBIAQAAIADABIABACIAAAgQAAANAJAAQAFgBACgDQADgDAAgGIAAggIABgCIACgBIARAAIACABIABACIAAA5IgBACIgCABIgQAAIgCgBIAAgCIAAgFQgIAJgLAAQgMAAgGgGg");
	this.shape_853.setTransform(404.6,572.2);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#000000").s().p("AgTAgIgDgBIgBgCIAAg5IABgCIADgBIAPAAIACABIABACIAAAFQABgEAFgCQAFgCAGAAIAFAAIACABIABACIAAANIgBADIgCABIgNAAQgEAAgEACQAAAEAAAFIAAAdIgBACIgCABg");
	this.shape_854.setTransform(398,572.2);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#000000").s().p("AAMAsQgZAAAAgZIAAgVIgKAAIgCgBIgBgCIAAgLIABgCIACgBIAKAAIAAgVIABgCIACgBIAOAAIACABIABACIAAAVIAPAAIADABIAAACIAAALIAAACIgDABIgPAAIAAATQAAAEABADQACACAEAAIAJAAIADABIABACIAAAMIgBACIgDABg");
	this.shape_855.setTransform(391.8,571);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#000000").s().p("AgQAfQgHgEgDgDQgEgEAAgEIABgCIADAAIAPAAIABAAIACACIAFACIADABIAFgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgEgDIgIgCQgWgFAAgNQAAgFADgFQAEgEAGgDQAHgDAIAAQAIAAAGADQAHACAEAFQADADAAADIgBADIgCABIgNAAIgCgBIgDgCIgEgDIgDAAQgDAAgBABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIABADIAEACIAIACQANADAFADQAGAGAAAHQAAAJgJAFQgIAGgOAAQgJAAgHgCg");
	this.shape_856.setTransform(385.4,572.2);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#000000").s().p("AgXAZQgIgIgBgQIAAgBQABgPAJgJQAIgIAOAAQALAAAHAEQAHAFAEAHQADAHAAAJIAAADIgBACIgCABIglAAIAAAAQAAAGACAEQADADADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIAEgCIACgCIABAAIARAAIACABIAAABQABADgEAFQgEAEgGADQgIADgJAAQgNAAgKgIgAgGgPQgCADAAAGIAAABIASAAIAAgBQgBgGgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_857.setTransform(378.3,572.2);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#000000").s().p("AgTAfQgFgDgEgEQgDgFAAgFQAAgIAHgGQAIgDAMgDIANgCIAAgCQAAgEgBgCQgCgCgFAAIgCAAIgEADIgDADIgBAAIgOAAIgDAAIAAgDQAAgDADgEQADgEAHgDQAHgDAHAAQAQAAAHAGQAIAIAAALIAAAkIgBACIgCABIgQAAIgCgBIgBgCIAAgFQgCAEgFADQgDACgHAAQgHAAgFgCgAAAAFQgJACAAAFQAAADACABQADACADAAQAEABADgEQAEgEAAgGIAAgCg");
	this.shape_858.setTransform(368,572.2);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#000000").s().p("AgZAlQgHgIAAgOIAAgEIAAgFQAAgLAHgIQAIgIALAAQAKAAAGAHIAAgaIABgDIACAAIARAAIACAAIABADIAABQIgBACIgCABIgPAAIgCgBIgBgCIAAgEQgHAIgLAAQgLAAgIgHgAgHAAQgCABAAAGIAAAEIAAAEQAAAFACAEQADADAEAAQAFAAADgDQADgEgBgFIABgFIgBgEQAAgFgCgBQgDgEgFAAQgEAAgDAEg");
	this.shape_859.setTransform(360.4,571);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#000000").s().p("AgXAaQgIgIgBgNIAAgFIAAgEQABgOAIgHQAJgHAOAAQAOAAAKAHQAIAHABAOIAAAEIAAAFQgBANgIAIQgJAHgPAAQgPAAgIgHgAgGgNQgDADAAAHIAAADIAAAFQAAAGADAEQACACAEAAQAEAAADgCQACgEABgGIAAgFIAAgDQgBgHgCgDQgDgDgEgBQgEABgCADg");
	this.shape_860.setTransform(350,572.2);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#000000").s().p("AgTAsQgFgDgEgEQgDgFAAgFQAAgIAHgGQAIgFAMgCIANgCIAAgCQAAgDgBgCQgCgCgFAAIgCABIgEADIgDABIgBAAIgOAAIgDAAIAAgBQAAgEADgEQADgEAHgDQAHgDAHAAQAQAAAHAHQAIAHAAAJIAAAmIgBACIgCABIgQAAIgCgBIgBgCIAAgEQgCAEgFACQgDACgHAAQgHAAgFgCgAAAASQgJACAAAFQAAADACACQADACADAAQAEAAADgEQAEgEAAgGIAAgCgAAEgbIgEgCQgBgCgCAAIgCABIgCABIgBABIgBABIgIAAIgBgBIgBgBIABgHQACgEADgDQADgCAFAAIAFAAIACACIACACIADAAIACAAIABgCIABgBIACgBIAIAAIABABIABABIgCAHQgBAEgDADQgDADgFAAIgFgBg");
	this.shape_861.setTransform(342.3,570.8);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#000000").s().p("AgQAfQgHgEgDgDQgEgEAAgEIABgCIADAAIAPAAIABAAIACACIAFACIADABIAFgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgDIgEgDIgIgCQgWgFAAgNQAAgFADgFQAEgEAGgDQAHgDAIAAQAIAAAGADQAHACAEAFQADADAAADIgBADIgCABIgNAAIgCgBIgDgCIgEgDIgDAAQgDAAgBABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIABADIAEACIAIACQANADAFADQAGAGAAAHQAAAJgJAFQgIAGgOAAQgJAAgHgCg");
	this.shape_862.setTransform(335.3,572.2);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#000000").s().p("AANAgIgCgBIgBgCIAAggQAAgGgDgDQgCgCgFAAQgDAAgDACQgDAEAAAFIAAAgIgBACIgCABIgRAAIgCgBIgBgCIAAg5IABgCIACgBIAPAAIADABIAAACIAAAGQAEgFAFgCQADgCAHgBQAIABAFACQAGAEADAGQADAGAAAJIAAAhIgBACIgCABg");
	this.shape_863.setTransform(327.8,572.1);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#000000").s().p("AgWAZQgJgIAAgQIAAgBQAAgPAJgJQAIgIAOAAQAKAAAIAEQAHAFAEAHQAEAHgBAJIAAADIgBACIgBABIgnAAIAAAAQABAGADAEQACADADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIADgCIADgCIACAAIAQAAIACABIABABQgBADgDAFQgDAEgIADQgHADgJAAQgOAAgIgIgAgGgPQgDADAAAGIAAABIATAAIAAgBQAAgGgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_864.setTransform(320,572.2);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#000000").s().p("AAMAsQgZAAAAgZIAAgVIgKAAIgCgBIgBgCIAAgLIABgCIACgBIAKAAIAAgVIABgCIACgBIAOAAIACABIABACIAAAVIAPAAIADABIAAACIAAALIAAACIgDABIgPAAIAAATQAAAEABADQACACAEAAIAJAAIADABIABACIAAAMIgBACIgDABg");
	this.shape_865.setTransform(313.2,571);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#000000").s().p("AAPAgQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIgLgQIgLAQIgCACIgCAAIgQAAIgCgBIgBgCIABgCIAVgbIgTgaIgBgCIABgCIACgBIAQAAIACABIACACIAJAPIALgPIAAgBIACgBIABgBIAQAAIACABIABACIgBACIgTAaIAVAbIABACIgBACIgCABg");
	this.shape_866.setTransform(306.6,572.2);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#000000").s().p("AgWAZQgJgIAAgQIAAgBQAAgPAJgJQAIgIAOAAQALAAAGAEQAIAFAEAHQADAHAAAJIAAADIgBACIgBABIgnAAIAAAAQABAGADAEQACADADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIADgCIADgCIACAAIAQAAIACABIABABQgBADgDAFQgDAEgIADQgHADgJAAQgOAAgIgIgAgGgPQgDADAAAGIAAABIATAAIAAgBQAAgGgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_867.setTransform(299.2,572.2);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#000000").s().p("AgTAfQgFgDgEgEQgDgFAAgFQAAgIAHgGQAIgDAMgDIANgCIAAgCQAAgEgBgCQgCgCgFAAIgCAAIgEADIgDADIgBAAIgOAAIgDAAIAAgDQAAgDADgEQADgEAHgDQAHgDAHAAQAQAAAHAGQAIAIAAALIAAAkIgBACIgCABIgQAAIgCgBIgBgCIAAgFQgCAEgFADQgDACgHAAQgHAAgFgCgAAAAFQgJACAAAFQAAADACABQADACADAAQAEABADgEQAEgEAAgGIAAgCg");
	this.shape_868.setTransform(288.9,572.2);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#000000").s().p("AgGAsIgDgBIgBgCIAAhRIABgCIADgBIANAAIADABIABACIAABRIgBACIgDABg");
	this.shape_869.setTransform(283.6,571);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#000000").s().p("AgWAZQgJgIAAgQIAAgBQAAgPAJgJQAIgIAOAAQALAAAGAEQAIAFAEAHQADAHAAAJIAAADIgBACIgBABIgnAAIAAAAQABAGADAEQACADADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIADgCIADgCIACAAIAQAAIACABIABABQgBADgDAFQgDAEgIADQgHADgJAAQgOAAgIgIgAgGgPQgDADAAAGIAAABIATAAIAAgBQAAgGgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_870.setTransform(278.1,572.2);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#000000").s().p("AgdAsIgCAAIgBgDIAAhQIABgCIACgBIAPAAIACABIABACIAAAEQAHgIAKAAQANAAAHAHQAGAIABAOIAAAEIAAAFQgBAMgGAHQgHAIgNAAQgKAAgGgIIAAAbIgBADIgCAAgAgHgXQgCAEgBAFIAAAFIAAAEQABAFACABQADAEAEAAQAFAAACgEQADgBAAgGIAAgEIAAgEQAAgFgDgEQgCgDgFAAQgEAAgDADg");
	this.shape_871.setTransform(270.4,573.3);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#000000").s().p("AgQAeQgHgCgDgFQgEgDAAgEIABgCIADgBIAPAAIABABIACABIAFADIADABIAFgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgEgCIgIgDQgWgFAAgNQAAgFADgFQAEgFAGgDQAHgCAIAAQAIAAAGACQAHAEAEAEQADADAAAEIgBACIgCAAIgNAAIgCAAIgDgCIgEgDIgDAAQgDAAgBACQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABADIAEACIAIADQANACAFADQAGAGAAAHQAAAJgJAGQgIAFgOAAQgJAAgHgDg");
	this.shape_872.setTransform(551.6,554);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#000000").s().p("AgXAaQgJgIAAgNIAAgFIAAgEQAAgNAKgIQAIgHAOAAQAOAAAKAHQAIAIABANIAAAEIAAAFQgBANgIAIQgJAHgPAAQgOAAgJgHgAgGgNQgCADgBAGIAAAEIAAAEQABAHACADQADADADABQAEgBADgDQADgDAAgHIAAgEIAAgEQAAgGgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_873.setTransform(544.3,554);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#000000").s().p("AgYAlQgIgIAAgOIAAgEIAAgFQAAgLAIgIQAHgIALAAQAKAAAGAHIAAgaIABgDIACAAIARAAIACAAIABADIAABQIgBACIgCABIgPAAIgCgBIgBgCIAAgEQgHAIgLAAQgLAAgHgHgAgGAAQgDABAAAGIAAAEIAAAEQAAAFADAEQACADAEAAQAFAAADgDQACgEAAgFIABgFIgBgEQAAgFgCgBQgDgEgFAAQgEAAgCAEg");
	this.shape_874.setTransform(536.3,552.9);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#000000").s().p("AgTAeQgFgCgEgFQgDgEAAgFQAAgIAHgGQAIgDAMgCIANgCIAAgDQAAgEgBgCQgCgCgFAAIgCAAIgEAEIgDABIgBABIgOAAIgDgBIAAgBQAAgEADgEQADgEAHgDQAHgDAHAAQAQAAAHAHQAIAGAAAMIAAAkIgBACIgCABIgQAAIgCgBIgBgCIAAgFQgCAEgFADQgDACgHAAQgHAAgFgDgAAAAEQgJACAAAGQAAADACABQADADADAAQAEAAADgEQAEgEAAgHIAAgBg");
	this.shape_875.setTransform(528.6,554);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#000000").s().p("AANAhIgCgBIgBgDIAAgfQAAgHgDgCQgCgEgFAAQgDAAgDAEQgDADAAAGIAAAfIgBADIgCABIgRAAIgCgBIgBgDIAAg4IABgCIACgCIAPAAIADACIAAACIAAAEQAEgEAFgCQADgDAHAAQAIAAAFAEQAGADADAGQADAHAAAIIAAAhIgBADIgCABg");
	this.shape_876.setTransform(521,554);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#000000").s().p("AgGAuIgDgBIgBgDIAAg4IABgCIADgCIANAAIACACIACACIAAA4IgCADIgCABgAgGgbIgDgBIgBgCIAAgLIABgCIADgCIANAAIACACIACACIAAALIgCACIgCABg");
	this.shape_877.setTransform(515.1,552.7);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#000000").s().p("AAfAhIgCgBIgBgDIAAggQAAgGgCgCQgDgEgEAAQgEAAgCAEQgDACAAAGIAAAgIAAADIgDABIgNAAIgCgBIgBgDIAAggQAAgGgDgCQgCgEgEAAQgEAAgDAEQgCACAAAFIAAAhIgBADIgCABIgQAAIgCgBIgBgDIAAg4IABgCIACgCIAPAAIACACIABACIAAAEQADgEAEgCQAFgDAGAAQAMAAAFALQADgEAFgDQAGgEAGAAQAKAAAHAHQAGAHAAAOIAAAhIgBADIgCABg");
	this.shape_878.setTransform(507.6,554);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#000000").s().p("AgUAgIgCgBIgBgCIAAg5IABgCIACgBIAQAAIACABIAAACIAAAFQACgEAFgCQAEgCAGAAIAGAAIACABIABACIAAAOIgBACIgCABIgMAAQgGAAgCACQgBAEAAAEIAAAeIgBACIgDABg");
	this.shape_879.setTransform(499.2,554);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#000000").s().p("AgWAZQgJgIAAgQIAAgCQAAgOAJgJQAIgIAOAAQAKAAAIAEQAHAFAEAHQAEAIgBAIIAAADIgBABIgBABIgnAAIAAABQABAGADADQACAEADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAIADgEIADgBIACgBIAQAAIACABIAAACQAAAEgDADQgDAFgIADQgHADgJAAQgOAAgIgIgAgGgPQgDADAAAHIAAAAIATAAIAAAAQAAgHgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_880.setTransform(492.4,554);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#000000").s().p("AAMAsQgZAAAAgZIAAgVIgKAAIgCgBIgBgCIAAgLIABgCIACgBIAKAAIAAgVIABgCIACgBIAOAAIACABIABACIAAAVIAPAAIADABIAAACIAAALIAAACIgDABIgPAAIAAATQAAAEABADQACACAEAAIAJAAIADABIABACIAAAMIgBACIgDABg");
	this.shape_881.setTransform(485.6,552.8);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#000000").s().p("AgXAZQgIgIgBgQIAAgCQABgOAJgJQAJgIANAAQAKAAAIAEQAHAFAEAHQAEAIgBAIIAAADIgBABIgCABIglAAIAAABQAAAGADADQACAEADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAIAEgEIACgBIABgBIARAAIACABIAAACQAAAEgDADQgEAFgGADQgIADgJAAQgNAAgKgIgAgGgPQgCADAAAHIAAAAIASAAIAAAAQgBgHgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_882.setTransform(479,554);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#000000").s().p("AgYAlQgIgIAAgOIAAgEIAAgFQAAgLAIgIQAGgIANAAQAIAAAIAHIAAgaIABgDIABAAIARAAIACAAIABADIAABQIgBACIgCABIgPAAIgCgBIgBgCIAAgEQgHAIgKAAQgNAAgGgHgAgGAAQgDABAAAGIAAAEIAAAEQAAAFADAEQACADAEAAQAFAAADgDQADgEAAgFIAAgFIAAgEQAAgFgEgBQgCgEgFAAQgEAAgCAEg");
	this.shape_883.setTransform(471.1,552.9);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#000000").s().p("AgXAaQgIgIgBgNIAAgFIAAgEQAAgNAKgIQAIgHAOAAQAPAAAIAHQAJAIABANIAAAEIAAAFQgBANgJAIQgIAHgPAAQgOAAgJgHgAgGgNQgCADgBAGIAAAEIAAAEQABAHACADQACADAEABQAFgBACgDQACgDABgHIAAgEIAAgEQgBgGgCgDQgCgDgFAAQgEAAgCADg");
	this.shape_884.setTransform(460.8,554);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#000000").s().p("AgTAsQgFgDgEgEQgDgFAAgFQAAgIAHgGQAIgFAMgCIANgCIAAgCQAAgDgBgCQgCgCgFAAIgCABIgEADIgDABIgBAAIgOAAIgDAAIAAgBQAAgEADgEQADgEAHgDQAHgDAHAAQAQAAAHAHQAIAHAAAJIAAAmIgBACIgCABIgQAAIgCgBIgBgCIAAgEQgCAEgFACQgDACgHAAQgHAAgFgCgAAAASQgJACAAAFQAAADACACQADACADAAQAEAAADgEQAEgEAAgGIAAgCgAAEgbIgEgCQgBgCgCAAIgCABIgCABIgBABIgBABIgIAAIgBgBIgBgBIABgHQACgEADgDQADgCAFAAIAFAAIACACIACACIADAAIACAAIABgCIABgBIACgBIAIAAIABABIABABIgCAHQgBAEgDADQgDADgFAAIgFgBg");
	this.shape_885.setTransform(453,552.7);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#000000").s().p("AgQAeQgHgCgDgFQgEgDAAgEIABgCIADgBIAPAAIABABIACABIAFADIADABIAFgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgEgCIgIgDQgWgFAAgNQAAgFADgFQAEgFAGgDQAHgCAIAAQAIAAAGACQAHAEAEAEQADADAAAEIgBACIgCAAIgNAAIgCAAIgDgCIgEgDIgDAAQgDAAgBACQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABADIAEACIAIADQANACAFADQAGAGAAAHQAAAJgJAGQgIAFgOAAQgJAAgHgDg");
	this.shape_886.setTransform(446,554);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#000000").s().p("AgXAaQgJgIAAgNIAAgFIAAgEQABgNAIgIQAJgHAOAAQAOAAAKAHQAIAIABANIAAAEIAAAFQgBANgIAIQgJAHgPAAQgPAAgIgHgAgGgNQgDADAAAGIAAAEIAAAEQAAAHADADQADADADABQAEgBADgDQADgDAAgHIAAgEIAAgEQAAgGgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_887.setTransform(436.1,554);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#000000").s().p("AgWAZQgJgHAAgOIAAgEIAAgEQAAgNAJgHQAJgIANAAQAKAAAHADQAIAEADAGQAEAFAAAEIgBADIgCABIgRAAIgCgBIgBgCQgCgEgCgBQgCgBgDAAQgIAAAAAMIAAADIAAAEQAAAGACADQADADADAAQADAAACgBQACgCACgDIABgCIACgBIARAAIACABIABADQAAADgDAGQgEAFgHAEQgIAEgKAAQgNAAgJgIg");
	this.shape_888.setTransform(428.6,554);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#000000").s().p("AgGAuIgDgBIgBgDIAAg4IABgCIADgCIANAAIADACIABACIAAA4IgBADIgDABgAgGgbIgDgBIgBgCIAAgLIABgCIADgCIANAAIADACIABACIAAALIgBACIgDABg");
	this.shape_889.setTransform(423,552.7);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#000000").s().p("AAMAsQgZAAAAgZIAAgVIgKAAIgCgBIgBgCIAAgLIABgCIACgBIAKAAIAAgVIABgCIACgBIAOAAIACABIABACIAAAVIAPAAIADABIAAACIAAALIAAACIgDABIgPAAIAAATQAAAEABADQACACAEAAIAJAAIADABIABACIAAAMIgBACIgDABg");
	this.shape_890.setTransform(418.1,552.8);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#000000").s().p("AgQAeQgHgCgDgFQgEgDAAgEIABgCIADgBIAPAAIABABIACABIAFADIADABIAFgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgEgCIgIgDQgWgFAAgNQAAgFADgFQAEgFAGgDQAHgCAIAAQAIAAAGACQAHAEAEAEQADADAAAEIgBACIgCAAIgNAAIgCAAIgDgCIgEgDIgDAAQgDAAgBACQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABADIAEACIAIADQANACAFADQAGAGAAAHQAAAJgJAGQgIAFgOAAQgJAAgHgDg");
	this.shape_891.setTransform(411.7,554);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#000000").s().p("AgTAsQgFgCgEgFQgDgEAAgFQAAgIAHgGQAIgFAMgCIANgCIAAgDQAAgCgBgCQgCgCgFAAIgCAAIgEAEIgDAAIgBAAIgOAAIgDAAIAAAAQAAgEADgEQADgEAHgDQAHgDAHAAQAQAAAHAHQAIAGAAAKIAAAmIgBACIgCABIgQAAIgCgBIgBgCIAAgFQgCAEgFADQgDACgHAAQgHAAgFgDgAAAASQgJACAAAGQAAADACABQADADADAAQAEAAADgEQAEgEAAgHIAAgBgAgFgaQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIABgCIAJgOIACgBIACgBIASAAIABABIABABIgBACIgQAOIgDABIgCABg");
	this.shape_892.setTransform(404.4,552.6);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#000000").s().p("AgGAsIgDgBIgBgCIAAhRIABgCIADgBIANAAIADABIABACIAABRIgBACIgDABg");
	this.shape_893.setTransform(399,552.8);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#000000").s().p("AgdAsIgCAAIgBgDIAAhQIABgCIACgBIAPAAIACABIABACIAAAEQAHgIAKAAQANAAAHAHQAGAIABAOIAAAEIAAAFQgBAMgGAHQgHAIgNAAQgKAAgGgIIAAAbIgBADIgCAAgAgHgXQgCAEgBAFIAAAFIAAAEQABAFACABQADAEAEAAQAFAAACgEQADgBAAgGIAAgEIAAgEQAAgFgDgEQgCgDgFAAQgEAAgDADg");
	this.shape_894.setTransform(393.3,555.1);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#000000").s().p("AgWAZQgJgIAAgQIAAgCQAAgOAJgJQAIgIAOAAQALAAAGAEQAIAFAEAHQADAIAAAIIAAADIAAABIgCABIgnAAIAAABQABAGADADQACAEADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAIADgEIADgBIACgBIAQAAIACABIABACQgBAEgDADQgDAFgIADQgHADgJAAQgOAAgIgIgAgGgPQgDADAAAHIAAAAIATAAIAAAAQAAgHgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_895.setTransform(382.9,554);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#000000").s().p("AgZAlQgGgIgBgOIAAgEIAAgFQABgLAGgIQAIgIALAAQAKAAAGAHIAAgaIACgDIACAAIAQAAIACAAIABADIAABQIgBACIgCABIgPAAIgCgBIgBgCIAAgEQgHAIgLAAQgLAAgIgHgAgHAAQgBABgBAGIAAAEIAAAEQABAFABAEQADADAEAAQAFAAADgDQACgEAAgFIABgFIgBgEQAAgFgDgBQgCgEgFAAQgEAAgDAEg");
	this.shape_896.setTransform(375.1,552.9);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#000000").s().p("AgQAeQgHgCgDgFQgEgDAAgEIABgCIADgBIAPAAIABABIACABIAFADIADABIAFgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgDIgEgCIgIgDQgWgFAAgNQAAgFADgFQAEgFAGgDQAHgCAIAAQAIAAAGACQAHAEAEAEQADADAAAEIgBACIgCAAIgNAAIgCAAIgDgCIgEgDIgDAAQgDAAgBACQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABIABADIAEACIAIADQANACAFADQAGAGAAAHQAAAJgJAGQgIAFgOAAQgJAAgHgDg");
	this.shape_897.setTransform(365.1,554);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#000000").s().p("AgXAaQgJgIAAgNIAAgFIAAgEQABgNAIgIQAJgHAOAAQAOAAAKAHQAIAIABANIAAAEIAAAFQgBANgIAIQgJAHgPAAQgPAAgIgHgAgGgNQgDADAAAGIAAAEIAAAEQAAAHADADQADADADABQAEgBADgDQACgDABgHIAAgEIAAgEQgBgGgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_898.setTransform(357.8,554);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#000000").s().p("AgdAsIgCAAIgBgDIAAhQIABgCIACgBIAPAAIACABIABACIAAAEQAHgIAKAAQANAAAHAHQAGAIABAOIAAAEIAAAFQgBAMgGAHQgHAIgNAAQgKAAgGgIIAAAbIgBADIgCAAgAgHgXQgCAEgBAFIAAAFIAAAEQABAFACABQADAEAEAAQAFAAACgEQADgBAAgGIAAgEIAAgEQAAgFgDgEQgCgDgFAAQgEAAgDADg");
	this.shape_899.setTransform(350,555.1);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#000000").s().p("AgGAuIgDgBIgBgDIAAg4IABgCIADgCIANAAIACACIACACIAAA4IgCADIgCABgAgGgbIgDgBIgBgCIAAgLIABgCIADgCIANAAIACACIACACIAAALIgCACIgCABg");
	this.shape_900.setTransform(344.1,552.7);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#000000").s().p("AAMAsQgZAAAAgZIAAgVIgKAAIgCgBIgBgCIAAgLIABgCIACgBIAKAAIAAgVIABgCIACgBIAOAAIACABIABACIAAAVIAPAAIADABIAAACIAAALIAAACIgDABIgPAAIAAATQAAAEABADQACACAEAAIAJAAIADABIABACIAAAMIgBACIgDABg");
	this.shape_901.setTransform(339.3,552.8);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#000000").s().p("AgQAeQgHgCgDgFQgEgDAAgEIABgCIADgBIAPAAIABABIACABIAFADIADABIAFgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgDIgEgCIgIgDQgWgFAAgNQAAgFADgFQAEgFAGgDQAHgCAIAAQAIAAAGACQAHAEAEAEQADADAAAEIgBACIgCAAIgNAAIgCAAIgDgCIgEgDIgDAAQgDAAgBACQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABIABADIAEACIAIADQANACAFADQAGAGAAAHQAAAJgJAGQgIAFgOAAQgJAAgHgDg");
	this.shape_902.setTransform(330.2,554);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#000000").s().p("AgWAZQgJgIAAgQIAAgCQAAgOAJgJQAIgIAOAAQALAAAGAEQAIAFAEAHQADAIAAAIIAAADIgBABIgBABIgnAAIAAABQABAGADADQACAEADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAIADgEIADgBIACgBIAQAAIACABIABACQgBAEgDADQgDAFgIADQgHADgJAAQgOAAgIgIgAgGgPQgDADAAAHIAAAAIATAAIAAAAQAAgHgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_903.setTransform(323.1,554);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#000000").s().p("AAMAsQgZAAAAgZIAAgVIgKAAIgCgBIgBgCIAAgLIABgCIACgBIAKAAIAAgVIABgCIACgBIAOAAIACABIABACIAAAVIAPAAIADABIAAACIAAALIAAACIgDABIgPAAIAAATQAAAEABADQACACAEAAIAJAAIADABIABACIAAAMIgBACIgDABg");
	this.shape_904.setTransform(316.3,552.8);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#000000").s().p("AANAhIgCgBIgBgDIAAgfQAAgHgDgCQgCgEgFAAQgDAAgDAEQgDADAAAGIAAAfIgBADIgCABIgRAAIgCgBIgBgDIAAg4IABgCIACgCIAPAAIADACIAAACIAAAEQAEgEAFgCQADgDAHAAQAIAAAFAEQAGADADAGQADAHAAAIIAAAhIgBADIgCABg");
	this.shape_905.setTransform(309.3,554);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#000000").s().p("AgWAZQgJgIAAgQIAAgCQAAgOAJgJQAIgIAOAAQAKAAAIAEQAHAFAEAHQAEAIgBAIIAAADIgBABIgBABIgnAAIAAABQABAGADADQACAEADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAIADgEIADgBIACgBIAQAAIACABIAAACQAAAEgDADQgDAFgIADQgHADgJAAQgOAAgIgIgAgGgPQgDADAAAHIAAAAIATAAIAAAAQAAgHgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_906.setTransform(301.6,554);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#000000").s().p("AgTAgIgDgBIgBgCIAAg5IABgCIADgBIAOAAIADABIABACIAAAFQABgEAFgCQAEgCAHAAIAFAAIACABIABACIAAAOIgBACIgCABIgMAAQgFAAgEACQAAAEAAAEIAAAeIgBACIgDABg");
	this.shape_907.setTransform(295.2,554);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#000000").s().p("AgXAZQgIgIgBgQIAAgCQABgOAJgJQAIgIAOAAQAKAAAIAEQAHAFAEAHQAEAIAAAIIAAADIgCABIgCABIglAAIAAABQAAAGACADQADAEADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAIAEgEIACgBIABgBIARAAIACABIAAACQABAEgEADQgEAFgGADQgIADgJAAQgNAAgKgIgAgGgPQgDADABAHIAAAAIASAAIAAAAQgBgHgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_908.setTransform(288.4,554);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#000000").s().p("AgJAuIgDgBIgBgCIAAgrIgJAAIgCgBIgBgCIAAgLIABgCIACgBIAJAAIAAgEQAAgMAIgGQAFgGANAAIAKAAIADABIAAACIAAALIAAACIgDABIgJAAQgEAAgBACQgCACAAAEIAAADIAPAAIACABIABACIAAALIgBACIgCABIgPAAIAAArIgBACIgCABg");
	this.shape_909.setTransform(281.9,552.6);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#000000").s().p("AgGAuIgDgBIgBgDIAAg4IABgCIADgCIANAAIADACIABACIAAA4IgBADIgDABgAgGgbIgDgBIgBgCIAAgLIABgCIADgCIANAAIADACIABACIAAALIgBACIgDABg");
	this.shape_910.setTransform(277.2,552.7);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#000000").s().p("AghArIgCgBIgBgCIAAhPIABgCIACgBIAhAAQAQAAAKAJQALAIAAARIAAAIIAAAJQgBAigkAAgAgNAZIANAAQAGAAADgEQAEgEAAgIIABgJIgBgIQAAgIgEgEQgEgDgGAAIgMAAg");
	this.shape_911.setTransform(271,552.9);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#000000").s().p("AgEBWQgEgBgCgCQgGgDgEgHQgEgGgCgIIgDgQIgCgRIABgFIABgGQAAgCADgDQAFgFAHADIAEADIAAAGQgEATAIASQAEAJACABQAAAAAAAAQAAAAAAgBQABAAAAgBQABAAAAgBIACgKIACgMIABgIIABgHQAAgNgJgHIgCgBIgDgCQgTgJgEgUQgDgNADgLQADgMAJgKIAKgHQALgIALAJQAFAEADAFQAEAGACAIQACAIABAIQAAAIgCAJQgCAIgDAHIgGgCIgEgCIgCgDIAAgIIAAgGIAAgKIgBgMIgCgKQgBgEgDgBQgCgBgEAEQgDAEgCAHQgCAHAAAHQAAAHACAHQACAHADAFQAEAHAFADIAKAFQAEADADAFQADAFABALQACALgCAKIgGAVIgEAHIgFAGIgFAEIgIABIgCAAIgEAAg");
	this.shape_912.setTransform(348.1,752.8);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#000000").s().p("AgCBSQgHgBgFgEQgFgEgDgGQgDgHgBgIQgCgIgBgJIgBgTIgBgQIAAgNIABgPIABgOIADgMQABgGAEgFQADgGAFgEQAEgEAGgCQAOgFAKANQADADABAFIADAIIAEATQABAJgBAJIAAAjIAAAkIgBAJIgDAJQgCAFgFAEQgGADgGACIgGAAIgFgBgAAAg/QgDABgCADIgDAFIgDAVIgCAXIAAAVQAAALACAKQABAJADAJQADAJADAEQACAEADgCQAEgBACgMIABgQIAAgRIAAgPIAAgPIABgQIAAgQIgBgIIgCgIQgBgDgEAAIgEgBIAAAAg");
	this.shape_913.setTransform(340.1,753.2);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#000000").s().p("AgBBTIgIgBIgIgDQgGgCgDgDQgCgEAAgHIAAggIABgfIABggIAAgiIAAgCIAAgDQACgKAJgBQAGgBAGAAIAKACQAHACAEAEQAFAEACAIIACANIABAOQACAOgBAOIgBAcIgBAPIgBARIgCAIIgDAIQgFAQgPAAIgCgBgAgFg7QgEADAAAEQgCAGABAGIABAdQABAMgBAPIgBAVIgBAVIAAAEIADABQADAAADgBQAGgDACgIIACgQIABgSIAAgRIABgVIAAgVIAAgIIgDgHQgCgFgFAAIAAAAQgCAAgDADg");
	this.shape_914.setTransform(332,753.2);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#000000").s().p("AACBNQgHgCgBgIQgCgJAAgJIgCgmIAAgkIABgTIACgTQAAgEADgGQADgEACAAQAFAAADAFIACAIIAAAHIgBAaIgBAZIAAALIgBAAIABAhIABAhQAAAHgFAAIgDgBg");
	this.shape_915.setTransform(326.4,753.2);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#000000").s().p("AgGBUQgJgCgFgHQgFgHgDgJIgCgIIgBgIQgBgZABgWQACgYAFgZIACgIIAEgIQADgJAJgEIAHgCQAEgBAFABQAEABAEADQAEACACAEIADAHIABAIIAAALIAAAKIgCAFIgCAEQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBABAAgBQgBAAgBAAIgEgBIgDgDIgCgFIAAgGIABgFIAAgEIAAgHIgCgHQgBgFgFgBIgBANIgCAOQgDAZAAAXQgBAZADAaIAAAEIACADQAAABABABQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAJgNABgRQAAgJgEgHIgJgQIAAgBIAAgBQAAAAADgCIAHgCIAGgBIAGAAQAFABADADQACACAAAFIAAARIgCASQAAALgDAMQgCAHgEAFQgCADgEACIgHADIgIABIgGgBg");
	this.shape_916.setTransform(320.7,752.7);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#000000").s().p("AAABnQgGgDgCgIQgCgJAAgJIgCgmIABgkIABgSIABgTQABgFACgFQADgFADAAQAFAAACAFIADAIIAAAHIgBAaIgBAXIAAANIgBAAIABAhIAAAhQAAAIgEAAIgEgBgAgBhGQgBgDAAgGIAAgDIAAgDIAAgHQABgDABgDIADgDIAEgCQAEADABAHQABAHgDAIQgCAGgCADQgDADgCAAQgBAAgBgEg");
	this.shape_917.setTransform(314.7,750.7);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#000000").s().p("AgcBUQgEgBgDgEQgHgHACgMQAEgfABgdQABgggBgfIAAgSQAKgDAIAAQAIABAJADQAPAGAIAMQAJAMACANQACANgEANQgEALgJAJIgCACIAAABQABAOAFAOQAGANAJAMIADAGQAAADgCACQgCADgEABQgEACgDgCQgFgEgDgDIgDgGIgDgHIgHgTIgGgUIgCgBIgDgBIgDABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIgEAKIgBAKQgCAPADAQQABAGgCADQgCADgEAAIgCABIgFgBgAgMhAIgBAdIgCAcQABADAFACIAJACIACAAIABAAQACgDABgGIABgOIAAgPIgBgLIgBgGIgCgFQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgDgBIgEAAIgFABg");
	this.shape_918.setTransform(308.6,753.3);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#000000").s().p("AgCBSQgHgBgFgEQgFgEgDgGQgDgHgBgIQgCgIgBgJIgBgTIgBgQIAAgNIABgPIABgOIADgMQABgGAEgFQADgGAFgEQAEgEAGgCQAOgFAKANQADADABAFIADAIIAEATQABAJgBAJIAAAjIAAAkIgBAJIgDAJQgCAFgFAEQgGADgGACIgGAAIgFgBgAAAg/QgDABgCADIgDAFIgDAVIgCAXIAAAVQAAALACAKQABAJADAJQADAJADAEQACAEADgCQAEgBACgMIABgQIAAgRIAAgPIAAgPIABgQIAAgQIgBgIIgCgIQgBgDgEAAIgEgBIAAAAg");
	this.shape_919.setTransform(299.6,753.2);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#000000").s().p("AgiBUQgDAAgDgDQgDgCgBgEQgCgHAAgIIAAgoIAAgnIABgYIAAgYIAAgGIABgFQABgDADgBQADgBADACIAGAEQASAUAFAZIAEASIABAOIADAKIACgKIACgKIABgLIACgJIAFgXIAEgXQACgIAIABQAHABADADQAEADABAFQADAJAAALIgBAxIgBAwIgBAKIAAAJIAAAEQAAAKgHABQgDABgDgCQgDgCgCgDQgCgGAAgFIAAgOIACgPIABgSQABgIgCgIIgCgGIgCgHIgCAAIgBAEQgFAQgCASQgCASgCATQAAAGgBACQgBACgEAAQgCABgEgCQgEgCgBgEIgBgHIAAgHIAAgFIAAgFIAAgCIgCgPIgEgTIgGgTIAAABIAAACIAAARIgBAaIgBAaIgBATQAAAHgGAAIgDAAg");
	this.shape_920.setTransform(289.8,753.2);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#000000").s().p("AgcBUQgEgBgDgEQgHgHACgMQAEgfABgdQABgggBgfIAAgSQAKgDAIAAQAIABAJADQAPAGAIAMQAJAMACANQACANgEANQgEALgJAJIgCACIAAABQABAOAFAOQAGANAJAMIADAGQAAADgCACQgCADgEABQgEACgDgCQgFgEgDgDIgDgGIgDgHIgHgTIgGgUIgCgBIgDgBIgDABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIgEAKIgBAKQgCAPADAQQABAGgCADQgCADgEAAIgCABIgFgBgAgMhAIgBAdIgCAcQABADAFACIAJACIACAAIABAAQACgDABgGIABgOIAAgPIgBgLIgBgGIgCgFQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgDgBIgEAAIgFABg");
	this.shape_921.setTransform(280,753.3);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#000000").s().p("AgCBTQgIgBgEgBQgDgBgCgDIgCgGIgBgGIAAgEIgBg1IgCgzIAAgNIAAgMIAAgGIACgFIADgCQAAgBAAAAQABAAAAAAQABAAABAAQAAABABAAIAIACIAIAAIAGAAIAGAAQAEAAAEACQADABACAEQACADgBADQgBACgEAAIgEAAIgEgBIgDgBIgDAAQgFAAgCACQAAACAAAFIAAAGIAAAFIAAAUIAAATIABAFIAEACIADAAIADAAIAHAAIADABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQABAEgDACIgEABIgEABIgCAAIgDAAQgDABgCACQgCADAAADIAAAWIAAAXIAKABIAHACIAFADIAEAFQAAAAAAABQAAAAAAAAQAAABgBAAQgBABgBAAIgMADIgIAAIgFAAg");
	this.shape_922.setTransform(272.5,753.3);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#000000").s().p("AgCBVQgGgCgEgHIgDgJIgBgKIAAgJIAAgIIACgxIABgzIAAgDIAAgCIgKgBQgDAAgCgBIgEgEIgCgFQABgGAHgBIAcgBIAJAAIAJABIAFABIAFADIAEADQABACgBAEIgNAAIgNADIAABKIAABMQgDACgEAAIgDAAg");
	this.shape_923.setTransform(265.4,752.9);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#000000").s().p("AgEBWQgEgBgCgCQgGgDgEgHQgEgGgCgIIgDgQIgCgRIABgFIABgGQAAgCADgDQAFgFAHADIAEADIAAAGQgEATAIASQAEAJACABQAAAAAAAAQAAAAAAgBQABAAAAgBQABAAAAgBIACgKIACgMIABgIIABgHQAAgNgJgHIgCgBIgDgCQgTgJgEgUQgDgNADgLQADgMAJgKIAKgHQALgIALAJQAFAEADAFQAEAGACAIQACAIABAIQAAAIgCAJQgCAIgDAHIgGgCIgEgCIgCgDIAAgIIAAgGIAAgKIgBgMIgCgKQgBgEgDgBQgCgBgEAEQgDAEgCAHQgCAHAAAHIACAOQACAHADAFQAEAHAFADIAKAFQAEADADAFQADAFABALQACALgCAKIgGAVIgEAHIgFAGIgFAEIgIABIgCAAIgEAAg");
	this.shape_924.setTransform(357.1,616.4);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#000000").s().p("AgCBSQgHgBgFgEQgFgEgDgGQgDgHgBgIQgCgIgBgJIgBgTIgBgQIAAgNIABgPIABgOIADgMQABgGAEgFQADgGAFgEQAEgEAGgCQAOgFAKANQADADABAFIADAIIAEATQABAJgBAJIAAAjIAAAkIgBAJIgDAJQgCAFgFAEQgGADgGACIgGAAIgFgBgAAAg/QgDABgCADIgDAFIgDAVIgCAXIAAAVQAAALACAKQABAJADAJQADAJADAEQACAEADgCQAEgBACgMIABgQIAAgRIAAgPIAAgPIABgQIAAgQIgBgIIgCgIQgBgDgEAAIgEgBIAAAAg");
	this.shape_925.setTransform(349,616.8);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#000000").s().p("AgCBSQgEAAgEgCQgEgCgDgDIgHgKQgDgFAAgHIABgeIACgcIAAgSIAAgSQAAgKAEgKQAEgMAJgFQAEgDADAAQAFgBAEABIAIAEQADADACAEQAEAHABAIIAAAQIgBADIgCADQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEACIgDgBQgDgEAAgFIgBgLQAAgKgDgBQAAgBgBAAQAAAAgBAAQAAAAgBABQgBAAAAABQgCACgBAGQgCAGAAAFIgBARQgBAIABAJIABAaIABAbIAAADIAAABIABABIAAADIAAADIABAEQAAAFAEgFQACgEAAgDIAAgHIABgFIAAgFIABgGIABgJIADgHQABgDAEAAIAHABIABAWQABALgBALQgBAHgDAFQgDAEgGAFQgDACgEABIgFABIgCAAg");
	this.shape_926.setTransform(341.4,616.6);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#000000").s().p("AACBOQgHgDgBgIQgCgJAAgKIgCgmQgBgQABgTIABgSIACgTQAAgGADgEQADgGACABQAFAAADAFIACAIIAAAHIgBAZIgBAaIAAALIgBAAIABAhIABAhQAAAHgFAAIgDAAg");
	this.shape_927.setTransform(336,616.8);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#000000").s().p("AgCBVQgGgCgEgHIgDgJIgBgKIAAgJIAAgIIACgxIABgzIAAgDIAAgCIgKgBQgDAAgCgBIgEgEIgCgFQABgGAHgBIAcgBIAJAAIAJABIAFABIAFADIAEADQABACgBAEIgNAAIgNADIAABKIAABMQgDACgEAAIgDAAg");
	this.shape_928.setTransform(331.1,616.5);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#000000").s().p("AgEBWQgEgBgCgCQgGgDgEgHQgEgGgCgIIgDgQIgCgRIABgFIABgGQAAgCADgDQAFgFAHADIAEADIAAAGQgEATAIASQAEAJACABQAAAAAAAAQAAAAAAgBQABAAAAgBQABAAAAgBIACgKIACgMIABgIIABgHQAAgNgJgHIgCgBIgDgCQgTgJgEgUQgDgNADgLQADgMAJgKIAKgHQALgIALAJQAFAEADAFQAEAGACAIQACAIABAIQAAAIgCAJQgCAIgDAHIgGgCIgEgCIgCgDIAAgIIAAgGIAAgKIgBgMIgCgKQgBgEgDgBQgCgBgEAEQgDAEgCAHQgCAHAAAHIACAOQACAHADAFQAEAHAFADIAKAFQAEADADAFQADAFABALQACALgCAKIgGAVIgEAHIgFAGIgFAEIgIABIgCAAIgEAAg");
	this.shape_929.setTransform(324,616.4);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#000000").s().p("AgcBoQgFgEAAgGIAAgFIAAgGQAEgZABgaQAAgZAEgXQABgQAFgMQAGgLAOgEQAKgBAFAEQAGAEADAGQACAFABAHIACALIgBATIAAANIABAQIACASIAAAcIABAbIAAACQgFAEgDgBQgEgBgCgGQgCgEgBgEIgBgIIAAgHIAAgHIgBgDIgBgDQgDgHgFgBQgFgBgDAFQgGAGgBAJIgCAKIgBAJIgCAHIgDAGQgCADgCAAIgCABQgCAAgDgDgAAAgkQgDACAAAJIAAAZIAAAAIAAAOIAAAOQAAAGADAAQAEABAEgDQADgEAAgFIABgGIAAgHIAAgNIgBgPQACgGgDgGQgCgFgDgCIgDgBIgCACgAgChJQgBgDABgGIAAgDIAAgDIAAgHQAAgDACgDIACgDIAEgCQAFADAAAHQACAHgEAIQgCAGgCADQgDADgCAAQgBAAgBgEg");
	this.shape_930.setTransform(316.5,614.6);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#000000").s().p("AAEBTIgHgBIgKgCIgCAAIgDgBIgJgEQgDgBAAgGIAAgOIABgPIACgzIACg1QAAgHACgFQADgHAGAEQAHAFACAIIABAMIABAMIAAArIAAAqQAAAJACAIQABAGADABIAMACIAJACQAIADgCAKIgNAAIgGAAIgHAAg");
	this.shape_931.setTransform(309.4,616.6);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#000000").s().p("AgbBQQgEgDgBgGQgBgEAAgGQAEgfAAgeQABgfgBgfIAAgJIgBgJQAKgDAIAAQAJAAAHADQAKAEAHAHQAHAGADAJQADAIAAAJQAAAJgCAJQgCAKgEAIQgEAGgGAGIgCACQgEACgEgBIgGgBIgDAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAABIAAAGIAAALIAAAQIgBAOIgCANQgCAFgCACIgHACQgCgBgEgEgAgHg+IAAAIIAAAIIAAAQIAAAQIABAFQAAADABADQABACADABQABAAAEAAIACAAIABgBIABgDQADgLAAgMQAAgKgCgLIgDgJQgBgEgEgBIgCAAIgGAAg");
	this.shape_932.setTransform(302.4,616.8);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#000000").s().p("AgCBSQgHgBgFgEQgFgEgDgGQgDgHgBgIQgCgIgBgJIgBgTIgBgQIAAgNIABgPIABgOIADgMQABgGAEgFQADgGAFgEQAEgEAGgCQAOgFAKANQADADABAFIADAIIAEATQABAJgBAJIAAAjIAAAkIgBAJIgDAJQgCAFgFAEQgGADgGACIgGAAIgFgBgAAAg/QgDABgCADIgDAFIgDAVIgCAXIAAAVQAAALACAKQABAJADAJQADAJADAEQACAEADgCQAEgBACgMIABgQIAAgRIAAgPIAAgPIABgQIAAgQIgBgIIgCgIQgBgDgEAAIgEgBIAAAAg");
	this.shape_933.setTransform(294.3,616.8);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#000000").s().p("AgiBUQgEAAgCgDQgDgCgBgEQgCgHAAgIIAAgoIAAgnIABgYIAAgYIAAgGIAAgFQACgDADgBQACgBAEACIAGAEQASAUAFAZIAEASIABAOIADAKIACgKIACgKIABgLIACgJIAFgXIAEgXQACgIAIABQAGABAFADQADADABAFQADAJAAALIgBAxIgBAwIgBAKIAAAJIAAAEQAAAKgHABQgDABgDgCQgDgCgCgDQgDgGABgFIAAgOIACgPIABgSQABgIgCgIIgCgGIgCgHIgCAAIgBAEQgFAQgCASQgCASgCATQABAGgCACQgBACgEAAQgCABgEgCQgEgCgBgEIgBgHIAAgHIAAgFIAAgFIAAgCIgCgPIgEgTIgFgTIAAABIAAACIgBARIgBAaIgBAaIgBATQAAAHgGAAIgDAAg");
	this.shape_934.setTransform(284.5,616.8);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#000000").s().p("AgcBUQgEgBgDgEQgHgHACgMQAEgfABgdQABgggBgfIAAgSQAKgDAIAAQAIABAJADQAPAGAIAMQAJAMACANQACANgEANQgEALgJAJIgCACIAAABQABAOAFAOQAGANAJAMIADAGQAAADgCACQgCADgEABQgEACgDgCQgFgEgDgDIgDgGIgDgHIgHgTIgGgUIgCgBIgDgBIgDABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIgEAKIgBAKQgCAPADAQQABAGgCADQgCADgEAAIgCABIgFgBgAgMhAIgBAdIgCAcQABADAFACIAJACIACAAIABAAQACgDABgGIABgOIAAgPIgBgLIgBgGIgCgFQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgDgBIgEAAIgFABg");
	this.shape_935.setTransform(274.7,616.9);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#000000").s().p("AgCBTQgIgBgEgBQgDgBgCgDIgCgGIgBgGIAAgEIgBg1IgCgzIAAgNIAAgMIAAgGIACgFIADgCQAAgBAAAAQABAAAAAAQABAAABAAQAAABABAAIAIACIAIAAIAGAAIAGAAQAEAAAEACQADABACAEQACADgBADQgBACgEAAIgEAAIgEgBIgDgBIgDAAQgFAAgCACQAAACAAAFIAAAGIAAAFIAAAUIAAATIABAFIAEACIADAAIADAAIAHAAIADABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABAEgDACIgEABIgEABIgCAAIgDAAQgDABgCACQgCADAAADIAAAWIAAAXIAKABIAHACIAFADIAEAFQAAAAAAABQAAAAAAAAQAAABgBAAQgBABgBAAIgMADIgIAAIgFAAg");
	this.shape_936.setTransform(267.2,616.9);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#000000").s().p("AgCBVQgGgCgEgHIgDgJIgBgKIAAgJIAAgIIACgxIABgzIAAgDIAAgCIgKgBQgDAAgCgBIgEgEIgCgFQABgGAHgBIAcgBIAJAAIAJABIAFABIAFADIAEADQABACgBAEIgNAAIgNADIAABKIAABMQgDACgEAAIgDAAg");
	this.shape_937.setTransform(260.1,616.5);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#000000").s().p("AgHAGQgEgEABgDQAAgEADgCQACgDADgBQACAAACACQADACABAEIABACIABABIADADQAAABAAAAQAAABAAAAQAAABgBABQAAAAgBABIgEACIgEACQgEgBgEgFg");
	this.shape_938.setTransform(424.1,162.9);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#000000").s().p("AgCBJQgGgBgEgDQgFgEgCgGQgDgGgBgHIgCgPIgCgQIAAgPIAAgLIAAgNIACgNIACgKIAEgKQADgFAEgEQAEgDAGgCQALgEAJALQADADABAEIADAHIADARQABAHgBAJIAAAeIAAAhIgBAHIgCAIQgCAFgFADQgFADgFABIgFAAIgFAAgAAAg3QgDABgBACIgDAFIgCATIgCAUIgBASIACATQABAIADAHQACAIADAEQABAEADgCQAEgBACgLIAAgOIAAgPIAAgNIABgNIAAgPIAAgNIgBgIIgBgHQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDAAIgBAAg");
	this.shape_939.setTransform(418.1,157);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#000000").s().p("AgCBJQgHAAgDgCQgDgBgBgCIgCgFIgBgGIAAgDIgBgvIgCgtIAAgLIAAgMIAAgEIACgFIADgCIADAAQADACAEAAIAHAAIAFAAIAGAAQADAAADACQADABACADQACADgBACQgBACgEAAIgDAAIgEAAIgCgBIgCAAQgFgBgCACQAAACAAAEIAAAFIAAAFIAAASIAAARIABAEIAEACIACAAIADAAIAGAAIADABIABACQABAEgDABIgEABIgDABIgDAAIgCAAQgDABgBACIgCAFIAAAUIAAAUIAJABIAGABIAEADIAEAFQAAAAAAABQAAAAAAAAQAAABgBAAQgBABgBAAIgKACIgHAAIgFAAg");
	this.shape_940.setTransform(412,157.1);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#000000").s().p("AAQBJIgMAAIgGgBIgJgBIgCAAIgDgBIgHgDQgDgCAAgFIAAgNIABgMIABgtIACgwQAAgFACgFQADgGAFAEQAHAEABAHIABAKIABALIAAAmIAAAlQAAAIACAHQAAAGADABIALACIAHABQAIACgCAJIgLAAg");
	this.shape_941.setTransform(406.2,156.8);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#000000").s().p("AgCBcQgGgBgEgDQgFgEgCgGQgDgGgBgHIgCgPIgCgQIAAgPIAAgNIAAgLIACgNIACgKIAEgKQADgFAEgEQAEgDAGgCQALgEAJALQADADABAEIADAHIADARQABAHgBAHIAAAgIAAAhIgBAHIgCAIQgCAFgFADQgFADgFABIgFABIgFgBgAAAgkQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAIgDAFIgCATIgCASIgBAUIACATQABAIADAHQACAIADAEQABAEADgCQAEgBACgLIAAgOIAAgPIAAgNIABgPIAAgNIAAgNIgBgIIgBgHQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBgBIgDAAIgBAAgAgJg/IgBgIIABgDIAAgDIgBgGIAEgFIADgCIADgCQACADABAGQABAGgDAHIgCAIQgCACgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBgBgBg");
	this.shape_942.setTransform(399.8,155.1);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#000000").s().p("AgYBKQgEgBgCgDQgGgHABgKQAEgcABgZIAAg4IAAgQQAJgCAHAAQAHAAAHADQAOAGAHAKQAIAKABAMQACAMgDAMQgEAJgHAIIgCACQAAANAFAMQAFALAIALQADAEAAACIgCAEQgCADgDABQgEABgDgCQgEgDgCgDIgDgFIgDgGIgGgRIgFgSIgCgBIgCAAIgDAAIgBABIgDAJIgCAJQgBAOADAOQAAAEgCADQgCADgDAAIgCABIgEgBgAgKg5IgBAaIgBAZQABACAEADIAIABIABAAIABAAQACgCABgGIABgNIgBgNIAAgKIgBgFIgCgEQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgCgBIgEAAIgEAAg");
	this.shape_943.setTransform(392.3,157.1);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#000000").s().p("AgCBLQgFgCgDgFQgCgEgBgFIgBgIIAAgIIABgIIAAgrIABgtIAAgCIAAgCIgIgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQABgFAGgBIAZgBIAIAAIAIABIAEABIAFADIADACQABACgBADIgLABIgMACIABBCIAABDQgEABgDAAIgDAAg");
	this.shape_944.setTransform(385.4,156.7);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#000000").s().p("AgCBJQgHAAgDgCQgDgBgBgCIgCgFIgBgGIAAgDIgBgvIgCgtIAAgLIAAgMIAAgEIACgFIADgCIADAAQADACAEAAIAHAAIAFAAIAGAAQADAAADACQADABACADQACADgBACQgBACgEAAIgDAAIgEAAIgCgBIgCAAQgFgBgCACQAAACAAAEIAAAFIAAAFIAAASIAAARIABAEIAEACIACAAIADAAIAGAAIADABIABACQABAEgDABIgEABIgDABIgDAAIgCAAQgDABgBACIgCAFIAAAUIAAAUIAJABIAGABIAEADIAEAFQAAAAAAABQAAAAAAAAQAAABgBAAQgBABgBAAIgKACIgHAAIgFAAg");
	this.shape_945.setTransform(379.7,157.1);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#000000").s().p("AgXBHQgEgDgBgFQgBgEAAgEQADgcABgbQABgbgCgcIAAgHIAAgIQAIgEAIABQAHAAAGADQAKADAGAGQAGAGADAHQACAIAAAIQABAIgCAIQgCAIgEAHQgEAFgFAGIgCACQgDABgDAAIgGgCIgCAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAABIgBAFIAAALIAAANIgBANIgCALQgBAEgCACIgGACQgCgBgDgDgAgGg2IAAAHIAAAGIAAAPIAAAOIABAFIABAFIADACQABAAAEAAIABAAIABAAIABgEQACgJABgKQAAgKgCgJIgCgIQgBgEgEAAIgDgBIgEABg");
	this.shape_946.setTransform(373.6,157);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#000000").s().p("AgCBJQgGgBgEgDQgFgEgCgGQgDgGgBgHIgCgPIgCgQIAAgPIAAgLIAAgNIACgNIACgKIAEgKQADgFAEgEQAEgDAGgCQALgEAJALQADADABAEIADAHIADARQABAHgBAJIAAAeIAAAhIgBAHIgCAIQgCAFgFADQgFADgFABIgFAAIgFAAgAAAg3QgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABIgDAFIgCATIgCAUIgBASIACATQABAIADAHQACAIADAEQABAEADgCQAEgBACgLIAAgOIAAgPIAAgNIABgNIAAgPIAAgNIgBgIIgBgHQgBgCgDgBIgDAAIgBAAg");
	this.shape_947.setTransform(362.8,157);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#000000").s().p("AgBBKIgHgCIgHgCQgFgCgDgDQgCgEAAgGIABgbIAAgcIABgcIAAgeIAAgCIAAgCQABgKAJgBIALAAIAIABQAGACAEAEQAEADACAHIACAMIABAMQABANAAAMIgBAYIgBAOIgCAPIgBAHIgCAHQgFAOgNAAIgCAAgAgFg0QgDACAAAEQgBAFAAAFIACAaIgBAYIgBATIgBATIAAACIADABIAFAAQAFgDACgHIACgOIABgQIAAgPIABgSIAAgTIAAgHQgBgDgCgDQgCgFgEAAIAAAAQgCAAgDADg");
	this.shape_948.setTransform(355.7,157);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#000000").s().p("AgYBKQgEgBgCgDQgGgHABgKQAEgcABgZIAAg4IAAgQQAJgCAHAAQAHAAAHADQAOAGAHAKQAIAKABAMQACAMgDAMQgEAJgHAIIgCACQAAANAFAMQAFALAIALQADAEAAACIgCAEQgCADgDABQgEABgDgCQgEgDgCgDIgDgFIgDgGIgGgRIgFgSIgCgBIgCAAIgDAAIgBABIgDAJIgCAJQgBAOADAOQAAAEgCADQgCADgDAAIgCABIgEgBgAgKg5IgBAaIgBAZQABACAEADIAIABIABAAIABAAQACgCABgGIABgNIgBgNIAAgKIgBgFIgCgEQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgCgBIgEAAIgEAAg");
	this.shape_949.setTransform(345,157.1);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#000000").s().p("AACBFQgGgCgBgHIgDgRIgBghIAAgfIABgRIABgQQABgFADgEQACgFACAAQAEABACAEQACADAAAEIABAGIgBAXIgBAXIAAAJIgBAAIABAdIAAAdQAAAGgEAAIgCAAg");
	this.shape_950.setTransform(339.2,157);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#000000").s().p("AgCBLQgFgCgDgFQgDgEAAgFIgBgIIAAgIIABgIIAAgrIABgtIAAgCIAAgCIgIgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQABgFAGgBIAZgBIAIAAIAIABIAEABIAFADIADACQABACgBADIgLABIgMACIAABCIAABDQgDABgDAAIgDAAg");
	this.shape_951.setTransform(334.9,156.7);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#000000").s().p("AgYBKQgEgBgCgDQgGgHABgKQAEgcABgZIAAg4IAAgQQAJgCAHAAQAHAAAHADQAOAGAHAKQAIAKABAMQACAMgDAMQgEAJgHAIIgCACQAAANAFAMQAFALAIALQADAEAAACIgCAEQgCADgDABQgEABgDgCQgEgDgCgDIgDgFIgDgGIgGgRIgFgSIgCgBIgCAAIgDAAIgBABIgDAJIgCAJQgBAOADAOQAAAEgCADQgCADgDAAIgCABIgEgBgAgKg5IgBAaIgBAZQABACAEADIAIABIABAAIABAAQACgCABgGIABgNIgBgNIAAgKIgBgFIgCgEQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgCgBIgEAAIgEAAg");
	this.shape_952.setTransform(327.8,157.1);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#000000").s().p("AgZBHQgEgDAAgGIAAgEIAAgFQADgXABgWQABgUADgXQABgOAFgKQAFgKAMgEQAIAAAGADQAFAEACAFQACAFABAFIABAKIAAARIAAANIABAMIAAAQIABAZIAAAYIABACQgFADgCgBQgDgBgCgFIgDgHIAAgHIgBgGIgBgGIAAgDIgBgDQgDgGgEgBQgEgBgCAFQgGAFgBAIIgBAJIgBAIIgCAGIgDAFQgCADgCAAIgBABQgCAAgDgDgAAAg1QgCACgBAJIAAAXIAAAAIAAANIAAAKQABAGACAAQADAAAEgDQACgDABgEIAAgEIAAgGIAAgNIAAgNQABgGgCgFQgCgFgDgBIgCgBIgCABg");
	this.shape_953.setTransform(320.3,157.1);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#000000").s().p("AgXBHQgEgDgBgFQgBgEAAgEQADgcABgbQABgbgCgcIAAgHIAAgIQAIgEAIABQAHAAAGADQAKADAGAGQAGAGADAHQACAIAAAIQABAIgCAIQgCAIgEAHQgEAFgFAGIgCACQgDABgDAAIgGgCIgCAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAABIgBAFIAAALIAAANIgBANIgCALQgBAEgCACIgGACQgCgBgDgDgAgGg2IAAAHIAAAGIAAAPIAAAOIABAFIABAFIADACQABAAAEAAIABAAIABAAIABgEQACgJABgKQAAgKgCgJIgCgIQgBgEgEAAIgDgBIgEABg");
	this.shape_954.setTransform(313.8,157);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#000000").s().p("AgZBHQgEgDAAgGIAAgEIAAgFQADgXABgWQABgUADgXQABgOAEgKQAGgKAMgEQAIAAAGADQAEAEADAFQACAFABAFIABAKIgBARIAAANIABAMIABAQIABAZIAAAYIABACQgEADgDgBQgDgBgDgFIgCgHIAAgHIgBgGIAAgGIgBgDIgBgDQgCgGgFgBQgEgBgCAFQgGAFgCAIIAAAJIgBAIIgCAGIgDAFQgBADgDAAIgBABQgCAAgDgDgAAAg1QgCACgBAJIAAAXIABAAIAAANIAAAKQAAAGACAAQADAAAEgDQACgDABgEIAAgEIAAgGIAAgNIAAgNQABgGgCgFQgCgFgDgBIgCgBIgCABg");
	this.shape_955.setTransform(303.4,157.1);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#000000").s().p("AgCBJQgGgBgEgDQgFgEgCgGQgDgGgBgHIgCgPIgCgQIAAgPIAAgLIAAgNIACgNIACgKIAEgKQADgFAEgEQAEgDAGgCQALgEAJALQADADABAEIADAHIADARQABAHgBAJIAAAeIAAAhIgBAHIgCAIQgCAFgFADQgFADgFABIgFAAIgFAAgAAAg3QgDABgBACIgDAFIgCATIgCAUIgBASIACATQABAIADAHQACAIADAEQABAEADgCQAEgBACgLIAAgOIAAgPIAAgNIABgNIAAgPIAAgNIgBgIIgBgHQgBgCgDgBIgDAAIgBAAg");
	this.shape_956.setTransform(292.5,157);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#000000").s().p("AgCBLQgFgCgDgFQgCgEgBgFIgBgIIAAgIIAAgIIABgrIABgtIAAgCIAAgCIgIgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQABgFAGgBIAZgBIAIAAIAIABIAEABIAFADIADACQABACgBADIgLABIgMACIABBCIAABDQgEABgDAAIgDAAg");
	this.shape_957.setTransform(286,156.7);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#000000").s().p("AABBFQgFgCgBgHIgCgRIgCghIABgfIABgRIABgQQAAgFACgEQADgFACAAQAEABADAEQACADAAAEIAAAGIgBAXIgBAXIAAAJIAAAAIAAAdIAAAdQAAAGgEAAIgDAAg");
	this.shape_958.setTransform(281.1,157);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#000000").s().p("AgCBJQgHAAgDgCQgDgBgBgCIgCgFIgBgGIAAgDIgBgvIgCgtIAAgLIAAgMIAAgEIACgFIADgCIADAAQADACAEAAIAHAAIAFAAIAGAAQADAAADACQADABACADQACADgBACQgBACgEAAIgDAAIgEAAIgCgBIgCAAQgFgBgCACQAAACAAAEIAAAFIAAAFIAAASIAAARIABAEIAEACIACAAIADAAIAGAAIADABIABACQABAEgDABIgEABIgDABIgDAAIgCAAQgDABgBACIgCAFIAAAUIAAAUIAJABIAGABIAEADIAEAFQAAAAAAABQAAAAAAAAQAAABgBAAQgBABgBAAIgKACIgHAAIgFAAg");
	this.shape_959.setTransform(277.1,157.1);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#000000").s().p("AgPBJIgCgDIgCgGIgBgHIAAgCIAAgCIAAg3IAAg6QAAgGABgCQACgDAFgBQARgFAQAOIAAABIgBABIgFAAIgEAAQgNACgDAPIgBALIAAAMIACAHQABAHAEAAQAIABAFAGQADADgEADIgDABIgDABIgCAAIgCAAQgDABgCADQgDACAAAGIgBAEIAAAEIABAQIAAAPIgBAKIgCADIgDACIgBAAIgDgBg");
	this.shape_960.setTransform(271.9,157);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#000000").s().p("AgCBdQgHAAgDgBQgDgBgBgDIgCgFIgBgFIAAgEIgBgvIgCgtIAAgLIAAgLIAAgFIACgEIADgDIADABQADABAEABIAHAAIAFAAIAGAAQADAAADABQADABACAEQACACgBADQgBACgEAAIgDAAIgEgBIgCgBIgCAAQgFAAgCACQAAABAAAFIAAAFIAAAFIAAARIAAAPIABAEIAEACIACABIADAAIAGABIADABIABADQABAEgDABIgEABIgDAAIgDABIgCAAQgDABgBACIgCAFIAAATIAAAUIAJABIAGACIAEADIAEAEQAAABAAAAQAAAAAAABQAAAAgBABQgBAAgBAAIgKACIgHABIgFgBgAgThAQgBgDAAgFIAAgDIAAgDIAAgGQABgCACgDIADgCIAEgCQAEADAAAGQABAGgCAHQgCAFgDACQgCADgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_961.setTransform(263.1,155);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#000000").s().p("AgCBJQgGgBgEgDQgFgEgCgGQgDgGgBgHIgCgPIgCgQIAAgPIAAgLIAAgNIACgNIACgKIAEgKQADgFAEgEQAEgDAGgCQALgEAJALQADADABAEIADAHIADARQABAHgBAJIAAAeIAAAhIgBAHIgCAIQgCAFgFADQgFADgFABIgFAAIgFAAgAAAg3QgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABIgDAFIgCATIgCAUIgBASIACATQABAIADAHQACAIADAEQABAEADgCQAEgBACgLIAAgOIAAgPIAAgNIABgNIAAgPIAAgNIgBgIIgBgHQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDAAIgBAAg");
	this.shape_962.setTransform(252.6,157);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#000000").s().p("AgJBHQgDgCgDgDIgGgJQgCgEAAgGIABgbIABgYIAAgQIAAgQQAAgJADgJQAEgKAJgFIAFgCQAEgBAEABIAHADQADADACADQADAHABAHQABAGgBAIIgBACIgCADIgDACIgEABIgDgBQgCgCAAgGIgBgJQAAgIgCgCQgBAAAAgBQgBAAAAAAQgBAAAAABQgBAAAAABQgCACAAAFIgCAKIgBAPIAAAPIABAWIAAAZIABACIAAABIAAABIAAADIABADIAAADQAAAFADgFIACgGIABgGIAAgEIAAgFIABgGIABgHIACgHQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAGAAIABAUQABAKgBAJQgBAHgDAEQgCAEgFAEQgDACgEABIgFABIgIgCg");
	this.shape_963.setTransform(245.9,156.8);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#000000").s().p("AABBFQgFgCgCgHIgBgRIgCghIABgfIABgRIABgQQAAgFACgEQADgFACAAQAEABADAEQABADAAAEIABAGIgBAXIgBAXIAAAJIAAAAIAAAdIAAAdQAAAGgEAAIgDAAg");
	this.shape_964.setTransform(241.1,157);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#000000").s().p("AgBBLQgGgCgDgFQgDgEAAgFIgBgIIAAgIIAAgIIACgrIABgtIAAgCIAAgCIgJgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgFAGgBIAZgBIAIAAIAIABIAFABIAEADIADACQABACgBADIgLABIgMACIAABCIAABDQgDABgDAAIgCAAg");
	this.shape_965.setTransform(236.8,156.7);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#000000").s().p("AgDBLIgGgBQgFgEgEgFQgDgGgCgHQgCgHgBgHIgBgPIAAgFIABgFIADgEQAEgFAGADIAEACQABACgBADQgEASAIAQQADAHACABQAAAAAAAAQAAAAAAAAQABAAAAgBQAAgBAAAAIACgJIACgLIABgGIAAgHQABgLgIgHIgCgBIgCgBQgRgIgEgSQgCgLACgKQADgKAIgJIAJgHQAJgGAKAIQAEADADAEQADAGACAGQADAHAAAIQAAAHgCAIQgBAHgEAGIgFgCIgDgBIgCgDIAAgHIAAgFIAAgKIAAgKIgCgJQgBgEgDAAQgCgBgDAEQgDADgBAGQgCAGAAAGQAAAHABAGIAFAKQADAHAFADIAIADIAHAIQACAEACAKQABAJgCAKIgFASIgDAGIgFAGQgBACgEABIgHABIgEgBg");
	this.shape_966.setTransform(230.6,156.6);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#000000").s().p("AgZBbQgDgDgBgFIAAgFIAAgEQADgXABgXQABgWADgUQAAgPAFgKQAGgKAMgDQAJgBAEAEQAFADADAFQADAFAAAGIABAKIgBAQIAAAMIABAOIABAQQACAMgBAMQgBAMACANIAAABQgEADgDAAQgDgBgDgFIgCgHIAAgIIgBgGIAAgGIgBgDIgBgCQgCgGgFgBQgFgBgBAEQgGAGgCAIIgBAIIAAAJIgCAFIgDAFQgBADgDABIgBAAQgCAAgDgDgAAAggQgDACAAAIIAAAWIABAAIAAAMIAAANQAAAFACAAQAEABADgDQACgDABgFIAAgGIAAgFIAAgMIAAgNQABgGgCgEQgCgFgDgCIgCAAIgCABgAgBhAQgCgEABgEIAAgDIAAgDIAAgGQAAgDACgCIACgDIAEgBQADACABAGQABAHgDAHQgCAEgCADQgCADgCAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_967.setTransform(223.9,155.1);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#000000").s().p("AAQBJIgMAAIgGgBIgJgBIgCAAIgDgBIgHgDQgDgCAAgFIAAgNIABgMIABgtIACgwQAAgFACgFQADgGAFAEQAHAEABAHIABAKIABALIAAAmIAAAlQAAAIACAHQAAAGADABIALACIAHABQAIACgCAJIgLAAg");
	this.shape_968.setTransform(217.7,156.8);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#000000").s().p("AgXBHQgEgDgBgFQgBgEAAgEQADgcABgbQABgbgCgcIAAgHIAAgIQAIgEAIABQAHAAAGADQAKADAGAGQAGAGADAHQACAIAAAIQABAIgCAIQgCAIgEAHQgEAFgFAGIgCACQgDABgDAAIgGgCIgCAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAABIgBAFIAAALIAAANIgBANIgCALQgBAEgCACIgGACQgCgBgDgDgAgGg2IAAAHIAAAGIAAAPIAAAOIABAFIABAFIADACQABAAAEAAIABAAIABAAIABgEQACgJABgKQAAgKgCgJIgCgIQgBgEgEAAIgDgBIgEABg");
	this.shape_969.setTransform(211.5,157);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#000000").s().p("AgCBJQgGgBgEgDQgFgEgCgGQgDgGgBgHIgCgPIgCgQIAAgPIAAgLIAAgNIACgNIACgKIAEgKQADgFAEgEQAEgDAGgCQALgEAJALQADADABAEIADAHIADARQABAHgBAJIAAAeIAAAhIgBAHIgCAIQgCAFgFADQgFADgFABIgFAAIgFAAgAAAg3QgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABIgDAFIgCATIgCAUIgBASIACATQABAIADAHQACAIADAEQABAEADgCQAEgBACgLIAAgOIAAgPIAAgNIABgNIAAgPIAAgNIgBgIIgBgHQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDAAIgBAAg");
	this.shape_970.setTransform(200.7,157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255}]}).wait(127));

	// Layer 33
	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#EFA455").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAGAAAFAFQAFAFAAAFQAAAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_971.setTransform(400.4,273);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#EFA455").s().p("AgJAKQgDgDAAgFIAAgCIAAgBQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFIAAABIAAACQAAAFgEADQgEADgFAAQgFAAgEgDgAgBgEIgCADIAAABIAAACIACADIABABIADgBIABgDIAAgCIAAgBIgBgDIgDgBIgBABg");
	this.shape_972.setTransform(389.5,293.5);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#EFA455").s().p("AgIAKQgDgEAAgGIAAAAQAAgFADgEQAEgDAEAAQAEAAADABIAEAGQABACABADIAAABIAAABIgBAAIgOAAIABAEIABABIACgBIABgBIABAAIABAAIAGAAIABAAIAAAAIgBAEQgCACgDABQgDABgDAAQgEAAgEgDgAgBgFIgBADIAAABIAGAAIAAgBIgBgDQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAg");
	this.shape_973.setTransform(386.4,293.5);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#EFA455").s().p("AgCARIgBAAIAAgBIAAgfIAAgBIABAAIAFAAIABAAIAAABIAAAfIAAABIgBAAg");
	this.shape_974.setTransform(384.2,293);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#EFA455").s().p("AgIAPQgDgCgBgGIAAgCIAAgCQABgEADgCQAEgDAEAAQAFAAAEADQAEACgBAEIABACIgBACQABAGgEACQgEADgFABQgFgBgDgDgAgBAAIgCADIAAACIAAACIACAEIABABIACgBIABgEIAAgCIAAgCIgBgDIgCAAIgBAAgAABgKIgCAAIgCgBIAAAAIADgGIABgBIABAAIAHAAIAAAAIABABIgBABIgGAFIgBABIgBAAg");
	this.shape_975.setTransform(382,292.9);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#EFA455").s().p("AgHANIgBgBIAAAAIAAgWIAAgBIABgBIAGAAIABABIAAABIAAABIACgCIAEgBIACAAIABABIAAAAIAAAGIAAABIgBAAIgFAAIgDABIAAADIAAAMIAAAAIgBABg");
	this.shape_976.setTransform(379.4,293.5);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#EFA455").s().p("AAEARQgIAAAAgKIAAgHIgEAAIgBAAIAAgBIAAgFIAAAAIABgBIAEAAIAAgIIAAgBIABAAIAFAAIAAAAIAAABIAAAIIAHAAIABABIAAAAIAAAFIAAABIgBAAIgHAAIAAAHIABACIACABIAEAAIABAAIABABIAAAFIgBABIgBAAg");
	this.shape_977.setTransform(376.9,293);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#EFA455").s().p("AgIAKQgEgEABgGIAAAAQAAgFADgEQAEgDAEAAQAEAAADABIAEAGQABACABADIAAABIAAABIgBAAIgOAAIAAAEIACABIACgBIABgBIABAAIABAAIAGAAIABAAIAAAAIgBAEQgCACgDABQgDABgDAAQgEAAgEgDgAgCgFIAAADIAAABIAGAAIAAgBIgBgDQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABgBAAg");
	this.shape_978.setTransform(374.3,293.5);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#EFA455").s().p("AgLASIgBgBIAAgBIAAgfIAAAAIABgBIAGAAIABABIAAAAIAAACQADgDADAAQAFAAACADQADADAAAFIABACIgBACQAAADgDADQgCADgFABQgDAAgCgEIAAALIgBABIgBABgAgCgIIgBAEIAAABIAAACIABACIACABQAAAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAIABgCIAAgBIAAgBIgBgEQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_979.setTransform(371.3,293.9);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#EFA455").s().p("AgJAKQgDgDAAgFIAAgCIAAgBQABgFADgDQAEgDAEAAQAGAAADADQADADABAFIAAABIAAACQgBAFgDADQgDADgGAAQgFAAgEgDgAgBgEIgCADIAAABIAAACIACADIABABIADgBIABgDIAAgCIAAgBIgBgDIgDgBIgBABg");
	this.shape_980.setTransform(367.1,293.5);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#EFA455").s().p("AgJAOQgDgCAAgHIAAgBIAAgCQAAgDADgDQADgDAFAAQACAAADADIAAgLIAAgBIABAAIAHAAIABAAIAAABIAAAfIAAAAIgBABIgGAAIgBgBIAAAAIAAgCQgEAEgCAAQgFgBgDgDgAgBAAIgCADIAAABIAAABIACAEQAAAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBIAAgBIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgDgBQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_981.setTransform(363.9,293);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#EFA455").s().p("AAHAWQgDgDAAgEIAAgDIAAgDQAAgFACgCQAEgCAFAAQAEAAADACQADACAAAFIAAADIAAADQAAAEgDADQgDACgEAAQgFAAgDgCgAAMAGIAAADIAAADIAAACIAAADIADABIABgBIABgDIAAgCIAAgDIgBgDIgBgBIgDABgAgTAYIgBgBIgBgBIABAAIAggsIABAAIACgBIAFAAIABABIABAAIgBABIggArIgBABIgCABgAgVgBQgDgCgBgEIAAgEIAAgDQABgEADgDQACgDAGABQAFgBACADQADADAAAEIABADIgBAEQAAAEgDACQgDABgEAAQgGAAgCgBgAgRgNIAAACIAAADIABADIADABIACgBIABgDIAAgDIAAgCIgBgDIgCgBQgBAAgBAAQAAAAgBABQAAAAAAABQgBABAAABg");
	this.shape_982.setTransform(388.1,284);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#EFA455").s().p("AgKAWQgEgCgDgDQgCgDAAgFIAAgBIABAAIAKAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAIACAEQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAAAQACAAACgCQACgCAAgDQAAgDgCgCQgCgCgCAAIgBAAIgCACIgCAAIgKAAIgBAAIgBgBIADgWIABgCIABgBIAbAAIABABIABACIAAAGIgBABIgBABIgTAAIAAAIIADgBIAEgBQAEAAAEACQAEACADADQACADAAAEQAAAFgDAEQgCAEgFACQgEACgGABQgFgBgFgCg");
	this.shape_983.setTransform(383,284.1);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#EFA455").s().p("AgKAFIgBAAIAAgCIAAgFIAAgBIABAAIAUAAIACAAIAAABIAAAFIAAABIgCABg");
	this.shape_984.setTransform(377.6,284.4);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#EFA455").s().p("AAHAWQgDgDgBgEIAAgDIAAgDQABgFADgCQACgCAGAAQAFAAACACQADACAAAFIABADIgBADQAAAEgDADQgDACgEAAQgGAAgCgCgAAMAGIgBADIAAADIAAACIABADIADABIACgBIABgDIAAgCIAAgDIgBgDIgCgBIgDABgAgTAYIgCgBIAAgBIAAAAIAhgsIABAAIACgBIAFAAIABABIAAAAIAAABIghArIgBABIgBABgAgWgBQgCgCgBgEIAAgEIAAgDQABgEACgDQAEgDAEABQAFgBADADQADADAAAEIAAADIAAAEQAAAEgDACQgDABgFAAQgEAAgEgBgAgQgNIgBACIABADIAAADIACABIACgBIACgDIAAgDIAAgCIgCgDIgCgBQAAAAgBAAQAAAAgBABQAAAAAAABQAAABAAABg");
	this.shape_985.setTransform(371.6,284);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#EFA455").s().p("AADAYIgBgBIgBgBIAAgIIgUAAIgBAAIgBgBIAAgIIABgCIAUgZIABgBIALAAIABABIAAABIAAAYIAHAAIABABIAAABIAAAIIAAABIgBAAIgHAAIAAAIIAAABIgBABgAgIAEIAJAAIAAgOg");
	this.shape_986.setTransform(366.4,284);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#EFA455").s().p("AgPAZQgEgCgDgEQgCgEAAgEQAAgHAFgEQAGgDAKgBIAKgCIAAgBQAAgEgBgCQgCgBgDAAIgCAAIgDADIgCABIgBABIgMAAIgBgBIgBgBQAAgDADgDQADgDAFgDQAFgCAGgBQAMABAGAFQAGAGAAAIIAAAdIAAACIgCABIgMAAIgCgBIgBgCIAAgEQgCADgEADQgCABgFAAQgGAAgEgBgAAAADQgHACAAAEQAAABAAABQAAAAAAABQABAAAAABQAAAAABABIAFABQACAAADgDQADgDAAgGIAAgBg");
	this.shape_987.setTransform(387.3,274.5);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#EFA455").s().p("AAJAjQgTAAAAgUIAAgRIgIAAIgCAAIAAgCIAAgIIAAgCIACgBIAIAAIAAgQIABgCIACgBIAKAAIACABIAAACIAAAQIANAAIACABIAAACIAAAIIAAACIgCAAIgNAAIAAAPQAAAEACACQAAAAAAABQABAAAAAAQABAAAAAAQABABABAAIAIAAIACABIAAABIAAAJIAAACIgCABg");
	this.shape_988.setTransform(382.1,273.6);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#EFA455").s().p("AgHAlIgCgBIgBgCIAAgiIgHAAIgCAAIgBgDIAAgIIABgCIACgBIAHAAIAAgCQAAgLAGgEQAEgFAKABIAIAAIACAAIABACIAAAJIgBABIgCABIgHAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAABIAAACIAMAAIABABIABACIAAAIIgBADIgBAAIgMAAIAAAiIgBACIgCABg");
	this.shape_989.setTransform(377.6,273.4);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#EFA455").s().p("AgPAZQgEgCgDgEQgCgEAAgEQAAgHAFgEQAGgDAKgBIAKgCIAAgBQAAgEgBgCQgCgBgDAAIgCAAIgDADIgCABIgBABIgMAAIgBgBIgBgBQAAgDADgDQADgDAFgDQAFgCAGgBQAMABAGAFQAGAGAAAIIAAAdIAAACIgCABIgMAAIgCgBIgBgCIAAgEQgCADgEADQgCABgFAAQgGAAgEgBgAAAADQgHACAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAABABIAFABQACAAADgDQADgDAAgGIAAgBg");
	this.shape_990.setTransform(372.1,274.5);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#EFA455").s().p("AAPAjQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAIgVgiIAAAhIgBACIgCABIgMAAIgCgBIgBgCIAAg/IABgCIACgBIALAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAIAWAjIAAgiIABgCIABgBIANAAIACABIABACIAAA/IgBACIgCABg");
	this.shape_991.setTransform(365.7,273.6);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f().s("#EFA455").p("ACOh3IkbDv");
	this.shape_992.setTransform(457.1,261.3);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f().s("#EFA455").p("ADUAAImnAA");
	this.shape_993.setTransform(421.7,273);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f().s("#EFA455").p("AAjAAQAAAOgKALQgLAKgOAAQgNAAgKgKQgLgLAAgOQAAgNALgKQAKgLANAAQAOAAALALQAKAKAAANg");
	this.shape_994.setTransform(474.3,247.1);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#EFA455").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_995.setTransform(474.4,247.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971}]}).wait(127));

	// Layer 13
	this.instance_18 = new lib.Path_94();
	this.instance_18.setTransform(111,699.9,1,1,0,0,0,1.3,1.7);
	this.instance_18.alpha = 0.512;

	this.instance_19 = new lib.Path_1_3();
	this.instance_19.setTransform(109.7,708.1,1,1,0,0,0,1.7,5.8);
	this.instance_19.alpha = 0.512;

	this.instance_20 = new lib.Path_2_2();
	this.instance_20.setTransform(113.8,748.4,1,1,0,0,0,2.2,8.3);
	this.instance_20.alpha = 0.512;

	this.instance_21 = new lib.Path_4_2();
	this.instance_21.setTransform(117.8,727.7,1,1,0,0,0,3,8);
	this.instance_21.alpha = 0.512;

	this.instance_22 = new lib.Path_5_2();
	this.instance_22.setTransform(108.4,741.7,1,1,0,0,0,15.3,45);
	this.instance_22.alpha = 0.609;

	this.instance_23 = new lib.Path_3_2();
	this.instance_23.setTransform(116.8,896.5,1,1,0,0,0,3.9,10.5);
	this.instance_23.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22,p:{x:108.4,y:741.7,scaleY:1,regY:45}},{t:this.instance_21,p:{x:117.8,y:727.7,scaleY:1,regY:8}},{t:this.instance_20,p:{x:113.8,y:748.4,scaleY:1,regY:8.3}},{t:this.instance_19,p:{x:109.7,y:708.1,regY:5.8,scaleY:1}},{t:this.instance_18,p:{x:111,y:699.9,regY:1.7,scaleY:1}}]},23).to({state:[{t:this.instance_22,p:{x:108.3,y:753.8,scaleY:1,regY:45}},{t:this.instance_21,p:{x:117.7,y:739.8,scaleY:1,regY:8}},{t:this.instance_20,p:{x:113.7,y:760.5,scaleY:1,regY:8.3}},{t:this.instance_19,p:{x:109.6,y:720.2,regY:5.8,scaleY:1}},{t:this.instance_18,p:{x:110.9,y:712,regY:1.7,scaleY:1}}]},11).to({state:[{t:this.instance_22,p:{x:108.3,y:773.1,scaleY:1,regY:45}},{t:this.instance_21,p:{x:117.7,y:759.2,scaleY:1,regY:8}},{t:this.instance_20,p:{x:113.7,y:779.8,scaleY:1,regY:8.3}},{t:this.instance_19,p:{x:109.6,y:739.6,regY:5.8,scaleY:1}},{t:this.instance_18,p:{x:110.9,y:731.3,regY:1.7,scaleY:1}}]},6).to({state:[{t:this.instance_22,p:{x:108.3,y:791.2,scaleY:1,regY:45}},{t:this.instance_21,p:{x:117.7,y:777.2,scaleY:1,regY:8}},{t:this.instance_20,p:{x:113.7,y:797.9,scaleY:1,regY:8.3}},{t:this.instance_19,p:{x:109.6,y:757.6,regY:5.8,scaleY:1}},{t:this.instance_18,p:{x:110.9,y:749.4,regY:1.7,scaleY:1}}]},5).to({state:[{t:this.instance_22,p:{x:108.3,y:820.1,scaleY:1,regY:45}},{t:this.instance_21,p:{x:117.7,y:806.1,scaleY:1,regY:8}},{t:this.instance_20,p:{x:113.7,y:826.8,scaleY:1,regY:8.3}},{t:this.instance_19,p:{x:109.6,y:786.5,regY:5.8,scaleY:1}},{t:this.instance_18,p:{x:110.9,y:778.3,regY:1.7,scaleY:1}}]},5).to({state:[{t:this.instance_22,p:{x:108.3,y:866.2,scaleY:1,regY:45}},{t:this.instance_21,p:{x:117.7,y:852.2,scaleY:1,regY:8}},{t:this.instance_23,p:{scaleY:1,x:116.8,y:896.5,regY:10.5}},{t:this.instance_20,p:{x:113.7,y:872.9,scaleY:1,regY:8.3}},{t:this.instance_19,p:{x:109.6,y:832.6,regY:5.8,scaleY:1}},{t:this.instance_18,p:{x:110.9,y:824.4,regY:1.7,scaleY:1}}]},4).to({state:[{t:this.instance_22,p:{x:108.4,y:886.2,scaleY:0.556,regY:45}},{t:this.instance_21,p:{x:117.8,y:878.4,scaleY:0.556,regY:8}},{t:this.instance_23,p:{scaleY:0.556,x:116.9,y:903,regY:10.5}},{t:this.instance_20,p:{x:113.8,y:889.9,scaleY:0.556,regY:8.3}},{t:this.instance_19,p:{x:109.7,y:867.7,regY:5.9,scaleY:0.556}},{t:this.instance_18,p:{x:111,y:863.1,regY:1.8,scaleY:0.556}}]},3).to({state:[]},3).to({state:[{t:this.instance_22,p:{x:108.4,y:741.7,scaleY:1,regY:45}},{t:this.instance_21,p:{x:117.8,y:727.7,scaleY:1,regY:8}},{t:this.instance_20,p:{x:113.8,y:748.4,scaleY:1,regY:8.3}},{t:this.instance_19,p:{x:109.7,y:708.1,regY:5.8,scaleY:1}},{t:this.instance_18,p:{x:111,y:699.9,regY:1.7,scaleY:1}}]},29).to({state:[{t:this.instance_22,p:{x:108.3,y:753.8,scaleY:1,regY:45}},{t:this.instance_21,p:{x:117.7,y:739.8,scaleY:1,regY:8}},{t:this.instance_20,p:{x:113.7,y:760.5,scaleY:1,regY:8.3}},{t:this.instance_19,p:{x:109.6,y:720.2,regY:5.8,scaleY:1}},{t:this.instance_18,p:{x:110.9,y:712,regY:1.7,scaleY:1}}]},11).to({state:[{t:this.instance_22,p:{x:108.3,y:773.1,scaleY:1,regY:45}},{t:this.instance_21,p:{x:117.7,y:759.2,scaleY:1,regY:8}},{t:this.instance_20,p:{x:113.7,y:779.8,scaleY:1,regY:8.3}},{t:this.instance_19,p:{x:109.6,y:739.6,regY:5.8,scaleY:1}},{t:this.instance_18,p:{x:110.9,y:731.3,regY:1.7,scaleY:1}}]},6).to({state:[{t:this.instance_22,p:{x:108.3,y:791.2,scaleY:1,regY:45}},{t:this.instance_21,p:{x:117.7,y:777.2,scaleY:1,regY:8}},{t:this.instance_20,p:{x:113.7,y:797.9,scaleY:1,regY:8.3}},{t:this.instance_19,p:{x:109.6,y:757.6,regY:5.8,scaleY:1}},{t:this.instance_18,p:{x:110.9,y:749.4,regY:1.7,scaleY:1}}]},5).to({state:[{t:this.instance_22,p:{x:108.3,y:820.1,scaleY:1,regY:45}},{t:this.instance_21,p:{x:117.7,y:806.1,scaleY:1,regY:8}},{t:this.instance_20,p:{x:113.7,y:826.8,scaleY:1,regY:8.3}},{t:this.instance_19,p:{x:109.6,y:786.5,regY:5.8,scaleY:1}},{t:this.instance_18,p:{x:110.9,y:778.3,regY:1.7,scaleY:1}}]},5).to({state:[{t:this.instance_22,p:{x:108.3,y:866.2,scaleY:1,regY:45}},{t:this.instance_21,p:{x:117.7,y:852.2,scaleY:1,regY:8}},{t:this.instance_23,p:{scaleY:1,x:116.8,y:896.5,regY:10.5}},{t:this.instance_20,p:{x:113.7,y:872.9,scaleY:1,regY:8.3}},{t:this.instance_19,p:{x:109.6,y:832.6,regY:5.8,scaleY:1}},{t:this.instance_18,p:{x:110.9,y:824.4,regY:1.7,scaleY:1}}]},4).to({state:[{t:this.instance_22,p:{x:108.4,y:892.8,scaleY:0.701,regY:44.6}},{t:this.instance_21,p:{x:117.8,y:883.2,scaleY:0.701,regY:8.1}},{t:this.instance_23,p:{scaleY:0.701,x:116.9,y:913.9,regY:10.2}},{t:this.instance_20,p:{x:113.8,y:897.6,scaleY:0.701,regY:8.2}},{t:this.instance_19,p:{x:109.7,y:869.5,regY:5.8,scaleY:0.701}},{t:this.instance_18,p:{x:111,y:863.4,regY:1.7,scaleY:0.701}}]},3).wait(4));

	// Layer 38
	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f().s("#848661").ss(2).p("AEGAAIoLAA");
	this.shape_996.setTransform(108.4,635.4);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f().s("#848661").ss(2).p("AAAlaIAAK1");
	this.shape_997.setTransform(128.1,844.2);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f().s("#848661").ss(2).p("AAAlaIAAK1");
	this.shape_998.setTransform(88.6,844.2);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#ABAD88").s().p("Aj5FbIAAp7QAAgYAUgRQAUgRAcAAIBcAAQAWAAARAKQASAMAHAQIETKPg");
	this.shape_999.setTransform(145.5,844.2);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#ABAD88").s().p("Aj7FbIEWqPQAGgQATgMQARgKAVAAIBeAAQAcAAAUARQAUARAAAYIAAJ7g");
	this.shape_1000.setTransform(71.1,844.2);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#ABAD88").s().p("An2A+IAAhSQAAgRAMgMQAMgMARAAIObAAQARAAAMAMQAMAMAAARIAABSg");
	this.shape_1001.setTransform(108.2,668.2);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#ABAD88").s().p("AhMBpIAAjRICZAAIAADRg");
	this.shape_1002.setTransform(108.8,651.4);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#ABAD88").s().p("AirCHQgmgBgagaQgagaAAglIAAiyIILAAIAACyQAAAlgaAaQgbAaglABg");
	this.shape_1003.setTransform(108.4,629.4);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#ABAD88").s().p("AjBGbQgKgQgNgQQgKhhAmhaIATgtQALgigEg7QgCg3gSgYQgJgLghgdQgcgYgJgSQgIgOAAgiIAAgqIABgLIAHgLQAGgKgDgMQgDgMgIgIQgIgHgNgBQgMgBgMADIAAiSIJ0AAIAAKxQhgBUiOAhQhZAVhnAAQglAAgogDg");
	this.shape_1004.setTransform(159.6,721.9);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#848661").s().p("Ak6EKIAAiEIA7gBQAgACAZgdQATgVAKgnQANgugHgsQgGgugYgnQCTAKB6gcQCOgiBghTIAAISg");
	this.shape_1005.setTransform(159.6,776.2);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#848661").s().p("AkyDMIAAmWQCWANBlABQCHACBygRQgcAqgIAxQgJAxAOAyQAJAjAUAWQAZAcAgAAIA6AAIAACEg");
	this.shape_1006.setTransform(57.8,782.4);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#ABAD88").s().p("Ag3GeQhlgBiWgNIAAstIJlAAIAACSQgMgEgLACQgOABgHAHQgJAHgDAMQgCAMAFAKIAHALQABAEAAAIIAAAqQAAAggHAPQgKATgbAYQghAcgIALQgTAZgCA2QgDA9AKAgIATAuQAmBagLBhIgPAUQhpAPh5AAIgXAAg");
	this.shape_1007.setTransform(57.8,722);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f().s("#848661").ss(2).p("AAAl5IAALy");
	this.shape_1008.setTransform(99.7,841.7);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#848661").s().p("Ak4EMIgDipIA7gBQAfABAZgaQAUgUAKgjQAMgogGgrQgHgpgXglQCTAKB5gbQCPgeBghNIADIXg");
	this.shape_1009.setTransform(139.9,775.8);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#848661").s().p("AkzDUIACmlQCVALBmABQCGABBzgOQgdAmgHAsQgJAuANAtQAKAjATASQAaAaAgAAIA6AAIgCCqg");
	this.shape_1010.setTransform(77.9,781.5);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f().s("#848661").ss(2).p("AgiD1IAACEAAjl5IAAJu");
	this.shape_1011.setTransform(90.5,844.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1007,p:{x:57.8,scaleY:1,y:722}},{t:this.shape_1006,p:{x:57.8}},{t:this.shape_1005,p:{x:159.6}},{t:this.shape_1004,p:{x:159.6,scaleY:1,y:721.9}},{t:this.shape_1003,p:{x:108.4,y:629.4}},{t:this.shape_1002,p:{x:108.8,y:651.4}},{t:this.shape_1001,p:{x:108.2,y:668.2}},{t:this.shape_1000,p:{scaleX:1,scaleY:1,x:71.1,y:844.2}},{t:this.shape_999,p:{scaleX:1,scaleY:1,x:145.5,y:844.2}},{t:this.shape_998,p:{scaleX:1,scaleY:1,x:88.6,y:844.2}},{t:this.shape_997,p:{scaleX:1,scaleY:1,x:128.1,y:844.2}},{t:this.shape_996,p:{x:108.4,y:635.4}}]}).to({state:[{t:this.shape_1007,p:{x:66.7,scaleY:1,y:722}},{t:this.shape_1006,p:{x:66.7}},{t:this.shape_1005,p:{x:148.2}},{t:this.shape_1004,p:{x:148.2,scaleY:1,y:721.9}},{t:this.shape_1003,p:{x:108.4,y:629.4}},{t:this.shape_1002,p:{x:108.8,y:651.4}},{t:this.shape_1001,p:{x:108.2,y:668.2}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:71.2,y:840.6}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:143.7,y:840.6}},{t:this.shape_998,p:{scaleX:1.171,scaleY:1.088,x:91.7,y:840.6}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:123.3,y:840.6}},{t:this.shape_996,p:{x:108.4,y:635.4}}]},5).to({state:[{t:this.shape_1007,p:{x:78.9,scaleY:1,y:722}},{t:this.shape_1006,p:{x:78.9}},{t:this.shape_1005,p:{x:140.2}},{t:this.shape_1004,p:{x:140.2,scaleY:1,y:721.9}},{t:this.shape_1003,p:{x:108.5,y:635.5}},{t:this.shape_1002,p:{x:108.9,y:657.5}},{t:this.shape_1001,p:{x:108.3,y:674.3}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:78.7,y:840.6}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:137.6,y:840.6}},{t:this.shape_1008,p:{x:99.7,y:841.7}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:117.1,y:840.6}},{t:this.shape_996,p:{x:109.4,y:635.4}}]},5).to({state:[{t:this.shape_1007,p:{x:78.9,scaleY:1,y:722}},{t:this.shape_1006,p:{x:78.9}},{t:this.shape_1005,p:{x:140.2}},{t:this.shape_1004,p:{x:140.2,scaleY:1,y:721.9}},{t:this.shape_1003,p:{x:108.5,y:635.5}},{t:this.shape_1002,p:{x:108.9,y:657.5}},{t:this.shape_1001,p:{x:108.3,y:674.3}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:78.7,y:840.6}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:137.6,y:840.6}},{t:this.shape_1008,p:{x:98.2,y:840.7}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:117.1,y:840.6}},{t:this.shape_996,p:{x:109.4,y:635.4}}]},5).to({state:[{t:this.shape_1007,p:{x:77.9,scaleY:0.978,y:721.1}},{t:this.shape_1010,p:{x:77.9}},{t:this.shape_1009,p:{x:139.9,y:775.8}},{t:this.shape_1004,p:{x:139.8,scaleY:0.978,y:721}},{t:this.shape_1003,p:{x:108.5,y:635.5}},{t:this.shape_1002,p:{x:108.9,y:657.5}},{t:this.shape_1001,p:{x:108.3,y:674.3}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:78.7,y:840.6}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:137.6,y:840.6}},{t:this.shape_1008,p:{x:98.2,y:840.2}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:117.1,y:840.6}},{t:this.shape_996,p:{x:109.4,y:635.4}}]},8).to({state:[{t:this.shape_1007,p:{x:70.4,scaleY:0.978,y:721.1}},{t:this.shape_1010,p:{x:70.3}},{t:this.shape_1009,p:{x:148,y:776}},{t:this.shape_1004,p:{x:147.9,scaleY:0.978,y:721.2}},{t:this.shape_1003,p:{x:108.5,y:635.5}},{t:this.shape_1002,p:{x:108.9,y:657.5}},{t:this.shape_1001,p:{x:108.3,y:674.3}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:74,y:844.6}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:140.6,y:844.6}},{t:this.shape_1011,p:{x:90.5,y:844.7}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:120.1,y:844.6}},{t:this.shape_996,p:{x:109.4,y:635.4}}]},4).to({state:[{t:this.shape_1007,p:{x:62.3,scaleY:0.978,y:721.1}},{t:this.shape_1010,p:{x:62.3}},{t:this.shape_1009,p:{x:155.3,y:775.8}},{t:this.shape_1004,p:{x:155.2,scaleY:0.978,y:721}},{t:this.shape_1003,p:{x:108,y:631}},{t:this.shape_1002,p:{x:108.4,y:653}},{t:this.shape_1001,p:{x:107.8,y:669.8}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:68.5,y:846.1}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:147,y:846.6}},{t:this.shape_1011,p:{x:85,y:846.2}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:126.6,y:846.6}},{t:this.shape_996,p:{x:108.9,y:630.9}}]},3).to({state:[{t:this.shape_1007,p:{x:56.7,scaleY:0.978,y:721.1}},{t:this.shape_1010,p:{x:56.7}},{t:this.shape_1009,p:{x:163.8,y:775.8}},{t:this.shape_1004,p:{x:163.6,scaleY:0.978,y:721}},{t:this.shape_1003,p:{x:108.5,y:629.5}},{t:this.shape_1002,p:{x:108.9,y:651.5}},{t:this.shape_1001,p:{x:108.3,y:668.3}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:63.5,y:846.6}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:153,y:846.6}},{t:this.shape_1008,p:{x:83.5,y:846.7}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:132.5,y:846.6}},{t:this.shape_996,p:{x:108.9,y:630.9}}]},3).to({state:[{t:this.shape_1007,p:{x:57.8,scaleY:1,y:722}},{t:this.shape_1006,p:{x:57.8}},{t:this.shape_1005,p:{x:159.6}},{t:this.shape_1004,p:{x:159.6,scaleY:1,y:721.9}},{t:this.shape_1003,p:{x:108.4,y:629.4}},{t:this.shape_1002,p:{x:108.8,y:651.4}},{t:this.shape_1001,p:{x:108.2,y:668.2}},{t:this.shape_1000,p:{scaleX:1,scaleY:1,x:71.1,y:844.2}},{t:this.shape_999,p:{scaleX:1,scaleY:1,x:145.5,y:844.2}},{t:this.shape_998,p:{scaleX:1,scaleY:1,x:88.6,y:844.2}},{t:this.shape_997,p:{scaleX:1,scaleY:1,x:128.1,y:844.2}},{t:this.shape_996,p:{x:108.4,y:635.4}}]},33).to({state:[{t:this.shape_1007,p:{x:66.7,scaleY:1,y:722}},{t:this.shape_1006,p:{x:66.7}},{t:this.shape_1005,p:{x:148.2}},{t:this.shape_1004,p:{x:148.2,scaleY:1,y:721.9}},{t:this.shape_1003,p:{x:108.4,y:629.4}},{t:this.shape_1002,p:{x:108.8,y:651.4}},{t:this.shape_1001,p:{x:108.2,y:668.2}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:71.2,y:840.6}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:143.7,y:840.6}},{t:this.shape_998,p:{scaleX:1.171,scaleY:1.088,x:91.7,y:840.6}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:123.3,y:840.6}},{t:this.shape_996,p:{x:108.4,y:635.4}}]},5).to({state:[{t:this.shape_1007,p:{x:78.9,scaleY:1,y:722}},{t:this.shape_1006,p:{x:78.9}},{t:this.shape_1005,p:{x:140.2}},{t:this.shape_1004,p:{x:140.2,scaleY:1,y:721.9}},{t:this.shape_1003,p:{x:108.5,y:635.5}},{t:this.shape_1002,p:{x:108.9,y:657.5}},{t:this.shape_1001,p:{x:108.3,y:674.3}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:78.7,y:840.6}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:137.6,y:840.6}},{t:this.shape_1008,p:{x:99.7,y:841.7}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:117.1,y:840.6}},{t:this.shape_996,p:{x:109.4,y:635.4}}]},5).to({state:[{t:this.shape_1007,p:{x:78.9,scaleY:1,y:722}},{t:this.shape_1006,p:{x:78.9}},{t:this.shape_1005,p:{x:140.2}},{t:this.shape_1004,p:{x:140.2,scaleY:1,y:721.9}},{t:this.shape_1003,p:{x:108.5,y:635.5}},{t:this.shape_1002,p:{x:108.9,y:657.5}},{t:this.shape_1001,p:{x:108.3,y:674.3}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:78.7,y:840.6}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:137.6,y:840.6}},{t:this.shape_1008,p:{x:98.2,y:840.7}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:117.1,y:840.6}},{t:this.shape_996,p:{x:109.4,y:635.4}}]},5).to({state:[{t:this.shape_1007,p:{x:77.9,scaleY:0.978,y:721.1}},{t:this.shape_1010,p:{x:77.9}},{t:this.shape_1009,p:{x:139.9,y:775.8}},{t:this.shape_1004,p:{x:139.8,scaleY:0.978,y:721}},{t:this.shape_1003,p:{x:108.5,y:635.5}},{t:this.shape_1002,p:{x:108.9,y:657.5}},{t:this.shape_1001,p:{x:108.3,y:674.3}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:78.7,y:840.6}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:137.6,y:840.6}},{t:this.shape_1008,p:{x:98.2,y:840.2}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:117.1,y:840.6}},{t:this.shape_996,p:{x:109.4,y:635.4}}]},8).to({state:[{t:this.shape_1007,p:{x:70.4,scaleY:0.978,y:721.1}},{t:this.shape_1010,p:{x:70.3}},{t:this.shape_1009,p:{x:148,y:776}},{t:this.shape_1004,p:{x:147.9,scaleY:0.978,y:721.2}},{t:this.shape_1003,p:{x:108.5,y:635.5}},{t:this.shape_1002,p:{x:108.9,y:657.5}},{t:this.shape_1001,p:{x:108.3,y:674.3}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:74,y:844.6}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:140.6,y:844.6}},{t:this.shape_1011,p:{x:90.5,y:844.7}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:120.1,y:844.6}},{t:this.shape_996,p:{x:109.4,y:635.4}}]},4).to({state:[{t:this.shape_1007,p:{x:62.3,scaleY:0.978,y:721.1}},{t:this.shape_1010,p:{x:62.3}},{t:this.shape_1009,p:{x:155.3,y:775.8}},{t:this.shape_1004,p:{x:155.2,scaleY:0.978,y:721}},{t:this.shape_1003,p:{x:108,y:631}},{t:this.shape_1002,p:{x:108.4,y:653}},{t:this.shape_1001,p:{x:107.8,y:669.8}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:68.5,y:846.1}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:147,y:846.6}},{t:this.shape_1011,p:{x:85,y:846.2}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:126.6,y:846.6}},{t:this.shape_996,p:{x:108.9,y:630.9}}]},3).to({state:[{t:this.shape_1007,p:{x:56.7,scaleY:0.978,y:721.1}},{t:this.shape_1010,p:{x:56.7}},{t:this.shape_1009,p:{x:163.8,y:775.8}},{t:this.shape_1004,p:{x:163.6,scaleY:0.978,y:721}},{t:this.shape_1003,p:{x:108.5,y:629.5}},{t:this.shape_1002,p:{x:108.9,y:651.5}},{t:this.shape_1001,p:{x:108.3,y:668.3}},{t:this.shape_1000,p:{scaleX:1.171,scaleY:1.088,x:63.5,y:846.6}},{t:this.shape_999,p:{scaleX:1.171,scaleY:1.088,x:153,y:846.6}},{t:this.shape_1008,p:{x:83.5,y:846.7}},{t:this.shape_997,p:{scaleX:1.171,scaleY:1.088,x:132.5,y:846.6}},{t:this.shape_996,p:{x:108.9,y:630.9}}]},3).wait(28));

	// resina
	this.instance_24 = new lib.Path_92();
	this.instance_24.setTransform(138.4,776.3,1,1,0,0,0,1.5,1.2);
	this.instance_24.alpha = 0.441;

	this.instance_25 = new lib.Path_1_2();
	this.instance_25.setTransform(137.7,778.4,1,1,0,0,0,2.1,2.6);
	this.instance_25.alpha = 0.441;

	this.instance_26 = new lib.Path_2_1();
	this.instance_26.setTransform(133.3,776.3,1,1,0,0,0,1.5,1.2);
	this.instance_26.alpha = 0.441;

	this.instance_27 = new lib.Path_3_1();
	this.instance_27.setTransform(132.5,778.4,1,1,0,0,0,2.1,2.6);
	this.instance_27.alpha = 0.441;

	this.instance_28 = new lib.Path_4_1();
	this.instance_28.setTransform(127.6,776.3,1,1,0,0,0,1.5,1.2);
	this.instance_28.alpha = 0.441;

	this.instance_29 = new lib.Path_5_1();
	this.instance_29.setTransform(126.9,778.4,1,1,0,0,0,2.1,2.6);
	this.instance_29.alpha = 0.441;

	this.instance_30 = new lib.Path_6_1();
	this.instance_30.setTransform(89.4,776.3,1,1,0,0,0,1.5,1.2);
	this.instance_30.alpha = 0.441;

	this.instance_31 = new lib.Path_7_1();
	this.instance_31.setTransform(88.7,778.4,1,1,0,0,0,2.1,2.6);
	this.instance_31.alpha = 0.441;

	this.instance_32 = new lib.Path_8();
	this.instance_32.setTransform(83.8,776.3,1,1,0,0,0,1.5,1.2);
	this.instance_32.alpha = 0.441;

	this.instance_33 = new lib.Path_9();
	this.instance_33.setTransform(83,778.4,1,1,0,0,0,2.1,2.6);
	this.instance_33.alpha = 0.441;

	this.instance_34 = new lib.Path_10();
	this.instance_34.setTransform(78.6,776.3,1,1,0,0,0,1.5,1.2);
	this.instance_34.alpha = 0.441;

	this.instance_35 = new lib.Path_11();
	this.instance_35.setTransform(77.9,778.4,1,1,0,0,0,2.1,2.6);
	this.instance_35.alpha = 0.441;

	this.instance_36 = new lib.Path_12();
	this.instance_36.setTransform(138.4,768.3,1,1,0,0,0,1.5,1.2);
	this.instance_36.alpha = 0.441;

	this.instance_37 = new lib.Path_13();
	this.instance_37.setTransform(137.7,770.4,1,1,0,0,0,2.1,2.6);
	this.instance_37.alpha = 0.441;

	this.instance_38 = new lib.Path_14();
	this.instance_38.setTransform(133.3,768.3,1,1,0,0,0,1.5,1.2);
	this.instance_38.alpha = 0.441;

	this.instance_39 = new lib.Path_15();
	this.instance_39.setTransform(132.5,770.4,1,1,0,0,0,2.1,2.6);
	this.instance_39.alpha = 0.441;

	this.instance_40 = new lib.Path_16();
	this.instance_40.setTransform(127.6,768.3,1,1,0,0,0,1.5,1.2);
	this.instance_40.alpha = 0.441;

	this.instance_41 = new lib.Path_17();
	this.instance_41.setTransform(126.9,770.4,1,1,0,0,0,2.1,2.6);
	this.instance_41.alpha = 0.441;

	this.instance_42 = new lib.Path_18();
	this.instance_42.setTransform(89.4,768.3,1,1,0,0,0,1.5,1.2);
	this.instance_42.alpha = 0.441;

	this.instance_43 = new lib.Path_19();
	this.instance_43.setTransform(88.7,770.4,1,1,0,0,0,2.1,2.6);
	this.instance_43.alpha = 0.441;

	this.instance_44 = new lib.Path_20();
	this.instance_44.setTransform(83.8,768.3,1,1,0,0,0,1.5,1.2);
	this.instance_44.alpha = 0.441;

	this.instance_45 = new lib.Path_21();
	this.instance_45.setTransform(83,770.4,1,1,0,0,0,2.1,2.6);
	this.instance_45.alpha = 0.441;

	this.instance_46 = new lib.Path_22();
	this.instance_46.setTransform(78.6,768.3,1,1,0,0,0,1.5,1.2);
	this.instance_46.alpha = 0.441;

	this.instance_47 = new lib.Path_23();
	this.instance_47.setTransform(77.9,770.4,1,1,0,0,0,2.1,2.6);
	this.instance_47.alpha = 0.441;

	this.instance_48 = new lib.Path_24();
	this.instance_48.setTransform(130.3,708.2,1,1,0,0,0,1.5,1.3);
	this.instance_48.alpha = 0.441;

	this.instance_49 = new lib.Path_25();
	this.instance_49.setTransform(129.5,710.3,1,1,0,0,0,2.1,2.6);
	this.instance_49.alpha = 0.441;

	this.instance_50 = new lib.Path_26();
	this.instance_50.setTransform(125.1,708.2,1,1,0,0,0,1.5,1.3);
	this.instance_50.alpha = 0.441;

	this.instance_51 = new lib.Path_27();
	this.instance_51.setTransform(124.4,710.3,1,1,0,0,0,2.1,2.6);
	this.instance_51.alpha = 0.441;

	this.instance_52 = new lib.Path_28();
	this.instance_52.setTransform(93.6,709.2,1,1,0,0,0,1.5,1.2);
	this.instance_52.alpha = 0.441;

	this.instance_53 = new lib.Path_29();
	this.instance_53.setTransform(92.9,711.4,1,1,0,0,0,2.1,2.6);
	this.instance_53.alpha = 0.441;

	this.instance_54 = new lib.Path_30();
	this.instance_54.setTransform(88.4,709.2,1,1,0,0,0,1.5,1.2);
	this.instance_54.alpha = 0.441;

	this.instance_55 = new lib.Path_31();
	this.instance_55.setTransform(87.7,711.4,1,1,0,0,0,2.1,2.6);
	this.instance_55.alpha = 0.441;

	this.instance_56 = new lib.Path_32();
	this.instance_56.setTransform(130.1,699.9,1,1,0,0,0,1.5,1.3);
	this.instance_56.alpha = 0.441;

	this.instance_57 = new lib.Path_33();
	this.instance_57.setTransform(129.4,702,1,1,0,0,0,2.1,2.6);
	this.instance_57.alpha = 0.441;

	this.instance_58 = new lib.Path_34();
	this.instance_58.setTransform(125,699.9,1,1,0,0,0,1.5,1.3);
	this.instance_58.alpha = 0.441;

	this.instance_59 = new lib.Path_35();
	this.instance_59.setTransform(124.2,702,1,1,0,0,0,2.1,2.6);
	this.instance_59.alpha = 0.441;

	this.instance_60 = new lib.Path_36();
	this.instance_60.setTransform(93.5,701,1,1,0,0,0,1.5,1.2);
	this.instance_60.alpha = 0.441;

	this.instance_61 = new lib.Path_37();
	this.instance_61.setTransform(92.7,703.1,1,1,0,0,0,2.1,2.6);
	this.instance_61.alpha = 0.441;

	this.instance_62 = new lib.Path_38();
	this.instance_62.setTransform(88.3,701,1,1,0,0,0,1.5,1.2);
	this.instance_62.alpha = 0.441;

	this.instance_63 = new lib.Path_39();
	this.instance_63.setTransform(87.6,703.1,1,1,0,0,0,2.1,2.6);
	this.instance_63.alpha = 0.441;

	this.instance_64 = new lib.Path_40();
	this.instance_64.setTransform(136,753.4,1,1,0,0,0,1.5,1.3);
	this.instance_64.alpha = 0.441;

	this.instance_65 = new lib.Path_41();
	this.instance_65.setTransform(135.3,755.5,1,1,0,0,0,2.1,2.6);
	this.instance_65.alpha = 0.441;

	this.instance_66 = new lib.Path_42();
	this.instance_66.setTransform(130.8,753.4,1,1,0,0,0,1.5,1.3);
	this.instance_66.alpha = 0.441;

	this.instance_67 = new lib.Path_43();
	this.instance_67.setTransform(130.1,755.5,1,1,0,0,0,2.1,2.6);
	this.instance_67.alpha = 0.441;

	this.instance_68 = new lib.Path_44();
	this.instance_68.setTransform(88.3,754.5,1,1,0,0,0,1.5,1.2);
	this.instance_68.alpha = 0.441;

	this.instance_69 = new lib.Path_45();
	this.instance_69.setTransform(87.6,756.6,1,1,0,0,0,2.1,2.6);
	this.instance_69.alpha = 0.441;

	this.instance_70 = new lib.Path_46();
	this.instance_70.setTransform(83.1,754.5,1,1,0,0,0,1.5,1.2);
	this.instance_70.alpha = 0.441;

	this.instance_71 = new lib.Path_47();
	this.instance_71.setTransform(82.4,756.6,1,1,0,0,0,2.1,2.6);
	this.instance_71.alpha = 0.441;

	this.instance_72 = new lib.Path_48();
	this.instance_72.setTransform(135.9,745.2,1,1,0,0,0,1.5,1.3);
	this.instance_72.alpha = 0.441;

	this.instance_73 = new lib.Path_49();
	this.instance_73.setTransform(135.2,747.3,1,1,0,0,0,2.1,2.6);
	this.instance_73.alpha = 0.441;

	this.instance_74 = new lib.Path_50();
	this.instance_74.setTransform(130.7,745.2,1,1,0,0,0,1.5,1.3);
	this.instance_74.alpha = 0.441;

	this.instance_75 = new lib.Path_51();
	this.instance_75.setTransform(130,747.3,1,1,0,0,0,2.1,2.6);
	this.instance_75.alpha = 0.441;

	this.instance_76 = new lib.Path_52();
	this.instance_76.setTransform(88.2,746.2,1,1,0,0,0,1.5,1.2);
	this.instance_76.alpha = 0.441;

	this.instance_77 = new lib.Path_53();
	this.instance_77.setTransform(87.4,748.4,1,1,0,0,0,2.1,2.6);
	this.instance_77.alpha = 0.441;

	this.instance_78 = new lib.Path_54();
	this.instance_78.setTransform(83,746.2,1,1,0,0,0,1.5,1.2);
	this.instance_78.alpha = 0.441;

	this.instance_79 = new lib.Path_55();
	this.instance_79.setTransform(82.3,748.4,1,1,0,0,0,2.1,2.6);
	this.instance_79.alpha = 0.441;

	this.instance_80 = new lib.Path_56();
	this.instance_80.setTransform(138.5,736.8,1,1,0,0,0,1.5,1.3);
	this.instance_80.alpha = 0.441;

	this.instance_81 = new lib.Path_57();
	this.instance_81.setTransform(137.8,738.9,1,1,0,0,0,2.1,2.6);
	this.instance_81.alpha = 0.441;

	this.instance_82 = new lib.Path_58();
	this.instance_82.setTransform(133.3,736.8,1,1,0,0,0,1.5,1.3);
	this.instance_82.alpha = 0.441;

	this.instance_83 = new lib.Path_59();
	this.instance_83.setTransform(132.6,738.9,1,1,0,0,0,2.1,2.6);
	this.instance_83.alpha = 0.441;

	this.instance_84 = new lib.Path_60();
	this.instance_84.setTransform(127.7,736.8,1,1,0,0,0,1.5,1.3);
	this.instance_84.alpha = 0.441;

	this.instance_85 = new lib.Path_61();
	this.instance_85.setTransform(126.9,738.9,1,1,0,0,0,2.1,2.6);
	this.instance_85.alpha = 0.441;

	this.instance_86 = new lib.Path_62();
	this.instance_86.setTransform(89.4,736.6,1,1,0,0,0,1.5,1.3);
	this.instance_86.alpha = 0.441;

	this.instance_87 = new lib.Path_63();
	this.instance_87.setTransform(88.6,738.7,1,1,0,0,0,2.1,2.6);
	this.instance_87.alpha = 0.441;

	this.instance_88 = new lib.Path_64();
	this.instance_88.setTransform(83.7,736.6,1,1,0,0,0,1.5,1.3);
	this.instance_88.alpha = 0.441;

	this.instance_89 = new lib.Path_65();
	this.instance_89.setTransform(83,738.7,1,1,0,0,0,2.1,2.6);
	this.instance_89.alpha = 0.441;

	this.instance_90 = new lib.Path_66();
	this.instance_90.setTransform(78.5,736.6,1,1,0,0,0,1.5,1.3);
	this.instance_90.alpha = 0.441;

	this.instance_91 = new lib.Path_67();
	this.instance_91.setTransform(77.8,738.7,1,1,0,0,0,2.1,2.6);
	this.instance_91.alpha = 0.441;

	this.instance_92 = new lib.Path_68();
	this.instance_92.setTransform(138.4,728.6,1,1,0,0,0,1.5,1.2);
	this.instance_92.alpha = 0.441;

	this.instance_93 = new lib.Path_69();
	this.instance_93.setTransform(137.6,730.7,1,1,0,0,0,2.1,2.6);
	this.instance_93.alpha = 0.441;

	this.instance_94 = new lib.Path_70();
	this.instance_94.setTransform(133.2,728.6,1,1,0,0,0,1.5,1.2);
	this.instance_94.alpha = 0.441;

	this.instance_95 = new lib.Path_71();
	this.instance_95.setTransform(132.5,730.7,1,1,0,0,0,2.1,2.6);
	this.instance_95.alpha = 0.441;

	this.instance_96 = new lib.Path_72();
	this.instance_96.setTransform(127.5,728.6,1,1,0,0,0,1.5,1.2);
	this.instance_96.alpha = 0.441;

	this.instance_97 = new lib.Path_73();
	this.instance_97.setTransform(126.8,730.7,1,1,0,0,0,2.1,2.6);
	this.instance_97.alpha = 0.441;

	this.instance_98 = new lib.Path_74();
	this.instance_98.setTransform(89.2,728.3,1,1,0,0,0,1.5,1.2);
	this.instance_98.alpha = 0.441;

	this.instance_99 = new lib.Path_75();
	this.instance_99.setTransform(88.5,730.5,1,1,0,0,0,2.1,2.6);
	this.instance_99.alpha = 0.441;

	this.instance_100 = new lib.Path_76();
	this.instance_100.setTransform(83.6,728.3,1,1,0,0,0,1.5,1.2);
	this.instance_100.alpha = 0.441;

	this.instance_101 = new lib.Path_77();
	this.instance_101.setTransform(82.8,730.5,1,1,0,0,0,2.1,2.6);
	this.instance_101.alpha = 0.441;

	this.instance_102 = new lib.Path_78();
	this.instance_102.setTransform(78.4,728.3,1,1,0,0,0,1.5,1.2);
	this.instance_102.alpha = 0.441;

	this.instance_103 = new lib.Path_79();
	this.instance_103.setTransform(77.7,730.5,1,1,0,0,0,2.1,2.6);
	this.instance_103.alpha = 0.441;

	this.instance_104 = new lib.Path_80();
	this.instance_104.setTransform(138.5,720.7,1,1,0,0,0,1.5,1.2);
	this.instance_104.alpha = 0.441;

	this.instance_105 = new lib.Path_81();
	this.instance_105.setTransform(137.8,722.8,1,1,0,0,0,2.1,2.6);
	this.instance_105.alpha = 0.441;

	this.instance_106 = new lib.Path_82();
	this.instance_106.setTransform(133.3,720.7,1,1,0,0,0,1.5,1.2);
	this.instance_106.alpha = 0.441;

	this.instance_107 = new lib.Path_83();
	this.instance_107.setTransform(132.6,722.8,1,1,0,0,0,2.1,2.6);
	this.instance_107.alpha = 0.441;

	this.instance_108 = new lib.Path_84();
	this.instance_108.setTransform(127.7,720.7,1,1,0,0,0,1.5,1.2);
	this.instance_108.alpha = 0.441;

	this.instance_109 = new lib.Path_85();
	this.instance_109.setTransform(126.9,722.8,1,1,0,0,0,2.1,2.6);
	this.instance_109.alpha = 0.441;

	this.instance_110 = new lib.Path_86();
	this.instance_110.setTransform(89.4,720.4,1,1,0,0,0,1.5,1.2);
	this.instance_110.alpha = 0.441;

	this.instance_111 = new lib.Path_87();
	this.instance_111.setTransform(88.6,722.6,1,1,0,0,0,2.1,2.6);
	this.instance_111.alpha = 0.441;

	this.instance_112 = new lib.Path_88();
	this.instance_112.setTransform(83.7,720.4,1,1,0,0,0,1.5,1.2);
	this.instance_112.alpha = 0.441;

	this.instance_113 = new lib.Path_89();
	this.instance_113.setTransform(83,722.6,1,1,0,0,0,2.1,2.6);
	this.instance_113.alpha = 0.441;

	this.instance_114 = new lib.Path_90();
	this.instance_114.setTransform(78.5,720.4,1,1,0,0,0,1.5,1.2);
	this.instance_114.alpha = 0.441;

	this.instance_115 = new lib.Path_91();
	this.instance_115.setTransform(77.8,722.6,1,1,0,0,0,2.1,2.6);
	this.instance_115.alpha = 0.441;

	this.instance_116 = new lib.Path_92();
	this.instance_116.setTransform(120,776.3,1,1,0,0,0,1.5,1.2);
	this.instance_116.alpha = 0.441;

	this.instance_117 = new lib.Path_1_2();
	this.instance_117.setTransform(119.3,778.4,1,1,0,0,0,2.1,2.6);
	this.instance_117.alpha = 0.441;

	this.instance_118 = new lib.Path_2_1();
	this.instance_118.setTransform(114.9,776.3,1,1,0,0,0,1.5,1.2);
	this.instance_118.alpha = 0.441;

	this.instance_119 = new lib.Path_3_1();
	this.instance_119.setTransform(114.1,778.4,1,1,0,0,0,2.1,2.6);
	this.instance_119.alpha = 0.441;

	this.instance_120 = new lib.Path_4_1();
	this.instance_120.setTransform(109.2,776.3,1,1,0,0,0,1.5,1.2);
	this.instance_120.alpha = 0.441;

	this.instance_121 = new lib.Path_5_1();
	this.instance_121.setTransform(108.5,778.4,1,1,0,0,0,2.1,2.6);
	this.instance_121.alpha = 0.441;

	this.instance_122 = new lib.Path_6_1();
	this.instance_122.setTransform(111.5,776.3,1,1,0,0,0,1.5,1.2);
	this.instance_122.alpha = 0.441;

	this.instance_123 = new lib.Path_7_1();
	this.instance_123.setTransform(110.8,778.5,1,1,0,0,0,2.1,2.6);
	this.instance_123.alpha = 0.441;

	this.instance_124 = new lib.Path_8();
	this.instance_124.setTransform(105.8,776.3,1,1,0,0,0,1.5,1.2);
	this.instance_124.alpha = 0.441;

	this.instance_125 = new lib.Path_9();
	this.instance_125.setTransform(105.1,778.5,1,1,0,0,0,2.1,2.6);
	this.instance_125.alpha = 0.441;

	this.instance_126 = new lib.Path_10();
	this.instance_126.setTransform(100.7,776.3,1,1,0,0,0,1.5,1.2);
	this.instance_126.alpha = 0.441;

	this.instance_127 = new lib.Path_11();
	this.instance_127.setTransform(99.9,778.5,1,1,0,0,0,2.1,2.6);
	this.instance_127.alpha = 0.441;

	this.instance_128 = new lib.Path_12();
	this.instance_128.setTransform(120,768.3,1,1,0,0,0,1.5,1.2);
	this.instance_128.alpha = 0.441;

	this.instance_129 = new lib.Path_13();
	this.instance_129.setTransform(119.3,770.4,1,1,0,0,0,2.1,2.6);
	this.instance_129.alpha = 0.441;

	this.instance_130 = new lib.Path_14();
	this.instance_130.setTransform(114.9,768.3,1,1,0,0,0,1.5,1.2);
	this.instance_130.alpha = 0.441;

	this.instance_131 = new lib.Path_15();
	this.instance_131.setTransform(114.1,770.4,1,1,0,0,0,2.1,2.6);
	this.instance_131.alpha = 0.441;

	this.instance_132 = new lib.Path_16();
	this.instance_132.setTransform(109.2,768.3,1,1,0,0,0,1.5,1.2);
	this.instance_132.alpha = 0.441;

	this.instance_133 = new lib.Path_17();
	this.instance_133.setTransform(108.5,770.4,1,1,0,0,0,2.1,2.6);
	this.instance_133.alpha = 0.441;

	this.instance_134 = new lib.Path_18();
	this.instance_134.setTransform(111.5,768.3,1,1,0,0,0,1.5,1.2);
	this.instance_134.alpha = 0.441;

	this.instance_135 = new lib.Path_19();
	this.instance_135.setTransform(110.8,770.5,1,1,0,0,0,2.1,2.6);
	this.instance_135.alpha = 0.441;

	this.instance_136 = new lib.Path_20();
	this.instance_136.setTransform(105.8,768.3,1,1,0,0,0,1.5,1.2);
	this.instance_136.alpha = 0.441;

	this.instance_137 = new lib.Path_21();
	this.instance_137.setTransform(105.1,770.5,1,1,0,0,0,2.1,2.6);
	this.instance_137.alpha = 0.441;

	this.instance_138 = new lib.Path_22();
	this.instance_138.setTransform(100.7,768.3,1,1,0,0,0,1.5,1.2);
	this.instance_138.alpha = 0.441;

	this.instance_139 = new lib.Path_23();
	this.instance_139.setTransform(99.9,770.5,1,1,0,0,0,2.1,2.6);
	this.instance_139.alpha = 0.441;

	this.instance_140 = new lib.Path_24();
	this.instance_140.setTransform(111.9,708.2,1,1,0,0,0,1.5,1.3);
	this.instance_140.alpha = 0.441;

	this.instance_141 = new lib.Path_25();
	this.instance_141.setTransform(111.1,710.3,1,1,0,0,0,2.1,2.6);
	this.instance_141.alpha = 0.441;

	this.instance_142 = new lib.Path_26();
	this.instance_142.setTransform(106.7,708.2,1,1,0,0,0,1.5,1.3);
	this.instance_142.alpha = 0.441;

	this.instance_143 = new lib.Path_27();
	this.instance_143.setTransform(119.2,710.3,1,1,0,0,0,2.1,2.6);
	this.instance_143.alpha = 0.441;

	this.instance_144 = new lib.Path_28();
	this.instance_144.setTransform(115.6,709.3,1,1,0,0,0,1.5,1.2);
	this.instance_144.alpha = 0.441;

	this.instance_145 = new lib.Path_29();
	this.instance_145.setTransform(114.9,711.4,1,1,0,0,0,2.1,2.6);
	this.instance_145.alpha = 0.441;

	this.instance_146 = new lib.Path_30();
	this.instance_146.setTransform(110.5,709.3,1,1,0,0,0,1.5,1.2);
	this.instance_146.alpha = 0.441;

	this.instance_147 = new lib.Path_31();
	this.instance_147.setTransform(109.8,711.4,1,1,0,0,0,2.1,2.6);
	this.instance_147.alpha = 0.441;

	this.instance_148 = new lib.Path_32();
	this.instance_148.setTransform(111.7,699.9,1,1,0,0,0,1.5,1.3);
	this.instance_148.alpha = 0.441;

	this.instance_149 = new lib.Path_33();
	this.instance_149.setTransform(111,702,1,1,0,0,0,2.1,2.6);
	this.instance_149.alpha = 0.441;

	this.instance_150 = new lib.Path_34();
	this.instance_150.setTransform(106.6,699.9,1,1,0,0,0,1.5,1.3);
	this.instance_150.alpha = 0.441;

	this.instance_151 = new lib.Path_35();
	this.instance_151.setTransform(119,702.1,1,1,0,0,0,2.1,2.6);
	this.instance_151.alpha = 0.441;

	this.instance_152 = new lib.Path_36();
	this.instance_152.setTransform(115.5,701,1,1,0,0,0,1.5,1.2);
	this.instance_152.alpha = 0.441;

	this.instance_153 = new lib.Path_37();
	this.instance_153.setTransform(114.8,703.2,1,1,0,0,0,2.1,2.6);
	this.instance_153.alpha = 0.441;

	this.instance_154 = new lib.Path_38();
	this.instance_154.setTransform(110.3,701,1,1,0,0,0,1.5,1.2);
	this.instance_154.alpha = 0.441;

	this.instance_155 = new lib.Path_39();
	this.instance_155.setTransform(109.6,703.2,1,1,0,0,0,2.1,2.6);
	this.instance_155.alpha = 0.441;

	this.instance_156 = new lib.Path_40();
	this.instance_156.setTransform(116.6,753.4,1,1,0,0,0,1.5,1.3);
	this.instance_156.alpha = 0.441;

	this.instance_157 = new lib.Path_41();
	this.instance_157.setTransform(115.9,755.5,1,1,0,0,0,2.1,2.6);
	this.instance_157.alpha = 0.441;

	this.instance_158 = new lib.Path_42();
	this.instance_158.setTransform(111.4,753.4,1,1,0,0,0,1.5,1.3);
	this.instance_158.alpha = 0.441;

	this.instance_159 = new lib.Path_43();
	this.instance_159.setTransform(110.7,755.5,1,1,0,0,0,2.1,2.6);
	this.instance_159.alpha = 0.441;

	this.instance_160 = new lib.Path_44();
	this.instance_160.setTransform(109.3,754.5,1,1,0,0,0,1.5,1.2);
	this.instance_160.alpha = 0.441;

	this.instance_161 = new lib.Path_45();
	this.instance_161.setTransform(108.6,756.7,1,1,0,0,0,2.1,2.6);
	this.instance_161.alpha = 0.441;

	this.instance_162 = new lib.Path_46();
	this.instance_162.setTransform(104.2,754.5,1,1,0,0,0,1.5,1.2);
	this.instance_162.alpha = 0.441;

	this.instance_163 = new lib.Path_47();
	this.instance_163.setTransform(103.5,756.7,1,1,0,0,0,2.1,2.6);
	this.instance_163.alpha = 0.441;

	this.instance_164 = new lib.Path_48();
	this.instance_164.setTransform(116.5,745.2,1,1,0,0,0,1.5,1.3);
	this.instance_164.alpha = 0.441;

	this.instance_165 = new lib.Path_49();
	this.instance_165.setTransform(115.8,747.3,1,1,0,0,0,2.1,2.6);
	this.instance_165.alpha = 0.441;

	this.instance_166 = new lib.Path_50();
	this.instance_166.setTransform(111.3,745.2,1,1,0,0,0,1.5,1.3);
	this.instance_166.alpha = 0.441;

	this.instance_167 = new lib.Path_51();
	this.instance_167.setTransform(110.6,747.3,1,1,0,0,0,2.1,2.6);
	this.instance_167.alpha = 0.441;

	this.instance_168 = new lib.Path_52();
	this.instance_168.setTransform(109.2,746.3,1,1,0,0,0,1.5,1.2);
	this.instance_168.alpha = 0.441;

	this.instance_169 = new lib.Path_53();
	this.instance_169.setTransform(108.5,748.4,1,1,0,0,0,2.1,2.6);
	this.instance_169.alpha = 0.441;

	this.instance_170 = new lib.Path_54();
	this.instance_170.setTransform(104,746.3,1,1,0,0,0,1.5,1.2);
	this.instance_170.alpha = 0.441;

	this.instance_171 = new lib.Path_55();
	this.instance_171.setTransform(103.3,748.4,1,1,0,0,0,2.1,2.6);
	this.instance_171.alpha = 0.441;

	this.instance_172 = new lib.Path_56();
	this.instance_172.setTransform(119.1,736.8,1,1,0,0,0,1.5,1.3);
	this.instance_172.alpha = 0.441;

	this.instance_173 = new lib.Path_57();
	this.instance_173.setTransform(118.4,738.9,1,1,0,0,0,2.1,2.6);
	this.instance_173.alpha = 0.441;

	this.instance_174 = new lib.Path_58();
	this.instance_174.setTransform(113.9,736.8,1,1,0,0,0,1.5,1.3);
	this.instance_174.alpha = 0.441;

	this.instance_175 = new lib.Path_59();
	this.instance_175.setTransform(113.2,738.9,1,1,0,0,0,2.1,2.6);
	this.instance_175.alpha = 0.441;

	this.instance_176 = new lib.Path_60();
	this.instance_176.setTransform(108.3,736.8,1,1,0,0,0,1.5,1.3);
	this.instance_176.alpha = 0.441;

	this.instance_177 = new lib.Path_61();
	this.instance_177.setTransform(107.5,738.9,1,1,0,0,0,2.1,2.6);
	this.instance_177.alpha = 0.441;

	this.instance_178 = new lib.Path_62();
	this.instance_178.setTransform(110.4,736.6,1,1,0,0,0,1.5,1.3);
	this.instance_178.alpha = 0.441;

	this.instance_179 = new lib.Path_63();
	this.instance_179.setTransform(109.7,738.7,1,1,0,0,0,2.1,2.6);
	this.instance_179.alpha = 0.441;

	this.instance_180 = new lib.Path_64();
	this.instance_180.setTransform(104.8,736.6,1,1,0,0,0,1.5,1.3);
	this.instance_180.alpha = 0.441;

	this.instance_181 = new lib.Path_65();
	this.instance_181.setTransform(104,738.7,1,1,0,0,0,2.1,2.6);
	this.instance_181.alpha = 0.441;

	this.instance_182 = new lib.Path_66();
	this.instance_182.setTransform(99.6,736.6,1,1,0,0,0,1.5,1.3);
	this.instance_182.alpha = 0.441;

	this.instance_183 = new lib.Path_67();
	this.instance_183.setTransform(98.9,738.7,1,1,0,0,0,2.1,2.6);
	this.instance_183.alpha = 0.441;

	this.instance_184 = new lib.Path_68();
	this.instance_184.setTransform(119,728.6,1,1,0,0,0,1.5,1.2);
	this.instance_184.alpha = 0.441;

	this.instance_185 = new lib.Path_69();
	this.instance_185.setTransform(118.2,730.7,1,1,0,0,0,2.1,2.6);
	this.instance_185.alpha = 0.441;

	this.instance_186 = new lib.Path_70();
	this.instance_186.setTransform(113.8,728.6,1,1,0,0,0,1.5,1.2);
	this.instance_186.alpha = 0.441;

	this.instance_187 = new lib.Path_71();
	this.instance_187.setTransform(113.1,730.7,1,1,0,0,0,2.1,2.6);
	this.instance_187.alpha = 0.441;

	this.instance_188 = new lib.Path_72();
	this.instance_188.setTransform(108.1,728.6,1,1,0,0,0,1.5,1.2);
	this.instance_188.alpha = 0.441;

	this.instance_189 = new lib.Path_73();
	this.instance_189.setTransform(107.4,730.7,1,1,0,0,0,2.1,2.6);
	this.instance_189.alpha = 0.441;

	this.instance_190 = new lib.Path_74();
	this.instance_190.setTransform(110.3,728.4,1,1,0,0,0,1.5,1.2);
	this.instance_190.alpha = 0.441;

	this.instance_191 = new lib.Path_75();
	this.instance_191.setTransform(109.6,730.5,1,1,0,0,0,2.1,2.6);
	this.instance_191.alpha = 0.441;

	this.instance_192 = new lib.Path_76();
	this.instance_192.setTransform(104.6,728.4,1,1,0,0,0,1.5,1.2);
	this.instance_192.alpha = 0.441;

	this.instance_193 = new lib.Path_77();
	this.instance_193.setTransform(103.9,730.5,1,1,0,0,0,2.1,2.6);
	this.instance_193.alpha = 0.441;

	this.instance_194 = new lib.Path_78();
	this.instance_194.setTransform(99.5,728.4,1,1,0,0,0,1.5,1.2);
	this.instance_194.alpha = 0.441;

	this.instance_195 = new lib.Path_79();
	this.instance_195.setTransform(98.7,730.5,1,1,0,0,0,2.1,2.6);
	this.instance_195.alpha = 0.441;

	this.instance_196 = new lib.Path_80();
	this.instance_196.setTransform(120.1,720.7,1,1,0,0,0,1.5,1.2);
	this.instance_196.alpha = 0.441;

	this.instance_197 = new lib.Path_81();
	this.instance_197.setTransform(118.4,722.8,1,1,0,0,0,2.1,2.6);
	this.instance_197.alpha = 0.441;

	this.instance_198 = new lib.Path_82();
	this.instance_198.setTransform(114.9,720.7,1,1,0,0,0,1.5,1.2);
	this.instance_198.alpha = 0.441;

	this.instance_199 = new lib.Path_83();
	this.instance_199.setTransform(113.2,722.8,1,1,0,0,0,2.1,2.6);
	this.instance_199.alpha = 0.441;

	this.instance_200 = new lib.Path_84();
	this.instance_200.setTransform(109.3,720.7,1,1,0,0,0,1.5,1.2);
	this.instance_200.alpha = 0.441;

	this.instance_201 = new lib.Path_85();
	this.instance_201.setTransform(107.5,722.8,1,1,0,0,0,2.1,2.6);
	this.instance_201.alpha = 0.441;

	this.instance_202 = new lib.Path_86();
	this.instance_202.setTransform(111.4,720.5,1,1,0,0,0,1.5,1.2);
	this.instance_202.alpha = 0.441;

	this.instance_203 = new lib.Path_87();
	this.instance_203.setTransform(109.7,722.6,1,1,0,0,0,2.1,2.6);
	this.instance_203.alpha = 0.441;

	this.instance_204 = new lib.Path_88();
	this.instance_204.setTransform(105.8,720.5,1,1,0,0,0,1.5,1.2);
	this.instance_204.alpha = 0.441;

	this.instance_205 = new lib.Path_89();
	this.instance_205.setTransform(104,722.6,1,1,0,0,0,2.1,2.6);
	this.instance_205.alpha = 0.441;

	this.instance_206 = new lib.Path_90();
	this.instance_206.setTransform(100.6,720.5,1,1,0,0,0,1.5,1.2);
	this.instance_206.alpha = 0.441;

	this.instance_207 = new lib.Path_91();
	this.instance_207.setTransform(98.9,722.6,1,1,0,0,0,2.1,2.6);
	this.instance_207.alpha = 0.441;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_115,p:{x:77.8,y:722.6}},{t:this.instance_114,p:{x:78.5,y:720.4}},{t:this.instance_113,p:{x:83,y:722.6}},{t:this.instance_112,p:{x:83.7,y:720.4}},{t:this.instance_111,p:{x:88.6,y:722.6}},{t:this.instance_110,p:{x:89.4,y:720.4}},{t:this.instance_109,p:{x:126.9,y:722.8}},{t:this.instance_108,p:{x:127.7,y:720.7}},{t:this.instance_107,p:{x:132.6,y:722.8}},{t:this.instance_106,p:{x:133.3,y:720.7}},{t:this.instance_105,p:{x:137.8,y:722.8}},{t:this.instance_104,p:{x:138.5,y:720.7}},{t:this.instance_103,p:{x:77.7,y:730.5}},{t:this.instance_102,p:{x:78.4,y:728.3}},{t:this.instance_101,p:{x:82.8,y:730.5}},{t:this.instance_100,p:{x:83.6,y:728.3}},{t:this.instance_99,p:{x:88.5,y:730.5}},{t:this.instance_98,p:{x:89.2,y:728.3}},{t:this.instance_97,p:{x:126.8,y:730.7}},{t:this.instance_96,p:{x:127.5,y:728.6}},{t:this.instance_95,p:{x:132.5,y:730.7}},{t:this.instance_94,p:{x:133.2,y:728.6}},{t:this.instance_93,p:{x:137.6,y:730.7}},{t:this.instance_92,p:{x:138.4,y:728.6}},{t:this.instance_91,p:{x:77.8,y:738.7}},{t:this.instance_90,p:{x:78.5,y:736.6}},{t:this.instance_89,p:{x:83,y:738.7}},{t:this.instance_88,p:{x:83.7,y:736.6}},{t:this.instance_87,p:{x:88.6,y:738.7}},{t:this.instance_86,p:{x:89.4,y:736.6}},{t:this.instance_85,p:{x:126.9,y:738.9}},{t:this.instance_84,p:{x:127.7,y:736.8}},{t:this.instance_83,p:{x:132.6,y:738.9}},{t:this.instance_82,p:{x:133.3,y:736.8}},{t:this.instance_81,p:{x:137.8,y:738.9}},{t:this.instance_80,p:{x:138.5,y:736.8}},{t:this.instance_79,p:{x:82.3,y:748.4}},{t:this.instance_78,p:{x:83,y:746.2}},{t:this.instance_77,p:{x:87.4,y:748.4}},{t:this.instance_76,p:{x:88.2,y:746.2}},{t:this.instance_75,p:{x:130,y:747.3}},{t:this.instance_74,p:{x:130.7,y:745.2}},{t:this.instance_73,p:{x:135.2,y:747.3}},{t:this.instance_72,p:{x:135.9,y:745.2}},{t:this.instance_71,p:{x:82.4,y:756.6}},{t:this.instance_70,p:{x:83.1,y:754.5}},{t:this.instance_69,p:{x:87.6,y:756.6}},{t:this.instance_68,p:{x:88.3,y:754.5}},{t:this.instance_67,p:{x:130.1,y:755.5}},{t:this.instance_66,p:{x:130.8,y:753.4}},{t:this.instance_65,p:{x:135.3,y:755.5}},{t:this.instance_64,p:{x:136,y:753.4}},{t:this.instance_63,p:{x:87.6,y:703.1}},{t:this.instance_62,p:{x:88.3,y:701}},{t:this.instance_61,p:{x:92.7,y:703.1}},{t:this.instance_60,p:{x:93.5,y:701}},{t:this.instance_59,p:{x:124.2,y:702}},{t:this.instance_58,p:{x:125,y:699.9}},{t:this.instance_57,p:{x:129.4,y:702}},{t:this.instance_56,p:{x:130.1,y:699.9}},{t:this.instance_55,p:{x:87.7,y:711.4}},{t:this.instance_54,p:{x:88.4,y:709.2}},{t:this.instance_53,p:{x:92.9,y:711.4}},{t:this.instance_52,p:{x:93.6,y:709.2}},{t:this.instance_51,p:{x:124.4,y:710.3}},{t:this.instance_50,p:{x:125.1,y:708.2}},{t:this.instance_49,p:{x:129.5,y:710.3}},{t:this.instance_48,p:{x:130.3,y:708.2}},{t:this.instance_47,p:{x:77.9,y:770.4}},{t:this.instance_46,p:{x:78.6,y:768.3}},{t:this.instance_45,p:{x:83,y:770.4}},{t:this.instance_44,p:{x:83.8,y:768.3}},{t:this.instance_43,p:{x:88.7,y:770.4}},{t:this.instance_42,p:{x:89.4,y:768.3}},{t:this.instance_41,p:{x:126.9,y:770.4}},{t:this.instance_40,p:{x:127.6,y:768.3}},{t:this.instance_39,p:{x:132.5,y:770.4}},{t:this.instance_38,p:{x:133.3,y:768.3}},{t:this.instance_37,p:{x:137.7,y:770.4}},{t:this.instance_36,p:{x:138.4,y:768.3}},{t:this.instance_35,p:{x:77.9,y:778.4}},{t:this.instance_34,p:{x:78.6,y:776.3}},{t:this.instance_33,p:{x:83,y:778.4}},{t:this.instance_32,p:{x:83.8,y:776.3}},{t:this.instance_31,p:{x:88.7,y:778.4}},{t:this.instance_30,p:{x:89.4,y:776.3}},{t:this.instance_29,p:{x:126.9,y:778.4}},{t:this.instance_28,p:{x:127.6,y:776.3}},{t:this.instance_27,p:{x:132.5,y:778.4}},{t:this.instance_26,p:{x:133.3,y:776.3}},{t:this.instance_25,p:{x:137.7,y:778.4}},{t:this.instance_24,p:{x:138.4,y:776.3}}]}).to({state:[{t:this.instance_115,p:{x:86.7,y:722.6}},{t:this.instance_114,p:{x:87.4,y:720.4}},{t:this.instance_113,p:{x:91.8,y:722.6}},{t:this.instance_112,p:{x:92.6,y:720.4}},{t:this.instance_111,p:{x:97.5,y:722.6}},{t:this.instance_110,p:{x:98.2,y:720.4}},{t:this.instance_109,p:{x:115.5,y:722.8}},{t:this.instance_108,p:{x:116.2,y:720.7}},{t:this.instance_107,p:{x:121.2,y:722.8}},{t:this.instance_106,p:{x:121.9,y:720.7}},{t:this.instance_105,p:{x:126.3,y:722.8}},{t:this.instance_104,p:{x:127.1,y:720.7}},{t:this.instance_103,p:{x:86.5,y:730.5}},{t:this.instance_102,p:{x:87.3,y:728.3}},{t:this.instance_101,p:{x:91.7,y:730.5}},{t:this.instance_100,p:{x:92.4,y:728.3}},{t:this.instance_99,p:{x:97.4,y:730.5}},{t:this.instance_98,p:{x:98.1,y:728.3}},{t:this.instance_97,p:{x:115.4,y:730.7}},{t:this.instance_96,p:{x:116.1,y:728.6}},{t:this.instance_95,p:{x:121,y:730.7}},{t:this.instance_94,p:{x:121.8,y:728.6}},{t:this.instance_93,p:{x:126.2,y:730.7}},{t:this.instance_92,p:{x:126.9,y:728.6}},{t:this.instance_91,p:{x:86.7,y:738.7}},{t:this.instance_90,p:{x:87.4,y:736.6}},{t:this.instance_89,p:{x:91.8,y:738.7}},{t:this.instance_88,p:{x:92.6,y:736.6}},{t:this.instance_87,p:{x:97.5,y:738.7}},{t:this.instance_86,p:{x:98.2,y:736.6}},{t:this.instance_85,p:{x:115.5,y:738.9}},{t:this.instance_84,p:{x:116.2,y:736.8}},{t:this.instance_83,p:{x:121.2,y:738.9}},{t:this.instance_82,p:{x:121.9,y:736.8}},{t:this.instance_81,p:{x:126.3,y:738.9}},{t:this.instance_80,p:{x:127.1,y:736.8}},{t:this.instance_79,p:{x:91.1,y:748.4}},{t:this.instance_78,p:{x:91.8,y:746.2}},{t:this.instance_77,p:{x:96.3,y:748.4}},{t:this.instance_76,p:{x:97,y:746.2}},{t:this.instance_75,p:{x:118.5,y:747.3}},{t:this.instance_74,p:{x:119.3,y:745.2}},{t:this.instance_73,p:{x:123.7,y:747.3}},{t:this.instance_72,p:{x:124.4,y:745.2}},{t:this.instance_71,p:{x:91.3,y:756.6}},{t:this.instance_70,p:{x:92,y:754.5}},{t:this.instance_69,p:{x:96.4,y:756.6}},{t:this.instance_68,p:{x:97.1,y:754.5}},{t:this.instance_67,p:{x:118.7,y:755.5}},{t:this.instance_66,p:{x:119.4,y:753.4}},{t:this.instance_65,p:{x:123.8,y:755.5}},{t:this.instance_64,p:{x:124.6,y:753.4}},{t:this.instance_63,p:{x:96.4,y:703.1}},{t:this.instance_62,p:{x:97.1,y:701}},{t:this.instance_61,p:{x:101.6,y:703.1}},{t:this.instance_60,p:{x:102.3,y:701}},{t:this.instance_59,p:{x:112.8,y:702}},{t:this.instance_58,p:{x:113.5,y:699.9}},{t:this.instance_57,p:{x:118,y:702}},{t:this.instance_56,p:{x:118.7,y:699.9}},{t:this.instance_55,p:{x:96.6,y:711.4}},{t:this.instance_54,p:{x:97.3,y:709.2}},{t:this.instance_53,p:{x:101.7,y:711.4}},{t:this.instance_52,p:{x:102.4,y:709.2}},{t:this.instance_51,p:{x:112.9,y:710.3}},{t:this.instance_50,p:{x:113.7,y:708.2}},{t:this.instance_49,p:{x:118.1,y:710.3}},{t:this.instance_48,p:{x:118.8,y:708.2}},{t:this.instance_47,p:{x:86.7,y:770.4}},{t:this.instance_46,p:{x:87.5,y:768.3}},{t:this.instance_45,p:{x:91.9,y:770.4}},{t:this.instance_44,p:{x:92.6,y:768.3}},{t:this.instance_43,p:{x:97.6,y:770.4}},{t:this.instance_42,p:{x:98.3,y:768.3}},{t:this.instance_41,p:{x:115.4,y:770.4}},{t:this.instance_40,p:{x:116.2,y:768.3}},{t:this.instance_39,p:{x:121.1,y:770.4}},{t:this.instance_38,p:{x:121.8,y:768.3}},{t:this.instance_37,p:{x:126.3,y:770.4}},{t:this.instance_36,p:{x:127,y:768.3}},{t:this.instance_35,p:{x:86.7,y:778.4}},{t:this.instance_34,p:{x:87.5,y:776.3}},{t:this.instance_33,p:{x:91.9,y:778.4}},{t:this.instance_32,p:{x:92.6,y:776.3}},{t:this.instance_31,p:{x:97.6,y:778.4}},{t:this.instance_30,p:{x:98.3,y:776.3}},{t:this.instance_29,p:{x:115.4,y:778.4}},{t:this.instance_28,p:{x:116.2,y:776.3}},{t:this.instance_27,p:{x:121.1,y:778.4}},{t:this.instance_26,p:{x:121.8,y:776.3}},{t:this.instance_25,p:{x:126.3,y:778.4}},{t:this.instance_24,p:{x:127,y:776.3}}]},5).to({state:[{t:this.instance_115,p:{x:98.9,y:722.6}},{t:this.instance_114,p:{x:100.6,y:720.5}},{t:this.instance_113,p:{x:104,y:722.6}},{t:this.instance_112,p:{x:105.8,y:720.5}},{t:this.instance_111,p:{x:109.7,y:722.6}},{t:this.instance_110,p:{x:111.4,y:720.5}},{t:this.instance_109,p:{x:107.5,y:722.8}},{t:this.instance_108,p:{x:109.3,y:720.7}},{t:this.instance_107,p:{x:113.2,y:722.8}},{t:this.instance_106,p:{x:114.9,y:720.7}},{t:this.instance_105,p:{x:118.4,y:722.8}},{t:this.instance_104,p:{x:120.1,y:720.7}},{t:this.instance_103,p:{x:98.7,y:730.5}},{t:this.instance_102,p:{x:99.5,y:728.4}},{t:this.instance_101,p:{x:103.9,y:730.5}},{t:this.instance_100,p:{x:104.6,y:728.4}},{t:this.instance_99,p:{x:109.6,y:730.5}},{t:this.instance_98,p:{x:110.3,y:728.4}},{t:this.instance_97,p:{x:107.4,y:730.7}},{t:this.instance_96,p:{x:108.1,y:728.6}},{t:this.instance_95,p:{x:113.1,y:730.7}},{t:this.instance_94,p:{x:113.8,y:728.6}},{t:this.instance_93,p:{x:118.2,y:730.7}},{t:this.instance_92,p:{x:119,y:728.6}},{t:this.instance_91,p:{x:98.9,y:738.7}},{t:this.instance_90,p:{x:99.6,y:736.6}},{t:this.instance_89,p:{x:104,y:738.7}},{t:this.instance_88,p:{x:104.8,y:736.6}},{t:this.instance_87,p:{x:109.7,y:738.7}},{t:this.instance_86,p:{x:110.4,y:736.6}},{t:this.instance_85,p:{x:107.5,y:738.9}},{t:this.instance_84,p:{x:108.3,y:736.8}},{t:this.instance_83,p:{x:113.2,y:738.9}},{t:this.instance_82,p:{x:113.9,y:736.8}},{t:this.instance_81,p:{x:118.4,y:738.9}},{t:this.instance_80,p:{x:119.1,y:736.8}},{t:this.instance_79,p:{x:103.3,y:748.4}},{t:this.instance_78,p:{x:104,y:746.3}},{t:this.instance_77,p:{x:108.5,y:748.4}},{t:this.instance_76,p:{x:109.2,y:746.3}},{t:this.instance_75,p:{x:110.6,y:747.3}},{t:this.instance_74,p:{x:111.3,y:745.2}},{t:this.instance_73,p:{x:115.8,y:747.3}},{t:this.instance_72,p:{x:116.5,y:745.2}},{t:this.instance_71,p:{x:103.5,y:756.7}},{t:this.instance_70,p:{x:104.2,y:754.5}},{t:this.instance_69,p:{x:108.6,y:756.7}},{t:this.instance_68,p:{x:109.3,y:754.5}},{t:this.instance_67,p:{x:110.7,y:755.5}},{t:this.instance_66,p:{x:111.4,y:753.4}},{t:this.instance_65,p:{x:115.9,y:755.5}},{t:this.instance_64,p:{x:116.6,y:753.4}},{t:this.instance_63,p:{x:109.6,y:703.2}},{t:this.instance_62,p:{x:110.3,y:701}},{t:this.instance_61,p:{x:114.8,y:703.2}},{t:this.instance_60,p:{x:115.5,y:701}},{t:this.instance_59,p:{x:119,y:702.1}},{t:this.instance_58,p:{x:106.6,y:699.9}},{t:this.instance_57,p:{x:111,y:702}},{t:this.instance_56,p:{x:111.7,y:699.9}},{t:this.instance_55,p:{x:109.8,y:711.4}},{t:this.instance_54,p:{x:110.5,y:709.3}},{t:this.instance_53,p:{x:114.9,y:711.4}},{t:this.instance_52,p:{x:115.6,y:709.3}},{t:this.instance_51,p:{x:119.2,y:710.3}},{t:this.instance_50,p:{x:106.7,y:708.2}},{t:this.instance_49,p:{x:111.1,y:710.3}},{t:this.instance_48,p:{x:111.9,y:708.2}},{t:this.instance_47,p:{x:99.9,y:770.5}},{t:this.instance_46,p:{x:100.7,y:768.3}},{t:this.instance_45,p:{x:105.1,y:770.5}},{t:this.instance_44,p:{x:105.8,y:768.3}},{t:this.instance_43,p:{x:110.8,y:770.5}},{t:this.instance_42,p:{x:111.5,y:768.3}},{t:this.instance_41,p:{x:108.5,y:770.4}},{t:this.instance_40,p:{x:109.2,y:768.3}},{t:this.instance_39,p:{x:114.1,y:770.4}},{t:this.instance_38,p:{x:114.9,y:768.3}},{t:this.instance_37,p:{x:119.3,y:770.4}},{t:this.instance_36,p:{x:120,y:768.3}},{t:this.instance_35,p:{x:99.9,y:778.5}},{t:this.instance_34,p:{x:100.7,y:776.3}},{t:this.instance_33,p:{x:105.1,y:778.5}},{t:this.instance_32,p:{x:105.8,y:776.3}},{t:this.instance_31,p:{x:110.8,y:778.5}},{t:this.instance_30,p:{x:111.5,y:776.3}},{t:this.instance_29,p:{x:108.5,y:778.4}},{t:this.instance_28,p:{x:109.2,y:776.3}},{t:this.instance_27,p:{x:114.1,y:778.4}},{t:this.instance_26,p:{x:114.9,y:776.3}},{t:this.instance_25,p:{x:119.3,y:778.4}},{t:this.instance_24,p:{x:120,y:776.3}}]},5).to({state:[{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115,p:{x:97.8,y:734.5}},{t:this.instance_114,p:{x:99.5,y:732.3}},{t:this.instance_113,p:{x:102.9,y:734.5}},{t:this.instance_112,p:{x:104.7,y:732.3}},{t:this.instance_111,p:{x:108.6,y:734.5}},{t:this.instance_110,p:{x:110.3,y:732.3}},{t:this.instance_109,p:{x:106.4,y:734.7}},{t:this.instance_108,p:{x:108.2,y:732.5}},{t:this.instance_107,p:{x:112.1,y:734.7}},{t:this.instance_106,p:{x:113.8,y:732.5}},{t:this.instance_105,p:{x:117.3,y:734.7}},{t:this.instance_104,p:{x:119,y:732.5}},{t:this.instance_103,p:{x:97.6,y:742.4}},{t:this.instance_102,p:{x:98.4,y:740.2}},{t:this.instance_101,p:{x:102.8,y:742.4}},{t:this.instance_100,p:{x:103.5,y:740.2}},{t:this.instance_99,p:{x:108.5,y:742.4}},{t:this.instance_98,p:{x:109.2,y:740.2}},{t:this.instance_97,p:{x:106.3,y:742.6}},{t:this.instance_96,p:{x:107,y:740.4}},{t:this.instance_95,p:{x:112,y:742.6}},{t:this.instance_94,p:{x:112.7,y:740.4}},{t:this.instance_93,p:{x:117.1,y:742.6}},{t:this.instance_92,p:{x:117.9,y:740.4}},{t:this.instance_91,p:{x:97.8,y:750.6}},{t:this.instance_90,p:{x:98.5,y:748.5}},{t:this.instance_89,p:{x:102.9,y:750.6}},{t:this.instance_88,p:{x:103.7,y:748.5}},{t:this.instance_87,p:{x:108.6,y:750.6}},{t:this.instance_86,p:{x:109.3,y:748.5}},{t:this.instance_85,p:{x:106.4,y:750.8}},{t:this.instance_84,p:{x:107.2,y:748.7}},{t:this.instance_83,p:{x:112.1,y:750.8}},{t:this.instance_82,p:{x:112.8,y:748.7}},{t:this.instance_81,p:{x:117.3,y:750.8}},{t:this.instance_80,p:{x:118,y:748.7}},{t:this.instance_79,p:{x:102.2,y:760.3}},{t:this.instance_78,p:{x:102.9,y:758.1}},{t:this.instance_77,p:{x:107.4,y:760.3}},{t:this.instance_76,p:{x:108.1,y:758.1}},{t:this.instance_75,p:{x:109.5,y:759.1}},{t:this.instance_74,p:{x:110.2,y:757}},{t:this.instance_73,p:{x:114.7,y:759.1}},{t:this.instance_72,p:{x:115.4,y:757}},{t:this.instance_71,p:{x:102.4,y:768.5}},{t:this.instance_70,p:{x:103.1,y:766.4}},{t:this.instance_69,p:{x:107.5,y:768.5}},{t:this.instance_68,p:{x:108.2,y:766.4}},{t:this.instance_67,p:{x:109.6,y:767.4}},{t:this.instance_66,p:{x:110.3,y:765.3}},{t:this.instance_65,p:{x:114.8,y:767.4}},{t:this.instance_64,p:{x:115.5,y:765.3}},{t:this.instance_63,p:{x:108.5,y:715}},{t:this.instance_62,p:{x:109.2,y:712.9}},{t:this.instance_61,p:{x:113.7,y:715}},{t:this.instance_60,p:{x:114.4,y:712.9}},{t:this.instance_59,p:{x:117.9,y:713.9}},{t:this.instance_58,p:{x:105.5,y:711.8}},{t:this.instance_57,p:{x:109.9,y:713.9}},{t:this.instance_56,p:{x:110.6,y:711.8}},{t:this.instance_55,p:{x:108.7,y:723.3}},{t:this.instance_54,p:{x:109.4,y:721.1}},{t:this.instance_53,p:{x:113.8,y:723.3}},{t:this.instance_52,p:{x:114.5,y:721.1}},{t:this.instance_51,p:{x:118.1,y:722.2}},{t:this.instance_50,p:{x:105.6,y:720}},{t:this.instance_49,p:{x:110,y:722.1}},{t:this.instance_48,p:{x:110.8,y:720}},{t:this.instance_47,p:{x:98.8,y:782.3}},{t:this.instance_46,p:{x:99.6,y:780.2}},{t:this.instance_45,p:{x:104,y:782.3}},{t:this.instance_44,p:{x:104.7,y:780.2}},{t:this.instance_43,p:{x:109.7,y:782.3}},{t:this.instance_42,p:{x:110.4,y:780.2}},{t:this.instance_41,p:{x:107.4,y:782.3}},{t:this.instance_40,p:{x:108.1,y:780.1}},{t:this.instance_39,p:{x:113,y:782.3}},{t:this.instance_38,p:{x:113.8,y:780.1}},{t:this.instance_37,p:{x:118.2,y:782.3}},{t:this.instance_36,p:{x:118.9,y:780.1}},{t:this.instance_35,p:{x:98.8,y:790.3}},{t:this.instance_34,p:{x:99.6,y:788.2}},{t:this.instance_33,p:{x:104,y:790.3}},{t:this.instance_32,p:{x:104.7,y:788.2}},{t:this.instance_31,p:{x:109.7,y:790.3}},{t:this.instance_30,p:{x:110.4,y:788.2}},{t:this.instance_29,p:{x:107.4,y:790.3}},{t:this.instance_28,p:{x:108.1,y:788.1}},{t:this.instance_27,p:{x:113,y:790.3}},{t:this.instance_26,p:{x:113.8,y:788.1}},{t:this.instance_25,p:{x:118.2,y:790.3}},{t:this.instance_24,p:{x:118.9,y:788.1}}]},5).to({state:[]},4).to({state:[{t:this.instance_115,p:{x:77.8,y:722.6}},{t:this.instance_114,p:{x:78.5,y:720.4}},{t:this.instance_113,p:{x:83,y:722.6}},{t:this.instance_112,p:{x:83.7,y:720.4}},{t:this.instance_111,p:{x:88.6,y:722.6}},{t:this.instance_110,p:{x:89.4,y:720.4}},{t:this.instance_109,p:{x:126.9,y:722.8}},{t:this.instance_108,p:{x:127.7,y:720.7}},{t:this.instance_107,p:{x:132.6,y:722.8}},{t:this.instance_106,p:{x:133.3,y:720.7}},{t:this.instance_105,p:{x:137.8,y:722.8}},{t:this.instance_104,p:{x:138.5,y:720.7}},{t:this.instance_103,p:{x:77.7,y:730.5}},{t:this.instance_102,p:{x:78.4,y:728.3}},{t:this.instance_101,p:{x:82.8,y:730.5}},{t:this.instance_100,p:{x:83.6,y:728.3}},{t:this.instance_99,p:{x:88.5,y:730.5}},{t:this.instance_98,p:{x:89.2,y:728.3}},{t:this.instance_97,p:{x:126.8,y:730.7}},{t:this.instance_96,p:{x:127.5,y:728.6}},{t:this.instance_95,p:{x:132.5,y:730.7}},{t:this.instance_94,p:{x:133.2,y:728.6}},{t:this.instance_93,p:{x:137.6,y:730.7}},{t:this.instance_92,p:{x:138.4,y:728.6}},{t:this.instance_91,p:{x:77.8,y:738.7}},{t:this.instance_90,p:{x:78.5,y:736.6}},{t:this.instance_89,p:{x:83,y:738.7}},{t:this.instance_88,p:{x:83.7,y:736.6}},{t:this.instance_87,p:{x:88.6,y:738.7}},{t:this.instance_86,p:{x:89.4,y:736.6}},{t:this.instance_85,p:{x:126.9,y:738.9}},{t:this.instance_84,p:{x:127.7,y:736.8}},{t:this.instance_83,p:{x:132.6,y:738.9}},{t:this.instance_82,p:{x:133.3,y:736.8}},{t:this.instance_81,p:{x:137.8,y:738.9}},{t:this.instance_80,p:{x:138.5,y:736.8}},{t:this.instance_79,p:{x:82.3,y:748.4}},{t:this.instance_78,p:{x:83,y:746.2}},{t:this.instance_77,p:{x:87.4,y:748.4}},{t:this.instance_76,p:{x:88.2,y:746.2}},{t:this.instance_75,p:{x:130,y:747.3}},{t:this.instance_74,p:{x:130.7,y:745.2}},{t:this.instance_73,p:{x:135.2,y:747.3}},{t:this.instance_72,p:{x:135.9,y:745.2}},{t:this.instance_71,p:{x:82.4,y:756.6}},{t:this.instance_70,p:{x:83.1,y:754.5}},{t:this.instance_69,p:{x:87.6,y:756.6}},{t:this.instance_68,p:{x:88.3,y:754.5}},{t:this.instance_67,p:{x:130.1,y:755.5}},{t:this.instance_66,p:{x:130.8,y:753.4}},{t:this.instance_65,p:{x:135.3,y:755.5}},{t:this.instance_64,p:{x:136,y:753.4}},{t:this.instance_63,p:{x:87.6,y:703.1}},{t:this.instance_62,p:{x:88.3,y:701}},{t:this.instance_61,p:{x:92.7,y:703.1}},{t:this.instance_60,p:{x:93.5,y:701}},{t:this.instance_59,p:{x:124.2,y:702}},{t:this.instance_58,p:{x:125,y:699.9}},{t:this.instance_57,p:{x:129.4,y:702}},{t:this.instance_56,p:{x:130.1,y:699.9}},{t:this.instance_55,p:{x:87.7,y:711.4}},{t:this.instance_54,p:{x:88.4,y:709.2}},{t:this.instance_53,p:{x:92.9,y:711.4}},{t:this.instance_52,p:{x:93.6,y:709.2}},{t:this.instance_51,p:{x:124.4,y:710.3}},{t:this.instance_50,p:{x:125.1,y:708.2}},{t:this.instance_49,p:{x:129.5,y:710.3}},{t:this.instance_48,p:{x:130.3,y:708.2}},{t:this.instance_47,p:{x:77.9,y:770.4}},{t:this.instance_46,p:{x:78.6,y:768.3}},{t:this.instance_45,p:{x:83,y:770.4}},{t:this.instance_44,p:{x:83.8,y:768.3}},{t:this.instance_43,p:{x:88.7,y:770.4}},{t:this.instance_42,p:{x:89.4,y:768.3}},{t:this.instance_41,p:{x:126.9,y:770.4}},{t:this.instance_40,p:{x:127.6,y:768.3}},{t:this.instance_39,p:{x:132.5,y:770.4}},{t:this.instance_38,p:{x:133.3,y:768.3}},{t:this.instance_37,p:{x:137.7,y:770.4}},{t:this.instance_36,p:{x:138.4,y:768.3}},{t:this.instance_35,p:{x:77.9,y:778.4}},{t:this.instance_34,p:{x:78.6,y:776.3}},{t:this.instance_33,p:{x:83,y:778.4}},{t:this.instance_32,p:{x:83.8,y:776.3}},{t:this.instance_31,p:{x:88.7,y:778.4}},{t:this.instance_30,p:{x:89.4,y:776.3}},{t:this.instance_29,p:{x:126.9,y:778.4}},{t:this.instance_28,p:{x:127.6,y:776.3}},{t:this.instance_27,p:{x:132.5,y:778.4}},{t:this.instance_26,p:{x:133.3,y:776.3}},{t:this.instance_25,p:{x:137.7,y:778.4}},{t:this.instance_24,p:{x:138.4,y:776.3}}]},47).to({state:[{t:this.instance_115,p:{x:86.7,y:722.6}},{t:this.instance_114,p:{x:87.4,y:720.4}},{t:this.instance_113,p:{x:91.8,y:722.6}},{t:this.instance_112,p:{x:92.6,y:720.4}},{t:this.instance_111,p:{x:97.5,y:722.6}},{t:this.instance_110,p:{x:98.2,y:720.4}},{t:this.instance_109,p:{x:115.5,y:722.8}},{t:this.instance_108,p:{x:116.2,y:720.7}},{t:this.instance_107,p:{x:121.2,y:722.8}},{t:this.instance_106,p:{x:121.9,y:720.7}},{t:this.instance_105,p:{x:126.3,y:722.8}},{t:this.instance_104,p:{x:127.1,y:720.7}},{t:this.instance_103,p:{x:86.5,y:730.5}},{t:this.instance_102,p:{x:87.3,y:728.3}},{t:this.instance_101,p:{x:91.7,y:730.5}},{t:this.instance_100,p:{x:92.4,y:728.3}},{t:this.instance_99,p:{x:97.4,y:730.5}},{t:this.instance_98,p:{x:98.1,y:728.3}},{t:this.instance_97,p:{x:115.4,y:730.7}},{t:this.instance_96,p:{x:116.1,y:728.6}},{t:this.instance_95,p:{x:121,y:730.7}},{t:this.instance_94,p:{x:121.8,y:728.6}},{t:this.instance_93,p:{x:126.2,y:730.7}},{t:this.instance_92,p:{x:126.9,y:728.6}},{t:this.instance_91,p:{x:86.7,y:738.7}},{t:this.instance_90,p:{x:87.4,y:736.6}},{t:this.instance_89,p:{x:91.8,y:738.7}},{t:this.instance_88,p:{x:92.6,y:736.6}},{t:this.instance_87,p:{x:97.5,y:738.7}},{t:this.instance_86,p:{x:98.2,y:736.6}},{t:this.instance_85,p:{x:115.5,y:738.9}},{t:this.instance_84,p:{x:116.2,y:736.8}},{t:this.instance_83,p:{x:121.2,y:738.9}},{t:this.instance_82,p:{x:121.9,y:736.8}},{t:this.instance_81,p:{x:126.3,y:738.9}},{t:this.instance_80,p:{x:127.1,y:736.8}},{t:this.instance_79,p:{x:91.1,y:748.4}},{t:this.instance_78,p:{x:91.8,y:746.2}},{t:this.instance_77,p:{x:96.3,y:748.4}},{t:this.instance_76,p:{x:97,y:746.2}},{t:this.instance_75,p:{x:118.5,y:747.3}},{t:this.instance_74,p:{x:119.3,y:745.2}},{t:this.instance_73,p:{x:123.7,y:747.3}},{t:this.instance_72,p:{x:124.4,y:745.2}},{t:this.instance_71,p:{x:91.3,y:756.6}},{t:this.instance_70,p:{x:92,y:754.5}},{t:this.instance_69,p:{x:96.4,y:756.6}},{t:this.instance_68,p:{x:97.1,y:754.5}},{t:this.instance_67,p:{x:118.7,y:755.5}},{t:this.instance_66,p:{x:119.4,y:753.4}},{t:this.instance_65,p:{x:123.8,y:755.5}},{t:this.instance_64,p:{x:124.6,y:753.4}},{t:this.instance_63,p:{x:96.4,y:703.1}},{t:this.instance_62,p:{x:97.1,y:701}},{t:this.instance_61,p:{x:101.6,y:703.1}},{t:this.instance_60,p:{x:102.3,y:701}},{t:this.instance_59,p:{x:112.8,y:702}},{t:this.instance_58,p:{x:113.5,y:699.9}},{t:this.instance_57,p:{x:118,y:702}},{t:this.instance_56,p:{x:118.7,y:699.9}},{t:this.instance_55,p:{x:96.6,y:711.4}},{t:this.instance_54,p:{x:97.3,y:709.2}},{t:this.instance_53,p:{x:101.7,y:711.4}},{t:this.instance_52,p:{x:102.4,y:709.2}},{t:this.instance_51,p:{x:112.9,y:710.3}},{t:this.instance_50,p:{x:113.7,y:708.2}},{t:this.instance_49,p:{x:118.1,y:710.3}},{t:this.instance_48,p:{x:118.8,y:708.2}},{t:this.instance_47,p:{x:86.7,y:770.4}},{t:this.instance_46,p:{x:87.5,y:768.3}},{t:this.instance_45,p:{x:91.9,y:770.4}},{t:this.instance_44,p:{x:92.6,y:768.3}},{t:this.instance_43,p:{x:97.6,y:770.4}},{t:this.instance_42,p:{x:98.3,y:768.3}},{t:this.instance_41,p:{x:115.4,y:770.4}},{t:this.instance_40,p:{x:116.2,y:768.3}},{t:this.instance_39,p:{x:121.1,y:770.4}},{t:this.instance_38,p:{x:121.8,y:768.3}},{t:this.instance_37,p:{x:126.3,y:770.4}},{t:this.instance_36,p:{x:127,y:768.3}},{t:this.instance_35,p:{x:86.7,y:778.4}},{t:this.instance_34,p:{x:87.5,y:776.3}},{t:this.instance_33,p:{x:91.9,y:778.4}},{t:this.instance_32,p:{x:92.6,y:776.3}},{t:this.instance_31,p:{x:97.6,y:778.4}},{t:this.instance_30,p:{x:98.3,y:776.3}},{t:this.instance_29,p:{x:115.4,y:778.4}},{t:this.instance_28,p:{x:116.2,y:776.3}},{t:this.instance_27,p:{x:121.1,y:778.4}},{t:this.instance_26,p:{x:121.8,y:776.3}},{t:this.instance_25,p:{x:126.3,y:778.4}},{t:this.instance_24,p:{x:127,y:776.3}}]},5).to({state:[{t:this.instance_115,p:{x:98.9,y:722.6}},{t:this.instance_114,p:{x:100.6,y:720.5}},{t:this.instance_113,p:{x:104,y:722.6}},{t:this.instance_112,p:{x:105.8,y:720.5}},{t:this.instance_111,p:{x:109.7,y:722.6}},{t:this.instance_110,p:{x:111.4,y:720.5}},{t:this.instance_109,p:{x:107.5,y:722.8}},{t:this.instance_108,p:{x:109.3,y:720.7}},{t:this.instance_107,p:{x:113.2,y:722.8}},{t:this.instance_106,p:{x:114.9,y:720.7}},{t:this.instance_105,p:{x:118.4,y:722.8}},{t:this.instance_104,p:{x:120.1,y:720.7}},{t:this.instance_103,p:{x:98.7,y:730.5}},{t:this.instance_102,p:{x:99.5,y:728.4}},{t:this.instance_101,p:{x:103.9,y:730.5}},{t:this.instance_100,p:{x:104.6,y:728.4}},{t:this.instance_99,p:{x:109.6,y:730.5}},{t:this.instance_98,p:{x:110.3,y:728.4}},{t:this.instance_97,p:{x:107.4,y:730.7}},{t:this.instance_96,p:{x:108.1,y:728.6}},{t:this.instance_95,p:{x:113.1,y:730.7}},{t:this.instance_94,p:{x:113.8,y:728.6}},{t:this.instance_93,p:{x:118.2,y:730.7}},{t:this.instance_92,p:{x:119,y:728.6}},{t:this.instance_91,p:{x:98.9,y:738.7}},{t:this.instance_90,p:{x:99.6,y:736.6}},{t:this.instance_89,p:{x:104,y:738.7}},{t:this.instance_88,p:{x:104.8,y:736.6}},{t:this.instance_87,p:{x:109.7,y:738.7}},{t:this.instance_86,p:{x:110.4,y:736.6}},{t:this.instance_85,p:{x:107.5,y:738.9}},{t:this.instance_84,p:{x:108.3,y:736.8}},{t:this.instance_83,p:{x:113.2,y:738.9}},{t:this.instance_82,p:{x:113.9,y:736.8}},{t:this.instance_81,p:{x:118.4,y:738.9}},{t:this.instance_80,p:{x:119.1,y:736.8}},{t:this.instance_79,p:{x:103.3,y:748.4}},{t:this.instance_78,p:{x:104,y:746.3}},{t:this.instance_77,p:{x:108.5,y:748.4}},{t:this.instance_76,p:{x:109.2,y:746.3}},{t:this.instance_75,p:{x:110.6,y:747.3}},{t:this.instance_74,p:{x:111.3,y:745.2}},{t:this.instance_73,p:{x:115.8,y:747.3}},{t:this.instance_72,p:{x:116.5,y:745.2}},{t:this.instance_71,p:{x:103.5,y:756.7}},{t:this.instance_70,p:{x:104.2,y:754.5}},{t:this.instance_69,p:{x:108.6,y:756.7}},{t:this.instance_68,p:{x:109.3,y:754.5}},{t:this.instance_67,p:{x:110.7,y:755.5}},{t:this.instance_66,p:{x:111.4,y:753.4}},{t:this.instance_65,p:{x:115.9,y:755.5}},{t:this.instance_64,p:{x:116.6,y:753.4}},{t:this.instance_63,p:{x:109.6,y:703.2}},{t:this.instance_62,p:{x:110.3,y:701}},{t:this.instance_61,p:{x:114.8,y:703.2}},{t:this.instance_60,p:{x:115.5,y:701}},{t:this.instance_59,p:{x:119,y:702.1}},{t:this.instance_58,p:{x:106.6,y:699.9}},{t:this.instance_57,p:{x:111,y:702}},{t:this.instance_56,p:{x:111.7,y:699.9}},{t:this.instance_55,p:{x:109.8,y:711.4}},{t:this.instance_54,p:{x:110.5,y:709.3}},{t:this.instance_53,p:{x:114.9,y:711.4}},{t:this.instance_52,p:{x:115.6,y:709.3}},{t:this.instance_51,p:{x:119.2,y:710.3}},{t:this.instance_50,p:{x:106.7,y:708.2}},{t:this.instance_49,p:{x:111.1,y:710.3}},{t:this.instance_48,p:{x:111.9,y:708.2}},{t:this.instance_47,p:{x:99.9,y:770.5}},{t:this.instance_46,p:{x:100.7,y:768.3}},{t:this.instance_45,p:{x:105.1,y:770.5}},{t:this.instance_44,p:{x:105.8,y:768.3}},{t:this.instance_43,p:{x:110.8,y:770.5}},{t:this.instance_42,p:{x:111.5,y:768.3}},{t:this.instance_41,p:{x:108.5,y:770.4}},{t:this.instance_40,p:{x:109.2,y:768.3}},{t:this.instance_39,p:{x:114.1,y:770.4}},{t:this.instance_38,p:{x:114.9,y:768.3}},{t:this.instance_37,p:{x:119.3,y:770.4}},{t:this.instance_36,p:{x:120,y:768.3}},{t:this.instance_35,p:{x:99.9,y:778.5}},{t:this.instance_34,p:{x:100.7,y:776.3}},{t:this.instance_33,p:{x:105.1,y:778.5}},{t:this.instance_32,p:{x:105.8,y:776.3}},{t:this.instance_31,p:{x:110.8,y:778.5}},{t:this.instance_30,p:{x:111.5,y:776.3}},{t:this.instance_29,p:{x:108.5,y:778.4}},{t:this.instance_28,p:{x:109.2,y:776.3}},{t:this.instance_27,p:{x:114.1,y:778.4}},{t:this.instance_26,p:{x:114.9,y:776.3}},{t:this.instance_25,p:{x:119.3,y:778.4}},{t:this.instance_24,p:{x:120,y:776.3}}]},5).to({state:[{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115,p:{x:97.8,y:734.5}},{t:this.instance_114,p:{x:99.5,y:732.3}},{t:this.instance_113,p:{x:102.9,y:734.5}},{t:this.instance_112,p:{x:104.7,y:732.3}},{t:this.instance_111,p:{x:108.6,y:734.5}},{t:this.instance_110,p:{x:110.3,y:732.3}},{t:this.instance_109,p:{x:106.4,y:734.7}},{t:this.instance_108,p:{x:108.2,y:732.5}},{t:this.instance_107,p:{x:112.1,y:734.7}},{t:this.instance_106,p:{x:113.8,y:732.5}},{t:this.instance_105,p:{x:117.3,y:734.7}},{t:this.instance_104,p:{x:119,y:732.5}},{t:this.instance_103,p:{x:97.6,y:742.4}},{t:this.instance_102,p:{x:98.4,y:740.2}},{t:this.instance_101,p:{x:102.8,y:742.4}},{t:this.instance_100,p:{x:103.5,y:740.2}},{t:this.instance_99,p:{x:108.5,y:742.4}},{t:this.instance_98,p:{x:109.2,y:740.2}},{t:this.instance_97,p:{x:106.3,y:742.6}},{t:this.instance_96,p:{x:107,y:740.4}},{t:this.instance_95,p:{x:112,y:742.6}},{t:this.instance_94,p:{x:112.7,y:740.4}},{t:this.instance_93,p:{x:117.1,y:742.6}},{t:this.instance_92,p:{x:117.9,y:740.4}},{t:this.instance_91,p:{x:97.8,y:750.6}},{t:this.instance_90,p:{x:98.5,y:748.5}},{t:this.instance_89,p:{x:102.9,y:750.6}},{t:this.instance_88,p:{x:103.7,y:748.5}},{t:this.instance_87,p:{x:108.6,y:750.6}},{t:this.instance_86,p:{x:109.3,y:748.5}},{t:this.instance_85,p:{x:106.4,y:750.8}},{t:this.instance_84,p:{x:107.2,y:748.7}},{t:this.instance_83,p:{x:112.1,y:750.8}},{t:this.instance_82,p:{x:112.8,y:748.7}},{t:this.instance_81,p:{x:117.3,y:750.8}},{t:this.instance_80,p:{x:118,y:748.7}},{t:this.instance_79,p:{x:102.2,y:760.3}},{t:this.instance_78,p:{x:102.9,y:758.1}},{t:this.instance_77,p:{x:107.4,y:760.3}},{t:this.instance_76,p:{x:108.1,y:758.1}},{t:this.instance_75,p:{x:109.5,y:759.1}},{t:this.instance_74,p:{x:110.2,y:757}},{t:this.instance_73,p:{x:114.7,y:759.1}},{t:this.instance_72,p:{x:115.4,y:757}},{t:this.instance_71,p:{x:102.4,y:768.5}},{t:this.instance_70,p:{x:103.1,y:766.4}},{t:this.instance_69,p:{x:107.5,y:768.5}},{t:this.instance_68,p:{x:108.2,y:766.4}},{t:this.instance_67,p:{x:109.6,y:767.4}},{t:this.instance_66,p:{x:110.3,y:765.3}},{t:this.instance_65,p:{x:114.8,y:767.4}},{t:this.instance_64,p:{x:115.5,y:765.3}},{t:this.instance_63,p:{x:108.5,y:715}},{t:this.instance_62,p:{x:109.2,y:712.9}},{t:this.instance_61,p:{x:113.7,y:715}},{t:this.instance_60,p:{x:114.4,y:712.9}},{t:this.instance_59,p:{x:117.9,y:713.9}},{t:this.instance_58,p:{x:105.5,y:711.8}},{t:this.instance_57,p:{x:109.9,y:713.9}},{t:this.instance_56,p:{x:110.6,y:711.8}},{t:this.instance_55,p:{x:108.7,y:723.3}},{t:this.instance_54,p:{x:109.4,y:721.1}},{t:this.instance_53,p:{x:113.8,y:723.3}},{t:this.instance_52,p:{x:114.5,y:721.1}},{t:this.instance_51,p:{x:118.1,y:722.2}},{t:this.instance_50,p:{x:105.6,y:720}},{t:this.instance_49,p:{x:110,y:722.1}},{t:this.instance_48,p:{x:110.8,y:720}},{t:this.instance_47,p:{x:98.8,y:782.3}},{t:this.instance_46,p:{x:99.6,y:780.2}},{t:this.instance_45,p:{x:104,y:782.3}},{t:this.instance_44,p:{x:104.7,y:780.2}},{t:this.instance_43,p:{x:109.7,y:782.3}},{t:this.instance_42,p:{x:110.4,y:780.2}},{t:this.instance_41,p:{x:107.4,y:782.3}},{t:this.instance_40,p:{x:108.1,y:780.1}},{t:this.instance_39,p:{x:113,y:782.3}},{t:this.instance_38,p:{x:113.8,y:780.1}},{t:this.instance_37,p:{x:118.2,y:782.3}},{t:this.instance_36,p:{x:118.9,y:780.1}},{t:this.instance_35,p:{x:98.8,y:790.3}},{t:this.instance_34,p:{x:99.6,y:788.2}},{t:this.instance_33,p:{x:104,y:790.3}},{t:this.instance_32,p:{x:104.7,y:788.2}},{t:this.instance_31,p:{x:109.7,y:790.3}},{t:this.instance_30,p:{x:110.4,y:788.2}},{t:this.instance_29,p:{x:107.4,y:790.3}},{t:this.instance_28,p:{x:108.1,y:788.1}},{t:this.instance_27,p:{x:113,y:790.3}},{t:this.instance_26,p:{x:113.8,y:788.1}},{t:this.instance_25,p:{x:118.2,y:790.3}},{t:this.instance_24,p:{x:118.9,y:788.1}}]},5).to({state:[]},4).wait(42));

	// Layer 65
	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#EFA455").s().p("AgIAbQgMgEgFgLQgFgLAEgKQAEgLALgGQALgFAJAEQAMAEAFALQAGAMgEAJQgFAMgLAFQgGADgGAAQgDAAgFgCg");
	this.shape_1012.setTransform(564.4,82.3);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#EFA455").s().p("AgIAcQgMgFgFgLQgGgLAFgJQAEgMALgFQALgGAJAEQAMAEAFALQAGAMgEAJQgFAMgLAFQgGADgGAAQgDAAgFgBg");
	this.shape_1013.setTransform(550.8,88.9);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#EFA455").s().p("AgIAcQgMgEgFgLQgFgMAEgJQAEgMALgFQALgFAJAEQAMAEAFALQAGALgEAKQgFALgLAFQgGADgGAAQgEAAgEgBg");
	this.shape_1014.setTransform(543.4,73.4);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#EFA455").s().p("AgIAbQgMgEgFgLQgFgLAEgKQAEgLALgGQALgFAKAEQALAEAFALQAGALgEAKQgEAMgMAFQgGADgGAAQgDAAgFgCg");
	this.shape_1015.setTransform(585.5,91.2);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#EFA455").s().p("AgIAcQgMgFgFgLQgGgLAFgJQAEgMALgFQALgGAKAEQALAEAFALQAGALgEAKQgEAMgLAFQgHADgGAAQgDAAgFgBg");
	this.shape_1016.setTransform(571.8,97.7);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#EFA455").s().p("AgIAbQgMgEgFgLQgGgLAFgJQAEgMALgFQALgGAJAEQAMAEAFALQAGAMgEAJQgFAMgLAFQgGADgGAAQgDAAgFgCg");
	this.shape_1017.setTransform(529.7,80);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#EFA455").s().p("AgIAbQgMgEgFgLQgGgLAFgJQAEgMALgFQALgGAJAEQAMAEAFALQAGAMgEAJQgFAMgLAFQgGADgGAAQgDAAgFgCg");
	this.shape_1018.setTransform(508.7,71.2);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#EFA455").s().p("AgJAbQgLgEgGgLQgEgLADgJQAEgMAMgFQALgGAJAEQAMAEAFALQAGALgFAKQgEAMgKAFQgHADgGAAQgDAAgGgCg");
	this.shape_1019.setTransform(557.8,103.7);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#EFA455").s().p("AgIAcQgMgFgFgLQgGgLAEgJQAEgMALgFQAMgFAJAEQAMAEAFALQAGALgFAJQgEAMgLAFQgGADgGAAQgEAAgEgBg");
	this.shape_1020.setTransform(544.1,110.2);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#EFA455").s().p("AgIAbQgMgEgFgLQgGgLAFgJQAEgMALgFQALgGAKAEQALAEAFALQAGALgEAKQgEAMgLAFQgGADgHAAQgDAAgFgCg");
	this.shape_1021.setTransform(536.7,94.8);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#EFA455").s().p("AgIAcQgMgFgFgLQgGgLAEgJQAEgMALgFQALgGAKAEQAMAEAFALQAFALgEAKQgEAMgLAFQgGADgGAAQgDAAgFgBg");
	this.shape_1022.setTransform(578.8,112.5);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#EFA455").s().p("AgIAcQgMgFgFgLQgGgLAEgJQAEgMALgFQAMgGAJAFQAMAEAFALQAGALgEAJQgFAMgLAFQgGADgGAAQgEAAgEgBg");
	this.shape_1023.setTransform(565.2,119.1);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#EFA455").s().p("AgIAcQgMgFgFgLQgFgLAEgJQAEgMALgFQALgGAKAFQALAEAFALQAGALgEAJQgEAMgLAFQgHADgGAAQgEAAgEgBg");
	this.shape_1024.setTransform(523,101.4);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#EFA455").s().p("AgIAbQgMgEgFgLQgFgLAEgKQAEgLALgGQALgFAJAEQAMAEAFALQAGAMgEAJQgFAMgLAFQgGADgGAAQgDAAgFgCg");
	this.shape_1025.setTransform(515.6,86);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#EFA455").s().p("AgIAcQgMgFgFgLQgGgLAFgJQAEgMALgFQALgGAKAEQALAEAFAMQAGALgEAJQgEAMgLAFQgHADgGAAQgDAAgFgBg");
	this.shape_1026.setTransform(502,92.5);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f().s("#EFA455").p("AAlBNIhIiY");
	this.shape_1027.setTransform(568.2,90);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#EFA455").p("AhDAgICHg/");
	this.shape_1028.setTransform(557.6,85.6);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f().s("#EFA455").p("AAlBMIhJiY");
	this.shape_1029.setTransform(547.1,81.2);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#EFA455").p("AhDAgICHg/");
	this.shape_1030.setTransform(536.5,76.7);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f().s("#EFA455").p("AAkBNIhIiZ");
	this.shape_1031.setTransform(526,72.3);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#EFA455").p("AhDAgICHg/");
	this.shape_1032.setTransform(578.7,94.4);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f().s("#EFA455").p("AhDAgICHg/");
	this.shape_1033.setTransform(515.5,67.9);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f().s("#EFA455").p("AAagLQAGALgEAKQgFALgLAFQgLAGgJgEQgMgEgFgLQgGgLAEgKQAEgMALgFQALgFAKAEQAMAEAFALg");
	this.shape_1034.setTransform(522.3,64.6);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#EFA455").s().p("AgIAcQgMgEgFgLQgGgLAEgKQAEgMALgFQALgFAKAEQAMAEAFALQAGALgEAKQgFALgLAFQgGADgGAAQgDAAgFgBg");
	this.shape_1035.setTransform(522.3,64.6);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#EFA455").p("AAlBNIhIiY");
	this.shape_1036.setTransform(561.5,111.4);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f().s("#EFA455").p("AhDAgICHg/");
	this.shape_1037.setTransform(550.9,106.9);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#EFA455").p("AAlBNIhIiY");
	this.shape_1038.setTransform(540.4,102.5);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f().s("#EFA455").p("AhDAgICHg/");
	this.shape_1039.setTransform(529.9,98.1);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f().s("#EFA455").p("AAlBMIhJiY");
	this.shape_1040.setTransform(519.4,93.7);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f().s("#EFA455").p("AhDAgICHg/");
	this.shape_1041.setTransform(572,115.8);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#EFA455").p("AhDAgICHg/");
	this.shape_1042.setTransform(508.8,89.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012}]}).wait(127));

	// Layer 14
	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f().s("#000000").p("AgVAPIArAAIAAgdIgrAAg");
	this.shape_1043.setTransform(447.6,334.5);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#000000").s().p("AgVAPIAAgcIArAAIAAAcg");
	this.shape_1044.setTransform(447.6,334.5);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f().s("#000000").p("AgOAUIAdAAIAAgnIgdAAg");
	this.shape_1045.setTransform(446.9,337.7);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#000000").s().p("AgOAUIAAgnIAdAAIAAAng");
	this.shape_1046.setTransform(446.9,337.7);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f().s("#000000").p("AAXhKIgtCV");
	this.shape_1047.setTransform(448.6,325.3);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().s("#000000").p("AgCiGIAFEN");
	this.shape_1048.setTransform(418.7,324.9);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#000000").s().p("AgwBzQgIgRgEgbQgIg2AUguQAUgvAggdQARgPANgFIAdAMIhODvg");
	this.shape_1049.setTransform(423.8,312);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().s("#000000").ss(4,0,1).p("AiBgeIEDA9");
	this.shape_1050.setTransform(437.9,314.6);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f().s("#000000").ss(1.5,0,1).p("AgRBOIAvgjIg7gmIA0glIgpgu");
	this.shape_1051.setTransform(436.8,331.9);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f().s("#000000").ss(1.5,0,1).p("AAAB/IAAj9");
	this.shape_1052.setTransform(436.6,327);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f().s("#000000").ss(1.5,0,1).p("AAuB/Iguj9IgtD9g");
	this.shape_1053.setTransform(436.6,327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1053,p:{x:436.6}},{t:this.shape_1052,p:{x:436.6}},{t:this.shape_1051,p:{x:436.8}},{t:this.shape_1050,p:{rotation:0,x:437.9,y:314.6}},{t:this.shape_1049,p:{rotation:0,x:423.8,y:312}},{t:this.shape_1048,p:{scaleY:1,y:324.9,x:418.7}},{t:this.shape_1047,p:{scaleY:1,y:325.3,scaleX:1,skewX:0,skewY:0,x:448.6}},{t:this.shape_1046,p:{y:337.7,x:446.9}},{t:this.shape_1045,p:{y:337.7,x:446.9}},{t:this.shape_1044,p:{x:447.6}},{t:this.shape_1043,p:{x:447.6}}]}).to({state:[{t:this.shape_1053,p:{x:436.6}},{t:this.shape_1052,p:{x:436.6}},{t:this.shape_1051,p:{x:436.8}},{t:this.shape_1050,p:{rotation:-15.5,x:437.5,y:314.4}},{t:this.shape_1049,p:{rotation:-15.5,x:423.2,y:315.7}},{t:this.shape_1048,p:{scaleY:0.763,y:329.5,x:418.7}},{t:this.shape_1047,p:{scaleY:1.507,y:325.2,scaleX:1,skewX:0,skewY:0,x:448.6}},{t:this.shape_1046,p:{y:337.7,x:446.9}},{t:this.shape_1045,p:{y:337.7,x:446.9}},{t:this.shape_1044,p:{x:447.6}},{t:this.shape_1043,p:{x:447.6}}]},7).to({state:[{t:this.shape_1053,p:{x:436.6}},{t:this.shape_1052,p:{x:436.6}},{t:this.shape_1051,p:{x:436.8}},{t:this.shape_1050,p:{rotation:-34.9,x:436.7,y:314.2}},{t:this.shape_1049,p:{rotation:-34.9,x:423.7,y:320.2}},{t:this.shape_1048,p:{scaleY:0.763,y:329.5,x:418.7}},{t:this.shape_1047,p:{scaleY:1.664,y:322.1,scaleX:0.998,skewX:-7,skewY:-9.8,x:448.5}},{t:this.shape_1046,p:{y:337.7,x:446.9}},{t:this.shape_1045,p:{y:337.7,x:446.9}},{t:this.shape_1044,p:{x:447.6}},{t:this.shape_1043,p:{x:447.6}}]},7).to({state:[{t:this.shape_1053,p:{x:436.6}},{t:this.shape_1052,p:{x:436.6}},{t:this.shape_1051,p:{x:436.8}},{t:this.shape_1050,p:{rotation:-45.6,x:435.6,y:313.7}},{t:this.shape_1049,p:{rotation:-45.6,x:423.9,y:322}},{t:this.shape_1048,p:{scaleY:0.763,y:329.5,x:418.7}},{t:this.shape_1047,p:{scaleY:2.017,y:322.1,scaleX:1.005,skewX:-9.5,skewY:-15.6,x:446.7}},{t:this.shape_1046,p:{y:337.7,x:446.9}},{t:this.shape_1045,p:{y:337.7,x:446.9}},{t:this.shape_1044,p:{x:447.6}},{t:this.shape_1043,p:{x:447.6}}]},7).to({state:[{t:this.shape_1053,p:{x:436.7}},{t:this.shape_1052,p:{x:436.7}},{t:this.shape_1051,p:{x:436.9}},{t:this.shape_1050,p:{rotation:-34.9,x:436.8,y:314.1}},{t:this.shape_1049,p:{rotation:-34.9,x:423.8,y:320.1}},{t:this.shape_1048,p:{scaleY:0.763,y:329.4,x:418.7}},{t:this.shape_1047,p:{scaleY:1.664,y:322,scaleX:0.998,skewX:-7,skewY:-9.8,x:448.5}},{t:this.shape_1046,p:{y:337.6,x:446.9}},{t:this.shape_1045,p:{y:337.6,x:446.9}},{t:this.shape_1044,p:{x:447.6}},{t:this.shape_1043,p:{x:447.6}}]},7).to({state:[{t:this.shape_1053,p:{x:436.7}},{t:this.shape_1052,p:{x:436.7}},{t:this.shape_1051,p:{x:436.9}},{t:this.shape_1050,p:{rotation:-15.5,x:437.6,y:314.3}},{t:this.shape_1049,p:{rotation:-15.5,x:423.3,y:315.6}},{t:this.shape_1048,p:{scaleY:0.763,y:329.4,x:418.8}},{t:this.shape_1047,p:{scaleY:1.507,y:325.2,scaleX:1,skewX:0,skewY:0,x:448.7}},{t:this.shape_1046,p:{y:337.6,x:447}},{t:this.shape_1045,p:{y:337.6,x:447}},{t:this.shape_1044,p:{x:447.7}},{t:this.shape_1043,p:{x:447.7}}]},6).to({state:[{t:this.shape_1053,p:{x:436.6}},{t:this.shape_1052,p:{x:436.6}},{t:this.shape_1051,p:{x:436.8}},{t:this.shape_1050,p:{rotation:0,x:437.9,y:314.6}},{t:this.shape_1049,p:{rotation:0,x:423.8,y:312}},{t:this.shape_1048,p:{scaleY:1,y:324.9,x:418.7}},{t:this.shape_1047,p:{scaleY:1,y:325.3,scaleX:1,skewX:0,skewY:0,x:448.6}},{t:this.shape_1046,p:{y:337.7,x:446.9}},{t:this.shape_1045,p:{y:337.7,x:446.9}},{t:this.shape_1044,p:{x:447.6}},{t:this.shape_1043,p:{x:447.6}}]},6).to({state:[{t:this.shape_1053,p:{x:436.6}},{t:this.shape_1052,p:{x:436.6}},{t:this.shape_1051,p:{x:436.8}},{t:this.shape_1050,p:{rotation:21,x:438.3,y:315.1}},{t:this.shape_1049,p:{rotation:21,x:426,y:307.7}},{t:this.shape_1048,p:{scaleY:1,y:324.9,x:418.7}},{t:this.shape_1047,p:{scaleY:0.732,y:327.4,scaleX:0.607,skewX:0,skewY:0,x:448}},{t:this.shape_1046,p:{y:337.7,x:446.9}},{t:this.shape_1045,p:{y:337.7,x:446.9}},{t:this.shape_1044,p:{x:447.6}},{t:this.shape_1043,p:{x:447.6}}]},6).to({state:[{t:this.shape_1053,p:{x:436.6}},{t:this.shape_1052,p:{x:436.6}},{t:this.shape_1051,p:{x:436.8}},{t:this.shape_1050,p:{rotation:0,x:437.9,y:314.6}},{t:this.shape_1049,p:{rotation:0,x:423.8,y:312}},{t:this.shape_1048,p:{scaleY:1,y:324.9,x:418.7}},{t:this.shape_1047,p:{scaleY:1,y:325.3,scaleX:1,skewX:0,skewY:0,x:448.6}},{t:this.shape_1046,p:{y:337.7,x:446.9}},{t:this.shape_1045,p:{y:337.7,x:446.9}},{t:this.shape_1044,p:{x:447.6}},{t:this.shape_1043,p:{x:447.6}}]},6).to({state:[{t:this.shape_1053,p:{x:436.6}},{t:this.shape_1052,p:{x:436.6}},{t:this.shape_1051,p:{x:436.8}},{t:this.shape_1050,p:{rotation:-15.5,x:437.5,y:314.4}},{t:this.shape_1049,p:{rotation:-15.5,x:423.2,y:315.7}},{t:this.shape_1048,p:{scaleY:0.763,y:329.5,x:418.7}},{t:this.shape_1047,p:{scaleY:1.507,y:325.2,scaleX:1,skewX:0,skewY:0,x:448.6}},{t:this.shape_1046,p:{y:337.7,x:446.9}},{t:this.shape_1045,p:{y:337.7,x:446.9}},{t:this.shape_1044,p:{x:447.6}},{t:this.shape_1043,p:{x:447.6}}]},7).to({state:[{t:this.shape_1053,p:{x:436.6}},{t:this.shape_1052,p:{x:436.6}},{t:this.shape_1051,p:{x:436.8}},{t:this.shape_1050,p:{rotation:-34.9,x:436.7,y:314.2}},{t:this.shape_1049,p:{rotation:-34.9,x:423.7,y:320.2}},{t:this.shape_1048,p:{scaleY:0.763,y:329.5,x:418.7}},{t:this.shape_1047,p:{scaleY:1.664,y:322.1,scaleX:0.998,skewX:-7,skewY:-9.8,x:448.5}},{t:this.shape_1046,p:{y:337.7,x:446.9}},{t:this.shape_1045,p:{y:337.7,x:446.9}},{t:this.shape_1044,p:{x:447.6}},{t:this.shape_1043,p:{x:447.6}}]},7).to({state:[{t:this.shape_1053,p:{x:436.6}},{t:this.shape_1052,p:{x:436.6}},{t:this.shape_1051,p:{x:436.8}},{t:this.shape_1050,p:{rotation:-45.6,x:435.6,y:313.7}},{t:this.shape_1049,p:{rotation:-45.6,x:423.9,y:322}},{t:this.shape_1048,p:{scaleY:0.763,y:329.5,x:418.7}},{t:this.shape_1047,p:{scaleY:2.017,y:322.1,scaleX:1.005,skewX:-9.5,skewY:-15.6,x:446.7}},{t:this.shape_1046,p:{y:337.7,x:446.9}},{t:this.shape_1045,p:{y:337.7,x:446.9}},{t:this.shape_1044,p:{x:447.6}},{t:this.shape_1043,p:{x:447.6}}]},7).to({state:[{t:this.shape_1053,p:{x:436.7}},{t:this.shape_1052,p:{x:436.7}},{t:this.shape_1051,p:{x:436.9}},{t:this.shape_1050,p:{rotation:-34.9,x:436.8,y:314.1}},{t:this.shape_1049,p:{rotation:-34.9,x:423.8,y:320.1}},{t:this.shape_1048,p:{scaleY:0.763,y:329.4,x:418.7}},{t:this.shape_1047,p:{scaleY:1.664,y:322,scaleX:0.998,skewX:-7,skewY:-9.8,x:448.5}},{t:this.shape_1046,p:{y:337.6,x:446.9}},{t:this.shape_1045,p:{y:337.6,x:446.9}},{t:this.shape_1044,p:{x:447.6}},{t:this.shape_1043,p:{x:447.6}}]},7).to({state:[{t:this.shape_1053,p:{x:436.7}},{t:this.shape_1052,p:{x:436.7}},{t:this.shape_1051,p:{x:436.9}},{t:this.shape_1050,p:{rotation:-15.5,x:437.6,y:314.3}},{t:this.shape_1049,p:{rotation:-15.5,x:423.3,y:315.6}},{t:this.shape_1048,p:{scaleY:0.763,y:329.4,x:418.8}},{t:this.shape_1047,p:{scaleY:1.507,y:325.2,scaleX:1,skewX:0,skewY:0,x:448.7}},{t:this.shape_1046,p:{y:337.6,x:447}},{t:this.shape_1045,p:{y:337.6,x:447}},{t:this.shape_1044,p:{x:447.7}},{t:this.shape_1043,p:{x:447.7}}]},6).to({state:[{t:this.shape_1053,p:{x:436.6}},{t:this.shape_1052,p:{x:436.6}},{t:this.shape_1051,p:{x:436.8}},{t:this.shape_1050,p:{rotation:0,x:437.9,y:314.6}},{t:this.shape_1049,p:{rotation:0,x:423.8,y:312}},{t:this.shape_1048,p:{scaleY:1,y:324.9,x:418.7}},{t:this.shape_1047,p:{scaleY:1,y:325.3,scaleX:1,skewX:0,skewY:0,x:448.6}},{t:this.shape_1046,p:{y:337.7,x:446.9}},{t:this.shape_1045,p:{y:337.7,x:446.9}},{t:this.shape_1044,p:{x:447.6}},{t:this.shape_1043,p:{x:447.6}}]},6).wait(35));

	// OIL
	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("rgba(153,153,153,0.439)").s().p("EAj+ABFIgFAAIgCAAIzhAAQgtgMgdgVQgMgJgDgGQgDgHAAgNQAAgSAHgVQA+AJAnAAQAlgBA3gJIBcgQQBOgKBnAFQAYABCeANQDlASB/goIAAACIG3AIQADgHAIABIAAAAQAZgCALAHQALAIAEAQQACAHAAAUIgBALIgDAHIgDALQgDAGgHAFQgHAHgIAEQgIAFgRAHIgXAJQgPAEgoABgArwBFIgFgBIgBABI6gAAIgHgDIgEgDIgBgEIAAgEIAAgEIACgCIgBgDQgCgDAAgFIAAhBIABgGIADgDQAFgDACAAIABABIABgCIAAAAQAGAAAEACIAFAAQBPgLAogEQBDgFA1AEQAXACBSANQBAAKAoAAQAkgBA4gJIBcgQQBNgKBoAFQAYABCeANQDkASCAgoIgBACIG3AIQAEgHAHABIABAAQAZgCALAHQALAIADAQQACAHAAAUIgBALIgDAHIgDALQgCAGgHAFQgIAHgHAEQgIAFgRAHIgXAJQgQAEgoABg");
	this.shape_1054.setTransform(247.5,477.9);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("rgba(153,153,153,0.439)").s().p("EAj+ACEIgFAAIgCAAIzhAAQgtgMgdgVQgMgJgDgGQgDgHAAgNQAAgUAHgVQA+AJAnAAQAlgBA3gJIBcgQQBOgIBnADQAYABCeANQAsADAoACIAAgEIAAgEIAAgEIAAgDIAAgEIAAgCIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAEgEIADgDIAFAAIAAgBIAEACIABgCIADgCIACgCIAFAAIAAgBIAHADIADADIADAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAACIAAAEIAAAEIAAADIAAAEIAAAEQCOABBagbIAAACIG3AGQADgFAIABIAAAAQAZgCALAFQALAIAEAQQACAHAAAUIgBANIgDAHIgDALQgDAGgHAFQgHAHgIAEQgIAFgRAHIgXAJQgPAEgoABgArwCEIgFgBIgBABI6gAAIgHgDIgEgDIgBgEIAAgEIAAgEIACgCIgBgDQgCgDAAgFIAAhDIABgGIADgDQAFgDACAAIABABIABgCIAAAAQAGAAAEACIAFAAQBPgLAogEQBDgFA1AEQAXACBSANQBAAKAoAAQAkgBA4gJIBcgQQBNgIBoADQAYABCcAMIAAgDIAAgEIAAgEIAAgDIAAgCIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIACgEIADgCIACgCIAFAAIAAgBIAEACIABgBIAFAAIAAgBIADABIACAAIAAgBIAFAAIAHADIADADIADAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAACIAAAEIAAADIAAAEIAAAEIgBACQDGALB0giIgBACIG3AGQAEgFAHABIABAAQAZgCALAFQALAIADAQQACAHAAAUIgBANIgDAHIgDALQgCAGgHAFQgIAHgHAEQgIAFgRAHIgXAJQgQAEgoABg");
	this.shape_1055.setTransform(247.5,471.6);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("rgba(153,153,153,0.439)").s().p("EAj+ADtIgFAAIgCAAIzhAAQgtgMgdgVQgMgJgDgGQgDgHAAgNQAAgUAHgVQA+AJAnAAQAlgBA3gJIBcgQQBOgKBnAFQAYABCeANQAsADAoACIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgDIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAEgEIADgDIAFAAIAAgBIAHADIADADIACADIABgBIAHgCIAAgBIAHADIADADIADAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAACIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIgDAEIgCACIAAACIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEQCOABBagdIAAACIG3AIQADgHAIABIAAAAQAZgCALAHQALAIAEAQQACAHAAAUIgBANIgDAHIgDALQgDAGgHAFQgHAHgIAEQgIAFgRAHIgXAJQgPAEgoABgArwDtIgFgBIgBABI6gAAIgHgDIgEgDIgBgEIAAgEIAAgEIACgCIgBgDQgCgDAAgFIAAhDIABgGIADgDQAFgDACAAIABABIABgCIAAAAQAGAAAEACIAFAAQBPgLAogEQBDgFA1AEQAXACBSANQBAAKAoAAQAkgBA4gJIBcgQQBNgKBoAFQAYABCcAMIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgCIAAgEIAAgEIAAgDIAAgEIAAgBIAAAAIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAEgEIAEgDIAEAAIABgBIACgCIADgCIAFAAIAAgBIAFAAIAGADIAEADIAAgBIAGADIAEADIACAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAACIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIgCAEIgDADIAAABIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIgBACQDGALB0gkIgBACIG3AIQAEgHAHABIABAAQAZgCALAHQALAIADAQQACAHAAAUIgBANIgDAHIgDALQgCAGgHAFQgIAHgHAEQgIAFgRAHIgXAJQgQAEgoABg");
	this.shape_1056.setTransform(247.5,461.1);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("rgba(153,153,153,0.439)").s().p("EAj+AFHIgFAAIgCAAIzhAAQgtgMgdgVQgMgJgDgGQgDgHAAgNQAAgUAHgVQA+AJAnAAQAlgBA3gJIBcgQQBOgKBnAFQAYABCeANQAsADAoACIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgBIAAgDIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgCIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgBIgEgEIgBgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAEgEIADgDIAFAAIAAgBIAHADIABABIACgEIADgCIACgCIAFAAIAAgBIAHADIADADIADAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAABIACACIADAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAACIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIgDAEIgCACIAAACIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEQCOABBagdIAAACIG3AIQADgHAIABIAAAAQAZgCALAHQALAIAEAQQACAHAAAUIgBANIgDAHIgDALQgDAGgHAFQgHAHgIAEQgIAFgRAHIgXAJQgPAEgoABgArwFHIgFgBIgBABI6gAAIgHgDIgEgDIgBgEIAAgEIAAgEIACgCIgBgDQgCgDAAgFIAAhDIABgGIADgDQAFgDACAAIABABIABgCIAAAAQAGAAAEACIAFAAQBPgLAogEQBDgFA1AEQAXACBSANQBAAKAoAAQAkgBA4gJIBcgQQBNgKBoAFQAYABCcAMIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgBIAAAAIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgCIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAEgEIABgBIAAgCIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAEgEIAEgDIAFAAIAAgBIADABIADgCIAEgDIAFAAIAAgBIAGADIAEADIACAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAABIADACIACAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAACIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIgCAEIgDADIAAABIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIgBACQDGALB0gkIgBACIG3AIQAEgHAHABIABAAQAZgCALAHQALAIADAQQACAHAAAUIgBANIgDAHIgDALQgCAGgHAFQgIAHgHAEQgIAFgRAHIgXAJQgQAEgoABg");
	this.shape_1057.setTransform(247.5,452.1);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("rgba(153,153,153,0.439)").s().p("EAj+AHBIgFAAIgCAAIzhAAQgtgLgdgVQgMgJgDgGQgDgIAAgMQAAgVAHgVQA+AKAngBQAlAAA3gJIBcgQQBOgLBnAGQAYAACeANQAsAEAoACIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgCIgEgEIgBgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgCIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIABgEIAEgEIAHgBIAAgBIAHACIADAEIAAgBIADgDIACgBIAFAAIAAgBIAHACIADAEIADAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAABIACADIADAEIAAAEIAAADIAAACIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIgDAEIgCACIAAABIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEQCOAABagcIAAABIG3AJQADgHAIABIAAgBQAZgBALAHQALAIAEAPQACAHAAAVIgBANIgDAHIgDALQgDAGgHAEQgHAIgIAEQgIAFgRAHIgXAJQgPADgoABgArwHBIgFAAIgBAAI6gAAIgHgCIgEgDIgBgFIAAgDIAAgEIACgCIgBgDQgCgDAAgFIAAhEIABgFIADgDQAFgDACAAIABAAIABgBIAAAAQAGAAAEACIAFgBQBPgLAogDQBDgFA1AEQAXACBSANQBAAKAogBQAkAAA4gJIBcgQQBNgLBoAGQAYAACcANIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgBIAAAAIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAEgDIABgBIAAgCIAAgEIAAgDIAAgEIAAgEIAAgDIAAgDIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgCIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIADgDIACgDIADgBIAFAAIAAgCIAGADIAEAEIACADIAAAFIAAADIAAAEIAAAEIAAABIADAAIAAgBIAGACIAEAEIACADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAADIAAABIAAACIAAACIAAACIAAACIAAACIAAABIAAADIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAACIAAACIAAACIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAACIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAABIADACIACAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIgCADIgDADIAAABIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIgBADQDGALB0gkIgBABIG3AJQAEgHAHABIABgBQAZgBALAHQALAIADAPQACAHAAAVIgBANIgDAHIgDALQgCAGgHAEQgIAIgHAEQgIAFgRAHIgXAJQgQADgoABg");
	this.shape_1058.setTransform(247.5,439.9);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("rgba(153,153,153,0.439)").s().p("EAj+AIZIgFAAIgCAAIzhAAQgtgMgdgVQgMgJgDgGQgDgHAAgNQAAgUAHgVQA+AJAnAAQAlAAA3gKIBcgPQBOgLBnAFQAYABCeANQAsAEAoABIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgBIgEgEIgBgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgDIAAgBIAAgBIAAAAIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgBIgEgEIgBgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAEgEIADgDIAFAAIAAgBIAHACIADAFIADADIAAgDIAAgFIAEgDIADgCIAFAAIAAgCIAHADIADADIADAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAACIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAABIACACIADAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIgDAEIgCADIAAABIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEQCOABBagdIAAACIG3AIQADgGAIABIAAgBQAZgCALAHQALAIAEAQQACAHAAAUIgBANIgDAHIgDALQgDAGgHAFQgHAHgIAFQgIAFgRAGIgXAJQgPAEgoABgArwIZIgFAAIgBAAI6gAAIgHgDIgEgDIgBgEIAAgEIAAgDIACgDIgBgDQgCgDAAgFIAAhDIABgGIADgCQAFgEACABIABAAIABgCIAAAAQAGABAEACIAFgBQBPgLAogEQBDgFA1AFQAXACBSANQBAAJAoAAQAkAAA4gKIBcgPQBNgLBoAFQAYABCcANIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgBIAAAAIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAEgEIABgBIAAgCIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgCIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIABgEIAEgDIAIgCIAAgBIAGADIAEADIACAEIAAAEIAAADIADgBIAAgBIAGACIAEAFIACADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAACIAAACIAAACIAAACIAAACIAAABIAAADIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAABIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAABIADADIACADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIgCAEIgDADIAAABIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIgBACQDGAMB0glIgBACIG3AIQAEgGAHABIABgBQAZgCALAHQALAIADAQQACAHAAAUIgBANIgDAHIgDALQgCAGgHAFQgIAHgHAFQgIAFgRAGIgXAJQgQAEgoABg");
	this.shape_1059.setTransform(247.5,431.1);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("rgba(153,153,153,0.439)").s().p("EAj+AJ4IgFAAIgCAAIzhAAQgtgMgdgVQgMgJgDgGQgDgHAAgNQAAgUAHgVQA+AJAnAAQAlAAA3gKIBcgPQBOgLBnAFQAYABCeANQAsAEAoABIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgBIgEgEIgBgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgCIAAgDIAAgFIAAgDIAAgEIAAgBIgEgEIgBgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAEgEIABgBIAAgDIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIABgEIAEgDIAHgBIAAgCIADABIAAgEIAAgDIAAgEIABgEIAEgDIAHgBIAAgCIAHADIADADIADAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIACACIADAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAACIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAABIACACIADAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIgDAEIgCADIAAABIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEQCOABBagdIAAACIG3AIQADgGAIABIAAgBQAZgCALAHQALAIAEAQQACAHAAAUIgBANIgDAHIgDALQgDAGgHAFQgHAHgIAFQgIAFgRAGIgXAJQgPAEgoABgArwJ4IgFAAIgBAAI6gAAIgHgDIgEgDIgBgEIAAgEIAAgDIACgDIgBgDQgCgDAAgFIAAhDIABgGIADgCQAFgEACABIABAAIABgCIAAAAQAGABAEACIAFgBQBPgLAogEQBDgFA1AFQAXACBSANQBAAJAoAAQAkAAA4gKIBcgPQBNgLBoAFQAYABCcANIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgBIAAAAIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAEgEIABgBIAAgCIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgBIAAgBIAAgCIAAgBIAAgDIAAgCIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgCIgEgDIgBgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAEgEIAEgDIAFAAIAAgBIAGACIAEAFIACADIABgDIAEgFIAIgBIAAgBIAGACIAEAFIACADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIgCAEIgDACIAAAAIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAAAIAAADIAAABIAAACIAAABIAAADIAAABIAAACIAAACIAAACIAAACIAAACIAAABIAAADIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAABIADADIACADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIgCAEIgDADIAAABIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIgBACQDGAMB0glIgBACIG3AIQAEgGAHABIABgBQAZgCALAHQALAIADAQQACAHAAAUIgBANIgDAHIgDALQgCAGgHAFQgIAHgHAFQgIAFgRAGIgXAJQgQAEgoABg");
	this.shape_1060.setTransform(247.5,421.6);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("rgba(153,153,153,0.439)").s().p("EAj+ALmIgFAAIgCAAIzhAAQgtgMgdgVQgMgJgDgGQgDgHAAgNQAAgUAHgVQA+AJAnAAQAlAAA3gKIBcgPQBOgLBnAFQAYABCeANQAsAEAoABIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgBIgEgEIgBgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgBIgEgEIgBgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgCIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAEgEIABgBIAAgDIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIABgEIAEgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAEgDIADgCIAFAAIAAgCIAHADIABABIAAgEIAAgEIAAgDIAAgEIACgEIADgDIACgBIAFAAIAAgBIAHACIADAFIADADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIgBAFIgCADIgCADIgDABIgCABIAAAAIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIACACIADAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAACIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAABIACACIADAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIgDAEIgCADIAAABIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEQCOABBagdIAAACIG3AIQADgGAIABIAAgBQAZgCALAHQALAIAEAQQACAHAAAUIgBANIgDAHIgDALQgDAGgHAFQgHAHgIAFQgIAFgRAGIgXAJQgPAEgoABgArwLmIgFAAIgBAAI6gAAIgHgDIgEgDIgBgEIAAgEIAAgDIACgDIgBgDQgCgDAAgFIAAhDIABgGIADgCQAFgEACABIABAAIABgCIAAAAQAGABAEACIAFgBQBPgLAogEQBDgFA1AFQAXACBSANQBAAJAoAAQAkAAA4gKIBcgPQBNgLBoAFQAYABCcANIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgBIAAAAIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAEgEIABgBIAAgCIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgCIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgCIgEgDIgBgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIABgEIAEgDIAIgBIAAgCIAGADIADADIACgCIAEgCIAFAAIAAgCIAGADIAEADIACAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIADADIACADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIgCAEIgDACIAAAAIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAACIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAACIAAACIAAACIAAACIAAACIAAABIAAADIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAABIADADIACADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIgCAEIgDADIAAABIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIgBACQDGAMB0glIgBACIG3AIQAEgGAHABIABgBQAZgCALAHQALAIADAQQACAHAAAUIgBANIgDAHIgDALQgCAGgHAFQgIAHgHAFQgIAFgRAGIgXAJQgQAEgoABg");
	this.shape_1061.setTransform(247.5,410.6);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("rgba(153,153,153,0.439)").s().p("EAj+ALmIgFAAIgCAAIzhAAQgtgMgdgVQgMgJgDgGQgDgHAAgNQAAgUAHgVQA+AJAnAAQAlAAA3gKIBcgPQBOgLBnAFQAYABCeANQAsAEAoABIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgBIgEgEIgBgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgBIgEgEIgBgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgCIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAEgEIABgBIAAgDIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIABgEIAEgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIACgEIADgCIACgCIAFAAIAAgBIAHADIADADIADAEIAAAEIAAADIAAABIACgCIAFAAIAAgBIAHACIADAFIADADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIgBAFIgCADIgCADIgDABIgCABIAAAAIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIACACIADAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAACIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAABIACACIADAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIgDAEIgCADIAAABIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEQCOABBagdIAAACIG3AIQADgGAIABIAAgBQAZgCALAHQALAIAEAQQACAHAAAUIgBANIgDAHIgDALQgDAGgHAFQgHAHgIAFQgIAFgRAGIgXAJQgPAEgoABgArwLmIgFAAIgBAAI6gAAIgHgDIgEgDIgBgEIAAgEIAAgDIACgDIgBgDQgCgDAAgFIAAhDIABgGIADgCQAFgEACABIABAAIABgCIAAAAQAGABAEACIAFgBQBPgLAogEQBDgFA1AFQAXACBSANQBAAJAoAAQAkAAA4gKIBcgPQBNgLBoAFQAYABCcANIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgBIAAAAIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAEgEIABgBIAAgCIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgCIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgCIgEgDIgBgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIABgEIAEgDIAIgBIAAgCIAGADIADADIACgCIAEgCIAFAAIAAgCIAGADIAEADIACAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIADADIACADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIgCAEIgDACIAAAAIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAACIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAACIAAACIAAACIAAACIAAACIAAABIAAADIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAABIADADIACADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIgCAEIgDADIAAABIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIgBACQDGAMB0glIgBACIG3AIQAEgGAHABIABgBQAZgCALAHQALAIADAQQACAHAAAUIgBANIgDAHIgDALQgCAGgHAFQgIAHgHAFQgIAFgRAGIgXAJQgQAEgoABg");
	this.shape_1062.setTransform(247.5,410.6);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("rgba(153,153,153,0.439)").s().p("EAj+ALmIgFAAIgCAAIzhAAQgtgMgdgVQgMgJgDgGQgDgHAAgNQAAgRAFgSIADACQAQANAlABQAZABAogEIBAgGQAwgDBcAHQBgAHAtgCIBYgHQA1gDAjACIAfACQASABAMgFQAMgFAJgLIAKABIAAgEIAAgEIAAgEIAAgDIAAgDQAFgNgCgOIgDgLIAAgBIAAgDIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgBIgEgEIgBgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgBIgEgEIgBgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgCIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAEgEIABgBIAAgDIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIABgEIAEgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIACgEIADgCIACgCIAFAAIAAgBIAHADIADADIADAEIAAAEIAAADIAAABIACgCIAFAAIAAgBIAHACIADAFIADADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIgBAFIgCADIgCADIgDABIgCABIAAAAIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIACACIADAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAACIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAABIACACIADAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIgDAEIgCADIAAABIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAHAAQADAHAFAFQAJAKAPAEQAOAEAOgEIAHgBQAMACAQgCIArgHQA0gIBCgDQAogBBQAAIFeABQACAIAAARIgBANIgDAHIgDALQgDAGgHAFQgHAHgIAFQgIAFgRAGIgXAJQgPAEgoABgArwLmIgFAAIgBAAI6gAAIgHgDIgEgDIgBgEIAAgEIAAgDIACgDIgBgDQgCgDAAgFIAAhDIABgGIACgCQAPAEAWABQA8ACA7ABIClADIBrABIBxgFQDNgLC9ANQAYABALgBQAUgCAMgKQAFgEAEgFIAHABIAAgEIAAgDIAAgFIAAgDIAAgBIABgLQABgJgCgHIAAgCIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgBIAAAAIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAEgEIABgBIAAgCIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgCIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgCIgEgDIgBgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIABgEIAEgDIAIgBIAAgCIAGADIADADIACgCIAEgCIAFAAIAAgCIAGADIAEADIACAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIADADIACADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIgCAEIgDACIAAAAIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAACIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAACIAAACIAAACIAAACIAAACIAAABIAAADIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAABIADADIACADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIgCAEIgDADIAAABIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIgBACIAFAAQAFANAMAKQANAJARAEQATAEAugHQFcg4FfApIAAARIgBANIgDAHIgDALQgCAGgHAFQgIAHgHAFQgIAFgRAGIgXAJQgQAEgoABg");
	this.shape_1063.setTransform(247.5,410.6);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("rgba(153,153,153,0.439)").s().p("EAj+ALmIgFAAIgCAAIzhAAQgsgMgegVQgMgJgDgGQgDgHAAgNIAAgKIAEADQAJAHAQAEQAJABASABQAiAABKgFQBGgFAmACQASAABkAJQBIAHAugGQASgCAkgHQAggEAWABQARAAAkAFQAeABASgLQAPgKAGgRQAHgQgEgQQACgKgBgLIgDgLIAAgBIAAgDIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgBIgEgEIgBgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgBIgEgEIgBgEIAAgEIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgCIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAEgEIABgBIAAgDIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIABgEIAEgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgCIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIACgEIADgCIACgCIAFAAIAAgBIAHADIADADIADAEIAAAEIAAADIAAABIACgCIAFAAIAAgBIAHACIADAFIADADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIgBAFIgCADIgCADIgDABIgCABIAAAAIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIACACIADAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAACIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAABIACACIADAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIgDAEIgCADIAAABIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAHAAQADAHAFAFQAIAJAMAEIAEACQAWAQAkgDQAUgCAngIQAjgGA8AAQBlgBAyACQA2AEBqAMQBeAHBBgHIAOgDIgBAHIgDAHIgDALQgDAGgHAFQgHAHgIAFQgIAFgRAGIgXAJQgPAEgoABgArwLmIgFAAIgBAAI6gAAIgHgDIgEgDIgBgEIAAgEIAAgDIACgDIgBgDQgCgDAAgFIAAgdIAJABQBAAEAlgEQAUgDA7gNQAxgKAegBQAbAABEAMQB8AWCYAAQBxAAClgNQAtgDAXgLQARgIALgNQAMgQABgQQABgMgFgKIgBgGIAAgCIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgBIAAAAIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAEgEIABgBIAAgCIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgCIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgDIAAgBIAAgDIAAgBIAAgCIAAgBIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgBIAAgCIAAgBIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgCIgEgDIgBgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIABgEIAEgDIAIgBIAAgCIAGADIADADIACgCIAEgCIAFAAIAAgCIAGADIAEADIACAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIADADIACADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIgCAEIgDACIAAAAIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAACIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAACIAAABIAAADIAAACIAAACIAAABIAAACIAAACIAAADIAAABIAAACIAAABIAAADIAAABIAAACIAAACIAAACIAAACIAAACIAAABIAAADIAAABIAAADIAAABIAAACIAAABIAAADIAAACIAAACIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAABIADADIACADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIgCAEIgDADIAAABIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAADIAAAEIAAAEIgBACIAFAAIAEAIQABAMAHAKQASAcApAGQAPADAUAAIAjgBIAxAAQAfABASgCQAggCA8gLQA+gMAegCQAggCBKAGQBhAHAwAEQBHAHA5ALIgHAGQgIAHgHAFQgIAFgRAGIgXAJQgQAEgoABg");
	this.shape_1064.setTransform(247.5,410.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1054}]}).to({state:[{t:this.shape_1055}]},7).to({state:[{t:this.shape_1056}]},7).to({state:[{t:this.shape_1057}]},7).to({state:[{t:this.shape_1058}]},6).to({state:[{t:this.shape_1059}]},5).to({state:[{t:this.shape_1060}]},5).to({state:[{t:this.shape_1061}]},5).to({state:[{t:this.shape_1062}]},5).to({state:[{t:this.shape_1063}]},20).to({state:[{t:this.shape_1064}]},42).wait(18));

	// picture
	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#FFFFFF").s().p("AgoAmQAPAAAOgGQANgHAIgNQAIgMgCgPQgBgQgMgJQgMgKgSAFQgSAGgCARQgCAMAIAJQAJAIALgHQAFgFgCgEQgCgGgHADQgDABgFAFQgEgDABgGQABgGAEgCQAMgIALAKQAKAKgFALQgHANgRACQgRADgJgKQgSgQABgcQABgMAGgMQAQgeAmAAQAigBAXAYQARARAGAZQAGAYgEAYQgDAYgMASQgNAUgUAHQgdgfgigXg");
	this.shape_1065.setTransform(502.2,408.4);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#FFFFFF").s().p("AAFASIgFgCIgHAAQgFAAgCgBQgDgBgCgEQgBgEABgDQABgDAHgHIgHAFQAGgIAHgEQAFgEAEAAQAIABAFAIQAEAHgBAGQAAAOgJABIgCAAIgEgBg");
	this.shape_1066.setTransform(558.1,382.3);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#FFFFFF").s().p("AAGAYIgGgDIgLABQgGAAgDgBQgFgCgBgGQgCgFACgFQACgFAIgJIgJAHQAHgKAKgGQAIgFAFAAQAMAAAGALQAGAJgBALQgBASgMACIgCAAIgHgCg");
	this.shape_1067.setTransform(547.1,382.5);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#FFFFFF").s().p("AAJAhIgKgEIgOABQgJABgEgCQgGgDgCgHQgDgHACgHQADgHAMgNIgNAJQALgPANgHQALgHAIAAQAPABAJAPQAHAMgBAPQAAAKgFAIQgFAIgIABIgBABQgEAAgGgDg");
	this.shape_1068.setTransform(536.9,375.4);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#FFFFFF").s().p("AAEASIgEgDQgKACgFgCQgGgDACgJQABgDAHgIIgHAGQAFgHAIgFQAFgEAEAAQAJAAAEAJQADAFAAAIQgBAOgJABIgBAAIgFgBg");
	this.shape_1069.setTransform(454.4,438.4);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#FFFFFF").s().p("AAGAYIgGgCIgKAAQgHAAgDgBQgFgCgBgFQgCgFACgFQACgFAJgKIgKAHQAHgKALgGQAHgFAGAAQALABAHALQAFAKgBAJQAAAHgDAGQgEAGgGABIgCAAIgHgCg");
	this.shape_1070.setTransform(443.3,438.5);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#FFFFFF").s().p("AAJAhIgKgEIgOABQgIABgFgDQgGgDgCgHQgCgGACgHQACgHAMgNIgMAJQAJgOAOgIQALgHAIAAQAQABAIAPQAIAMgCAPQAAAKgEAIQgFAIgJABIgBABQgEAAgGgDg");
	this.shape_1071.setTransform(433.1,431.5);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#FFFFFF").s().p("AAIBjQgOgNgJgbQgHgWgCgYQgDg6Ahg0QAFgJAGgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQACABgBAFQgQAtgDAvQgBA0APAnIAKAaQgKgDgHgGg");
	this.shape_1072.setTransform(570.9,438);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#FFFFFF").s().p("AAIBsQgPgOgKgeQgIgXgBgbQgEg/Alg5QAGgKAFgBIADAAQACABgBAFQgSAygDAzQgBA5AQArIAMAcQgLgDgJgHg");
	this.shape_1073.setTransform(565.8,437.5);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#FFFFFF").s().p("AAHBgQgNgMgJgbQgHgVgBgYQgEg3AhgzQAFgIAFgBIADAAQACABgCAEQgPAsgDAuQgBAxAOAnIAKAYQgJgCgIgGg");
	this.shape_1074.setTransform(560,438.3);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#FFFFFF").s().p("AAGBNQgVgSgDgyQgCgrAZgpQAFgIADAAIACAAQADABgCADQgNAkgCAkQgBApAMAeIAIAVQgIgCgGgGg");
	this.shape_1075.setTransform(456.2,380.9);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#FFFFFF").s().p("AAIBjQgOgNgJgbQgHgWgCgYQgDg5Ahg1QAFgIAGgCIADAAQACACgCAEQgQAtgDAvQgBA0APAnIAKAaQgJgCgIgHg");
	this.shape_1076.setTransform(450.6,378.9);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#FFFFFF").s().p("AAIBsQgPgOgKgeQgIgYgBgaQgEhAAlg5QAGgJAFgBIADAAQACABgBAFQgSAxgDA0QgBA5AQArIAMAcQgKgCgKgIg");
	this.shape_1077.setTransform(445.5,378.5);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#FFFFFF").s().p("AAHBgQgNgNgJgaQgHgVgBgYQgEg3AhgzQAFgIAFgCIADABQADAAgDAFQgPAsgDAuQgBAxAOAmIAKAaQgJgDgIgGg");
	this.shape_1078.setTransform(439.7,379.2);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#FFFFFF").s().p("AAxBlQgJgCgCgGQgCgEAEgIQAEgIAAgEQgBgHgPgOIgTgPQgagYgRgPQgMgQgHgGQgMgLgPABQgQADgHAAQgSAAgJgPQgKgOAHgQIAEgGQADgCAIAAIAPACQAJgBAGgDQADgCAFgKQAFgJAGgBQAFABAFAEIASANQAGAFABAEQAAADgCAGQgIAaAnAfQATASAoAXQANAKAJAAQAHABAOgGQASgEANAPQANAPgGAQIgagCQgBAYgEAMQgDAHgCABQgDACgFgBQgQAAgagLg");
	this.shape_1079.setTransform(377.4,378.5);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#FFFFFF").s().p("AhGBtQgOgCgHgNIAlgCIgFgVIAYAAQATAAABgFIgBgGIgFgQIAeAHIAEAAQACgBABgEIADgVQAVATAIgFQACgBAEgPQADgPgBAAQAKAGAJACQgFgPgPgaQgIAOgDALIgegQIgJAYQgGgDgPgHQgGAMgBANIgigKQgDAHgBALIgCATIgfgRQgFAUgBAUQgVgWgJgNQgQgWAKgRQAIgQAVgMQAZgMAMgHQAygdApgXQAOgJAKAAQAOAAAPAMQAkAbAWAnQAJARAAAMQgBAXgWATQgSASgaAGIgpAHQgYAFgNAHQgaARgOAGQgJAEgKAAIgHgBgAhxAAQgHALAFADIAFgBQAFgCACgFIAAgGQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIAAAAQgDAAgDACgAAehFQgKACgFADQgFADgGAKQgEAKAAAEQABACAJACIAKABQAHAAAHgEQAIgFAEgGQADgFABgFQABgGgFgEQgDgDgFAAIgIABg");
	this.shape_1080.setTransform(352.4,421.3);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#000000").s().p("AgULDIAA2FIApAAIAAWFg");
	this.shape_1081.setTransform(418.7,408.7);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#000000").s().p("AqfBIQhBgTgMgmQgHgUALgYQALgXAVgOQAtgeBJAAIB7AJICDALQBOAGA2AAID8ACQCZABBmgEQAaAACWgPQBrgKBHAPQAZAGALAEQAUAHAOAMQAMAKAIARQAIARAAAPQAAAHgCAKQgHAVgUAOQgOAKgZAIQgtAPg4ACIhnAAQjEACg4AAQlKgFiiAAQiKAFhCABIgFAAQhwAAhVgZg");
	this.shape_1082.setTransform(419.8,476.5);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#CCA47D").s().p("AncC0QifAAgMgBQhfgGhGgjQhBghgZgzQgQggACgkQADgmAUgfQA6hWCwgHQBggDCqANIH3AAQBUAACpgHQCmgGBVgBQBAABAiADQA1AFApAQQA4AXAfAqQAhAvgMAyQgEAOgGAMQgUArgXAbQgoAthCATQgzANhKAAg");
	this.shape_1083.setTransform(418.7,476.3);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#000000").s().p("AgULIIAA2PIApAAIAAWPg");
	this.shape_1084.setTransform(105.3,408.1);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#000000").s().p("AuuBRQACgJAAgHIAAiSIX9ACQAuAABogFQBcgCA4ASQAZAIAPAZQAPAZgEAXQgFAgghAMQhKAZg9gBQgigBhlACI0HADIiRABQh+AAgSgFg");
	this.shape_1085.setTransform(94.3,476.9);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#CCA47D").s().p("ALMC2Qg/gEgSAAI5pAAIAAlaIT8AAICagJQCGgIBeADQEtAJAuBxQAXA4goBPQgNAagYAZQgxA0hhAFIgaAAIg5gBg");
	this.shape_1086.setTransform(100.9,476.5);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#CFCF99").s().p("EgvzANpIAArZIAogCQAmgCADgBMAhyAAAICrABQBbgBA8gNQCWgfBdiFQCcjtBSh0QCLjJCAiFQB0h4ETgVQBdgICKADIDRAEIe3AAIAAbMg");
	this.shape_1087.setTransform(306.1,424.8);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.lf(["#E1F660","#F6D12B","#F0A455","#875948"],[0,0.333,0.706,1],0,-47.9,0,48).s().p("AgiHfQgKAAgHgGQgIgGABgIIAUuWQABgIAHgGQAHgFAKAAIAgAAQALAAAHAFQAHAGAAAIIAQOWQAAAJgHAFQgIAGgKAAg");
	this.shape_1088.setTransform(474.3,277.5);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#848661").s().p("AkZBCIBPiDIGkAAIBACDg");
	this.shape_1089.setTransform(531.8,303.6);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#514D31").s().p("AgiBCIhLiDICQAAIBLCDg");
	this.shape_1090.setTransform(563.6,303.6);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#848661").s().p("AiNBBIAAiCIDaAAIBBCDg");
	this.shape_1091.setTransform(585.6,312.9);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#514D31").s().p("AgeBCIhDiDICAAAIBDCDg");
	this.shape_1092.setTransform(599.9,312.9);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#ABAD88").s().p("AiUJNIAvxzQABgPALgLQAMgLAQAAIB9AAQAQAAALALQAMAKABAQIAtRzg");
	this.shape_1093.setTransform(474.3,279.9);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#848661").s().p("AiUI0IAvxBQABgQALgLQAMgLAQAAIBlAAQAQAAALALQAMAKABAQIBFRCg");
	this.shape_1094.setTransform(491.3,282.3);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#000000").s().p("AgNApIAAhRIAbAAIAABRg");
	this.shape_1095.setTransform(602.3,334.4);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#000000").s().p("AgSApIAAhRIAlAAIAABRg");
	this.shape_1096.setTransform(564.3,334.6);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#FFFFFF").s().p("AgUAWIAAgrIApAAIAAArg");
	this.shape_1097.setTransform(582,330.4);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#FFFFFF").s().p("AgXAbIAAg1IAvAAIAAA1g");
	this.shape_1098.setTransform(542.5,331.6);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#FFFFFF").s().p("AgXAbIAAg1IAvAAIAAA1g");
	this.shape_1099.setTransform(522.4,331.6);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#FFFFFF").s().p("AgXAbIAAg1IAvAAIAAA1g");
	this.shape_1100.setTransform(542.5,319.5);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#FFFFFF").s().p("AgXAbIAAg1IAvAAIAAA1g");
	this.shape_1101.setTransform(522.4,319.5);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#848661").s().p("AhJCeIAAk7ICTAAIAAE7g");
	this.shape_1102.setTransform(563.9,323);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#ABAD88").s().p("AjvCiIAAlDIHfAAIAAFDg");
	this.shape_1103.setTransform(532.5,323.5);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#ABAD88").s().p("Ah5BxIAAjhIDzAAIAADhg");
	this.shape_1104.setTransform(583.5,328.4);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#848661").s().p("Am5BxIAAjhINzAAIAADhg");
	this.shape_1105.setTransform(562.4,328.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065}]}).wait(127));

	// OCEAN
	this.instance_208 = new lib.Path_0_1();
	this.instance_208.setTransform(195.6,405.9,1,1,0,0,0,197.4,69.2);
	this.instance_208.alpha = 0.441;

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("rgba(174,225,116,0.439)").s().p("AclJ5IgEgDMg5aAAAIgPgFIgHgIIgDgHIAAgIIAAgCIAAgFIAAgDIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgGIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgHIABgBIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAAAQAJgIAQgFQCIgoCoACQB4ABC/AbQEBAkA5AFQCyARCGgQQA3gHBugTQBigQBDAEQA1ADBXAUQBpAYAhAFQCPAVCxgmQBhgVCqg5IAxgHIACADQBPgHB/AbQCfAjAuAEQBVAHB0gRQBEgJCGgZQB3gUBPACQBpACBTAmQATAIgBAMIgBAEIAEAEIAFAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAFIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAFIAAALQABAEAEAIQADAGACALIgBADQgOAugHAOIgCAFIgEABIgHABQgFAAgGgCg");
	this.shape_1106.setTransform(188.5,402.3);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("rgba(174,225,116,0.439)").s().p("A83KGIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgBIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIADAAQAPgEAcgBQAcgCAPgEQAXgHAMgOIAIAJQBkgfCrAvICKAmQBPATA9gBQA2AABUgSQB1gaATgDQBrgQCGARQBPAJCgAiQCfAiBRAKQCGAPBpgQQApgHBjgZQBagYA0gFQBSgJC5AVQCsAUBdgSQAwgJBegcQAzgNApgCQAGgHAKABIABgCQAUACA4gDQAwgBAcAFQARAEAjALQArAMA5AEQAiACBEgBIBeAAQAgAAAQgCQAQgBAugHQAmgGAXAAQATAAALAGQAHAEAEAGQAEAIgBAHIgCAGIADAEIAAAIIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAHIAAAGIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIgDAIIgFAHIgHAFIgKADMg48AAAIAAAFIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIgDAIIgFAHIgIAFIgKADIAAgDg");
	this.shape_1107.setTransform(184.8,401.8);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("rgba(174,225,116,0.439)").s().p("A8vJAIgHgHIgDgIIAAgHIAAgIIAAgFIAAgCIAAgFIAAgDIAAgFIAAgCIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgGIAAgHIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgFIgBAAIAAgBIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEQAMgPASgGQCog/C0APQA8AFBvAWQBzAXA3AFQCJAOENgnQEQgmCGAMQBBAFBsAWQB9AZAtAGQCTATCVgTQCUgUCJg5IAAgBQCwgPCmBAQAXABAVAEIAiAIQAUAGAMACQAfAFAzAAIBxAAQBEABAlgCQA5gEAugLQAPgEBJgXQA1gRAjgEIgBgBQBegDAuAFQAgAEANAMIAFAFIABgBIAAgCIAMAFIAIAHIAEAIIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAGIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIgDAFIADAFIAAAIIgCAHIgFAIIgHAFIgKACMg4oAAAIgGAIIgHAHIgNAFIgPgFg");
	this.shape_1108.setTransform(186.1,397.9);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("rgba(174,225,116,0.439)").s().p("AclJ/IgEgDMgnyAAAIAFgJQAEgMgCgNQgCgNgIgJQgGgIgNgIIgfgTQgWgMgPgEQgRgFgjABIAAAAQgYAEgTAMQgOAJgFAGQgIAMAAARQAAAMAFASQAFANAFAIIujAAIgPgFIgHgIIgDgHIAAgIIAAgCIAAgFIAAgDIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgGIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgCIABgBIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgCQAJgHAQgFQCIgoCoACQB4ABC/AbQEBAkA5AFQBvAKBegCIAfgIIC9g4IABABIARgDQBSgkBaADQBAACCgAtQCLAnBSgLQAsgGBsgnQBegiA6ABIAAgCQDDgMC+AkQARADALAIIAAAAQCUAgAsAEQBVAHB0gRQBEgJCGgZQB3gUBPACQBpACBTAmQATAIgBAMIgBAEIAEAEIAFAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAGIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAFIAAALQABAEAEAIQADAGACALIgBADQgOAugHAOIgCAFIgEABIgHABQgFAAgGgCg");
	this.shape_1109.setTransform(188.5,403.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_208,p:{x:195.6,y:405.9}}]}).to({state:[{t:this.shape_1106}]},19).to({state:[{t:this.shape_1107}]},20).to({state:[{t:this.shape_1108}]},25).to({state:[{t:this.instance_208,p:{x:197.3,y:408.8}}]},25).to({state:[{t:this.shape_1109}]},26).wait(12));

	// base
	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f().s("#000000").ss(2).p("ACplcIlRK5");
	this.shape_1110.setTransform(150.9,259.9,1,1,8);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#000000").s().p("AhPIEIAAwHICfAAIAAQHg");
	this.shape_1111.setTransform(147.4,387.9);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#000000").s().p("AhOIEIAAwHICeAAIAAQHg");
	this.shape_1112.setTransform(63.4,387.9);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f().s("#000000").ss(2).p("Ah1D3IgZhbIBXgQIgMhjIBYgVIgVhUIA9gTIgDhHIA5gTIgJg3IAvgK");
	this.shape_1113.setTransform(150.7,269.4);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f().s("#000000").p("ADbjTIm1Gn");
	this.shape_1114.setTransform(153.8,245.5);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f().s("#000000").ss(2).p("ACplcIlRK5");
	this.shape_1115.setTransform(158.8,259.2);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#000000").s().p("AnxBUIhuhrIABg8IS+AAIAAA9IhsBqg");
	this.shape_1116.setTransform(105.3,327.8);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#000000").s().p("AiQCJIAAkLQAAgIAkAEQAgADAJAEQAfAOAaAwIAHAMQACAEAOgBIAVAAQAYACAbARQAoAaAMAuQAHAcABBEg");
	this.shape_1117.setTransform(95.5,304.2);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f().s("#000000").ss(2,0,1).p("ABCATIiDAAIAAglICDAAg");
	this.shape_1118.setTransform(106.1,246.8);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f().s("#000000").ss(2,0,1).p("AAmDwIhkhrIB9hzIhwh4IBaiL");
	this.shape_1119.setTransform(105.7,292.3);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f().s("#000000").ss(2,0,1).p("AAAGGIAAsL");
	this.shape_1120.setTransform(106.1,277.4);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f().s("#000000").ss(2,0,1).p("AhgGGIBgsLIBhMLg");
	this.shape_1121.setTransform(106.1,277.4);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f().s("#000000").ss(2,0,1).p("AAhDwIhkhrICHhwIh7h7IBaiL");
	this.shape_1122.setTransform(71.5,292.3);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f().s("#000000").ss(2,0,1).p("AAAGGIAAsL");
	this.shape_1123.setTransform(71.4,277.4);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("#000000").ss(2,0,1).p("AhgGGIBgsLIBhMLg");
	this.shape_1124.setTransform(71.4,277.4);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#BCBC32").s().p("ApfAUIAAgnIS/AAIAAAng");
	this.shape_1125.setTransform(105.3,317.4);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#848661").s().p("AhGBvIAAjdICMAAIAADdg");
	this.shape_1126.setTransform(110.5,305.6);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#848661").s().p("AgpBvIAAjeIBTAAIAADeg");
	this.shape_1127.setTransform(132.7,305.3);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#848661").s().p("AgVCMIAAkXIArAAIAAEXg");
	this.shape_1128.setTransform(122.9,280.1);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#000000").s().p("Ag5BvIAAjeIBzAAIAADeg");
	this.shape_1129.setTransform(142.8,305.3);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#000000").s().p("Ag0BzIAAjlIBqAAIAADlg");
	this.shape_1130.setTransform(123.1,305.6);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#000000").s().p("AggCMIAAkXIBBAAIAAEXg");
	this.shape_1131.setTransform(128.5,280.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110}]}).wait(127));

	// boat
	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#EFA455").s().p("AhDAmIAAhNICFAAIADAnIACAnIgbAAQACgsADgWIgqALIhBAAIAAAyIAAAFIgMABg");
	this.shape_1132.setTransform(240.5,327.6);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#EFA455").s().p("AA8AnIAAg3IhCAAQgbgIgPgDQADAWACAsIgcAAQACg1AEgZICGAAIAABNIADACg");
	this.shape_1133.setTransform(226.7,327.6);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#000000").s().p("Ap7BFIAJgMQAEgIABgFQABgFgBgKQgCgVgLgfQgOgsgNABQArgEBGACIBwAFIKZAAQBugBBigHQBZgHCIgSQgHA/gjAuQgiAvg5AcIkiAEIqWAAQh5ABhhAEQgGgMAMgQg");
	this.shape_1134.setTransform(272,338.1);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#ABAD88").s().p("AhJAzIAAhDIgRgWIgLAAIAAgMICOAAIAAAYIA9gBIAABOg");
	this.shape_1135.setTransform(316.9,326.8);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#848661").s().p("AgoA1IAAhSQAAgKAHgGQAHgHAJAAIAjAAQAJAAAIAHQAGAGAAAKIAABSg");
	this.shape_1136.setTransform(261.2,326.8);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#514D31").s().p("AgoArIAAg+QAAgJAHgIQAHgGAJAAIAjAAQAJAAAHAGQAHAIAAAJIAAA+g");
	this.shape_1137.setTransform(265.3,328.2);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#848661").s().p("AgoA1IAAhSQAAgKAHgGQAHgHAJAAIAjAAQAJAAAHAHQAHAGAAAKIAABSg");
	this.shape_1138.setTransform(277.7,326.8);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#514D31").s().p("AgoArIAAg+QAAgJAHgIQAHgGAJAAIAjAAQAKAAAGAGQAHAHAAAKIAAA+g");
	this.shape_1139.setTransform(281.8,328.2);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#848661").s().p("AgoA1IAAhSQAAgJAHgHQAHgHAJAAIAjAAQAJAAAHAHQAHAHAAAJIAABSg");
	this.shape_1140.setTransform(294.2,327);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#514D31").s().p("AgoArIAAg/QAAgJAHgHQAHgHAKAAIAiAAQAKAAAHAHQAGAHAAAJIAAA/g");
	this.shape_1141.setTransform(298.3,328.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1141,p:{rotation:0,x:298.3,y:328.4}},{t:this.shape_1140,p:{rotation:0,x:294.2,y:327}},{t:this.shape_1139,p:{rotation:0,x:281.8,y:328.2}},{t:this.shape_1138,p:{rotation:0,x:277.7,y:326.8}},{t:this.shape_1137,p:{rotation:0,x:265.3,y:328.2}},{t:this.shape_1136,p:{rotation:0,x:261.2,y:326.8}},{t:this.shape_1135,p:{rotation:0,x:316.9,y:326.8}},{t:this.shape_1134,p:{rotation:0,x:272,y:338.1}},{t:this.shape_1133,p:{rotation:0,x:226.7,y:327.6}},{t:this.shape_1132,p:{rotation:0,x:240.5,y:327.6}}]}).to({state:[{t:this.shape_1141,p:{rotation:-1.8,x:296.6,y:327.1}},{t:this.shape_1140,p:{rotation:-1.8,x:292.4,y:325.8}},{t:this.shape_1139,p:{rotation:-1.8,x:280.1,y:327.3}},{t:this.shape_1138,p:{rotation:-1.8,x:275.9,y:326.1}},{t:this.shape_1137,p:{rotation:-1.8,x:263.6,y:327.8}},{t:this.shape_1136,p:{rotation:-1.8,x:259.4,y:326.6}},{t:this.shape_1135,p:{rotation:-1.8,x:315.1,y:324.9}},{t:this.shape_1134,p:{rotation:-1.8,x:270.6,y:337.6}},{t:this.shape_1133,p:{rotation:-1.8,x:225,y:328.5}},{t:this.shape_1132,p:{rotation:-1.8,x:238.7,y:328}}]},22).to({state:[{t:this.shape_1141,p:{rotation:1.3,x:293.2,y:327.3}},{t:this.shape_1140,p:{rotation:1.3,x:289.1,y:325.8}},{t:this.shape_1139,p:{rotation:1.3,x:276.7,y:326.6}},{t:this.shape_1138,p:{rotation:1.3,x:272.6,y:325.2}},{t:this.shape_1137,p:{rotation:1.3,x:260.2,y:326.3}},{t:this.shape_1136,p:{rotation:1.3,x:256.1,y:324.8}},{t:this.shape_1135,p:{rotation:1.3,x:311.8,y:326.1}},{t:this.shape_1134,p:{rotation:1.3,x:266.7,y:336.4}},{t:this.shape_1133,p:{rotation:1.3,x:221.6,y:324.9}},{t:this.shape_1132,p:{rotation:1.3,x:235.4,y:325.2}}]},23).to({state:[{t:this.shape_1141,p:{rotation:0.6,x:289.9,y:330.1}},{t:this.shape_1140,p:{rotation:0.6,x:285.8,y:328.6}},{t:this.shape_1139,p:{rotation:0.6,x:273.4,y:329.7}},{t:this.shape_1138,p:{rotation:0.6,x:269.3,y:328.3}},{t:this.shape_1137,p:{rotation:0.6,x:256.9,y:329.5}},{t:this.shape_1136,p:{rotation:0.6,x:252.8,y:328.1}},{t:this.shape_1135,p:{rotation:0.6,x:308.5,y:328.7}},{t:this.shape_1134,p:{rotation:0.6,x:263.6,y:339.5}},{t:this.shape_1133,p:{rotation:0.6,x:218.4,y:328.6}},{t:this.shape_1132,p:{rotation:0.6,x:232.1,y:328.7}}]},22).to({state:[{t:this.shape_1141,p:{rotation:1,x:287.9,y:330.8}},{t:this.shape_1140,p:{rotation:1,x:283.8,y:329.3}},{t:this.shape_1139,p:{rotation:1,x:271.4,y:330.2}},{t:this.shape_1138,p:{rotation:1,x:267.3,y:328.8}},{t:this.shape_1137,p:{rotation:1,x:254.9,y:329.9}},{t:this.shape_1136,p:{rotation:1,x:250.8,y:328.5}},{t:this.shape_1135,p:{rotation:1,x:306.5,y:329.5}},{t:this.shape_1134,p:{rotation:1,x:261.5,y:340}},{t:this.shape_1133,p:{rotation:1,x:216.4,y:328.7}},{t:this.shape_1132,p:{rotation:1,x:230.1,y:329}}]},19).to({state:[{t:this.shape_1141,p:{rotation:-0.5,x:288.9,y:330.2}},{t:this.shape_1140,p:{rotation:-0.5,x:284.8,y:328.8}},{t:this.shape_1139,p:{rotation:-0.5,x:272.4,y:330}},{t:this.shape_1138,p:{rotation:-0.5,x:268.3,y:328.7}},{t:this.shape_1137,p:{rotation:-0.5,x:255.9,y:330.2}},{t:this.shape_1136,p:{rotation:-0.5,x:251.8,y:328.9}},{t:this.shape_1135,p:{rotation:-0.5,x:307.5,y:328.4}},{t:this.shape_1134,p:{rotation:-0.5,x:262.7,y:340.1}},{t:this.shape_1133,p:{rotation:-0.5,x:217.4,y:329.9}},{t:this.shape_1132,p:{rotation:-0.5,x:231.1,y:329.8}}]},20).wait(21));

	// ancora
	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#000000").s().p("AgfAeIANg7IAkAAIAOA7g");
	this.shape_1142.setTransform(176.4,366.9);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f().s("#000000").p("AAAq5IAAVz");
	this.shape_1143.setTransform(176.4,295.3);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f().s("#000000").p("AAAsvIAAZe");
	this.shape_1144.setTransform(176.4,307.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1143,p:{y:295.3,regX:0,regY:0,scaleY:1,x:176.4}},{t:this.shape_1142,p:{y:366.9}}]}).to({state:[{t:this.shape_1144,p:{regX:0,regY:0,scaleY:1,x:176.4,y:307.4}},{t:this.shape_1142,p:{y:390.7}}]},6).to({state:[{t:this.shape_1144,p:{regX:-0.5,regY:83,scaleY:1.145,x:175.9,y:413.8}},{t:this.shape_1142,p:{y:414.2}}]},5).to({state:[{t:this.shape_1144,p:{regX:-0.5,regY:83,scaleY:1.283,x:175.9,y:436.7}},{t:this.shape_1142,p:{y:437}}]},4).to({state:[{t:this.shape_1144,p:{regX:-0.5,regY:83,scaleY:1.145,x:175.9,y:413.3}},{t:this.shape_1142,p:{y:413.6}}]},4).to({state:[{t:this.shape_1144,p:{regX:0,regY:0,scaleY:1,x:176.4,y:306.4}},{t:this.shape_1142,p:{y:389.7}}]},5).to({state:[{t:this.shape_1143,p:{y:294.7,regX:0,regY:0,scaleY:1,x:176.4}},{t:this.shape_1142,p:{y:366.2}}]},5).to({state:[{t:this.shape_1143,p:{y:345.7,regX:0.5,regY:70.5,scaleY:0.863,x:176.9}},{t:this.shape_1142,p:{y:346.8}}]},5).to({state:[{t:this.shape_1143,p:{y:328.1,regX:0.5,regY:70.4,scaleY:0.734,x:176.9}},{t:this.shape_1142,p:{y:329.3}}]},4).to({state:[{t:this.shape_1143,p:{y:310.8,regX:0.5,regY:70.6,scaleY:0.614,x:176.9}},{t:this.shape_1142,p:{y:311.8}}]},4).to({state:[{t:this.shape_1143,p:{y:327.1,regX:0.5,regY:70.4,scaleY:0.734,x:176.9}},{t:this.shape_1142,p:{y:328.3}}]},19).to({state:[{t:this.shape_1143,p:{y:345.2,regX:0.5,regY:70.5,scaleY:0.863,x:176.9}},{t:this.shape_1142,p:{y:346.3}}]},9).to({state:[{t:this.shape_1143,p:{y:294.7,regX:0,regY:0,scaleY:1,x:176.4}},{t:this.shape_1142,p:{y:366.2}}]},6).to({state:[{t:this.shape_1144,p:{regX:0,regY:0,scaleY:1,x:176.4,y:307.4}},{t:this.shape_1142,p:{y:390.7}}]},7).to({state:[{t:this.shape_1144,p:{regX:-0.5,regY:83,scaleY:1.145,x:175.9,y:413.8}},{t:this.shape_1142,p:{y:414.2}}]},5).to({state:[{t:this.shape_1144,p:{regX:-0.5,regY:83,scaleY:1.283,x:175.9,y:436.7}},{t:this.shape_1142,p:{y:437}}]},6).to({state:[{t:this.shape_1144,p:{regX:-0.5,regY:83,scaleY:1.145,x:175.9,y:413.3}},{t:this.shape_1142,p:{y:413.6}}]},4).wait(29));

	// Layer 15
	this.instance_209 = new lib.Path_93();
	this.instance_209.setTransform(552.1,232.7,1,1,0,0,0,61.2,26.9);
	this.instance_209.alpha = 0.441;

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#82807D").s().p("AG0EaQgWAAgygQQgugOgbACQgGABgDgCIgBAAQggAJgTAEQgdAFgXgBQgTgBgpgJQgmgJgVAAQgSAAgpAHQgkAGgVgBQgVgCgYgIQgOgFgcgNIgDgCQgEABgEgBIgtgOQgYgJgRgMIgUgPIgTgQIgfgWIgfgWQglgegVgpQgQgjgKgQQgSgbgYgJQgRgHglAEIgvAFQgQACgIgCQgPgCgFgMQgCgGAAgNQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgFgEAHgLQAaghAvgYQAegQA7gUIAAAAQAXgCAOABQAVABAQAHQAgANAbAsQAJANAGAEQAMAGASgJQAJgFARgNQAPgIASgBQASAAAPAJIARAKQAKAHAHABQAHACADACIACAAQAGgBAHgFIALgKQAkgjAygOIABABQAsgGAtAUQAtAVAZAnQAKgLARgGQAMgDAUAAIAIAAIAAgCQAKgnAkg0QAVgfARgMQAUgPAlgJQAxgNAMgFIABABQA3gEAdAIQAIACAVAIIApARQAQAGAJgBIAQgFQAKgDAGABQAHACACAFIABABIAAAAIAAACIAAAAIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIgBACIgBACIgBABIAAACQgBAEgEAEQgYAZgXAUQgiAdgaANQgjASgiAAIgCAAg");
	this.shape_1145.setTransform(552.3,233.1);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#82807D").s().p("AHZEjQgdgDgjgSIgigQQgUgHgQADQgJABgVAJQgjAOgngCQgDAFgMgEQgMgFgSgEIgfgGQgWgGgMABQgLAAgSAHQghALgUAAQgYAAglgSQgrgUgTgDIghgEIgHgCQg3ALg7gdQgxgZgvg3QgagegMgYQgMgdgIgNQgLgSgXgVQgUgTgQgIQgagMgqABQgvADgYgBQgJAAgDgEQgFgEAAgLIAAAAIAAAAQgEABgEgDQgEgDACgEQAAgCADgCQBXhJBvgaIABABQAkgBAUACQAeADAVAOIAfAaQASARAQADQAKADAOgCIAXgEQAtgLAbAIQARAGAGgBQAJgBANgMIAdgcQAPgLAOgFIAAAAIAAgBQASgNAUABIAAABQA7gGAaAQQAFAEAPAOIAgAfQAEAEAEABQAHADAHgHQADgCAGgKQAKgOAQgIQAPgIARABIAGABQAIgKAKgWQAMgYAIgKQAJgKAQgLQA+gpA9AAIABgBQAZgCAfALQASAGAjASQASAJALgBQAIgBAOgHQAJgEALAAQAKAAAEAEQACADAAAEQAAAEgDACIAAAAIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAAAIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIgBACIgBABQgFAPgFAHIgSARQgHAHgTAYQgQATgNAJQgWAPgdAAIgNgBg");
	this.shape_1146.setTransform(553.2,233.8);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#82807D").s().p("ABcEQIgpgTQgZgKgTACQgIABgNAFIgWAKQgZALgRgEQgYAAgkgLQg3gSgZgRQgjgWgigtQglg2gUgaQgSgYgqgvQgWgWgNgJQgggXgnAFIgbAFQgRADgLgBQgQgBgPgJQgOgKgIgPQgEgIAAgJQgBgEACgFQADgIAHgDIADgCIAQgKIAWgOQANgKAJgEQAKgEAWgGQAPgEAegMQAagKATAAIAAgBQA1gCA0AFQAWACANAEQAVAIAgAaIAKAJIAIAEIALAEQAKADAOgEQAIgCAPgGQAlgOAmAHIAUADQALACAIgBQAHgBATgGQAggNAngHQAlgHAhAPQAMAGAYANQAVALARgDIALgBIACAAQATgdARgIQAHgDATgFQARgEAIgGQAFgFAHgJIAKgOQAGgHAQgLQAdgUASgJQAbgOAYgEIAAABQAngFAnANIATAHQALADAIAAQAKAAAUgEQATgCAJAKQADAEAAADIABABIABACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAABIAAABIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAAAIADACQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAADgEAFQgZAfgiAcQgNALgLAEQgIAEgYADQgdADgNgFIgPgIQgRgJgYgBQgRgBgbADIgrAFQgYAAgSgGIgZgHQgGAAgDgCQgaACgQAJQgTANgLAEQgLAEgPAAQgcAAgZgJg");
	this.shape_1147.setTransform(554.3,235);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#82807D").s().p("ACZEdIgUgOQgSgNgTgFQgVgGgSAGIgOAFIgNAGQgVAJgXgBIgGgBIgCgBQgdgGgLgKIgRgUQgVgcgjgFIgUgCIgVAAQgmgCgjgVIgbgRIgVgLQgNgJgWgaIgFgEQgKgKgMgQIgSgcQgQgZgbgeQgJgJgFgFQgIgHgRgHQgTgHgKgCQgPgCgVACIglADQgWACgOgFQgUgHgGgSQgCgJAEgJIAAAAQgBgFAHgHQAVgSAfgOQATgJAmgNIBpgkIABAFQA7gEAeABQAyACAkAPIAsASQAZAKATgBQAJgBAQgFQASgFAHgBQAUgDAYAGQAOAEAcAMQAPgCAUgPIAQgNQAKgIAHgEQArgaBFAQIAaAHIAaAGQAPACAHgEQAGgCAMgOQATgTAbgEIAYAAQAFABACACQARgHAVgXIARgTQAGgHAJgIQAMgLALgDQALgDAYgCQAggBAQADQAOADAaAKQAaAKANADIAKADIADAAIAAgBIADABIACACIABACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAABIACABQABAEgBADQgBAEgGAGQgKAKgYASIgZASQgVAPgOAGQgbAKgqgIIgjgHQgUgEgPAAQgMAAgdAEQgWADgOAAQgDACgGAAIgUgBIgUgDQgZgDgPAJIgPALQgLAHgOABIgCAAQgMAAgLgFg");
	this.shape_1148.setTransform(554.7,234.5);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#82807D").s().p("ABcEQIgpgTQgZgKgTACQgIABgNAFIgWAKQgZALgRgDQgYgBgkgLQg3gSgZgRQgjgWgigtQglg2gUgaQgSgYgqgvQgWgWgNgJQgggXgnAFIgbAFQgRADgLgBQgQgBgPgJQgOgKgIgPQgEgIAAgJQgBgEACgFQADgIAHgDIADgCIAQgKIAWgOQANgKAJgEQAKgEAWgGQAPgEAegMQAagKATAAIAAgBQA1gCA0AFQAWACANAEQAVAIAgAaIAKAJIAIAEIALAEQAKADAOgEQAIgCAPgGQAlgOAmAHIAUADQALACAIgBQAHgBATgGQAggNAngHQAlgHAhAPQAMAGAYANQAVALARgDIALgBIACAAQATgdARgIQAHgDATgFQARgEAIgGQAFgFAHgJIAKgOQAGgHAQgLQAdgUASgJQAbgOAYgEIAAABQAngFAnANIATAHQALADAIAAQAKAAAUgEQATgCAJAKQADAEAAADIABABIABACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAABIAAABIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAAAIADACQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAADgEAFQgZAfgiAcQgNALgLAEQgIAEgYADQgdADgNgFIgPgIQgRgJgYgBQgRgBgbADIgrAFQgYAAgSgGIgZgHQgGAAgDgCQgaADgQAIQgTANgLAEQgLAEgPAAQgcAAgZgJg");
	this.shape_1149.setTransform(555.2,235.1);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#82807D").s().p("AHZEjQgdgDgjgSIgigQQgUgHgQADQgJABgVAJQgkAOgmgCQgDAFgMgEQgMgFgSgEIgfgGQgWgGgMABQgLAAgSAHQghALgUAAQgYAAglgSQgrgUgTgDIghgEQgFAAgCgCQg3ALg7gdQgxgZgvg3QgagegMgYQgMgdgIgNQgLgSgXgVQgUgTgQgIQgagMgqABQgvADgYgBQgJAAgDgEQgFgEAAgLIAAAAIAAAAQgEABgEgDQgEgDACgEQAAgCADgCQBXhJBvgaIABABQAkgBAUACQAeADAVAOIAfAaQASARAQADQAKADAOgCIAXgEQAtgLAbAIQARAGAGgBQAJgBANgMIAdgcQAPgLAOgFIAAAAIAAgBQASgNAUABIAAABQA7gGAaAQQAFAEAPAOIAgAfQAEAEAEABQAHADAHgHQADgCAGgKQAKgOAQgIQAPgIARABIAGABQAIgKAKgWQAMgYAIgKQAJgKAQgLQA+gpA9AAIABgBQAZgCAfALQASAGAjASQASAJALgBQAIgBAOgHQAJgEALAAQAKAAAEAEQACADAAAEQAAAEgDACIAAAAIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAAAIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIgBACIgBABQgFAPgFAHIgSARQgHAHgTAYQgQATgNAJQgWAPgdAAIgNgBg");
	this.shape_1150.setTransform(555.7,234.1);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#82807D").s().p("AG0EaQgWAAgygQQgugOgbACQgGABgDgCIgBAAQggAJgTAEQgdAFgXgBQgTgBgpgJQgmgJgVAAQgSAAgpAHQgkAGgVgBQgVgCgYgIQgOgFgcgNIgDgBQgEAAgEgBIgtgOQgYgJgRgMIgUgPIgTgQIgfgWIgfgWQglgegVgpQgQgjgKgQQgSgbgYgJQgRgHglAEIgvAFQgQACgIgCQgPgCgFgMQgDgGABgNIgEgBQgFgEAHgLQAaghAvgYQAegQA7gUIAAAAQAXgCAOABQAVABAQAHQAgANAbAsQAJANAGAEQAMAGASgJQAJgFARgNQAPgIASgBQASAAAPAJIARAKQAKAHAHABQAHACADACIACAAQAGgBAHgFIALgKQAkgjAygOIABABQAsgGAtAUQAtAVAZAnQAKgLARgGQAMgDAUAAIAIAAIAAgCQAKgnAkg0QAVgfARgMQAUgPAlgJQAxgNAMgFIABABQA3gEAdAIQAIACAVAIIApARQAQAGAJgBIAQgFQAKgDAGABQAHACACAFIABABIAAAAIAAACIAAABIAAABIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIgBACIgBACIgBABIAAACQgBAEgEAEQgYAZgXAUQgiAdgaANQgjASgiAAIgCAAg");
	this.shape_1151.setTransform(556.7,233.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_209}]}).to({state:[{t:this.shape_1145}]},5).to({state:[{t:this.shape_1146}]},4).to({state:[{t:this.shape_1147}]},5).to({state:[{t:this.shape_1148}]},6).to({state:[{t:this.shape_1149,p:{x:555.2,y:235.1}}]},6).to({state:[{t:this.shape_1149,p:{x:555.7,y:234.1}}]},6).to({state:[{t:this.shape_1150}]},6).to({state:[{t:this.shape_1151}]},6).to({state:[{t:this.instance_209}]},7).to({state:[{t:this.shape_1145}]},7).to({state:[{t:this.shape_1146}]},6).to({state:[{t:this.shape_1147}]},7).to({state:[{t:this.shape_1148}]},6).to({state:[{t:this.shape_1149,p:{x:555.2,y:235.1}}]},6).to({state:[{t:this.shape_1149,p:{x:555.7,y:234.1}}]},6).to({state:[{t:this.shape_1150}]},8).to({state:[{t:this.instance_209}]},6).to({state:[{t:this.shape_1145}]},1).to({state:[{t:this.shape_1146}]},6).to({state:[{t:this.shape_1147}]},7).to({state:[{t:this.shape_1148}]},6).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(304.3,469,615.1,938.9);

})(lib3 = lib3||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib3, images, createjs, ss;