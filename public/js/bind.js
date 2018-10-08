/**
 * Created by Talel on 2018-10-05.
 */

// nomDeFonction() //retourne un this va avoir la valeur de window
// parcontre si on bind lelement elle vas retourner lelement voulus



// --------------------- exemple 1 ---------------------------------


// on cree un objet a
var a = {
    name:"Rayan",
    age :4
}


// on cree un objet b
var b = {
    name:"Talel",
    age :40
}


// on cree une fonction que retourne le nom de l'objet
function showName(){
    return this.name;
}

//test en appelant d'une maniere standars un fonction
console.log('Aplle standar A : ', showName())
console.log('Aplle standar B : ', showName())

//test en applenat les fonctions avec le binds
console.log('Aplle bind A : ', showName.bind(a)())
console.log('Aplle bind B : ', showName.bind(b)())

// --------------------- exemple 1 ---------------------------------

// on cree un objet dog
var dog = {
    sound:"Woof",
    bark: function(){
        console.log(this.sound);
    }
}

dog.bark() // return Woof!

var barkingDog = dog.bark
// une autre facon de resoudre le probleme
// var barkingDog = dog.bark.bind(dog)


barkingDog() // undefined Waaaaaaaat

// on a besoin de lier ou attacher l'objet dog a la fonction
barkingDog.bind(dog)()

// --------------------- exemple 1 ---------------------------------


// on cree un objet dimension c1
var c1 = {
    innerHeight:10,
    innerWidth:206
}

// on cree un objet dimension c2
var c2 = {
    innerHeight:45,
    innerWidth:405
}


function showDimension(){
    console.log('This  x : '+this.innerHeight+ ' and this y : '+this.innerWidth);
}

var showValueOf = showDimension




showValueOf.bind(c1)()
showValueOf.bind(c2)()

/*
* Conclusion on doit toujours attacher
* l'objet ou la variable requise
* au cas ou notre fonction ou notre module
* retourne un 'this' de n'importe quel valeur oubjet
*
* */
























