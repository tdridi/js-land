/**
 * Created by Talel on 2018-10-05.
 */
(function(){ // on mets dans une fonction anonyme pour ne pas recrire les valeur dans le core.js
    /*
    * Premier exemple comparaison entre this et even.target
    */
    var divText = document.querySelector("#demoText");
    var divText2 = document.querySelector("#demoText2");

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
    //console.log(elem);
    //console.log(divText.getAttribute('id'))
    for (var i = 0; i < elem.length; i++) {
        //console.log(this);
        elem[i].addEventListener("click", function(e){

            console.log(this)
            e.stopPropagation()
            if (this.getAttribute('class') == 'bubbling') {
                alert("Capturing:" + this.tagName)
            }
        }, true);
        /*elem[i].addEventListener("click", function(e){
            alert('Bubbling: '+this.tagName)
        });*/
    }

})()
