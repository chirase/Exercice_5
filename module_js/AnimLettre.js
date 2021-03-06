import {
    Util
} from './Util.js'


export class AnimLettre {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} lettre - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lettre, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.lettre = lettre;
        this.elmParent = elementParent
        this.fonction = fonction
        this.animerLettre(lettre,elementParent,fonction)
    }


   animerLettre(lettre,elementParent,fonction){
       const nbLettres = lettre.length;
       let conteneurLettre = document.createElement("span");
        conteneurLettre.classList.add("mot");
        let i = 0;
       for (let e of lettre){
           i++;
        let lettreElm = document.createElement("span");
        lettreElm.innerHTML = e;
        lettreElm.style.animationDelay = `${Math.atan(i*(i/100))}s`;
        lettreElm.style.boxShadow = "4px -3px 79px 0px rgba(0,0,0,0.75)";
        conteneurLettre.appendChild(lettreElm);
        
       }

       elementParent.appendChild(conteneurLettre);

   }

   

}