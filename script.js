/**
 * script.js - Script de la page
 */

/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: ["1967", "1974", "1962", "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: ["Zelda", "Ganon", "Tom", "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/

document.addEventListener("DOMContentLoaded" , () => {

  var gagne=1;
  // A FAIRE: Compléte le code pour de faire fonctionner le quizz, pour plus d'informations consulte le sujet
function saga(){

  
  var answers= [
    "Darth Vader", 
    "Anakin Skywalker",
    "Les deux réponse",
    "Aucune réponse",
  ];
  alert("Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?");
  alert(" veuillez choisir une réponse dans le tableau suivant svp ");
  alert("Le père de Luke Skywalker: " + answers + "\n");
  var res=prompt(" veuillez rentré votre réponse ")
  
    if (res==answers[0]){
        alert(" votre reponse est incorrecte");
      
    }
    else if (res==answers[1]){
      alert(" votre reponse est incorrecte");
      
    }
    else if (res==answers[2]){
      alert(" félicitation, votre reponse est correcte");
      document.getElementById("score").innerHTML=gagne++;
      
      
      
    }
    else if (res==answers[3]){
      alert(" votre reponse est incorrecte");
      
    }
    else{
      alert(" veuillez saisir un nom correct");
    
    }
}
saga();

  
function annee(){
  alert("En quelle année le groupe The Beatles a t\'il sorti le célèbre album Sgt. Pepper\'s Lonely Hearts Club Band ? ");
  var answers=[1967, 1974, 1962, 1980];
  alert("Annee : " +answers);
  var annee=prompt(" veuiller saisir votre réponse svp ");
  if( annee==answers[0]){
    alert(" félicitation vous avez trouvez la bonne réponse ");
    document.getElementById("score").innerHTML=gagne++;
    
  }

  else if( annee==answers[1]){
    alert(" veuillez reessayer, votre réponse est incorrecte ");
    
  }

  else if( annee==answers[2]){
    alert(" veuillez reessayer, votre réponse est incorrecte ");
    
  }

  else if( annee==answers[3]){
    alert(" veuillez reessayer, votre réponse est incorrecte ");
    
  }
  else if(isNaN(annee)){
    alert(" veuillez saisir un nombre svp ");
    annee=prompt(" veuillez saisir une annee ");
      if(annee==answers[0]){
        alert(" félicitation, votre réponse est correcte")
        document.getElementById("score").innerHTML=gagne++;
        
      }
      else{
        alert(" votre réponse est incorrecte")
      }
        

  }
  
  else{
    alert(" veuillez saisir une année correct");
    

  }
}
annee();

function personnage(){

  alert("Dans la série de jeux video Zelda, quel est le nom du personnage principal qu\'incarne le joueur ? ");
    var answers=["Zelda",   "Ganon",  "Tom",  "Link"];
    alert(" veuillez choisir un nom dans la table suivante svp ")
    alert("Nom des personnages: " +answers);
    var nom_pren=prompt("veuillez donner votre réponse svp ");
    if(nom_pren==answers[0]){
      alert(" votre réponse et incorrecte, veuillez recommencer svp");
    
    }
    else if(nom_pren==answers[1]){
      alert(" votre réponse et incorrecte, veuillez recommencer svp");
     
    }
    else if(nom_pren==answers[2]){
      alert(" votre réponse et incorrecte, veuillez recommencer svp");
  
    }

    else if(nom_pren==answers[3]){
      alert(" félicitation, votre réponse est bonne");
      document.getElementById("score").innerHTML=gagne++;
    
    }
    else{
      alert(" veuillez saisir un nom qui est dans le tableau");
    
    }

}
personnage();
function nomMission(){
    alert("Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?");
    var answers=["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"];
    alert("le nom de la mission spatiale lunaire " +answers);
    var nom_mission=prompt(" veuillez saisir votre réponse svp ");
    if(nom_mission==answers[0]){
      alert(" veuillez recommencer, votre réponse est incorrecte ");
   
    }

    else if(nom_mission==answers[1]){
      alert(" veuillez recommencer, votre réponse est incorrecte ");
 
    }
    else if(nom_mission==answers[2]){
      alert(" félicitation, vous avez trouver la bonne réponse ");
      document.getElementById("score").innerHTML=gagne++;

    }

    else if(nom_mission==answers[3]){
      alert(" veuillez recommencer, votre réponse est incorrecte ");

    }
    else{
      alert (" veuillez choisir un nom dans la table car l'élément saisi est inconnu ");
    
    }


  }




  nomMission();
  
  
  




  




});




