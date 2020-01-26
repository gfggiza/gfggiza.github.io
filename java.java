(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1786,
	height: 927,
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



(lib.Tween35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],83,-130.5,-162.2,294.1).s().p("AG6FqQhSgRgpgNQhDgWgsghQgOgLgbgYQgbgYgPgLQgfgXg9gZQjKhUixAGIgUAAQgLAAgIgDQgYgIgQgdQgjg+AnhmQAXg9AlgxQAng1AzggQA3giA/gHQBCgHA3AZQA7AcA5BKQA6BKARBOQADANAJA/QAHAtALAcQAIAUAQAWIAfAmQBKBVAvAwQAbAcAOANQAoAugEAAIAAAAg");
	this.shape.setTransform(87.2,-0.1,1,1,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_1.setTransform(83.1,29.4,1,1,44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D387B8").s().p("AABAeIAMgJIgJAAQgSgEgJgMQgGgHACgMQADgMAKgDQAGgCAIADIADABQAKAEAHAIQAHAIABAIQABAMgIAJQgIAJgJAAIgDgBg");
	this.shape_2.setTransform(155.3,-34,1,1,-20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEEF4").s().p("AAQBrQgQgCg+gOQgHgBgfgBQgagBgJgFQgPgHAAgRIADgfQABgHgFgQQgFgOABgIQAAgKAHgIQAHgGARgCQBAgGA8AVQBUAcAIg7IABgRQABgKADgHQAFgNAJAAQAIgBAGAJIAFAMIANAhQAIAVAEAOIgEgCQgIgCgHACQgKADgCAMQgDAJAHAJQAIANAVADQgEAOgMAOQgQAUgcAPIgCABQgaAOgjAAIgSAAg");
	this.shape_3.setTransform(140.8,-29.4,1,1,-20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA448D","#BB468E","#BD4E93","#C15A9A","#C66DA5","#CD84B3","#D6A1C4","#E0C3D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.353,0.51,0.627,0.725,0.812,0.894,0.965,0.98,0.984,1],12.7,-20.9,-17.1,33.1).s().p("AhiDlQgqgRgZgSQgYgRgQgYQgRgZgFgcQgBgLgBgUIgBgfQgEgjgUgdQgQgZBFgeQBNgcAJgIQAMgKAQgTIAbgeQAngqA0gWQATgIALAFQASAIAAAiQAAARgFAqQAAAiAaADQADABAvgZQAsgXABAFQAGAVgMAiQgPAnAAAOQABAOAQAKIAaAPQAMAJAIAQQAGALAGAUIAJAaQgGgIgIAAQgJABgFANQgDAGgBAKIgBARQgIA8hUgcQg+gWhAAGQgPACgHAHQgNANAOAmQANAigcANQgEACgIAAQgTAAgmgRg");
	this.shape_4.setTransform(121.9,-41.8,1,1,-20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EEEEEF").ss(6.9).p("AgjARQAIABANAFQAEABADABQAHABAGgCQAEgCAIgEQADgCAJgDQAGgCADgEQABgCgBgIQAAAAgBgLQgDgIgFgBQgEgCgHACQgHAEgEABQgIADgEABQAAABgBAAIgGAEQgDADgDACQgGgBgEAAQgBABgEAEQgEABgDAA");
	this.shape_5.setTransform(-56.8,72.9,1,1,26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEEF4").s().p("ABeEpQhAgRgsg3QgvhGgagkQgpg6gdhBQgGgOACgJIAAgBQAEgJAKgHQAJgHAMgDIAWgDQAPgCAIgCQAMgEAHgFQASgMAIgSQAMgYgMgdQgJgYgTgTIgqgcQgbgTAGgVQAFgOARgHQAPgHASAAQAZgCAjAEIA5AGQAgADAZgEQAGAAAbgJQAZgIACAIQABACgCAFIgBACQgCAJgKAUIgGANQgDAHgBAMQgBAMgHARIgMAgQgJAdgRAiIgdA3QgPAggCAXIAAAMQABAXASAnIASAjIAUAcQAVAeAJAQQAMAVAJAWIABAFQAHAagKAPIgHgCQgOgFgHgBQAHABAOAFIAHACIgHAIQgMAJgSAAQgKAAgLgCgAB+D/QgDADgDAAQADAAADgDIAGgFIAJABIAGgFIAHgEIABgBIgBABIgHAEIgGAFIgJgBIgGAFgACYEaIAAAAg");
	this.shape_6.setTransform(-59.8,42.7,1,1,26.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E0A4C6","#E1B0CD","#E2C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.227,0.675,0.98,0.984,1],28.5,-33.6,-23.8,57).s().p("AAnFMQgogTgfhCIgbg7QgPgkgOgWQgLgRgNgIQgRgLgOAGQgVAJgDApIgCA8QgGAggRAbQgTAggbAIQgVAFgUgIQgJgDgJgIQgGgFgKgNIgPgSQgIgJgLgEQgMgEgJAEQAWgXAwgYQA4gcASgNQAigZAVgxQAOgjALg3QAFgYALgaQAHgQAQgeQAuhTAMgRQAhgvA0gfQBEgoBNgPQBmgUAmAyQAVAbALAyQATBTgHBXQgGBUgeBQQgjBdgdAsQgvBIhCARQgkAKgdAAQgdAAgVgKg");
	this.shape_7.setTransform(-51.2,-3.3,1,1,-28.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEEF4").s().p("ArYFbQghgBhAgIQgigEgJgOQgGgKABgVQAFhaAzhOQAyhOBPgrQAlgTA+ABIBoAIQBJAGAhAAQA7AAAtgMQBKgVAsADQAZABAtAMQAzAOASACQBjAPCCgTQBsgRB2goIgCAFIAngmQAVgXAJgVQALgagBgwQgBg4ADgTQAEgTAQADQACAAAEAEQAEADADAAQAGAAAMgLQAVgWAdgIQAsgMAxAVQAkAPArAmQA0AvAVAzQAaA/gcA3QgRAlgpAcIgXAQQgNAKgIAHIgJAKIgLAPIgDAFQgEAGgDAPQgGAdgkAbIg+AmQhXA1hBATQhZAZhdgTQgigGgxABQg3AEgdAAIjKADQhzAEhYAOQhYANiHAkQgZAGgmAFIg/AHQggAEgjAAIgegBg");
	this.shape_8.setTransform(39.8,-6.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.5).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_9.setTransform(15.4,-13.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_10.setTransform(58,16.2,1,1,38.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],36.6,-59.7,-73.8,131.6).s().p("AB/DJQgdgLgvgdQgsgcgSgOQgigYgYgZQhDhGgYhlQgFgVADgNQACgOAKgQIASgZQAJgMAEgOIABgCIAJAhQAEAPAGAvQAGAnAIAVQAIAUAQAXIAgAkQA9BIAfAhQA2A5AvApQgQgKgVgIg");
	this.shape_11.setTransform(72.8,13.3,1,1,38.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEEF4").s().p("AAbDKQgWgIgdgPQgWgLgUgNQhHgughgkQgigmgKgOQgXgegDgdQgBgIABgPIABgKQAGgmAOgWQATgfAsgNQApgNAkAKIAwAPQAcAJASAAQAJgSAGgTQBagCBngdQhbAog2A5QhABBgFBNQAAAMAEAEQABADAKAEIBCAdQAmAQAfAHQAZAGAMAEQAWAIALAMQAJAJACAKIABAPQABAbgVARQgSAQgdAEQgSADgTAAQg1AAg5gVg");
	this.shape_12.setTransform(-69.5,30.5,1,1,46);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],1.1,-7.7,-14.4,19.2).s().p("Ah1BSQAIghADgQQAFgYgDgcQgEgkgQgRQgHgbgNgeQBYCGDJgFQgGAUgJASQgUAAgdgJIgvgPQgigKgqAMQgrAOgUAeQgOAWgFAmIgBAKQAAgTAIgdg");
	this.shape_13.setTransform(-63.5,8.8,1,1,46);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],14.6,-28.4,-29.3,47.6).s().p("ABXHRQgbg5hBg2QhPg6gkgiQhPhIgjhqQgihoAVhpIAPg8QAIgkABgZQABghgOgcQgOgegbgMIARAGQg4gagTgeQgOgVACgYQABgbASgOQAPgLAcgCQA3gEAzAgQAyAeAcAyQAaAwAFA7QAEA4gPA5QgHAdgUA5QgOAyAEAjQAGAwAlArQAfAlAwAdQAvAcBqAzQBaAxAqA4IASAaQALAOAMAGQAJAFAJACQidAehiBKQAEgNgKgVg");
	this.shape_14.setTransform(-106,-48.1,1,1,-28.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#EEEEEF").ss(6.9).p("Ag2AQQALADANAEQAJACAPADQAEABACABQAEgBAEgCQAIgDAGgDQACgBABAAQABgBABAAQADgCACgBQAJgGAIgIQAGgHAAgGQAAgFgDgCQgFgEgKAAQgJgCgXABQgJgHgKgIAALgSQgDgCgDgCIAAgBIgBAAQgBAAgCAAQgBAAAAAAQgCAAgDABQgPACgQACAgHAhQAFgBACgCQAFACAGAB");
	this.shape_15.setTransform(97.4,76.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.3,-81.3,316.7,164.9);


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],83,-130.5,-162.2,294.1).s().p("AG6FqQhSgRgpgNQhDgWgsghQgOgLgbgYQgbgYgPgLQgfgXg9gZQjKhUixAGIgUAAQgLAAgIgDQgYgIgQgdQgjg+AnhmQAXg9AlgxQAng1AzggQA3giA/gHQBCgHA3AZQA7AcA5BKQA6BKARBOQADANAJA/QAHAtALAcQAIAUAQAWIAfAmQBKBVAvAwQAbAcAOANQAoAugEAAIAAAAg");
	this.shape.setTransform(84.2,-3,1,1,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_1.setTransform(89.2,26.4,1,1,26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D387B8").s().p("AABAeIAMgJIgJAAQgSgEgJgMQgGgHACgMQADgMAKgDQAGgCAIADIADABQAKAEAHAIQAHAIABAIQABAMgIAJQgIAJgJAAIgDgBg");
	this.shape_2.setTransform(157.6,-35.8,1,1,-20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEEF4").s().p("AAQBrQgQgCg+gOQgHgBgfgBQgagBgJgFQgPgHAAgRIADgfQABgHgFgQQgFgOABgIQAAgKAHgIQAHgGARgCQBAgGA8AVQBUAcAIg7IABgRQABgKADgHQAFgNAJAAQAIgBAGAJIAFAMIANAhQAIAVAEAOIgEgCQgIgCgHACQgKADgCAMQgDAJAHAJQAIANAVADQgEAOgMAOQgQAUgcAPIgCABQgaAOgjAAIgSAAg");
	this.shape_3.setTransform(143.1,-31.2,1,1,-20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA448D","#BB468E","#BD4E93","#C15A9A","#C66DA5","#CD84B3","#D6A1C4","#E0C3D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.353,0.51,0.627,0.725,0.812,0.894,0.965,0.98,0.984,1],12.7,-20.9,-17.1,33.1).s().p("AhiDlQgqgRgZgSQgYgRgQgYQgRgZgFgcQgBgLgBgUIgBgfQgEgjgUgdQgQgZBFgeQBNgcAJgIQAMgKAQgTIAbgeQAngqA0gWQATgIALAFQASAIAAAiQAAARgFAqQAAAiAaADQADABAvgZQAsgXABAFQAGAVgMAiQgPAnAAAOQABAOAQAKIAaAPQAMAJAIAQQAGALAGAUIAJAaQgGgIgIAAQgJABgFANQgDAGgBAKIgBARQgIA8hUgcQg+gWhAAGQgPACgHAHQgNANAOAmQANAigcANQgEACgIAAQgTAAgmgRg");
	this.shape_4.setTransform(124.2,-43.6,1,1,-20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EEEEEF").ss(6.9).p("AgjARQAIABANAFQAEABADABQAHABAGgCQAEgCAIgEQADgCAJgDQAGgCADgEQABgCgBgIQAAAAgBgLQgDgIgFgBQgEgCgHACQgHAEgEABQgIADgEABQAAABgBAAIgGAEQgDADgDACQgGgBgEAAQgBABgEAEQgEABgDAA");
	this.shape_5.setTransform(-102.4,63.6,1,1,48.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEEF4").s().p("ABeEpQhAgRgsg3QgvhGgagkQgpg6gdhBQgGgOACgJIAAgBQAEgJAKgHQAJgHAMgDIAWgDQAPgCAIgCQAMgEAHgFQASgMAIgSQAMgYgMgdQgJgYgTgTIgqgcQgbgTAGgVQAFgOARgHQAPgHASAAQAZgCAjAEIA5AGQAgADAZgEQAGAAAbgJQAZgIACAIQABACgCAFIgBACQgCAJgKAUIgGANQgDAHgBAMQgBAMgHARIgMAgQgJAdgRAiIgdA3QgPAggCAXIAAAMQABAXASAnIASAjIAUAcQAVAeAJAQQAMAVAJAWIABAFQAHAagKAPIgHgCQgOgFgHgBQAHABAOAFIAHACIgHAIQgMAJgSAAQgKAAgLgCgAB+D/QgDADgDAAQADAAADgDIAGgFIAJABIAGgFIAHgEIABgBIgBABIgHAEIgGAFIgJgBIgGAFgACYEaIAAAAg");
	this.shape_6.setTransform(-93.8,34.6,1,1,48.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E0A4C6","#E1B0CD","#E2C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.227,0.675,0.98,0.984,1],28.5,-33.6,-23.8,57).s().p("AAnFMQgogTgfhCIgbg7QgPgkgOgWQgLgRgNgIQgRgLgOAGQgVAJgDApIgCA8QgGAggRAbQgTAggbAIQgVAFgUgIQgJgDgJgIQgGgFgKgNIgPgSQgIgJgLgEQgMgEgJAEQAWgXAwgYQA4gcASgNQAigZAVgxQAOgjALg3QAFgYALgaQAHgQAQgeQAuhTAMgRQAhgvA0gfQBEgoBNgPQBmgUAmAyQAVAbALAyQATBTgHBXQgGBUgeBQQgjBdgdAsQgvBIhCARQgkAKgdAAQgdAAgVgKg");
	this.shape_7.setTransform(-68.4,-4.8,1,1,-6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEEF4").s().p("ArYFbQghgBhAgIQgigEgJgOQgGgKABgVQAFhaAzhOQAyhOBPgrQAlgTA+ABIBoAIQBJAGAhAAQA7AAAtgMQBKgVAsADQAZABAtAMQAzAOASACQBjAPCCgTQBsgRB2goIgCAFIAngmQAVgXAJgVQALgagBgwQgBg4ADgTQAEgTAQADQACAAAEAEQAEADADAAQAGAAAMgLQAVgWAdgIQAsgMAxAVQAkAPArAmQA0AvAVAzQAaA/gcA3QgRAlgpAcIgXAQQgNAKgIAHIgJAKIgLAPIgDAFQgEAGgDAPQgGAdgkAbIg+AmQhXA1hBATQhZAZhdgTQgigGgxABQg3AEgdAAIjKADQhzAEhYAOQhYANiHAkQgZAGgmAFIg/AHQggAEgjAAIgegBg");
	this.shape_8.setTransform(42.1,-8.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.5).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_9.setTransform(17.7,-15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_10.setTransform(60.2,12.2,1,1,81.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],36.6,-59.7,-73.8,131.6).s().p("AB/DJQgdgLgvgdQgsgcgSgOQgigYgYgZQhDhGgYhlQgFgVADgNQACgOAKgQIASgZQAJgMAEgOIABgCIAJAhQAEAPAGAvQAGAnAIAVQAIAUAQAXIAgAkQA9BIAfAhQA2A5AvApQgQgKgVgIg");
	this.shape_11.setTransform(72.9,20.2,1,1,81.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEEF4").s().p("AAbDKQgWgIgdgPQgWgLgUgNQhHgughgkQgigmgKgOQgXgegDgdQgBgIABgPIABgKQAGgmAOgWQATgfAsgNQApgNAkAKIAwAPQAcAJASAAQAJgSAGgTQBagCBngdQhbAog2A5QhABBgFBNQAAAMAEAEQABADAKAEIBCAdQAmAQAfAHQAZAGAMAEQAWAIALAMQAJAJACAKIABAPQABAbgVARQgSAQgdAEQgSADgTAAQg1AAg5gVg");
	this.shape_12.setTransform(-49.8,40.3,1,1,19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],1.1,-7.7,-14.4,19.2).s().p("Ah1BSQAIghADgQQAFgYgDgcQgEgkgQgRQgHgbgNgeQBYCGDJgFQgGAUgJASQgUAAgdgJIgvgPQgigKgqAMQgrAOgUAeQgOAWgFAmIgBAKQAAgTAIgdg");
	this.shape_13.setTransform(-54.1,18.2,1,1,19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],14.6,-28.4,-29.3,47.6).s().p("ABXHRQgbg5hBg2QhPg6gkgiQhPhIgjhqQgihoAVhpIAPg8QAIgkABgZQABghgOgcQgOgegbgMIARAGQg4gagTgeQgOgVACgYQABgbASgOQAPgLAcgCQA3gEAzAgQAyAeAcAyQAaAwAFA7QAEA4gPA5QgHAdgUA5QgOAyAEAjQAGAwAlArQAfAlAwAdQAvAcBqAzQBaAxAqA4IASAaQALAOAMAGQAJAFAJACQidAehiBKQAEgNgKgVg");
	this.shape_14.setTransform(-103.7,-49.9,1,1,-41.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#EEEEEF").ss(6.9).p("AgzAfQALAAAOAAQAJgBAPgBQAHgBALgBQAFAAAEAAQAJgBAGgCQAFgCAEgFQADgGAAgFQAAgEgBgCQgDgDgFgCQgGgFgUgHQgMgDgKgDQgMgEgNgF");
	this.shape_15.setTransform(117.5,67.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.6,-73.7,321.3,147.8);


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],83,-130.5,-162.2,294.1).s().p("AG6FqQhSgRgpgNQhDgWgsghQgOgLgbgYQgbgYgPgLQgfgXg9gZQjKhUixAGIgUAAQgLAAgIgDQgYgIgQgdQgjg+AnhmQAXg9AlgxQAng1AzggQA3giA/gHQBCgHA3AZQA7AcA5BKQA6BKARBOQADANAJA/QAHAtALAcQAIAUAQAWIAfAmQBKBVAvAwQAbAcAOANQAoAugEAAIAAAAg");
	this.shape.setTransform(74.3,10,1,1,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_1.setTransform(86.7,37.1,1,1,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D387B8").s().p("AABAeIAMgJIgJAAQgSgEgJgMQgGgHACgMQADgMAKgDQAGgCAIADIADABQAKAEAHAIQAHAIABAIQABAMgIAJQgIAJgJAAIgDgBg");
	this.shape_2.setTransform(151.6,-24,1,1,-20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEEF4").s().p("AAQBrQgQgCg+gOQgHgBgfgBQgagBgJgFQgPgHAAgRIADgfQABgHgFgQQgFgOABgIQAAgKAHgIQAHgGARgCQBAgGA8AVQBUAcAIg7IABgRQABgKADgHQAFgNAJAAQAIgBAGAJIAFAMIANAhQAIAVAEAOIgEgCQgIgCgHACQgKADgCAMQgDAJAHAJQAIANAVADQgEAOgMAOQgQAUgcAPIgCABQgaAOgjAAIgSAAg");
	this.shape_3.setTransform(137.1,-19.4,1,1,-20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA448D","#BB468E","#BD4E93","#C15A9A","#C66DA5","#CD84B3","#D6A1C4","#E0C3D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.353,0.51,0.627,0.725,0.812,0.894,0.965,0.98,0.984,1],12.7,-20.9,-17.1,33.1).s().p("AhiDlQgqgRgZgSQgYgRgQgYQgRgZgFgcQgBgLgBgUIgBgfQgEgjgUgdQgQgZBFgeQBNgcAJgIQAMgKAQgTIAbgeQAngqA0gWQATgIALAFQASAIAAAiQAAARgFAqQAAAiAaADQADABAvgZQAsgXABAFQAGAVgMAiQgPAnAAAOQABAOAQAKIAaAPQAMAJAIAQQAGALAGAUIAJAaQgGgIgIAAQgJABgFANQgDAGgBAKIgBARQgIA8hUgcQg+gWhAAGQgPACgHAHQgNANAOAmQANAigcANQgEACgIAAQgTAAgmgRg");
	this.shape_4.setTransform(118.2,-31.8,1,1,-20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EEEEEF").ss(6.9).p("AgmAIQAHACAMAIQAEACACABQAJACAEgBQAFAAAJgEQADgBAJgBQAHAAADgEQACgCAAgKQAAAAABgJQgCgIgEgDQgEgCgHABQgHADgFAAQgKAAgCACQgBAAAAAAIgHADQgDADgEAAQgGgBgDgBQgCAAgFAEQgDACgEgB");
	this.shape_5.setTransform(-77.6,83.1,1,1,19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEEF4").s().p("AADEuQg6gbgjg/QgihOgTgnQgNgbgFgcIgJg3IgEgIQgBg0ADgCQAJgFAMAAQAHgBAPACQAQABAIgBQAMgCAJgDQATgKALgPQAQgWgHgfQgEgYgPgXIglgiQgXgZAKgTQAHgNASgEQAQgEASACQAYAEAhAJIA4ASQAfAIAaAAQAGACAdgFQAagDgBAIQABACgCAFIgCACQgEAIgNASIgJALIgHATQgDALgJAQIgSAeQgOAagXAeIgnAyQgUAcgGAXIgDAMQgCAWALApIALAmIAPAfIAVAzQAJAXAEAXIAAAGQACAagNANIgGgDQgMgIgHgCQAHACAMAIIAGADIgIAHQgIAFgKAAQgPAAgSgIgAAlEMIAFgBIAAAAIAAAAIAHgEIAJACQAEAAADgDIAHgDIABAAIgBAAIgHADQgDADgEAAIgJgCIgHAEIAAAAIAAAAIgFABIAAAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIAAAAgAA+EqIAAAAg");
	this.shape_6.setTransform(-75.5,54.4,1,1,19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E0A4C6","#E1B0CD","#E2C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.227,0.675,0.98,0.984,1],28.5,-33.6,-23.8,57).s().p("AAnFMQgogTgfhCIgbg7QgPgkgOgWQgLgRgNgIQgRgLgOAGQgVAJgDApIgCA8QgGAggRAbQgTAggbAIQgVAFgUgIQgJgDgJgIQgGgFgKgNIgPgSQgIgJgLgEQgMgEgJAEQAWgXAwgYQA4gcASgNQAigZAVgxQAOgjALg3QAFgYALgaQAHgQAQgeQAuhTAMgRQAhgvA0gfQBEgoBNgPQBmgUAmAyQAVAbALAyQATBTgHBXQgGBUgeBQQgjBdgdAsQgvBIhCARQgkAKgdAAQgdAAgVgKg");
	this.shape_7.setTransform(-67.1,7.2,1,1,-24.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEEF4").s().p("ArYFbQghgBhAgIQgigEgJgOQgGgKABgVQAFhaAzhOQAyhOBPgrQAlgTA+ABIBoAIQBJAGAhAAQA7AAAtgMQBKgVAsADQAZABAtAMQAzAOASACQBjAPCCgTQBsgRB2goIgCAFIAngmQAVgXAJgVQALgagBgwQgBg4ADgTQAEgTAQADQACAAAEAEQAEADADAAQAGAAAMgLQAVgWAdgIQAsgMAxAVQAkAPArAmQA0AvAVAzQAaA/gcA3QgRAlgpAcIgXAQQgNAKgIAHIgJAKIgLAPIgDAFQgEAGgDAPQgGAdgkAbIg+AmQhXA1hBATQhZAZhdgTQgigGgxABQg3AEgdAAIjKADQhzAEhYAOQhYANiHAkQgZAGgmAFIg/AHQggAEgjAAIgegBg");
	this.shape_8.setTransform(34.1,4.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.5).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_9.setTransform(9.7,-2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_10.setTransform(46.8,30.8,1,1,65.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],36.6,-59.7,-73.8,131.6).s().p("AB/DJQgdgLgvgdQgsgcgSgOQgigYgYgZQhDhGgYhlQgFgVADgNQACgOAKgQIASgZQAJgMAEgOIABgCIAJAhQAEAPAGAvQAGAnAIAVQAIAUAQAXIAgAkQA9BIAfAhQA2A5AvApQgQgKgVgIg");
	this.shape_11.setTransform(61.2,35.2,1,1,65.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEEF4").s().p("AAyDzQhDgPg/g1QgSgQgXgYQgQgSgQgUQgxhEgTgrQgSgwgFgQQgKgmAHgcQACgIAGgOIAFgJQATghAUgQQAegWAtACQAqADAfAWIAnAfQAWASATAHQAPgOAMgQQBVAeBqAJQhjAGhHAhQhRAogfBIQgEAJACAFQAAADAHAIIAyAyQAeAcAbARQAWAPAJAIQASAPAGAPQAFAMgCAKIgDAOQgJAagaAIQgNAFgPAAQgLAAgMgCg");
	this.shape_12.setTransform(-76,45.6,1,1,22);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],1.1,-7.7,-14.4,19.2).s().p("Ah1BSQAIghADgQQAFgYgDgcQgEgkgQgRQgHgbgNgeQBYCGDJgFQgGAUgJASQgUAAgdgJIgvgPQgigKgqAMQgrAOgUAeQgOAWgFAmIgBAKQAAgTAIgdg");
	this.shape_13.setTransform(-73.8,20,1,1,42.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],14.6,-28.4,-29.3,47.6).s().p("ABXHRQgbg5hBg2QhPg6gkgiQhPhIgjhqQgihoAVhpIAPg8QAIgkABgZQABghgOgcQgOgegbgMIARAGQg4gagTgeQgOgVACgYQABgbASgOQAPgLAcgCQA3gEAzAgQAyAeAcAyQAaAwAFA7QAEA4gPA5QgHAdgUA5QgOAyAEAjQAGAwAlArQAfAlAwAdQAvAcBqAzQBaAxAqA4IASAaQALAOAMAGQAJAFAJACQidAehiBKQAEgNgKgVg");
	this.shape_14.setTransform(-101.5,-53.8,1,1,-29.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#EEEEEF").ss(6.9).p("Ag0AdQALABAOAAQAKAAAPAAQAHAAAKgBQAPACAJgDQAGgCAEgFQAEgFAAgGQAAgJgJgCQgFgFgUgJQgLgEgKgEQgMgEgMgG");
	this.shape_15.setTransform(42.7,76.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.6,-85.6,309.3,174.7);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D387B8").s().p("AABAeIAMgJIgJAAQgSgEgJgMQgGgHACgMQADgMAKgDQAGgCAIADIADABQAKAEAHAIQAHAIABAIQABAMgIAJQgIAJgJAAIgDgBg");
	this.shape.setTransform(145.1,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEEF4").s().p("AAQBrQgQgCg+gOQgHgBgfgBQgagBgJgFQgPgHAAgRIADgfQABgHgFgQQgFgOABgIQAAgKAHgIQAHgGARgCQBAgGA8AVQBUAcAIg7IABgRQABgKADgHQAFgNAJAAQAIgBAGAJIAFAMIANAhQAIAVAEAOIgEgCQgIgCgHACQgKADgCAMQgDAJAHAJQAIANAVADQgEAOgMAOQgQAUgcAPIgCABQgaAOgjAAIgSAAg");
	this.shape_1.setTransform(129.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BA448D","#BB468E","#BD4E93","#C15A9A","#C66DA5","#CD84B3","#D6A1C4","#E0C3D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.353,0.51,0.627,0.725,0.812,0.894,0.965,0.98,0.984,1],12.7,-20.9,-17.1,33.1).s().p("AhiDlQgqgRgZgSQgYgRgQgYQgRgZgFgcQgBgLgBgUIgBgfQgEgjgUgdQgQgZBFgeQBNgcAJgIQAMgKAQgTIAbgeQAngqA0gWQATgIALAFQASAIAAAiQAAARgFAqQAAAiAaADQADABAvgZQAsgXABAFQAGAVgMAiQgPAnAAAOQABAOAQAKIAaAPQAMAJAIAQQAGALAGAUIAJAaQgGgIgIAAQgJABgFANQgDAGgBAKIgBARQgIA8hUgcQg+gWhAAGQgPACgHAHQgNANAOAmQANAigcANQgEACgIAAQgTAAgmgRg");
	this.shape_2.setTransform(116.6,-17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEEF4").s().p("AAIDFQgYgCgggMIgEgCQgegLgRgWIAAgBQgKgMgGgSQgOglAEglQACgQAIgaQAJgdACgKQAEgWAEgGQADgIAFgEQAKgHARAAIAdACQAmgBAtgwIAjglQAUgTAUgJIAAABQgoA8gdBBQgMAcgOApQgFANgDAVIgEAlQgBASAEAHQADAFANAJQAVAOAIARQAEAKgBALQgBAMgGAIQgOASgfAAIgKgBg");
	this.shape_3.setTransform(98.5,76.9,1,1,-39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],18.2,-40.5,-39.1,58.8).s().p("AkDEKQABhEgWg0QBOjxBIhxQB7i9CvAGQBBAAAgAvQAjAygqA/QgPAUghAjQgaAfgGAYIgOAnIgEAKQgUA2ghBFIg6B5IgMAIQgtAhgqAwIAAgBIgBABQgUAJgUATIgjAlQgtAwgoABIgdgCQgRAAgKAHQgFAEgDAIQAPhLABgzg");
	this.shape_4.setTransform(82.9,30.1,1,1,-39.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EEEEEF").ss(6.9).p("AgngIQAFAFAJAJQACADADADQAGAGAGABQAFABAHABQAEAAAJADQAFABAGgBQACgBAEgIQABgBAEgKQACgGgDgEQgCgEgHgCQgIgBgEgBQgKgDgEgBQgBAAAAAAIgGAAQgEABgDgBQgFgEgDgBQgBgBgGABQgEABgDgC");
	this.shape_5.setTransform(-22.9,88.4,1,1,-34.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEEF4").s().p("AinEeQgsgxgHhHQABhVgCgsQgBhFANhIQADgPAHgGIABgBQAIgGANAAQALAAALAEIAUAKQAOAHAHACQAMAEAJAAQAVAAASgKQAXgOAGgeQAHgZgGgaIgTgvQgLggAQgNQAMgJATAEQAOACAPALQAVAMAbAXIAtAmQAZAUAXAMQAFADAcAHQAZAIgDAHQAAADgEADIgDABQgHAGgTALIgNAHQgFAEgIAKQgIAJgPAKIgcAUQgYATghASIg1AeQgfAQgPAUIgHAJQgMATgHArQgDAWgBASIAAAhIgBA4QgBAYgGAXIgCAFIgBAAIgIAAIgCAAIAAAAIgBAAIAAAAIgCAAIgCAAIgIgFIAAgBIgBAAIAAAAIgGABIgCAAIAAAAIAAAAIgFgBIAAAAIAAAAIAFABIAAAAIAAAAIACAAIAGgBIAAAAIABAAIAAABIAIAFIACAAIACAAIAAAAIABAAIAAAAIACAAIAIAAIABAAQgIAZgRAHIgFgGIgOgQIAOAQIAFAGQgFACgGAAIgDAAQgVAAgVgXgAhWETIAAAAg");
	this.shape_6.setTransform(-31.9,58.9,1,1,-34.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E0A4C6","#E1B0CD","#E2C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.227,0.675,0.98,0.984,1],28.5,-33.6,-23.8,57).s().p("AAnFMQgogTgfhCIgbg7QgPgkgOgWQgLgRgNgIQgRgLgOAGQgVAJgDApIgCA8QgGAggRAbQgTAggbAIQgVAFgUgIQgJgDgJgIQgGgFgKgNIgPgSQgIgJgLgEQgMgEgJAEQAWgXAwgYQA4gcASgNQAigZAVgxQAOgjALg3QAFgYALgaQAHgQAQgeQAuhTAMgRQAhgvA0gfQBEgoBNgPQBmgUAmAyQAVAbALAyQATBTgHBXQgGBUgeBQQgjBdgdAsQgvBIhCARQgkAKgdAAQgdAAgVgKg");
	this.shape_7.setTransform(-51.9,17.3,1,1,-54.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEEF4").s().p("ArYFbQghgBhAgIQgigEgJgOQgGgKABgVQAFhaAzhOQAyhOBPgrQAlgTA+ABIBoAIQBJAGAhAAQA7AAAtgMQBKgVAsADQAZABAtAMQAzAOASACQBjAPCCgTQBsgRB2goIgCAFIAngmQAVgXAJgVQALgagBgwQgBg4ADgTQAEgTAQADQACAAAEAEQAEADADAAQAGAAAMgLQAVgWAdgIQAsgMAxAVQAkAPArAmQA0AvAVAzQAaA/gcA3QgRAlgpAcIgXAQQgNAKgIAHIgJAKIgLAPIgDAFQgEAGgDAPQgGAdgkAbIg+AmQhXA1hBATQhZAZhdgTQgigGgxABQg3AEgdAAIjKADQhzAEhYAOQhYANiHAkQgZAGgmAFIg/AHQggAEgjAAIgegBg");
	this.shape_8.setTransform(34.3,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.5).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_9.setTransform(9.9,4.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_10.setTransform(62.4,31.2,1,1,51.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],36.6,-59.7,-73.8,131.6).s().p("AB/DJQgdgLgvgdQgsgcgSgOQgigYgYgZQhDhGgYhlQgFgVADgNQACgOAKgQIASgZQAJgMAEgOIABgCIAJAhQAEAPAGAvQAGAnAIAVQAIAUAQAXIAgAkQA9BIAfAhQA2A5AvApQgQgKgVgIg");
	this.shape_11.setTransform(77.4,31.7,1,1,51.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEEF4").s().p("AAbDKQgWgIgdgPQgWgLgUgNQhHgughgkQgigmgKgOQgXgegDgdQgBgIABgPIABgKQAGgmAOgWQATgfAsgNQApgNAkAKIAwAPQAcAJASAAQAJgSAGgTQBagCBngdQhbAog2A5QhABBgFBNQAAAMAEAEQABADAKAEIBCAdQAmAQAfAHQAZAGAMAEQAWAIALAMQAJAJACAKIABAPQABAbgVARQgSAQgdAEQgSADgTAAQg1AAg5gVg");
	this.shape_12.setTransform(-69.8,54.2,1,1,38.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],1.1,-7.7,-14.4,19.2).s().p("Ah1BSQAIghADgQQAFgYgDgcQgEgkgQgRQgHgbgNgeQBYCGDJgFQgGAUgJASQgUAAgdgJIgvgPQgigKgqAMQgrAOgUAeQgOAWgFAmIgBAKQAAgTAIgdg");
	this.shape_13.setTransform(-66.6,31.9,1,1,38.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],14.6,-28.4,-29.3,47.6).s().p("ABXHRQgbg5hBg2QhPg6gkgiQhPhIgjhqQgihoAVhpIAPg8QAIgkABgZQABghgOgcQgOgegbgMIARAGQg4gagTgeQgOgVACgYQABgbASgOQAPgLAcgCQA3gEAzAgQAyAeAcAyQAaAwAFA7QAEA4gPA5QgHAdgUA5QgOAyAEAjQAGAwAlArQAfAlAwAdQAvAcBqAzQBaAxAqA4IASAaQALAOAMAGQAJAFAJACQidAehiBKQAEgNgKgVg");
	this.shape_14.setTransform(-99.8,-56.2,1,1,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.9,-94.9,296,190);


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D387B8").s().p("AABAeIAMgJIgJAAQgSgEgJgMQgGgHACgMQADgMAKgDQAGgCAIADIADABQAKAEAHAIQAHAIABAIQABAMgIAJQgIAJgJAAIgDgBg");
	this.shape.setTransform(139.6,-2.2,1,1,-16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEEF4").s().p("AAQBrQgQgCg+gOQgHgBgfgBQgagBgJgFQgPgHAAgRIADgfQABgHgFgQQgFgOABgIQAAgKAHgIQAHgGARgCQBAgGA8AVQBUAcAIg7IABgRQABgKADgHQAFgNAJAAQAIgBAGAJIAFAMIANAhQAIAVAEAOIgEgCQgIgCgHACQgKADgCAMQgDAJAHAJQAIANAVADQgEAOgMAOQgQAUgcAPIgCABQgaAOgjAAIgSAAg");
	this.shape_1.setTransform(124.7,1.4,1,1,-16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BA448D","#BB468E","#BD4E93","#C15A9A","#C66DA5","#CD84B3","#D6A1C4","#E0C3D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.353,0.51,0.627,0.725,0.812,0.894,0.965,0.98,0.984,1],12.7,-20.9,-17.2,33.1).s().p("AhiDlQgqgRgZgSQgYgRgQgYQgRgZgFgcQgBgLgBgUIgBgfQgEgjgUgdQgQgZBFgeQBNgcAJgIQAMgKAQgTIAbgeQAngqA0gWQATgIALAFQASAIAAAiQAAARgFAqQAAAiAaADQADABAvgZQAsgXABAFQAGAVgMAiQgPAnAAAOQABAOAQAKIAaAPQAMAJAIAQQAGALAGAUIAJAaQgGgIgIAAQgJABgFANQgDAGgBAKIgBARQgIA8hUgcQg+gWhAAGQgPACgHAHQgNANAOAmQANAigcANQgEACgIAAQgTAAgmgRg");
	this.shape_2.setTransform(106.7,-12.2,1,1,-16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEEF4").s().p("AAIDFQgYgCgggMIgEgCQgegLgRgWIAAgBQgKgMgGgSQgOglAEglQACgQAIgaQAJgdACgKQAEgWAEgGQADgIAFgEQAKgHARAAIAdACQAmgBAtgwIAjglQAUgTAUgJIAAABQgoA8gdBBQgMAcgOApQgFANgDAVIgEAlQgBASAEAHQADAFANAJQAVAOAIARQAEAKgBALQgBAMgGAIQgOASgfAAIgKgBg");
	this.shape_3.setTransform(57.4,78.2,1,1,-20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],18.2,-40.5,-39.1,58.8).s().p("AkDEKQABhEgWg0QBOjxBIhxQB7i9CvAGQBBAAAgAvQAjAygqA/QgPAUghAjQgaAfgGAYIgOAnIgEAKQgUA2ghBFIg6B5IgMAIQgtAhgqAwIAAgBIgBABQgUAJgUATIgjAlQgtAwgoABIgdgCQgRAAgKAHQgFAEgDAIQAPhLABgzg");
	this.shape_4.setTransform(58.3,28.9,1,1,-20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEEF4").s().p("AAIF1QgUgIgfgPQgWgLgUgNQhHgughglQgigmgKgNQgXghgDgcQgBgIABgQIABgKQAGgmAOgWQATgeAsgMQApgMAkAKIAwANQAcAJAUAAQAfg8gIhYQgDghgJgrIgQhLQgGgYAAgOQAAgVAJgOQAOgZAvgHIAbgEIBJA9QAtAmAWAbQBBBRg0BXIgOAXQgJAPgIAJQgnARgZAQQhCAmgnAxQgpA3gEBAQAAAMAEAFQABACAIAFIBCAdQAmAQAfAGQAZAGAMAEQAWAIALAMQAJAKACAKIABAPQABAagVASQgSAQgdAEQgSADgTAAQg1AAg5gVg");
	this.shape_5.setTransform(-41.8,54.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#D893BB","#DBA6C6","#DFBAD3","#E1C7DA","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.2,0.463,0.725,0.98,0.984,1],14.6,-29.8,-31.2,49.5).s().p("AhXFqQAJghADgQQAFgYgDgeQgEgkgQgRQgOgygjhFQgohNgTgkQhBiLAZhnQAghCAzgpQAIgIACgDIACgFQA4giBAAdQBIAlBCBYQAlAyBJBpQAOAQANAKIgcAEQgvAHgQAZQgJAOABAVQAAAOAFAWIASBLQAJArADAhQAIBYggA+QgUAAgdgJIgvgPQglgKgnAMQgrAOgUAeQgOAWgFAmIgCAKQABgTAHgdg");
	this.shape_6.setTransform(-58.2,24.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEEF4").s().p("ArYFbQghgBhAgIQgigEgJgOQgGgKABgVQAFhaAzhOQAyhOBPgrQAlgTA+ABIBoAIQBJAGAhAAQA7AAAtgMQBKgVAsADQAZABAtAMQAzAOASACQBjAPCCgTQBsgRB2goIgCAFIAngmQAVgXAJgVQALgagBgwQgBg4ADgTQAEgTAQADQACAAAEAEQAEADADAAQAGAAAMgLQAVgWAdgIQAsgMAxAVQAkAPArAmQA0AvAVAzQAaA/gcA3QgRAlgpAcIgXAQQgNAKgIAHIgJAKIgLAPIgDAFQgEAGgDAPQgGAdgkAbIg+AmQhXA1hBATQhZAZhdgTQgigGgxABQg3AEgdAAIjKADQhzAEhYAOQhYANiHAkQgZAGgmAFIg/AHQggAEgjAAIgegBg");
	this.shape_7.setTransform(30.4,17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.5).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_8.setTransform(6,10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_9.setTransform(89.3,53.7,1,1,18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],36.6,-59.7,-73.8,131.6).s().p("AB/DJQgdgLgvgdQgsgcgSgOQgigYgYgZQhDhGgYhlQgFgVADgNQACgOAKgQIASgZQAJgMAEgOIABgCIAJAhQAEAPAGAvQAGAnAIAVQAIAUAQAXIAgAkQA9BIAfAhQA2A5AvApQgQgKgVgIg");
	this.shape_10.setTransform(102.2,45.8,1,1,18);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],1.1,-7.7,-14.4,19.2).s().p("Ah1BSQAIghADgQQAFgYgDgcQgEgkgQgRQgHgbgNgeQBYCGDJgFQgGAUgJASQgUAAgdgJIgvgPQgigKgqAMQgrAOgUAeQgOAWgFAmIgBAKQAAgTAIgdg");
	this.shape_11.setTransform(-59.7,41.1,1,1,17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEEF4").s().p("AjxFRQgVgFgMglQgUhIAYhUQAlhiASgxQAdhRAshPQAJgQAIgEIACgBQAKgEAMAEQAKAEAJAJIAPASQAJANAGAFQAKAIAJADQATAIATgFQAbgIAUggQAQgbAGggIADg8QACgpAVgJQAPgGAQALQAOAIAKARQAOAWAQAkIAaA7QAPAgAQAWQADAEAXATQAVASgGAHQgCACgFACIgCABQgKAEgXAHIgOADQgHADgMAJQgMAIgRAGIgjANQgfANgnAJIhAANQgjALgWAQIgLAJQgkAhgdBLIgTA0IgUAzQgLAagQAZQgWAhgXAAIgHgBg");
	this.shape_12.setTransform(-82.3,53.4,1,1,-15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],19.5,-15.9,-8.6,32.8).s().p("ADADiQAFgCACgCQAGgHgVgSQgXgTgEgEQgPgWgPggIgag7QgQgkgOgWQgLgPgNgIQgQgLgPAGQgTAJgCAnIgDA8QgGAggQAbQgUAggbAIQgVAFgUgIQgIgDgKgIQgGgFgKgNIgOgSQgJgJgKgEQgNgEgJAEQAWgXAwgYQA4gcASgNQAkgbAag/IAhhsQANgoAOgdQgYBmBBCJQASAnAoBMQAkBGAOAxQgGgHgKgEg");
	this.shape_13.setTransform(-82.5,21.3,1,1,-15.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],14.6,-28.4,-29.3,47.6).s().p("ABXHRQgbg5hBg2QhPg6gkgiQhPhIgjhqQgihoAVhpIAPg8QAIgkABgZQABghgOgcQgOgegbgMIARAGQg4gagTgeQgOgVACgYQABgbASgOQAPgLAcgCQA3gEAzAgQAyAeAcAyQAaAwAFA7QAEA4gPA5QgHAdgUA5QgOAyAEAjQAGAwAlArQAfAlAwAdQAvAcBqAzQBaAxAqA4IASAaQALAOAMAGQAJAFAJACQidAehiBKQAEgNgKgVg");
	this.shape_14.setTransform(-97.3,-55.2,1,1,-14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.5,-97.1,285.1,194.3);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D387B8").s().p("AABAeIAMgJIgJAAQgSgEgJgMQgGgHACgMQADgMAKgDQAGgCAIADIADABQAKAEAHAIQAHAIABAIQABAMgIAJQgIAJgJAAIgDgBg");
	this.shape.setTransform(129.4,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEEF4").s().p("AAQBrQgQgCg+gOQgHgBgfgBQgagBgJgFQgPgHAAgRIADgfQABgHgFgQQgFgOABgIQAAgKAHgIQAHgGARgCQBAgGA8AVQBUAcAIg7IABgRQABgKADgHQAFgNAJAAQAIgBAGAJIAFAMIANAhQAIAVAEAOIgEgCQgIgCgHACQgKADgCAMQgDAJAHAJQAIANAVADQgEAOgMAOQgQAUgcAPIgCABQgaAOgjAAIgSAAg");
	this.shape_1.setTransform(114.1,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BA448D","#BB468E","#BD4E93","#C15A9A","#C66DA5","#CD84B3","#D6A1C4","#E0C3D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.353,0.51,0.627,0.725,0.812,0.894,0.965,0.98,0.984,1],12.7,-20.9,-17.2,33.1).s().p("AhiDlQgqgRgZgSQgYgRgQgYQgRgZgFgcQgBgLgBgUIgBgfQgEgjgUgdQgQgZBFgeQBNgcAJgIQAMgKAQgTIAbgeQAngqA0gWQATgIALAFQASAIAAAiQAAARgFAqQAAAiAaADQADABAvgZQAsgXABAFQAGAVgMAiQgPAnAAAOQABAOAQAKIAaAPQAMAJAIAQQAGALAGAUIAJAaQgGgIgIAAQgJABgFANQgDAGgBAKIgBARQgIA8hUgcQg+gWhAAGQgPACgHAHQgNANAOAmQANAigcANQgEACgIAAQgTAAgmgRg");
	this.shape_2.setTransform(100.8,-1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEEF4").s().p("AAIDFQgYgCgggMIgEgCQgegLgRgWIAAgBQgKgMgGgSQgOglAEglQACgQAIgaQAJgdACgKQAEgWAEgGQADgIAFgEQAKgHARAAIAdACQAmgBAtgwIAjglQAUgTAUgJIAAABQgoA8gdBBQgMAcgOApQgFANgDAVIgEAlQgBASAEAHQADAFANAJQAVAOAIARQAEAKgBALQgBAMgGAIQgOASgfAAIgKgBg");
	this.shape_3.setTransform(22.4,83.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],18.2,-40.5,-39.1,58.8).s().p("AkDEKQABhEgWg0QBOjxBIhxQB7i9CvAGQBBAAAgAvQAjAygqA/QgPAUghAjQgaAfgGAYIgOAnIgEAKQgUA2ghBFIg6B5IgMAIQgtAhgqAwIAAgBIgBABQgUAJgUATIgjAlQgtAwgoABIgdgCQgRAAgKAHQgFAEgDAIQAPhLABgzg");
	this.shape_4.setTransform(40.3,37.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEEF4").s().p("AAIF1QgUgIgfgPQgWgLgUgNQhHgughglQgigmgKgNQgXghgDgcQgBgIABgQIABgKQAGgmAOgWQATgeAsgMQApgMAkAKIAwANQAcAJAUAAQAfg8gIhYQgDghgJgrIgQhLQgGgYAAgOQAAgVAJgOQAOgZAvgHIAbgEIBJA9QAtAmAWAbQBBBRg0BXIgOAXQgJAPgIAJQgnARgZAQQhCAmgnAxQgpA3gEBAQAAAMAEAFQABACAIAFIBCAdQAmAQAfAGQAZAGAMAEQAWAIALAMQAJAKACAKIABAPQABAagVASQgSAQgdAEQgSADgTAAQg1AAg5gVg");
	this.shape_5.setTransform(-53.7,65.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#D893BB","#DBA6C6","#DFBAD3","#E1C7DA","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.2,0.463,0.725,0.98,0.984,1],14.6,-29.8,-31.2,49.5).s().p("AhXFqQAJghADgQQAFgYgDgeQgEgkgQgRQgOgygjhFQgohNgTgkQhBiLAZhnQAghCAzgpQAIgIACgDIACgFQA4giBAAdQBIAlBCBYQAlAyBJBpQAOAQANAKIgcAEQgvAHgQAZQgJAOABAVQAAAOAFAWIASBLQAJArADAhQAIBYggA+QgUAAgdgJIgvgPQglgKgnAMQgrAOgUAeQgOAWgFAmIgCAKQABgTAHgdg");
	this.shape_6.setTransform(-70.1,34.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEEF4").s().p("ArYFbQghgBhAgIQgigEgJgOQgGgKABgVQAFhaAzhOQAyhOBPgrQAlgTA+ABIBoAIQBJAGAhAAQA7AAAtgMQBKgVAsADQAZABAtAMQAzAOASACQBjAPCCgTQBsgRB2goIgCAFIAngmQAVgXAJgVQALgagBgwQgBg4ADgTQAEgTAQADQACAAAEAEQAEADADAAQAGAAAMgLQAVgWAdgIQAsgMAxAVQAkAPArAmQA0AvAVAzQAaA/gcA3QgRAlgpAcIgXAQQgNAKgIAHIgJAKIgLAPIgDAFQgEAGgDAPQgGAdgkAbIg+AmQhXA1hBATQhZAZhdgTQgigGgxABQg3AEgdAAIjKADQhzAEhYAOQhYANiHAkQgZAGgmAFIg/AHQggAEgjAAIgegBg");
	this.shape_7.setTransform(18.5,27.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.5).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_8.setTransform(-5.9,20.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_9.setTransform(93.7,68.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],36.6,-59.7,-73.8,131.6).s().p("AB/DJQgdgLgvgdQgsgcgSgOQgigYgYgZQhDhGgYhlQgFgVADgNQACgOAKgQIASgZQAJgMAEgOIABgCIAJAhQAEAPAGAvQAGAnAIAVQAIAUAQAXIAgAkQA9BIAfAhQA2A5AvApQgQgKgVgIg");
	this.shape_10.setTransform(103.6,57.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFEEF4").s().p("AAIDFQgYgCgggMIgEgCQgegLgRgWIAAgBQgKgMgGgSQgOglAEglQACgQAIgaQAJgdACgKQAEgWAEgGQADgIAFgEQAKgHARAAIAdACQAmgBAtgwIAjglQAUgTAUgJIAAABQgoA8gdBBQgMAcgOApQgFANgDAVIgEAlQgBASAEAHQADAFANAJQAVAOAIARQAEAKgBALQgBAMgGAIQgOASgfAAIgKgBg");
	this.shape_11.setTransform(22.4,83.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],18.2,-40.5,-39.1,58.8).s().p("AkDEKQABhEgWg0QBOjxBIhxQB7i9CvAGQBBAAAgAvQAjAygqA/QgPAUghAjQgaAfgGAYIgOAnIgEAKQgUA2ghBFIg6B5IgMAIQgtAhgqAwIAAgBIgBABQgUAJgUATIgjAlQgtAwgoABIgdgCQgRAAgKAHQgFAEgDAIQAPhLABgzg");
	this.shape_12.setTransform(40.3,37.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFEEF4").s().p("AAbDKQgWgIgdgPQgWgLgUgNQhHgughgkQgigmgKgOQgXgegDgdQgBgIABgPIABgKQAGgmAOgWQATgfAsgNQApgNAkAKIAwAPQAcAJASAAQAJgSAGgTQBagCBngdQhbAog2A5QhABBgFBNQAAAMAEAEQABADAKAEIBCAdQAmAQAfAHQAZAGAMAEQAWAIALAMQAJAJACAKIABAPQABAbgVARQgSAQgdAEQgSADgTAAQg1AAg5gVg");
	this.shape_13.setTransform(-55.6,82.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],1.1,-7.7,-14.4,19.2).s().p("Ah1BSQAIghADgQQAFgYgDgcQgEgkgQgRQgHgbgNgeQBYCGDJgFQgGAUgJASQgUAAgdgJIgvgPQgigKgqAMQgrAOgUAeQgOAWgFAmIgBAKQAAgTAIgdg");
	this.shape_14.setTransform(-67,62.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFEEF4").s().p("AjxFRQgVgFgMglQgUhIAYhUQAlhiASgxQAdhRAshPQAJgQAIgEIACgBQAKgEAMAEQAKAEAJAJIAPASQAJANAGAFQAKAIAJADQATAIATgFQAbgIAUggQAQgbAGggIADg8QACgpAVgJQAPgGAQALQAOAIAKARQAOAWAQAkIAaA7QAPAgAQAWQADAEAXATQAVASgGAHQgCACgFACIgCABQgKAEgXAHIgOADQgHADgMAJQgMAIgRAGIgjANQgfANgnAJIhAANQgjALgWAQIgLAJQgkAhgdBLIgTA0IgUAzQgLAagQAZQgWAhgXAAIgHgBg");
	this.shape_15.setTransform(-108.8,62.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],99.5,-173.1,-11.5,19.2).s().p("AgfA2IATg0QAbhJAlghQghAkgZBBIgVA1QgNAigLAVIAUgzg");
	this.shape_16.setTransform(-28.4,77.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],19.5,-15.9,-8.6,32.8).s().p("ADADiQAFgCACgCQAGgHgVgSQgXgTgEgEQgPgWgPggIgag7QgQgkgOgWQgLgPgNgIQgQgLgPAGQgTAJgCAnIgDA8QgGAggQAbQgUAggbAIQgVAFgUgIQgIgDgKgIQgGgFgKgNIgOgSQgJgJgKgEQgNgEgJAEQAWgXAwgYQA4gcASgNQAkgbAag/IAhhsQANgoAOgdQgYBmBBCJQASAnAoBMQAkBGAOAxQgGgHgKgEg");
	this.shape_17.setTransform(-100.4,31.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],14.6,-28.4,-29.3,47.6).s().p("ABXHRQgbg5hBg2QhPg6gkgiQhPhIgjhqQgihoAVhpIAPg8QAIgkABgZQABghgOgcQgOgegbgMIARAGQg4gagTgeQgOgVACgYQABgbASgOQAPgLAcgCQA3gEAzAgQAyAeAcAyQAaAwAFA7QAEA4gPA5QgHAdgUA5QgOAyAEAjQAGAwAlArQAfAlAwAdQAvAcBqAzQBaAxAqA4IASAaQALAOAMAGQAJAFAJACQidAehiBKQAEgNgKgVg");
	this.shape_18.setTransform(-94.2,-54.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.2,-104.4,274.6,209);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],83,-130.5,-162.2,294.1).s().p("AG6FqQhSgRgpgNQhDgWgsghQgOgLgbgYQgbgYgPgLQgfgXg9gZQjKhUixAGIgUAAQgLAAgIgDQgYgIgQgdQgjg+AnhmQAXg9AlgxQAng1AzggQA3giA/gHQBCgHA3AZQA7AcA5BKQA6BKARBOQADANAJA/QAHAtALAcQAIAUAQAWIAfAmQBKBVAvAwQAbAcAOANQAoAugEAAIAAAAg");
	this.shape.setTransform(68.6,18.6,1,1,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_1.setTransform(64.5,48.2,1,1,44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D387B8").s().p("AABAeIAMgJIgJAAQgSgEgJgMQgGgHACgMQADgMAKgDQAGgCAIADIADABQAKAEAHAIQAHAIABAIQABAMgIAJQgIAJgJAAIgDgBg");
	this.shape_2.setTransform(136.7,-15.3,1,1,-20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEEF4").s().p("AAQBrQgQgCg+gOQgHgBgfgBQgagBgJgFQgPgHAAgRIADgfQABgHgFgQQgFgOABgIQAAgKAHgIQAHgGARgCQBAgGA8AVQBUAcAIg7IABgRQABgKADgHQAFgNAJAAQAIgBAGAJIAFAMIANAhQAIAVAEAOIgEgCQgIgCgHACQgKADgCAMQgDAJAHAJQAIANAVADQgEAOgMAOQgQAUgcAPIgCABQgaAOgjAAIgSAAg");
	this.shape_3.setTransform(122.2,-10.7,1,1,-20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA448D","#BB468E","#BD4E93","#C15A9A","#C66DA5","#CD84B3","#D6A1C4","#E0C3D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.353,0.51,0.627,0.725,0.812,0.894,0.965,0.98,0.984,1],12.7,-20.9,-17.1,33.1).s().p("AhiDlQgqgRgZgSQgYgRgQgYQgRgZgFgcQgBgLgBgUIgBgfQgEgjgUgdQgQgZBFgeQBNgcAJgIQAMgKAQgTIAbgeQAngqA0gWQATgIALAFQASAIAAAiQAAARgFAqQAAAiAaADQADABAvgZQAsgXABAFQAGAVgMAiQgPAnAAAOQABAOAQAKIAaAPQAMAJAIAQQAGALAGAUIAJAaQgGgIgIAAQgJABgFANQgDAGgBAKIgBARQgIA8hUgcQg+gWhAAGQgPACgHAHQgNANAOAmQANAigcANQgEACgIAAQgTAAgmgRg");
	this.shape_4.setTransform(103.3,-23,1,1,-20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EEEEEF").ss(6.9).p("AgjARQAIABANAFQAEABADABQAHABAGgCQAEgCAIgEQADgCAJgDQAGgCADgEQABgCgBgIQAAAAgBgLQgDgIgFgBQgEgCgHACQgHAEgEABQgIADgEABQAAABgBAAIgGAEQgDADgDACQgGgBgEAAQgBABgEAEQgEABgDAA");
	this.shape_5.setTransform(-75.4,91.6,1,1,26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEEF4").s().p("ABeEpQhAgRgsg3QgvhGgagkQgpg6gdhBQgGgOACgJIAAgBQAEgJAKgHQAJgHAMgDIAWgDQAPgCAIgCQAMgEAHgFQASgMAIgSQAMgYgMgdQgJgYgTgTIgqgcQgbgTAGgVQAFgOARgHQAPgHASAAQAZgCAjAEIA5AGQAgADAZgEQAGAAAbgJQAZgIACAIQABACgCAFIgBACQgCAJgKAUIgGANQgDAHgBAMQgBAMgHARIgMAgQgJAdgRAiIgdA3QgPAggCAXIAAAMQABAXASAnIASAjIAUAcQAVAeAJAQQAMAVAJAWIABAFQAHAagKAPIgHgCQgOgFgHgBQAHABAOAFIAHACIgHAIQgMAJgSAAQgKAAgLgCgAB+D/QgDADgDAAQADAAADgDIAGgFIAJABIAGgFIAHgEIABgBIgBABIgHAEIgGAFIgJgBIgGAFgACYEaIAAAAg");
	this.shape_6.setTransform(-78.4,61.5,1,1,26.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E0A4C6","#E1B0CD","#E2C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.227,0.675,0.98,0.984,1],28.5,-33.6,-23.8,57).s().p("AAnFMQgogTgfhCIgbg7QgPgkgOgWQgLgRgNgIQgRgLgOAGQgVAJgDApIgCA8QgGAggRAbQgTAggbAIQgVAFgUgIQgJgDgJgIQgGgFgKgNIgPgSQgIgJgLgEQgMgEgJAEQAWgXAwgYQA4gcASgNQAigZAVgxQAOgjALg3QAFgYALgaQAHgQAQgeQAuhTAMgRQAhgvA0gfQBEgoBNgPQBmgUAmAyQAVAbALAyQATBTgHBXQgGBUgeBQQgjBdgdAsQgvBIhCARQgkAKgdAAQgdAAgVgKg");
	this.shape_7.setTransform(-69.8,15.4,1,1,-28.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEEF4").s().p("ArYFbQghgBhAgIQgigEgJgOQgGgKABgVQAFhaAzhOQAyhOBPgrQAlgTA+ABIBoAIQBJAGAhAAQA7AAAtgMQBKgVAsADQAZABAtAMQAzAOASACQBjAPCCgTQBsgRB2goIgCAFIAngmQAVgXAJgVQALgagBgwQgBg4ADgTQAEgTAQADQACAAAEAEQAEADADAAQAGAAAMgLQAVgWAdgIQAsgMAxAVQAkAPArAmQA0AvAVAzQAaA/gcA3QgRAlgpAcIgXAQQgNAKgIAHIgJAKIgLAPIgDAFQgEAGgDAPQgGAdgkAbIg+AmQhXA1hBATQhZAZhdgTQgigGgxABQg3AEgdAAIjKADQhzAEhYAOQhYANiHAkQgZAGgmAFIg/AHQggAEgjAAIgegBg");
	this.shape_8.setTransform(21.2,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.5).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_9.setTransform(-3.2,5.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_10.setTransform(39.4,34.9,1,1,38.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],36.6,-59.7,-73.8,131.6).s().p("AB/DJQgdgLgvgdQgsgcgSgOQgigYgYgZQhDhGgYhlQgFgVADgNQACgOAKgQIASgZQAJgMAEgOIABgCIAJAhQAEAPAGAvQAGAnAIAVQAIAUAQAXIAgAkQA9BIAfAhQA2A5AvApQgQgKgVgIg");
	this.shape_11.setTransform(54.2,32,1,1,38.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEEF4").s().p("AAbDKQgWgIgdgPQgWgLgUgNQhHgughgkQgigmgKgOQgXgegDgdQgBgIABgPIABgKQAGgmAOgWQATgfAsgNQApgNAkAKIAwAPQAcAJASAAQAJgSAGgTQBagCBngdQhbAog2A5QhABBgFBNQAAAMAEAEQABADAKAEIBCAdQAmAQAfAHQAZAGAMAEQAWAIALAMQAJAJACAKIABAPQABAbgVARQgSAQgdAEQgSADgTAAQg1AAg5gVg");
	this.shape_12.setTransform(-88.1,49.3,1,1,46);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],1.1,-7.7,-14.4,19.2).s().p("Ah1BSQAIghADgQQAFgYgDgcQgEgkgQgRQgHgbgNgeQBYCGDJgFQgGAUgJASQgUAAgdgJIgvgPQgigKgqAMQgrAOgUAeQgOAWgFAmIgBAKQAAgTAIgdg");
	this.shape_13.setTransform(-82.1,27.6,1,1,46);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],14.6,-28.4,-29.3,47.6).s().p("ABXHRQgbg5hBg2QhPg6gkgiQhPhIgjhqQgihoAVhpIAPg8QAIgkABgZQABghgOgcQgOgegbgMIARAGQg4gagTgeQgOgVACgYQABgbASgOQAPgLAcgCQA3gEAzAgQAyAeAcAyQAaAwAFA7QAEA4gPA5QgHAdgUA5QgOAyAEAjQAGAwAlArQAfAlAwAdQAvAcBqAzQBaAxAqA4IASAaQALAOAMAGQAJAFAJACQidAehiBKQAEgNgKgVg");
	this.shape_14.setTransform(-97.6,-55.3,1,1,-9.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#EEEEEF").ss(6.9).p("AALgTQgDgCgDgCQAAAAgBAAIAAAAQgBAAgCAAQgBgBAAABQgCAAgDAAQgPACgQADAAEgXQgHgHgLgIAAAAeQAEgBAEgCQAIgDAGgDQACgBABgBQABAAABgBQADgBACgCQAJgFAIgIQAGgHAAgHQAAgEgDgDQgFgEgKABQgIgCgZABAgHAgQAFgBACgBQAFABAGABAg2APQALAEANAEQAJACAPADQAEABACAB");
	this.shape_15.setTransform(78.8,95.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.7,-100.1,279.5,202.5);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],83,-130.5,-162.2,294.1).s().p("AG6FqQhSgRgpgNQhDgWgsghQgOgLgbgYQgbgYgPgLQgfgXg9gZQjKhUixAGIgUAAQgLAAgIgDQgYgIgQgdQgjg+AnhmQAXg9AlgxQAng1AzggQA3giA/gHQBCgHA3AZQA7AcA5BKQA6BKARBOQADANAJA/QAHAtALAcQAIAUAQAWIAfAmQBKBVAvAwQAbAcAOANQAoAugEAAIAAAAg");
	this.shape.setTransform(73.8,15.1,1,1,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_1.setTransform(78.8,44.5,1,1,26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D387B8").s().p("AABAeIAMgJIgJAAQgSgEgJgMQgGgHACgMQADgMAKgDQAGgCAIADIADABQAKAEAHAIQAHAIABAIQABAMgIAJQgIAJgJAAIgDgBg");
	this.shape_2.setTransform(147.2,-17.8,1,1,-20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEEF4").s().p("AAQBrQgQgCg+gOQgHgBgfgBQgagBgJgFQgPgHAAgRIADgfQABgHgFgQQgFgOABgIQAAgKAHgIQAHgGARgCQBAgGA8AVQBUAcAIg7IABgRQABgKADgHQAFgNAJAAQAIgBAGAJIAFAMIANAhQAIAVAEAOIgEgCQgIgCgHACQgKADgCAMQgDAJAHAJQAIANAVADQgEAOgMAOQgQAUgcAPIgCABQgaAOgjAAIgSAAg");
	this.shape_3.setTransform(132.6,-13.2,1,1,-20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA448D","#BB468E","#BD4E93","#C15A9A","#C66DA5","#CD84B3","#D6A1C4","#E0C3D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.353,0.51,0.627,0.725,0.812,0.894,0.965,0.98,0.984,1],12.7,-20.9,-17.1,33.1).s().p("AhiDlQgqgRgZgSQgYgRgQgYQgRgZgFgcQgBgLgBgUIgBgfQgEgjgUgdQgQgZBFgeQBNgcAJgIQAMgKAQgTIAbgeQAngqA0gWQATgIALAFQASAIAAAiQAAARgFAqQAAAiAaADQADABAvgZQAsgXABAFQAGAVgMAiQgPAnAAAOQABAOAQAKIAaAPQAMAJAIAQQAGALAGAUIAJAaQgGgIgIAAQgJABgFANQgDAGgBAKIgBARQgIA8hUgcQg+gWhAAGQgPACgHAHQgNANAOAmQANAigcANQgEACgIAAQgTAAgmgRg");
	this.shape_4.setTransform(113.7,-25.5,1,1,-20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EEEEEF").ss(6.9).p("AgjARQAIABANAFQAEABADABQAHABAGgCQAEgCAIgEQADgCAJgDQAGgCADgEQABgCgBgIQAAAAgBgLQgDgIgFgBQgEgCgHACQgHAEgEABQgIADgEABQAAABgBAAIgGAEQgDADgDACQgGgBgEAAQgBABgEAEQgEABgDAA");
	this.shape_5.setTransform(-112.9,81.7,1,1,48.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEEF4").s().p("ABeEpQhAgRgsg3QgvhGgagkQgpg6gdhBQgGgOACgJIAAgBQAEgJAKgHQAJgHAMgDIAWgDQAPgCAIgCQAMgEAHgFQASgMAIgSQAMgYgMgdQgJgYgTgTIgqgcQgbgTAGgVQAFgOARgHQAPgHASAAQAZgCAjAEIA5AGQAgADAZgEQAGAAAbgJQAZgIACAIQABACgCAFIgBACQgCAJgKAUIgGANQgDAHgBAMQgBAMgHARIgMAgQgJAdgRAiIgdA3QgPAggCAXIAAAMQABAXASAnIASAjIAUAcQAVAeAJAQQAMAVAJAWIABAFQAHAagKAPIgHgCQgOgFgHgBQAHABAOAFIAHACIgHAIQgMAJgSAAQgKAAgLgCgAB+D/QgDADgDAAQADAAADgDIAGgFIAJABIAGgFIAHgEIABgBIgBABIgHAEIgGAFIgJgBIgGAFgACYEaIAAAAg");
	this.shape_6.setTransform(-104.3,52.6,1,1,48.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E0A4C6","#E1B0CD","#E2C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.227,0.675,0.98,0.984,1],28.5,-33.6,-23.8,57).s().p("AAnFMQgogTgfhCIgbg7QgPgkgOgWQgLgRgNgIQgRgLgOAGQgVAJgDApIgCA8QgGAggRAbQgTAggbAIQgVAFgUgIQgJgDgJgIQgGgFgKgNIgPgSQgIgJgLgEQgMgEgJAEQAWgXAwgYQA4gcASgNQAigZAVgxQAOgjALg3QAFgYALgaQAHgQAQgeQAuhTAMgRQAhgvA0gfQBEgoBNgPQBmgUAmAyQAVAbALAyQATBTgHBXQgGBUgeBQQgjBdgdAsQgvBIhCARQgkAKgdAAQgdAAgVgKg");
	this.shape_7.setTransform(-78.9,13.3,1,1,-6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEEF4").s().p("ArYFbQghgBhAgIQgigEgJgOQgGgKABgVQAFhaAzhOQAyhOBPgrQAlgTA+ABIBoAIQBJAGAhAAQA7AAAtgMQBKgVAsADQAZABAtAMQAzAOASACQBjAPCCgTQBsgRB2goIgCAFIAngmQAVgXAJgVQALgagBgwQgBg4ADgTQAEgTAQADQACAAAEAEQAEADADAAQAGAAAMgLQAVgWAdgIQAsgMAxAVQAkAPArAmQA0AvAVAzQAaA/gcA3QgRAlgpAcIgXAQQgNAKgIAHIgJAKIgLAPIgDAFQgEAGgDAPQgGAdgkAbIg+AmQhXA1hBATQhZAZhdgTQgigGgxABQg3AEgdAAIjKADQhzAEhYAOQhYANiHAkQgZAGgmAFIg/AHQggAEgjAAIgegBg");
	this.shape_8.setTransform(31.6,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.5).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_9.setTransform(7.2,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_10.setTransform(49.7,30.2,1,1,81.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],36.6,-59.7,-73.8,131.6).s().p("AB/DJQgdgLgvgdQgsgcgSgOQgigYgYgZQhDhGgYhlQgFgVADgNQACgOAKgQIASgZQAJgMAEgOIABgCIAJAhQAEAPAGAvQAGAnAIAVQAIAUAQAXIAgAkQA9BIAfAhQA2A5AvApQgQgKgVgIg");
	this.shape_11.setTransform(62.5,38.3,1,1,81.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEEF4").s().p("AAbDKQgWgIgdgPQgWgLgUgNQhHgughgkQgigmgKgOQgXgegDgdQgBgIABgPIABgKQAGgmAOgWQATgfAsgNQApgNAkAKIAwAPQAcAJASAAQAJgSAGgTQBagCBngdQhbAog2A5QhABBgFBNQAAAMAEAEQABADAKAEIBCAdQAmAQAfAHQAZAGAMAEQAWAIALAMQAJAJACAKIABAPQABAbgVARQgSAQgdAEQgSADgTAAQg1AAg5gVg");
	this.shape_12.setTransform(-60.3,58.3,1,1,19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],1.1,-7.7,-14.4,19.2).s().p("Ah1BSQAIghADgQQAFgYgDgcQgEgkgQgRQgHgbgNgeQBYCGDJgFQgGAUgJASQgUAAgdgJIgvgPQgigKgqAMQgrAOgUAeQgOAWgFAmIgBAKQAAgTAIgdg");
	this.shape_13.setTransform(-64.6,36.2,1,1,19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],14.6,-28.4,-29.3,47.6).s().p("ABXHRQgbg5hBg2QhPg6gkgiQhPhIgjhqQgihoAVhpIAPg8QAIgkABgZQABghgOgcQgOgegbgMIARAGQg4gagTgeQgOgVACgYQABgbASgOQAPgLAcgCQA3gEAzAgQAyAeAcAyQAaAwAFA7QAEA4gPA5QgHAdgUA5QgOAyAEAjQAGAwAlArQAfAlAwAdQAvAcBqAzQBaAxAqA4IASAaQALAOAMAGQAJAFAJACQidAehiBKQAEgNgKgVg");
	this.shape_14.setTransform(-101.6,-53.5,1,1,-20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#EEEEEF").ss(6.9).p("AgzAfQALAAAOAAQAJgBAPgBQAHgBALgBQAFAAAEAAQAJgBAGgCQAFgCAEgFQADgGAAgFQAAgEgBgCQgDgDgFgCQgGgFgUgHQgMgDgKgDQgMgEgNgF");
	this.shape_15.setTransform(107,85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.2,-91.8,300.4,183.9);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],83,-130.5,-162.2,294.1).s().p("AG6FqQhSgRgpgNQhDgWgsghQgOgLgbgYQgbgYgPgLQgfgXg9gZQjKhUixAGIgUAAQgLAAgIgDQgYgIgQgdQgjg+AnhmQAXg9AlgxQAng1AzggQA3giA/gHQBCgHA3AZQA7AcA5BKQA6BKARBOQADANAJA/QAHAtALAcQAIAUAQAWIAfAmQBKBVAvAwQAbAcAOANQAoAugEAAIAAAAg");
	this.shape.setTransform(62.2,15.7,1,1,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_1.setTransform(74.6,42.8,1,1,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D387B8").s().p("AABAeIAMgJIgJAAQgSgEgJgMQgGgHACgMQADgMAKgDQAGgCAIADIADABQAKAEAHAIQAHAIABAIQABAMgIAJQgIAJgJAAIgDgBg");
	this.shape_2.setTransform(139.5,-18.3,1,1,-20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEEF4").s().p("AAQBrQgQgCg+gOQgHgBgfgBQgagBgJgFQgPgHAAgRIADgfQABgHgFgQQgFgOABgIQAAgKAHgIQAHgGARgCQBAgGA8AVQBUAcAIg7IABgRQABgKADgHQAFgNAJAAQAIgBAGAJIAFAMIANAhQAIAVAEAOIgEgCQgIgCgHACQgKADgCAMQgDAJAHAJQAIANAVADQgEAOgMAOQgQAUgcAPIgCABQgaAOgjAAIgSAAg");
	this.shape_3.setTransform(125,-13.7,1,1,-20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA448D","#BB468E","#BD4E93","#C15A9A","#C66DA5","#CD84B3","#D6A1C4","#E0C3D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.353,0.51,0.627,0.725,0.812,0.894,0.965,0.98,0.984,1],12.7,-20.9,-17.1,33.1).s().p("AhiDlQgqgRgZgSQgYgRgQgYQgRgZgFgcQgBgLgBgUIgBgfQgEgjgUgdQgQgZBFgeQBNgcAJgIQAMgKAQgTIAbgeQAngqA0gWQATgIALAFQASAIAAAiQAAARgFAqQAAAiAaADQADABAvgZQAsgXABAFQAGAVgMAiQgPAnAAAOQABAOAQAKIAaAPQAMAJAIAQQAGALAGAUIAJAaQgGgIgIAAQgJABgFANQgDAGgBAKIgBARQgIA8hUgcQg+gWhAAGQgPACgHAHQgNANAOAmQANAigcANQgEACgIAAQgTAAgmgRg");
	this.shape_4.setTransform(106.1,-26.1,1,1,-20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EEEEEF").ss(6.9).p("AgmAIQAHACAMAIQAEACACABQAJACAEgBQAFAAAJgEQADgBAJgBQAHAAADgEQACgCAAgKQAAAAABgJQgCgIgEgDQgEgCgHABQgHADgFAAQgKAAgCACQgBAAAAAAIgHADQgDADgEAAQgGgBgDgBQgCAAgFAEQgDACgEgB");
	this.shape_5.setTransform(-89.7,88.8,1,1,19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEEF4").s().p("AADEuQg6gbgjg/QgihOgTgnQgNgbgFgcIgJg3IgEgIQgBg0ADgCQAJgFAMAAQAHgBAPACQAQABAIgBQAMgCAJgDQATgKALgPQAQgWgHgfQgEgYgPgXIglgiQgXgZAKgTQAHgNASgEQAQgEASACQAYAEAhAJIA4ASQAfAIAaAAQAGACAdgFQAagDgBAIQABACgCAFIgCACQgEAIgNASIgJALIgHATQgDALgJAQIgSAeQgOAagXAeIgnAyQgUAcgGAXIgDAMQgCAWALApIALAmIAPAfIAVAzQAJAXAEAXIAAAGQACAagNANIgGgDQgMgIgHgCQAHACAMAIIAGADIgIAHQgIAFgKAAQgPAAgSgIgAAlEMIAFgBIAAAAIAAAAIAHgEIAJACQAEAAADgDIAHgDIABAAIgBAAIgHADQgDADgEAAIgJgCIgHAEIAAAAIAAAAIgFABIAAAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIAAAAgAA+EqIAAAAg");
	this.shape_6.setTransform(-87.6,60.1,1,1,19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E0A4C6","#E1B0CD","#E2C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.227,0.675,0.98,0.984,1],28.5,-33.6,-23.8,57).s().p("AAnFMQgogTgfhCIgbg7QgPgkgOgWQgLgRgNgIQgRgLgOAGQgVAJgDApIgCA8QgGAggRAbQgTAggbAIQgVAFgUgIQgJgDgJgIQgGgFgKgNIgPgSQgIgJgLgEQgMgEgJAEQAWgXAwgYQA4gcASgNQAigZAVgxQAOgjALg3QAFgYALgaQAHgQAQgeQAuhTAMgRQAhgvA0gfQBEgoBNgPQBmgUAmAyQAVAbALAyQATBTgHBXQgGBUgeBQQgjBdgdAsQgvBIhCARQgkAKgdAAQgdAAgVgKg");
	this.shape_7.setTransform(-79.2,12.9,1,1,-24.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEEF4").s().p("ArYFbQghgBhAgIQgigEgJgOQgGgKABgVQAFhaAzhOQAyhOBPgrQAlgTA+ABIBoAIQBJAGAhAAQA7AAAtgMQBKgVAsADQAZABAtAMQAzAOASACQBjAPCCgTQBsgRB2goIgCAFIAngmQAVgXAJgVQALgagBgwQgBg4ADgTQAEgTAQADQACAAAEAEQAEADADAAQAGAAAMgLQAVgWAdgIQAsgMAxAVQAkAPArAmQA0AvAVAzQAaA/gcA3QgRAlgpAcIgXAQQgNAKgIAHIgJAKIgLAPIgDAFQgEAGgDAPQgGAdgkAbIg+AmQhXA1hBATQhZAZhdgTQgigGgxABQg3AEgdAAIjKADQhzAEhYAOQhYANiHAkQgZAGgmAFIg/AHQggAEgjAAIgegBg");
	this.shape_8.setTransform(22,10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.5).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_9.setTransform(-2.4,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_10.setTransform(34.7,36.5,1,1,65.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],36.6,-59.7,-73.8,131.6).s().p("AB/DJQgdgLgvgdQgsgcgSgOQgigYgYgZQhDhGgYhlQgFgVADgNQACgOAKgQIASgZQAJgMAEgOIABgCIAJAhQAEAPAGAvQAGAnAIAVQAIAUAQAXIAgAkQA9BIAfAhQA2A5AvApQgQgKgVgIg");
	this.shape_11.setTransform(49.1,40.9,1,1,65.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEEF4").s().p("AAyDzQhDgPg/g1QgSgQgXgYQgQgSgQgUQgxhEgTgrQgSgwgFgQQgKgmAHgcQACgIAGgOIAFgJQATghAUgQQAegWAtACQAqADAfAWIAnAfQAWASATAHQAPgOAMgQQBVAeBqAJQhjAGhHAhQhRAogfBIQgEAJACAFQAAADAHAIIAyAyQAeAcAbARQAWAPAJAIQASAPAGAPQAFAMgCAKIgDAOQgJAagaAIQgNAFgPAAQgLAAgMgCg");
	this.shape_12.setTransform(-88.1,51.3,1,1,22);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],1.1,-7.7,-14.4,19.2).s().p("Ah1BSQAIghADgQQAFgYgDgcQgEgkgQgRQgHgbgNgeQBYCGDJgFQgGAUgJASQgUAAgdgJIgvgPQgigKgqAMQgrAOgUAeQgOAWgFAmIgBAKQAAgTAIgdg");
	this.shape_13.setTransform(-85.9,25.7,1,1,42.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],14.6,-28.4,-29.3,47.6).s().p("ABXHRQgbg5hBg2QhPg6gkgiQhPhIgjhqQgihoAVhpIAPg8QAIgkABgZQABghgOgcQgOgegbgMIARAGQg4gagTgeQgOgVACgYQABgbASgOQAPgLAcgCQA3gEAzAgQAyAeAcAyQAaAwAFA7QAEA4gPA5QgHAdgUA5QgOAyAEAjQAGAwAlArQAfAlAwAdQAvAcBqAzQBaAxAqA4IASAaQALAOAMAGQAJAFAJACQidAehiBKQAEgNgKgVg");
	this.shape_14.setTransform(-97.5,-49.3,1,1,-14.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#EEEEEF").ss(6.9).p("Ag0AdQALABAOAAQAKAAAPAAQAHAAAKgBQAPACAJgDQAGgCAEgFQAEgFAAgGQAAgJgJgCQgFgFgUgJQgLgEgKgEQgMgEgMgG");
	this.shape_15.setTransform(30.6,82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.5,-91.3,285.1,186.1);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D387B8").s().p("AABAeIAMgJIgJAAQgSgEgJgMQgGgHACgMQADgMAKgDQAGgCAIADIADABQAKAEAHAIQAHAIABAIQABAMgIAJQgIAJgJAAIgDgBg");
	this.shape.setTransform(145.1,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEEF4").s().p("AAQBrQgQgCg+gOQgHgBgfgBQgagBgJgFQgPgHAAgRIADgfQABgHgFgQQgFgOABgIQAAgKAHgIQAHgGARgCQBAgGA8AVQBUAcAIg7IABgRQABgKADgHQAFgNAJAAQAIgBAGAJIAFAMIANAhQAIAVAEAOIgEgCQgIgCgHACQgKADgCAMQgDAJAHAJQAIANAVADQgEAOgMAOQgQAUgcAPIgCABQgaAOgjAAIgSAAg");
	this.shape_1.setTransform(129.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BA448D","#BB468E","#BD4E93","#C15A9A","#C66DA5","#CD84B3","#D6A1C4","#E0C3D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.353,0.51,0.627,0.725,0.812,0.894,0.965,0.98,0.984,1],12.7,-20.9,-17.1,33.1).s().p("AhiDlQgqgRgZgSQgYgRgQgYQgRgZgFgcQgBgLgBgUIgBgfQgEgjgUgdQgQgZBFgeQBNgcAJgIQAMgKAQgTIAbgeQAngqA0gWQATgIALAFQASAIAAAiQAAARgFAqQAAAiAaADQADABAvgZQAsgXABAFQAGAVgMAiQgPAnAAAOQABAOAQAKIAaAPQAMAJAIAQQAGALAGAUIAJAaQgGgIgIAAQgJABgFANQgDAGgBAKIgBARQgIA8hUgcQg+gWhAAGQgPACgHAHQgNANAOAmQANAigcANQgEACgIAAQgTAAgmgRg");
	this.shape_2.setTransform(116.6,-17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEEF4").s().p("AAIDFQgYgCgggMIgEgCQgegLgRgWIAAgBQgKgMgGgSQgOglAEglQACgQAIgaQAJgdACgKQAEgWAEgGQADgIAFgEQAKgHARAAIAdACQAmgBAtgwIAjglQAUgTAUgJIAAABQgoA8gdBBQgMAcgOApQgFANgDAVIgEAlQgBASAEAHQADAFANAJQAVAOAIARQAEAKgBALQgBAMgGAIQgOASgfAAIgKgBg");
	this.shape_3.setTransform(98.5,76.9,1,1,-39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],18.2,-40.5,-39.1,58.8).s().p("AkDEKQABhEgWg0QBOjxBIhxQB7i9CvAGQBBAAAgAvQAjAygqA/QgPAUghAjQgaAfgGAYIgOAnIgEAKQgUA2ghBFIg6B5IgMAIQgtAhgqAwIAAgBIgBABQgUAJgUATIgjAlQgtAwgoABIgdgCQgRAAgKAHQgFAEgDAIQAPhLABgzg");
	this.shape_4.setTransform(82.9,30.1,1,1,-39.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EEEEEF").ss(6.9).p("AgngIQAFAFAJAJQACADADADQAGAGAGABQAFABAHABQAEAAAJADQAFABAGgBQACgBAEgIQABgBAEgKQACgGgDgEQgCgEgHgCQgIgBgEgBQgKgDgEgBQgBAAAAAAIgGAAQgEABgDgBQgFgEgDgBQgBgBgGABQgEABgDgC");
	this.shape_5.setTransform(-22.9,88.4,1,1,-34.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEEF4").s().p("AinEeQgsgxgHhHQABhVgCgsQgBhFANhIQADgPAHgGIABgBQAIgGANAAQALAAALAEIAUAKQAOAHAHACQAMAEAJAAQAVAAASgKQAXgOAGgeQAHgZgGgaIgTgvQgLggAQgNQAMgJATAEQAOACAPALQAVAMAbAXIAtAmQAZAUAXAMQAFADAcAHQAZAIgDAHQAAADgEADIgDABQgHAGgTALIgNAHQgFAEgIAKQgIAJgPAKIgcAUQgYATghASIg1AeQgfAQgPAUIgHAJQgMATgHArQgDAWgBASIAAAhIgBA4QgBAYgGAXIgCAFIgBAAIgIAAIgCAAIAAAAIgBAAIAAAAIgCAAIgCAAIgIgFIAAgBIgBAAIAAAAIgGABIgCAAIAAAAIAAAAIgFgBIAAAAIAAAAIAFABIAAAAIAAAAIACAAIAGgBIAAAAIABAAIAAABIAIAFIACAAIACAAIAAAAIABAAIAAAAIACAAIAIAAIABAAQgIAZgRAHIgFgGIgOgQIAOAQIAFAGQgFACgGAAIgDAAQgVAAgVgXgAhWETIAAAAg");
	this.shape_6.setTransform(-31.9,58.9,1,1,-34.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E0A4C6","#E1B0CD","#E2C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.227,0.675,0.98,0.984,1],28.5,-33.6,-23.8,57).s().p("AAnFMQgogTgfhCIgbg7QgPgkgOgWQgLgRgNgIQgRgLgOAGQgVAJgDApIgCA8QgGAggRAbQgTAggbAIQgVAFgUgIQgJgDgJgIQgGgFgKgNIgPgSQgIgJgLgEQgMgEgJAEQAWgXAwgYQA4gcASgNQAigZAVgxQAOgjALg3QAFgYALgaQAHgQAQgeQAuhTAMgRQAhgvA0gfQBEgoBNgPQBmgUAmAyQAVAbALAyQATBTgHBXQgGBUgeBQQgjBdgdAsQgvBIhCARQgkAKgdAAQgdAAgVgKg");
	this.shape_7.setTransform(-51.9,17.3,1,1,-54.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEEF4").s().p("ArYFbQghgBhAgIQgigEgJgOQgGgKABgVQAFhaAzhOQAyhOBPgrQAlgTA+ABIBoAIQBJAGAhAAQA7AAAtgMQBKgVAsADQAZABAtAMQAzAOASACQBjAPCCgTQBsgRB2goIgCAFIAngmQAVgXAJgVQALgagBgwQgBg4ADgTQAEgTAQADQACAAAEAEQAEADADAAQAGAAAMgLQAVgWAdgIQAsgMAxAVQAkAPArAmQA0AvAVAzQAaA/gcA3QgRAlgpAcIgXAQQgNAKgIAHIgJAKIgLAPIgDAFQgEAGgDAPQgGAdgkAbIg+AmQhXA1hBATQhZAZhdgTQgigGgxABQg3AEgdAAIjKADQhzAEhYAOQhYANiHAkQgZAGgmAFIg/AHQggAEgjAAIgegBg");
	this.shape_8.setTransform(34.3,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.5).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_9.setTransform(9.9,4.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_10.setTransform(62.4,31.2,1,1,51.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],36.6,-59.7,-73.8,131.6).s().p("AB/DJQgdgLgvgdQgsgcgSgOQgigYgYgZQhDhGgYhlQgFgVADgNQACgOAKgQIASgZQAJgMAEgOIABgCIAJAhQAEAPAGAvQAGAnAIAVQAIAUAQAXIAgAkQA9BIAfAhQA2A5AvApQgQgKgVgIg");
	this.shape_11.setTransform(77.4,31.7,1,1,51.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEEF4").s().p("AAbDKQgWgIgdgPQgWgLgUgNQhHgughgkQgigmgKgOQgXgegDgdQgBgIABgPIABgKQAGgmAOgWQATgfAsgNQApgNAkAKIAwAPQAcAJASAAQAJgSAGgTQBagCBngdQhbAog2A5QhABBgFBNQAAAMAEAEQABADAKAEIBCAdQAmAQAfAHQAZAGAMAEQAWAIALAMQAJAJACAKIABAPQABAbgVARQgSAQgdAEQgSADgTAAQg1AAg5gVg");
	this.shape_12.setTransform(-69.8,54.2,1,1,38.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],1.1,-7.7,-14.4,19.2).s().p("Ah1BSQAIghADgQQAFgYgDgcQgEgkgQgRQgHgbgNgeQBYCGDJgFQgGAUgJASQgUAAgdgJIgvgPQgigKgqAMQgrAOgUAeQgOAWgFAmIgBAKQAAgTAIgdg");
	this.shape_13.setTransform(-66.6,31.9,1,1,38.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],14.6,-28.4,-29.3,47.6).s().p("ABXHRQgbg5hBg2QhPg6gkgiQhPhIgjhqQgihoAVhpIAPg8QAIgkABgZQABghgOgcQgOgegbgMIARAGQg4gagTgeQgOgVACgYQABgbASgOQAPgLAcgCQA3gEAzAgQAyAeAcAyQAaAwAFA7QAEA4gPA5QgHAdgUA5QgOAyAEAjQAGAwAlArQAfAlAwAdQAvAcBqAzQBaAxAqA4IASAaQALAOAMAGQAJAFAJACQidAehiBKQAEgNgKgVg");
	this.shape_14.setTransform(-99.8,-56.2,1,1,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.9,-94.9,296,190);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D387B8").s().p("AABAeIAMgJIgJAAQgSgEgJgMQgGgHACgMQADgMAKgDQAGgCAIADIADABQAKAEAHAIQAHAIABAIQABAMgIAJQgIAJgJAAIgDgBg");
	this.shape.setTransform(139.6,-2.2,1,1,-16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEEF4").s().p("AAQBrQgQgCg+gOQgHgBgfgBQgagBgJgFQgPgHAAgRIADgfQABgHgFgQQgFgOABgIQAAgKAHgIQAHgGARgCQBAgGA8AVQBUAcAIg7IABgRQABgKADgHQAFgNAJAAQAIgBAGAJIAFAMIANAhQAIAVAEAOIgEgCQgIgCgHACQgKADgCAMQgDAJAHAJQAIANAVADQgEAOgMAOQgQAUgcAPIgCABQgaAOgjAAIgSAAg");
	this.shape_1.setTransform(124.7,1.4,1,1,-16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BA448D","#BB468E","#BD4E93","#C15A9A","#C66DA5","#CD84B3","#D6A1C4","#E0C3D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.353,0.51,0.627,0.725,0.812,0.894,0.965,0.98,0.984,1],12.7,-20.9,-17.2,33.1).s().p("AhiDlQgqgRgZgSQgYgRgQgYQgRgZgFgcQgBgLgBgUIgBgfQgEgjgUgdQgQgZBFgeQBNgcAJgIQAMgKAQgTIAbgeQAngqA0gWQATgIALAFQASAIAAAiQAAARgFAqQAAAiAaADQADABAvgZQAsgXABAFQAGAVgMAiQgPAnAAAOQABAOAQAKIAaAPQAMAJAIAQQAGALAGAUIAJAaQgGgIgIAAQgJABgFANQgDAGgBAKIgBARQgIA8hUgcQg+gWhAAGQgPACgHAHQgNANAOAmQANAigcANQgEACgIAAQgTAAgmgRg");
	this.shape_2.setTransform(106.7,-12.2,1,1,-16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEEF4").s().p("AAIDFQgYgCgggMIgEgCQgegLgRgWIAAgBQgKgMgGgSQgOglAEglQACgQAIgaQAJgdACgKQAEgWAEgGQADgIAFgEQAKgHARAAIAdACQAmgBAtgwIAjglQAUgTAUgJIAAABQgoA8gdBBQgMAcgOApQgFANgDAVIgEAlQgBASAEAHQADAFANAJQAVAOAIARQAEAKgBALQgBAMgGAIQgOASgfAAIgKgBg");
	this.shape_3.setTransform(57.4,78.2,1,1,-20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],18.2,-40.5,-39.1,58.8).s().p("AkDEKQABhEgWg0QBOjxBIhxQB7i9CvAGQBBAAAgAvQAjAygqA/QgPAUghAjQgaAfgGAYIgOAnIgEAKQgUA2ghBFIg6B5IgMAIQgtAhgqAwIAAgBIgBABQgUAJgUATIgjAlQgtAwgoABIgdgCQgRAAgKAHQgFAEgDAIQAPhLABgzg");
	this.shape_4.setTransform(58.3,28.9,1,1,-20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEEF4").s().p("AAIF1QgUgIgfgPQgWgLgUgNQhHgughglQgigmgKgNQgXghgDgcQgBgIABgQIABgKQAGgmAOgWQATgeAsgMQApgMAkAKIAwANQAcAJAUAAQAfg8gIhYQgDghgJgrIgQhLQgGgYAAgOQAAgVAJgOQAOgZAvgHIAbgEIBJA9QAtAmAWAbQBBBRg0BXIgOAXQgJAPgIAJQgnARgZAQQhCAmgnAxQgpA3gEBAQAAAMAEAFQABACAIAFIBCAdQAmAQAfAGQAZAGAMAEQAWAIALAMQAJAKACAKIABAPQABAagVASQgSAQgdAEQgSADgTAAQg1AAg5gVg");
	this.shape_5.setTransform(-41.8,54.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#D893BB","#DBA6C6","#DFBAD3","#E1C7DA","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.2,0.463,0.725,0.98,0.984,1],14.6,-29.8,-31.2,49.5).s().p("AhXFqQAJghADgQQAFgYgDgeQgEgkgQgRQgOgygjhFQgohNgTgkQhBiLAZhnQAghCAzgpQAIgIACgDIACgFQA4giBAAdQBIAlBCBYQAlAyBJBpQAOAQANAKIgcAEQgvAHgQAZQgJAOABAVQAAAOAFAWIASBLQAJArADAhQAIBYggA+QgUAAgdgJIgvgPQglgKgnAMQgrAOgUAeQgOAWgFAmIgCAKQABgTAHgdg");
	this.shape_6.setTransform(-58.2,24.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEEF4").s().p("ArYFbQghgBhAgIQgigEgJgOQgGgKABgVQAFhaAzhOQAyhOBPgrQAlgTA+ABIBoAIQBJAGAhAAQA7AAAtgMQBKgVAsADQAZABAtAMQAzAOASACQBjAPCCgTQBsgRB2goIgCAFIAngmQAVgXAJgVQALgagBgwQgBg4ADgTQAEgTAQADQACAAAEAEQAEADADAAQAGAAAMgLQAVgWAdgIQAsgMAxAVQAkAPArAmQA0AvAVAzQAaA/gcA3QgRAlgpAcIgXAQQgNAKgIAHIgJAKIgLAPIgDAFQgEAGgDAPQgGAdgkAbIg+AmQhXA1hBATQhZAZhdgTQgigGgxABQg3AEgdAAIjKADQhzAEhYAOQhYANiHAkQgZAGgmAFIg/AHQggAEgjAAIgegBg");
	this.shape_7.setTransform(30.4,17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.5).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_8.setTransform(6,10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_9.setTransform(89.3,53.7,1,1,18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],36.6,-59.7,-73.8,131.6).s().p("AB/DJQgdgLgvgdQgsgcgSgOQgigYgYgZQhDhGgYhlQgFgVADgNQACgOAKgQIASgZQAJgMAEgOIABgCIAJAhQAEAPAGAvQAGAnAIAVQAIAUAQAXIAgAkQA9BIAfAhQA2A5AvApQgQgKgVgIg");
	this.shape_10.setTransform(102.2,45.8,1,1,18);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],1.1,-7.7,-14.4,19.2).s().p("Ah1BSQAIghADgQQAFgYgDgcQgEgkgQgRQgHgbgNgeQBYCGDJgFQgGAUgJASQgUAAgdgJIgvgPQgigKgqAMQgrAOgUAeQgOAWgFAmIgBAKQAAgTAIgdg");
	this.shape_11.setTransform(-59.7,41.1,1,1,17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEEF4").s().p("AjxFRQgVgFgMglQgUhIAYhUQAlhiASgxQAdhRAshPQAJgQAIgEIACgBQAKgEAMAEQAKAEAJAJIAPASQAJANAGAFQAKAIAJADQATAIATgFQAbgIAUggQAQgbAGggIADg8QACgpAVgJQAPgGAQALQAOAIAKARQAOAWAQAkIAaA7QAPAgAQAWQADAEAXATQAVASgGAHQgCACgFACIgCABQgKAEgXAHIgOADQgHADgMAJQgMAIgRAGIgjANQgfANgnAJIhAANQgjALgWAQIgLAJQgkAhgdBLIgTA0IgUAzQgLAagQAZQgWAhgXAAIgHgBg");
	this.shape_12.setTransform(-82.3,53.4,1,1,-15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],19.5,-15.9,-8.6,32.8).s().p("ADADiQAFgCACgCQAGgHgVgSQgXgTgEgEQgPgWgPggIgag7QgQgkgOgWQgLgPgNgIQgQgLgPAGQgTAJgCAnIgDA8QgGAggQAbQgUAggbAIQgVAFgUgIQgIgDgKgIQgGgFgKgNIgOgSQgJgJgKgEQgNgEgJAEQAWgXAwgYQA4gcASgNQAkgbAag/IAhhsQANgoAOgdQgYBmBBCJQASAnAoBMQAkBGAOAxQgGgHgKgEg");
	this.shape_13.setTransform(-82.5,21.3,1,1,-15.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],14.6,-28.4,-29.3,47.6).s().p("ABXHRQgbg5hBg2QhPg6gkgiQhPhIgjhqQgihoAVhpIAPg8QAIgkABgZQABghgOgcQgOgegbgMIARAGQg4gagTgeQgOgVACgYQABgbASgOQAPgLAcgCQA3gEAzAgQAyAeAcAyQAaAwAFA7QAEA4gPA5QgHAdgUA5QgOAyAEAjQAGAwAlArQAfAlAwAdQAvAcBqAzQBaAxAqA4IASAaQALAOAMAGQAJAFAJACQidAehiBKQAEgNgKgVg");
	this.shape_14.setTransform(-97.3,-55.2,1,1,-14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.5,-97.1,285.1,194.3);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D387B8").s().p("AABAeIAMgJIgJAAQgSgEgJgMQgGgHACgMQADgMAKgDQAGgCAIADIADABQAKAEAHAIQAHAIABAIQABAMgIAJQgIAJgJAAIgDgBg");
	this.shape.setTransform(129.4,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEEF4").s().p("AAQBrQgQgCg+gOQgHgBgfgBQgagBgJgFQgPgHAAgRIADgfQABgHgFgQQgFgOABgIQAAgKAHgIQAHgGARgCQBAgGA8AVQBUAcAIg7IABgRQABgKADgHQAFgNAJAAQAIgBAGAJIAFAMIANAhQAIAVAEAOIgEgCQgIgCgHACQgKADgCAMQgDAJAHAJQAIANAVADQgEAOgMAOQgQAUgcAPIgCABQgaAOgjAAIgSAAg");
	this.shape_1.setTransform(114.1,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BA448D","#BB468E","#BD4E93","#C15A9A","#C66DA5","#CD84B3","#D6A1C4","#E0C3D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.353,0.51,0.627,0.725,0.812,0.894,0.965,0.98,0.984,1],12.7,-20.9,-17.2,33.1).s().p("AhiDlQgqgRgZgSQgYgRgQgYQgRgZgFgcQgBgLgBgUIgBgfQgEgjgUgdQgQgZBFgeQBNgcAJgIQAMgKAQgTIAbgeQAngqA0gWQATgIALAFQASAIAAAiQAAARgFAqQAAAiAaADQADABAvgZQAsgXABAFQAGAVgMAiQgPAnAAAOQABAOAQAKIAaAPQAMAJAIAQQAGALAGAUIAJAaQgGgIgIAAQgJABgFANQgDAGgBAKIgBARQgIA8hUgcQg+gWhAAGQgPACgHAHQgNANAOAmQANAigcANQgEACgIAAQgTAAgmgRg");
	this.shape_2.setTransform(100.8,-1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEEF4").s().p("AAIDFQgYgCgggMIgEgCQgegLgRgWIAAgBQgKgMgGgSQgOglAEglQACgQAIgaQAJgdACgKQAEgWAEgGQADgIAFgEQAKgHARAAIAdACQAmgBAtgwIAjglQAUgTAUgJIAAABQgoA8gdBBQgMAcgOApQgFANgDAVIgEAlQgBASAEAHQADAFANAJQAVAOAIARQAEAKgBALQgBAMgGAIQgOASgfAAIgKgBg");
	this.shape_3.setTransform(22.4,83.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],18.2,-40.5,-39.1,58.8).s().p("AkDEKQABhEgWg0QBOjxBIhxQB7i9CvAGQBBAAAgAvQAjAygqA/QgPAUghAjQgaAfgGAYIgOAnIgEAKQgUA2ghBFIg6B5IgMAIQgtAhgqAwIAAgBIgBABQgUAJgUATIgjAlQgtAwgoABIgdgCQgRAAgKAHQgFAEgDAIQAPhLABgzg");
	this.shape_4.setTransform(40.3,37.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEEF4").s().p("AAIF1QgUgIgfgPQgWgLgUgNQhHgughglQgigmgKgNQgXghgDgcQgBgIABgQIABgKQAGgmAOgWQATgeAsgMQApgMAkAKIAwANQAcAJAUAAQAfg8gIhYQgDghgJgrIgQhLQgGgYAAgOQAAgVAJgOQAOgZAvgHIAbgEIBJA9QAtAmAWAbQBBBRg0BXIgOAXQgJAPgIAJQgnARgZAQQhCAmgnAxQgpA3gEBAQAAAMAEAFQABACAIAFIBCAdQAmAQAfAGQAZAGAMAEQAWAIALAMQAJAKACAKIABAPQABAagVASQgSAQgdAEQgSADgTAAQg1AAg5gVg");
	this.shape_5.setTransform(-53.7,65.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#D893BB","#DBA6C6","#DFBAD3","#E1C7DA","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.2,0.463,0.725,0.98,0.984,1],14.6,-29.8,-31.2,49.5).s().p("AhXFqQAJghADgQQAFgYgDgeQgEgkgQgRQgOgygjhFQgohNgTgkQhBiLAZhnQAghCAzgpQAIgIACgDIACgFQA4giBAAdQBIAlBCBYQAlAyBJBpQAOAQANAKIgcAEQgvAHgQAZQgJAOABAVQAAAOAFAWIASBLQAJArADAhQAIBYggA+QgUAAgdgJIgvgPQglgKgnAMQgrAOgUAeQgOAWgFAmIgCAKQABgTAHgdg");
	this.shape_6.setTransform(-70.1,34.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEEF4").s().p("ArYFbQghgBhAgIQgigEgJgOQgGgKABgVQAFhaAzhOQAyhOBPgrQAlgTA+ABIBoAIQBJAGAhAAQA7AAAtgMQBKgVAsADQAZABAtAMQAzAOASACQBjAPCCgTQBsgRB2goIgCAFIAngmQAVgXAJgVQALgagBgwQgBg4ADgTQAEgTAQADQACAAAEAEQAEADADAAQAGAAAMgLQAVgWAdgIQAsgMAxAVQAkAPArAmQA0AvAVAzQAaA/gcA3QgRAlgpAcIgXAQQgNAKgIAHIgJAKIgLAPIgDAFQgEAGgDAPQgGAdgkAbIg+AmQhXA1hBATQhZAZhdgTQgigGgxABQg3AEgdAAIjKADQhzAEhYAOQhYANiHAkQgZAGgmAFIg/AHQggAEgjAAIgegBg");
	this.shape_7.setTransform(18.5,27.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.5).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_8.setTransform(-5.9,20.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_9.setTransform(93.7,68.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],36.6,-59.7,-73.8,131.6).s().p("AB/DJQgdgLgvgdQgsgcgSgOQgigYgYgZQhDhGgYhlQgFgVADgNQACgOAKgQIASgZQAJgMAEgOIABgCIAJAhQAEAPAGAvQAGAnAIAVQAIAUAQAXIAgAkQA9BIAfAhQA2A5AvApQgQgKgVgIg");
	this.shape_10.setTransform(103.6,57.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFEEF4").s().p("AAIDFQgYgCgggMIgEgCQgegLgRgWIAAgBQgKgMgGgSQgOglAEglQACgQAIgaQAJgdACgKQAEgWAEgGQADgIAFgEQAKgHARAAIAdACQAmgBAtgwIAjglQAUgTAUgJIAAABQgoA8gdBBQgMAcgOApQgFANgDAVIgEAlQgBASAEAHQADAFANAJQAVAOAIARQAEAKgBALQgBAMgGAIQgOASgfAAIgKgBg");
	this.shape_11.setTransform(22.4,83.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],18.2,-40.5,-39.1,58.8).s().p("AkDEKQABhEgWg0QBOjxBIhxQB7i9CvAGQBBAAAgAvQAjAygqA/QgPAUghAjQgaAfgGAYIgOAnIgEAKQgUA2ghBFIg6B5IgMAIQgtAhgqAwIAAgBIgBABQgUAJgUATIgjAlQgtAwgoABIgdgCQgRAAgKAHQgFAEgDAIQAPhLABgzg");
	this.shape_12.setTransform(40.3,37.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFEEF4").s().p("AAbDKQgWgIgdgPQgWgLgUgNQhHgughgkQgigmgKgOQgXgegDgdQgBgIABgPIABgKQAGgmAOgWQATgfAsgNQApgNAkAKIAwAPQAcAJASAAQAJgSAGgTQBagCBngdQhbAog2A5QhABBgFBNQAAAMAEAEQABADAKAEIBCAdQAmAQAfAHQAZAGAMAEQAWAIALAMQAJAJACAKIABAPQABAbgVARQgSAQgdAEQgSADgTAAQg1AAg5gVg");
	this.shape_13.setTransform(-55.6,82.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],1.1,-7.7,-14.4,19.2).s().p("Ah1BSQAIghADgQQAFgYgDgcQgEgkgQgRQgHgbgNgeQBYCGDJgFQgGAUgJASQgUAAgdgJIgvgPQgigKgqAMQgrAOgUAeQgOAWgFAmIgBAKQAAgTAIgdg");
	this.shape_14.setTransform(-67,62.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFEEF4").s().p("AjxFRQgVgFgMglQgUhIAYhUQAlhiASgxQAdhRAshPQAJgQAIgEIACgBQAKgEAMAEQAKAEAJAJIAPASQAJANAGAFQAKAIAJADQATAIATgFQAbgIAUggQAQgbAGggIADg8QACgpAVgJQAPgGAQALQAOAIAKARQAOAWAQAkIAaA7QAPAgAQAWQADAEAXATQAVASgGAHQgCACgFACIgCABQgKAEgXAHIgOADQgHADgMAJQgMAIgRAGIgjANQgfANgnAJIhAANQgjALgWAQIgLAJQgkAhgdBLIgTA0IgUAzQgLAagQAZQgWAhgXAAIgHgBg");
	this.shape_15.setTransform(-108.8,62.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],99.5,-173.1,-11.5,19.2).s().p("AgfA2IATg0QAbhJAlghQghAkgZBBIgVA1QgNAigLAVIAUgzg");
	this.shape_16.setTransform(-120,77.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],19.5,-15.9,-8.6,32.8).s().p("ADADiQAFgCACgCQAGgHgVgSQgXgTgEgEQgPgWgPggIgag7QgQgkgOgWQgLgPgNgIQgQgLgPAGQgTAJgCAnIgDA8QgGAggQAbQgUAggbAIQgVAFgUgIQgIgDgKgIQgGgFgKgNIgOgSQgJgJgKgEQgNgEgJAEQAWgXAwgYQA4gcASgNQAkgbAag/IAhhsQANgoAOgdQgYBmBBCJQASAnAoBMQAkBGAOAxQgGgHgKgEg");
	this.shape_17.setTransform(-100.4,31.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],14.6,-28.4,-29.3,47.6).s().p("ABXHRQgbg5hBg2QhPg6gkgiQhPhIgjhqQgihoAVhpIAPg8QAIgkABgZQABghgOgcQgOgegbgMIARAGQg4gagTgeQgOgVACgYQABgbASgOQAPgLAcgCQA3gEAzAgQAyAeAcAyQAaAwAFA7QAEA4gPA5QgHAdgUA5QgOAyAEAjQAGAwAlArQAfAlAwAdQAvAcBqAzQBaAxAqA4IASAaQALAOAMAGQAJAFAJACQidAehiBKQAEgNgKgVg");
	this.shape_18.setTransform(-94.2,-54.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.2,-104.4,274.6,209);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E690A2").s().p("AADAXIgHAAQgGgBgEgEQgFgFABgGIAAgPQABgGAEgEQAFgFAGABIAHAAQAHAAAEAFQAEAEAAAHIgBAPQgBAGgEAEQgFAEgFAAIgBAAg");
	this.shape.setTransform(14.3,121.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#264193").s().p("AgsCCIAKjhQABgQAMgLQAMgLAPAAIACAAQAQABALAMQALAMgBARIgHCeIgBABIgDBCg");
	this.shape_1.setTransform(16.1,84.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E690A2").s().p("AgZBcIAJi5IAqACIgJC5g");
	this.shape_2.setTransform(15.1,106.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#57ADDF").ss(3.2).p("AjAwCQAkADAiAUQAiATATAdQBOBzAODvQAHBmgPCJQgDAYgbDXQgpErAoCsQAQBJAoBjQAYA4AxBvQBUDLgYCJ");
	this.shape_3.setTransform(-1.3,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-125.2,42.8,248.8);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BCE1E8").s().p("AhTGuIgqtbID6AAIg0Nbg");
	this.shape.setTransform(12.6,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.2,86.1);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0971B7").s().p("AiXGuIA3tbID4AAIg5GmIg5BYIhNFdg");
	this.shape.setTransform(15.2,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.5,86.1);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4580C1").s().p("AIXFLIxfAAQCLgUCpgqQFShSCahpQCJhbCBiqQBAhVAlhDIgBJvIADAEQABAHgNAOQgNAOgOABg");
	this.shape_1.setTransform(58.6,33.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.1,66.6);


(lib.Layer20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#FFFFFF","#FCFDFE","#F3F5FA","#E3E8F3","#CCD6EA","#AFBFDE","#8CA2CF","#6280BE","#395FAD"],[0,0.2,0.345,0.475,0.596,0.706,0.812,0.914,1],1.1,-47,-0.8,47.1).ss(12.8).p("AG/mOQlEAyjqDxQjqDtguFE");
	this.shape.setTransform(45.6,46.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#FFFFFF","#FCFDFE","#F3F5FA","#E3E8F3","#CCD6EA","#AFBFDE","#8CA2CF","#6280BE","#395FAD"],[0,0.2,0.345,0.475,0.596,0.706,0.812,0.914,1],0,52.1,0,-52).ss(12.8).p("AnSHJQC1gXCihXQCahUB4iGQB3iEBDilQBFipAFi1");
	this.shape_1.setTransform(170,159.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.5,230);


(lib.Layer20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#FFFFFF","#FCFDFE","#F3F5FA","#E3E8F3","#CCD6EA","#AFBFDE","#8CA2CF","#6280BE","#395FAD"],[0,0.2,0.345,0.475,0.596,0.706,0.812,0.914,1],0,-47,0,47.1).ss(12.8).p("AG1mWQlDA4jkD2QjmDygnFF");
	this.shape.setTransform(44.8,47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#FFFFFF","#FCFDFE","#F3F5FA","#E3E8F3","#CCD6EA","#AFBFDE","#8CA2CF","#6280BE","#395FAD"],[0,0.2,0.345,0.475,0.596,0.706,0.812,0.914,1],0,52.1,0,-52).ss(12.8).p("AnRHJQC1gXChhXQCahUB4iGQB3iEBDilQBFiqAFi0");
	this.shape_1.setTransform(164.9,160.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14.3,212.4,245.2);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E98A9").s().p("Ag5goQgJgjgBgTQgDgVADgkIADg5IAIgBQAtgHAoATQggAHgbATIAvAVQgVAKgPAUQAHABADAIQACAIgDAIIgFAOQgDAJABAGQABAGAJAMQAHAKAAAHQgBAFgFAIQgFAIAAAFQgBALAaAJQAcAKAAAMQABANgYANQgJAFgFAHQgFAJADAHQACAEAJAGQAJAFABAFQACAIgPALQgNALABAIIAOAHQgGAMACANQAegMAeAIQgbASgmAQg");
	this.shape.setTransform(7,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14,42.4);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AE9C99").s().p("Agog3IBJgGIAIB1IhIAGg");
	this.shape_1.setTransform(4.2,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.3,12.4);


(lib.Tween36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween28("synched",0);
	this.instance.setTransform(-0.6,0);

	this.instance_1 = new lib.Tween28("synched",0);
	this.instance_1.setTransform(0.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.8,-91.8,301.8,183.9);


// stage content:
(lib.Portifolioanimacao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_216 = function() {
		this.gotoAndPlay(100)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(216).call(this.frame_216).wait(12));

	// cat
	this.instance = new lib.Tween24("synched",0);
	this.instance.setTransform(137.3,740.2);

	this.instance_1 = new lib.Tween25("synched",0);
	this.instance_1.setTransform(171.7,749.5);

	this.instance_2 = new lib.Tween26("synched",0);
	this.instance_2.setTransform(213.6,751.6);

	this.instance_3 = new lib.Tween27("synched",0);
	this.instance_3.setTransform(269.6,755.3);

	this.instance_4 = new lib.Tween28("synched",0);
	this.instance_4.setTransform(311.5,756.8);

	this.instance_5 = new lib.Tween29("synched",0);
	this.instance_5.setTransform(349.1,751.2);

	this.instance_6 = new lib.Tween31("synched",0);
	this.instance_6.setTransform(375.4,751.8);

	this.instance_7 = new lib.Tween30("synched",0);
	this.instance_7.setTransform(408.3,745.3);

	this.instance_8 = new lib.Tween32("synched",0);
	this.instance_8.setTransform(453.8,756);

	this.instance_9 = new lib.Tween33("synched",0);
	this.instance_9.setTransform(473.4,761);

	this.instance_10 = new lib.Tween34("synched",0);
	this.instance_10.setTransform(520.2,772.9);

	this.instance_11 = new lib.Tween35("synched",0);
	this.instance_11.setTransform(565.4,769.3);

	this.instance_12 = new lib.Tween36("synched",0);
	this.instance_12.setTransform(600.3,754.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D387B8").s().p("AABAeIAMgJIgJAAQgSgEgJgMQgGgHACgMQADgMAKgDQAGgCAIADIADABQAKAEAHAIQAHAIABAIQABAMgIAJQgIAJgJAAIgDgBg");
	this.shape.setTransform(739,727.5,1,1,-33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEEF4").s().p("AAQBrQgQgCg+gOQgHgBgfgBQgagBgJgFQgPgHAAgRIADgfQABgHgFgQQgFgOABgIQAAgKAHgIQAHgGARgCQBAgGA8AVQBUAcAIg7IABgRQABgKADgHQAFgNAJAAQAIgBAGAJIAFAMIANAhQAIAVAEAOIgEgCQgIgCgHACQgKADgCAMQgDAJAHAJQAIANAVADQgEAOgMAOQgQAUgcAPIgCABQgaAOgjAAIgSAAg");
	this.shape_1.setTransform(725.9,735.3,1,1,-33.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BA448D","#BB468E","#BD4E93","#C15A9A","#C66DA5","#CD84B3","#D6A1C4","#E0C3D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.353,0.51,0.627,0.725,0.812,0.894,0.965,0.98,0.984,1],12.7,-20.9,-17.1,33.1).s().p("AhiDlQgqgRgZgSQgYgRgQgYQgRgZgFgcQgBgLgBgUIgBgfQgEgjgUgdQgQgZBFgeQBNgcAJgIQAMgKAQgTIAbgeQAngqA0gWQATgIALAFQASAIAAAiQAAARgFAqQAAAiAaADQADABAvgZQAsgXABAFQAGAVgMAiQgPAnAAAOQABAOAQAKIAaAPQAMAJAIAQQAGALAGAUIAJAaQgGgIgIAAQgJABgFANQgDAGgBAKIgBARQgIA8hUgcQg+gWhAAGQgPACgHAHQgNANAOAmQANAigcANQgEACgIAAQgTAAgmgRg");
	this.shape_2.setTransform(704.7,727.5,1,1,-33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEEF4").s().p("AAIDFQgYgCgggMIgEgCQgegLgRgWIAAgBQgKgMgGgSQgOglAEglQACgQAIgaQAJgdACgKQAEgWAEgGQADgIAFgEQAKgHARAAIAdACQAmgBAtgwIAjglQAUgTAUgJIAAABQgoA8gdBBQgMAcgOApQgFANgDAVIgEAlQgBASAEAHQADAFANAJQAVAOAIARQAEAKgBALQgBAMgGAIQgOASgfAAIgKgBg");
	this.shape_3.setTransform(695.3,828.5,1,1,-37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],18.2,-40.5,-39.1,58.8).s().p("AkDEKQABhEgWg0QBOjxBIhxQB7i9CvAGQBBAAAgAvQAjAygqA/QgPAUghAjQgaAfgGAYIgOAnIgEAKQgUA2ghBFIg6B5IgMAIQgtAhgqAwIAAgBIgBABQgUAJgUATIgjAlQgtAwgoABIgdgCQgRAAgKAHQgFAEgDAIQAPhLABgzg");
	this.shape_4.setTransform(681.1,781.2,1,1,-37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EEEEEF").ss(6.9).p("AgngIQAFAFAJAJQACADADADQAGAGAGABQAFABAHABQAEAAAJADQAFABAGgBQACgBAEgIQABgBAEgKQACgGgDgEQgCgEgHgCQgIgBgEgBQgKgDgEgBQgBAAAAAAIgGAAQgEABgDgBQgFgEgDgBQgBgBgGABQgEABgDgC");
	this.shape_5.setTransform(512.1,838.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEEF4").s().p("AinEeQgsgxgHhHQABhVgCgsQgBhFANhIQADgPAHgGIABgBQAIgGANAAQALAAALAEIAUAKQAOAHAHACQAMAEAJAAQAVAAASgKQAXgOAGgeQAHgZgGgaIgTgvQgLggAQgNQAMgJATAEQAOACAPALQAVAMAbAXIAtAmQAZAUAXAMQAFADAcAHQAZAIgDAHQAAADgEADIgDABQgHAGgTALIgNAHQgFAEgIAKQgIAJgPAKIgcAUQgYATghASIg1AeQgfAQgPAUIgHAJQgMATgHArQgDAWgBASIAAAhIgBA4QgBAYgGAXIgCAFIgBAAIgIAAIgCAAIAAAAIgBAAIAAAAIgCAAIgCAAIgIgFIAAgBIgBAAIAAAAIgGABIgCAAIAAAAIAAAAIgFgBIAAAAIAAAAIAFABIAAAAIAAAAIACAAIAGgBIAAAAIABAAIAAABIAIAFIACAAIACAAIAAAAIABAAIAAAAIACAAIAIAAIABAAQgIAZgRAHIgFgGIgOgQIAOAQIAFAGQgFACgGAAIgDAAQgVAAgVgXgAhWETIAAAAg");
	this.shape_6.setTransform(521.2,809);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E0A4C6","#E1B0CD","#E2C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.227,0.675,0.98,0.984,1],28.5,-33.6,-23.8,57).s().p("AAnFMQgogTgfhCIgbg7QgPgkgOgWQgLgRgNgIQgRgLgOAGQgVAJgDApIgCA8QgGAggRAbQgTAggbAIQgVAFgUgIQgJgDgJgIQgGgFgKgNIgPgSQgIgJgLgEQgMgEgJAEQAWgXAwgYQA4gcASgNQAigZAVgxQAOgjALg3QAFgYALgaQAHgQAQgeQAuhTAMgRQAhgvA0gfQBEgoBNgPQBmgUAmAyQAVAbALAyQATBTgHBXQgGBUgeBQQgjBdgdAsQgvBIhCARQgkAKgdAAQgdAAgVgKg");
	this.shape_7.setTransform(528,763.3,1,1,-20.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEEF4").s().p("ArYFbQghgBhAgIQgigEgJgOQgGgKABgVQAFhaAzhOQAyhOBPgrQAlgTA+ABIBoAIQBJAGAhAAQA7AAAtgMQBKgVAsADQAZABAtAMQAzAOASACQBjAPCCgTQBsgRB2goIgCAFIAngmQAVgXAJgVQALgagBgwQgBg4ADgTQAEgTAQADQACAAAEAEQAEADADAAQAGAAAMgLQAVgWAdgIQAsgMAxAVQAkAPArAmQA0AvAVAzQAaA/gcA3QgRAlgpAcIgXAQQgNAKgIAHIgJAKIgLAPIgDAFQgEAGgDAPQgGAdgkAbIg+AmQhXA1hBATQhZAZhdgTQgigGgxABQg3AEgdAAIjKADQhzAEhYAOQhYANiHAkQgZAGgmAFIg/AHQggAEgjAAIgegBg");
	this.shape_8.setTransform(630.1,762.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.5).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_9.setTransform(605.7,755.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEEF4").s().p("AFvFHQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgngmQhEhAgogbQhAgvg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgJgEgLgCQCsgbA8gUQB9gqA3hZIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBBBGQAYAYAiAXQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_10.setTransform(650,783.9,1,1,38.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],36.6,-59.7,-73.8,131.6).s().p("AB/DJQgdgLgvgdQgsgcgSgOQgigYgYgZQhDhGgYhlQgFgVADgNQACgOAKgQIASgZQAJgMAEgOIABgCIAJAhQAEAPAGAvQAGAnAIAVQAIAUAQAXIAgAkQA9BIAfAhQA2A5AvApQgQgKgVgIg");
	this.shape_11.setTransform(664.9,781.1,1,1,38.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEEF4").s().p("AAbDKQgWgIgdgPQgWgLgUgNQhHgughgkQgigmgKgOQgXgegDgdQgBgIABgPIABgKQAGgmAOgWQATgfAsgNQApgNAkAKIAwAPQAcAJASAAQAJgSAGgTQBagCBngdQhbAog2A5QhABBgFBNQAAAMAEAEQABADAKAEIBCAdQAmAQAfAHQAZAGAMAEQAWAIALAMQAJAJACAKIABAPQABAbgVARQgSAQgdAEQgSADgTAAQg1AAg5gVg");
	this.shape_12.setTransform(534.7,813.7,1,1,17.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],1.1,-7.7,-14.4,19.2).s().p("Ah1BSQAIghADgQQAFgYgDgcQgEgkgQgRQgHgbgNgeQBYCGDJgFQgGAUgJASQgUAAgdgJIgvgPQgigKgqAMQgrAOgUAeQgOAWgFAmIgBAKQAAgTAIgdg");
	this.shape_13.setTransform(529.6,791.8,1,1,17.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],7.6,-33.2,-15.5,51.5).s().p("ADSGXQgpgwhPgjQhaglgqgXQhfgyg8hdQg9hegGhpIAAg+QgCgkgGgZQgHgggUgYQgWgagdgEIASABQg9gLgagYQgSgQgFgYQgGgaAOgSQALgPAbgJQA1gSA5ASQA4AQAoAqQAmAnATA5QASA0AAA7QAAAegEA8QgBA0ANAhQATAtAvAgQAnAbA1AQQA1APBzAWQBkAZA3AsIAYAUQAOALANADQAKADAKgBQiRBFhMBhQABgOgPgSg");
	this.shape_14.setTransform(505.6,699.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#BA448D","#C3629F","#D08FB9","#DAB0CD","#E0C4D9","#E2CBDD","#DEC8D9","#D0BCCC"],[0.016,0.169,0.427,0.655,0.847,0.98,0.984,1],26,-64.7,-58.4,81.4).s().p("AqAGMQgHgDgHgGIg4gqQgigZgMgcQgKgXgbg3Qg/h8gOgpQghhcAThRQAhhDAygpQAJgHACgEIACgFQBihKCdgeQAZAGApgLIA/gPQA8gIB6gFQCCgMBDABQBtACBTAeQAsAQBPAnQBHAdA8gJQARgCAagIIArgLQBZgVCNAhQArAKA+AFQAZADAZAAQgzAJgvAtQgJgPgJAAQgKAAgGARQgDATABA4QABAwgLAaQgfBLh6AmQhXAbhxAEQhkAEiAgWIg2gMQgigIgVgBQgTgBgbAHIgrAOQg2AOhLgCIiCgKQgqgEgWgBQgpgBgWAIQgXAIgeAdQgSAQgeAfQgzAygRAhQgQAfgHAsQgEAVgFA6QgBAPgGAFQgEACgEAAIgHgBg");
	this.shape_15.setTransform(605.4,756.1,1,1,-5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFEEF4").s().p("AgzDZIgCgCQgIgHgGgNQgFgMgBgNIgBgZQAAgRgCgIQgBgOgFgKQgJgWgRgQQgWgVgeACQgYABgVAOIghAiQgWAWgTgOQgNgJgGgWQgFgRACgUQACgbAIghIANg8QAHghgBgcQABgGgHggQgEgeAIACQACgBAEAEIADACQAIAFATASIAMALQAGAFAMAGQAMAFAPANIAeAYQAcAUAeAeIAzAyQAeAbAWAJIAMAEQAWAHApgFQAVgDAPgEIAegJIAxgQQAWgFAXgBIAFABQAaABANAQIAHAJQAMAXgMAgQgXA/g7AdQhLAYgmAPQg+AXhEAHIgFAAQgLAAgGgDg");
	this.shape_16.setTransform(621.9,835.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFEEF4").s().p("AG5FtQhAgHg5g/IgVgaQgLgQgLgIQgfgZgngTIgxgWQgfgNgRgJQgYgOgpgmQhChAgogdQhAgtg9gPIgpgIQgZgFgPgFQgTgHghgVIgVgMQgDgBhRiBQhRh/gEgBQAygIBbAcQA1ARBxAqQBjAiA2ADQBGAFAdgvIgCAJQgEALgSAXQgPAUgCAPQgDANAFAVQAYBoBDBGQAYAWAiAZQAUAOAsAbQAvAdAdAMQAVAHAQALQAHAFAGAGQAnAiAsAYQAzAdARAdQAKASgCAUQgBAUgKASQgIAPgRAEQgGACgJAAIgRgCg");
	this.shape_17.setTransform(693.7,773.2,1,1,-59.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6,p:{x:375.4}}]},5).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_6,p:{x:422.8}}]},5).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.shape_14,p:{rotation:0,x:505.6,y:699.5,regX:0,regY:0}},{t:this.shape_13,p:{x:529.6,y:791.8}},{t:this.shape_12,p:{x:534.7,y:813.7,rotation:17.5}},{t:this.shape_11,p:{x:664.9,y:781.1,rotation:38.5}},{t:this.shape_10,p:{x:650,y:783.9,rotation:38.5}},{t:this.shape_9},{t:this.shape_8,p:{rotation:0,x:630.1,y:762.6}},{t:this.shape_7,p:{rotation:-20.5,x:528,y:763.3,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.shape_6,p:{rotation:0,x:521.2,y:809}},{t:this.shape_5,p:{rotation:0,x:512.1,y:838.5}},{t:this.shape_4,p:{x:681.1,y:781.2}},{t:this.shape_3,p:{x:695.3,y:828.5}},{t:this.shape_2,p:{rotation:-33.7,x:704.7,y:727.5}},{t:this.shape_1,p:{rotation:-33.7,x:725.9,y:735.3}},{t:this.shape,p:{rotation:-33.7,x:739,y:727.5}}]},5).to({state:[{t:this.shape_14,p:{rotation:-17.5,x:509.2,y:714.6,regX:0,regY:0}},{t:this.shape_13,p:{x:529.1,y:791}},{t:this.shape_12,p:{x:534.2,y:812.9,rotation:17.5}},{t:this.shape_11,p:{x:664.4,y:780.3,rotation:38.5}},{t:this.shape_10,p:{x:649.6,y:783.1,rotation:38.5}},{t:this.shape_15,p:{rotation:-5,x:605.4,y:756.1}},{t:this.shape_8,p:{rotation:-5,x:630.3,y:760.7}},{t:this.shape_7,p:{rotation:-46.5,x:530.8,y:771.8,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.shape_6,p:{rotation:-26,x:544.7,y:815.9}},{t:this.shape_5,p:{rotation:-26,x:549.4,y:846.4}},{t:this.shape_4,p:{x:671.7,y:777}},{t:this.shape_3,p:{x:685.8,y:824.3}},{t:this.shape_2,p:{rotation:-20,x:706.5,y:714.3}},{t:this.shape_1,p:{rotation:-20,x:725.2,y:726.9}},{t:this.shape,p:{rotation:-20,x:739.8,y:722.5}}]},5).to({state:[{t:this.shape_14,p:{rotation:8.5,x:491.5,y:724.3,regX:0,regY:0}},{t:this.shape_13,p:{x:528.4,y:787.9}},{t:this.shape_12,p:{x:549.5,y:817.4,rotation:4.8}},{t:this.shape_11,p:{x:663.7,y:777.2,rotation:38.5}},{t:this.shape_10,p:{x:648.8,y:780,rotation:38.5}},{t:this.shape_15,p:{rotation:-16.7,x:579.4,y:763.3}},{t:this.shape_8,p:{rotation:-16.7,x:604.8,y:762.8}},{t:this.shape_7,p:{rotation:-102.1,x:537.7,y:806.4,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.shape_6,p:{rotation:-81.7,x:581.9,y:819.8}},{t:this.shape_5,p:{rotation:-81.7,x:609.8,y:833}},{t:this.shape_4,p:{x:655.2,y:773}},{t:this.shape_3,p:{x:669.4,y:820.3}},{t:this.shape_2,p:{rotation:-14.8,x:669.5,y:707.1}},{t:this.shape_1,p:{rotation:-14.8,x:687.1,y:721.3}},{t:this.shape,p:{rotation:-14.8,x:702,y:718.2}}]},5).to({state:[{t:this.shape_14,p:{rotation:8.2,x:517.7,y:764.8,regX:0,regY:0}},{t:this.shape_12,p:{x:561.2,y:820,rotation:4.8}},{t:this.shape_11,p:{x:675.4,y:779.8,rotation:38.5}},{t:this.shape_10,p:{x:660.5,y:782.6,rotation:38.5}},{t:this.shape_15,p:{rotation:-38.9,x:610.7,y:782}},{t:this.shape_8,p:{rotation:-38.9,x:634,y:771.9}},{t:this.shape_7,p:{rotation:0,x:575.5,y:838.2,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.9,y:835.2}},{t:this.shape_4,p:{x:649.3,y:781.2}},{t:this.shape_3,p:{x:663.5,y:828.5}},{t:this.shape_2,p:{rotation:1.7,x:685.5,y:697.6}},{t:this.shape_1,p:{rotation:1.7,x:698.3,y:716.2}},{t:this.shape,p:{rotation:1.7,x:713.5,y:717.5}}]},6).to({state:[{t:this.shape_14,p:{rotation:8.4,x:544.8,y:804.6,regX:32.6,regY:35.5}},{t:this.shape_12,p:{x:561.2,y:820,rotation:4.8}},{t:this.shape_11,p:{x:667.8,y:771.7,rotation:5.5}},{t:this.shape_10,p:{x:656.8,y:782.1,rotation:5.5}},{t:this.shape_15,p:{rotation:-38.9,x:610.7,y:782}},{t:this.shape_8,p:{rotation:-38.9,x:634,y:771.9}},{t:this.shape_7,p:{rotation:0,x:575.5,y:838.2,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.9,y:835.2}},{t:this.shape_4,p:{x:649.3,y:781.2}},{t:this.shape_3,p:{x:663.5,y:828.5}},{t:this.shape_2,p:{rotation:1.7,x:685.5,y:697.6}},{t:this.shape_1,p:{rotation:1.7,x:698.3,y:716.2}},{t:this.shape,p:{rotation:1.7,x:713.5,y:717.5}}]},7).to({state:[{t:this.shape_14,p:{rotation:8.2,x:517.7,y:764.8,regX:0,regY:0}},{t:this.shape_12,p:{x:561.2,y:820,rotation:4.8}},{t:this.shape_11,p:{x:679.4,y:764,rotation:-23}},{t:this.shape_10,p:{x:674.8,y:778.3,rotation:-23}},{t:this.shape_15,p:{rotation:-38.9,x:610.7,y:782}},{t:this.shape_8,p:{rotation:-38.9,x:634,y:771.9}},{t:this.shape_7,p:{rotation:0,x:575.5,y:838.2,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.9,y:835.2}},{t:this.shape_4,p:{x:649.3,y:781.2}},{t:this.shape_3,p:{x:663.5,y:828.5}},{t:this.shape_2,p:{rotation:8.9,x:685.9,y:697.3}},{t:this.shape_1,p:{rotation:8.9,x:696.2,y:717.4}},{t:this.shape,p:{rotation:8.9,x:711.1,y:720.6}}]},5).to({state:[{t:this.shape_14,p:{rotation:1.2,x:511.7,y:768.7,regX:0,regY:0}},{t:this.shape_12,p:{x:561.2,y:820,rotation:4.8}},{t:this.shape_11,p:{x:696.1,y:754.5,rotation:-59.1}},{t:this.shape_17,p:{rotation:-59.1,x:693.7,y:773.2}},{t:this.shape_15,p:{rotation:-38.9,x:610.7,y:782}},{t:this.shape_8,p:{rotation:-38.9,x:634,y:771.9}},{t:this.shape_7,p:{rotation:0,x:575.5,y:838.2,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.9,y:835.2}},{t:this.shape_4,p:{x:649.3,y:781.2}},{t:this.shape_3,p:{x:663.5,y:828.5}},{t:this.shape_2,p:{rotation:-2,x:685.1,y:697.7}},{t:this.shape_1,p:{rotation:-2,x:699.1,y:715.4}},{t:this.shape,p:{rotation:-2,x:714.4,y:715.7}}]},4).to({state:[{t:this.shape_14,p:{rotation:-0.5,x:542.7,y:802.8,regX:30.2,regY:34.1}},{t:this.shape_12,p:{x:561.2,y:820,rotation:4.8}},{t:this.shape_11,p:{x:685.2,y:753.8,rotation:-72.3}},{t:this.shape_17,p:{rotation:-72.3,x:687.2,y:772.6}},{t:this.shape_15,p:{rotation:-38.9,x:610.7,y:782}},{t:this.shape_8,p:{rotation:-38.9,x:634,y:771.9}},{t:this.shape_7,p:{rotation:0,x:575.5,y:838.2,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.9,y:835.2}},{t:this.shape_4,p:{x:649.3,y:781.2}},{t:this.shape_3,p:{x:663.5,y:828.5}},{t:this.shape_2,p:{rotation:7.9,x:685.5,y:697.2}},{t:this.shape_1,p:{rotation:7.9,x:696.2,y:717.1}},{t:this.shape,p:{rotation:7.9,x:711.2,y:720}}]},5).to({state:[{t:this.shape_14,p:{rotation:-0.8,x:542.6,y:803.8,regX:30.3,regY:35.1}},{t:this.shape_12,p:{x:561.2,y:820,rotation:4.8}},{t:this.shape_11,p:{x:689.7,y:754,rotation:-57.9}},{t:this.shape_17,p:{rotation:-57.9,x:686.9,y:772.7}},{t:this.shape_15,p:{rotation:-38.9,x:610.7,y:782}},{t:this.shape_8,p:{rotation:-38.9,x:634,y:771.9}},{t:this.shape_7,p:{rotation:0,x:575.5,y:838.2,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.9,y:835.2}},{t:this.shape_4,p:{x:649.3,y:781.2}},{t:this.shape_3,p:{x:663.5,y:828.5}},{t:this.shape_2,p:{rotation:7.9,x:685.5,y:697.2}},{t:this.shape_1,p:{rotation:7.9,x:696.2,y:717.1}},{t:this.shape,p:{rotation:7.9,x:711.2,y:720}}]},5).to({state:[{t:this.shape_14,p:{rotation:8.2,x:517.7,y:764.8,regX:0,regY:0}},{t:this.shape_12,p:{x:561.2,y:820,rotation:4.8}},{t:this.shape_11,p:{x:695.5,y:756.5,rotation:-36.2}},{t:this.shape_17,p:{rotation:-36.2,x:686,y:772.9}},{t:this.shape_15,p:{rotation:-38.9,x:610.7,y:782}},{t:this.shape_8,p:{rotation:-38.9,x:634,y:771.9}},{t:this.shape_7,p:{rotation:0,x:575.5,y:838.2,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.9,y:835.2}},{t:this.shape_4,p:{x:649.3,y:781.2}},{t:this.shape_3,p:{x:663.5,y:828.5}},{t:this.shape_2,p:{rotation:7.9,x:685.5,y:697.2}},{t:this.shape_1,p:{rotation:7.9,x:696.2,y:717.1}},{t:this.shape,p:{rotation:7.9,x:711.2,y:720}}]},3).to({state:[{t:this.shape_14,p:{rotation:8.2,x:517.7,y:764.8,regX:0,regY:0}},{t:this.shape_12,p:{x:561.2,y:820,rotation:4.8}},{t:this.shape_11,p:{x:676.3,y:765.5,rotation:-35.4}},{t:this.shape_17,p:{rotation:-35.4,x:666.6,y:781.8}},{t:this.shape_15,p:{rotation:-38.9,x:610.7,y:782}},{t:this.shape_8,p:{rotation:-38.9,x:634,y:771.9}},{t:this.shape_7,p:{rotation:0,x:575.5,y:838.2,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.9,y:835.2}},{t:this.shape_4,p:{x:649.3,y:781.2}},{t:this.shape_3,p:{x:663.5,y:828.5}},{t:this.shape_2,p:{rotation:7.9,x:685.5,y:697.2}},{t:this.shape_1,p:{rotation:7.9,x:696.2,y:717.1}},{t:this.shape,p:{rotation:7.9,x:711.2,y:720}}]},3).to({state:[{t:this.shape_14,p:{rotation:8.2,x:517.9,y:764,regX:0,regY:0}},{t:this.shape_12,p:{x:561.4,y:819.3,rotation:4.8}},{t:this.shape_11,p:{x:679.6,y:763.2,rotation:-23}},{t:this.shape_10,p:{x:675,y:777.6,rotation:-23}},{t:this.shape_15,p:{rotation:-38.9,x:610.9,y:781.2}},{t:this.shape_8,p:{rotation:-38.9,x:634.2,y:771.2}},{t:this.shape_7,p:{rotation:0,x:575.7,y:837.5,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:622.1,y:834.5}},{t:this.shape_4,p:{x:649.5,y:780.4}},{t:this.shape_3,p:{x:663.7,y:827.7}},{t:this.shape_2,p:{rotation:8.9,x:686.1,y:696.6}},{t:this.shape_1,p:{rotation:8.9,x:696.4,y:716.7}},{t:this.shape,p:{rotation:8.9,x:711.3,y:719.8}}]},5).to({state:[{t:this.shape_14,p:{rotation:8.4,x:544.7,y:804.4,regX:32.6,regY:35.5}},{t:this.shape_12,p:{x:561.1,y:819.8,rotation:4.8}},{t:this.shape_11,p:{x:667.7,y:771.5,rotation:5.5}},{t:this.shape_10,p:{x:656.7,y:781.9,rotation:5.5}},{t:this.shape_15,p:{rotation:-38.9,x:610.6,y:781.8}},{t:this.shape_8,p:{rotation:-38.9,x:633.9,y:771.7}},{t:this.shape_7,p:{rotation:0,x:575.4,y:838,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.8,y:835}},{t:this.shape_4,p:{x:649.2,y:781}},{t:this.shape_3,p:{x:663.4,y:828.3}},{t:this.shape_2,p:{rotation:17.7,x:686.2,y:696.8}},{t:this.shape_1,p:{rotation:17.7,x:693.4,y:718.2}},{t:this.shape,p:{rotation:17.7,x:707.6,y:723.7}}]},3).to({state:[{t:this.shape_14,p:{rotation:3.7,x:544.6,y:804.4,regX:32.6,regY:35.5}},{t:this.shape_12,p:{x:561.1,y:819.8,rotation:4.8}},{t:this.shape_11,p:{x:667.7,y:771.5,rotation:5.5}},{t:this.shape_10,p:{x:656.7,y:781.9,rotation:5.5}},{t:this.shape_15,p:{rotation:-38.9,x:610.6,y:781.8}},{t:this.shape_8,p:{rotation:-38.9,x:633.9,y:771.7}},{t:this.shape_7,p:{rotation:0,x:575.4,y:838,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.8,y:835}},{t:this.shape_4,p:{x:649.2,y:781}},{t:this.shape_3,p:{x:663.4,y:828.3}},{t:this.shape_2,p:{rotation:17.7,x:686.2,y:696.8}},{t:this.shape_1,p:{rotation:17.7,x:693.4,y:718.2}},{t:this.shape,p:{rotation:17.7,x:707.6,y:723.7}}]},11).to({state:[{t:this.shape_14,p:{rotation:8.2,x:517.9,y:764.5,regX:0,regY:0}},{t:this.shape_12,p:{x:561.5,y:819.8,rotation:4.8}},{t:this.shape_11,p:{x:679.6,y:763.7,rotation:-23}},{t:this.shape_10,p:{x:675,y:778.1,rotation:-23}},{t:this.shape_15,p:{rotation:-38.9,x:611,y:781.7}},{t:this.shape_8,p:{rotation:-38.9,x:634.3,y:771.7}},{t:this.shape_7,p:{rotation:0,x:575.7,y:838,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:622.1,y:835}},{t:this.shape_4,p:{x:649.6,y:780.9}},{t:this.shape_3,p:{x:663.7,y:828.2}},{t:this.shape_2,p:{rotation:18.4,x:686.3,y:696.6}},{t:this.shape_1,p:{rotation:18.4,x:693.2,y:718.2}},{t:this.shape,p:{rotation:18.4,x:707.4,y:723.7}}]},14).to({state:[{t:this.shape_14,p:{rotation:1.2,x:543,y:801.5,regX:30,regY:33}},{t:this.shape_12,p:{x:561.5,y:819.8,rotation:4.8}},{t:this.shape_11,p:{x:679.6,y:763.7,rotation:-23}},{t:this.shape_10,p:{x:675,y:778.1,rotation:-23}},{t:this.shape_15,p:{rotation:-38.9,x:611,y:781.7}},{t:this.shape_8,p:{rotation:-38.9,x:634.3,y:771.7}},{t:this.shape_7,p:{rotation:0,x:575.7,y:838,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:622.1,y:835}},{t:this.shape_4,p:{x:649.6,y:780.9}},{t:this.shape_3,p:{x:663.7,y:828.2}},{t:this.shape_2,p:{rotation:18.4,x:686.3,y:696.6}},{t:this.shape_1,p:{rotation:18.4,x:693.2,y:718.2}},{t:this.shape,p:{rotation:18.4,x:707.4,y:723.7}}]},6).to({state:[{t:this.shape_14,p:{rotation:1.2,x:511.7,y:768.7,regX:0,regY:0}},{t:this.shape_12,p:{x:561.2,y:820,rotation:4.8}},{t:this.shape_11,p:{x:683.1,y:761.3,rotation:-59.1}},{t:this.shape_17,p:{rotation:-59.1,x:680.7,y:780.1}},{t:this.shape_15,p:{rotation:-38.9,x:610.7,y:782}},{t:this.shape_8,p:{rotation:-38.9,x:634,y:771.9}},{t:this.shape_7,p:{rotation:0,x:575.5,y:838.2,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.9,y:835.2}},{t:this.shape_4,p:{x:649.3,y:781.2}},{t:this.shape_3,p:{x:663.5,y:828.5}},{t:this.shape_2,p:{rotation:-2,x:685.1,y:697.7}},{t:this.shape_1,p:{rotation:-2,x:699.1,y:715.4}},{t:this.shape,p:{rotation:-2,x:714.4,y:715.7}}]},7).to({state:[{t:this.shape_14,p:{rotation:-0.5,x:542.7,y:802.8,regX:30.2,regY:34.1}},{t:this.shape_12,p:{x:561.2,y:820,rotation:4.8}},{t:this.shape_11,p:{x:685.2,y:753.8,rotation:-72.3}},{t:this.shape_17,p:{rotation:-72.3,x:687.2,y:772.6}},{t:this.shape_15,p:{rotation:-38.9,x:610.7,y:782}},{t:this.shape_8,p:{rotation:-38.9,x:634,y:771.9}},{t:this.shape_7,p:{rotation:0,x:575.5,y:838.2,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.9,y:835.2}},{t:this.shape_4,p:{x:649.3,y:781.2}},{t:this.shape_3,p:{x:663.5,y:828.5}},{t:this.shape_2,p:{rotation:7.9,x:685.5,y:697.2}},{t:this.shape_1,p:{rotation:7.9,x:696.2,y:717.1}},{t:this.shape,p:{rotation:7.9,x:711.2,y:720}}]},5).to({state:[{t:this.shape_14,p:{rotation:-0.8,x:542.6,y:803.8,regX:30.3,regY:35.1}},{t:this.shape_12,p:{x:561.2,y:820,rotation:4.8}},{t:this.shape_11,p:{x:689.7,y:754,rotation:-57.9}},{t:this.shape_17,p:{rotation:-57.9,x:686.9,y:772.7}},{t:this.shape_15,p:{rotation:-38.9,x:610.7,y:782}},{t:this.shape_8,p:{rotation:-38.9,x:634,y:771.9}},{t:this.shape_7,p:{rotation:0,x:575.5,y:838.2,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.9,y:835.2}},{t:this.shape_4,p:{x:649.3,y:781.2}},{t:this.shape_3,p:{x:663.5,y:828.5}},{t:this.shape_2,p:{rotation:7.9,x:685.5,y:697.2}},{t:this.shape_1,p:{rotation:7.9,x:696.2,y:717.1}},{t:this.shape,p:{rotation:7.9,x:711.2,y:720}}]},5).to({state:[{t:this.shape_14,p:{rotation:8.2,x:517.7,y:764.8,regX:0,regY:0}},{t:this.shape_12,p:{x:561.2,y:820,rotation:4.8}},{t:this.shape_11,p:{x:695.5,y:756.5,rotation:-36.2}},{t:this.shape_17,p:{rotation:-36.2,x:686,y:772.9}},{t:this.shape_15,p:{rotation:-38.9,x:610.7,y:782}},{t:this.shape_8,p:{rotation:-38.9,x:634,y:771.9}},{t:this.shape_7,p:{rotation:0,x:575.5,y:838.2,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.9,y:835.2}},{t:this.shape_4,p:{x:649.3,y:781.2}},{t:this.shape_3,p:{x:663.5,y:828.5}},{t:this.shape_2,p:{rotation:7.9,x:685.5,y:697.2}},{t:this.shape_1,p:{rotation:7.9,x:696.2,y:717.1}},{t:this.shape,p:{rotation:7.9,x:711.2,y:720}}]},3).to({state:[{t:this.shape_14,p:{rotation:8.2,x:517.7,y:764.8,regX:0,regY:0}},{t:this.shape_12,p:{x:561.2,y:820,rotation:4.8}},{t:this.shape_11,p:{x:676.3,y:765.5,rotation:-35.4}},{t:this.shape_17,p:{rotation:-35.4,x:666.6,y:781.8}},{t:this.shape_15,p:{rotation:-38.9,x:610.7,y:782}},{t:this.shape_8,p:{rotation:-38.9,x:634,y:771.9}},{t:this.shape_7,p:{rotation:0,x:575.5,y:838.2,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.9,y:835.2}},{t:this.shape_4,p:{x:649.3,y:781.2}},{t:this.shape_3,p:{x:663.5,y:828.5}},{t:this.shape_2,p:{rotation:7.9,x:685.5,y:697.2}},{t:this.shape_1,p:{rotation:7.9,x:696.2,y:717.1}},{t:this.shape,p:{rotation:7.9,x:711.2,y:720}}]},3).to({state:[{t:this.shape_14,p:{rotation:8.2,x:517.9,y:764,regX:0,regY:0}},{t:this.shape_12,p:{x:561.4,y:819.3,rotation:4.8}},{t:this.shape_11,p:{x:679.6,y:763.2,rotation:-23}},{t:this.shape_10,p:{x:675,y:777.6,rotation:-23}},{t:this.shape_15,p:{rotation:-38.9,x:610.9,y:781.2}},{t:this.shape_8,p:{rotation:-38.9,x:634.2,y:771.2}},{t:this.shape_7,p:{rotation:0,x:575.7,y:837.5,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:622.1,y:834.5}},{t:this.shape_4,p:{x:649.5,y:780.4}},{t:this.shape_3,p:{x:663.7,y:827.7}},{t:this.shape_2,p:{rotation:8.9,x:686.1,y:696.6}},{t:this.shape_1,p:{rotation:8.9,x:696.4,y:716.7}},{t:this.shape,p:{rotation:8.9,x:711.3,y:719.8}}]},5).to({state:[{t:this.shape_14,p:{rotation:8.4,x:544.7,y:804.4,regX:32.6,regY:35.5}},{t:this.shape_12,p:{x:561.1,y:819.8,rotation:4.8}},{t:this.shape_11,p:{x:667.7,y:771.5,rotation:5.5}},{t:this.shape_10,p:{x:656.7,y:781.9,rotation:5.5}},{t:this.shape_15,p:{rotation:-38.9,x:610.6,y:781.8}},{t:this.shape_8,p:{rotation:-38.9,x:633.9,y:771.7}},{t:this.shape_7,p:{rotation:0,x:575.4,y:838,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.8,y:835}},{t:this.shape_4,p:{x:649.2,y:781}},{t:this.shape_3,p:{x:663.4,y:828.3}},{t:this.shape_2,p:{rotation:17.7,x:686.2,y:696.8}},{t:this.shape_1,p:{rotation:17.7,x:693.4,y:718.2}},{t:this.shape,p:{rotation:17.7,x:707.6,y:723.7}}]},3).to({state:[{t:this.shape_14,p:{rotation:-1.5,x:544.6,y:804.5,regX:32.6,regY:35.6}},{t:this.shape_12,p:{x:561.1,y:819.8,rotation:4.8}},{t:this.shape_11,p:{x:667.7,y:771.5,rotation:5.5}},{t:this.shape_10,p:{x:656.7,y:781.9,rotation:5.5}},{t:this.shape_15,p:{rotation:-38.9,x:610.6,y:781.8}},{t:this.shape_8,p:{rotation:-38.9,x:633.9,y:771.7}},{t:this.shape_7,p:{rotation:0,x:575.4,y:838,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.8,y:835}},{t:this.shape_4,p:{x:649.2,y:781}},{t:this.shape_3,p:{x:663.4,y:828.3}},{t:this.shape_2,p:{rotation:17.7,x:686.2,y:696.8}},{t:this.shape_1,p:{rotation:17.7,x:693.4,y:718.2}},{t:this.shape,p:{rotation:17.7,x:707.6,y:723.7}}]},9).to({state:[{t:this.shape_14,p:{rotation:-7.2,x:544.7,y:804.5,regX:32.6,regY:35.6}},{t:this.shape_12,p:{x:561.1,y:819.8,rotation:4.8}},{t:this.shape_11,p:{x:667.7,y:771.5,rotation:5.5}},{t:this.shape_10,p:{x:656.7,y:781.9,rotation:5.5}},{t:this.shape_15,p:{rotation:-38.9,x:610.6,y:781.8}},{t:this.shape_8,p:{rotation:-38.9,x:633.9,y:771.7}},{t:this.shape_7,p:{rotation:0,x:575.4,y:838,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.8,y:835}},{t:this.shape_4,p:{x:649.2,y:781}},{t:this.shape_3,p:{x:663.4,y:828.3}},{t:this.shape_2,p:{rotation:17.7,x:686.2,y:696.8}},{t:this.shape_1,p:{rotation:17.7,x:693.4,y:718.2}},{t:this.shape,p:{rotation:17.7,x:707.6,y:723.7}}]},7).to({state:[{t:this.shape_14,p:{rotation:0.7,x:544.6,y:804.5,regX:32.6,regY:35.6}},{t:this.shape_12,p:{x:561.1,y:819.8,rotation:4.8}},{t:this.shape_11,p:{x:667.7,y:771.5,rotation:5.5}},{t:this.shape_10,p:{x:656.7,y:781.9,rotation:5.5}},{t:this.shape_15,p:{rotation:-38.9,x:610.6,y:781.8}},{t:this.shape_8,p:{rotation:-38.9,x:633.9,y:771.7}},{t:this.shape_7,p:{rotation:0,x:575.4,y:838,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:621.8,y:835}},{t:this.shape_4,p:{x:649.2,y:781}},{t:this.shape_3,p:{x:663.4,y:828.3}},{t:this.shape_2,p:{rotation:17.7,x:686.2,y:696.8}},{t:this.shape_1,p:{rotation:17.7,x:693.4,y:718.2}},{t:this.shape,p:{rotation:17.7,x:707.6,y:723.7}}]},6).to({state:[{t:this.shape_14,p:{rotation:8.2,x:517.9,y:764.5,regX:0,regY:0}},{t:this.shape_12,p:{x:561.5,y:819.8,rotation:4.8}},{t:this.shape_11,p:{x:665.4,y:770.6,rotation:2.5}},{t:this.shape_10,p:{x:655.1,y:781.6,rotation:2.5}},{t:this.shape_15,p:{rotation:-38.9,x:611,y:781.7}},{t:this.shape_8,p:{rotation:-38.9,x:634.3,y:771.7}},{t:this.shape_7,p:{rotation:0,x:575.7,y:838,scaleX:1.158,scaleY:0.936,skewX:-134.6,skewY:-129.1}},{t:this.shape_16,p:{x:622.1,y:835}},{t:this.shape_4,p:{x:649.6,y:780.9}},{t:this.shape_3,p:{x:663.7,y:828.2}},{t:this.shape_2,p:{rotation:17.4,x:686.2,y:696.5}},{t:this.shape_1,p:{rotation:17.4,x:693.4,y:717.9}},{t:this.shape,p:{rotation:17.4,x:707.7,y:723.2}}]},6).wait(12));

	// fone frente
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#94D3EC").ss(2.8,1).p("AAjD8IhGn3");
	this.shape_18.setTransform(330.9,692.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2E97D4").s().p("AAiD2QgcgUgNAHQgTAKgOgEQgbgIgQgkQgPghgUhcQgShOAEhbQADhLAMggQAIgVBSgTQAogKAngFIBSH/QgMAHgTAEIgRABQgbAAgZgQg");
	this.shape_19.setTransform(327.6,692.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#55B5D3").s().p("Ag5goQgIgfgDgXQgBgTACgmIADg5IAIgBQAsgHApATQgfAHgdATIAwAVQgWAKgOAUQAHABADAIQACAIgDAIIgGAOQgDAJABAGQABAGAJAMQAIAKgBAHQAAAFgFAIQgFAJAAAEQgBALAaAJQAcAKAAAMQABAOgYAMQgKAFgFAHQgEAJACAHQACAEAKAGQAIAFACAFQACAIgPALQgNALABAIIAOAHQgGAMACANQAegMAeAIQgdATglAPg");
	this.shape_20.setTransform(340,691.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8CCFDF").s().p("AgLD+IhOnxIAigKQAogFAaAWQAcAWAOBlQAIA3AKBfIASBpQAFA3gWAbQgVAagiAFg");
	this.shape_21.setTransform(341.9,690.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#72C7DF").s().p("AhWBMIBJi+IBkAnIhJC+g");
	this.shape_22.setTransform(329.6,645.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#35A6DE").ss(9.5).p("AgbBlQAWhaAnhL");
	this.shape_23.setTransform(334,629.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#95D5F6").ss(14.2,1).p("AgMApQALgrAOgm");
	this.shape_24.setTransform(334.9,635.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#94D3EC").ss(9.5,1).p("AgTBjIgThwIA/gaIATg7");
	this.shape_25.setTransform(322.7,661);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},5).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},6).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},6).wait(211));

	// nome
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C2184F").s().p("AhMCFIAAkJICZAAIAAASIiHAAIAABqIBJAAIAAAQIhJAAIAABrICHAAIAAASg");
	this.shape_26.setTransform(737.6,498.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C2184F").s().p("AgICFIAAj3IhKAAIAAgSIClAAIAAASIhLAAIAAD3g");
	this.shape_27.setTransform(714.3,498.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C2184F").s().p("AgICFIAAkJIARAAIAAEJg");
	this.shape_28.setTransform(697.9,498.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C2184F").s().p("AgYCFIgmgNIgegeIAgAAIAOANIAXAMIAvAAIAlgMIAKgLIAAgkIgMgYIgMgLIgYgNIg8gXIgZgMIgOgOIgNgZIAAgbIAbgbIAmgMIAxAAIAmAMIAfAfIghAAIgOgNIgXgMIgvAAIglAMIgLALIAAAXIAMAYIAYAMIA9AZIAZAKIAaAaIAMAaIAAAnIgaAaIgmANg");
	this.shape_29.setTransform(679.6,498.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C2184F").s().p("AhTCFIAAkJIBmAAIAmAMIAOANIANAbIAAAmIgNAbIgOANIgLACIALADIAOANIANAaIAAAnIgNAaIgOANIgmANgAhABzIBSAAIAjgMIANgXIAAgkIgNgXIgjgNIhSAAgAhAgIIBSAAIAjgMIANgXIAAgkIgNgXIgjgMIhSAAg");
	this.shape_30.setTransform(655.1,498.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C2184F").s().p("AhMCFIAAkJICZAAIAAASIiHAAIAABqIBJAAIAAAQIhJAAIAABrICHAAIAAASg");
	this.shape_31.setTransform(630.5,498.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C2184F").s().p("AA8CFIg8jWIg7DWIgEAAIhNkJIATAAIA8DWIA8jWIADAAIA8DWIA8jWIATAAIhNEJg");
	this.shape_32.setTransform(601.6,498.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#EFD1E4","#E5B5D3","#CC6FA9","#C3569A"],[0,0.259,0.816,1],-67.1,0,67.2,0).s().p("EgD4AgfQhpgDgqhgQgshkgGiMQgFhlAQiRQAajlBfk1QBAjQBOjLQhcimh6itQhciCguhKQhHhygphnQhYjeATkyQARkVA+jsQBHkOB/jPQCTjvC5hLQBfgnBnAKQBsALBNA+QBDA2AZBkQARBHgDBwQgCBsgkCHQgMAsg9C/QixIsjSHxQgMAbgfgNQgggOAKgcQAyiFAviJQCJmSAriFIBVkIQAwiXAbh0QAYhkgEh2QgCg4gEgeQgIgygTgfQgyhSh2gEQhmgEhXAyQhiA4hTBwQg/BWg9CCQhiDQgzEgQgbCWgJB4QgLCTANB9QANB+AxB9QAsBvBMB2QAjA1BsCaQBaCBAxBRIAIAPQBYjUBljMQCAkBB7jKQCSjwCai9QAbghAlAdQAlAdgXAjIiNDVQkvHQjIG9Qg4B/gvB5QBTCkBBCxQBVDpAYC5QAeDvhCC8QgiBgg9BMQg+BPhTAzQhbA3hTAAIgIAAgAkgUYQggCUgJB2QgLCTAVB5QAKA8AJAWQAUAwAnABQBOACBlhYQCNh8AXjlQASizg4jcQg5jhhtjkQh8FMg+Emg");
	this.shape_33.setTransform(151.6,207.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#F19CC2","#CD1348"],[0,1],-4.3,0,4.3,0).s().p("AgqAAQAAgrAqAAQAqAAAAArQAAAsgqAAQgqAAAAgsg");
	this.shape_34.setTransform(278.8,70.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#C3569A","#C35599","#C8316D","#CC1B52","#CD1348","#CD154C","#CC1A59","#CC1C5E"],[0,0.012,0.451,0.792,0.996,0.996,1,1],-150.9,0,148.3,0).s().p("ApXMBQgyhBgBhLQgBhKAvhEQAyhHBHgmIAIgEQgEhxg5hqQkKDrjSEPQgQAVgcgMQgbgNABgZQAJkLA8jbQhzBohmB7QiKClhrC/QgJASgSgLQgSgKAJgSQBii2CTi1QB4iWCviuQASgSAWAOQAWANgGAYQgmCfgUCAQgNBVgHBPQC/jmD3jUQAQgOASADQATACAMARQBUCDALCPQAfgIAkgFQCIgSAmgIIAegHQAZhKAkhBQBHiEBshMQAMgIARAGQASAHACAPQAMBJgIA6QgJBHgoAzQg8BPiBAwQgSA9gKBEQgIAygBAXQgCAsAKAdQAFAOANAQQARAVAQAEQAWAEAcgRQARgLAagWQC8ihCykIQAIhSAPhVQAtj+Bfj/QAZhEATgqQAag8AdgtQAbgrAagWQAigfApgEQAMgBAMAJQAMAKADAMQAMA0gIBIQgFAogSBTQglCqhGCrQhMC6iODJQgJBbgBBZQgBBcAHBNQADAiABAHQAEAYAJAPQAWAkBCg0QARgOBBhCQBOhNA4hBQABhHAVhKQA3i+Cih+QAUgQAWAJQAVAIACAaQANCNhfCgQgxBThcBoQAJA1AVA1QAQAnASAWQAYAdAhAIQAmAJAwgXQAYgLA0gkQChhuBah2QAaghAlAUQAlAVgXAlQg5BhhSBNQhTBOhjAyQhxA5hQgaQgpgNghgeQgggcgTgoQgag2gNg2Qh/CHg4AmQiPBjhEhxQgdgxgGhYQgBgQABh/IAChFIgaAgQgwA7hABFIh1B7Qg5A8glAYQg+Aqg3gNQiXgkA7kkIALgyQgtAJhGAKQhRALg1AUIgBAHQgOC7iECZQgKALgSABQgUAAgJgMgAomIqQggA+ARA0QBBhcAShqQgrAjgZAxgAOPEHQgHAZgFAZQAtg8AbgsQArhJARhEQhTBRglBygAgSDbQgMAYgKAZQAZgMAUgOQBohEgDiCQhKBFgyBqgALqqHQgIANgcA5QgoBRgsCHQhEDTgiC5IAnhDQBHiEAsh+QAuiIAZh6QANhDADgXQACgUABgTQgLAMgLASg");
	this.shape_35.setTransform(366.4,101.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#C1174A","#92143A","#6E112E"],[0,0.588,1],-61.3,0,62,0).s().p("ApjBxQgbgCAAgbQAAgbAbAAQEsAFFVg1QCxgaCSgmQBMgTBOgXIA8gTQAlgHAWAPQASAMgGASQgHAdgkASQgKAEg2ASQhCAUhXAUQiXAiiyAYQjmAejiAAQhnAAhlgGg");
	this.shape_36.setTransform(772.5,315.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#C3569A","#C44F91","#C73C7A","#CC1D54","#CD1348","#C91449","#BC164C","#AC1950"],[0,0.192,0.502,0.886,0.996,0.996,1,1],-67.4,0,67.4,0).s().p("EgEmAgQQhqgFg4hMQgfgrgLhFQgHgmgChTQgEh9AViZQASh8AniOQAehxAyiUQBDjHBQjAQhbiuh9i8QhXiEgshMQhEh3gkhqQhLjeAdkvQA7pWD3l1QCbjqC8hEQBfgjBoARQBrAQBMBDQBBA4AUBkQAPBKgIBtQgIBrgoCGQgNAqhDDAQjBIojbHiQgMAbgggNQgfgOALgcQA6iSAqhwQCZmbAohvQBrkpBEjpQAehrAChsQABg3gDgiQgGgzgRgjQgshYh6gLQhsgKhXAxQhhA0hTBoQhABRg/B6QhqDMg9EfQggCUgNB4QgQCRAHB+QAODxCTD3QAnBABkCXQBbCJAtBRIANAXQBfjVBsjOQCIj7B+jEQCYjqCdi3QAbggAlAdQAlAdgXAiIiTDSQmPI/jwIzQBOCeA5CsQBQDqAWC5QAbDvhBC6QghBfg4BMQg7BShQAuQhSAvhYAAIgMAAgAlPUAQhOEyAYDwQAFA7AWAeQAaAkA3AAQBYAABRhKQCFh9AYjhQASixg0jZQgyjehnjiQh3ErhKEog");
	this.shape_37.setTransform(351.5,448.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#C1174A","#BE1749","#B41646","#A41540","#8D1339","#70112F","#6E112E"],[0,0.271,0.475,0.659,0.831,0.992,1],-230.5,0,229.1,0).s().p("ATBLSQgkgSgRg1QgGgSgNhIQgkjFAdjuIgOAdQg/CIgoBMQg9B0g9BWQh9Cxhcg7QgjgXgNgzQgIgcgEg+QgFhOAAhmQgbBAgeBAQgbA4gOAaQgXAtgYAhQgWAfgQAOQgaAYgbgDQghgDgKgeQgahJAHhlQAEhLAYhiQAUhQAlg+QhCA6hcB8QgWAdhQB/Qg+BhgwA0QguAygngXQgmgXABhFQAIhNABgaIAEiGQgBhPgRg1IgHgOIgEgJIgPALQghAagiAvIg3BTQg6BahlCzQgRAeghgOQgggOAJggQA6i8AhiXQAQhDAJg2IgGAGQgVAYgmAxIh5CiQhCBdgkAuQg+BQg4ArQgiAbggAHQgpAJgagcQgYgYgJgtQgGgeAAgvQAAgmADgqQglBIgPAaQgqBDgrAkQguAmglgaQgigYgDg5QgHhpAUhlQAVhrAuhQIgiAdQg4A1idDAIhNBiQguA7gmAiQgoAkgpAJQgyALgmggQg6gxAEh0QABgnAJg6IANhWQALhYgGguQgKhTg6gSIgogHQgnBvg7BoQiIDyjfCqQgVARgTgYQgSgZAUgQQDJilB/jnQA1hhAkhkQg8gOghgiQhEhFBZhdQAvgxBvhDQATgMAXAMQAWAMgCAXQgNB3ggBtIARACQBuAVAbB3QATBRgUCGQgQBmACBCQAFB9BGg2QAigaAogxIBBhUIBThkQAyg9AiglQBhhsBXg7QBwhLB1gKQAigEADAhQABAKgDAJQAJgBAKADQAmAKgLAlIgEARQgjB9gTB0QgPBVgDAkQgHBIANAxQAEAQAFAKIACgCIAhgYQAUgPALgMQAbgbAggpIA2hHIBwiWQBDhaAvg6IAqgzQAbgeAYgLQAegOAXAQQAVARAAAgQAAA1gQBJQgIArgVBRIgCAIIAcgsQAshCARgVQAmgxAngXQBWgyAlBjQAXA+AABnQABBGgIBoIgGAuQgCAaADARQAOgRAMgVIB1i3QBGhuA3hDQBMhdBdg3QBthABoAEQAfABAFAgIABAJIAAAAQAmAFgBAmIgCDfQAAB/AHBfQAEAqAEAMIAHAPIAAABIACgBQACABAFgDIAFgDIAHgGQASgQAUgaQAtg8AyhXQBeikBykDQBfjZBQjWIAuh5IACgEIAlh4QAIgYAUgJQATgJAVAGQAVAGALAQQAMATgGAYQgIAegLAhQgeBigyCZQg6C8geCBQhKFIAuD2IAPAzIAIAeIAIgGIAWgQQAXgXAUgbQBsiNBOjGQAghQAMhBIABgJQADgQADgHQAGgOAPgLQATgMAWAIIACgCQA2gZApgGQA2gIAqAaQBDAoASByQAFAkACAkQA1gDBCgiQBWguB5hxQAggcAgAeQAgAggfAgQjeDlitAHIgEAdQgPBngqBfQgjBSg5AsQhKA5hCg8Qg2gygOhwQgEgmAAhZQg1BqglA5Qg9BdhAA1QgtAkgmAAQgTAAgRgIgAZ2EpQgDBvACAoQAFBbAcAvIAEAHIAGAFQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIABgBIABAAIABgBIAJgGQAMgKASgcQAQgaALgbQAhhNAOhUIAEgbQgWgIgVgNQglgWgigmQgcgfgQggQgFBGgBA9gAvaCXQg5A5gbBOQghBcgFB+IgCAiQAAATABANIAKgKQAOgRAWghQAkg3AthYQBWiqAlh6IACgIQhMAfg1A1gAHpC3QgzBEgVBqQgNBDAFBrIACAfIAIgOQAkg8AqheQBMilAuiNQhOAZg0BGgAcdC/IgDgVQgJhJgegYQgLgKgVACQgJABgKAEIABABQATAlAOAVQATAbAYAWIAQANIAAAAgA9AiHQgyAjgVAjQgXAmBHATIAFABQAThEAMhFIgNAJg");
	this.shape_38.setTransform(633.7,363.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},5).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},6).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},6).wait(211));

	// CANETA TABLET
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#FFFFFF","#D5DFED","#9FB6D7","#7293C4","#4F79B5","#3566AB","#265AA4","#2156A2","#213F7B","#21224A"],[0,0.067,0.161,0.251,0.337,0.42,0.494,0.557,0.745,1],-34,-2.2,33.9,2.4).s().p("Ak1GIQABAAABAAQABAAAAgBQABAAAAAAQAAAAAAAAQgFgCACgIQANgoANgRIIkrLIAtAiIogLGQgGAIgLAHQgdAUgVADIgJABIAAAAg");
	this.shape_39.setTransform(1103.7,89.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(7).to({rotation:9.2,x:1115.4,y:87.6},0).wait(6).to({x:1107.9,y:100.6},0).wait(5).to({rotation:14.2,x:1106.1,y:112.6},0).wait(5).to({x:1091.7,y:109.6},0).wait(5).to({rotation:9,x:1084.2,y:101.1},0).wait(5).to({rotation:2.8,x:1071.7,y:98},0).wait(6).to({x:1060.4,y:90.7},0).wait(6).to({rotation:-3.5,x:1056,y:80.7},0).wait(5).to({rotation:-12.2,x:1050,y:77.5},0).wait(5).to({rotation:-26.9,x:1038.1,y:68.8},0).wait(4).to({rotation:-40.8,x:1026.6,y:66.6},0).wait(5).to({rotation:-52.8,x:1016.4,y:68.4},0).wait(5).to({rotation:-63.3,x:1001.7,y:72.9},0).wait(6).to({rotation:-76.5,x:984.8,y:82},0).wait(5).to({rotation:-91.5,x:970.9,y:93.5},0).wait(3).to({rotation:-102.6,x:962.9,y:101.7},0).wait(4).to({rotation:-117.8,x:961.7,y:121.7},0).wait(4).to({x:973.8,y:117.7},0).wait(4).to({rotation:-109.4,x:986.8,y:115.4},0).wait(5).to({rotation:-96.2,x:993.9,y:105.8},0).wait(4).to({regX:-29.5,regY:39.9,rotation:-79.8,x:1042.8,y:130.3},0).wait(4).to({regX:-29.6,rotation:-62.5,x:1048.9,y:127.4},0).wait(5).to({rotation:-35.1,x:1051.9,y:121.1},0).wait(3).to({regX:-29.5,regY:39.8,rotation:-7.4,x:1057.6,y:118.8},0).wait(3).to({rotation:-7.4,x:1065.2,y:123.3},0).wait(4).to({regX:0,regY:0,rotation:0,x:1103.7,y:89.3},0).wait(7).to({rotation:9.2,x:1115.4,y:87.6},0).wait(6).to({x:1107.9,y:100.6},0).wait(5).to({rotation:14.2,x:1106.1,y:112.6},0).wait(5).to({x:1091.7,y:109.6},0).wait(5).to({rotation:9,x:1084.2,y:101.1},0).wait(5).to({rotation:2.8,x:1071.7,y:98},0).wait(6).to({x:1060.4,y:90.7},0).wait(6).to({rotation:-3.5,x:1056,y:80.7},0).wait(5).to({rotation:-12.2,x:1050,y:77.5},0).wait(5).to({rotation:-26.9,x:1038.1,y:68.8},0).wait(4).to({rotation:-40.8,x:1026.6,y:66.6},0).wait(5).to({rotation:-52.8,x:1016.4,y:68.4},0).wait(5).to({rotation:-63.3,x:1001.7,y:72.9},0).wait(6).to({rotation:-76.5,x:984.8,y:82},0).wait(5).to({rotation:-91.5,x:970.9,y:93.5},0).wait(3).to({rotation:-102.6,x:962.9,y:101.7},0).wait(4).to({rotation:-117.8,x:961.7,y:121.7},0).wait(4).to({x:973.8,y:117.7},0).wait(4).to({rotation:-109.4,x:986.8,y:115.4},0).wait(5).to({rotation:-96.2,x:993.9,y:105.8},0).wait(5));

	// cabo
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#264193").s().p("Agzg2IBegIIAJB2IhfAGg");
	this.shape_40.setTransform(775.5,90.7);

	this.instance_13 = new lib.Path_1_1();
	this.instance_13.setTransform(776.3,100.7,1,1,0,0,0,4.2,6.2);
	this.instance_13.alpha = 0.512;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#264292").ss(2.7).p("APkk2QgGgcAChCQABg+gJgiQgMgrgXgiQgbglgkgSQgcgOgqgGQhQgKhNAZQghAKgdAVQgMAJgpAkQheBSgnBWQgyBwAvCGQANAmAkBLQAjBIANAnQA2CbgrC2QgiCOhoA+QhIAqhWgFQhPgGgzgpQhQhAgGiJQgEhbAfiYQAlibAOhLQAYiFgOhbQgIg5gcgpQglg2g+gNQgzgKg7AYQg1AWgkAnQglAogQBIQgNA4ADA3QAEA/AhBdQApB1AIAiQATBYgTBSQgYBghLBKQgeAdghATQgmAWgjADQgWACgYgEQgXgEgQgGQhMgfgohHQglhBAEhUQABgsARg/QAXhIAKglQAThAAEgqQAFg6gQgqQgTgwgxgZQg1gchDAKQhHAKg7A0Qg9A1AKAw");
	this.shape_41.setTransform(875.2,90.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.instance_13},{t:this.shape_40}]}).wait(228));

	// TABLET
	this.instance_14 = new lib.Path_2();
	this.instance_14.setTransform(1045,135.7,1,1,0,0,0,58.6,33.3);
	this.instance_14.alpha = 0.102;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F4E6E4").ss(1.4).p("AAhghIhBBD");
	this.shape_42.setTransform(976.4,73.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#264193").s().p("AgKA0IgqgqQgLgKAAgPQAAgQALgLIAKgKQALgLAQAAQAPAAAKALIAqAqQAMAKAAAQQAAAQgMALIgJAJQgKAMgRAAQgQAAgKgMg");
	this.shape_43.setTransform(976.5,73.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F4E6E4").ss(1.4).p("AghghIBCBD");
	this.shape_44.setTransform(1096.3,73.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#264193").s().p("AgrA0IgJgJQgLgLAAgQQAAgQALgKIArgqQAJgLAQAAQAQAAAMALIAIAKQAMALAAAQQAAAPgMAKIgqAqQgKAMgPAAQgQAAgMgMg");
	this.shape_45.setTransform(1096.2,73.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAHgHgBQgFABAAgHg");
	this.shape_46.setTransform(1094.3,160);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAHgHgBQgFABAAgHg");
	this.shape_47.setTransform(1083.8,160);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAACgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgFABAAgHg");
	this.shape_48.setTransform(1073.3,160);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDAEQgCgCAAgCQAAgCACgBQACgCABAAQAGAAAAAFQAAAHgGgBQgBAAgCgCg");
	this.shape_49.setTransform(1062.9,160);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgDAEQgCgCAAgCQAAgFAFAAQAGAAAAAFQAAAHgGgBQgCAAgBgCg");
	this.shape_50.setTransform(1052.4,160);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAHAAgBAFQAAACgBACQgDACgCAAQgFABAAgHg");
	this.shape_51.setTransform(1042,160);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAACgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgFABAAgHg");
	this.shape_52.setTransform(1031.5,160);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgFAAQgBgFAGAAQAGAAAAAFQAAAHgGgBQgGABABgHg");
	this.shape_53.setTransform(1021.1,160);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgFAAQgBgFAGAAQAGAAAAAFQAAACgCACQgCACgCAAQgGABABgHg");
	this.shape_54.setTransform(1010.7,160);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgDAEQgCgCAAgCQAAgFAFAAQAGAAAAAFQAAAHgGgBQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_55.setTransform(1000.2,160);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgEAEQgCgCAAgCQAAgCACgBQADgCABAAQAGAAABAFQgBAHgGgBQgBAAgDgCg");
	this.shape_56.setTransform(989.7,160);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgDAEQgCgCAAgCQgBgFAGAAQAGAAAAAFQAAAHgGgBQgBAAgCgCg");
	this.shape_57.setTransform(979.2,160);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAGgHAAQgFAAAAgGg");
	this.shape_58.setTransform(1094.3,149.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAGgHAAQgFAAAAgGg");
	this.shape_59.setTransform(1083.8,149.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_60.setTransform(1073.3,149.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgFAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCABAAQAGAAAAAFQAAAGgGAAQgGAAABgGg");
	this.shape_61.setTransform(1062.9,149.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_62.setTransform(1052.4,149.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQACAAADACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQABAGgHAAQgFAAAAgGg");
	this.shape_63.setTransform(1042,149.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_64.setTransform(1031.5,149.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgFAAQgBgFAGAAQAGAAAAAFQAAAGgGAAQgGAAABgGg");
	this.shape_65.setTransform(1021.1,149.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgFAAQgBgFAGAAQACAAACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAAGgGAAQgGAAABgGg");
	this.shape_66.setTransform(1010.7,149.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_67.setTransform(1000.2,149.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgGAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQADgCABAAQAGAAABAFQgBAGgGAAQgGAAAAgGg");
	this.shape_68.setTransform(989.7,149.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgFAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCABAAQAGAAAAAFQAAAGgGAAQgGAAABgGg");
	this.shape_69.setTransform(979.2,149.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgFAAQAAgGAFAAQAHAAgBAGQABAHgHAAQgFAAAAgHg");
	this.shape_70.setTransform(1094.3,138.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgFAAQAAgGAFAAQAHAAgBAGQABAHgHAAQgFAAAAgHg");
	this.shape_71.setTransform(1083.8,138.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAACgCADQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgFAAAAgHg");
	this.shape_72.setTransform(1073.3,138.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgDAFQgCgDAAgCQAAgBACgDQACgCABAAQAGAAAAAGQAAAHgGAAQgBAAgCgCg");
	this.shape_73.setTransform(1062.9,138.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgDAFQgCgDAAgCQAAgGAFAAQAGAAAAAGQAAAHgGAAQgCAAgBgCg");
	this.shape_74.setTransform(1052.4,138.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgFAAQAAgGAFAAQAHAAgBAGQAAACgBADQgDACgCAAQgFAAAAgHg");
	this.shape_75.setTransform(1042,138.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAACgCADQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgFAAAAgHg");
	this.shape_76.setTransform(1031.5,138.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgFAAQgBgGAGAAQAGAAAAAGQAAAHgGAAQgGAAABgHg");
	this.shape_77.setTransform(1021.1,138.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgFAAQgBgGAGAAQAGAAAAAGQAAACgCADQgCACgCAAQgGAAABgHg");
	this.shape_78.setTransform(1010.7,138.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgDAFQgCgDAAgCQAAgGAFAAQAGAAAAAGQAAAHgGAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_79.setTransform(1000.2,138.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgEAFQgCgDAAgCQAAgBACgDQADgCABAAQAGAAABAGQgBAHgGAAQgBAAgDgCg");
	this.shape_80.setTransform(989.7,138.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgDAFQgCgDAAgCQgBgGAGAAQAGAAAAAGQAAAHgGAAQgBAAgCgCg");
	this.shape_81.setTransform(979.2,138.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAGgHAAQgFAAAAgGg");
	this.shape_82.setTransform(1094.3,128.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAGgHAAQgFAAAAgGg");
	this.shape_83.setTransform(1083.8,128.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_84.setTransform(1073.3,128.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgFAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCABAAQAGAAAAAFQAAAGgGAAQgGAAABgGg");
	this.shape_85.setTransform(1062.9,128.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_86.setTransform(1052.4,128.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQACAAADACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQABAGgHAAQgFAAAAgGg");
	this.shape_87.setTransform(1042,128.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_88.setTransform(1031.5,128.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgFAAQgBgFAGAAQAGAAAAAFQAAAGgGAAQgGAAABgGg");
	this.shape_89.setTransform(1021.1,128.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgFAAQgBgFAGAAQACAAACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAAGgGAAQgGAAABgGg");
	this.shape_90.setTransform(1010.7,128.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_91.setTransform(1000.2,128.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgGAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQADgCABAAQAGAAABAFQgBAGgGAAQgGAAAAgGg");
	this.shape_92.setTransform(989.7,128.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgFAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCABAAQAGAAAAAFQAAAGgGAAQgGAAABgGg");
	this.shape_93.setTransform(979.2,128.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgFAAQAAgGAFAAQAHAAgBAGQABAGgHABQgFgBAAgGg");
	this.shape_94.setTransform(1094.3,118.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgFAAQAAgGAFAAQAHAAgBAGQABAGgHABQgFgBAAgGg");
	this.shape_95.setTransform(1083.8,118.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAACgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgFgBAAgGg");
	this.shape_96.setTransform(1073.3,118.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgDAEQgCgCAAgCQAAgCACgCQACgCABAAQAGAAAAAGQAAAGgGABQgBAAgCgDg");
	this.shape_97.setTransform(1062.9,118.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgDAEQgCgCAAgCQAAgGAFAAQAGAAAAAGQAAAGgGABQgCAAgBgDg");
	this.shape_98.setTransform(1052.4,118.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgFAAQAAgGAFAAQAHAAgBAGQAAACgBACQgDADgCAAQgFgBAAgGg");
	this.shape_99.setTransform(1042,118.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgFAAQAAgGAFAAQAGAAAAAGQAAACgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgFgBAAgGg");
	this.shape_100.setTransform(1031.5,118.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgFAAQgBgGAGAAQAGAAAAAGQAAAGgGABQgGgBABgGg");
	this.shape_101.setTransform(1021.1,118.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgFAAQgBgGAGAAQAGAAAAAGQAAACgCACQgCADgCAAQgGgBABgGg");
	this.shape_102.setTransform(1010.7,118.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgDAEQgCgCAAgCQAAgGAFAAQAGAAAAAGQAAAGgGABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_103.setTransform(1000.2,118.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgEAEQgCgCAAgCQAAgCACgCQADgCABAAQAGAAABAGQgBAGgGABQgBAAgDgDg");
	this.shape_104.setTransform(989.7,118.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgDAEQgCgCAAgCQgBgGAGAAQAGAAAAAGQAAAGgGABQgBAAgCgDg");
	this.shape_105.setTransform(979.2,118.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAGgHAAQgFAAAAgGg");
	this.shape_106.setTransform(1094.3,107.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAGgHAAQgFAAAAgGg");
	this.shape_107.setTransform(1083.8,107.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_108.setTransform(1073.3,107.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgFAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCABAAQAGAAAAAFQAAAGgGAAQgGAAABgGg");
	this.shape_109.setTransform(1062.9,107.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_110.setTransform(1052.4,107.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQACAAADACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQABAGgHAAQgFAAAAgGg");
	this.shape_111.setTransform(1042,107.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_112.setTransform(1031.5,107.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgFAAQgBgFAGAAQAGAAAAAFQAAAGgGAAQgGAAABgGg");
	this.shape_113.setTransform(1021.1,107.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgFAAQgBgFAGAAQACAAACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAAGgGAAQgGAAABgGg");
	this.shape_114.setTransform(1010.7,107.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_115.setTransform(1000.2,107.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgGAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQADgCABAAQAGAAABAFQgBAGgGAAQgGAAAAgGg");
	this.shape_116.setTransform(989.7,107.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgFAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCABAAQAGAAAAAFQAAAGgGAAQgGAAABgGg");
	this.shape_117.setTransform(979.2,107.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#264193").s().p("AgoAjIAAhFIBSAAIAABFg");
	this.shape_118.setTransform(974.4,60.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#264193").s().p("AhuAiIAAhDIDdAAIAABDg");
	this.shape_119.setTransform(1035.9,60.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#5BC1DC").s().p("AqLGlQgFAAgEgEQgEgEAAgFIAAsuQAAgGAEgEQAEgEAFAAIUXAAQAFAAAEAEQAEAEAAAGIAAMuQAAAFgEAEQgEAEgFAAg");
	this.shape_120.setTransform(1036.6,126.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AquIiQgLgBgIgHQgIgJAAgLIAAwLQAAgLAIgJQAIgHALgBIVdAAQALABAIAHQAIAJAAALIAAQLQAAALgIAJQgIAHgLABg");
	this.shape_121.setTransform(1036.6,119.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.instance_14}]}).wait(228));

	// mark
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#62ADE0").s().p("AgimEIBFgjIgDM3Iggg/IgiBXg");
	this.shape_122.setTransform(1358.7,99.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_122).wait(20).to({regX:-0.5,regY:-42.6,scaleY:0.83,x:1358.2,y:57.1},0).wait(6).to({scaleY:0.63},0).wait(4).to({scaleY:0.43},0).wait(4).to({regY:-42.5,scaleY:0.17},0).wait(3).to({regY:-42.8,scaleY:0.07},0).wait(4).to({regY:-42.5,scaleY:0.1,skewX:180},0).wait(3).to({regY:-42.8,scaleY:0.47,y:57.2},0).wait(5).to({scaleY:0.63},0).wait(4).to({regY:-42.7,scaleY:0.67},0).wait(4).to({scaleY:0.54,y:57.1},0).wait(3).to({regY:-42.8,scaleY:0.38,y:57.2},0).wait(3).to({scaleY:0.22,y:57.1},0).wait(3).to({scaleY:0.13},0).wait(3).to({scaleY:0.07,skewX:0,y:57.2},0).wait(3).to({regY:-42.9,scaleY:0.21,y:57.1},0).wait(3).to({regY:-42.8,scaleY:0.4,y:57.2},0).wait(5).to({scaleY:0.56},0).wait(4).to({scaleY:0.72},0).wait(5).to({scaleY:0.82},0).wait(5).to({scaleY:0.91,y:57.1},0).wait(5).to({regX:0,regY:0,scaleY:1,x:1358.6,y:101.2},0).wait(25).to({regX:-0.5,regY:-42.6,scaleY:0.83,x:1358.2,y:57.1},0).wait(6).to({scaleY:0.63},0).wait(4).to({scaleY:0.43},0).wait(4).to({regY:-42.5,scaleY:0.17},0).wait(3).to({regY:-42.8,scaleY:0.07},0).wait(4).to({regY:-42.5,scaleY:0.1,skewX:180},0).wait(3).to({regY:-42.8,scaleY:0.47,y:57.2},0).wait(5).to({scaleY:0.63},0).wait(4).to({regY:-42.7,scaleY:0.67},0).wait(4).to({scaleY:0.54,y:57.1},0).wait(3).to({regY:-42.8,scaleY:0.38,y:57.2},0).wait(3).to({scaleY:0.22,y:57.1},0).wait(3).to({scaleY:0.13},0).wait(3).to({scaleY:0.07,skewX:0,y:57.2},0).wait(3).to({regY:-42.9,scaleY:0.21,y:57.1},0).wait(3).to({regY:-42.8,scaleY:0.4,y:57.2},0).wait(5).to({scaleY:0.56},0).wait(4).to({scaleY:0.72},0).wait(5).to({scaleY:0.82},0).wait(5).to({scaleY:0.91,y:57.1},0).wait(5).to({regX:0,regY:0,scaleY:1,x:1358.6,y:101.2},0).wait(25));

	// flip 1
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#996D8E").ss(1.6).p("ADtg9QicAIhbAVQg6AMhYAqIhNAp");
	this.shape_123.setTransform(1380.8,129.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#996D8E").ss(1.6).p("ADtg9QicAIhbAUQg6ANhZAqIhMAp");
	this.shape_124.setTransform(1380.6,120.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#996D8E").ss(1.6).p("ADtg9QicAIhbAUQg7ANhYAqIhMAp");
	this.shape_125.setTransform(1380.4,113.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#996D8E").ss(1.6).p("ADtg9QicAIhbAVQg6AMhYAqIhNAp");
	this.shape_126.setTransform(1380.1,104.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#996D8E").ss(1.6).p("ADtg9QicAIhbAVQg6AMhZAqIhMAp");
	this.shape_127.setTransform(1379.9,97.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#996D8E").ss(1.6).p("ADtg9QicAJhbAUQg6ANhYApIhNAp");
	this.shape_128.setTransform(1379.6,89.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#996D8E").ss(1.6).p("ADtg9QicAIhbAUQg6ANhYAqIhNAp");
	this.shape_129.setTransform(1379.4,81.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#996D8E").ss(1.6).p("ADtg9QicAIhbAVQg6AMhYAqIhNAp");
	this.shape_130.setTransform(1379.1,73.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#996D8E").ss(1.6).p("ADtg9QicAJhbAUQg6ANhYApIhNAp");
	this.shape_131.setTransform(1378.9,65.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#996D8E").ss(1.6).p("ADtg9QicAIhbAUQg7ANhYAqIhMAp");
	this.shape_132.setTransform(1378.7,57.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D4D3EA").s().p("AkpkpIA/hPQBNhVBIgfQBIggChg2ICWgxIAAPIQgzADhDAKQiEARhJAhQhMAhhnBjIhYBcg");
	this.shape_133.setTransform(1380.5,95.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#996D8E").ss(1.6).p("ACSg8QhfAIg3AUQgkANg2ApIgvAp");
	this.shape_134.setTransform(1369.4,130.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#996D8E").ss(1.6).p("ACSg9QhfAJg3AUQgkANg2ApIgvAp");
	this.shape_135.setTransform(1369.2,121.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#996D8E").ss(1.6).p("ACSg9QhfAJg3AUQgkANg2ApIgvAp");
	this.shape_136.setTransform(1369.1,114.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#996D8E").ss(1.6).p("ACSg8QhfAIg3AUQgkANg2ApIgvAp");
	this.shape_137.setTransform(1368.9,105.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#996D8E").ss(1.6).p("ACSg8QhfAIg3AUQgkANg2ApIgvAp");
	this.shape_138.setTransform(1368.8,98.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#996D8E").ss(1.6).p("ACSg8QhgAIg3AUQgjANg2ApIgvAp");
	this.shape_139.setTransform(1368.7,90.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#996D8E").ss(1.6).p("ACSg8QhgAIg3AUQgjANg2ApIgvAp");
	this.shape_140.setTransform(1368.5,82.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#996D8E").ss(1.6).p("ACSg8QhgAIg3AUQgjANg2ApIgvAp");
	this.shape_141.setTransform(1368.4,74.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#996D8E").ss(1.6).p("ACSg8QhfAIg3AUQgkANg2ApIgvAp");
	this.shape_142.setTransform(1368.2,66.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#996D8E").ss(1.6).p("ACSg9QhgAJg3AUQgjANg2ApIgvAp");
	this.shape_143.setTransform(1368.1,58.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D4D3EA").s().p("Ai1kpIAnhPQAvhVArgfQBFgyClhVIAAPIQgfADgpAKQhRARgsAhQguAhg/BjIg2Bcg");
	this.shape_144.setTransform(1369.3,96.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#996D8E").ss(1.6).p("AhDg9IAZAGQAcAJAOANQARANAYApQAMAWAJAT");
	this.shape_145.setTransform(1342.5,129.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#996D8E").ss(1.6).p("AhDg+IAZAHQAcAJAOANQARANAYApQAMAWAJAT");
	this.shape_146.setTransform(1342.6,120.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#996D8E").ss(1.6).p("AhCg7IAZAHQAcAJAOAMQAaAVAkBL");
	this.shape_147.setTransform(1342.6,113.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#996D8E").ss(1.6).p("AhDg9IAZAGQAcAJAOANQARANAYApQAMAWAJAT");
	this.shape_148.setTransform(1342.7,104.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#996D8E").ss(1.6).p("AhDg9IAZAGQAcAJAOANQARANAYApQAMAWAJAT");
	this.shape_149.setTransform(1342.8,97.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#996D8E").ss(1.6).p("AhCg7IAZAHQAcAJAOAMQAaAVAkBK");
	this.shape_150.setTransform(1342.8,89.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#996D8E").ss(1.6).p("AhDg9IAZAGQAcAJAOANQARANAYApQAMAWAJAT");
	this.shape_151.setTransform(1342.9,81.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#996D8E").ss(1.6).p("AhDg9IAZAGQAcAJAOANQARANAYApQAMAWAJAT");
	this.shape_152.setTransform(1343,73.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#996D8E").ss(1.6).p("AhCg7IAZAHQAcAJAOAMQAaAVAkBK");
	this.shape_153.setTransform(1343,65.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#996D8E").ss(1.6).p("AhDg+IAZAHQAcAJAOANQARANAYApQAMAWAJAT");
	this.shape_154.setTransform(1343.1,57.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D4D3EA").s().p("AA4IYQgchjgVghQgTghglgRIgggNIAAvIIApAxQAsA2AUAgQATAfAWBVQALAqAGAlIgBOdQgKgrgPgxg");
	this.shape_155.setTransform(1342.4,95.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#996D8E").ss(1.6).p("Ajmg9IBXAGQBiAJA2ANQA4ANBVApQAqAWAgAT");
	this.shape_156.setTransform(1323,130.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#996D8E").ss(1.6).p("Ajmg+IBXAHQBiAJA2ANQA4ANBVApQArAWAfAT");
	this.shape_157.setTransform(1323.2,121.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#996D8E").ss(1.6).p("Ajmg+IBXAHQBiAJA2ANQA4ANBVApQArAWAfAT");
	this.shape_158.setTransform(1323.4,114.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#996D8E").ss(1.6).p("Ajmg9IBXAGQBiAJA2ANQA4ANBVApQArAWAfAT");
	this.shape_159.setTransform(1323.7,105.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#996D8E").ss(1.6).p("Ajmg9IBWAGQBiAJA2ANQA5ANBVApQAqAWAgAT");
	this.shape_160.setTransform(1323.9,98.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#996D8E").ss(1.6).p("Ajmg9IBXAHQBiAJA2AMQA4ANBVApQArAWAfAT");
	this.shape_161.setTransform(1324.1,90.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#996D8E").ss(1.6).p("Ajmg9IBXAGQBiAJA2ANQA4ANBVApQArAWAfAT");
	this.shape_162.setTransform(1324.4,83);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#996D8E").ss(1.6).p("Ajmg9IBWAGQBiAJA2ANQA5ANBVApQAqAWAgAT");
	this.shape_163.setTransform(1324.6,75);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#996D8E").ss(1.6).p("Ajmg9IBXAHQBiAJA2AMQA4ANBVApQArAWAfAT");
	this.shape_164.setTransform(1324.8,66.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#996D8E").ss(1.6).p("Ajmg+IBXAHQBiAJA2ANQA4ANBVApQArAWAfAT");
	this.shape_165.setTransform(1325.1,59);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D4D3EA").s().p("ADFIYQhjhjhJghQhGghiAgRIhxgNIAAvIICQAxQCcA2BFAgQBGAfBKBVQAlAqAXAlIgFOdQgjgrgygxg");
	this.shape_166.setTransform(1323.1,96.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},43).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},6).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},4).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156}]},4).to({state:[]},5).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},84).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},6).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},4).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156}]},4).to({state:[]},5).wait(63));

	// book
	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#E4B7D6").ss(1.6).p("ADrg2QgnABgyADQhmAGg5ALQg6ALhaAnIhNAn");
	this.shape_167.setTransform(1383.3,134.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#E4B7D6").ss(1.6).p("ADrg2QgnABgyADQhmAGg5ALQg6ALhaAnIhNAm");
	this.shape_168.setTransform(1383.3,126.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#E4B7D6").ss(1.6).p("ADrg2QgnABgyADQhmAGg5ALQg6ALhaAnIhNAm");
	this.shape_169.setTransform(1383.3,118.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#E4B7D6").ss(1.6).p("ADrg2QgnABgyADQhmAGg5ALQg6ALhaAnIhNAm");
	this.shape_170.setTransform(1383.3,110.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#E4B7D6").ss(1.6).p("ADrg2QgnABgyADQhmAGg5ALQg6ALhaAnIhNAn");
	this.shape_171.setTransform(1383.3,102.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#E4B7D6").ss(1.6).p("ADrg2QgnABgyADQhmAGg5ALQg6ALhaAnIhNAn");
	this.shape_172.setTransform(1383.3,95.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#E4B7D6").ss(1.6).p("ADrg2QgnABgyADQhmAGg5ALQg6ALhaAnIhNAm");
	this.shape_173.setTransform(1383.3,87.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#E4B7D6").ss(1.6).p("ADrg2QgnABgyADQhmAGg5ALQg6ALhaAnIhNAm");
	this.shape_174.setTransform(1383.3,79.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#E4B7D6").ss(1.6).p("ADrg2QgnABgyADQhmAGg5ALQg6ALhaAnIhNAm");
	this.shape_175.setTransform(1383.3,71);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#E4B7D6").ss(1.6).p("ADrg2QgnABgyADQhmAGg5ALQg6ALhaAnIhNAn");
	this.shape_176.setTransform(1383.3,63.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#E4B7D6").ss(1.6).p("Ajwg2IBaAEQBmAGA4ALQA7ALBZAnQAtAUAhAS");
	this.shape_177.setTransform(1318.9,134.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#E4B7D6").ss(1.6).p("Ajwg2IBaAEQBmAGA4AKQA7ALBZAnQAtAVAhAS");
	this.shape_178.setTransform(1318.9,126.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#E4B7D6").ss(1.6).p("Ajwg2IBaAEQBmAGA4ALQA7AKBZAnQAtAVAhAS");
	this.shape_179.setTransform(1318.9,119);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#E4B7D6").ss(1.6).p("Ajwg2IBaAEQBmAGA4ALQA7ALBZAmQAtAVAhAS");
	this.shape_180.setTransform(1318.9,110.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#E4B7D6").ss(1.6).p("Ajwg2IBaAEQBmAGA4ALQA7ALBZAnQAtAUAhAS");
	this.shape_181.setTransform(1318.9,103);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#E4B7D6").ss(1.6).p("Ajwg2IBaAEQBmAGA4ALQA7ALBZAnQAtAUAhAS");
	this.shape_182.setTransform(1318.9,95.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#E4B7D6").ss(1.6).p("Ajwg2IBaAEQBmAGA4AKQA7ALBZAnQAtAVAhAS");
	this.shape_183.setTransform(1318.9,87.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#E4B7D6").ss(1.6).p("Ajwg2IBaAEQBmAGA4AKQA7ALBZAnQAtAVAhAS");
	this.shape_184.setTransform(1318.9,79.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#E4B7D6").ss(1.6).p("Ajwg2IBaAEQBmAGA4ALQA7AKBZAnQAtAVAhAS");
	this.shape_185.setTransform(1318.9,71);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#E4B7D6").ss(1.6).p("Ajwg2IBaAEQBmAGA4ALQA7ALBZAnQAtAUAhAS");
	this.shape_186.setTransform(1318.9,63.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AhjHiQh9hFhUgRQhVgQiIAcIh2AeIAAvRICWgEQCsAEBuAkQBvAkBBAwQAhAYAIARIBEg1QBbg6B1geQB1gdCLABQBFABAtAHIAAOdQgigFg4gBQhvgBhoAXQhpAXh+A/IhpA8Qgrggg/gig");
	this.shape_187.setTransform(1350.4,103.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EEEDF3").s().p("AhrHMQiFgmhggPQhhgPihAbIiNAeIgFupICrgDQDDAEB/AhQB+AiBKAtQAlAWAKAQIBNgxQBog3CFgbQCGgcCeACQBOAAA0AGIAFOuQgugWhFgRQiLgih4AVQh2AViGAnIhuAiQgugQhCgUg");
	this.shape_188.setTransform(1350.7,108.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#D4D3EA").s().p("AK0HLQiVgniOAAQiFAAiQAkIh1AlQgwgShHgTQiQgkhrAAQhsAAi1AnIifAnIAAvcIC8gDQDXADCKAiQCMAhBRAtQAoAXAMAPIBUgxQByg3CTgbQCUgbCtABQBWABA5AGIABPcQgvgThKgUg");
	this.shape_189.setTransform(1350.7,113.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#183AA5").s().p("As9IQQgSAAgLgNQgNgNAAgSIAAvHQAAgSANgMQALgNASgBIZ8AAQARABAMANQAMAMgBASIAAPDQABATgMAMQgMAMgRAAIrNAAQgNAAgLgIQgygpgqAAQgsgBg2AuQgKAIgPABg");
	this.shape_190.setTransform(1351,121.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167}]}).wait(228));

	// hamburguer
	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgIgMIAEAAIAJgLQAHAEACAIQACAIgDAFQgFAKgRAMQgLgTAMgRg");
	this.shape_191.setTransform(1687.3,75.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgWANQACgKAHgFQAIgIAIgDIADADIAQgCQAEAHgFAGQgEAHgIADQgHADgJAAIgPgBg");
	this.shape_192.setTransform(1673.4,67.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgOAGIABgEIgKgKQAFgGAJAAQAJgBAFAFQAKAGAJARQgIACgHAAQgLAAgMgJg");
	this.shape_193.setTransform(1668.1,76.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgKAMIgBgEIgPgHQABgFAIgEQAIgEAJABQAJABASAMQgHAHgLACQgGACgDAAIgKgBg");
	this.shape_194.setTransform(1629.6,89.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgKAMIgBgEIgPgHQACgFAIgEQAIgEAIABQAKABARALQgHAHgLADQgGACgDAAIgKgBg");
	this.shape_195.setTransform(1668.8,88);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgEAMQgHgIgCgHIADgDIAAgPQAIgCAFAFQAIAEACAIQADAIgFAVQgKgDgFgIg");
	this.shape_196.setTransform(1605,83.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgEAMQgHgHgCgIIADgDIAAgPQAIgCAGAFQAHAFACAHQAEAIgFAVQgKgDgGgIg");
	this.shape_197.setTransform(1654.9,88.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgOAFQAAgIAFgIIAFgBIAJgLQAHAEACAIQACAIgEAFQgEAKgRAMQgFgJAAgKg");
	this.shape_198.setTransform(1652.7,63.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgWANQACgKAHgGQAIgHAIgDIADACIAQgBQADAHgEAGQgEAHgIADQgHADgKAAIgOgBg");
	this.shape_199.setTransform(1649.8,73);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgOAGIAAgEIgJgKQAFgGAJgBQAJAAAFAFQAJAGAKARQgIADgGAAQgMAAgMgKg");
	this.shape_200.setTransform(1633.5,65);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgKALIgBgDIgPgHQACgGAHgEQAIgEAJACQAJABARALQgLAMgPAAQgDAAgHgCg");
	this.shape_201.setTransform(1634.2,76.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgEAMQgHgIgCgHIADgDIAAgPQAIgCAFAFQAIAEACAIQADAIgFAVQgKgDgFgIg");
	this.shape_202.setTransform(1620.3,76.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#E79BC3").s().p("AnJD0Ih6gPQACAAABgpQACg6AFgmQANhyByhdQBKg8AvgVQBNgiCHgMQF+gjCWCCQBTBIAtBzQAXA6AGAsIgYAJQhDAThvAWQjeAqjeALQhpAGhdAAQhoAAhZgHg");
	this.shape_203.setTransform(1651.7,80);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#BC64A3").s().p("ACLCkIgdgHIh0gbIijgpQg3gOgTgJIhCgfIgDABIgEgBQglgRgFgYQgDgNAEgOQAEgNAJgLQATgWA0gQQCKgpCHgVQA4gIAogCQA1gBAsAKQBFAQAmAwQAZAfAgBPQAKAbgSAbQgZAdgMARQgOATg5ARQgZAGgwAJIgFABQgKAAgOgEgAjwAFIAhAFIAhAEIBDAGQAuADBRAVIBtAeQAiAJA0gLQA0gLAagVQAegYgagyQgYgtghgSQgqgXhPAEQh7AEh6AdIg2ALQgiAGgRAHQgNAFgMAUQgNAXALAIQAEADALADQgcAJgZAOQAVgHAWgLIAHgEg");
	this.shape_204.setTransform(1639.4,106.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#8D175E").s().p("AB2BpIBTgVQAdgHgIgkQgGgYgSgcQgSgcgXgJQglgQgygBQgfgBg4AGQgzAFgZAEQg+AMg4AYQgcAMgaAOIgLAHQgHADgFgFQgDgDgCgHQgCgGABgEQABgKANgMQAbgXAigLQAKgEAWgDQAVgEAKgEQBPgYBMgEQAngDA1AFIAwACQAcAAATAFQAyAPAYAkQAIANATAXQAOAUgJAVQgJAXgrAaIgpAWg");
	this.shape_205.setTransform(1641.7,104.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#B34994").s().p("AjXDFQgZABgdgUQgfgVgHgYQgCgJgBgUQgBgTABgJIADgQIAAgFQAJg2AJgTIALgeQAHgPAMgKQAlgjAsglQAcgXA7gRQAvgOAuABQBOAABTAkQA7AaAjAhQAsArAKA1QACAQgDANQgDANgPAVQgbAlgfAkQgXAagRANQgZASgZABQgTAAgbAFIgtAHQjmgDgmABgAhxCpQAdAFAqgBIBFgDIBGgDQATgBAXgLQANgGAZgPQApgYAPgVQAOgVAHgtQAFgfABgOQABgegKgQQgIgLgYgOQgzgfgfgNQgugVgqgFQgYgDgwADQgoACgTAEQhQAQg+BSQgLARgHAGIgJAIQgFAFgCAGQgaA7gBAlQAAAPgDAHIABADQAAARADAIQAEAJAHAFQAOAKAWANQAGADAugCIAjgBQAYAAANADg");
	this.shape_206.setTransform(1626.1,103);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#8D175E").s().p("AgUDnQghgBhPgOIhJgOIhthpIAEgPIgKABQgNgoAPhKQAKg7AbgmQAcgoAwgXQAVgKAbgFIAygIQBMgKAigDQA/gFAxAGQA7AIAxAZQA2AbAfArQAPAUADARQACALgCAWQgGBAgvA5QghArgSAUQgeAjgeASQgVAMg8ARQhAASgiAAIgDAAgAkoBZQAOAQANAIQAUAMClAAIDEgDIAeABQARgBAMgIQAZgQATgdQASgcAIghQAHgfgFggQgFgcgLgRQgJgOgTgQQgagXgSgIQgdgPgpgCQgagCgxAEIglAEQgXADgQgCIgbgFQgQgCgNACQghAEgeAQQgeAPgXAYQgeAggQArQgPAqABAqIADAsIgFgCg");
	this.shape_207.setTransform(1628.2,108.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#AB1568").s().p("AiAB/QglgPgVgUQgZgagDgoQgEglAUgfQATgdAugdQAmgYAYgJQAhgNAkgBQA2gBBgAHQAcACANAGQAXAKADATQADAPgJAHQgEADgJACQg6AQhHAZIh8AuQgZALgKAIQgcAZAKAlQAFARANAQQAMAPAQAJQgygPgOgGg");
	this.shape_208.setTransform(1619.4,103.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D389B9").s().p("AjPCeQgXACgJgDQgNgFgKgQQgIgPgDgQQgEgVAGguIAFgdQAGgZAKgTIgSAFQBIhUBngoQAUgHASgEQA1gMBCAOQAtAJBIAaQAcAKAbAXQAeAZAJAZQgRgDgVAEIgmALQgTAFgyAIIiUAUQg0AGgOAEQgmAKgSAVQgZAfgHAQQgNAgAeALQAVAJAwAMIAxAMQAaAGARABg");
	this.shape_209.setTransform(1625.4,104.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#C4E5EF").s().p("AgeBFQAMglAigbIhUAUQgZgNghAKQgdAKgPAWIgYApQgOAYgVAKQgSAIgXAAQgZAAgRgKQgSgKgDgRQgDgSAQgJQANgIAigDQAkgDANgGQAdgNgNggQgMgagigVIgWgPQgMgIgGgIQgHgKACgKQACgLAMgEQAKgEATACQAoAGAmAZQAbASAeAhQAUAUAPAEQAXADARgMQAQgOAAgSQgDgXAAgMQAAgUAKgLQAFgHAJgCQAOgEAOAMQANAMgBAOIgFAZQgEAPAEAKIBGAHIALhWQACgSALgHQAHgEAMgBQAagCAWAPQAUAOAEATQAGAfgkAjQAmgFAUAAQAhAAAXAIQAcAKAIAVQAJAXgXAKQgaALgxgXQg9gagYgBQgYgBgRAKQAkAZANAiQANAigOAfQgSAFgVgLQgTgKgHgPQgFgKgDgUQgDgUgFgJQgHgQgTgKQgUgLgTAFQAHAkgNAjQgMAkgdAcQgOgmANglg");
	this.shape_210.setTransform(1670.4,112.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#5EC2DC").s().p("ACwCrIgXgRQgPgKgLgEQgbgKgiAXQgnAbgRgBQglgBgOgTQgSgZgQgFQgMgFgUADQgWADgdANQgnARgKADQgcAJgggFQgigFgDgRQAAgEACgHIADgLQgBgUgogIQgmgHgiAJIg+AVQgkANgcABQgbABgNgJQgHgFgDgJQgHgVAQgVQAQgVAggLIgsgHQAvgNA9gZIBmguQCDg2BuAQIAuAJQAcAGARACQAoAFA6gRQBIgVAYgDQAOgBBCAKQAwAIAfgUQAMgHAPgQQASgTAIgGQAegXAqABQArABAYAYQANAMgGAKQgFAGgNACQgSACgEABQgPAGACARQACAQAOAIQAMAGATACIAiADQASADANAJQAOAJgBANQAAAOgQAKQgPAJgSABQgLABgXgCQgXgCgMACQgSACgNAJQgPALACAOQADANAeAPQAfAPACAOQACAMgOALQgNAKgRABQgOABgRgEIgegKQgogOgdAGQgTADgOALQgOALgCAPIAAAQQAAAJgEAFQgHAJgTACIgOABQgeAAgYgPg");
	this.shape_211.setTransform(1658.1,109.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#C0639F").s().p("Aj6DPQh+gWgLAAQgUAAhHgmQhQgsgIghQgIggAQgpIASglIANgaQAIgPAJgJQAdgcBAgUQEChOENgKQCKgECGAMQASACAqACQAlAEASAMQASALASAeIAdAvQARAVgSA5QgJAcgNAWQh5Beg3AZQgjAPjnAnIjeAlIh9gVg");
	this.shape_212.setTransform(1652.7,120.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#F2D1BB").s().p("An6D/QAGgeAIhYIAIhSIAJhXQADgzgFgmQBugCC/gpQDTguBYgIQAugEBfgFQBRgHA4gUQgTAHArCgQAkCIASArQANAeAPANQjLgTi7ARQhVAIh1APIheAHQg9AEgfAMIh2AqQhmAigNAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAg");
	this.shape_213.setTransform(1656,127.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#821243").s().p("Aj6DwQh/gVgKAAQguAAgpgPQhNgdgQhIQgHggAQgqIASgkQAfgzAWgXQAfgfAvgUQBNgiBngaQA+gQB8gZQBugVAxgEQBzgJByAdQBCARAfAMQA5AXAYAhQAtA8ACBIQACBNg3AuIiaBEQgjAPjnAoIjfAkIh8gVg");
	this.shape_214.setTransform(1653.7,130.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#E28E82").s().p("AgsDZQgtgDg9gIQhfgNi9glQgigGgOgNQgMgKgSghQgRgfgOgKQgCgIgBgKQgCgjAQgWQAOgWAZgLQARgIAdgFQA1gKBSgFICHgIQBwgLDOgxQDZg0BmgMQAhgEAQAJQAbAOAIAtQAIArgOAmQgNAggbAdQgSARgiAZQhmBKhVAqQhoA0heAMQgjAEglAAIghAAgAofA2IAVAcQgPgJgGgTg");
	this.shape_215.setTransform(1652,137.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#E79BC3").s().p("AjvCaQiAglgvghQgmgbgchBIgVg+IAbAIQAhAKAiASQAoAVCQALQCRAJCRgHQBwgFCshbQBWgtA/gtIACAcQAAAkgMAqQgNAqgrAuIgpAoQh5BggYAKQgNAGh9AKQiMALgcAFIgSABQg0AAhvghg");
	this.shape_216.setTransform(1653.4,153.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgDgEIAHAGIgEADQgCgFgBgEg");
	this.shape_217.setTransform(1651.7,65.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#E79BC3").s().p("AnADyIh6gPQACAAABgpQACg5AFgmQANhzByhcQBKg8AvgVQBNgjCHgMIA4gEQACAgAPAbQAaAxA/AaQAlAPBQAMQACAtAiAmQAlAqA7AQQA6APA2gTQAbAyA7AcQAeAOAgAFIgGADQhDAThvAVQjeArjeALQhpAFhdAAQhoAAhZgHg");
	this.shape_218.setTransform(1650.8,80.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#5EC2DC").s().p("ACwCpIgXgRQgPgKgLgEQgbgKgiAXQgnAbgRgBQglgBgOgTQgSgZgQgFQgMgFgUADQgWADgdANQgnARgKADQgcAJgggFQgigFgDgRQAAgEACgHIADgLQgBgUgogIQgmgHgiAJIg+AVQgkANgcABQgbABgNgJQgHgFgDgJQgHgVAQgVQAQgVAggLIgsgHQAvgNA9gZIBmguQCDg2BuAQIAuAJQAcAGARACQAoAFA6gRQBIgVAYgDQAOgBBCAKQAwAIAfgUQAMgHAPgQQASgTAIgGQARgNAVgFQALAIAOAGQAoATAtADQAAAEgCADQgFAGgNACQgSACgEABQgPAGACARQACAQAOAIQAMAGATACIAiADQASADANAJQAOAJgBANQAAAOgQAKQgPAJgSABQgLABgXgCQgXgCgMACQgSACgNAJQgPALACAOQADANAeAPQAfAPACAOQACAMgOALQgNAKgRABQgOABgRgEIgegKQgogOgdAGQgTADgOALQgOALgCAPIAAAQQAAAJgEAFQgHAJgTACIgOABQgeAAgYgPg");
	this.shape_219.setTransform(1658.1,110);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgIgCIgBgBIATgCIgDALQgIgDgHgFg");
	this.shape_220.setTransform(1620.7,78);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#E79BC3").s().p("AnHDyIhsgNQArgXAeg+QAOgdAKgIQAHgFAKgEIASgGQAogOAegfQAfggALgnQArgEAZgHQAkgKAWgVQAMgKALgRIATgfIAYgnQANgXAHgSQAGgUACgVIAvgDQACAgAPAbQAaAxA/AaQAmAPBQAMQACAtAhAmQAmAqA6AQQA7APA2gTQAaAyA7AcQAeAOAhAFIgHADQhCAThvAVQjfArjeALQhpAFhcAAQhpAAhYgHg");
	this.shape_221.setTransform(1651.6,80.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#B34994").s().p("AjXDFQgZABgdgUQgfgVgHgYQgCgJgBgUQgBgTABgJIADgQIAAgFQAHgqAHgUQAhgYAZg0QAHgPAGgJIAVgSIAHgDIASgGQAogOAeggIABgBIAOgEQAvgOAuABQBOAABTAkQA7AaAjAhQAsArAKA1QACAQgDANQgDANgPAVQgbAlgfAkQgXAagRANQgZASgZABQgTAAgbAFIgtAHQjmgDgmABgAhxCpQAdAFAqgBIBFgDIBGgDQATgBAXgLQANgGAZgPQApgYAPgVQAOgVAHgtQAFgfABgOQABgegKgQQgIgLgYgOQgzgfgfgNQgugVgqgFQgYgDgwADQgoACgTAEQhQAQg+BSQgLARgHAGIgJAIQgFAFgCAGQgaA7gBAlQAAAPgDAHIABADQAAARADAIQAEAJAHAFQAOAKAWANQAGADAugCIAjgBQAYAAANADg");
	this.shape_222.setTransform(1626.1,103);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#8D175E").s().p("AgUDnQghgBhPgOIhJgOIhthpIAEgPIgKABQgNgoAPhKQADgTAFgQQAfgYAXgxQAOgcAKgIQAHgFAKgEIASgGQAQgGAOgIIAKgCIAygIQBMgKAigDQA/gFAxAGQA7AIAxAZQA2AbAfArQAPAUADARQACALgCAWQgGBAgvA5QghArgSAUQgeAjgeASQgVAMg8ARQhAASgiAAIgDAAgAkoBZQAOAQANAIQAUAMClAAIDEgDIAeABQARgBAMgIQAZgQATgdQASgcAIghQAHgfgFggQgFgcgLgRQgJgOgTgQQgagXgSgIQgdgPgpgCQgagCgxAEIglAEQgXADgQgCIgbgFQgQgCgNACQghAEgeAQQgeAPgXAYQgeAggQArQgPAqABAqIADAsIgFgCg");
	this.shape_223.setTransform(1628.2,108.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#AB1568").s().p("AiAB/QglgPgVgUQgZgagDgoQgEgiARgdIAPgUQATgWAigVQAmgYAYgJQAhgNAkgBQA2gBBgAHQAcACANAGQAXAKADATQADAPgJAHQgEADgJACQg6AQhHAZIh8AuQgZALgKAIQgcAZAKAlQAFARANAQQAMAPAQAJQgygPgOgGg");
	this.shape_224.setTransform(1619.4,103.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#E79BC3").s().p("Am+DyIhrgNQAqgXAfg+QANgdALgIQAGgFALgEIASgGQAogOAegfQAeggALgnQAsgEAYgHQAlgKAWgVQALgKALgRIATgfIAYgnQAOgXAGgSQAHgUACgVIAvgDQACAgAPAbQAZAxBAAaQAlAPBQAMQACAtAiAmQAlAqA7AQQA6APA2gTQAbAyA7AcQAVAJAWAGQgUAIgNALQg4ANhMAPQjeArjeALQhpAFhdAAQhoAAhZgHg");
	this.shape_225.setTransform(1650.6,80.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#C4E5EF").s().p("AgNBFQAMglAigbIhUAUQgZgNghAKQgdAKgPAWIgYApQgOAYgVAKQgSAIgXAAQgZAAgRgKQgSgKgDgRQgDgSAQgJQANgIAigDQAkgDANgGQAdgNgNggQgMgagigVIgWgPQgMgIgGgIQgHgKACgKQACgLAMgEQAKgEATACQAoAGAmAZQAbASAeAhQAUAUAPAEQAXADARgMQAQgOAAgSQgDgXAAgMQAAgUAKgLQAFgHAHgCQAQgEAOAMQANAMgBAOIgFAZQgEAPAEAKIBGAHIALhWQACgSALgHQAHgEAMgBQAagCAWAPQAUAOAEATQAGAfgkAjQAmgFAUAAQAhAAAXAIIAFACQgYAKgSARQgKAKgHANQg8gagYgBQgYgBgRAKQAkAZANAiQANAigOAfQgSAFgVgLQgTgKgHgPQgFgKgDgUQgDgUgFgJQgHgQgTgKQgUgLgTAFQAHAkgNAjQgMAkgdAcQgOgmANglg");
	this.shape_226.setTransform(1668.7,112.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#5EC2DC").s().p("ADoCpIgYgRQgOgKgLgEQgcgKgiAXQgnAbgRgBQgmgBgPgTQgQgZgPgFQgNgFgUADQgWADgdANQgmARgKADQgcAJghgFQgigFgCgRQgBgEADgHIACgLQAAgUgogIQgmgHgjAJIg9AVQglANgcABQgbABgNgJQgGgFgDgJQgHgVAQgVQAQgVAggLIgtgHQAvgNA9gZIBmguQCDg2BvAQIAtAJQAaAGARACQArAFA5gRQBJgVAYgDQANgBBCAKQAwAIAggUQALgHAQgQQASgTAIgGQARgNAUgFQAMAIAOAGQAVAKAWAFQgeAMgRAVQgUAYgBAjQgBAhAOAdQgYAKgTATQgSAUgJAYQgEAOgBAOQgOgBgNACQgSADgOALQgPALgCAPIABAQQAAAJgEAFQgHAJgUACIgNABQgeAAgYgPg");
	this.shape_227.setTransform(1652.5,110);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#C0639F").s().p("AjMDPQh+gWgLAAQgUAAhHgmQhQgsgIghQgIggAQgpIASglIANgaQAIgPAJgJQAdgcBAgUQEChOENgKQCKgECGAMQASACAqACQASACANAEQgHASgBAVQgBAhAOAfQgYAKgTATQgSAUgJAYQgIAZADAZQADAaAOAWQgTAQgJAJQgOAPgGAPIgEANIgFADQgjAPjnAnIjeAlIh9gVg");
	this.shape_228.setTransform(1648.1,120.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#F2D1BB").s().p("AnJD/QAGgeAIhYIAIhSIAJhXQADgzgFgmQBugCC/gpQDTguBYgIQAvgEBegFQBSgHA3gUQgPAFAXBjIgGAGQgTAUgIAYQgIAZADAbQADAaAOAWQgUAOgIAJQgPAPgGAPQgKAbANAtQh0gChtAKQhVAIh0APIhfAHQg8AEggAMIh2AqQhmAigNAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_229.setTransform(1651.1,127.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#821243").s().p("AjDDwQh+gVgKAAQguAAgpgPQhNgdgQhIQgHggAPgqIASgkQAfgzAXgXQAegfAvgUQBOgiBmgaQA/gQB6gZQBwgVAwgEQB0gJBxAdQBDARAeAMIARAIQgSAJgPAQQgTATgIAZQgIAZADAaQADAbAOAWQgUAPgIAJQgPANgGAQQgLAfASA4QAKAfAKAUIgaALQgjAPjnAoIjeAkIh9gVg");
	this.shape_230.setTransform(1648.2,130.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#E28E82").s().p("AAODVQgrgCg9gJQhfgNi9glQgigGgOgMQgMgKgSgiQgSgfgNgKQgCgIgBgKQgCghAQgYQAOgVAZgLQARgJAdgFQA1gJBSgFICHgJQBwgKDOgyQCxgqBlgQIgEAKQgIAZADAbQADAaAOAWQgTAQgJAJQgOAPgGAPQgMAgATA2IAJAbQhIAxhAAgQhoA0heAMQgjAEgnAAIghgBgAnjAyIAVAcQgPgIgGgUg");
	this.shape_231.setTransform(1646,137.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#E79BC3").s().p("AjTBzQiAglgvghQgmgbgchBIgVg+IAbAIQAhAKAiASQAoAVCQALQCRALCRgIQBwgGCshbIAXgMQAPAtAPAUQAQAXAaAPIgMAPIgpAmQh5BggYAKQgNAGh9AKQiMALgcAFIgSABQg0AAhvghg");
	this.shape_232.setTransform(1650.6,157);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#E79BC3").s().p("AnDDyIhEgIQgMgGgOgEIgDgBQAkgYAbg3QANgdALgIQAGgFALgEIASgGQAogOAegfQAeggALgnQAsgEAYgHQAlgKAWgVQALgKALgRIATgfIAYgnQAOgXAGgSQAHgUACgVIAvgDQACAgAPAbQAaAxA/AaQAlAPBQAMQACAtAiAmQAlAqA7AQQA6APA2gTQAbAyA7AcQAVAJAWAGQgTAIgOALQg3ANhNAPQjeArjeALQhpAFhcAAQhpAAhZgHg");
	this.shape_233.setTransform(1651.1,80.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#BC64A3").s().p("ACLCkIgdgHIh0gbIijgpQg3gOgTgJIhCgfIgDABIgEgBIgQgJQgKgNgNgLIgDgIQgDgNAEgOQAEgNAJgLQATgWA0gQQCKgpCHgVQA4gIAogCQA1gBAsAKQBFAQAmAwQAZAfAgBPQAKAbgSAbQgZAdgMARQgOATg5ARQgZAGgwAJIgFABQgKAAgOgEgAjwAFIAhAFIAhAEIBDAGQAuADBRAVIBtAeQAiAJA0gLQA0gLAagVQAegYgagyQgYgtghgSQgqgXhPAEQh7AEh6AdIg2ALQgiAGgRAHQgNAFgMAUQgNAXALAIQAEADALADQgcAJgZAOQAVgHAWgLIAHgEg");
	this.shape_234.setTransform(1639.4,106.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#B34994").s().p("AipDFIgBgeQAhgBAQADQAdAFAqgBIBFgDIBGgDQATgBAXgLQANgGAZgPQApgYAPgVQAOgVAHgtQAFgfABgOQABgegKgQQgIgLgYgOQgzgfgfgNQgugVgqgFQgYgDgwADQgoACgTAEQhQAQg+BSQgLARgHAGIgJAIQgFAFgCAGIgKAXQgNgGgOgCIACgFQAhgYAZg0QAHgPAGgJIAVgSIAHgDIASgGQAogOAeggIABgBIAOgEQAvgOAwABQBMAABTAkQA7AaAjAhQAsArAKA1QACAQgDANQgDANgPAVQgbAlgfAkQgXAagRANQgZASgZABQgTAAgbAFIgtAHIjWgCg");
	this.shape_235.setTransform(1626.9,103);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#8D175E").s().p("AgbDnQghgBhPgOIgogIIgNgFQAGgsgCgkQAnACA6AAIDEgDIAeABQARgBAMgIQAZgQATgdQASgcAIghQAHgfgFggQgFgcgLgRQgJgOgTgQQgagXgSgIQgdgPgpgCQgagCgxAEIglAEQgXADgQgCIgbgFQgQgCgNACQghAEgeAQQgeAPgXAYQgdAegPApQgOgGgQgGIACgIQAfgYAXgxQAOgcAKgIQAHgFAKgEIASgGQAQgGAOgIIAKgCIAygIQBMgKAkgDQA9gFAxAGQA7AIAxAZQA2AbAfArQAPAUADARQACALgCAWQgGBAgvA5QghArgSAUQgeAjgeASQgVAMg8ARQhAASghAAIgEAAg");
	this.shape_236.setTransform(1628.9,108.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#AB1568").s().p("AhiCKQgJgygZgiQgegog0gSQADgSAJgPIAPgUQAUgWAhgVQAmgYAYgJQAhgNAkgBQA2gBBgAHQAcACANAGQAXAKADATQADAPgJAHQgEADgJACQg6AQhHAZIh8AuQgZALgKAIQgcAZAKAlQAFARANAQQAMAPAQAJIghgKg");
	this.shape_237.setTransform(1619.5,103.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#D389B9").s().p("AidCiQgBgRgDgPIADABQAVAJAwAMIAxAMQAaAGARABgAjCAxQgagkgtgSQAFgRAHgNIgSAFQBIhUBngoQAUgHASgEQA1gMBCAOQAtAJBIAaQAcAKAbAXQAeAZAJAZQgRgDgVAEIgmALQgTAFgyAIIiUAUQg0AGgOAEQgmAKgSAVQgXAcgIAQQgIgUgMgQg");
	this.shape_238.setTransform(1625.7,104.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#5EC2DC").s().p("AC/CpIgXgRQgPgKgLgEQgbgKgiAXQgnAbgRgBQglgBgOgTQgSgZgQgFQgMgFgUADQgWADgdANQgnARgKADQgcAJgggFQgigFgDgRQAAgEACgHIADgLQgBgUgogIQgmgHgiAJIg+AVIgGACQgChEgbgtIAqgQIBmguQCDg2BuAQIAuAJQAcAGARACQAoAFA6gRQBIgVAYgDQAOgBBCAKQAwAIAfgUQAMgHAPgQQASgTAIgGQARgNAVgFQAMAIANAGQAVAKAXAFQgfAMgRAVQgTAYgBAjQgBAhAOAdQgZAKgSATQgTAUgIAYQgEAOgCAOQgOgBgMACQgTADgOALQgOALgCAPIAAAQQAAAJgEAFQgHAJgTACIgOABQgdAAgZgPg");
	this.shape_239.setTransform(1656.6,110);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#C0639F").s().p("Aj/DPIhQgOQgIgbgRgZQgegqgtgSQAPiAgxhDIgDgEQAVgLAdgJQEChOENgKQCKgECGAMQASACAqACQASACAOAEQgIASgBAVQgBAhAOAfQgYAKgTATQgSAUgJAYQgIAZADAZQADAaAOAWQgTAQgJAJQgOAPgGAPIgEANIgFADQgjAPjnAnIjeAlIh9gVg");
	this.shape_240.setTransform(1653.2,120.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#F2D1BB").s().p("AlIDEQAAgwgegqQgdgrgugRQAKhOgPg4QBtgEC3gnQDTgvBYgHQAvgEBegFQBSgHA3gVQgOAGAWBjIgGAGQgTATgIAZQgIAZADAbQADAYAOAWQgUAPgIAJQgPAQgGAPQgKAbANAtQhzgChuAKQhVAIh0APIhfAHQg8ADggAMIgfAMQgagTgegIg");
	this.shape_241.setTransform(1653,124.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#821243").s().p("AjdD2QgEgMgHgMQgSgigdgXQgegZgjgJQgBgxgdgqQgegogtgRQAHg4gGgsQAOgIAQgHQBNgiBngaQA+gQB8gZQBugVAxgEQBzgJByAdQBCARAfAMIARAIQgTAJgPAQQgSATgJAZQgIAZADAaQADAbAOAWQgTAPgJAJQgOANgGAQQgMAfATA4QAKAfAKAUIgaALQgjAPjnAoIjfAkIhWgPg");
	this.shape_242.setTransform(1654.6,130.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#E28E82").s().p("Ag3DVQgtgCg+gJIglgFQgHgYgLgVQgSgigdgYQgegZgkgJQAAgwgegoQgXghgggRQAogFA0gDICHgJQBvgKDOgyQCygqBlgQIgEAKQgIAZADAbQADAaAOAWQgUAQgIAJQgPAPgGAPQgLAgASA2IAKAbQhJAxg/AgQhoA0hfAMQgiAEglAAIghgBg");
	this.shape_243.setTransform(1653.2,137.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#E79BC3").s().p("AkzCAIACgXQAHhSgig9IgBgDQCQALCSgIQBugGCrhbIAYgMQAPAtAOAUQARAXAaAPIgNAPIgpAmQh5BggXAKQgNAGh7AKQiPALgcAFIgRABQgpAAhOgUg");
	this.shape_244.setTransform(1664.6,157);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#F2D1BB").s().p("AlIDEQAAgwgegqQgdgrgugRQAKhOgPg4QBtgEC3gnQDTgvBYgHQAvgEBegFQBSgHA3gVQgOAGAWBjIgGAGQgTATgIAZQgIAZADAbQADAYAOAWQgUAPgIAJQgPAQgGAPQgJAaALArIguADIgGAAIAAgBIgLABQhSABhPAHQhVAIh0APIhfAHQg8ADggAMIgfAMQgagTgegIg");
	this.shape_245.setTransform(1653,124.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#821243").s().p("Ai0DeQgcgGgcABQgRgdgagUQgegZgjgJQgBgxgdgqQgegqgtgPQAHg4gGgsQAOgJAQgGQBNgiBngaQA+gQB8gZQBugVAxgEQBzgJByAdQBCARAfAMIARAIQgTAJgPAQQgSATgJAZQgIAZADAaQADAbAOAWQgTAPgJAJQgOANgGAQQgKAaALAqIgzAEIgBgBQgYABgWALQgXALgPATIgKAMQgGAGgHADQgGACgIgBIgPgEQhKgThKAgQhCAdgkA6IgRADQgggbgvgJg");
	this.shape_246.setTransform(1654.6,130.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#E28E82").s().p("AimCeQgbgGgdABQgRgcgZgVQgegZgkgJQAAgwgegoQgXghgggRQAogFA0gDICHgJQBvgKDOgyQCygqBlgQIgEAKQgIAZADAbQADAaAOAWQgUAQgIAJQgPAPgGAPQgJAaALApIg0AEIAAgCQgYABgXALQgWAMgQASIgKANQgGAGgGACQgGADgJgCIgPgDQhJgUhLAgQhJAhgkBDQgjgjg2gLg");
	this.shape_247.setTransform(1653.2,136.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#E79BC3").s().p("AgugTQAuACAvAAQgPARgLAUQgagagpgNg");
	this.shape_248.setTransform(1643.2,155.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]}).to({state:[{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_219},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_218},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_217},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193}]},13).to({state:[{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_219},{t:this.shape_210},{t:this.shape_209},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_205},{t:this.shape_204},{t:this.shape_221},{t:this.shape_220},{t:this.shape_201},{t:this.shape_199},{t:this.shape_217},{t:this.shape_197},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193}]},13).to({state:[{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_209},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_205},{t:this.shape_204},{t:this.shape_225},{t:this.shape_220},{t:this.shape_201},{t:this.shape_199},{t:this.shape_217},{t:this.shape_197},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193}]},13).to({state:[{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_226},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_205},{t:this.shape_234},{t:this.shape_233},{t:this.shape_220},{t:this.shape_201},{t:this.shape_199},{t:this.shape_217},{t:this.shape_197},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193}]},11).to({state:[{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_240},{t:this.shape_239},{t:this.shape_226},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_205},{t:this.shape_234},{t:this.shape_233},{t:this.shape_220},{t:this.shape_201},{t:this.shape_199},{t:this.shape_217},{t:this.shape_197},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193}]},10).to({state:[]},9).to({state:[{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},46).to({state:[{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_219},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_218},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_217},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193}]},13).to({state:[{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_219},{t:this.shape_210},{t:this.shape_209},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_205},{t:this.shape_204},{t:this.shape_221},{t:this.shape_220},{t:this.shape_201},{t:this.shape_199},{t:this.shape_217},{t:this.shape_197},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193}]},13).to({state:[{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_209},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_205},{t:this.shape_204},{t:this.shape_225},{t:this.shape_220},{t:this.shape_201},{t:this.shape_199},{t:this.shape_217},{t:this.shape_197},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193}]},13).to({state:[{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_226},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_205},{t:this.shape_234},{t:this.shape_233},{t:this.shape_220},{t:this.shape_201},{t:this.shape_199},{t:this.shape_217},{t:this.shape_197},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193}]},11).to({state:[{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_240},{t:this.shape_239},{t:this.shape_226},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_205},{t:this.shape_234},{t:this.shape_233},{t:this.shape_220},{t:this.shape_201},{t:this.shape_199},{t:this.shape_217},{t:this.shape_197},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193}]},10).to({state:[]},9).wait(44));

	// teclas pretas
	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#2C53A0").s().p("AgkELIAAoWIBJAAIAAIWg");
	this.shape_249.setTransform(1410.5,372.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#2C53A0").s().p("AgkELIAAoWIBJAAIAAIWg");
	this.shape_250.setTransform(1395.4,372.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#2C53A0").s().p("AgkELIAAoWIBJAAIAAIWg");
	this.shape_251.setTransform(1323,372.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#2C53A0").s().p("AgkELIAAoWIBJAAIAAIWg");
	this.shape_252.setTransform(1307.9,372.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_253.setTransform(1234.6,372.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_254.setTransform(1219.5,372.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_255.setTransform(1148.9,372.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_256.setTransform(1133.9,372.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_257.setTransform(1462.2,372.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_258.setTransform(1448.6,372.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_259.setTransform(1433.5,372.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_260.setTransform(1373.3,372.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_261.setTransform(1359.7,372.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_262.setTransform(1344.6,372.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_263.setTransform(1285.4,372.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_264.setTransform(1271.7,372.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_265.setTransform(1256.7,372.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_266.setTransform(1198.8,372.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_267.setTransform(1185.2,372.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_268.setTransform(1170.1,372.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_269.setTransform(1111.3,372.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_270.setTransform(1097.7,372.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_271.setTransform(1082.6,372.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_272.setTransform(1061,372.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#2C53A0").s().p("AgkELIAAoVIBJAAIAAIVg");
	this.shape_273.setTransform(1045.9,372.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249}]}).wait(228));

	// teclas brancas
	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#DED2DF").s().p("AhHGBIAAsBICPAAIAAMBg");
	this.shape_274.setTransform(1197.2,384.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#DED2DF").s().p("AhHGBIAAsBICQAAIAAMBg");
	this.shape_275.setTransform(1246.9,384.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#DED2DF").s().p("AhHGBIAAsBICPAAIAAMBg");
	this.shape_276.setTransform(1334.4,384.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#DED2DF").s().p("AhHGBIAAsBICPAAIAAMBg");
	this.shape_277.setTransform(1271.8,384.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#DED2DF").s().p("AhHGBIAAsBICQAAIAAMBg");
	this.shape_278.setTransform(1306.3,384.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#DED2DF").s().p("AhHGBIAAsBICQAAIAAMBg");
	this.shape_279.setTransform(1147.2,384.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_277,p:{x:1271.8,y:384.2}},{t:this.shape_276,p:{x:1334.4,y:384.2}},{t:this.shape_275,p:{x:1246.9,y:384.2}},{t:this.shape_274,p:{x:1197.2,y:384.2}}]}).to({state:[{t:this.shape_277,p:{x:1202.3,y:384.7}},{t:this.shape_276,p:{x:1264.9,y:384.7}},{t:this.shape_275,p:{x:1177.4,y:384.7}},{t:this.shape_274,p:{x:1127.7,y:384.7}}]},39).to({state:[{t:this.shape_276,p:{x:1256.9,y:384.7}},{t:this.shape_274,p:{x:1319.5,y:384.7}},{t:this.shape_275,p:{x:1232,y:384.7}}]},41).to({state:[{t:this.shape_274,p:{x:1198.6,y:384.7}},{t:this.shape_275,p:{x:1173.7,y:384.7}}]},53).to({state:[{t:this.shape_276,p:{x:1172.1,y:384.7}},{t:this.shape_279},{t:this.shape_274,p:{x:1331.2,y:384.7}},{t:this.shape_278},{t:this.shape_275,p:{x:1128.7,y:384.2}}]},59).wait(36));

	// btns coloridos
	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FBEAE5").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_280.setTransform(1393.4,319.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#D34993").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_281.setTransform(1376.9,300.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FBEAE5").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_282.setTransform(1393.4,319.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#D34993").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_283.setTransform(1376.9,300.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#BDE2F1").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_284.setTransform(1393.7,300.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#BDE2F1").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_285.setTransform(1377.3,300.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#BDE2F1").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_286.setTransform(1377.3,300.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#BDE2F1").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_287.setTransform(1393.7,319.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#D34993").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_288.setTransform(1361.1,300.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FBEAE5").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_289.setTransform(1409.6,319.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_281,p:{x:1376.9,y:300.6}},{t:this.shape_280,p:{x:1393.4,y:319.7}}]}).to({state:[{t:this.shape_283,p:{x:1376.9,y:300.6}},{t:this.shape_282,p:{x:1393.4,y:319.7}},{t:this.shape_281,p:{x:1361.1,y:300.6}},{t:this.shape_280,p:{x:1376.9,y:319.7}}]},18).to({state:[{t:this.shape_281,p:{x:1361.1,y:300.7}},{t:this.shape_282,p:{x:1409.6,y:319.3}},{t:this.shape_280,p:{x:1393.7,y:319.3}},{t:this.shape_285,p:{x:1377.3,y:300.7}},{t:this.shape_284,p:{x:1393.7,y:300.7}}]},21).to({state:[{t:this.shape_283,p:{x:1361.1,y:300.7}},{t:this.shape_282,p:{x:1409.6,y:319.3}},{t:this.shape_285,p:{x:1393.7,y:319.3}},{t:this.shape_281,p:{x:1377.3,y:300.7}},{t:this.shape_284,p:{x:1393.7,y:300.7}},{t:this.shape_280,p:{x:1361.2,y:319.3}}]},23).to({state:[{t:this.shape_283,p:{x:1361.1,y:300.7}},{t:this.shape_282,p:{x:1409.6,y:319.3}},{t:this.shape_287,p:{x:1393.7,y:319.3}},{t:this.shape_286,p:{x:1377.3,y:300.7}},{t:this.shape_285,p:{x:1393.7,y:300.7}},{t:this.shape_284,p:{x:1361.2,y:319.3}},{t:this.shape_281,p:{x:1409.6,y:300.7}},{t:this.shape_280,p:{x:1377.3,y:319.3}}]},24).to({state:[{t:this.shape_288,p:{x:1361.1}},{t:this.shape_282,p:{x:1409.6,y:319.3}},{t:this.shape_285,p:{x:1393.7,y:319.3}},{t:this.shape_283,p:{x:1377.3,y:300.7}},{t:this.shape_281,p:{x:1393.7,y:300.7}},{t:this.shape_284,p:{x:1361.2,y:319.3}},{t:this.shape_280,p:{x:1393.7,y:319.3}}]},26).to({state:[{t:this.shape_288,p:{x:1361.1}},{t:this.shape_282,p:{x:1361.5,y:319.8}},{t:this.shape_284,p:{x:1393.7,y:319.3}},{t:this.shape_283,p:{x:1377.3,y:300.7}},{t:this.shape_281,p:{x:1409.6,y:300.7}},{t:this.shape_280,p:{x:1393.7,y:319.3}}]},25).to({state:[{t:this.shape_286,p:{x:1361.1,y:300.7}},{t:this.shape_289},{t:this.shape_285,p:{x:1393.7,y:319.3}},{t:this.shape_283,p:{x:1377.3,y:300.7}},{t:this.shape_284,p:{x:1393.7,y:300.7}},{t:this.shape_282,p:{x:1361.2,y:319.3}},{t:this.shape_281,p:{x:1409.6,y:300.7}},{t:this.shape_280,p:{x:1393.7,y:319.3}}]},23).to({state:[{t:this.shape_286,p:{x:1361.1,y:300.7}},{t:this.shape_282,p:{x:1409.6,y:319.3}},{t:this.shape_285,p:{x:1393.7,y:319.3}},{t:this.shape_288,p:{x:1377.3}},{t:this.shape_283,p:{x:1393.7,y:300.7}},{t:this.shape_284,p:{x:1361.2,y:319.3}},{t:this.shape_281,p:{x:1409.6,y:300.7}},{t:this.shape_280,p:{x:1393.7,y:319.3}}]},24).to({state:[{t:this.shape_287,p:{x:1361.1,y:300.7}},{t:this.shape_282,p:{x:1409.6,y:319.3}},{t:this.shape_286,p:{x:1393.7,y:319.3}},{t:this.shape_288,p:{x:1377.3}},{t:this.shape_285,p:{x:1393.7,y:300.7}},{t:this.shape_284,p:{x:1361.2,y:319.3}},{t:this.shape_283,p:{x:1409.6,y:300.7}},{t:this.shape_280,p:{x:1393.7,y:319.3}},{t:this.shape_281,p:{x:1361.2,y:300.7}}]},23).wait(21));

	// btns verm
	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.lf(["#CD1348","#C61346","#B3113F","#930F34","#7E0E2C"],[0,0.192,0.475,0.804,0.996],-6.1,0,6.2,0).s().p("Ag9AdIAAg5IB6AAIAAA5g");
	this.shape_290.setTransform(1050.2,308.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["#CD1348","#C61346","#B3113F","#930F34","#7E0E2C"],[0,0.192,0.475,0.804,0.996],-6.1,0,6.2,0).s().p("Ag9AdIAAg5IB7AAIAAA5g");
	this.shape_291.setTransform(1076.5,303.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.lf(["#CD1348","#C61346","#B3113F","#930F34","#7E0E2C"],[0,0.192,0.475,0.804,0.996],-6.1,0,6.2,0).s().p("Ag9AdIAAg5IB7AAIAAA5g");
	this.shape_292.setTransform(1102.1,303.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.lf(["#CD1348","#C61346","#B3113F","#930F34","#7E0E2C"],[0,0.192,0.475,0.804,0.996],-6.1,0,6.2,0).s().p("Ag9AdIAAg5IB6AAIAAA5g");
	this.shape_293.setTransform(1125.8,298);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.lf(["#CD1348","#C61346","#B3113F","#930F34","#7E0E2C"],[0,0.192,0.475,0.804,0.996],-6.1,0,6.2,0).s().p("Ag9AdIAAg5IB6AAIAAA5g");
	this.shape_294.setTransform(1153.7,292.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290}]}).wait(228));

	// PIANO
	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#BDE2F1").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_295.setTransform(1409.4,319.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#BDE2F1").s().p("AhGBJIAAiRICOAAIAACRg");
	this.shape_296.setTransform(1393.4,300.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#BDE2F1").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_297.setTransform(1409.4,300.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#BDE2F1").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_298.setTransform(1376.9,319.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#BDE2F1").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_299.setTransform(1360.9,319.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#BDE2F1").s().p("AhCBOIAAibICFAAIAACbg");
	this.shape_300.setTransform(1360.9,300.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#CD4160").s().p("AgWAGIAAgLIAtAAIAAALg");
	this.shape_301.setTransform(1236,292.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#CD4160").s().p("AgWAGIAAgLIAtAAIAAALg");
	this.shape_302.setTransform(1236.2,299.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#CD4160").s().p("AgWAGIAAgLIAtAAIAAALg");
	this.shape_303.setTransform(1226.3,295.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#CD4160").s().p("AgWAGIAAgLIAtAAIAAALg");
	this.shape_304.setTransform(1226.3,299.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#CD4160").s().p("AgJAGIAAgLIATAAIAAALg");
	this.shape_305.setTransform(1220,292.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#CD4160").s().p("AgWAGIAAgLIAtAAIAAALg");
	this.shape_306.setTransform(1226.3,292.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#CD4160").s().p("AgGASIAAgjIANAAIAAAjg");
	this.shape_307.setTransform(1224.4,297.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#CD4160").s().p("AgGASIAAgjIANAAIAAAjg");
	this.shape_308.setTransform(1228.2,294);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#CD4160").s().p("AgGAnIAAhOIANAAIAABOg");
	this.shape_309.setTransform(1238,296.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#CD4160").s().p("AgGAnIAAhOIAMAAIAABOg");
	this.shape_310.setTransform(1234.2,296.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#CD4160").s().p("AgGAqIAAhTIANAAIAABTg");
	this.shape_311.setTransform(1220.5,295.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#1D70B7").s().p("AgsA3IAAhsIBZAAIAABsg");
	this.shape_312.setTransform(996.8,378.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#1D70B7").s().p("AgsA2IAAhsIBZAAIAABsg");
	this.shape_313.setTransform(1017.9,395.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#B5DFEF").s().p("AgrCHIAAkNIBXAAIAAENg");
	this.shape_314.setTransform(996.4,387);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#B5DFEF").s().p("AgqCHIAAkNIBVAAIAAENg");
	this.shape_315.setTransform(1017.7,387.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#DED2DF").s().p("AgtAiQgGAAAAgGIAAg3QAAgGAGAAIBbAAQAGAAAAAGIAAA3QAAAGgGAAg");
	this.shape_316.setTransform(1050.2,326.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#DED2DF").s().p("AgtAiQgGAAAAgGIAAg3QAAgGAGAAIBbAAQAGAAAAAGIAAA3QAAAGgGAAg");
	this.shape_317.setTransform(1077.5,326.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#DED2DF").s().p("AgtAiQgGAAAAgGIAAg3QAAgGAGAAIBbAAQAGAAAAAGIAAA3QAAAGgGAAg");
	this.shape_318.setTransform(1101,326.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#DED2DF").s().p("AguAiQgFAAAAgGIAAg3QAAgGAFAAIBcAAQAGAAAAAGIAAA3QAAAGgGAAg");
	this.shape_319.setTransform(1124.8,326.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#DED2DF").s().p("AgtAiQgGAAAAgGIAAg3QAAgGAGAAIBbAAQAGAAAAAGIAAA3QAAAGgGAAg");
	this.shape_320.setTransform(1153.8,326.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#DED2DF").s().p("AgbAiQgGAAAAgGIAAg3QAAgGAGAAIA3AAQAGAAAAAGIAAA3QAAAGgGAAg");
	this.shape_321.setTransform(1218.6,325.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#DED2DF").s().p("AgbAiQgGAAAAgGIAAg3QAAgGAGAAIA3AAQAGAAAAAGIAAA3QAAAGgGAAg");
	this.shape_322.setTransform(1229.1,325.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#DED2DF").s().p("AgcAiQgFAAAAgGIAAg3QAAgGAFAAIA4AAQAGAAAAAGIAAA3QAAAGgGAAg");
	this.shape_323.setTransform(1240.1,325.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#DED2DF").s().p("AgcAiQgFAAAAgGIAAg3QAAgGAFAAIA4AAQAGAAAAAGIAAA3QAAAGgGAAg");
	this.shape_324.setTransform(1282.7,325.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#DED2DF").s().p("AgbAiQgGAAAAgGIAAg3QAAgGAGAAIA3AAQAGAAAAAGIAAA3QAAAGgGAAg");
	this.shape_325.setTransform(1295.6,325.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#DED2DF").s().p("AgbAiQgGAAAAgGIAAg3QAAgGAGAAIA3AAQAGAAAAAGIAAA3QAAAGgGAAg");
	this.shape_326.setTransform(1308.1,325.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#DED2DF").s().p("AgbAiQgGAAAAgGIAAg3QAAgGAGAAIA3AAQAGAAAAAGIAAA3QAAAGgGAAg");
	this.shape_327.setTransform(1320.3,325.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#B5DFEF").s().p("AgNCCIAAkDIAbAAIAAEDg");
	this.shape_328.setTransform(1050.2,300.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#B5DFEF").s().p("AgNCCIAAkDIAbAAIAAEDg");
	this.shape_329.setTransform(1076.5,300.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#B5DFEF").s().p("AgNCCIAAkDIAbAAIAAEDg");
	this.shape_330.setTransform(1102.1,300.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#B5DFEF").s().p("AgMCCIAAkDIAaAAIAAEDg");
	this.shape_331.setTransform(1125.8,300.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#B5DFEF").s().p("AgNCCIAAkDIAbAAIAAEDg");
	this.shape_332.setTransform(1155.5,300.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#B6DFEE").ss(1.1).p("AACAiQgLABgKgKQgKgJgBgOQAAgMAIgLQAJgLANgBQALgBAJAKQAKAJABAOQABANgJAKQgIALgNABg");
	this.shape_333.setTransform(1274.8,289.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#B5DFEF").s().p("AgTAZQgKgJgBgOQAAgMAIgLQAJgLANgBQALgBAJAKQAKAJABAOQABANgJAKQgIALgNABIgCAAQgKAAgJgJg");
	this.shape_334.setTransform(1274.8,289.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#B6DFEE").ss(1.1).p("AAAAiQgMAAgJgKQgJgKAAgOQAAgMAJgLQAKgKALAAQAMAAAKAKQAJAKAAANQAAAOgJAKQgKAKgMAAg");
	this.shape_335.setTransform(1294,289.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#B5DFEF").s().p("AgVAYQgJgKAAgOQAAgMAJgLQAKgKALAAQAMAAAKAKQAJAKAAANQAAAOgJAKQgKAKgMAAQgMAAgJgKg");
	this.shape_336.setTransform(1294,289.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#B6DFEE").ss(1.1).p("AAAAiQgLAAgKgKQgJgKAAgOQAAgNAJgKQAKgKALAAQANAAAJAKQAJAKAAANQAAAOgJAKQgJAKgNAAg");
	this.shape_337.setTransform(1314.4,289.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#B5DFEF").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAKgKALAAQANAAAJAKQAJAKAAANQAAAOgJAKQgJAKgNAAQgLAAgKgKg");
	this.shape_338.setTransform(1314.4,289.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#B6DFEE").ss(1.1).p("AAAAiQgLAAgKgKQgJgKAAgOQAAgMAJgLQAKgKALAAQAMAAAKAKQAJAKAAANQAAAOgJAKQgKAKgMAAg");
	this.shape_339.setTransform(1283.3,304.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#B5DFEF").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAKgKALAAQAMAAAKAKQAJAKAAANQAAAOgJAKQgKAKgMAAQgLAAgKgKg");
	this.shape_340.setTransform(1283.3,304.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#B6DFEE").ss(1.1).p("AAAAiQgLAAgKgKQgJgKAAgOQAAgNAJgKQAKgKALAAQAMAAAKAKQAJALAAAMQAAAOgJAKQgKAKgMAAg");
	this.shape_341.setTransform(1302.5,304.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#B5DFEF").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAKgKALAAQANAAAIAKQAKAKAAANQAAANgKALQgIAKgNAAQgLAAgKgKg");
	this.shape_342.setTransform(1302.5,304.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#B6DFEE").ss(1.1).p("AAAAiQgLAAgKgKQgJgKAAgOQAAgNAJgKQAKgKALAAQANAAAJAKQAJAKAAANQAAAOgJAKQgJAKgNAAg");
	this.shape_343.setTransform(1322.9,304.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#B5DFEF").s().p("AgVAYQgJgKAAgOQAAgNAJgKQAJgKAMAAQANAAAJAKQAJAKAAANQAAAOgJAKQgJAKgNAAQgMAAgJgKg");
	this.shape_344.setTransform(1322.9,304.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#B5DFEF").s().p("AihB2IAAjrIFDAAIAADrg");
	this.shape_345.setTransform(1229.4,296.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("EgjEAGCIAAsDMBGJAAAIAAMDg");
	this.shape_346.setTransform(1260.1,384.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#60AEE3").s().p("EgoZAMPQgHAAgEgFQgGgFAAgHIAA37QAAgHAGgFQAEgFAHAAMBQzAAAQAHAAAEAFQAGAFAAAHIAAX7QAAAHgGAFQgEAFgHAAg");
	this.shape_347.setTransform(1239.4,356.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]}).wait(228));

	// VIDRO
	this.instance_15 = new lib.Path();
	this.instance_15.setTransform(1705,381.3,1,1,0,0,0,15.2,43);
	this.instance_15.alpha = 0.23;

	this.instance_16 = new lib.Path_1();
	this.instance_16.setTransform(1682.4,381.3,1,1,0,0,0,12.6,43);
	this.instance_16.alpha = 0.309;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15}]}).wait(228));

	// CANUDO
	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#183AA5").s().p("AjpJYIGSzFIBBAVImSTGg");
	this.shape_348.setTransform(1704.5,347.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#183AA5").s().p("Ahsp6IBDgJICWT+IhDAIg");
	this.shape_349.setTransform(1671.5,336.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_348}]}).to({state:[{t:this.shape_348}]},7).to({state:[{t:this.shape_348}]},6).to({state:[{t:this.shape_348}]},4).to({state:[{t:this.shape_348}]},3).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},3).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},6).to({state:[{t:this.shape_349}]},3).to({state:[{t:this.shape_348}]},3).to({state:[{t:this.shape_348}]},5).to({state:[{t:this.shape_348}]},5).to({state:[{t:this.shape_348}]},4).to({state:[{t:this.shape_348}]},5).to({state:[{t:this.shape_348}]},5).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},3).to({state:[{t:this.shape_348}]},4).to({state:[{t:this.shape_348}]},5).to({state:[{t:this.shape_348}]},5).to({state:[{t:this.shape_348}]},7).to({state:[{t:this.shape_348}]},6).to({state:[{t:this.shape_348}]},4).to({state:[{t:this.shape_348}]},3).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},3).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},6).to({state:[{t:this.shape_349}]},3).to({state:[{t:this.shape_348}]},3).to({state:[{t:this.shape_348}]},5).to({state:[{t:this.shape_348}]},5).to({state:[{t:this.shape_348}]},4).to({state:[{t:this.shape_348}]},5).to({state:[{t:this.shape_348}]},5).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},3).to({state:[{t:this.shape_348}]},4).to({state:[{t:this.shape_348}]},5).to({state:[{t:this.shape_348}]},7).to({state:[{t:this.shape_348}]},7).to({state:[{t:this.shape_348}]},6).to({state:[{t:this.shape_348}]},4).to({state:[{t:this.shape_348}]},3).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},3).to({state:[{t:this.shape_348}]},2).to({state:[{t:this.shape_348}]},6).to({state:[{t:this.shape_349}]},3).to({state:[{t:this.shape_348}]},3).to({state:[{t:this.shape_348}]},5).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_348).wait(7).to({rotation:-5.5,x:1703.3,y:338.9},0).wait(6).to({rotation:-10,x:1699.7,y:333.6},0).wait(4).to({rotation:-11.9,x:1693.1,y:339.7},0).wait(3).to({rotation:-14.6,x:1690.2,y:347.3},0).wait(2).to({rotation:-16.8,x:1687.3,y:351.5},0).wait(3).to({rotation:-23.1,x:1680.9,y:351.4},0).wait(2).to({x:1676.9,y:345.9},0).wait(6).to({rotation:-25,x:1674.5,y:342.4},0).to({_off:true},3).wait(3).to({_off:false,rotation:-28.3,x:1668.3,y:339.8},0).wait(5).to({rotation:-34,x:1662.1,y:335.3},0).wait(5).to({rotation:-39},0).wait(4).to({rotation:-34.5},0).wait(5).to({rotation:-30.7,x:1667.6,y:338.2},0).wait(5).to({rotation:-26,x:1672.5,y:342.6},0).wait(2).to({x:1676.8,y:351.3},0).wait(2).to({rotation:-22,x:1681.8,y:354.5},0).wait(2).to({rotation:-19.6,x:1688.2,y:351.3},0).wait(2).to({rotation:-11.1,x:1689.4},0).wait(3).to({x:1689.7,y:345.3},0).wait(4).to({rotation:-7.6,x:1692.3,y:341.9},0).wait(5).to({rotation:-1.2,x:1698,y:340.6},0).wait(5).to({rotation:0,x:1704.5,y:347.2},0).wait(7).to({rotation:-5.5,x:1703.3,y:338.9},0).wait(6).to({rotation:-10,x:1699.7,y:333.6},0).wait(4).to({rotation:-11.9,x:1693.1,y:339.7},0).wait(3).to({rotation:-14.6,x:1690.2,y:347.3},0).wait(2).to({rotation:-16.8,x:1687.3,y:351.5},0).wait(3).to({rotation:-23.1,x:1680.9,y:351.4},0).wait(2).to({x:1676.9,y:345.9},0).wait(6).to({rotation:-25,x:1674.5,y:342.4},0).to({_off:true},3).wait(3).to({_off:false,rotation:-28.3,x:1668.3,y:339.8},0).wait(5).to({rotation:-34,x:1662.1,y:335.3},0).wait(5).to({rotation:-39},0).wait(4).to({rotation:-34.5},0).wait(5).to({rotation:-30.7,x:1667.6,y:338.2},0).wait(5).to({rotation:-26,x:1672.5,y:342.6},0).wait(2).to({x:1676.8,y:351.3},0).wait(2).to({rotation:-22,x:1681.8,y:354.5},0).wait(2).to({rotation:-19.6,x:1688.2,y:351.3},0).wait(2).to({rotation:-11.1,x:1689.4},0).wait(3).to({x:1689.7,y:345.3},0).wait(4).to({rotation:-7.6,x:1692.3,y:341.9},0).wait(5).to({rotation:-1.2,x:1698,y:340.6},0).wait(7).to({rotation:0,x:1704.5,y:347.2},0).wait(7).to({rotation:-5.5,x:1703.3,y:338.9},0).wait(6).to({rotation:-10,x:1699.7,y:333.6},0).wait(4).to({rotation:-11.9,x:1693.1,y:339.7},0).wait(3).to({rotation:-14.6,x:1690.2,y:347.3},0).wait(2).to({rotation:-16.8,x:1687.3,y:351.5},0).wait(3).to({rotation:-23.1,x:1680.9,y:351.4},0).wait(2).to({x:1676.9,y:345.9},0).wait(6).to({rotation:-25,x:1674.5,y:342.4},0).to({_off:true},3).wait(3).to({_off:false,rotation:-28.3,x:1668.3,y:339.8},0).wait(5).to({rotation:-34,x:1662.1,y:335.3},0).wait(6));

	// CHASSELI
	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#FFFFFF").ss(2.9).p("AC5BRIlxih");
	this.shape_350.setTransform(1635.2,330.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#FFFFFF").ss(2.9).p("ADChAImDCB");
	this.shape_351.setTransform(1634.9,330.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#FFFFFF").ss(2.9).p("ABIjFIiPGL");
	this.shape_352.setTransform(1635,331.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#FFFFFF").ss(2.9).p("Ahfi0IC/Fp");
	this.shape_353.setTransform(1636.6,330.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#F4E6E4").s().p("AglAmQgRgQAAgWQAAgWARgQQAQgQAVAAQAXAAAQAQQAQAQAAAWQAAAWgQAQQgQARgXAAQgVAAgQgRg");
	this.shape_354.setTransform(1635.8,330.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#C4E5EF").s().p("AiOCUQg7g+AAhWQAAhVA7g+QA8g9BSAAQBTAAA8A9QA7A+AABVQAAA3gaAvQgZAugrAdIgBgBIhriwIAeDPQgQACgOAAQhSAAg8g9g");
	this.shape_355.setTransform(1635.5,331.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#5EC2DC").s().p("Ai+DHQhQhTAAh0QAAhzBQhSQBPhTBvAAQBwAABPBTQBQBSAABzQAABJgjBAQghA9g6AnIgBAAIiQjtIApEWQgYADgRAAQhvAAhPhSg");
	this.shape_356.setTransform(1635.6,330.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#D34993").s().p("AizFmIhSlOQg+hngLgOIgRiHQgKhIAIgRQAOgbBIAIQAKABAtAJQAhAHAWgBQAbgBAxgRQAygRAZgCQAdgCA2AOQA6APAaABQAUAAAigGIA4gJQAtgGAUAMQAaARgFAzIgEBcQgFBCgOATQgHAJghA4IghA0IhRFOg");
	this.shape_357.setTransform(1682.2,388);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AjsH1IhjmhIhAhdIhHnrIOtAAIhHHrIhABdIhjGhg");
	this.shape_358.setTransform(1682.2,381.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350}]}).wait(228));

	// CABO DO FONE
	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#E690A2").s().p("AADAXIgHAAQgGgBgEgEQgFgFABgGIAAgPQABgGAEgEQAFgFAGABIAHAAQAHAAAEAFQAEAEAAAHIgBAPQgBAGgEAEQgFAEgFAAIgBAAg");
	this.shape_359.setTransform(786.3,750.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#264193").s().p("AgsCCIAKjhQABgQAMgLQAMgLAPAAIACAAQAQABALAMQALAMgBARIgHCeIgBABIgDBCg");
	this.shape_360.setTransform(788,713.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#E690A2").s().p("AgZBcIAJi5IAqACIgJC5g");
	this.shape_361.setTransform(787.1,735.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#57ADDF").ss(3.2).p("AjAwCQAkADAiAUQAiATATAdQBOBzAODvQAHBmgPCJQgDAYgbDXQgpErAoCsQAQBJAoBjQAYA4AxBvQBUDLgYCJ");
	this.shape_362.setTransform(770.7,608.4);

	this.instance_17 = new lib.Symbol1();
	this.instance_17.setTransform(753.1,506.4,1,1,5.5,0,0,-18.9,-122.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_362,p:{rotation:0,x:770.7,y:608.4}},{t:this.shape_361,p:{rotation:0,x:787.1,y:735.5}},{t:this.shape_360,p:{rotation:0,x:788,y:713.7}},{t:this.shape_359,p:{rotation:0,x:786.3,y:750.5}}]}).to({state:[{t:this.shape_362,p:{rotation:5,x:761.5,y:609.6}},{t:this.shape_361,p:{rotation:5,x:766.8,y:737.6}},{t:this.shape_360,p:{rotation:5,x:769.7,y:716}},{t:this.shape_359,p:{rotation:5,x:764.8,y:752.5}}]},5).to({state:[{t:this.instance_17}]},5).to({state:[{t:this.instance_17}]},7).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},11).to({state:[{t:this.instance_17}]},7).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},9).to({state:[{t:this.instance_17}]},6).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},19).to({state:[{t:this.instance_17}]},7).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},9).to({state:[{t:this.instance_17}]},13).to({state:[{t:this.instance_17}]},7).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},5).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},5).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},5).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},5).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},7).to({state:[{t:this.instance_17}]},7).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},5).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_17}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10).to({_off:false},0).wait(7).to({rotation:2.3,x:753,y:506.3},0).wait(4).to({regX:-18.8,rotation:0.8,x:753.1,y:506.4},0).wait(11).to({rotation:1.7},0).wait(7).to({rotation:3.5},0).wait(3).to({regX:-18.9,rotation:5.7,y:506.3},0).wait(9).to({regY:-122.8,rotation:8.7,x:753,y:506.4},0).wait(6).to({rotation:7,x:753.1,y:506.3},0).wait(4).to({rotation:4.2,y:506.4},0).wait(19).to({rotation:6.7},0).wait(7).to({rotation:8.7,x:753,y:506.3},0).wait(3).to({rotation:9.4,x:753.1},0).wait(9).to({rotation:12.4,y:506.4},0).wait(13).to({rotation:8.4},0).wait(7).to({rotation:1.9,x:753,y:506.3},0).wait(4).to({rotation:-5.5,x:753.1},0).wait(5).to({rotation:-12.5,y:506.4},0).wait(4).to({rotation:-14.8,x:753},0).wait(5).to({regX:-18.8,rotation:-2.8,x:753.1,y:506.3},0).wait(3).to({regX:-18.9,rotation:3.9,y:506.4},0).wait(4).to({rotation:3.9},0).wait(3).to({rotation:9.4,y:506.3},0).wait(4).to({rotation:12.4},0).wait(8).to({regY:-122.7,rotation:14.5,y:506.4},0).wait(5).to({regX:-18.8,regY:-122.8,rotation:13.6},0).wait(4).to({rotation:11.1},0).wait(7).to({rotation:9.1,x:753.2,y:506.3},0).wait(7).to({regX:-18.9,rotation:3.6,x:753.1,y:506.4},0).wait(3).to({regX:-18.8,rotation:-0.1,y:506.3},0).wait(3).to({regX:-18.9,rotation:-5.5},0).wait(4).to({regY:-122.7,rotation:-12.3,x:753.2,y:506.4},0).wait(5).to({rotation:-16.5},0).wait(4).to({regY:-122.8,rotation:-9.5,x:753.1},0).wait(4).to({regX:-18.8,rotation:-3.8,x:753.2,y:506.3},0).wait(4).to({rotation:1.4,y:506.4},0).wait(4).to({rotation:6.9,x:753.3,y:506.3},0).wait(3).to({regY:-122.7,rotation:10.6,x:753.2,y:506.4},0).wait(2).to({regX:-18.9,rotation:14.1,y:506.3},0).wait(2).to({rotation:11.6},0).wait(8));

	// FONE DE OUVIDO
	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#57ADDF").ss(3.2).p("A7jLzQBEDTCSCpQA5BCBOAsQAvAbBvAuQDLBSDfgDQDhgDDGhZQDXhgCfi3QCdi4BAjiQAdh3AQg7QAehmArg+QA/hZB2g2QBcgrCIgaQBNgOCdgbQCFgaBYgxQCIhLBeiYQBSiEAsiwQAchxAcjUQAejkAWhjQAKgpAJgXQANgjAUgWQAjgmA6AF");
	this.shape_363.setTransform(573.4,645.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#94D3EC").ss(2.8,1).p("AjCCjIGFlF");
	this.shape_364.setTransform(390.8,715.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#2E97D4").s().p("AhrDXQgNgGgIgUQgHgPgigFQgmgFgXgeIgQgcIGRlFIAzBBQAwBFgIAVQgMAfgwA4Qg6BHhCAwQhLA3ghAPQgUAIgRAAQgNAAgLgFg");
	this.shape_365.setTransform(391.4,716.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#55B5D3").s().p("AiyBcQAcAOAOAdQALgIADgOIAQAGQAGgGgDgSQgEgRAHgFQAFgDAJACQALACAEgCQAIgCABgLQACgJgEgKQgJgaAJgIQAJgHAbAJQAaAMAHgKQADgEABgHQACgKADgEQAEgFANgDQAPgDAEgEQAFgDAEgJIAEgOQAEgIAGgEQAIgFAGAEQADgZgMgWIA0ARQgIghgUgcQArAPAdAjIAFAFIgkAuQgaAfgLALQgMALggAUIjWCTQgRgigJgjg");
	this.shape_366.setTransform(385.4,708.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#8CCFDF").s().p("AjCCsQgWgaABgiQABgiApglIBUhBQBIhCAogkQBPhBAjACQAkACAZAfQANAPAGAPImFE9QgLgGgLgNg");
	this.shape_367.setTransform(385.2,707.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#95D5F6").ss(2.8,1).p("AAjD8IhGn3");
	this.shape_368.setTransform(330.5,692.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#35A6DE").s().p("AAiD2QgdgUgMAHQgTAKgOgEQgcgIgQgkQgPghgUhcQgRhOAEhbQAChMANgfQAIgVBSgTQAngKAogFIBSH/QgMAHgTAEIgRABQgcAAgYgQg");
	this.shape_369.setTransform(327.2,692.4);

	this.instance_18 = new lib.Path_8();
	this.instance_18.setTransform(339.6,691.8,1,1,0,0,0,7,21.2);
	this.instance_18.alpha = 0.469;

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#92D0D4").s().p("AgKD+IhPnxIAigKQAogFAaAWQAcAWAOBlQAIA3AKBfIASBpQAFA3gWAbQgVAagiAFg");
	this.shape_370.setTransform(341.5,690.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#72C7DF").s().p("AhWBLIBJi9IBkAoIhJC9g");
	this.shape_371.setTransform(425.9,682.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#80CBE0").s().p("AhWBMIBJi+IBkAnIhJC+g");
	this.shape_372.setTransform(329.2,645.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#2E97D4").ss(9.5).p("AoQAZQAJglAWg2QAshtBChPQDUj8FkCJQFmCJgKFSQgDBqgoByQgUA5gTAj");
	this.shape_373.setTransform(383.6,637.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#93D3EC").ss(14.7).p("AnwAAQAjiCBkhsQDHjWFDB8QFGB9AKEsQAFCXg8B+");
	this.shape_374.setTransform(382.8,640);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#94D3EC").ss(9.5,1).p("AgxBfIBXhHIgfg9IAag5");
	this.shape_375.setTransform(417.9,698.7);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#95D5F6").ss(9.5,1).p("AgTBjIgThwIA/gaIATg7");
	this.shape_376.setTransform(322.2,661);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.instance_18},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363}]}).wait(228));

	// BIKE
	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#DD3382").s().p("AjJBGIAAiLIGTAAIAACLg");
	this.shape_377.setTransform(1234.4,752.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#EEEEEF").ss(6.9).p("AjOAAIGdAA");
	this.shape_378.setTransform(1206.9,752.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#CFA4E4").s().p("ABxEZImygBIB+gkQCSgzBohLQCKhiBOiiQAnhSAMg/IhJIGQghA1gpAEQgsgHgSAAg");
	this.shape_379.setTransform(1379.6,588.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#95D5F6").ss(11.8).p("AodhIIBeBIIP+A8");
	this.shape_380.setTransform(1095.2,740.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#95D5F6").ss(11.8).p("AptJVITbyp");
	this.shape_381.setTransform(1260.5,675.3);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#95D5F6").ss(11.8).p("Ah8CDID5kG");
	this.shape_382.setTransform(1123,646.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#95D5F6").ss(11.8,1).p("AxsEaIBdA6QBxA7BgAEQC3AHCRhSQArgZGnn+QDRkBDLj7IHiReIEUFv");
	this.shape_383.setTransform(1269.8,655.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#95D5F6").ss(11.8).p("AjEnaIGJO1");
	this.shape_384.setTransform(1152.8,676.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#95D5F6").ss(11.8).p("AKgoRQjegjjeAsQjXAqi2BsQi5Brh8CbQiBCegtC7QgVBYACBtQACBaAKAV");
	this.shape_385.setTransform(1336.3,688);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#95D5F6").ss(11.8).p("Ax5F7QAMg0AghNQBBibBmiAQFGmfI9gHQKOgHFJHLQBnCOA6CtQAdBWAIA6");
	this.shape_386.setTransform(1041,677.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#95D5F6").ss(11.8).p("Ag6JUIsWw/QgFgQAAgVQAAgrAYgcQAYgcJVAeQEpAPEmAVIAPgDQAWAAAoAQQAoAQCnB1QBUA6BLA3IspOPg");
	this.shape_387.setTransform(1043.5,672.4);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#DD3382").s().p("AgyAuQgVgUAAgaQAAgaAVgSQAVgUAdABQAegBAVAUQAVASAAAaQAAAagVAUQgVASgeABQgdgBgVgSg");
	this.shape_388.setTransform(1180.6,751.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#EEEEEF").s().p("AhQBJQgigfAAgqQAAgpAigeQAigfAuAAQAvAAAiAfQAiAeAAApQAAArgiAeQgiAegvAAQguAAgigeg");
	this.shape_389.setTransform(1180.6,751.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#EDB8E4").s().p("AjmGIQgUgLhilLIhelIIA0gcQArgZB0gcQCBgfBygIQBrgIBjAvQArAVBCAxQAYASAwABQAZABATgDIgqEuQgtE3gQAcQgQAdhTAAIhRgGQhaAFhcACIhbABQhmAAgPgIg");
	this.shape_390.setTransform(1369,576.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#EAE7EE").ss(11.8).p("AmlkOIDjg9II8AAIAALS");
	this.shape_391.setTransform(1349.6,600.4);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#EDB8E4").s().p("AglCRQhxgQijg7IiMg4QgFgUACgaQADgzAigTQAggTDPACID4AEQAjgCCagcQCNgSASArQAEALAXAkQAQAagBAPQgDAqiOAwQhDAWg3AbQgyAYgTAIQgfANgxAAQgkAAgrgHg");
	this.shape_392.setTransform(1105.6,572.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#EDB8E4").ss(14.2).p("AEDgwIoFBh");
	this.shape_393.setTransform(1255.7,518.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#183AA5").s().p("AglBXIgRgHQgPAEgPABQgeADAAgMQAAgMgNgvIgNgqIA8gQIAMgRQATgTAdgKQAcgJAcANQAPAHAIAIIAwAIIAiA/Ig4AmIgmgDQgCAMgHANQgNAagVACIgKABQgPAAgQgFg");
	this.shape_394.setTransform(1294.1,510.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#183AA5").ss(11.3,0,1).p("AAUBCIBFhHQgZAGgdAEQg4AJgVgPQgVgRgRgdIgNgb");
	this.shape_395.setTransform(1314.3,520);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#EAE7EE").ss(11.8).p("AASEpIg7iXQgphlgDgRQgMg7Asg4QAPgTA3hDQA2g/ASgX");
	this.shape_396.setTransform(1304,551.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#EAE7EE").ss(11.8).p("ABWDnIirnN");
	this.shape_397.setTransform(1125.9,608.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#95D5F6").s().p("AFqEYQhYg4gmhIQhKhBgbgVQhFg2g5gYQhTgnhwggQhSgXh5gaQgagFgrgFIhFgKQhcgBhAgCQh5gDgUgdQgDgFAfgLQAggLAAgDQgDgaAkgsQAkgsAZgCQBpgIIBAVQItAWBKAgQADABADAEQBnATBEBUQBFBUAABsQAAB9hWBZQhVBYh5AAQhSAAhZg4g");
	this.shape_398.setTransform(1129,742.7);

	this.instance_19 = new lib.Layer20copy();
	this.instance_19.setTransform(1384.8,755.2,1,1,0,0,0,106.2,108.3);
	this.instance_19.alpha = 0.738;

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#2E60D1").ss(11.8).p("APqAAQAADNhPC7QhMC2iKCMQiLCLi0BNQi6BPjMAAQjLAAi6hPQi0hNiLiLQiKiMhMi2QhPi7AAjNQAAjMBPi8QBMi1CKiMQCLiLC0hNQC6hPDLAAQDMAAC6BPQC0BNCLCLQCKCMBMC1QBPC8AADMg");
	this.shape_399.setTransform(1384,752.7);

	this.instance_20 = new lib.Layer20();
	this.instance_20.setTransform(1041.7,762.2,1,1,0,0,0,108.7,115);
	this.instance_20.alpha = 0.738;

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#2E60D1").ss(11.8).p("AQDAAQAADNhQC7QhOC2iPCMQiNCLi5BNQjABPjQAAQjQAAi/hPQi4hNiPiLQiOiMhOi2QhRi7AAjNQAAjMBRi8QBOi1COiMQCPiLC4hNQC/hPDQAAQDQAADABPQC4BNCOCLQCPCMBOC1QBQC8AADMg");
	this.shape_400.setTransform(1041.3,752.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_400,p:{x:1041.3,y:752.7}},{t:this.instance_20,p:{rotation:0,x:1041.7,y:762.2,regX:108.7,regY:115}},{t:this.shape_399,p:{scaleX:1,scaleY:1,x:1384,y:752.7}},{t:this.instance_19,p:{rotation:0,x:1384.8,y:755.2,regX:106.2,regY:108.3}},{t:this.shape_398,p:{x:1129,y:742.7}},{t:this.shape_397,p:{x:1125.9,y:608.3}},{t:this.shape_396,p:{x:1304,y:551.5}},{t:this.shape_395,p:{x:1314.3,y:520}},{t:this.shape_394,p:{x:1294.1,y:510.9}},{t:this.shape_393,p:{x:1255.7,y:518.6}},{t:this.shape_392,p:{x:1105.6,y:572.4}},{t:this.shape_391,p:{x:1349.6,y:600.4}},{t:this.shape_390,p:{x:1369,y:576.9}},{t:this.shape_389,p:{x:1180.6,y:751.7}},{t:this.shape_388,p:{x:1180.6,y:751.7}},{t:this.shape_387,p:{x:1043.5,y:672.4}},{t:this.shape_386,p:{x:1041,y:677.9}},{t:this.shape_385,p:{x:1336.3,y:688}},{t:this.shape_384,p:{x:1152.8,y:676.2}},{t:this.shape_383,p:{x:1269.8,y:655.7}},{t:this.shape_382,p:{x:1123,y:646.9}},{t:this.shape_381,p:{x:1260.5,y:675.3}},{t:this.shape_380,p:{x:1095.2,y:740.3}},{t:this.shape_379,p:{x:1379.6,y:588.4}},{t:this.shape_378,p:{rotation:0,x:1206.9,y:752.1,regX:0,regY:0}},{t:this.shape_377,p:{x:1234.4,y:752.7}}]}).to({state:[{t:this.shape_400,p:{x:1066.4,y:754.7}},{t:this.instance_20,p:{rotation:48.7,x:1062,y:759.1,regX:108.7,regY:115}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1408,y:754.6}},{t:this.instance_19,p:{rotation:37.7,x:1409.9,y:757.2,regX:106.2,regY:108.3}},{t:this.shape_398,p:{x:1154.1,y:744.7}},{t:this.shape_397,p:{x:1151,y:610.3}},{t:this.shape_396,p:{x:1329.1,y:553.5}},{t:this.shape_395,p:{x:1339.4,y:522}},{t:this.shape_394,p:{x:1319.2,y:512.9}},{t:this.shape_393,p:{x:1280.8,y:520.6}},{t:this.shape_392,p:{x:1130.7,y:574.4}},{t:this.shape_391,p:{x:1374.7,y:602.4}},{t:this.shape_390,p:{x:1394.1,y:578.9}},{t:this.shape_389,p:{x:1205.7,y:753.7}},{t:this.shape_388,p:{x:1205.7,y:753.7}},{t:this.shape_387,p:{x:1068.6,y:674.4}},{t:this.shape_386,p:{x:1066.1,y:679.9}},{t:this.shape_385,p:{x:1361.4,y:690}},{t:this.shape_384,p:{x:1177.9,y:678.2}},{t:this.shape_383,p:{x:1294.9,y:657.7}},{t:this.shape_382,p:{x:1148.1,y:648.9}},{t:this.shape_381,p:{x:1285.6,y:677.3}},{t:this.shape_380,p:{x:1120.3,y:742.3}},{t:this.shape_379,p:{x:1404.7,y:590.4}},{t:this.shape_378,p:{rotation:24.7,x:1233.1,y:767.2,regX:0,regY:0}},{t:this.shape_377,p:{x:1257.1,y:776.7}}]},12).to({state:[{t:this.shape_400,p:{x:1092,y:755.7}},{t:this.instance_20,p:{rotation:81.9,x:1080.8,y:756.2,regX:108.7,regY:115}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1433.6,y:755.6}},{t:this.instance_19,p:{rotation:73.9,x:1432.3,y:759.5,regX:106.2,regY:108.3}},{t:this.shape_398,p:{x:1179.7,y:745.7}},{t:this.shape_397,p:{x:1176.5,y:611.3}},{t:this.shape_396,p:{x:1354.6,y:554.5}},{t:this.shape_395,p:{x:1364.9,y:523}},{t:this.shape_394,p:{x:1344.7,y:513.9}},{t:this.shape_393,p:{x:1306.4,y:521.6}},{t:this.shape_392,p:{x:1156.2,y:575.4}},{t:this.shape_391,p:{x:1400.2,y:603.4}},{t:this.shape_390,p:{x:1419.7,y:579.9}},{t:this.shape_389,p:{x:1231.2,y:754.7}},{t:this.shape_388,p:{x:1231.2,y:754.7}},{t:this.shape_387,p:{x:1094.1,y:675.4}},{t:this.shape_386,p:{x:1091.7,y:680.9}},{t:this.shape_385,p:{x:1386.9,y:691}},{t:this.shape_384,p:{x:1203.5,y:679.2}},{t:this.shape_383,p:{x:1320.4,y:658.7}},{t:this.shape_382,p:{x:1173.6,y:649.9}},{t:this.shape_381,p:{x:1311.1,y:678.3}},{t:this.shape_380,p:{x:1145.8,y:743.3}},{t:this.shape_379,p:{x:1430.2,y:591.4}},{t:this.shape_378,p:{rotation:48.5,x:1248.2,y:777.8,regX:0,regY:0}},{t:this.shape_377,p:{x:1265.6,y:797.8}}]},6).to({state:[{t:this.shape_400,p:{x:1119.3,y:755.7}},{t:this.instance_20,p:{rotation:99.6,x:1119.6,y:752.5,regX:106.6,regY:103.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1460.9,y:755.6}},{t:this.instance_19,p:{rotation:99.6,x:1462,y:750.5,regX:98.9,regY:104.5}},{t:this.shape_398,p:{x:1207,y:745.7}},{t:this.shape_397,p:{x:1203.8,y:611.3}},{t:this.shape_396,p:{x:1381.9,y:554.5}},{t:this.shape_395,p:{x:1392.2,y:523}},{t:this.shape_394,p:{x:1372,y:513.9}},{t:this.shape_393,p:{x:1333.7,y:521.6}},{t:this.shape_392,p:{x:1183.5,y:575.4}},{t:this.shape_391,p:{x:1427.5,y:603.4}},{t:this.shape_390,p:{x:1447,y:579.9}},{t:this.shape_389,p:{x:1258.5,y:754.7}},{t:this.shape_388,p:{x:1258.5,y:754.7}},{t:this.shape_387,p:{x:1121.4,y:675.4}},{t:this.shape_386,p:{x:1119,y:680.9}},{t:this.shape_385,p:{x:1414.2,y:691}},{t:this.shape_384,p:{x:1230.8,y:679.2}},{t:this.shape_383,p:{x:1347.7,y:658.7}},{t:this.shape_382,p:{x:1200.9,y:649.9}},{t:this.shape_381,p:{x:1338.4,y:678.3}},{t:this.shape_380,p:{x:1173.1,y:743.3}},{t:this.shape_379,p:{x:1457.5,y:591.4}},{t:this.shape_378,p:{rotation:89.9,x:1258.4,y:755.2,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1258.6,y:812.3}}]},5).to({state:[{t:this.shape_400,p:{x:1142.7,y:755.7}},{t:this.instance_20,p:{rotation:125.8,x:1140.2,y:760.5,regX:109.7,regY:106}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1484.3,y:755.6}},{t:this.instance_19,p:{rotation:133.9,x:1483.9,y:758.7,regX:104.7,regY:106.1}},{t:this.shape_398,p:{x:1230.4,y:745.7}},{t:this.shape_397,p:{x:1227.2,y:611.3}},{t:this.shape_396,p:{x:1405.3,y:554.5}},{t:this.shape_395,p:{x:1415.6,y:523}},{t:this.shape_394,p:{x:1395.4,y:513.9}},{t:this.shape_393,p:{x:1357.1,y:521.6}},{t:this.shape_392,p:{x:1206.9,y:575.4}},{t:this.shape_391,p:{x:1450.9,y:603.4}},{t:this.shape_390,p:{x:1470.4,y:579.9}},{t:this.shape_389,p:{x:1281.9,y:754.7}},{t:this.shape_388,p:{x:1281.9,y:754.7}},{t:this.shape_387,p:{x:1144.8,y:675.4}},{t:this.shape_386,p:{x:1142.4,y:680.9}},{t:this.shape_385,p:{x:1437.6,y:691}},{t:this.shape_384,p:{x:1254.2,y:679.2}},{t:this.shape_383,p:{x:1371.1,y:658.7}},{t:this.shape_382,p:{x:1224.3,y:649.9}},{t:this.shape_381,p:{x:1361.8,y:678.3}},{t:this.shape_380,p:{x:1196.5,y:743.3}},{t:this.shape_379,p:{x:1480.9,y:591.4}},{t:this.shape_378,p:{rotation:118.9,x:1281.9,y:755.2,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1244.9,y:799.3}}]},4).to({state:[{t:this.shape_400,p:{x:1172.4,y:755.7}},{t:this.instance_20,p:{rotation:160,x:1171.2,y:755.9,regX:109.7,regY:106}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1514,y:755.6}},{t:this.instance_19,p:{rotation:165.6,x:1513.9,y:756.6,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1260.1,y:745.7}},{t:this.shape_397,p:{x:1257,y:611.3}},{t:this.shape_396,p:{x:1435.1,y:554.5}},{t:this.shape_395,p:{x:1445.4,y:523}},{t:this.shape_394,p:{x:1425.2,y:513.9}},{t:this.shape_393,p:{x:1386.8,y:521.6}},{t:this.shape_392,p:{x:1236.7,y:575.4}},{t:this.shape_391,p:{x:1480.7,y:603.4}},{t:this.shape_390,p:{x:1500.1,y:579.9}},{t:this.shape_389,p:{x:1311.7,y:754.7}},{t:this.shape_388,p:{x:1311.7,y:754.7}},{t:this.shape_387,p:{x:1174.6,y:675.4}},{t:this.shape_386,p:{x:1172.1,y:680.9}},{t:this.shape_385,p:{x:1467.4,y:691}},{t:this.shape_384,p:{x:1283.9,y:679.2}},{t:this.shape_383,p:{x:1400.9,y:658.7}},{t:this.shape_382,p:{x:1254.1,y:649.9}},{t:this.shape_381,p:{x:1391.6,y:678.3}},{t:this.shape_380,p:{x:1226.3,y:743.3}},{t:this.shape_379,p:{x:1510.7,y:591.4}},{t:this.shape_378,p:{rotation:154.9,x:1311.7,y:755.2,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1251.7,y:776.8}}]},4).to({state:[{t:this.shape_400,p:{x:1198.4,y:756.7}},{t:this.instance_20,p:{rotation:-130.1,x:1197.2,y:756.8,regX:109.7,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1540,y:756.6}},{t:this.instance_19,p:{rotation:-124.2,x:1539.9,y:757.6,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1286.1,y:746.7}},{t:this.shape_397,p:{x:1282.9,y:612.3}},{t:this.shape_396,p:{x:1461,y:555.5}},{t:this.shape_395,p:{x:1471.3,y:524}},{t:this.shape_394,p:{x:1451.1,y:514.9}},{t:this.shape_393,p:{x:1412.8,y:522.6}},{t:this.shape_392,p:{x:1262.6,y:576.4}},{t:this.shape_391,p:{x:1506.6,y:604.4}},{t:this.shape_390,p:{x:1526.1,y:580.9}},{t:this.shape_389,p:{x:1337.6,y:755.7}},{t:this.shape_388,p:{x:1337.6,y:755.7}},{t:this.shape_387,p:{x:1200.5,y:676.4}},{t:this.shape_386,p:{x:1198.1,y:681.9}},{t:this.shape_385,p:{x:1493.3,y:692}},{t:this.shape_384,p:{x:1309.9,y:680.2}},{t:this.shape_383,p:{x:1426.8,y:659.7}},{t:this.shape_382,p:{x:1280,y:650.9}},{t:this.shape_381,p:{x:1417.5,y:679.3}},{t:this.shape_380,p:{x:1252.2,y:744.3}},{t:this.shape_379,p:{x:1536.6,y:592.4}},{t:this.shape_378,p:{rotation:-171.4,x:1337.5,y:756.3,regX:-29.2,regY:-0.4}},{t:this.shape_377,p:{x:1272.4,y:746.8}}]},5).to({state:[{t:this.shape_400,p:{x:1229.3,y:756.7}},{t:this.instance_20,p:{rotation:-91.6,x:1228.2,y:756.9,regX:109.7,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1570.9,y:756.6}},{t:this.instance_19,p:{rotation:-88.7,x:1570.8,y:757.6,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1317,y:746.7}},{t:this.shape_397,p:{x:1313.9,y:612.3}},{t:this.shape_396,p:{x:1492,y:555.5}},{t:this.shape_395,p:{x:1502.3,y:524}},{t:this.shape_394,p:{x:1482.1,y:514.9}},{t:this.shape_393,p:{x:1443.7,y:522.6}},{t:this.shape_392,p:{x:1293.6,y:576.4}},{t:this.shape_391,p:{x:1537.6,y:604.4}},{t:this.shape_390,p:{x:1557,y:580.9}},{t:this.shape_389,p:{x:1368.6,y:755.7}},{t:this.shape_388,p:{x:1368.6,y:755.7}},{t:this.shape_387,p:{x:1231.5,y:676.4}},{t:this.shape_386,p:{x:1229,y:681.9}},{t:this.shape_385,p:{x:1524.3,y:692}},{t:this.shape_384,p:{x:1340.8,y:680.2}},{t:this.shape_383,p:{x:1457.8,y:659.7}},{t:this.shape_382,p:{x:1311,y:650.9}},{t:this.shape_381,p:{x:1448.5,y:679.3}},{t:this.shape_380,p:{x:1283.2,y:744.3}},{t:this.shape_379,p:{x:1567.6,y:592.4}},{t:this.shape_378,p:{rotation:-132.4,x:1368.5,y:756.3,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1317.9,y:716.6}}]},4).to({state:[{t:this.shape_400,p:{x:1264.5,y:759.7}},{t:this.instance_20,p:{rotation:-61.6,x:1267.4,y:759.9,regX:109.7,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1606.1,y:759.6}},{t:this.instance_19,p:{rotation:-46.5,x:1605.9,y:760.6,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1352.2,y:749.7}},{t:this.shape_397,p:{x:1349,y:615.3}},{t:this.shape_396,p:{x:1527.1,y:558.5}},{t:this.shape_395,p:{x:1537.4,y:527}},{t:this.shape_394,p:{x:1517.2,y:517.9}},{t:this.shape_393,p:{x:1478.9,y:525.6}},{t:this.shape_392,p:{x:1328.7,y:579.4}},{t:this.shape_391,p:{x:1572.7,y:607.4}},{t:this.shape_390,p:{x:1592.2,y:583.9}},{t:this.shape_389,p:{x:1403.7,y:758.7}},{t:this.shape_388,p:{x:1403.7,y:758.7}},{t:this.shape_387,p:{x:1266.6,y:679.4}},{t:this.shape_386,p:{x:1264.2,y:684.9}},{t:this.shape_385,p:{x:1559.4,y:695}},{t:this.shape_384,p:{x:1376,y:683.2}},{t:this.shape_383,p:{x:1492.9,y:662.7}},{t:this.shape_382,p:{x:1346.1,y:653.9}},{t:this.shape_381,p:{x:1483.6,y:682.3}},{t:this.shape_380,p:{x:1318.3,y:747.3}},{t:this.shape_379,p:{x:1602.7,y:595.4}},{t:this.shape_378,p:{rotation:-94.4,x:1403.6,y:759.2,regX:-29.3,regY:-0.5}},{t:this.shape_377,p:{x:1399.6,y:705.4}}]},5).to({state:[{t:this.shape_400,p:{x:1289.4,y:759.7}},{t:this.instance_20,p:{rotation:-35.6,x:1292.3,y:759.9,regX:109.7,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1631,y:759.6}},{t:this.instance_19,p:{rotation:-18.6,x:1630.9,y:760.6,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1377.1,y:749.7}},{t:this.shape_397,p:{x:1374,y:615.3}},{t:this.shape_396,p:{x:1552.1,y:558.5}},{t:this.shape_395,p:{x:1562.4,y:527}},{t:this.shape_394,p:{x:1542.2,y:517.9}},{t:this.shape_393,p:{x:1503.8,y:525.6}},{t:this.shape_392,p:{x:1353.7,y:579.4}},{t:this.shape_391,p:{x:1597.7,y:607.4}},{t:this.shape_390,p:{x:1617.1,y:583.9}},{t:this.shape_389,p:{x:1428.7,y:758.7}},{t:this.shape_388,p:{x:1428.7,y:758.7}},{t:this.shape_387,p:{x:1291.6,y:679.4}},{t:this.shape_386,p:{x:1289.1,y:684.9}},{t:this.shape_385,p:{x:1584.4,y:695}},{t:this.shape_384,p:{x:1400.9,y:683.2}},{t:this.shape_383,p:{x:1517.9,y:662.7}},{t:this.shape_382,p:{x:1371.1,y:653.9}},{t:this.shape_381,p:{x:1508.6,y:682.3}},{t:this.shape_380,p:{x:1343.3,y:747.3}},{t:this.shape_379,p:{x:1627.7,y:595.4}},{t:this.shape_378,p:{rotation:-56.4,x:1428.6,y:759.2,regX:-29.3,regY:-0.5}},{t:this.shape_377,p:{x:1457.5,y:711.1}}]},5).to({state:[{t:this.shape_400,p:{x:1323.4,y:756.5}},{t:this.instance_20,p:{rotation:0,x:1323.8,y:766.1,regX:108.7,regY:115}},{t:this.shape_399,p:{scaleX:1,scaleY:1,x:1666.1,y:756.6}},{t:this.instance_19,p:{rotation:0,x:1666.9,y:759,regX:106.2,regY:108.3}},{t:this.shape_398,p:{x:1411.1,y:746.6}},{t:this.shape_397,p:{x:1408,y:612.1}},{t:this.shape_396,p:{x:1586.1,y:555.3}},{t:this.shape_395,p:{x:1596.4,y:523.8}},{t:this.shape_394,p:{x:1576.2,y:514.8}},{t:this.shape_393,p:{x:1537.8,y:522.4}},{t:this.shape_392,p:{x:1387.7,y:576.3}},{t:this.shape_391,p:{x:1631.7,y:604.3}},{t:this.shape_390,p:{x:1651.1,y:580.8}},{t:this.shape_389,p:{x:1462.7,y:755.6}},{t:this.shape_388,p:{x:1462.7,y:755.6}},{t:this.shape_387,p:{x:1325.6,y:676.2}},{t:this.shape_386,p:{x:1323.1,y:681.7}},{t:this.shape_385,p:{x:1618.4,y:691.8}},{t:this.shape_384,p:{x:1434.9,y:680}},{t:this.shape_383,p:{x:1551.9,y:659.5}},{t:this.shape_382,p:{x:1405.1,y:650.8}},{t:this.shape_381,p:{x:1542.6,y:679.2}},{t:this.shape_380,p:{x:1377.3,y:744.1}},{t:this.shape_379,p:{x:1661.7,y:592.2}},{t:this.shape_378,p:{rotation:0,x:1489,y:756,regX:0,regY:0}},{t:this.shape_377,p:{x:1516.5,y:756.5}}]},4).to({state:[{t:this.shape_400,p:{x:1292.3,y:762.5}},{t:this.instance_20,p:{rotation:-35.6,x:1295.2,y:762.8,regX:109.7,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1633.9,y:762.4}},{t:this.instance_19,p:{rotation:-18.6,x:1633.8,y:763.5,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1380,y:752.6}},{t:this.shape_397,p:{x:1376.8,y:618.1}},{t:this.shape_396,p:{x:1554.9,y:561.3}},{t:this.shape_395,p:{x:1565.2,y:529.8}},{t:this.shape_394,p:{x:1545,y:520.8}},{t:this.shape_393,p:{x:1506.7,y:528.4}},{t:this.shape_392,p:{x:1356.5,y:582.3}},{t:this.shape_391,p:{x:1600.5,y:610.3}},{t:this.shape_390,p:{x:1620,y:586.8}},{t:this.shape_389,p:{x:1431.5,y:761.6}},{t:this.shape_388,p:{x:1431.5,y:761.6}},{t:this.shape_387,p:{x:1294.4,y:682.2}},{t:this.shape_386,p:{x:1292,y:687.7}},{t:this.shape_385,p:{x:1587.2,y:697.8}},{t:this.shape_384,p:{x:1403.8,y:686}},{t:this.shape_383,p:{x:1520.7,y:665.5}},{t:this.shape_382,p:{x:1373.9,y:656.8}},{t:this.shape_381,p:{x:1511.4,y:685.2}},{t:this.shape_380,p:{x:1346.1,y:750.1}},{t:this.shape_379,p:{x:1630.5,y:598.2}},{t:this.shape_378,p:{rotation:-56.4,x:1431.5,y:762,regX:-29.3,regY:-0.5}},{t:this.shape_377,p:{x:1460.3,y:713.9}}]},11).to({state:[{t:this.shape_400,p:{x:1249.3,y:764.5}},{t:this.instance_20,p:{rotation:-61.6,x:1252.2,y:764.9,regX:109.6,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1590.9,y:764.4}},{t:this.instance_19,p:{rotation:-46.5,x:1590.7,y:765.4,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1337,y:754.6}},{t:this.shape_397,p:{x:1333.8,y:620.1}},{t:this.shape_396,p:{x:1511.9,y:563.3}},{t:this.shape_395,p:{x:1522.2,y:531.8}},{t:this.shape_394,p:{x:1502,y:522.8}},{t:this.shape_393,p:{x:1463.7,y:530.4}},{t:this.shape_392,p:{x:1313.5,y:584.3}},{t:this.shape_391,p:{x:1557.5,y:612.3}},{t:this.shape_390,p:{x:1577,y:588.8}},{t:this.shape_389,p:{x:1388.5,y:763.6}},{t:this.shape_388,p:{x:1388.5,y:763.6}},{t:this.shape_387,p:{x:1251.4,y:684.2}},{t:this.shape_386,p:{x:1249,y:689.7}},{t:this.shape_385,p:{x:1544.2,y:699.8}},{t:this.shape_384,p:{x:1360.8,y:688}},{t:this.shape_383,p:{x:1477.7,y:667.5}},{t:this.shape_382,p:{x:1330.9,y:658.8}},{t:this.shape_381,p:{x:1468.4,y:687.2}},{t:this.shape_380,p:{x:1303.1,y:752.1}},{t:this.shape_379,p:{x:1587.5,y:600.2}},{t:this.shape_378,p:{rotation:-94.4,x:1388.4,y:764.1,regX:-29.3,regY:-0.5}},{t:this.shape_377,p:{x:1384.4,y:710.3}}]},6).to({state:[{t:this.shape_400,p:{x:1223.2,y:763.9}},{t:this.instance_20,p:{rotation:-91.6,x:1222.1,y:764.1,regX:109.7,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1564.8,y:763.8}},{t:this.instance_19,p:{rotation:-88.7,x:1564.6,y:764.8,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1310.9,y:753.9}},{t:this.shape_397,p:{x:1307.7,y:619.5}},{t:this.shape_396,p:{x:1485.8,y:562.7}},{t:this.shape_395,p:{x:1496.1,y:531.2}},{t:this.shape_394,p:{x:1475.9,y:522.1}},{t:this.shape_393,p:{x:1437.6,y:529.8}},{t:this.shape_392,p:{x:1287.4,y:583.6}},{t:this.shape_391,p:{x:1531.4,y:611.6}},{t:this.shape_390,p:{x:1550.9,y:588.1}},{t:this.shape_389,p:{x:1362.4,y:762.9}},{t:this.shape_388,p:{x:1362.4,y:762.9}},{t:this.shape_387,p:{x:1225.3,y:683.6}},{t:this.shape_386,p:{x:1222.9,y:689.1}},{t:this.shape_385,p:{x:1518.1,y:699.2}},{t:this.shape_384,p:{x:1334.7,y:687.4}},{t:this.shape_383,p:{x:1451.6,y:666.9}},{t:this.shape_382,p:{x:1304.8,y:658.1}},{t:this.shape_381,p:{x:1442.3,y:686.5}},{t:this.shape_380,p:{x:1277,y:751.5}},{t:this.shape_379,p:{x:1561.4,y:599.6}},{t:this.shape_378,p:{rotation:-132.4,x:1362.4,y:763.5,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1311.7,y:723.8}}]},5).to({state:[{t:this.shape_400,p:{x:1182.3,y:763.3}},{t:this.instance_20,p:{rotation:-130.1,x:1181.2,y:763.4,regX:109.7,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1523.9,y:763.2}},{t:this.instance_19,p:{rotation:-124.2,x:1523.8,y:764.2,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1270,y:753.3}},{t:this.shape_397,p:{x:1266.9,y:618.9}},{t:this.shape_396,p:{x:1445,y:562.1}},{t:this.shape_395,p:{x:1455.3,y:530.6}},{t:this.shape_394,p:{x:1435.1,y:521.5}},{t:this.shape_393,p:{x:1396.7,y:529.2}},{t:this.shape_392,p:{x:1246.6,y:583}},{t:this.shape_391,p:{x:1490.6,y:611}},{t:this.shape_390,p:{x:1510,y:587.5}},{t:this.shape_389,p:{x:1321.6,y:762.3}},{t:this.shape_388,p:{x:1321.6,y:762.3}},{t:this.shape_387,p:{x:1184.5,y:683}},{t:this.shape_386,p:{x:1182,y:688.5}},{t:this.shape_385,p:{x:1477.3,y:698.6}},{t:this.shape_384,p:{x:1293.8,y:686.8}},{t:this.shape_383,p:{x:1410.8,y:666.3}},{t:this.shape_382,p:{x:1264,y:657.5}},{t:this.shape_381,p:{x:1401.5,y:685.9}},{t:this.shape_380,p:{x:1236.2,y:750.9}},{t:this.shape_379,p:{x:1520.6,y:599}},{t:this.shape_378,p:{rotation:-171.4,x:1321.5,y:762.9,regX:-29.2,regY:-0.4}},{t:this.shape_377,p:{x:1256.3,y:753.4}}]},5).to({state:[{t:this.shape_400,p:{x:1139.6,y:762.8}},{t:this.instance_20,p:{rotation:160,x:1138.3,y:763,regX:109.7,regY:106}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1481.2,y:762.7}},{t:this.instance_19,p:{rotation:165.6,x:1481,y:763.7,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1227.3,y:752.8}},{t:this.shape_397,p:{x:1224.1,y:618.4}},{t:this.shape_396,p:{x:1402.2,y:561.6}},{t:this.shape_395,p:{x:1412.5,y:530.1}},{t:this.shape_394,p:{x:1392.3,y:521}},{t:this.shape_393,p:{x:1354,y:528.7}},{t:this.shape_392,p:{x:1203.8,y:582.5}},{t:this.shape_391,p:{x:1447.8,y:610.5}},{t:this.shape_390,p:{x:1467.3,y:587}},{t:this.shape_389,p:{x:1278.8,y:761.8}},{t:this.shape_388,p:{x:1278.8,y:761.8}},{t:this.shape_387,p:{x:1141.7,y:682.5}},{t:this.shape_386,p:{x:1139.3,y:688}},{t:this.shape_385,p:{x:1434.5,y:698.1}},{t:this.shape_384,p:{x:1251.1,y:686.3}},{t:this.shape_383,p:{x:1368,y:665.8}},{t:this.shape_382,p:{x:1221.2,y:657}},{t:this.shape_381,p:{x:1358.7,y:685.4}},{t:this.shape_380,p:{x:1193.4,y:750.4}},{t:this.shape_379,p:{x:1477.8,y:598.5}},{t:this.shape_378,p:{rotation:154.9,x:1278.8,y:762.3,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1218.9,y:783.9}}]},5).to({state:[{t:this.shape_400,p:{x:1103.2,y:764.4}},{t:this.instance_20,p:{rotation:125.8,x:1100.7,y:769.2,regX:109.7,regY:106}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1444.8,y:764.3}},{t:this.instance_19,p:{rotation:133.9,x:1444.4,y:767.4,regX:104.7,regY:106.1}},{t:this.shape_398,p:{x:1190.9,y:754.4}},{t:this.shape_397,p:{x:1187.8,y:620}},{t:this.shape_396,p:{x:1365.9,y:563.2}},{t:this.shape_395,p:{x:1376.2,y:531.7}},{t:this.shape_394,p:{x:1356,y:522.6}},{t:this.shape_393,p:{x:1317.6,y:530.3}},{t:this.shape_392,p:{x:1167.5,y:584.1}},{t:this.shape_391,p:{x:1411.5,y:612.1}},{t:this.shape_390,p:{x:1430.9,y:588.6}},{t:this.shape_389,p:{x:1242.5,y:763.4}},{t:this.shape_388,p:{x:1242.5,y:763.4}},{t:this.shape_387,p:{x:1105.4,y:684.1}},{t:this.shape_386,p:{x:1102.9,y:689.6}},{t:this.shape_385,p:{x:1398.2,y:699.7}},{t:this.shape_384,p:{x:1214.7,y:687.9}},{t:this.shape_383,p:{x:1331.7,y:667.4}},{t:this.shape_382,p:{x:1184.9,y:658.6}},{t:this.shape_381,p:{x:1322.4,y:687}},{t:this.shape_380,p:{x:1157.1,y:752}},{t:this.shape_379,p:{x:1441.5,y:600.1}},{t:this.shape_378,p:{rotation:118.9,x:1242.4,y:763.9,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1205.4,y:808}}]},5).to({state:[{t:this.shape_400,p:{x:1066.5,y:762.7}},{t:this.instance_20,p:{rotation:99.6,x:1066.8,y:759.5,regX:106.6,regY:103.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1408.1,y:762.6}},{t:this.instance_19,p:{rotation:99.6,x:1409.2,y:757.5,regX:98.9,regY:104.5}},{t:this.shape_398,p:{x:1154.2,y:752.7}},{t:this.shape_397,p:{x:1151.1,y:618.3}},{t:this.shape_396,p:{x:1329.2,y:561.5}},{t:this.shape_395,p:{x:1339.5,y:530}},{t:this.shape_394,p:{x:1319.3,y:520.9}},{t:this.shape_393,p:{x:1280.9,y:528.6}},{t:this.shape_392,p:{x:1130.8,y:582.4}},{t:this.shape_391,p:{x:1374.8,y:610.4}},{t:this.shape_390,p:{x:1394.2,y:586.9}},{t:this.shape_389,p:{x:1205.8,y:761.7}},{t:this.shape_388,p:{x:1205.8,y:761.7}},{t:this.shape_387,p:{x:1068.7,y:682.4}},{t:this.shape_386,p:{x:1066.2,y:687.9}},{t:this.shape_385,p:{x:1361.5,y:698}},{t:this.shape_384,p:{x:1178,y:686.2}},{t:this.shape_383,p:{x:1295,y:665.7}},{t:this.shape_382,p:{x:1148.2,y:656.9}},{t:this.shape_381,p:{x:1285.7,y:685.3}},{t:this.shape_380,p:{x:1120.4,y:750.3}},{t:this.shape_379,p:{x:1404.8,y:598.4}},{t:this.shape_378,p:{rotation:89.9,x:1205.7,y:762.2,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1205.9,y:819.3}}]},5).to({state:[{t:this.shape_400,p:{x:1032.6,y:761.7}},{t:this.instance_20,p:{rotation:81.9,x:1021.4,y:762.2,regX:108.7,regY:115}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1374.2,y:761.6}},{t:this.instance_19,p:{rotation:73.9,x:1372.9,y:765.5,regX:106.2,regY:108.3}},{t:this.shape_398,p:{x:1120.3,y:751.7}},{t:this.shape_397,p:{x:1117.1,y:617.3}},{t:this.shape_396,p:{x:1295.2,y:560.5}},{t:this.shape_395,p:{x:1305.5,y:529}},{t:this.shape_394,p:{x:1285.3,y:519.9}},{t:this.shape_393,p:{x:1247,y:527.6}},{t:this.shape_392,p:{x:1096.8,y:581.4}},{t:this.shape_391,p:{x:1340.8,y:609.4}},{t:this.shape_390,p:{x:1360.3,y:585.9}},{t:this.shape_389,p:{x:1171.8,y:760.7}},{t:this.shape_388,p:{x:1171.8,y:760.7}},{t:this.shape_387,p:{x:1034.7,y:681.4}},{t:this.shape_386,p:{x:1032.3,y:686.9}},{t:this.shape_385,p:{x:1327.5,y:697}},{t:this.shape_384,p:{x:1144.1,y:685.2}},{t:this.shape_383,p:{x:1261,y:664.7}},{t:this.shape_382,p:{x:1114.2,y:655.9}},{t:this.shape_381,p:{x:1251.7,y:684.3}},{t:this.shape_380,p:{x:1086.4,y:749.3}},{t:this.shape_379,p:{x:1370.8,y:597.4}},{t:this.shape_378,p:{rotation:48.5,x:1188.8,y:783.8,regX:0,regY:0}},{t:this.shape_377,p:{x:1206.2,y:803.8}}]},4).to({state:[{t:this.shape_400,p:{x:1006.2,y:762.6}},{t:this.instance_20,p:{rotation:48.7,x:1001.8,y:767,regX:108.7,regY:115}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1347.8,y:762.5}},{t:this.instance_19,p:{rotation:37.7,x:1349.7,y:765.2,regX:106.2,regY:108.3}},{t:this.shape_398,p:{x:1093.9,y:752.7}},{t:this.shape_397,p:{x:1090.8,y:618.2}},{t:this.shape_396,p:{x:1268.9,y:561.4}},{t:this.shape_395,p:{x:1279.2,y:529.9}},{t:this.shape_394,p:{x:1259,y:520.9}},{t:this.shape_393,p:{x:1220.6,y:528.5}},{t:this.shape_392,p:{x:1070.5,y:582.4}},{t:this.shape_391,p:{x:1314.5,y:610.4}},{t:this.shape_390,p:{x:1333.9,y:586.9}},{t:this.shape_389,p:{x:1145.5,y:761.7}},{t:this.shape_388,p:{x:1145.5,y:761.7}},{t:this.shape_387,p:{x:1008.4,y:682.3}},{t:this.shape_386,p:{x:1005.9,y:687.8}},{t:this.shape_385,p:{x:1301.2,y:697.9}},{t:this.shape_384,p:{x:1117.7,y:686.1}},{t:this.shape_383,p:{x:1234.7,y:665.6}},{t:this.shape_382,p:{x:1087.9,y:656.9}},{t:this.shape_381,p:{x:1225.4,y:685.3}},{t:this.shape_380,p:{x:1060.1,y:750.2}},{t:this.shape_379,p:{x:1344.5,y:598.3}},{t:this.shape_378,p:{rotation:24.7,x:1172.9,y:775.2,regX:0,regY:0}},{t:this.shape_377,p:{x:1196.9,y:784.7}}]},5).to({state:[{t:this.shape_400,p:{x:1005.6,y:764.6}},{t:this.instance_20,p:{rotation:0,x:1006,y:774.1,regX:108.7,regY:115}},{t:this.shape_399,p:{scaleX:1,scaleY:1,x:1348.2,y:764.6}},{t:this.instance_19,p:{rotation:0,x:1349.1,y:767.1,regX:106.2,regY:108.3}},{t:this.shape_398,p:{x:1093.3,y:754.6}},{t:this.shape_397,p:{x:1090.1,y:620.2}},{t:this.shape_396,p:{x:1268.2,y:563.4}},{t:this.shape_395,p:{x:1278.5,y:531.9}},{t:this.shape_394,p:{x:1258.3,y:522.8}},{t:this.shape_393,p:{x:1220,y:530.5}},{t:this.shape_392,p:{x:1069.8,y:584.3}},{t:this.shape_391,p:{x:1313.8,y:612.3}},{t:this.shape_390,p:{x:1333.3,y:588.8}},{t:this.shape_389,p:{x:1144.8,y:763.6}},{t:this.shape_388,p:{x:1144.8,y:763.6}},{t:this.shape_387,p:{x:1007.7,y:684.3}},{t:this.shape_386,p:{x:1005.3,y:689.8}},{t:this.shape_385,p:{x:1300.5,y:699.9}},{t:this.shape_384,p:{x:1117.1,y:688.1}},{t:this.shape_383,p:{x:1234,y:667.6}},{t:this.shape_382,p:{x:1087.2,y:658.8}},{t:this.shape_381,p:{x:1224.7,y:687.2}},{t:this.shape_380,p:{x:1059.4,y:752.2}},{t:this.shape_379,p:{x:1343.8,y:600.3}},{t:this.shape_378,p:{rotation:0,x:1171.2,y:764,regX:0,regY:0}},{t:this.shape_377,p:{x:1198.7,y:764.6}}]},5).to({state:[{t:this.shape_400,p:{x:1041.3,y:752.7}},{t:this.instance_20,p:{rotation:0,x:1041.7,y:762.2,regX:108.7,regY:115}},{t:this.shape_399,p:{scaleX:1,scaleY:1,x:1384,y:752.7}},{t:this.instance_19,p:{rotation:0,x:1384.8,y:755.2,regX:106.2,regY:108.3}},{t:this.shape_398,p:{x:1129,y:742.7}},{t:this.shape_397,p:{x:1125.9,y:608.3}},{t:this.shape_396,p:{x:1304,y:551.5}},{t:this.shape_395,p:{x:1314.3,y:520}},{t:this.shape_394,p:{x:1294.1,y:510.9}},{t:this.shape_393,p:{x:1255.7,y:518.6}},{t:this.shape_392,p:{x:1105.6,y:572.4}},{t:this.shape_391,p:{x:1349.6,y:600.4}},{t:this.shape_390,p:{x:1369,y:576.9}},{t:this.shape_389,p:{x:1180.6,y:751.7}},{t:this.shape_388,p:{x:1180.6,y:751.7}},{t:this.shape_387,p:{x:1043.5,y:672.4}},{t:this.shape_386,p:{x:1041,y:677.9}},{t:this.shape_385,p:{x:1336.3,y:688}},{t:this.shape_384,p:{x:1152.8,y:676.2}},{t:this.shape_383,p:{x:1269.8,y:655.7}},{t:this.shape_382,p:{x:1123,y:646.9}},{t:this.shape_381,p:{x:1260.5,y:675.3}},{t:this.shape_380,p:{x:1095.2,y:740.3}},{t:this.shape_379,p:{x:1379.6,y:588.4}},{t:this.shape_378,p:{rotation:0,x:1206.9,y:752.1,regX:0,regY:0}},{t:this.shape_377,p:{x:1234.4,y:752.7}}]},12).to({state:[{t:this.shape_400,p:{x:1066.4,y:754.7}},{t:this.instance_20,p:{rotation:48.7,x:1062,y:759.1,regX:108.7,regY:115}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1408,y:754.6}},{t:this.instance_19,p:{rotation:37.7,x:1409.9,y:757.2,regX:106.2,regY:108.3}},{t:this.shape_398,p:{x:1154.1,y:744.7}},{t:this.shape_397,p:{x:1151,y:610.3}},{t:this.shape_396,p:{x:1329.1,y:553.5}},{t:this.shape_395,p:{x:1339.4,y:522}},{t:this.shape_394,p:{x:1319.2,y:512.9}},{t:this.shape_393,p:{x:1280.8,y:520.6}},{t:this.shape_392,p:{x:1130.7,y:574.4}},{t:this.shape_391,p:{x:1374.7,y:602.4}},{t:this.shape_390,p:{x:1394.1,y:578.9}},{t:this.shape_389,p:{x:1205.7,y:753.7}},{t:this.shape_388,p:{x:1205.7,y:753.7}},{t:this.shape_387,p:{x:1068.6,y:674.4}},{t:this.shape_386,p:{x:1066.1,y:679.9}},{t:this.shape_385,p:{x:1361.4,y:690}},{t:this.shape_384,p:{x:1177.9,y:678.2}},{t:this.shape_383,p:{x:1294.9,y:657.7}},{t:this.shape_382,p:{x:1148.1,y:648.9}},{t:this.shape_381,p:{x:1285.6,y:677.3}},{t:this.shape_380,p:{x:1120.3,y:742.3}},{t:this.shape_379,p:{x:1404.7,y:590.4}},{t:this.shape_378,p:{rotation:24.7,x:1233.1,y:767.2,regX:0,regY:0}},{t:this.shape_377,p:{x:1257.1,y:776.7}}]},9).to({state:[{t:this.shape_400,p:{x:1092,y:755.7}},{t:this.instance_20,p:{rotation:81.9,x:1080.8,y:756.2,regX:108.7,regY:115}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1433.6,y:755.6}},{t:this.instance_19,p:{rotation:73.9,x:1432.3,y:759.5,regX:106.2,regY:108.3}},{t:this.shape_398,p:{x:1179.7,y:745.7}},{t:this.shape_397,p:{x:1176.5,y:611.3}},{t:this.shape_396,p:{x:1354.6,y:554.5}},{t:this.shape_395,p:{x:1364.9,y:523}},{t:this.shape_394,p:{x:1344.7,y:513.9}},{t:this.shape_393,p:{x:1306.4,y:521.6}},{t:this.shape_392,p:{x:1156.2,y:575.4}},{t:this.shape_391,p:{x:1400.2,y:603.4}},{t:this.shape_390,p:{x:1419.7,y:579.9}},{t:this.shape_389,p:{x:1231.2,y:754.7}},{t:this.shape_388,p:{x:1231.2,y:754.7}},{t:this.shape_387,p:{x:1094.1,y:675.4}},{t:this.shape_386,p:{x:1091.7,y:680.9}},{t:this.shape_385,p:{x:1386.9,y:691}},{t:this.shape_384,p:{x:1203.5,y:679.2}},{t:this.shape_383,p:{x:1320.4,y:658.7}},{t:this.shape_382,p:{x:1173.6,y:649.9}},{t:this.shape_381,p:{x:1311.1,y:678.3}},{t:this.shape_380,p:{x:1145.8,y:743.3}},{t:this.shape_379,p:{x:1430.2,y:591.4}},{t:this.shape_378,p:{rotation:48.5,x:1248.2,y:777.8,regX:0,regY:0}},{t:this.shape_377,p:{x:1265.6,y:797.8}}]},6).to({state:[{t:this.shape_400,p:{x:1119.3,y:755.7}},{t:this.instance_20,p:{rotation:99.6,x:1119.6,y:752.5,regX:106.6,regY:103.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1460.9,y:755.6}},{t:this.instance_19,p:{rotation:99.6,x:1462,y:750.5,regX:98.9,regY:104.5}},{t:this.shape_398,p:{x:1207,y:745.7}},{t:this.shape_397,p:{x:1203.8,y:611.3}},{t:this.shape_396,p:{x:1381.9,y:554.5}},{t:this.shape_395,p:{x:1392.2,y:523}},{t:this.shape_394,p:{x:1372,y:513.9}},{t:this.shape_393,p:{x:1333.7,y:521.6}},{t:this.shape_392,p:{x:1183.5,y:575.4}},{t:this.shape_391,p:{x:1427.5,y:603.4}},{t:this.shape_390,p:{x:1447,y:579.9}},{t:this.shape_389,p:{x:1258.5,y:754.7}},{t:this.shape_388,p:{x:1258.5,y:754.7}},{t:this.shape_387,p:{x:1121.4,y:675.4}},{t:this.shape_386,p:{x:1119,y:680.9}},{t:this.shape_385,p:{x:1414.2,y:691}},{t:this.shape_384,p:{x:1230.8,y:679.2}},{t:this.shape_383,p:{x:1347.7,y:658.7}},{t:this.shape_382,p:{x:1200.9,y:649.9}},{t:this.shape_381,p:{x:1338.4,y:678.3}},{t:this.shape_380,p:{x:1173.1,y:743.3}},{t:this.shape_379,p:{x:1457.5,y:591.4}},{t:this.shape_378,p:{rotation:89.9,x:1258.4,y:755.2,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1258.6,y:812.3}}]},5).to({state:[{t:this.shape_400,p:{x:1142.7,y:755.7}},{t:this.instance_20,p:{rotation:125.8,x:1140.2,y:760.5,regX:109.7,regY:106}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1484.3,y:755.6}},{t:this.instance_19,p:{rotation:133.9,x:1483.9,y:758.7,regX:104.7,regY:106.1}},{t:this.shape_398,p:{x:1230.4,y:745.7}},{t:this.shape_397,p:{x:1227.2,y:611.3}},{t:this.shape_396,p:{x:1405.3,y:554.5}},{t:this.shape_395,p:{x:1415.6,y:523}},{t:this.shape_394,p:{x:1395.4,y:513.9}},{t:this.shape_393,p:{x:1357.1,y:521.6}},{t:this.shape_392,p:{x:1206.9,y:575.4}},{t:this.shape_391,p:{x:1450.9,y:603.4}},{t:this.shape_390,p:{x:1470.4,y:579.9}},{t:this.shape_389,p:{x:1281.9,y:754.7}},{t:this.shape_388,p:{x:1281.9,y:754.7}},{t:this.shape_387,p:{x:1144.8,y:675.4}},{t:this.shape_386,p:{x:1142.4,y:680.9}},{t:this.shape_385,p:{x:1437.6,y:691}},{t:this.shape_384,p:{x:1254.2,y:679.2}},{t:this.shape_383,p:{x:1371.1,y:658.7}},{t:this.shape_382,p:{x:1224.3,y:649.9}},{t:this.shape_381,p:{x:1361.8,y:678.3}},{t:this.shape_380,p:{x:1196.5,y:743.3}},{t:this.shape_379,p:{x:1480.9,y:591.4}},{t:this.shape_378,p:{rotation:118.9,x:1281.9,y:755.2,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1244.9,y:799.3}}]},5).to({state:[{t:this.shape_400,p:{x:1172.4,y:755.7}},{t:this.instance_20,p:{rotation:160,x:1171.2,y:755.9,regX:109.7,regY:106}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1514,y:755.6}},{t:this.instance_19,p:{rotation:165.6,x:1513.9,y:756.6,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1260.1,y:745.7}},{t:this.shape_397,p:{x:1257,y:611.3}},{t:this.shape_396,p:{x:1435.1,y:554.5}},{t:this.shape_395,p:{x:1445.4,y:523}},{t:this.shape_394,p:{x:1425.2,y:513.9}},{t:this.shape_393,p:{x:1386.8,y:521.6}},{t:this.shape_392,p:{x:1236.7,y:575.4}},{t:this.shape_391,p:{x:1480.7,y:603.4}},{t:this.shape_390,p:{x:1500.1,y:579.9}},{t:this.shape_389,p:{x:1311.7,y:754.7}},{t:this.shape_388,p:{x:1311.7,y:754.7}},{t:this.shape_387,p:{x:1174.6,y:675.4}},{t:this.shape_386,p:{x:1172.1,y:680.9}},{t:this.shape_385,p:{x:1467.4,y:691}},{t:this.shape_384,p:{x:1283.9,y:679.2}},{t:this.shape_383,p:{x:1400.9,y:658.7}},{t:this.shape_382,p:{x:1254.1,y:649.9}},{t:this.shape_381,p:{x:1391.6,y:678.3}},{t:this.shape_380,p:{x:1226.3,y:743.3}},{t:this.shape_379,p:{x:1510.7,y:591.4}},{t:this.shape_378,p:{rotation:154.9,x:1311.7,y:755.2,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1251.7,y:776.8}}]},5).to({state:[{t:this.shape_400,p:{x:1198.4,y:756.7}},{t:this.instance_20,p:{rotation:-130.1,x:1197.2,y:756.8,regX:109.7,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1540,y:756.6}},{t:this.instance_19,p:{rotation:-124.2,x:1539.9,y:757.6,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1286.1,y:746.7}},{t:this.shape_397,p:{x:1282.9,y:612.3}},{t:this.shape_396,p:{x:1461,y:555.5}},{t:this.shape_395,p:{x:1471.3,y:524}},{t:this.shape_394,p:{x:1451.1,y:514.9}},{t:this.shape_393,p:{x:1412.8,y:522.6}},{t:this.shape_392,p:{x:1262.6,y:576.4}},{t:this.shape_391,p:{x:1506.6,y:604.4}},{t:this.shape_390,p:{x:1526.1,y:580.9}},{t:this.shape_389,p:{x:1337.6,y:755.7}},{t:this.shape_388,p:{x:1337.6,y:755.7}},{t:this.shape_387,p:{x:1200.5,y:676.4}},{t:this.shape_386,p:{x:1198.1,y:681.9}},{t:this.shape_385,p:{x:1493.3,y:692}},{t:this.shape_384,p:{x:1309.9,y:680.2}},{t:this.shape_383,p:{x:1426.8,y:659.7}},{t:this.shape_382,p:{x:1280,y:650.9}},{t:this.shape_381,p:{x:1417.5,y:679.3}},{t:this.shape_380,p:{x:1252.2,y:744.3}},{t:this.shape_379,p:{x:1536.6,y:592.4}},{t:this.shape_378,p:{rotation:-171.4,x:1337.5,y:756.3,regX:-29.2,regY:-0.4}},{t:this.shape_377,p:{x:1272.4,y:746.8}}]},5).to({state:[{t:this.shape_400,p:{x:1229.3,y:756.7}},{t:this.instance_20,p:{rotation:-91.6,x:1228.2,y:756.9,regX:109.7,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1570.9,y:756.6}},{t:this.instance_19,p:{rotation:-88.7,x:1570.8,y:757.6,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1317,y:746.7}},{t:this.shape_397,p:{x:1313.9,y:612.3}},{t:this.shape_396,p:{x:1492,y:555.5}},{t:this.shape_395,p:{x:1502.3,y:524}},{t:this.shape_394,p:{x:1482.1,y:514.9}},{t:this.shape_393,p:{x:1443.7,y:522.6}},{t:this.shape_392,p:{x:1293.6,y:576.4}},{t:this.shape_391,p:{x:1537.6,y:604.4}},{t:this.shape_390,p:{x:1557,y:580.9}},{t:this.shape_389,p:{x:1368.6,y:755.7}},{t:this.shape_388,p:{x:1368.6,y:755.7}},{t:this.shape_387,p:{x:1231.5,y:676.4}},{t:this.shape_386,p:{x:1229,y:681.9}},{t:this.shape_385,p:{x:1524.3,y:692}},{t:this.shape_384,p:{x:1340.8,y:680.2}},{t:this.shape_383,p:{x:1457.8,y:659.7}},{t:this.shape_382,p:{x:1311,y:650.9}},{t:this.shape_381,p:{x:1448.5,y:679.3}},{t:this.shape_380,p:{x:1283.2,y:744.3}},{t:this.shape_379,p:{x:1567.6,y:592.4}},{t:this.shape_378,p:{rotation:-132.4,x:1368.5,y:756.3,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1317.9,y:716.6}}]},5).to({state:[{t:this.shape_400,p:{x:1264.5,y:759.7}},{t:this.instance_20,p:{rotation:-61.6,x:1267.4,y:760,regX:109.6,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1606.1,y:759.6}},{t:this.instance_19,p:{rotation:-46.5,x:1605.9,y:760.6,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1352.2,y:749.7}},{t:this.shape_397,p:{x:1349,y:615.3}},{t:this.shape_396,p:{x:1527.1,y:558.5}},{t:this.shape_395,p:{x:1537.4,y:527}},{t:this.shape_394,p:{x:1517.2,y:517.9}},{t:this.shape_393,p:{x:1478.9,y:525.6}},{t:this.shape_392,p:{x:1328.7,y:579.4}},{t:this.shape_391,p:{x:1572.7,y:607.4}},{t:this.shape_390,p:{x:1592.2,y:583.9}},{t:this.shape_389,p:{x:1403.7,y:758.7}},{t:this.shape_388,p:{x:1403.7,y:758.7}},{t:this.shape_387,p:{x:1266.6,y:679.4}},{t:this.shape_386,p:{x:1264.2,y:684.9}},{t:this.shape_385,p:{x:1559.4,y:695}},{t:this.shape_384,p:{x:1376,y:683.2}},{t:this.shape_383,p:{x:1492.9,y:662.7}},{t:this.shape_382,p:{x:1346.1,y:653.9}},{t:this.shape_381,p:{x:1483.6,y:682.3}},{t:this.shape_380,p:{x:1318.3,y:747.3}},{t:this.shape_379,p:{x:1602.7,y:595.4}},{t:this.shape_378,p:{rotation:-94.4,x:1403.6,y:759.2,regX:-29.3,regY:-0.5}},{t:this.shape_377,p:{x:1399.6,y:705.4}}]},5).to({state:[{t:this.shape_400,p:{x:1289.4,y:759.7}},{t:this.instance_20,p:{rotation:-35.6,x:1292.3,y:759.9,regX:109.7,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1631,y:759.6}},{t:this.instance_19,p:{rotation:-18.6,x:1630.9,y:760.6,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1377.1,y:749.7}},{t:this.shape_397,p:{x:1374,y:615.3}},{t:this.shape_396,p:{x:1552.1,y:558.5}},{t:this.shape_395,p:{x:1562.4,y:527}},{t:this.shape_394,p:{x:1542.2,y:517.9}},{t:this.shape_393,p:{x:1503.8,y:525.6}},{t:this.shape_392,p:{x:1353.7,y:579.4}},{t:this.shape_391,p:{x:1597.7,y:607.4}},{t:this.shape_390,p:{x:1617.1,y:583.9}},{t:this.shape_389,p:{x:1428.7,y:758.7}},{t:this.shape_388,p:{x:1428.7,y:758.7}},{t:this.shape_387,p:{x:1291.6,y:679.4}},{t:this.shape_386,p:{x:1289.1,y:684.9}},{t:this.shape_385,p:{x:1584.4,y:695}},{t:this.shape_384,p:{x:1400.9,y:683.2}},{t:this.shape_383,p:{x:1517.9,y:662.7}},{t:this.shape_382,p:{x:1371.1,y:653.9}},{t:this.shape_381,p:{x:1508.6,y:682.3}},{t:this.shape_380,p:{x:1343.3,y:747.3}},{t:this.shape_379,p:{x:1627.7,y:595.4}},{t:this.shape_378,p:{rotation:-56.4,x:1428.6,y:759.2,regX:-29.3,regY:-0.5}},{t:this.shape_377,p:{x:1457.5,y:711.1}}]},5).to({state:[{t:this.shape_400,p:{x:1323.4,y:756.5}},{t:this.instance_20,p:{rotation:0,x:1323.8,y:766.1,regX:108.7,regY:115}},{t:this.shape_399,p:{scaleX:1,scaleY:1,x:1666.1,y:756.6}},{t:this.instance_19,p:{rotation:0,x:1666.9,y:759,regX:106.2,regY:108.3}},{t:this.shape_398,p:{x:1411.1,y:746.6}},{t:this.shape_397,p:{x:1408,y:612.1}},{t:this.shape_396,p:{x:1586.1,y:555.3}},{t:this.shape_395,p:{x:1596.4,y:523.8}},{t:this.shape_394,p:{x:1576.2,y:514.8}},{t:this.shape_393,p:{x:1537.8,y:522.4}},{t:this.shape_392,p:{x:1387.7,y:576.3}},{t:this.shape_391,p:{x:1631.7,y:604.3}},{t:this.shape_390,p:{x:1651.1,y:580.8}},{t:this.shape_389,p:{x:1462.7,y:755.6}},{t:this.shape_388,p:{x:1462.7,y:755.6}},{t:this.shape_387,p:{x:1325.6,y:676.2}},{t:this.shape_386,p:{x:1323.1,y:681.7}},{t:this.shape_385,p:{x:1618.4,y:691.8}},{t:this.shape_384,p:{x:1434.9,y:680}},{t:this.shape_383,p:{x:1551.9,y:659.5}},{t:this.shape_382,p:{x:1405.1,y:650.8}},{t:this.shape_381,p:{x:1542.6,y:679.2}},{t:this.shape_380,p:{x:1377.3,y:744.1}},{t:this.shape_379,p:{x:1661.7,y:592.2}},{t:this.shape_378,p:{rotation:0,x:1489,y:756,regX:0,regY:0}},{t:this.shape_377,p:{x:1516.5,y:756.5}}]},5).to({state:[{t:this.shape_400,p:{x:1292.3,y:762.5}},{t:this.instance_20,p:{rotation:-35.6,x:1295.2,y:762.8,regX:109.7,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1633.9,y:762.4}},{t:this.instance_19,p:{rotation:-18.6,x:1633.8,y:763.5,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1380,y:752.6}},{t:this.shape_397,p:{x:1376.8,y:618.1}},{t:this.shape_396,p:{x:1554.9,y:561.3}},{t:this.shape_395,p:{x:1565.2,y:529.8}},{t:this.shape_394,p:{x:1545,y:520.8}},{t:this.shape_393,p:{x:1506.7,y:528.4}},{t:this.shape_392,p:{x:1356.5,y:582.3}},{t:this.shape_391,p:{x:1600.5,y:610.3}},{t:this.shape_390,p:{x:1620,y:586.8}},{t:this.shape_389,p:{x:1431.5,y:761.6}},{t:this.shape_388,p:{x:1431.5,y:761.6}},{t:this.shape_387,p:{x:1294.4,y:682.2}},{t:this.shape_386,p:{x:1292,y:687.7}},{t:this.shape_385,p:{x:1587.2,y:697.8}},{t:this.shape_384,p:{x:1403.8,y:686}},{t:this.shape_383,p:{x:1520.7,y:665.5}},{t:this.shape_382,p:{x:1373.9,y:656.8}},{t:this.shape_381,p:{x:1511.4,y:685.2}},{t:this.shape_380,p:{x:1346.1,y:750.1}},{t:this.shape_379,p:{x:1630.5,y:598.2}},{t:this.shape_378,p:{rotation:-56.4,x:1431.5,y:762,regX:-29.3,regY:-0.5}},{t:this.shape_377,p:{x:1460.3,y:713.9}}]},11).to({state:[{t:this.shape_400,p:{x:1249.3,y:764.5}},{t:this.instance_20,p:{rotation:-61.6,x:1252.2,y:764.9,regX:109.6,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1590.9,y:764.4}},{t:this.instance_19,p:{rotation:-46.5,x:1590.7,y:765.4,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1337,y:754.6}},{t:this.shape_397,p:{x:1333.8,y:620.1}},{t:this.shape_396,p:{x:1511.9,y:563.3}},{t:this.shape_395,p:{x:1522.2,y:531.8}},{t:this.shape_394,p:{x:1502,y:522.8}},{t:this.shape_393,p:{x:1463.7,y:530.4}},{t:this.shape_392,p:{x:1313.5,y:584.3}},{t:this.shape_391,p:{x:1557.5,y:612.3}},{t:this.shape_390,p:{x:1577,y:588.8}},{t:this.shape_389,p:{x:1388.5,y:763.6}},{t:this.shape_388,p:{x:1388.5,y:763.6}},{t:this.shape_387,p:{x:1251.4,y:684.2}},{t:this.shape_386,p:{x:1249,y:689.7}},{t:this.shape_385,p:{x:1544.2,y:699.8}},{t:this.shape_384,p:{x:1360.8,y:688}},{t:this.shape_383,p:{x:1477.7,y:667.5}},{t:this.shape_382,p:{x:1330.9,y:658.8}},{t:this.shape_381,p:{x:1468.4,y:687.2}},{t:this.shape_380,p:{x:1303.1,y:752.1}},{t:this.shape_379,p:{x:1587.5,y:600.2}},{t:this.shape_378,p:{rotation:-94.4,x:1388.4,y:764.1,regX:-29.3,regY:-0.5}},{t:this.shape_377,p:{x:1384.4,y:710.3}}]},6).to({state:[{t:this.shape_400,p:{x:1223.2,y:763.9}},{t:this.instance_20,p:{rotation:-91.6,x:1222.1,y:764.1,regX:109.7,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1564.8,y:763.8}},{t:this.instance_19,p:{rotation:-88.7,x:1564.6,y:764.8,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1310.9,y:753.9}},{t:this.shape_397,p:{x:1307.7,y:619.5}},{t:this.shape_396,p:{x:1485.8,y:562.7}},{t:this.shape_395,p:{x:1496.1,y:531.2}},{t:this.shape_394,p:{x:1475.9,y:522.1}},{t:this.shape_393,p:{x:1437.6,y:529.8}},{t:this.shape_392,p:{x:1287.4,y:583.6}},{t:this.shape_391,p:{x:1531.4,y:611.6}},{t:this.shape_390,p:{x:1550.9,y:588.1}},{t:this.shape_389,p:{x:1362.4,y:762.9}},{t:this.shape_388,p:{x:1362.4,y:762.9}},{t:this.shape_387,p:{x:1225.3,y:683.6}},{t:this.shape_386,p:{x:1222.9,y:689.1}},{t:this.shape_385,p:{x:1518.1,y:699.2}},{t:this.shape_384,p:{x:1334.7,y:687.4}},{t:this.shape_383,p:{x:1451.6,y:666.9}},{t:this.shape_382,p:{x:1304.8,y:658.1}},{t:this.shape_381,p:{x:1442.3,y:686.5}},{t:this.shape_380,p:{x:1277,y:751.5}},{t:this.shape_379,p:{x:1561.4,y:599.6}},{t:this.shape_378,p:{rotation:-132.4,x:1362.4,y:763.5,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1311.7,y:723.8}}]},4).to({state:[{t:this.shape_400,p:{x:1182.3,y:763.3}},{t:this.instance_20,p:{rotation:-130.1,x:1181.2,y:763.4,regX:109.7,regY:106.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1523.9,y:763.2}},{t:this.instance_19,p:{rotation:-124.2,x:1523.8,y:764.2,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1270,y:753.3}},{t:this.shape_397,p:{x:1266.9,y:618.9}},{t:this.shape_396,p:{x:1445,y:562.1}},{t:this.shape_395,p:{x:1455.3,y:530.6}},{t:this.shape_394,p:{x:1435.1,y:521.5}},{t:this.shape_393,p:{x:1396.7,y:529.2}},{t:this.shape_392,p:{x:1246.6,y:583}},{t:this.shape_391,p:{x:1490.6,y:611}},{t:this.shape_390,p:{x:1510,y:587.5}},{t:this.shape_389,p:{x:1321.6,y:762.3}},{t:this.shape_388,p:{x:1321.6,y:762.3}},{t:this.shape_387,p:{x:1184.5,y:683}},{t:this.shape_386,p:{x:1182,y:688.5}},{t:this.shape_385,p:{x:1477.3,y:698.6}},{t:this.shape_384,p:{x:1293.8,y:686.8}},{t:this.shape_383,p:{x:1410.8,y:666.3}},{t:this.shape_382,p:{x:1264,y:657.5}},{t:this.shape_381,p:{x:1401.5,y:685.9}},{t:this.shape_380,p:{x:1236.2,y:750.9}},{t:this.shape_379,p:{x:1520.6,y:599}},{t:this.shape_378,p:{rotation:-171.4,x:1321.5,y:762.9,regX:-29.2,regY:-0.4}},{t:this.shape_377,p:{x:1256.3,y:753.4}}]},4).to({state:[{t:this.shape_400,p:{x:1139.6,y:762.8}},{t:this.instance_20,p:{rotation:160,x:1138.3,y:763,regX:109.7,regY:106}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1481.2,y:762.7}},{t:this.instance_19,p:{rotation:165.6,x:1481,y:763.7,regX:104.7,regY:106}},{t:this.shape_398,p:{x:1227.3,y:752.8}},{t:this.shape_397,p:{x:1224.1,y:618.4}},{t:this.shape_396,p:{x:1402.2,y:561.6}},{t:this.shape_395,p:{x:1412.5,y:530.1}},{t:this.shape_394,p:{x:1392.3,y:521}},{t:this.shape_393,p:{x:1354,y:528.7}},{t:this.shape_392,p:{x:1203.8,y:582.5}},{t:this.shape_391,p:{x:1447.8,y:610.5}},{t:this.shape_390,p:{x:1467.3,y:587}},{t:this.shape_389,p:{x:1278.8,y:761.8}},{t:this.shape_388,p:{x:1278.8,y:761.8}},{t:this.shape_387,p:{x:1141.7,y:682.5}},{t:this.shape_386,p:{x:1139.3,y:688}},{t:this.shape_385,p:{x:1434.5,y:698.1}},{t:this.shape_384,p:{x:1251.1,y:686.3}},{t:this.shape_383,p:{x:1368,y:665.8}},{t:this.shape_382,p:{x:1221.2,y:657}},{t:this.shape_381,p:{x:1358.7,y:685.4}},{t:this.shape_380,p:{x:1193.4,y:750.4}},{t:this.shape_379,p:{x:1477.8,y:598.5}},{t:this.shape_378,p:{rotation:154.9,x:1278.8,y:762.3,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1218.9,y:783.9}}]},4).to({state:[{t:this.shape_400,p:{x:1103.2,y:764.4}},{t:this.instance_20,p:{rotation:125.8,x:1100.7,y:769.2,regX:109.7,regY:106}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1444.8,y:764.3}},{t:this.instance_19,p:{rotation:133.9,x:1444.4,y:767.4,regX:104.7,regY:106.1}},{t:this.shape_398,p:{x:1190.9,y:754.4}},{t:this.shape_397,p:{x:1187.8,y:620}},{t:this.shape_396,p:{x:1365.9,y:563.2}},{t:this.shape_395,p:{x:1376.2,y:531.7}},{t:this.shape_394,p:{x:1356,y:522.6}},{t:this.shape_393,p:{x:1317.6,y:530.3}},{t:this.shape_392,p:{x:1167.5,y:584.1}},{t:this.shape_391,p:{x:1411.5,y:612.1}},{t:this.shape_390,p:{x:1430.9,y:588.6}},{t:this.shape_389,p:{x:1242.5,y:763.4}},{t:this.shape_388,p:{x:1242.5,y:763.4}},{t:this.shape_387,p:{x:1105.4,y:684.1}},{t:this.shape_386,p:{x:1102.9,y:689.6}},{t:this.shape_385,p:{x:1398.2,y:699.7}},{t:this.shape_384,p:{x:1214.7,y:687.9}},{t:this.shape_383,p:{x:1331.7,y:667.4}},{t:this.shape_382,p:{x:1184.9,y:658.6}},{t:this.shape_381,p:{x:1322.4,y:687}},{t:this.shape_380,p:{x:1157.1,y:752}},{t:this.shape_379,p:{x:1441.5,y:600.1}},{t:this.shape_378,p:{rotation:118.9,x:1242.4,y:763.9,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1205.4,y:808}}]},4).to({state:[{t:this.shape_400,p:{x:1066.5,y:762.7}},{t:this.instance_20,p:{rotation:99.6,x:1066.8,y:759.5,regX:106.6,regY:103.1}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1408.1,y:762.6}},{t:this.instance_19,p:{rotation:99.6,x:1409.2,y:757.5,regX:98.9,regY:104.5}},{t:this.shape_398,p:{x:1154.2,y:752.7}},{t:this.shape_397,p:{x:1151.1,y:618.3}},{t:this.shape_396,p:{x:1329.2,y:561.5}},{t:this.shape_395,p:{x:1339.5,y:530}},{t:this.shape_394,p:{x:1319.3,y:520.9}},{t:this.shape_393,p:{x:1280.9,y:528.6}},{t:this.shape_392,p:{x:1130.8,y:582.4}},{t:this.shape_391,p:{x:1374.8,y:610.4}},{t:this.shape_390,p:{x:1394.2,y:586.9}},{t:this.shape_389,p:{x:1205.8,y:761.7}},{t:this.shape_388,p:{x:1205.8,y:761.7}},{t:this.shape_387,p:{x:1068.7,y:682.4}},{t:this.shape_386,p:{x:1066.2,y:687.9}},{t:this.shape_385,p:{x:1361.5,y:698}},{t:this.shape_384,p:{x:1178,y:686.2}},{t:this.shape_383,p:{x:1295,y:665.7}},{t:this.shape_382,p:{x:1148.2,y:656.9}},{t:this.shape_381,p:{x:1285.7,y:685.3}},{t:this.shape_380,p:{x:1120.4,y:750.3}},{t:this.shape_379,p:{x:1404.8,y:598.4}},{t:this.shape_378,p:{rotation:89.9,x:1205.7,y:762.2,regX:-29.3,regY:-0.4}},{t:this.shape_377,p:{x:1205.9,y:819.3}}]},4).to({state:[{t:this.shape_400,p:{x:1032.6,y:761.7}},{t:this.instance_20,p:{rotation:81.9,x:1021.4,y:762.2,regX:108.7,regY:115}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1374.2,y:761.6}},{t:this.instance_19,p:{rotation:73.9,x:1372.9,y:765.5,regX:106.2,regY:108.3}},{t:this.shape_398,p:{x:1120.3,y:751.7}},{t:this.shape_397,p:{x:1117.1,y:617.3}},{t:this.shape_396,p:{x:1295.2,y:560.5}},{t:this.shape_395,p:{x:1305.5,y:529}},{t:this.shape_394,p:{x:1285.3,y:519.9}},{t:this.shape_393,p:{x:1247,y:527.6}},{t:this.shape_392,p:{x:1096.8,y:581.4}},{t:this.shape_391,p:{x:1340.8,y:609.4}},{t:this.shape_390,p:{x:1360.3,y:585.9}},{t:this.shape_389,p:{x:1171.8,y:760.7}},{t:this.shape_388,p:{x:1171.8,y:760.7}},{t:this.shape_387,p:{x:1034.7,y:681.4}},{t:this.shape_386,p:{x:1032.3,y:686.9}},{t:this.shape_385,p:{x:1327.5,y:697}},{t:this.shape_384,p:{x:1144.1,y:685.2}},{t:this.shape_383,p:{x:1261,y:664.7}},{t:this.shape_382,p:{x:1114.2,y:655.9}},{t:this.shape_381,p:{x:1251.7,y:684.3}},{t:this.shape_380,p:{x:1086.4,y:749.3}},{t:this.shape_379,p:{x:1370.8,y:597.4}},{t:this.shape_378,p:{rotation:48.5,x:1188.8,y:783.8,regX:0,regY:0}},{t:this.shape_377,p:{x:1206.2,y:803.8}}]},4).to({state:[{t:this.shape_400,p:{x:1006.2,y:762.6}},{t:this.instance_20,p:{rotation:48.7,x:1001.8,y:767,regX:108.7,regY:115}},{t:this.shape_399,p:{scaleX:0.999,scaleY:0.999,x:1347.8,y:762.5}},{t:this.instance_19,p:{rotation:37.7,x:1349.7,y:765.2,regX:106.2,regY:108.3}},{t:this.shape_398,p:{x:1093.9,y:752.7}},{t:this.shape_397,p:{x:1090.8,y:618.2}},{t:this.shape_396,p:{x:1268.9,y:561.4}},{t:this.shape_395,p:{x:1279.2,y:529.9}},{t:this.shape_394,p:{x:1259,y:520.9}},{t:this.shape_393,p:{x:1220.6,y:528.5}},{t:this.shape_392,p:{x:1070.5,y:582.4}},{t:this.shape_391,p:{x:1314.5,y:610.4}},{t:this.shape_390,p:{x:1333.9,y:586.9}},{t:this.shape_389,p:{x:1145.5,y:761.7}},{t:this.shape_388,p:{x:1145.5,y:761.7}},{t:this.shape_387,p:{x:1008.4,y:682.3}},{t:this.shape_386,p:{x:1005.9,y:687.8}},{t:this.shape_385,p:{x:1301.2,y:697.9}},{t:this.shape_384,p:{x:1117.7,y:686.1}},{t:this.shape_383,p:{x:1234.7,y:665.6}},{t:this.shape_382,p:{x:1087.9,y:656.9}},{t:this.shape_381,p:{x:1225.4,y:685.3}},{t:this.shape_380,p:{x:1060.1,y:750.2}},{t:this.shape_379,p:{x:1344.5,y:598.3}},{t:this.shape_378,p:{rotation:24.7,x:1172.9,y:775.2,regX:0,regY:0}},{t:this.shape_377,p:{x:1196.9,y:784.7}}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(893,463.5,1729.3,877.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;