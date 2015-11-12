angular.module("direttive_personalizzate", []) 
 /*
restrict: Valore	Significato	Esempio d’uso
E	Elemento	<titolo></titolo>
A	Attributo	<div titolo></div>
C	Classe	<div class="titolo"></div>
M	Commento	<!-- directive: titolo -->
 */
  .directive("enricoListaUtenti", function() { 
    return { 
    restrict: "AE", 	
     //template: "<p>ritornato da direttiva custom</p>"
     //templateUrl: "js/test.html"
     templateUrl: 'templates/listaUtenti2.html',
     scope: {
     	demmiunelenco: "=cityList"
     },
     replace: true
    }; 
  })
  .directive("titoloenrico", function() { 
    return { 
    restrict: "AE", 	
     template: "<h1>Questo è un titolo</h1>"
    }; 
  }); 


