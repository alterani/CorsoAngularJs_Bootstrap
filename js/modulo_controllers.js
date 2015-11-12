/**
 * Created with JetBrains WebStorm.
 * User: enricoalterani
 * Date: 09/11/15
 * Time: 15.18
 * To change this template use File | Settings | File Templates.
 */
angular.module("modulo_controller",[])
    .controller("userController", function($scope, filterFilter, $http, somma1, somma2, elencoEsercizi) {
        $scope.utente = {nome: "Mario", cognome: "Rossi", eta: 0, password: "ee", cittadinanzaItaliana: "si", sesso: "maschio" };
        $scope.grafica = {colore: "rosso", stile: "normale"};
        $scope.elencoNomi = ["Andrea", "Marco", "Giovanni", "Roberto"];
        $scope.persone = [
            { nome: "Andrea",   cognome: "Rossi",  citta: "Roma"    },
            { nome: "Marco",    cognome: "Verdi",  citta: "Milano"  },
            { nome: "Giovanni", cognome: "Neri",   citta: "Napoli"  },
            { nome: "Roberto",  cognome: "Gialli", citta: "Palermo" }
        ];
        $scope.elencoCitta = [
            {codice: "RM", nome: "Roma", regione: "Lazio"},
            {codice: "LT", nome: "Latina", regione: "Lazio"},
            {codice: "NA", nome: "Napoli", regione: "Campania"},
            {codice: "CE", nome: "Caserta", regione: "Campania"}

        ];
        $scope.filtro = "a";
        $scope.numeroElementi = filterFilter($scope.elencoCitta, {nome: $scope.filtro}).length;

        $scope.invia = function(data){
            $http.post("/elaboraForm", data)
                .success(function(){
                    //istruzioni per success
                    alert("Ciamata Post /elaboraForm: Dati correttamente inviati!");
                })
                .error(function(){
                    //istruzioni per error
                    alert("Ciamata Post /elaboraForm: Errore invio dati!");
                });
        };

        $scope.saluta = function() {
            return "Buongiorno " + $scope.utente.nome + " " + $scope.utente.cognome + "!"
        };

        $scope.risultato = 0;
        $scope.sommare = function() {
            $scope.risultato = $scope.numero1 + $scope.numero2;

        };

        $scope.x_servizio = somma1.somma(1,2);
        $scope.y_factory = somma2(1,2)

    })
    .controller("elencoController", function($scope, $http, elencoCitta, elencoEsercizi) {
        $http.get("/elencoCitta",
            {
                timeout: 30000,
                headers: {
                    "Authorization": "Basic bm9tZXV0ZW50ZTpwYXNzd29yZA=="}
            }

        )
            .success(function(data){
                $scope.elencoCitta = data;
            })
            .error(function(){
                alert("Si è verificato un errore: Chiamata Get su /elencoCitta.");
            });

    })
    .controller("cittaController", function($scope, $http, elencoCitta, elencoEsercizi) {

        $scope.aggiungiCitta = function() {

            $http.post("/elencoCitta", {nome: $scope.nome, regione: $scope.regione})
                .success(function(){
                    alert("Notifica: Post su /elencoCitta eseguito con successo");

                })
                .error(function(){
                    alert("Errorre: Post su /elencoCitta si è verificato un errore");
                });
        };
    })
    .controller("controllerEsercizi", function($scope, elencoEsercizi){
        $scope.esercizioScelto = elencoEsercizi.esercizioSelezionato;
        $scope.listaEsercizi = elencoEsercizi.esercizi;

    })
    .controller("greetingController", function($scope, elencoEsercizi) {
        $scope.salutiamoci = {generale: "Ciao a tutti"};
    })
    .controller("listaUtentiCtrl", function($scope, utentiService, utentiServiceNoreg) {
        $scope.utenti = utentiService.utenti;
        $scope.utentiNonRegistrati = utentiServiceNoreg.utenti;
    })
    .controller("utenteCtrl", function($scope, $routeParams, utentiService, filterFilter) {
        var userId = $routeParams.userId;
        $scope.utente = filterFilter(utentiService.utenti, { id: userId })[0];
    })
    .controller("myCtrl2", function($scope) {
  
    $scope.persona = { nome: "Mario"};
     
    $scope.$watch("persona", function(newValue, oldValue) {
     
        if (newValue != oldValue)
            alert("Il nuovo valore eeè " + newValue.nome);
    },true);
});
