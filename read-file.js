// read-file.js
const fs = require('fs');

// Créez le fichier welcome.txt avec le contenu "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node');

// Lisez et affichez les données du fichier
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);
