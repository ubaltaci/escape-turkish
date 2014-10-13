##Escape Turkish characters with the equivalent english characters.

* install

`npm install escape-turkish`

* usage

````javascript
var EscapeTurkish = require("escape-turkish");`
console.log(EscapeTurkish("Şşşşh"));
// prints "Ssssh"
````

* Match set:

````
{
    "İ": "i",
    "ı": "i",
    "ş": "s",
    "Ş": "S",
    "ğ": "g",
    "Ğ": "G",
    "ç": "c",
    "Ç": "c",
    "ü": "u",
    "Ü": "U",
    "ö": "o",
    "Ö": "O"
}
````
