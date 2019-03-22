// variable contenant le message
var msg = [] ;
msg = prompt("Message a crypter : ") ;

// variable contenant l'aphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

//msg
var sms ="toute ecriture est inspiree de dieu et utile pour enseigner pour convaincre pour corriger pour instruire dans la justice" ;

//clé 
var motcle ; 
motcle = prompt("Mot-clé : ") ;

//1 Nombre d'occurence par lettre
function NombreOccurenceParLettre(alphabet,message) {
    for ( var i = 0 ; i < alphabet.length ; i++ ) {
        var compteur = 0 ;
        //var somme = 0 ;
        for ( var j = 0 ; j < message.length ; j++ ) {
            if (alphabet[i] === message [j]) { 
                compteur++ ;
            }   
        }
        console.log(alphabet[i] + " = " + compteur) ;
    }
}

//2 Somme des fréquences
var SommeFreq = function SommeFrequence (message) {
    var somme = 0 ;
    for ( var i = 0 ; i < message.length ; i++ ) {
        if ( message[i] != " ") {
          somme++ ;
      }
    }
    return somme ;
    } 


function CleMatriceDeChiffrement(motcle) {
    var compteur = 0 ; 
    for (var i = 0 ; i < motcle.length ; i++) {
        compteur++ ;
    }
    console.log("Longueur de la clé : "+ compteur) ;
    console.log("Mot-clé :") ;
    for (var i = 0 ; i < motcle.length ; i++) {
        var tab = [] ; 
        for ( var t = 0 ; t < alphabet.length ; t++) {
            if ( motcle[i] === alphabet[t]) { 
                tab[i] = t+1 ;
                console.log(motcle[i].toUpperCase()+" "+tab[i]) ;
            }
        }
    }
    var NombreDeColonne ; 
    var NombreDeLigne ;
    NombreDeColonne = motcle.length ;
    NombreDeLigne = Math.trunc(SommeFreq / NombreDeColonne) + 1 ;
    console.log("Nombre de colonne : "+NombreDeColonne) ;
    console.log("Nombre de ligne : "+NombreDeLigne) ;
}
/*

//3 Clé de chiffrement (Pas mal mais reste à bien gérer les positions)
function CleDeChiffrement(motcle) {
    var compteur = 0 ; 
    for (var i = 0 ; i < motcle.length ; i++) {
        compteur++ ;
    }
    console.log("Longueur de la clé : "+ compteur) ;
    console.log("Mot-clé :") ;
    for (var i = 0 ; i < motcle.length ; i++) {
        var tab = [] ; 
        for ( var t = 0 ; t < alphabet.length ; t++) {
            if ( motcle[i] === alphabet[t]) { 
                tab[i] = t+1 ;
                console.log(motcle[i].toUpperCase()+" "+tab[i]) ;
            }
        }
    }
}

//4 Matrice de chiffrement
function MatriceDeChiffrement () {
    var NombreDeColonne ; 
    var NombreDeLigne ;
    NombreDeColonne = motcle.length ;
    NombreDeligne =  Math.trunc(SommeFrequence(message) / NombreDeColonne) + 1 ;
    console.log(NombreDeLigne) ;
}
*/
//3 and 4

