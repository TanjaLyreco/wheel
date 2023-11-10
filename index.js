(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,683,683],[313,685,309,101],[0,685,311,103]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.logo_tork = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.spin_bttn = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.stop_bttn = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Wheel_tork = function() {
	this.initialize(img.Wheel_tork);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2972,2971);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Wheel_an = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Wheel
	this.instance = new lib.Wheel_tork();
	this.instance.setTransform(0,0,0.2692,0.2692);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Wheel_an, new cjs.Rectangle(0,0,800,799.7), null);


(lib.STOP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stop_bttn();
	this.instance.setTransform(-155.5,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-51.5,311,103);


(lib.PLAY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.spin_bttn();
	this.instance.setTransform(-154.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.5,-50.5,309,101);


(lib.Wheel_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Wheel
	this.instance = new lib.Wheel_an();
	this.instance.setTransform(399.9,399.9,1,1,0,0,0,399.9,399.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:400,regY:399.8,rotation:9.2308,x:399.95,y:399.8},0).wait(1).to({rotation:18.4615,x:400},0).wait(1).to({rotation:27.6923,y:399.85},0).wait(1).to({rotation:36.9231},0).wait(1).to({rotation:46.1538,y:399.9},0).wait(1).to({rotation:55.3846,x:399.95},0).wait(1).to({rotation:64.6154,y:399.95},0).wait(1).to({rotation:73.8462,x:400,y:399.9},0).wait(1).to({rotation:83.0769,x:399.95,y:399.95},0).wait(1).to({rotation:92.3077,x:400,y:399.85},0).wait(1).to({rotation:101.5385,y:399.9},0).wait(1).to({rotation:110.7692,x:399.95},0).wait(1).to({rotation:120},0).wait(1).to({rotation:129.2308},0).wait(1).to({rotation:138.4615},0).wait(1).to({rotation:147.6923},0).wait(1).to({rotation:156.9231,x:399.9},0).wait(1).to({rotation:166.1538,x:399.95,y:399.85},0).wait(1).to({rotation:175.3846,x:399.9,y:399.9},0).wait(1).to({rotation:184.6154,x:399.85,y:399.85},0).wait(1).to({rotation:193.8462},0).wait(1).to({rotation:203.0769},0).wait(1).to({rotation:212.3077},0).wait(1).to({rotation:221.5385},0).wait(1).to({rotation:230.7692,x:399.9,y:399.8},0).wait(1).to({rotation:240,x:399.85},0).wait(1).to({rotation:249.2308},0).wait(1).to({rotation:258.4615},0).wait(1).to({rotation:267.6923},0).wait(1).to({rotation:276.9231,x:399.95,y:399.75},0).wait(1).to({rotation:286.1538,y:399.8},0).wait(1).to({rotation:295.3846,x:399.9,y:399.75},0).wait(1).to({rotation:304.6154,x:399.95},0).wait(1).to({rotation:313.8462,x:400},0).wait(1).to({rotation:323.0769,x:400.05},0).wait(1).to({rotation:332.3077,x:400},0).wait(1).to({rotation:341.5385},0).wait(1).to({rotation:350.7692},0).wait(1).to({rotation:360,y:399.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.4,-165.6,1130.8,1130.8999999999999);


// stage content:
(lib.Wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_10.on('click', function(){
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.movieClip_9.stop();
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_11.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.movieClip_9.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Wheel
	this.button_11 = new lib.PLAY();
	this.button_11.name = "button_11";
	this.button_11.setTransform(387.15,770.1,0.3996,0.3996,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.button_11, 0, 1, 1);

	this.button_10 = new lib.STOP();
	this.button_10.name = "button_10";
	this.button_10.setTransform(614,770.5,0.3996,0.3996,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_10, 0, 1, 1);

	this.instance = new lib.logo_tork();
	this.instance.setTransform(434,316,0.1938,0.1938);

	this.movieClip_9 = new lib.Wheel_1();
	this.movieClip_9.name = "movieClip_9";
	this.movieClip_9.setTransform(500.05,381.85,0.8274,0.8274,0,0,0,400.1,399.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_9},{t:this.instance},{t:this.button_10},{t:this.button_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(669,551,161.89999999999998,240.10000000000002);
// library properties:
lib.properties = {
	id: 'AA8F0181C52F6043AC06DB8C36FD088E',
	width: 1000,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Wheel_tork.png", id:"Wheel_tork"},
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AA8F0181C52F6043AC06DB8C36FD088E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;