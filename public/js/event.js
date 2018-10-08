/**
 * Created by Talel on 2018-10-05.
 */

// element.addEventListener("Type d'évènement", callback)
// Par exemple pour détecter un clic sur un lien

var eventLink = document.querySelector('#event')

eventLink.addEventListener('click', function () {
    window.alert('Vous avez cliqué sur le lien')
})



