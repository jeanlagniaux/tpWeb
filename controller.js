
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	this.DragAndDrop = new DragAndDrop(canvas, this);


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	
	//Début du dessin
	this.onInteractionStart = function(){
        this.currLineWidth = document.getElementById('spinnerWidth').value;
        this.currColour = document.getElementById('colour').value;
        if(document.getElementById('butRect').checked){
            this.currEditingMode = editingMode.rect;
        }
        if(document.getElementById('butLine').checked){
            this.currEditingMode = editingMode.line;
        }

        //Switch sur une ligne ou un rectangle et affectation à la forme courante
        switch(this.currEditingMode){
            case editingMode.rect:
                console.log("Un rectangle");
                this.currentShape = new Rectangle(this.DragAndDrop.initX, this.DragAndDrop.initY,
                    0, 0, this.currLineWidth, this.currColour);
                break;
            case editingMode.line:
                console.log("Une ligne");
                this.currentShape = new Line(this.DragAndDrop.initX, this.DragAndDrop.initY,
                    this.DragAndDrop.initX, this.DragAndDrop.initY, this.currLineWidth, this.currColour);
                break;
        }

        this.currentShape.paint(ctx, canvas);

	}.bind(this);

	//Dessin sur le mouvement
    this.onInteractionUpdate = function(){

        if (this.currEditingMode == editingMode.rect){
            var width = this.DragAndDrop.endX - this.DragAndDrop.initX;
            var length = this.DragAndDrop.endY - this.DragAndDrop.initY;
            this.currentShape = new Rectangle(this.DragAndDrop.initX, this.DragAndDrop.initY, width, length, this.currLineWidth, this.currColour);
        }
        if (this.currEditingMode == editingMode.line){
            this.currentShape = new Line(this.DragAndDrop.initX, this.DragAndDrop.initY, this.DragAndDrop.endX, this.DragAndDrop.endY, this.currLineWidth, this.currColour);
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);

    }.bind(this);

    //Fin du dessin
    this.onInteractionEnd = function(){
        if (this.currEditingMode == editingMode.rect){
            var width = this.DragAndDrop.endX - this.DragAndDrop.initX;
            var length = this.DragAndDrop.endY - this.DragAndDrop.initY;
            this.currentShape = new Rectangle(this.DragAndDrop.initX, this.DragAndDrop.initY, width, length, this.currLineWidth, this.currColour);
        }
        if (this.currEditingMode == editingMode.line){
            this.currentShape = new Line(this.DragAndDrop.initX, this.DragAndDrop.initY, this.DragAndDrop.endX, this.DragAndDrop.endY, this.currLineWidth, this.currColour);
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.addshape(this.currentShape);
        drawing.paint(ctx, canvas);
        drawing.updateShapeList(this.currentShape);
        this.currentShape = null;

    }.bind(this);


};


