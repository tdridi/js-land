/**
 * Created by Talel on 2018-10-05.
 */

var demoDiv = document.createElement("div");
demoDiv.setAttribute('id', 'demo')

var demoDiv2 = document.createElement("div");
demoDiv2.setAttribute('id', 'demo2')
demoDiv2.innerText = 'Tu veux un Fruit ?'

console.log(demoDiv2);
mainContainer.appendChild(demoDiv)
mainContainer.appendChild(demoDiv2)


numbers = ['zero','one','two','three','four','five','six','seven','eight'];
//

//delete numbers[2];
//numbers.splice(2, 1);
// console.log(numbers);
// console.log(numbers[2]);

var group = [1,2,3];
var fixNumber = function (){

};


var fruits = ["Kiwi", "Orange", "Pomme", "Banane", "Grenadine", "Peche", 'Abricot', 'Poire'], biggest;

function myFunction() {


    // fruits.forEach(myf);
    // function myf(item){
    //     if (item.length >= biggest.length){biggest = item}
    //     return biggest;
    // }

    for (var i= 0; i < fruits.length; i++ ){
        console.log(fruits[i]);
        if ( biggest == undefined || (fruits[i].length < biggest.length)){ biggest = fruits[i]}
    }
    demoDiv.innerHTML = demoDiv.innerHTML + biggest + "<br>";
}

myFunction();
var a = '1';
console.log(mixa());

function mixa(){return (a === 1)}

function getFee(isMember) {
    return (isMember ? "$2.00" : "$10.00");
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(-1));
// expected output: "$2.00"

var thisType = typeof parseFloat();
console.log('this type is '+ thisType)

for (var i= 0; i<10;i++){
    (function(i){
        window.setTimeout(function(){
            console.log(i);
        },1000)
    })(i);

}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


/*
 * Fonction pour afficher les fruits
 * avec une consdition de metre un point a la fin
 * */
function getTheseFruits(fruits){
    var base = 'Les fuitrs dans cet example sont : ';
    for (var i= 0; i< fruits.length; i++){
        base += fruits[i]+ ((i == fruits.length-1) ?  "." :", ");
    }
    demoDiv.innerHTML = base;


}
getTheseFruits(fruits)

/*
 * Fonction pour afficher de maniere aleatoire les fruits
 * */
//variable pour stoker le numero qui viens detre utiliser
var number;
function  rollIt() {
    window.setInterval(function(){

        //variable pour stoker un numeros aleatoire
        var newNumbre =  getRandomInt(fruits.length-1);
        newNumbre != number ? number = newNumbre : number = newNumbre+1
        demoDiv2.innerText = fruits[number];

    },1000);
}

rollIt()

