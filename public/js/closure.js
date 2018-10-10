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
        return function () {
            console.log('My name is '+ me + '!');
        }

    }

    var getThat = returnMe()

    console.dir( getThat(me))

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

        return function(msg) {
            alert(msg);
        }

    }

    var something = youSayGoodBye();

    something('Hello !');


    /*
     * Exemple 6 => retourne des alert dans une inner fonction
     *
     * */

    function stopWatch() {
        var startTime = Date.now();
        console.log(startTime);

        function getDelay() {
            var elapsedTime = Date.now() - startTime;
            console.log('ElapsedTime : '+elapsedTime);
        }

        return getDelay;
    }

    stopWatch()

    var timer = stopWatch()

    for (var i=0; i<1000000; i++){
        var foo= Math.random() *1000
        //console.log('Foo : '+foo)
    }

    timer()


    /*
    * Consolusion : La chose la plus importante que les (Closure) fermetures font est de permettre aux
    * fonctions de continuer à fonctionner même si leur environnement change ou disparaît radicalement.
    *
    * */


})()


