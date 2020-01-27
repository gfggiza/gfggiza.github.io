(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes
	lib.webFontTxtFilters = {}; 
	
	// library properties:
	lib.properties = {
		width: 866,
		height: 857,
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
		this.shape_15.graphics.f().s("#EEEEEF").ss(6.9).p("Ag2AQQALADANAEQAJACAPADQAEABACABQAEgBAEgCQAIgDAGgDQACgBABAAQABgBABAAQADgCACgBQAJgGAIgIQAGgHAAgGQAAgFgDgCQgFgEgKAAQgJgCgXABIgBAAQgBAAgCAAQgBAAAAAAQgCAAgDABQgPACgQACAAFgWIAAgBQgJgHgKgIAALgSQgDgCgDgCAAAAeQAFACAGABAgHAhQAFgBACgC");
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
		this.shape_15.graphics.f().s("#EEEEEF").ss(6.9).p("AAWAVQACgBABgBQABAAABgBQADgBACgCQAJgFAIgIQAGgHAAgHQAAgEgDgDQgFgEgKABQgIgCgZABQgHgHgLgIAABgXQgBgBAAABQgCAAgDAAQgPACgQADAAEgXIAAAAQgBAAgCAAAAFgXQAAAAgBAAAAAAeQAFABAGABAg2APQALAEANAEQAJACAPADQAEABACABAgHAgQAFgBACgBQAEgBAEgCQAIgDAGgDAALgTQgDgCgDgC");
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
	
	
	(lib.Path_8 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#4E98A9").s().p("Ag5goQgJgjgBgTQgDgVADgkIADg5IAIgBQAtgHAoATQggAHgbATIAvAVQgVAKgPAUQAHABADAIQACAIgDAIIgFAOQgDAJABAGQABAGAJAMQAHAKAAAHQgBAFgFAIQgFAIAAAFQgBALAaAJQAcAKAAAMQABANgYANQgJAFgFAHQgFAJADAHQACAEAJAGQAJAFABAFQACAIgPALQgNALABAIIAOAHQgGAMACANQAegMAeAIQgbASgmAQg");
		this.shape.setTransform(7,21.2);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,14,42.4);
	
	
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
	(lib.nomesite = function(mode,startPosition,loop) {
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
	
		// CABO DO FONE
		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#E690A2").s().p("AADAXIgHAAQgGgBgEgEQgFgFABgGIAAgPQABgGAEgEQAFgFAGABIAHAAQAHAAAEAFQAEAEAAAHIgBAPQgBAGgEAEQgFAEgFAAIgBAAg");
		this.shape_39.setTransform(786.3,750.5);
	
		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#264193").s().p("AgsCCIAKjhQABgQAMgLQAMgLAPAAIACAAQAQABALAMQALAMgBARIgHCeIgBABIgDBCg");
		this.shape_40.setTransform(788,713.7);
	
		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#E690A2").s().p("AgZBcIAJi5IAqACIgJC5g");
		this.shape_41.setTransform(787.1,735.5);
	
		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f().s("#57ADDF").ss(3.2).p("AjAwCQAkADAiAUQAiATATAdQBOBzAODvQAHBmgPCJQgDAYgbDXQgpErAoCsQAQBJAoBjQAYA4AxBvQBUDLgYCJ");
		this.shape_42.setTransform(770.7,608.4);
	
		this.instance_13 = new lib.Symbol1();
		this.instance_13.setTransform(753.1,506.4,1,1,5.5,0,0,-18.9,-122.9);
		this.instance_13._off = true;
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42,p:{rotation:0,x:770.7,y:608.4}},{t:this.shape_41,p:{rotation:0,x:787.1,y:735.5}},{t:this.shape_40,p:{rotation:0,x:788,y:713.7}},{t:this.shape_39,p:{rotation:0,x:786.3,y:750.5}}]}).to({state:[{t:this.shape_42,p:{rotation:5,x:761.5,y:609.6}},{t:this.shape_41,p:{rotation:5,x:766.8,y:737.6}},{t:this.shape_40,p:{rotation:5,x:769.7,y:716}},{t:this.shape_39,p:{rotation:5,x:764.8,y:752.5}}]},5).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},7).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},11).to({state:[{t:this.instance_13}]},7).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_13}]},6).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},19).to({state:[{t:this.instance_13}]},7).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_13}]},13).to({state:[{t:this.instance_13}]},7).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},7).to({state:[{t:this.instance_13}]},7).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_13}]},2).wait(8));
		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10).to({_off:false},0).wait(7).to({rotation:2.3,x:753,y:506.3},0).wait(4).to({regX:-18.8,rotation:0.8,x:753.1,y:506.4},0).wait(11).to({rotation:1.7},0).wait(7).to({rotation:3.5},0).wait(3).to({regX:-18.9,rotation:5.7,y:506.3},0).wait(9).to({regY:-122.8,rotation:8.7,x:753,y:506.4},0).wait(6).to({rotation:7,x:753.1,y:506.3},0).wait(4).to({rotation:4.2,y:506.4},0).wait(19).to({rotation:6.7},0).wait(7).to({rotation:8.7,x:753,y:506.3},0).wait(3).to({rotation:9.4,x:753.1},0).wait(9).to({rotation:12.4,y:506.4},0).wait(13).to({rotation:8.4},0).wait(7).to({rotation:1.9,x:753,y:506.3},0).wait(4).to({rotation:-5.5,x:753.1},0).wait(5).to({rotation:-12.5,y:506.4},0).wait(4).to({rotation:-14.8,x:753},0).wait(5).to({regX:-18.8,rotation:-2.8,x:753.1,y:506.3},0).wait(3).to({regX:-18.9,rotation:3.9,y:506.4},0).wait(4).to({rotation:3.9},0).wait(3).to({rotation:9.4,y:506.3},0).wait(4).to({rotation:12.4},0).wait(8).to({regY:-122.7,rotation:14.5,y:506.4},0).wait(5).to({regX:-18.8,regY:-122.8,rotation:13.6},0).wait(4).to({rotation:11.1},0).wait(7).to({rotation:9.1,x:753.2,y:506.3},0).wait(7).to({regX:-18.9,rotation:3.6,x:753.1,y:506.4},0).wait(3).to({regX:-18.8,rotation:-0.1,y:506.3},0).wait(3).to({regX:-18.9,rotation:-5.5},0).wait(4).to({regY:-122.7,rotation:-12.3,x:753.2,y:506.4},0).wait(5).to({rotation:-16.5},0).wait(4).to({regY:-122.8,rotation:-9.5,x:753.1},0).wait(4).to({regX:-18.8,rotation:-3.8,x:753.2,y:506.3},0).wait(4).to({rotation:1.4,y:506.4},0).wait(4).to({rotation:6.9,x:753.3,y:506.3},0).wait(3).to({regY:-122.7,rotation:10.6,x:753.2,y:506.4},0).wait(2).to({regX:-18.9,rotation:14.1,y:506.3},0).wait(2).to({rotation:11.6},0).wait(8));
	
		// FONE DE OUVIDO
		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f().s("#57ADDF").ss(3.2).p("A7jLzQBEDTCSCpQA5BCBOAsQAvAbBvAuQDLBSDfgDQDhgDDGhZQDXhgCfi3QCdi4BAjiQAdh3AQg7QAehmArg+QA/hZB2g2QBcgrCIgaQBNgOCdgbQCFgaBYgxQCIhLBeiYQBSiEAsiwQAchxAcjUQAejkAWhjQAKgpAJgXQANgjAUgWQAjgmA6AF");
		this.shape_43.setTransform(573.4,645.3);
	
		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f().s("#94D3EC").ss(2.8,1).p("AjCCjIGFlF");
		this.shape_44.setTransform(390.8,715.8);
	
		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#2E97D4").s().p("AhrDXQgNgGgIgUQgHgPgigFQgmgFgXgeIgQgcIGRlFIAzBBQAwBFgIAVQgMAfgwA4Qg6BHhCAwQhLA3ghAPQgUAIgRAAQgNAAgLgFg");
		this.shape_45.setTransform(391.4,716.7);
	
		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#55B5D3").s().p("AiyBcQAcAOAOAdQALgIADgOIAQAGQAGgGgDgSQgEgRAHgFQAFgDAJACQALACAEgCQAIgCABgLQACgJgEgKQgJgaAJgIQAJgHAbAJQAaAMAHgKQADgEABgHQACgKADgEQAEgFANgDQAPgDAEgEQAFgDAEgJIAEgOQAEgIAGgEQAIgFAGAEQADgZgMgWIA0ARQgIghgUgcQArAPAdAjIAFAFIgkAuQgaAfgLALQgMALggAUIjWCTQgRgigJgjg");
		this.shape_46.setTransform(385.4,708.4);
	
		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#8CCFDF").s().p("AjCCsQgWgaABgiQABgiApglIBUhBQBIhCAogkQBPhBAjACQAkACAZAfQANAPAGAPImFE9QgLgGgLgNg");
		this.shape_47.setTransform(385.2,707.4);
	
		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f().s("#95D5F6").ss(2.8,1).p("AAjD8IhGn3");
		this.shape_48.setTransform(330.5,692.7);
	
		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#35A6DE").s().p("AAiD2QgdgUgMAHQgTAKgOgEQgcgIgQgkQgPghgUhcQgRhOAEhbQAChMANgfQAIgVBSgTQAngKAogFIBSH/QgMAHgTAEIgRABQgcAAgYgQg");
		this.shape_49.setTransform(327.2,692.4);
	
		this.instance_14 = new lib.Path_8();
		this.instance_14.setTransform(339.6,691.8,1,1,0,0,0,7,21.2);
		this.instance_14.alpha = 0.469;
	
		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#92D0D4").s().p("AgKD+IhPnxIAigKQAogFAaAWQAcAWAOBlQAIA3AKBfIASBpQAFA3gWAbQgVAagiAFg");
		this.shape_50.setTransform(341.5,690.5);
	
		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#72C7DF").s().p("AhWBLIBJi9IBkAoIhJC9g");
		this.shape_51.setTransform(425.9,682.5);
	
		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#80CBE0").s().p("AhWBMIBJi+IBkAnIhJC+g");
		this.shape_52.setTransform(329.2,645.5);
	
		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f().s("#2E97D4").ss(9.5).p("AoQAZQAJglAWg2QAshtBChPQDUj8FkCJQFmCJgKFSQgDBqgoByQgUA5gTAj");
		this.shape_53.setTransform(383.6,637.2);
	
		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f().s("#93D3EC").ss(14.7).p("AnwAAQAjiCBkhsQDHjWFDB8QFGB9AKEsQAFCXg8B+");
		this.shape_54.setTransform(382.8,640);
	
		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f().s("#94D3EC").ss(9.5,1).p("AgxBfIBXhHIgfg9IAag5");
		this.shape_55.setTransform(417.9,698.7);
	
		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f().s("#95D5F6").ss(9.5,1).p("AgTBjIgThwIA/gaIATg7");
		this.shape_56.setTransform(322.2,661);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.instance_14},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]}).wait(228));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(433,428.5,866.5,844.7);
	
	})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
	var lib, images, createjs, ss;