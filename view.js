shape.prototype.paint = function(ctx){
    ctx.beginPath();
    ctx.lineWidth = this.getThickness();
    ctx.strokeStyle = this.getColor();
};

Rectangle.prototype.paint = function(ctx) {
    shape.prototype.paint.call(this,ctx);
    ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(), this.getLength());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    shape.prototype.paint.call(this,ctx);
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getEndX(), this.getEndY());
    ctx.stroke();
};

Drawing.prototype.updateShapeList = function(){

    var shapeList = document.getElementById('shapeList');

    //Création du bouton et de ses informations respectives
    var li = document.createElement('li');
    var deleteButton = document.createElement('button');
    var span = document.createElement('span');


    span.setAttribute('class','glyphicon glyphicon-trash');
    li.setAttribute('class', 'list-group-item');
    li.setAttribute('id', 'form-'+(this.shapes.length-1));
    deleteButton.setAttribute('class', 'btn btn-default mr-3');
    deleteButton.setAttribute('id', 'button_'+(this.shapes.length-1));
    deleteButton.setAttribute('onClick', 'drawing.deleteShape('+(this.shapes.length-1)+')');

    deleteButton.appendChild(span);
    li.appendChild(deleteButton);

    var myShape = this.shapes[(this.shapes.length-1)];

    if(myShape instanceof Rectangle){
        li.appendChild(document.createTextNode("Rectangle( Coord [ " + myShape.getInitX() + "," + myShape.getInitY() + " ] , Largeur : " + myShape.getWidth() + ", Hauteur : " + myShape.getLength() + ")"));
    }
    if(myShape instanceof Line){
        li.appendChild(document.createTextNode("Line( Initial [ " + myShape.getInitX() + "," + myShape.getInitY() + "], Fin [ " + myShape.getEndX() + "," + myShape.getEndY() + " ] )"));
    }
    shapeList.appendChild(li);
};

Drawing.prototype.paint = function(ctx) {
    console.log(this.getshapes());
    ctx.fillStyle = document.getElementById('canvaColour').value; // change le background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getshapes().forEach(function(tab) {
        tab.paint(ctx);
    });
};

Drawing.prototype.deleteShape = function(id){
    var li = document.getElementById('form-'+id);
    var index = $(li).index();
    li.remove();
    this.removeShape(index);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.paint(ctx, canvas);
};
