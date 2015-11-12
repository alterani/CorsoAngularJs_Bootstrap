/**
 * Created with JetBrains WebStorm.
 * User: enricoalterani
 * Date: 09/11/15
 * Time: 15.18
 * To change this template use File | Settings | File Templates.
 */
angular.module("modulo_servizi", [])
    .service("somma1", function() {
        this.somma = function(a,b) { return a + b};
    })
    .service("elencoEsercizi", function() {
        this.esercizi = [
            {nome: "esercizio 1", codice: "1"},
            {nome: "esercizio 2", codice: "2"},
            {nome: "esercizio 3", codice: "3"},
            {nome: "esercizio 4", codice: "4"},
            {nome: "esercizio 5", codice: "5"},
            {nome: "esercizio 6", codice: "6"},
            {nome: "esercizio 7", codice: "7"},
            {nome: "esercizio 8", codice: "8"},
            {nome: "esercizio 9", codice: "9"},
            {nome: "esercizio 10", codice: "10"},
            {nome: "esercizio 11", codice: "11"},
            {nome: "esercizio 12", codice: "12"},
            {nome: "esercizio 13", codice: "13"},
            {nome: "esercizio 14", codice: "14"},
            {nome: "esercizio 15", codice: "15"}
        ];

        this.esercizioSelezionato = "";
    })
    .service("elencoCitta", function() {
        this.elenco  = [
            {nome: "Roma", regione: "Lazio"},
            {nome: "Latina", regione: "Lazio"},
            {nome: "Milano", regione: "Lombardia"},
            {nome: "Napoli", regione: "Campania"},
            {nome: "Como", regione: "Lombardia"},
            {nome:"Palermo", regione: "Sicilia"},
            {nome: "Caserta", regione: "Campania"},
            {nome: "Avellino", regione: "Campania"},
            {nome:"Trapani", regione: "Sicilia"},
            {nome:"Agrigento", regione: "Sicilia"}
        ];

        this.aggiungi = function(citta) {
            this.elenco.push(citta);
        };
    });

