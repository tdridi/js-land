(function(){ // on mets dans une fonction anonyme pour ne pas recrire les valeur dans le core.js
    /*
     * Exemple 1 => retourne un y simple
     * */

    var maFonction = function () {
        return function (x) {
            return console.log(x);
        }
    }

    var nouvelleFonction = maFonction()

    nouvelleFonction('y')

    /*
     * Exemple 2 => retourne des string simple
     * */
    var me = 'Bruce Wayne'
    function returnMe(){
        return function (me) {
            console.log('My name is '+ me + '!');
        }

    }
    //var getthat = returnMe()

    console.dir( returnMe())

    /*
    * Exemple 3  => retourne un i incrementer
    * */

    function compteur() {
        var i =0;
        return function () {
            return (i++);
        }

    }

    var premiereFois = compteur();

    console.log('la premiere execution : '+premiereFois()+' la deuxieme execution : '+premiereFois()+' la troisieme execution : '+premiereFois())





    /*
     * Exemple 4 => retourne des studiants dans un tableau
     * */

    function getStudent() {
        return function(student){
            for (var i = 0; i < student.length; i++){
                console.log(student[i])
            }
        }
    }

    var getStudentName = getStudent()
    getStudentName(['jean', 'marc', 'pierre'])


    /*
     * Exemple 5 => retourne des alert dans une inner fonction
     *
     * */

    function youSayGoodBye() {

        //alert("Good Bye!");

        return function() {
            alert("Hello!");
        }

    }

    var something = youSayGoodBye();

    something();


    /*
     * Exemple 6 => retourne des alert dans une inner fonction
     *
     * */



})()


