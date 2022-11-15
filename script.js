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
  ("Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?");
  (" veuillez choisir une réponse dans le tableau suivant svp ");
  ("Le père de Luke Skywalker: " + answers + "\n");
  
      var res=prompt("veuillez choisir une réponse dans liste suivant svp: ");
    if (res==answers[0]){
       this.innerHTML=("votre reponse est incorrecte");
      
    }
    else if (res==answers[1]){
      this.innerHTML=(" votre reponse est incorrecte");
      
    }
    else if (res==answers[2]){
      this.innerHTML=(" félicitation, votre reponse est correcte");
      document.getElementById("score").innerHTML=gagne++;
      
      
      
    }
    else if (res==answers[3]){
      this.innerHTML=(" votre reponse est incorrecte");
      
    }
    else{
     this.innerHTML='ré-essayer encore, votre réponse est incorrecte';
    
    }
}
function annee(){
  ("En quelle année le groupe The Beatles a t\'il sorti le célèbre album Sgt. Pepper\'s Lonely Hearts Club Band ? ");
  var answers=[1967, 1974, 1962, 1980];
  ("Annee : " +answers);
  var annee=prompt(" veuiller saisir votre réponse svp concernant la question numéro 2 ");
  if( annee==answers[0]){
    this.innerHTML=(" félicitation vous avez trouvez la bonne réponse ");
    document.getElementById("score").innerHTML=gagne++;
    
  }

  else if( annee==answers[1]){
    this.innerHTML=(" veuillez reessayer, votre réponse est incorrecte ");
    
  }

  else if( annee==answers[2]){
    this.innerHTML=(" veuillez reessayer, votre réponse est incorrecte ");
    
  }

  else if( annee==answers[3]){
    this.innerHTML=(" veuillez reessayer, votre réponse est incorrecte ");
    
  }

  else if(isNaN(annee)){
    alert(" veuillez saisir un nombre entier car l'élement saisi est incorrect");
    var annee=prompt(" veuiller saisir votre réponse svp concernant la question numéro 2 ");
  if( annee==answers[0]){
    this.innerHTML=(" félicitation vous avez trouvez la bonne réponse ");
    document.getElementById("score").innerHTML=gagne++;
    
  }

  else if( annee==answers[1]){
    this.innerHTML=(" veuillez reessayer, votre réponse est incorrecte ");
    
  }

  else if( annee==answers[2]){
    this.innerHTML=(" veuillez reessayer, votre réponse est incorrecte ");
    
  }

  else if( annee==answers[3]){
    this.innerHTML=(" veuillez reessayer, votre réponse est incorrecte ");
    
  }

  }
  
  else{
    this.innerHTML=(" veuillez saisir une année correct");
    

  }

}


function personnage(){

  ("Dans la série de jeux video Zelda, quel est le nom du personnage principal qu\'incarne le joueur ? ");
    var answers=["Zelda",   "Ganon",  "Tom",  "Link"];
    (" veuillez donner le nom du personnage principal ");
    ("Nom des personnages: " +answers);
    var nom_pren=prompt("veuillez donner votre réponse svp ");
    if(nom_pren==answers[0]){
      this.innerHTML=(" votre réponse et incorrecte, veuillez recommencer svp");
    
    }
    else if(nom_pren==answers[1]){
      this.innerHTML=(" votre réponse et incorrecte, veuillez recommencer svp");
     
    }
    else if(nom_pren==answers[2]){
      this.innerHTML=(" votre réponse et incorrecte, veuillez recommencer svp");
  
    }

    else if(nom_pren==answers[3]){
      this.innerHTML=(" félicitation, votre réponse est bonne");
      document.getElementById("score").innerHTML=gagne++;
    
    }
    else{
      this.innerHTML=(" veuillez saisir un nom qui est dans le tableau");
    
    }

}

function nomMission(){
("Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?");
    var answers=["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"];
    ("le nom de la mission spatiale lunaire " +answers);
    var nom_mission=prompt(" veuillez saisir le nom de la mission spatiale lunaire svp ");
    if(nom_mission==answers[0]){
      this.innerHTML=(" veuillez recommencer, votre réponse est incorrecte ");
   
    }

    else if(nom_mission==answers[1]){
      this.innerHTML=(" veuillez recommencer, votre réponse est incorrecte ");
 
    }
    else if(nom_mission==answers[2]){
      this.innerHTML=(" félicitation, vous avez trouver la bonne réponse ");
      document.getElementById("score").innerHTML=gagne++;

    }

    else if(nom_mission==answers[3]){
      this.innerHTML=(" veuillez recommencer, votre réponse est incorrecte ");

    }
    else{
      this.innerHTML= (" veuillez choisir un nom dans la table car l'élément saisi est inconnu ");
    
    }


  }

  var styl=document.querySelector('.question-container');
  styl.addEventListener("click", saga)
  var les=document.querySelector('.question-container')
  les.addEventListener("click", () => {
    if(getComputedStyle(les).display != "none"){
      les.style.display = "none";
    } else {
      les.style.display = "block";
    }
  })
  
  var ann=document.querySelector('.list');
  ann.addEventListener("click", annee);
  var an=document.querySelector('.list');
  an.addEventListener("click", () => {
    if(getComputedStyle(an).display != "none"){
      an.style.display = "none";
    } else {
      an.style.display = "block";
    }
  })

  var lar=document.querySelector(".list2");
  lar.addEventListener("click", personnage);
  var es=document.querySelector(".list2");
  es.addEventListener("click", () => {
    if(getComputedStyle(es).display != "none"){
      es.style.display = "none";
    } else {
      es.style.display = "block";
    }
  })

  var lif1=document.querySelector(".list3");
  lif1.addEventListener("click", nomMission);
  var es1=document.querySelector(".list3");
  es1.addEventListener("click", () => {
    if(getComputedStyle(es1).display != "none"){
      es1.style.display = "none";
    } else {
      es1.style.display = "block";
    }
  })




  
  
  






  




});








    

