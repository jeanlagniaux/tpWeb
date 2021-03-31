
// Classe Drawing
function Drawing() {
    this.shapes = new Array();

    this.addshape = function(shape) {
        this.shapes.push(shape);
    }.bind(this);

    this.removeShape = function(index) {
        this.shapes.splice(index,1);
    }.bind(this);

    this.getshapes = function(){
        return this.shapes;
    }.bind(this);
};

// Classe shape
function shape(color, thickness){
    this.color = color;
    this.thickness = thickness;

    this.getThickness = function(){
      return this.thickness;
    }.bind(this);

    this.getColor = function(){
        return this.color;
    }.bind(this);

};

//classe Rectangle
function Rectangle(coordX, coordY, width, heigth, thickness, color){

    shape.call(this, thickness, color); // référence à l'objet parent shape

    this.coordX = coordX;
    this.coordY = coordY;
    this.width = width;
    this.heigth = heigth;
    this.color = color;
    this.thickness = thickness;

    this.getInitX = function(){
        return this.coordX;
    }.bind(this);

    this.getInitY = function(){
        return this.coordY;
    }.bind(this);

    this.getWidth = function(){
        return this.width;
    }.bind(this);

    this.getLength = function(){
        return  this.heigth;
    }.bind(this);
};

//classe Line
function Line(coordSX, coordSY, coordFinalX, coordFinalY, thickness, color){

    shape.call(this, thickness, color);

    this.coordX = coordSX;
    this.coordY = coordSY;
    this.coordXFinal = coordFinalX;
    this.coordYFinal = coordFinalY;
    this.color = color;
    this.thickness = thickness;

    //Fonction qui retourne la coordonnée initiale de X
    this.getInitX = function(){
        return this.coordX;
    }.bind(this);

    //Fonction qui retourne la coordonnée initiale de Y
    this.getInitY = function(){
        return this.coordY;
    }.bind(this);

    //Fonction qui retourne la coordonnée finale de X
    this.getEndX = function(){
        return this.coordXFinal;
    }.bind(this);

    //Fonction qui retourne la coordonnée finale de Y
    this.getEndY = function(){
        return  this.coordYFinal;
    }.bind(this);

};
