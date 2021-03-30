
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !


// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

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

function Rectangle(coordHGX, coordHGY, width, heigth, thickness, color){
    shape.call(this, thickness, color);
    this.coordX = coordHGX; 
    this.coordY = coordHGY; 
    this.width = width; 
    this.heigth = heigth;
    this.color = color;
    this.thickness = thickness;

    this.getInitX = function(){
        return this.coordX;
    }.bind(this);

    //Fonction qui retourne la coordonnée de Y
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

function Line(coordSX, coordSY, coordEX, coordEY, thickness, color){
    shape.call(this, thickness, color);
    this.coordX = coordSX;
    this.coordY = coordSY;
    this.coordXE = coordEX;
    this.coordYE = coordEY;
    this.color = color;
    this.thickness = thickness;

    //Fonction qui retourne la coordonnée de X
    this.getInitX = function(){
        return this.coordX;
    }.bind(this);

    //Fonction qui retourne la coordonnée de Y
    this.getInitY = function(){
        return this.coordY;
    }.bind(this);

    //Fonction qui retourne la coordonnée de X final
    this.getEndX = function(){
        return this.coordXE;
    }.bind(this);

    //Fonction qui retourne la coordonnée de Y final
    this.getEndY = function(){
        return  this.coordYE;
    }.bind(this);

};
