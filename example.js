for (var x = 0; x <= 17; x = x + 2) {
  console.log(2 * x + 7);
}
                       

// check out page 15 in Head First JavaScript for
// info about the substr() function below

var alpha = 'mpeuorwr';
var s1 = '';
var s2 = '';

for (var index = 0; index < alpha.length; index++) {
  if (index % 2 == 0) {
    s1 = s1 + alpha.substr(index, 1);
  } else {
    s2 = s2 + alpha.substr(index, 1);
  }
}

console.log(s1 + s2);


