function DragAndDrop(canvas, interactor) {

	this.initX = 0;
	this.initY = 0;
	this.endX = 0;
	this.endY = 0;
	this.isDown = false;


	this.mousedown = function(event){
		this.initX = GetPosition(canvas, event).x;
		this.initY = GetPosition(canvas, event).y;
    this.endX = GetPosition(canvas, event).x;
    this.endY = GetPosition(canvas, event).y;
		this.isDown = true;

		interactor.onInteractionStart(this);

		console.log("Mouse down : [ " + this.initX + " ; " + this.initY + " ] ");
	}.bind(this);

	this.mousemove = function(event){
		if (this.isDown){
			this.endX = GetPosition(canvas, event).x;
			this.endY = GetPosition(canvas, event).y;

			interactor.onInteractionUpdate(this);

			console.log("Mouvement : [ " + this.endX + " ; " + this.endY + " ] ");
		}
	}.bind(this);

  this.mouseup = function(event){
		if (this.isDown){
			this.isDown = false;

			interactor.onInteractionEnd(this);

			console.log("Mouse up :  debut [ " + this.initX + " ; " + this.initY + " ] / fin [ " + this.endX + " ; " + this.endY + " ] ");
		}
	}.bind(this);

  canvas.addEventListener('mousedown', this.mousedown);
	canvas.addEventListener('mousemove', this.mousemove);
	canvas.addEventListener('mouseup', this.mouseup);
};

function GetPosition(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
};
