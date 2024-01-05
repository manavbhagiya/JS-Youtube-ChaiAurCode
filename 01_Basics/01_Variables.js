const accountId = 144553
let accountEmail = "manav@google.com"
var accountPassword = "12345"
accountCity = "Rajkot"
let accountState;

// accountId = 2 // not allowed

accountEmail = "mb@mb.com"
accountPassword = "21212121"
accountCity = "Morbi"

console.log(accountId);


/* 
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])