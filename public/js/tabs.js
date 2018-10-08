(function(){ // on mets dans une fonction anonyme pour ne pas recrire les valeur dans le core.js
    /*
    * Quand on clique sur un onglet
    *   on retire la class active sur l'onglet
    *   on ajoute la class active sur l'onglet selectionner
    *
    *   On retire la class sur le contenu
    *   on ajoute la class sur le contenu selectionner
    *
    *
    * */

    var tabsLink = document.querySelectorAll('.tabs a')


    var afficherOnglets = function (a, animations) {
        if (animations == undefined){
            animations = true;
        }
        var li = a.parentNode,
            divContainer =  a.parentNode.parentNode.parentNode,
            activeTab = divContainer.querySelector('.tab-content.active'),
            targetTab = divContainer.querySelector(a.getAttribute('href'))


        //Si cet element exist
        if(li.classList.contains('active')){
            return false
        }

        // on retire la class active sur l'onglet
        divContainer.querySelector('.tabs .active').classList.remove('active')
        // on ajoute la class active sur l'onglet selectionner
        li.classList.add('active')

        if (animations){
            activeTab.classList.add('fade');
            activeTab.classList.remove('in');
            var tansitionEnd = function() {
                this.classList.remove('fade');
                this.classList.remove('active');
                targetTab.classList.add('active');
                targetTab.classList.add('fade');
                targetTab.classList.add('in');
                activeTab.removeEventListener("transitionend", tansitionEnd);
            }
            activeTab.addEventListener("transitionend", tansitionEnd);
        } else {
            /*
             * Maniere display Block
             ***/
            //On retire la class sur le contenu
            activeTab.classList.remove('active')

            //on ajoute la class sur le contenu selectionner
            targetTab.classList.add('active')

        }
    }


    // Pour tout les elements de tab
    for (var i=0; i< tabsLink.length; i++ ){
        tabsLink[i].onclick = function(){
            afficherOnglets(this);
        }
    }

    //Fonction qui gere les hash
    var hashChange = function(e){
        var hash = window.location.hash;
        var a = document.querySelector('a[href="'+hash+'"]')
        if (a !== null && !a.classList.contains('.active')){
            afficherOnglets(a, e !== undefined);
        }
    }

    // Detecteur pour le chnagerment du shash dans les url
    window.addEventListener('hashchange',hashChange )

    //Executer lafonction au cas ou on recharge la page avec un hash
    hashChange()

})()