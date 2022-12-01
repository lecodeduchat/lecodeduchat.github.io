"use strict";

let array = [34, 76, 32, 90];
console.log(array);

// Je veux supprimer le nombre 32 qui est en position 2 dans le tableau
// .splice(argument1,argument2) argument 1 = position de l'élément et argument 2 je supprime un seul élément!!!
array.splice(2, 1);
console.log(array);
