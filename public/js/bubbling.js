/**
 * Created by Talel on 2018-10-05.
 */
(function(){ // on mets dans une fonction anonyme pour ne pas recrire les valeur dans le core.js
    /*
    * Premier exemple comparaison entre this et even.target
    */
    var divText = document.querySelector("#demoText");
    var divText2 = document.querySelector("#demoText2");
    var divText3 = document.querySelector("#demoText3");

    form.onclick = function(event) {
        event.target.style.backgroundColor = 'yellow';
        console.log(this.tagName)

        // chrome needs some time to paint yellow
        setTimeout(function() {
            divText.innerText = "target =  " + event.target.tagName + ", this=" + this.tagName;
            event.target.style.backgroundColor = ''
        }, 200);
    };

    /*
     * Deuxiemme exemple comparaison entre Bubbling et capturing
     */

    var elem = document.querySelectorAll("*");
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function(e){
            //alert("Capturing:" + this.tagName)
        }, true);
        elem[i].addEventListener("click", function(e){
            //alert('Bubbling: '+this.tagName)
        });
    }


    /*
    * Troisiemme exemple comparaison entre container et ces child
    */
    var homeBound   = document.querySelector('.homeBound'),
        bigBoy      = document.querySelector('.bigBoy'),
        smallBoy    = document.querySelector('.smallBoy'),
        tinyBoy     = document.querySelector('.tinyBoy');


    function customeventHandler(container){
        container.addEventListener("click", function(e){

            var activeContainer = homeBound.querySelector('.active');
            if (activeContainer != null){
                activeContainer.classList.remove('active')
            }
            container.classList.add('active')

            e.stopPropagation()
        });
    }


    customeventHandler(bigBoy)
    customeventHandler(smallBoy)
    customeventHandler(tinyBoy)

})()
