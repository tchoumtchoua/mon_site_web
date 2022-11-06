$(document).ready(function(){
    
    var  $prenom = $('#prenom'),
         $nom = $('#nom'),
         $pseudo = $('#pseudo'),
         $mdp = $('#mdp'),
         $confirmation = $('#confirmation'),
         $mail = $('#mail'),
         $tel = $('#tel'),
         $envoi = $('#envoi'),
         $reset = $('#reset'),
         $erreur = $('#erreur'),
         $alert = $('.alert'),
         $tous = $('.form_control'),
         $bravo = $('#bravo');
     var $tot;
     
     $confirmation.keyup(function(){
         if($(this).val() != $mdp.val()){ // si la confirmation est différente du mot de passe
             $tot=0;
             $(this).css({ // on rend le champ rouge
                  borderColor : 'red',
             color : 'red'
             });
             $(this).next().css("display", "block");
         }
         else{
             $tot=1;
             $(this).css({ // si tout est bon, on le rend vert
                 borderColor : 'green',
                 color : 'green'
                 });
                 $(this).next().css("display", "none");
         }
     });
 
     $prenom.keyup(function(){  
         if(/[a-zA-Z]+$/.test($prenom.val())){
             $tot1=1;
             $(this).css({
                  borderColor : 'green',
             color : 'green'
             });
             $(this).next().css("display", "none");
         }
         else{
             $tot1=0;
             $(this).css({
                 borderColor : 'red',
                 color : 'red'
             });
             $(this).next().css("display", "block");
         }
     });
 
     $nom.keyup(function(){  
         if(/[a-zA-Z]+$/.test($nom.val())){
             $tot2=1;
             $(this).css({
                  borderColor : 'green',
             color : 'green'
             });
             $(this).next().css("display", "none");
         }
         else{
             $tot2=0;
             $(this).css({
                 borderColor : 'red',
                 color : 'red'
             });
             $(this).next().css("display", "block");
         }
     });
     
     $pseudo.keyup(function(){  
         if(/^[a-z0-9_-]{8,16}$/.test($pseudo.val())){
             $tot3=1;
             $(this).css({
                  borderColor : 'green',
             color : 'green'
             });
             $(this).next().css("display", "none");
         }
         else{
             $tot3=0;
             $(this).css({
                 borderColor : 'red',
                 color : 'red'
             });
             $(this).next().css("display", "block");
         }
     });
     
     $mdp.keyup(function(){  
         if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,16}$/.test($mdp.val())){
             $tot4=1;
             $(this).css({
                  borderColor : 'green',
             color : 'green'
             });
             $(this).next().css("display", "none");
         }
         else{
             $tot4=0;
             $(this).css({
                 borderColor : 'red',
                 color : 'red'
             });
             $(this).next().css("display", "block");
         }
     });
 
     
     $mail.keyup(function(){  
         if(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test($mail.val())){
             $tot5=1;
             $(this).css({
                  borderColor : 'green',
             color : 'green'
             });
             $(this).next().css("display", "none");
         }
         else{
             $tot5=0;
             $(this).css({
                 borderColor : 'red',
                 color : 'red'
             });
             $(this).next().css("display", "block");
         }
     });
 
     $tel.keyup(function(){  
         if( /[0-9-()+]{10,10}/.test($tel.val())){
             $tot6=1;
             $(this).css({
                  borderColor : 'green',
             color : 'green'
             });
             $(this).next().css("display", "none");
         }
         else{
             $tot6=0;
             $(this).css({
                 borderColor : 'red',
                 color : 'red'
             });
             $(this).next().css("display", "block");
         }
     });
 
     function verifier(champ){
         if(champ.val() == ""){ // si le champ est vide
             
             $tot7=0;
             $erreur.css('display', 'block'); // on affiche le message d'erreur
             champ.css({ // on rend le champ rouge
                 borderColor : 'red',
                 color : 'red'
             });
        
         }
         else{
             $tot7=1;
         }
     }
     
     $envoi.click(function(e){
         e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi
 
         // puis on lance la fonction de vérification sur tous les champs :
         verifier($pseudo);
         verifier($prenom);
         verifier($nom);
         verifier($tel);
         verifier($mdp);
         verifier($confirmation);
         
         if($tot1==1 && $tot2==1 && $tot3==1 && $tot4==1 && $tot5==1 && $tot6==1 && $tot7==1 ){
             $erreur.css('display', 'none');
             $bravo.css('display', 'block');
         }
         else{
              $erreur.css('display', 'block');
         }
         
     });
 
     $reset.click(function(){
         $champ.css({ // on remet le style des champs comme on l'avait défini dans le style CSS
             borderColor : 'grey',
             color : '#555'
         });
         $erreur.css('display', 'none'); // on prend soin de cacher le message d'erreur
         $bravo.css('display', 'none'); // on prend soin de cacher le message du bravo
     });
 
 });
 