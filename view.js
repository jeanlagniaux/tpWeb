
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

shape.prototype.paint = function(ctx){
    ctx.beginPath();
    ctx.lineWidth = this.getThickness();
    ctx.strokeStyle = this.getColor();
};

Rectangle.prototype.paint = function(ctx) {
    shape.prototype.paint.call(this,ctx);
    //TODO Manager color
    ctx.rect(this.getInitX(), this.getInitY(), this.getLength(), this.getWidth());
    ctx.stroke();
};
    
Line.prototype.paint = function(ctx) {
    shape.prototype.paint.call(this,ctx);    
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getEndX(), this.getEndY());
    ctx.stroke();
};
    
    
Drawing.prototype.paint = function(ctx) {
    console.log(this.getshapes());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getshapes().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

Drawing.prototype.updateShapeList = function(){

    var shapeList = document.getElementById('shapeList');

    //Création du bouton
    var li = document.createElement('li');
    var button = document.createElement('button');
    var span = document.createElement('span');


    span.setAttribute('class','glyphicon glyphicon-remove-sign');
    // Liste
    li.setAttribute('class', 'list-group-item');
    li.setAttribute('id', 'form-'+(this.shapes.length-1));
    // Button
    button.setAttribute('class', 'btn btn-default');
    button.setAttribute('id', 'button_'+(this.shapes.length-1));
    button.setAttribute('onClick', 'drawing.deleteShape('+(this.shapes.length-1)+')');

    button.appendChild(span);
    li.appendChild(button);

    var maForme = this.shapes[(this.shapes.length-1)];

    if(maForme instanceof Rectangle){
        li.appendChild(document.createTextNode("Rectangle(" + maForme.getInitX() + ","
            + maForme.getInitY() + "," + maForme.getWidth() + "," + maForme.getLength() + ")"));
    }
    if(maForme instanceof Line){
        li.appendChild(document.createTextNode("Line(" + maForme.getInitX() + "," + maForme.getInitY()
            + "," + maForme.getEndX() + "," + maForme.getEndY() + ")"));
    }
    //On ajoute le button de suppression
    shapeList.appendChild(li);
};

Drawing.prototype.deleteShape = function(id){
    var li = document.getElementById('form-'+id);
    var index = $(li).index();
    //Delete liste
    li.remove();
    //Suppression formes
    this.removeForm(index);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.paint(ctx, canvas);
};
    