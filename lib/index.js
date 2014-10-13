/**
 *
 * Created by uur on 12/10/14.
 */


var mapCharacters = {
    "İ": "I",
    "ı": "i",
    "ş": "s",
    "Ş": "S",
    "ğ": "g",
    "Ğ": "G",
    "ç": "c",
    "Ç": "C",
    "ü": "u",
    "Ü": "U",
    "ö": "o",
    "Ö": "O"
};

var turkishCharacters = new RegExp(Object.keys(mapCharacters).join("|"), "g");

/**
 * Escape turkish characters with the likes of english ones.
 * @param text
 * @return {string|void}
 */
module.exports = function (text) {
    if ( !text ) {
        return text;
    }

    return text.replace(turkishCharacters, function(matched){
        return mapCharacters[matched];
    });
};