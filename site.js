var namesToAges = {
    'Alyssa': 22,
    'Charley': 25,
    'Dan': 25,
    'Jeff': 20,
    'Kasey': 20,
    'Kim': 20,
    'Morgan': 25,
    'Ryan': 25,
    'Stef': 22
};

function rarestValue(data) {
  var rarest;
  var count = {};
  for (var key in data) {
    if (data[key] in count) {
      count[data[key]]++
    } else {
        count[data[key]] = 1
    }
  }
  rarest = Object.keys(count).reduce((a,b) => count[a]<count[b]?a:b);
  return "The rarest value is "+rarest+", which appears "+count[rarest]+" times."
}

console.log(rarestValue(namesToAges));