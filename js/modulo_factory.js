/**
 * Created with JetBrains WebStorm.
 * User: enricoalterani
 * Date: 09/11/15
 * Time: 15.43
 * To change this template use File | Settings | File Templates.
 */
angular.module("modulo_factory", [])
    .factory("somma2", function() {
        return function(a, b) { return a + b;}
    })
    .factory("utentiService", function() {
        var self = {};
        self.utenti = [{ id:1, nome: "Andrea",   cognome: "Rossi",  citta: "Roma"    },
            { id:2, nome: "Marco",    cognome: "Verdi",  citta: "Milano"  },
            { id:3, nome: "Giovanni", cognome: "Neri",   citta: "Napoli"  },
            { id:4, nome: "Roberto",  cognome: "Gialli", citta: "Palermo" }];
        return self;
    });
